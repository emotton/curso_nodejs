window.onload = function(){
    // Container
    var divContainer = document.createElement('div');
    divContainer.id = "divContainer";
    divContainer.className = "container";
    // Div
    var div1 = document.createElement('div');
    div1.id = "div1";
    div1.style.border = "thick solid #0000ff";
    div1.style.width = "240px";
    div1.style.textAlign = "center";
    // P
    var p = document.createElement('p');
    p.style.color = "#000";
    p.style.fontSize = "20px";
    p.innerText = "Eu fui criado pelo typescript";
    // Appends
    div1.appendChild(p);
    divContainer.appendChild(div1);
    document.body.appendChild(divContainer);

};