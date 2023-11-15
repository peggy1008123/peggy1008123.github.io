$(document).ready(function(){
  $("#StringTextBox").keypress(function ChangeString(event){
  if (event.keyCode == 13) {
    $(".username").hide();
    $(".before_username").show();
    $("#NewStringBox").show();
    var NewStringValue=document.getElementById("StringTextBox").value;
    document.getElementById("NewStringBox").innerHTML=NewStringValue;
    $("input").val("");  
  }
})
$(".btn_home_go").click(function ChangeString(){
  $(".username").hide();
  $(".before_username").show();
  $("#NewStringBox").show();
    var NewStringValue=document.getElementById("StringTextBox").value;
    document.getElementById("NewStringBox").innerHTML=NewStringValue;
  $("input").val("");
})

})

function tomywork() {
    var e = document.getElementById("mywork");
    e.scrollIntoView({
        block: 'start',
        behavior: 'smooth',
        inline: 'start'
    });
}
