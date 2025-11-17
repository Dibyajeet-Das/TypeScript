// An abstract class is a blueprint.
// You cannot create an object from it because it is incomplete.
// Other classes extend it and complete the missing parts.
//generally used interface 
//cant create the  object for it as it is the responsibility of the class that is extended the abstract method
//cant create object of there own but they help to define the classes 
//that are inheriting 

abstract class volume {
   constructor(
   public volumeMode: String,
   public power: string
   ){}
   //this is a abstract method
   abstract getValue():void

}

class pc extends volume{
   stract class volume {
   constructor(
   public volumeMode: String,
   public power: string
   ){
    //use to pass the equired value (super)
	
	
	super(volumeMode, power)
   }
}
//Can use the class that is inheriting it
const  dt = new pc("up and down", "restart or powerof");