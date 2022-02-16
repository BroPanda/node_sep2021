const fs = require("fs");
const path = require("path");

fs.mkdir(path.join(__dirname, `main`, `online`), {recursive: true}, err => {
    if (err) {
        console.log(err);
        throw err;
    }
})

fs.mkdir(path.join(__dirname, `main`, `inPerson`), {recursive: true}, err => {
    if (err) {
        console.log(err);
        throw err;
    }
})


let onlineUsers = [
    {name: "Andrii", age: 22, city: "Lviv"},
    {name: "Kokos", age: 23, city: "Lviv"},
    {name: "Chubaka", age: 25, city: "Lviv"}
]

let inPersonUsers = [
    {name: "Oleh", age: 21, city: "Lviv"},
    {name: "Lenny", age: 23, city: "Lviv"},
    {name: "Goga", age: 20, city: "Lviv"}
]


const userToText = (user) => `name: ${user.name}, age: ${user.age}, city: ${user.city}`

const usersToText = (usersArr, userToText) => {
    let str = ``;
    for (const user of usersArr) {
        str += `${userToText(user)}\n`
    }
    return str
}


fs.writeFile(path.join(__dirname, `main`, `online`, 'online.txt'), `${usersToText(onlineUsers, userToText)}`, err => {
    if (err) {
        console.log(err);
        throw err;
    }
})

fs.writeFile(path.join(__dirname, `main`, `inPerson`, 'inPerson.txt'), `${usersToText(inPersonUsers, userToText)}`, err => {
    if (err) {
        console.log(err);
        throw err;
    }
})

const inPersonTxtPath = path.join(__dirname, `main`, `inPerson`, 'inPerson.txt')
const onlineTxtPath = path.join(__dirname, `main`, `online`, 'online.txt')


const reverseData = () => {
    fs.readFile(inPersonTxtPath,'utf8',(err,data)=>{
        if(err){
            console.log(err)
            throw err
        }
        fs.appendFile(onlineTxtPath,data,{flag: 'w'},(err)=>{
            if (err){
                console.log(err)
                throw err
            }
        })
    })

    fs.readFile(onlineTxtPath,'utf8',(err,data)=>{
        if(err){
            console.log(err)
            throw err
        }
        fs.appendFile(inPersonTxtPath,data,{flag: 'w'},(err)=>{
            if (err){
                console.log(err)
                throw err
            }
        })
    })
}


reverseData()

