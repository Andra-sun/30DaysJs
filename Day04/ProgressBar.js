function ProgressBar() {
    let scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;
    let scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
    let scrollPercentage = (scrollTop / scrollHeight) * 100;

    let progressBar = document.getElementById("progressBar").style;
    progressBar.width = scrollPercentage + "%";


}

window.onscroll = function () {
    ProgressBar();
};
