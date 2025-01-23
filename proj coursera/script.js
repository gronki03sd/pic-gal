// Function to add tabindex to all images
function addTabIndex() {
    const images = document.querySelectorAll('img');
    images.forEach((img, index) => {
        img.setAttribute('tabindex', index + 1);
    });
    console.log("Tabindex attributes added to all images.");
}

// Event handlers for interactivity
function handleFocus(event) {
    console.log("Image focused:", event.target.alt);
}

function handleBlur(event) {
    console.log("Image lost focus:", event.target.alt);
}

function handleMouseOver(event) {
    console.log("Mouse entered:", event.target.alt);
}

function handleMouseLeave(event) {
    console.log("Mouse left:", event.target.alt);
}

// Add event listeners to all images
window.onload = function () {
    addTabIndex();
    const images = document.querySelectorAll('img');
    images.forEach((img) => {
        img.addEventListener('focus', handleFocus);
        img.addEventListener('blur', handleBlur);
        img.addEventListener('mouseover', handleMouseOver);
        img.addEventListener('mouseleave', handleMouseLeave);
    });
    console.log("Event listeners added to all images.");
};
