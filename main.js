function handler(){
  let name;
 name= prompt("hello can you enter your name?");
 alert("hello "+name+ " you can put any answer that you want");
 let m_name=prompt("Do you remeber my name if so write it? "+name);
 if(m_name.toLocaleLowerCase=="ayaleneh")
 {
   alert("great job! go ahead for next question")
 }
 else{
   alert("you make amistake try the next");
 }
 let m_age=prompt("guess my age "+name);
 if(m_age==22){
   alert("great..go ahead for the next question");
 }
 else{
   alert("nop..try the next one");
 }
 
}