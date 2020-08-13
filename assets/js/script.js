$ = document.getElementById

function openReview(a) {
    switch (a) {
        case 1:
            $("album-image").style.backgroundColor = red;
            break;
        default:
            $("album-image").src = "assets/images/aviary.jpg";
            break;
    }
}
