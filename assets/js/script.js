function openReview(a) {
    switch (a) {
        case 1:
            cross = document.getElementById('exit-cross');
            cross.style.backgroundColor = 'red';
            break;
        default:
            document.getElementById("entire-page-container").style.backgroundColor = "blue";
            break;
    }
}
