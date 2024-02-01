let btn1 = document.querySelector("#btn1");
let btn2 = document.querySelector("#btn2");

btn1.addEventListener("mousedown", function(){

    console.log("Apetou o botao");
});

btn1.addEventListener("mouseup", function(){

    console.log("Soltou o botao");
});

btn2.addEventListener("dblclick", function(){
    console.log("Duplo click");
})

btn2.addEventListener("contextmenu", function(e){

    e.preventDefault();
    console.log("Botão direito");
});