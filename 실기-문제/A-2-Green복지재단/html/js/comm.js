// 준비 이벤트
// html 코드를 다 읽고 나서 실행해줘
$(document).ready(function () {});
-"옛날에 많이 쓰던거";

$(function () {
  // modal
  // .lst-bbs li:first-child 를 클릭했을 때
  $(".lst-bbs li:first-child").click(function (e) {
    // a태그의 링크 값 없애기
    e.preventDefault();

    // .modal-box .btn-close 를 클릭했을 때  #modal을 찾아서 display:flex 변경해줘
    $("#modal").css("display", "flex");
  });

  // .modal-box .btn-close 를 클릭했을 때  #modal을 찾아서 display:none 변경해줘
  $(".modal-box .button-close").on("click", function () {
    $("#modal").hide();
  });

  // //// .modal-box .btn-close 를 클릭했을 때  #modal을 찾아서 display:none 변경해줘2
  // $(".modal-box .button-close").click(function () {
  //   $("#modal").css("display", "none");
  // });
});
