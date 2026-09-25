let obj = {
  id: 'usr_9482710a',
  isActive: true,
  profile: {
    firstName: 'Alex',
    lastName: 'Rivera',
    age: 28,
    avatarUrl: 'https://example.com',
  },
}
//Object.keys()
console.log(Object.keys(obj))

//Object.values()
console.log(Object.values(obj))

//JSON.stringify()
console.log(JSON.stringify(obj))

//JSON.parse()
console.log(JSON.parse(JSON.stringify(obj)))
