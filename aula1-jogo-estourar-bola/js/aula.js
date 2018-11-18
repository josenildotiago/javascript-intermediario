function addBola(){
    var bola = document.createElement("div");
    bola.setAttribute("class", "bola");
    
    var p1 = Math.floor(Math.random()*500);
    var p2 = Math.floor(Math.random()*400);
    var idcor = Math.floor(Math.random()*11);
    var cores = ["green","red","orange","blue","yellow","silver","black","gold","violet","pink","marron"];
    var cor = cores[idcor];
    //var cor = Math.floor(Math.random()*123456) + 654321;
    //console.log(cor);

    bola.setAttribute("style","left:"+p1+"px;top:"+p2+"px;background-color: "+cor+";");
    bola.setAttribute("onclick", "estourar(this)");

    document.body.appendChild(bola);
}
function estourar(elemento){
    document.body.removeChild(elemento);
}
function iniciar(){
    setInterval(addBola,1000);
}
