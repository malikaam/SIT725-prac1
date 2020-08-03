let getRandomArbitary=function(min, max){
    return parseInt(Math.random() * (max - min) + min);
}
class Biosensor{
    constructor(name){
        this.name=name;
        this.live();
        this.currentHeartBeat=0;
        this.config={
            minHR:60,
            maxHR:80
        }
    }
    diaplay(){
        console.log('person:'+this.name+"   || HR:  "+this.currentHeartBeat);
    }
    heartBeat(){
     this.currentHeartBeat=getRandomArbitary(this.config.minHR,this.config.maxHR);
     this.diaplay()
}

live(){
    console.log("IT'S ALIVEE")
    setInterval(()=>{this.heartBeat()},1000)
}

}
let james=new Biosensor('james')
let sara=new Biosensor('sara')