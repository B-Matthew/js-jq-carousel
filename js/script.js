function prevClick() {
  var imgPrev = $("img.active");
  var imgNot = $(".none");

  if (imgPrev.hasClass("first")) {

    var imgLast = $("img.last");
    imgNot.removeClass("active");
    imgLast.addClass("active");
  }else {

    imgNot.removeClass("active");
    imgPrev.prev().addClass("active");
  }

  console.log("clickprev");
}


function nextClick() {
  var imgNext = $("img.active");
  var imgNot = $(".none");

  if (imgNext.hasClass("last")) {

    var imgFirst = $("img.first");
    imgNot.removeClass("active");
    imgFirst.addClass("active");
  }else {

    imgNot.removeClass("active");
    imgNext.next().addClass("active");
  }

  console.log("clicknext");
}

function init() {

  $("#prev").click(prevClick);
  $("#next").click(nextClick);
}

$(document).ready(init);
