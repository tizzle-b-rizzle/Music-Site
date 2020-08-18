function openReview(a) {
    switch (a) {
        case 1:
            review = document.getElementById("album-review-page-desktop-album-1");
            review.style.removeProperty = ("display");
            review.style.display = "flex";
            break;
    }
}

function closeReview(b) {
    switch (b) {
        case 1:
            review = document.getElementById("album-review-page-desktop-album-1");
            review.style.removeProperty = ("display");
            review.style.display = "none";
            break;
    }
}
