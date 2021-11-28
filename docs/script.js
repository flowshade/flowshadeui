$(document).ready(() => {
    $.get("./components.json", (data) => {
        console.log(JSON.stringify(data))
        let template = document.getElementById("categories").innerHTML;
        let rendered = Mustache.render(template, data);
        document.getElementById("categories").innerHTML = rendered;
        let template2 = document.getElementById("display").innerHTML;
        let rendered2 = Mustache.render(template2, data);
        document.getElementById("display").innerHTML = rendered2;
    })
})