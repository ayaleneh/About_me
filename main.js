'use strict'
function handler(){
  let name;
  let counter=0;
 name= prompt("hello can you enter your name?")
 alert("hello "+name+ " you can put any answer that you want")
 let m_name=prompt("Do you remeber my name if so write it? "+name)
 if(m_name =="ayaleneh")
 {
   let value=m_name.toLocaleUpperCase()
   alert(value);
   alert("great job! go ahead for next question")
   counter++;
 }
 else{
   alert("you make amistake try the next");
 }
 let m_age=prompt("guess my age "+name);
 if(m_age=="22"){
   alert("great..go ahead for the next question");
   counter++;
 }
 else{
   alert("nop..try the next one");
 }
 let gf=prompt("do you think does i have agirl frnd")
 if((gf=="yes")||(gf=="YES")){
   alert("nop i don't have agirl frnd yet")
 }
 else if((gf="no") ||(gf = "NO")){
 alert("you get it great job")
 counter++;
 }
 else {
   alert("you should enter yes or no")
 }
 let fourth=prompt("do you think am like programming")
 if(fourth=="yes"){
   alert("yap i like programming")
   counter++;
 }
 else {
   alert("i like programming..")
 }
 let fifth=prompt("if you read my about me did i born in ethiopia?")
 if (fifth=="yes"){
   alert("yap you are correct")
   counter++;
 }
 else {
   alert("nop you make amistake")
 }
 confirm("do you want to show your result?")
 if(true){
   alert("you get " +counter +"out of 5")
 }
 else{
   alert(thanks)
 }
 
}