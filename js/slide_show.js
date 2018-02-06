$(window).load(function(){
  $("#pics_list img").click(function(){
    var img_src = $(this).attr("src");
    $("#main_view img").attr("src", img_src);
  });
});