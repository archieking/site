var isHide = true;
function initLang(arrLang,lang){
  // Check for localStorage support
  if('localStorage' in window){
     // var lang = localStorage.getItem('lang') || navigator.language.slice(0, 2);
     if (!Object.keys(arrLang).includes(lang)) lang = 'en';
  }

  $(document).ready(function() {
    $(".lang").each(function(index, element) {
      $(this).text(arrLang[lang][$(this).attr("key")]);
    });
  });

  $(".lang").each(function(index, element) {
    $(this).text(arrLang[lang][$(this).attr("key")]);
  });
  // $(".translate").click(function() {
  //   var lang = "zh";
  //   if (isClick) {
  //     lang = "zh";
  //     $(".translate").text("English");
  //   }else {
  //     lang = "en";
  //     $(".translate").text("简体中文");
  //   }
  //   // var lang = $(this).attr("id");
  //
  //   // update localStorage key
  //   if('localStorage' in window){
  //     localStorage.setItem('lang', lang);
  //   }
  //
  //   $(".lang").each(function(index, element) {
  //     $(this).text(arrLang[lang][$(this).attr("key")]);
  //   });
  //
  //   isClick = !isClick
  // });

}

$(".btnLang").click(function() {
  isHide = !isHide;
  if (isHide) {
    $(".translateLang").css("display","none");
  }else {
    $(".translateLang").css("display","block");
  }
  // $(".translateLang").css("display","block");
});

// $(".translateLang ul li a").click(function() {
//   console.log($(this).attr("id"));
// });
