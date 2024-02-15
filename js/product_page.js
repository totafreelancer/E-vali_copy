

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


// ===== Get-coupons popup ======
$(document).ready(function(){
  $("#Coupons").click(function(){
    $(".Get-coupons").addClass("show");
  });
  $(".btn-close, .Get-coupons").click(function(t){
    if(t.target !== this) return;
    $(".Get-coupons").removeClass("show");
  });
});

// ===== location_link-change ======
$(document).ready(function(){
  $("#location_change").click(function(){
    $(".delivery_Address").toggleClass("show");
  });
});

$(document).ready(function(){
  $("#Barishal").click(function(){
    $(".all-bivag").addClass("hidden");
    $(".Barishal-bivag-all").removeClass("Barishal-bivag");
    $(".batishal_head").removeClass("hidden");
  });
  $(".batishal_head").click(function(){
    $(".all-bivag").removeClass("hidden");
    $(".batishal_head").addClass("hidden");
    $("#Barishal-bivag").addClass("Barishal-bivag");
    
  });
});

$(document).ready(function(){
  const Pirojpur = ('Barishal, Pirojpur');
  
  $("#Pirojpur").click(function(){
    $(".delivery_Address").toggleClass("show");
    $(".location_address_text").text(Pirojpur);
  });
});




// ===== More-options popup ======
$(document).ready(function(){
  $("#more-btn").click(function(){
    $("#More-options").addClass("show");
  });
  $(".More-options, .btn-close").click(function(t){
    if(t.target !== this) return;
    $("#More-options").removeClass("show");
  });
});

// ===== More-options popup ======
$(document).ready(function(){
  $("#shipping-EMS").click(function(){
    $(".comet-icon-1").addClass("show");
    $(".comet-icon-2").removeClass("show");
  });
  $("#shipping-DHL").click(function(){
    $(".comet-icon-2").addClass("show");
    $(".comet-icon-1").removeClass("show");
  });
});





  // ====== nextPage navbar_button ======
  
  $(document).ready(function(){
    $("#navbar_button").click(function(){
      $(".head_layouts").toggleClass("navButton");
    });
  });



  // ====== nextPage navbar_button ======
  $(document).ready(function(){
    $(".Xzoom, .Xzoom_img").xzoom ({
      zoomWidth: 400,
      tint: "#333",
      Xoffset: 15,
    });
  });

  $(document).ready(function(){
    const S = $("#sku_property_item_s");
    const M = $("#sku_property_item_m");
    const L = $("#sku_property_item_l");
    const XL = $("#sku_property_item_xl");
    const TwoXL = $("#sku_property_item_2xl");

    $(S).click(function(){
      $(".Xsize").text("S");
    });
    $(M).click(function(){
      $(".Xsize").text("M");
    });
    $(L).click(function(){
      $(".Xsize").text("L");
    });
    $(XL).click(function(){
      $(".Xsize").text("XL");
    });
    $(TwoXL).click(function(){
      $(".Xsize").text("2XL");
    });
  });

  // ====== product number ======
  $(document).ready(function(){
    var Plus = 1 ;
    $('#Plus').click(function(){
      $('#next-input').val(++Plus)
    });
    $('#Minus').click(function(){
      $('#next-input').val(--Plus)
    });
  });

  // ====== Love None show ======
  $(document).ready(function(){
    $('.heartNone').click(function(){
      $('.heartNone').toggleClass("heartShow");
  });
  });



// ======product-overviews======
$(document).ready(function(){
  $("#customer_reviws").click(function(){
    $(".product-overviews").addClass("product-overviews_remove");
  });
  $("#description").click(function(t){
    $(".product-overviews").removeClass("product-overviews_remove");
  });
});

// ======product-specs======
$(document).ready(function(){
  $("#specifications").click(function(){
    $(".product-specs").addClass("product-specs-show");
    $(".product-overviews").addClass("product-overviews_remove");
    $(".product-evaluation").addClass("product-overviews_remove");
  });
  $("#description").click(function(t){
    $(".product-specs").removeClass("product-specs-show");
    $(".product-overviews").removeClass("product-overviews_remove");
    $(".product-evaluation").removeClass("product-overviews_remove");
  });
  $("#customer_reviws").click(function(t){
    $(".product-evaluation").removeClass("product-overviews_remove");
    $(".product-specs").removeClass("product-specs-show");
  });
});






