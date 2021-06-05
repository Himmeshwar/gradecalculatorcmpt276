

// function weightedCalc(){
//     var 

// }
function weightedCalc(){
    var sub1;
    var sub2;
    var sub3;

    var w1;
    var w2;
    var w3;

    w1 = parseInt(document.getElementById("w1").value);
    w2 = parseInt(document.getElementById("w2").value);
    w3 = parseInt(document.getElementById("w3").value);

    if(document.getElementById("p1").value.length!=0&&document.getElementById("p1").value!="NaN"){
        sub1 = parseInt(document.getElementById("p1").value);}
    else{
        sub1=0;
    }
    if(document.getElementById("p2").value.length!=0&&document.getElementById("p2").value!="NaN")
        sub2 = parseInt(document.getElementById("p2").value);
    else 
        sub2=0;
    

    if(document.getElementById("p3").value.length!=0&&document.getElementById("p3").value!="NaN"){
        sub3 = parseInt(document.getElementById("p3").value);}
    else {
        sub3= 0;
    }
    
   
    
    
    if(sub1>100||sub2>100||sub3>100){
        alert("Please enter valid marks");

    }

    else{
        var total = ((w1*sub1)+(w2*sub2)+(w3*sub3))/(w1+w2+w3);
        document.getElementById("answer").innerHTML="You have scored "+Math.round(total)+" %";
    }


}
function meanCalc(){
    var sub1; var sub2; var sub3;

    if(document.getElementById("p1").value.length!=0&&document.getElementById("p1").value!="NaN"){
        sub1 = parseInt(document.getElementById("p1").value);}
    else{
        sub1=0;
    }
    if(document.getElementById("p2").value.length!=0&&document.getElementById("p2").value!="NaN")
        sub2 = parseInt(document.getElementById("p2").value);
    else 
        sub2=0;
    

    if(document.getElementById("p3").value.length!=0&&document.getElementById("p3").value!="NaN"){
        sub3 = parseInt(document.getElementById("p3").value);}
    else {
        sub3= 0;
    }
    
   
    
    
    if(sub1>100||sub2>100||sub3>100){
        alert("Please enter valid marks");

    }
    else {
        var total = (sub1+sub2+sub3)/3;
        document.getElementById("answer").innerHTML = "You have scored "+Math.round(total)+" %";
       
    }

}