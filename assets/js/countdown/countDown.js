function startCountDown() {
    // Set the countdown date
    let countDownDate = new Date('April 11, 2024 15:37:25').getTime();

    // Update the countdown every second
    let x = setInterval(() => {
        // Get the current time
        let now = new Date().getTime();

        // Calculate the distance between now and the countdown date
        let distance = countDownDate - now;



        // Calculate days, hours, minutes and seconds
        let days = Math.floor(distance / (1000 * 60 * 60 * 24));
        let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Display the result
        document.getElementById("dayTen").innerText = Math.floor(days / 10);
        document.getElementById("dayUnit").innerText = days % 10;

        document.getElementById("hourTen").innerText = Math.floor(hours / 10);
        document.getElementById("hourUnit").innerText = hours % 10;

        document.getElementById("minuteTen").innerText = Math.floor(minutes / 10);
        document.getElementById("minuteUnit").innerText = minutes % 10;

        document.getElementById("secondTen").innerText = Math.floor(seconds / 10);
        document.getElementById("secondUnit").innerText = seconds % 10;


        // Check if the countdown is over
        if (distance <= 0) {

            document.getElementById("countdown").innerHTML = "EXPIRED";
            return; // Exit the function
        }
    }, 1000);
}

startCountDown();
