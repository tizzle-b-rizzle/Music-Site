function openReview(a) {
    switch (a) {
        case 1:
            review = document.getElementById("album-review-page-desktop-album-1");
            review.style.display = "flex";
            break;
        case 2:
            review = document.getElementById("album-review-page-desktop-album-2");
            review.style.display = "flex";
            break;
    }
}

function closeReview(b) {
    switch (b) {
        case 1:
            review = document.getElementById("album-review-page-desktop-album-1");
            review.style.display = "none";
            break;
        case 2:
            review = document.getElementById("album-review-page-desktop-album-2");
            review.style.display = "none";
            break;
    }
}
