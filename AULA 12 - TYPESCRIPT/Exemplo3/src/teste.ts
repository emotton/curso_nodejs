window.onload = function(){
    // Container
    var divContainer = document.createElement('div');
    divContainer.className = "container";
    // Div
    var div1 = document.createElement('div');
    div1.style.border = "thick solid #0000ff";
    div1.style.width = "240px";
    div1.style.textAlign = "center";
    div1.style.backgroundColor = "#000";
    // P
    var p = document.createElement('p');
    p.style.color = "#FFFF00";
    p.style.fontSize = "20px";
    p.innerText = "Eu fui criado pelo typescript";
    // Appends
    div1.appendChild(p);
    divContainer.appendChild(div1);
    document.body.appendChild(divContainer);
};