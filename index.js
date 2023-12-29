function changeCity() {
    let city = prompt("what city do you live in");
    let temperature = prompt("what temperature is it");
    let heading = document.querySelector("h1");
    if (temperature < 0) {

heading.innerHTML = 
"☹️<br />Currently " + temperature + "°c in " +  city;
} else {
    heading.innerHTML = 
    " 😄 <br />Currently " + temperture + "°c in mm" +  city;
}
}
let changeButton = document.querySelector("button");
changeButton.addEventListener("click", changeCity);