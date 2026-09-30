import { LightningElement } from 'lwc';

export default class QuizzApp extends LightningElement {
  selected={}//for storing answers
  myQuestions = [
    {
      id: "Question1",
      question: "Which of the following is not a template loop in LWC?",
      answers: {
        a: "for:each",
        b: "iterator",
        c: "map"
      },
      correctAnswer: "c"
    },
    {
      id: "Question2",
      question: "Which of the following is invalid in LWC component folder?",
      answers: {
          a: "component.js",
          b: "apex",
          c: "component.svg"
        },
      correctAnswer: "b"
    },
    {
      id: "Question3",
      question: "Which method is used to navigate in LWC?",
      answers: {
        a: "navigateTo",
        b: "NavigationMixin",
        c: "goTo"
      },
      correctAnswer: "b"
    }
  ]
  correctAnswers = 0;
  submitted = false
  changeHandler(event){
    console.log("name", event.target.name);
    console.log("value", event.target.value);
    console.log(event.target)
    const {name, value} = event.target
    this.selected ={...this.selected, [name]:value}
  }

  get allNotSelected(){
    return !(Object.keys(this.selected).length === this.myQuestions.length)
  }

  submitHandler(event){
    event.preventDefault();
    let tempArr = this.myQuestions.filter(item => this.selected[item.id] === item.correctAnswer)
    this.correctAnswers = tempArr.length;
    this.submitted = true;
  }
  resetHandler(){
    this.selected ={}
    this.submitted = false;
    this.correctAnswers = 0;
  }
}