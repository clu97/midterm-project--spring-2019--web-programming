$(document).ready(function () {
    $(`.sound`).hover(function () {
        gocrazy.play();
    }, function () {
        gocrazy.load();
    });
});