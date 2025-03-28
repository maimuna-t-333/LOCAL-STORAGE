// const pookie=10;

// localStorage.setItem("pookie","10")

// console.log(localStorage.getItem("pookie"))

const handleAddToStorage=()=>{

    // const name="ami"
    // localStorage.setItem("rumaisa",name)
    const person={
        name:"hero alom",
        age:10,
        friends:["rohim"]

    }

    const convertedTOString=JSON.stringify(person)
    // const backToObject=JSON.parse(convertedTOString)
    // console.log(backToObject.name)
    localStorage.setItem("rumaisa",convertedTOString)


}

const data=localStorage.getItem("rumaisa");
// console.log(data)
const converted=JSON.parse(data)
console.log(converted)