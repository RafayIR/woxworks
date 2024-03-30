let trimmedPathname = window.location.pathname.replace(/^\/|\$/g, '');
let path = document.getElementsByClassName('nav-link')


for (let i = 0; i < path.length; i++) {

    if (path[i].getAttribute('href') === trimmedPathname) {
        path[i].classList.add('active');
        console.log("Match found at index:", i);
        // You can do further operations here if needed
    }
}

// Function to show loading overlay
function showLoadingOverlay() {
    document.getElementById('loadingOverlay').style.display = 'flex';
}

// Function to hide loading overlay
function hideLoadingOverlay() {
    document.getElementById('loadingOverlay').style.display = 'none';
}

// Add event listener for when all scripts are loaded
window.addEventListener('load', function () {
    hideLoadingOverlay();
});

// Add event listeners for individual script load
document.addEventListener('DOMContentLoaded', function () {
    showLoadingOverlay();
});

// Check if all external scripts are loaded
let scriptCount = 0;
const scriptUrls = [
    "https://cdn.jsdelivr.net/npm/less",
    "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.js",
    "https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js",
    "https://cdnjs.cloudflare.com/ajax/libs/wow/1.1.2/wow.min.js",
    "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.js"
];

scriptUrls.forEach(function (url) {
    const script = document.createElement('script');
    script.src = url;
    script.onload = function () {
        scriptCount++;
        if (scriptCount === scriptUrls.length) {
            hideLoadingOverlay();
        }
    };
    document.head.appendChild(script);
});



