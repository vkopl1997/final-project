function showchatbox(){
    document.getElementById("messagebox").style.width ="350px";
    document.getElementById("messagebox").style.display ="block";
    
}
function resetbuttontext(){
    document.getElementById("clearthis").innerHTML="";
    document.getElementById("status").innerHTML ="";
}
function resetImage(){
    document.getElementById("chatboxbackground").style.backgroundImage="url()";
    document.getElementById("chatboxbackground").style.backgroundImage="url(img/comment.png)";
}
function hidechatbox(){
    document.getElementById("messagebox").style.display = "none";
}
function hidechatboxwithstatus(){
    document.getElementById("messagebox").style.display = "none";
    document.getElementById("chatboxbackground").style.backgroundImage="url(img/comment2.png)";
    setTimeout(resetImage, 2000);
    
}
