let trimmedPathname = window.location.pathname.replace(/^\/|\$/g, '');
let path = document.getElementsByClassName('nav-link')


for (let i = 0; i < path.length; i++) {

    if (path[i].getAttribute('href') === trimmedPathname) {
        path[i].classList.add('active');
         console.log("Match found at index:", i);
        // You can do further operations here if needed
    }
}



