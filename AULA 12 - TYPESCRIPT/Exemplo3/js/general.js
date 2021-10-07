$('#div1').ready(function(){
    $("#div1").css('background-color', 'orange');
    $.get("http://localhost:3000/api/clientes", function(data, status){
        var ul = document.createElement('ul');
        data.forEach(cliente => {
           var li = document.createElement('li');
           li.innerText = cliente.nome;
           ul.appendChild(li);
       });
       $("#div1").append(ul);
    });
});
