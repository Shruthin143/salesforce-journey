
import { LightningElement } from 'lwc';
const BOOK_URL = 'https://openlibrary.org/search.json';

export default class BookSearch extends LightningElement {

    query;
    booksList;
    errorMessage;
    isLoading = false;
    sortedBy;
    sortedDirection = 'asc';
    columns = [
        { label: 'Book ID', fieldName: 'id', type: 'text',sortable: true },
        { label: 'Book Title', fieldName: 'title', type: 'text',sortable: true },
        { label: 'Author', fieldName: 'author', type: 'text' },
        { label: 'Publish Year', fieldName: 'publishYear', type: 'number' },
        { label: 'Book Cover', fieldName: 'coverUrl', type: 'url' }
    ];
    fetchFunHandler() {

        this.isLoading = true;
        this.errorMessage = '';

        const url =
            `${BOOK_URL}?q=${encodeURIComponent(this.query)}` +
            `&fields=key,title,author_name,first_publish_year,cover_i` +
            `&limit=10`;

        fetch(url)
            .then(res => {
                if (!res.ok) {
                    throw new Error(`HTTP Error: ${res.status}`);
                }
                return res.json();
            })
            .then(data => {
                this.booksList = data.docs.map(book => {
                    return {
                        id: book.key,
                        title: book.title,
                        author: book.author_name
                            ? book.author_name.join(', ')
                            : 'Unknown Author',
                        publishYear: book.first_publish_year || 'Unknown',
                        coverUrl: book.cover_i
                            ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
                            : null
                    };
                });
                console.log(JSON.stringify(this.booksList, null, 2));
            })
            .catch(error => {
                this.errorMessage = error.message;
                console.log(error);
            })
            .finally(() => {
                this.isLoading = false;
            });
    }
    handleSearchKeyChange(event){
      this.query = event.target.value;
    }



handleSort(event) {

    const { fieldName, sortDirection } = event.detail;

    this.sortedBy = fieldName;
    this.sortedDirection = sortDirection;

    this.booksList = [...this.booksList].sort((a, b) => {

        let valueA = a[fieldName] || '';
        let valueB = b[fieldName] || '';

        if (typeof valueA === 'number' && typeof valueB === 'number') {
            return sortDirection === 'asc'
                ? valueA - valueB
                : valueB - valueA;
        }

        valueA = String(valueA).toLowerCase();
        valueB = String(valueB).toLowerCase();

        return sortDirection === 'asc'
            ? valueA.localeCompare(valueB)
            : valueB.localeCompare(valueA);

    });
  }



}
