
let currentImages = [];
let currentIndex = 0;

// Filter images by category
function filterImages(category, button) {

    let images = document.querySelectorAll(".gallery img");

    images.forEach(img => {
        if (category === "all" ||
            img.classList.contains(category)) {
            img.style.display = "block";
        } else {
            img.style.display = "none";
        }
    });

    document.querySelectorAll(".filters button")
        .forEach(btn => btn.classList.remove("active"));

    button.classList.add("active");
}

// Open lightbox
function openLightbox(image) {

    currentImages = Array.from(
        document.querySelectorAll(".gallery img")
    ).filter(img => img.style.display !== "none");

    currentIndex = currentImages.indexOf(image);

    showImage();

    document.getElementById("lightbox").style.display = "flex";
}

// Display selected image
function showImage() {
    document.getElementById("lightbox-img").src =
        currentImages[currentIndex].src;
}

// Next and Previous navigation
function changeImage(direction) {

    currentIndex += direction;

    if (currentIndex >= currentImages.length) {
        currentIndex = 0;
    }

    if (currentIndex < 0) {
        currentIndex = currentImages.length - 1;
    }

    showImage();
}

// Close lightbox
function closeLightbox() {
    document.getElementById("lightbox").style.display = "none";
}

// Keyboard navigation
document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {
        closeLightbox();
    }

    if (document.getElementById("lightbox").style.display === "flex") {
        if (event.key === "ArrowRight") changeImage(1);
        if (event.key === "ArrowLeft") changeImage(-1);
    }
});
