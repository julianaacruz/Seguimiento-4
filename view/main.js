let cuadrado=[];

let circulos=[];
let pantalla;
let numeroSeleccionado;
let circulosPermitidos;
function setup(){
    
    createCanvas(600,400);
    pantalla=0;
    numeroSeleccionado=0;
    circulosPermitidos=false;



}

function draw(){
    
    background(0);
    
    if(pantalla==0){
        
        fill(255);
        textSize(14);
        text("Escoge un numero", width/2-50, height/2-50);
        rect(width/2-60,height/2,120,50);
        fill(0);
        textSize(25);
        text(numeroSeleccionado,width/2,height/2+30);
        fill(255);
        rect(width/2-150,height/2,50,50);
        fill(0);
        textSize(25);
        text("	↑",width/2-150,height/2+30);
        fill(255);
        rect(width/2+130,height/2,50,50);
        fill(0);
        textSize(25);
        text(	"↓",width/2+150,height/2+30);
        
        
        fill(255);
        rect(width/2-60,height/2+100,120,50);
        fill(0);
        textSize(14);
        text(	"Continuar",width/2-50,height/2+120);
        crearCuadrados();
        crearCirculos();

        // print(mouseX+"//"+mouseY);
        
    }else if(pantalla==1){
        
        
        pintarCuadrados();
        moverCuadrados();
        
        fill(255);
        rect(width/2-200,300,70,30);
        fill(0);
        textSize(14);
        text(	"Agregar",width/2-190,height/2+120);
        
        fill(255);
        rect(width/2-100,300,70,30);
        fill(0);
        textSize(14);
        text(	"Eliminar",width/2-90,height/2+120);
        
        fill(255);
        rect(width/2+100,300,70,30);
        fill(0);
        textSize(14);
        text(	"Doblar",width/2+110,height/2+120);
        
        
        fill(255);
        rect(width/2+100,350,120,30);
        fill(0);
        textSize(14);
        text(	"Crear circulos",width/2+100,height/2+170);
        


        if(circulosPermitidos==true){


            pintarCirculos();
            moverCirculos();
        }
        
        //fill(255);
        
        // cuadrado.display();
        // cuadrado.move();
    }
    
    
}

function crearCuadrados(){
    for(var i=0;i<numeroSeleccionado;i++){
        cuadrado[i]=new Cuadrado(30+i*30,50,20);
    }
}

function crearCirculos(){
    for(var i=0;i<numeroSeleccionado;i++){
        circulos[i]=new Circulo(30+i*30,150,20);
    }
}

function pintarCuadrados(){
    for(var i=0;i<cuadrado.length;i++){
        
        
        cuadrado[i].display();
    }
}

function pintarCirculos(){
    for(var i=0;i<circulos.length;i++){
        circulos[i].display();
    }
}

function moverCuadrados(){
    for(var i=0;i<cuadrado.length;i++){
        cuadrado[i].move();
    }
    
}

function moverCirculos(){
    for(var i=0;i<circulos.length;i++){
        circulos[i].move();
    }
    
}

function mouseClicked(){
    
    
    if(mouseX>150 && mouseX<200 && mouseY>200 && mouseY<250){
        
        if(numeroSeleccionado<10){
            numeroSeleccionado+=1;
        }
    }
    
    if(mouseX>430 && mouseX<480 && mouseY>200 && mouseY<250){
        
        if(numeroSeleccionado>0){
            numeroSeleccionado-=1;
        }
    }
    
    if(mouseX>239 && mouseX<357 && mouseY>299 && mouseY<347){
        
        if(numeroSeleccionado>0 && numeroSeleccionado<10){
            pantalla=1;
        }
    }
    
    
    
    //agregar
    if(mouseX>100 && mouseX<170 && mouseY>300 && mouseY<330){
        if(numeroSeleccionado<10 && numeroSeleccionado>1){
            cuadrado.push(new Cuadrado(cuadrado[numeroSeleccionado-1].posX+numeroSeleccionado*30,50,20));
            circulos.push(new Circulo(cuadrado[numeroSeleccionado-1].posX+numeroSeleccionado*30,150,20));

        }
        
    }
    
    //eliminar
    if(mouseX>200 && mouseX<270 && mouseY>300 && mouseY<330){
        if(numeroSeleccionado>1){
            cuadrado.pop();

            circulos.pop();
        }
        
    }
    //duplicar
    if(mouseX>400 && mouseX<470 && mouseY>300 && mouseY<330){
        cuadrado.forEach(function(element,i){
            
            cuadrado[i].tam=cuadrado[i].tam*2;
            circulos[i].tam=circulos[i].tam*2;

        });

        
    }
    
    //crearCirculos
    if(mouseX>400 && mouseX<520 && mouseY>350 && mouseY<380){

        circulosPermitidos=true;

        
    }
    
}



/*function display(){
    fill(255);
    rect(cuadrado.x,cuadrado.y,cuadrado.tam,cuadrado.tam);
}

function move(){
    
    cuadrado.x = cuadrado.x+random(-5,5);
    cuadrado.y = cuadrado.y+random(-5,5);
    
}*/