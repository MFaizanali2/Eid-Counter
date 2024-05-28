
let eid_date = new Date("june 16, 2024 00:00:00").getTime(); 

let countdown = setInterval(() => {

    let number = document.getElementById(number);

    // define current date
    let now = new Date().getTime();

    // difference current and future date
    let diff = eid_date - now ;

    // get day hour time and second
    let day = Math.floor(diff / (1000 * 60 *60 *24));
    let hour = Math.floor(diff % (1000 * 60 *60 *24) / (1000 *60 *60));
    let minute = Math.floor(diff % (1000 * 60 *60 ) / (1000 *60));
    let second = Math.floor(diff % (1000 * 60 ) / (1000));
    number.value = `${day} ${hour} ${minute} ${second}`

},1000)