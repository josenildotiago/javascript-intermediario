function addBola(){
    var bola = document.createElement("div");
    bola.setAttribute("class", "bola");
    
    var p1 = Math.floor(Math.random()*500);
    var p2 = Math.floor(Math.random()*400);
    var idcor = Math.floor(Math.random()*11);
    var cores = ["green","red","orange","blue","yellow","silver","black","gold","violet","pink","marron"];
    var cor = cores[idcor];
    var idcor2 = Math.floor(Math.random()*11);
    var cores2 = ["green","red","orange","blue","yellow","yellow","white","gold","violet","pink","white"];
    var cor2 = cores2[idcor2];
    var grad = Math.floor(Math.random()*6);
    var corgrad = ["45deg","to right","to bottom","to left","to top","90deg"];
    var cores = corgrad[grad];
    //var cor = Math.floor(Math.random()*123456) + 654321;
    //console.log(cor);

    //bola.setAttribute("style","left:"+p1+"px;top:"+p2+"px;background-color: "+cor+";");
    bola.setAttribute("style","left:"+p1+"px;top:"+p2+"px;background-image: linear-gradient("+cores+", "+cor+","+cor2+");");
    //background-image: linear-gradient(to bottom, white, purple);
    bola.setAttribute("onclick", "estourar(this)");

    document.body.appendChild(bola);
}
function estourar(elemento){
    document.body.removeChild(elemento);
    document.getElementById("placar").innerHTML++;
}
function iniciar(){
    setInterval(addBola,1000);
}
