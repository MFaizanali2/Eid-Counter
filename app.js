
let eid_date = new Date("june 17, 2024 00:00:00").getTime(); 

let countdown = setInterval(() => {

    // let number = document.getElementById(number);

    // define current date
    let now = new Date().getTime();

    // difference current and future date
    let diff = eid_date - now ;

    // get day hour time and second
    let day = Math.floor(diff / (1000 * 60 *60 *24)).toString().padStart(2,0);
    let hour = Math.floor((diff % (1000 * 60 *60 *24)) / (1000 *60 *60)).toString().padStart(2,0);
    let minute = Math.floor((diff % (1000 * 60 *60 )) / (1000 *60)).toString().padStart(2,0);
    let second = Math.floor((diff % (1000 * 60 )) / (1000)).toString().padStart(2,0);
    let count = `${day} : ${hour} : ${minute} : ${second}`;
    document.getElementById("number").textContent = count;

    if (diff < 0) {
        clearInterval(countdown);
        document.getElementById("number").innerHTML = "Eid Mubarak!";
    }

},1000)