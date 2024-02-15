

// ======Popup_sms======

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
  
  
  
  
  
  
  
  // ====== nextPage navbar_button ======
  
  $(document).ready(function(){
    $("#navbar_button").click(function(){
      $(".head_layouts").toggleClass("navButton");
    });
  });


  $(document).ready(function(){
    $( "#datepicker" ).datepicker();
  });




    // ====== loader ======
    const NextBtn = document.querySelector('#nextBtn')
    NextBtn.onclick = function() {
      this.innerHTML = "<div id='loader'></div>";
      setTimeout(() => {
          this.innerHTML = "Done";
          this.style = "background: #f1f5f4; color: #333; pointer-events: none;";
      }, 2000);
    };




