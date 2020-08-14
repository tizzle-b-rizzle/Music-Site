var $ = document.getElementById

function openReview(a) {
    switch (a) {
        case 1:
            document.getElementById("entire-page-container").style.backgroundColor = "red";
            break;
        default:
            $("album-image").src = "assets/images/aviary.jpg";
            break;
    }
}
