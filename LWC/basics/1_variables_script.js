// console.log('Testing')
//************************Variables****************************8 */
//***************Var Keyword */
//Support globak and function but not block scopes
//It can be declared
// let course = 'Zero to Hero'
// console.log(course)
// course = 'Changed'
// console.log(course)

//***************Let Keyword */
//It doesnt allow to recreate the same variable
//Let keyword support global scope, function and block level scope but dont create property on window
// let course = 'Z to H'
// let course = 'm to h' //throws error
// console.log(window.course) //undefined because global scope is not supported

// function abc() {
//   let x = 'shr'
//   console.log(x)
//   if (2 == 2) {
//     let y = 'yhe'
//     console.log(y)
//   }
// }
// abc()
// console.log(x) //throws error because it is function scope

//***************Const Keyword */
//It doesnt allow to recreate the same variable
//doesnt allow to change the value i.e we cannot reassign the value again
//Const keyword supports global scope, function and block level scope similar to let keyword dont create property on window
console.log('test')
