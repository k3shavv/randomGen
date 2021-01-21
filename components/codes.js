/*class for generating
random code according to 
the given subject and series*/


module.exports=class RandomCodes{


    /*static method for generating random code */
    static generate(subject,series)
    {
          let result="";
          const characters="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
          
    
          
          //generating the subject code
          let subjectCode;
          subject=subject.toUpperCase();
          
          if(subject=="EVS"){
              subjectCode=subject[1];
            }else{
              subjectCode=subject[0];
            }
          
    
    
          // appending series and subjectCodeto result
          result=result+subjectCode;
          result=result+series;
          
          /*then*/
          /*appending random numbers to series*/
          for(let i=0;i<7;i++)
          {
            result=result+characters.charAt(Math.floor(Math.random()*characters.length))  
          }
          return result;
    
    }
    

}
    
    
    