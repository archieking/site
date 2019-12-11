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
