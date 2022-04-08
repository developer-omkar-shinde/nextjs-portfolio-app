var x = 0;
$(document).ready(function () {

  function progress() {
    $("#html").css("width", "90%");
    $("#css").css("width", "90%");
    $("#javascript").css("width", "80%");
    $("#jq").css("width", "80%");
    $("#bootstrap").css("width", "90%");
    $("#react").css("width", "70%");
    $("#node").css("width", "70%");
    $("#mongo").css("width", "70%");
    $("#wordpress").css("width", "60%");
    $("#nav").css("background-image", "none"); 
    $("#nav ").css("box-shadow", "1px 0px 5px black");
  };
  function progressEnd() {
    $(".progress-bar").css("width", "0%");
    $("#nav").css("background-image", "url('https://waawfoundation.org/waawblog/wp-content/uploads/2020/12/00l8p1iqqfNP3HRG3TtTgXl-1.1587974089.fit_lim.fit_lim.size_956x.jpg')");
    $("#nav ").css("box-shadow", "none");
  };

  $(window).scroll(function () {
    var scrollTop = $(window).scrollTop()
    console.log(scrollTop);
    if (scrollTop > 400) {
      progress()
    } else {
      progressEnd()
    };
  });

});

var TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
    }

    setTimeout(function() {
    that.tick();
    }, delta);
};

window.onload = function() {
    var elements = document.getElementsByClassName('typewrite');
    for (var i=0; i<elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
          new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
    document.body.appendChild(css);
};


