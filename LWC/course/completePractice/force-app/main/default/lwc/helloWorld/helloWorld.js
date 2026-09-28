import { LightningElement, track } from 'lwc';

export default class HelloWorld extends LightningElement {
  name;
  age = 30;
  fullName = 'shr pas';
  showData = true;
  details={
    name:"dummy name",
    place: 'Melbourne'
  }
  userList = ['a', 'b', 'c'];

  address = {
    city: "Melbourne",
    postcode: 309,
    country: 'Australia',
    more:{
      state: 'andhra',
    }
  }

  users =['john', 'smith', 'jane'];

arrObjs = [
            {name: 'shr', age: 30  },
            {name: 'sam', age: 25 },
            {name: 'ram', age: 40 },  
            {name: 'sita', age: 35 }
          ];

  changeHandler(event){
    this.name = event.target.value;
    console.log(this.name)
  }

  changeObjectHandler(event){
    this.address.more.state = event.target.value
    this.address = {...this.address, more: { ...this.address.more, state: event.target.value }}
    console.log(this.address.more.state )
  }
  get firstUser(){
    return this.users[0]
  }

  handleClick(){
    this.showData = !this.showData;
  }
}