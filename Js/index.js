var x=1;
function navbtn(){
    
    if(x === 1){
        document.getElementsByClassName("line1")[0].style.transform = "rotate(45deg)translate(10px,23px)";
        document.getElementsByClassName("line1")[2].style.transform = "rotate(-45deg)translate(10px,-23px)";
        document.getElementsByClassName("line1")[0].style.borderColor = "red";
        document.getElementsByClassName("line1")[2].style.borderColor = "red";
        document.getElementsByClassName("line1")[1].style.opacity = "0";   
    x++;
        document.getElementsByClassName("navlink")[0].style.right="5px";
    }else{
        document.getElementsByClassName("line1")[0].style.transform = "rotate(0deg)translate(0px,0px)";
        document.getElementsByClassName("line1")[2].style.transform = "rotate(0deg)translate(0px,0px)";
        document.getElementsByClassName("line1")[0].style.borderColor = "green";
        document.getElementsByClassName("line1")[2].style.borderColor = "green";
        document.getElementsByClassName("line1")[1].style.opacity = "1";   
    x--;
    document.getElementsByClassName("navlink")[0].style.right="100%" ;
    }
}