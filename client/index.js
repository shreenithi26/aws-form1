const firstName = document.getElementById("fname")
const lastName = document.getElementById("lname")
const email = document.getElementById("email")
const phone = document.getElementById("phone")
const add1 = document.getElementById("add1")
const add2 = document.getElementById("add2")
const state = document.getElementById("state")
const city = document.getElementById("city")
const form = document.getElementById("form")

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const data = {
        firstname : firstName.value,
        lastname : lastName.value,
        email : email.value,
        phone: phone.value,
        add1 : add1.value,
        add2 : add2.value,
        city : city.value,
        state : state.value
    }

    if((firstName.value != "")&&(lastName.value != "")){
        await axios.post("http://localhost:3000/data", data)
        .then((res) => console.log(res.data))
    }

})