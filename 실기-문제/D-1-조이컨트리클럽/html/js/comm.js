$(function () {
  // // nav
  // // #gnb .link-depth1 클릭했을 때
  // $("#gnb .link-depth1").on("click", function () {
  //   // .link-depth1 > li 에 있는 .active 삭제
  //   $(".depth1 > li").removeClass("active");
  //   // 내가 클릭한 아이의 엄마에게 .actice 추가
  //   $(this).parent().addClass("active");
  // });

  // 조건문 - 열려있던 li 닫히는 버전
  $("#gnb .link-depth1").on("click", function () {
    if ($(this).parent().hasClass("active")) {
      // 만약 .active 가지고 있다면
      $(this).removeClass("active");
    } else {
      // 가지고 있지 않다면
      $(".depth1 > li").removeClass("active");
      $(this).parent().addClass("active");
    }
  });

  // tabs
  $(".tab-tit button").on("click", function () {
    $(".tab").removeClass("active");
    $(this).parents(".tab").addClass("active");
  });
});
