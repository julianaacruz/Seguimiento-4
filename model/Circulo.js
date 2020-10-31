class Circulo extends Figura {
    constructor(posX,posY,tam){
       super(posX,posY);
        this.tam=tam;
    }


     display(){
        fill(255);
        ellipse(this.posX,this.posY,this.tam,this.tam);
    }
   
}