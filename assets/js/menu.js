$("#dashboard").click(function(){
    $('#menu ul,#menu li').removeClass("active").removeClass("in");
    $(this).addClass("active");
});
$("#docspec").click(function(){
    $('#menu ul,#menu li').removeClass("active");
    $('#doctor ul').addClass("in");
    $('#doctor ul,#docspec',).addClass("active");
});
$("#adddoc").click(function(){
    $('#menu ul,#menu li').removeClass("active");
    $('#doctor ul').addClass("in");
    $('#doctor ul,#adddoc',).addClass("active");
});
$("#managedoc").click(function(){
    $('#menu ul,#menu li').removeClass("active");
    $('#doctor ul').addClass("in");
    $('#doctor ul,#managedoc',).addClass("active");
});
$("#managepatient").click(function(){
    $('#menu ul,#menu li').removeClass("active");
    $('#patient ul').addClass("in");
    $('#patient ul,#managepatient',).addClass("active");
});
$("#apphis").click(function(){
    $('#menu ul,#menu li').removeClass("active").removeClass("in");
    $(this).addClass("active");
});




