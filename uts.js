function updateClock() {
    const now = new Date();

    let h = now.getHours();
    let m = now.getMinutes();
    let s = now.getSeconds();

    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;

    let ampm = h >= 12 ? "PM" : "AM";

    let hour12 = h % 12;
    hour12 = hour12 ? hour12 : 12;

    document.getElementById("clock").innerHTML = `${hour12}:${m}:${s} ${ampm}`;

    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    let dayName = days[now.getDay()];
    let monthName = months[now.getMonth()];
    let date = now.getDate();

    document.getElementById("date").innerHTML = `${dayName}, ${monthName} ${date}`;
}

setInterval(updateClock, 1000);
updateClock();
