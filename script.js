var colors = ["#00ff0d", "#00c90a", "#009107", "#006105", "#003d03"];

let element = document.getElementsByTagName("h1")[0]

let text = element.innerHTML;

let offset = 0;

function update() {
    let newCont = '';

    for (var i = 0; i < text.split("").length; i++) {
        let color = colors[(offset - i) % colors.length];
        newCont += `<span style="color:${color}">` + text.charAt(i) + '</span>';
    }

    element.innerHTML = newCont;
    offset++;
}

var speed = 100;
setInterval(update, speed);