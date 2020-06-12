$(document).ready(function () {
  $(".card-body").hover(
    function () {
      $(this).animate(
        {
          marginTop: "-+4%",
        },
        200
      );
    },
    function () {
      $(this).animate(
        {
          marginTop: "0%",
        },
        200
      );
    }
  );
});
