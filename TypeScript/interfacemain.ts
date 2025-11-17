interface TakePhoto {
    cameramode: string 
	filter: string 
	brust: string 
}

class instagram extends Takephoto {
       constrcutor (
	   public cmaeraMode: string
       public filter: string 
	   public brust: string 	   
	   ){
}

interface  createStory () {
 createStory(): void
}

class Youtube extends Takephoto {
       constrcutor (
	   public cmaeraMode: string
       public filter: string 
	   public brust: string
       public short: string 	   
	   ){}
        
	   createstory(): void {
	   console.log("created suceesfully);
	   }  
}





