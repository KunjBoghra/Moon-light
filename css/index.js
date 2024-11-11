document.addEventListener('DOMContentLoaded', function () {
    let bg = document.getElementById("bg");
    let moon = document.getElementById("moon");
    let mountain = document.getElementById("mountain");
    let road = document.getElementById("road");
    let text = document.getElementById("text");

    window.addEventListener('scroll', function () {
        var value = window.scrollY;

        if (bg) bg.style.top = value * 0.5 + 'px';
        if (moon) moon.style.left = value * 0.5 + 'px';
        if (mountain) mountain.style.top = -value * 0.15 + 'px';
        if (road) road.style.top = value * 0.15 + 'px';
        if (text) text.style.top = value * 1 + 'px';
    });
});
