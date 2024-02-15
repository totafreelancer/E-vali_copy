
// ====== popup_screen ======
const popup_screen = document.querySelector(".popup_screen");
const popup_box = document.querySelector(".popup_box");
const close_box = document.querySelector(".close_box");
window.addEventListener("load", () => {
  setTimeout(() =>{
    popup_screen.classList.add(".popup_screen_show");
  }, 2000);
});
close_box.addEventListener("click", () => {
  setTimeout(() =>{
    popup_screen.classList.remove(".popup_screen_show");
  });
});




// ======search_input======

$(document).ready(function(){
    $('#search_input').click(function(){
      $('#search_box').addClass("show");
    });
    $("#search_btn").click(function(t){
      $("#search_box").removeClass("show");
    });
  });
  


// ======Popup_Notification======

  $(document).ready(function(){
    $('#Popup_Notification').click(function(){
      $('#NotificationAllPoup').addClass("show");
    });
    $("#NotificationAllPoup").click(function(t){
      if(t.target !== this) return;
      $("#NotificationAllPoup").removeClass("show");
    });
  });
  

// ======Popup_sms======
$(document).ready(function(){
  $('#Popup_sms').click(function(){
    $('#SmsAllPoup').addClass("show");
  });
  $("#SmsAllPoup").click(function(t){
    if(t.target !== this) return;
    $("#SmsAllPoup").removeClass("show");
  });
});

// ======Popup_Login======
  $(document).ready(function(){
    $("#Popup_Login").click(function(){
      $("#LoginAllPoup").addClass("show");
    });
    $("#LoginAllPoup").click(function(t){
      if(t.target !== this) return;
      $("#LoginAllPoup").removeClass("show");
    });
  });




