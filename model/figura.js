
class Figura {

    constructor(posX, posY) {
      this.posX=posX;
      this.posY=posY;
      this.izq=false;
      this.der=true;
    }
  
    move(){
  
      if(this.der==true){
        this.posX = this.posX+5;
        if(this.posX==width){
          this.der=false;
          this.izq=true;
        }
      } else {
        this.posX=this.posX-5;
        if(this.posX==0){
          this.der=true;
          this.izq=false;
        }
      }
  
  }
  
  
  }