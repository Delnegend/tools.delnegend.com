const scrollTo = (a, b) => {
      $(a).on('click', () => {
            $('html, body').animate({
                  scrollTop: $(b).offset().top - 80
            }, 600);
      });
};
document.addEventListener('DOMContentLoaded', () => {
      scrollTo("#features_nav", "#feature");
      scrollTo("#pricing_nav", "#pricing");
      scrollTo("#about_nav", "#about");
});
var index = 0;
setInterval(() => {
      let a = $('#changing-text');
      a.fadeOut(200, () => a.html(wordlist[index]).fadeIn(200));
      index++;
      if (index == wordlist.length) {
            index = 0;
      }
}, 3000);

const scrollToTop = () => {
      $('html, body').animate({
            scrollTop: 0
      }, 600);
};

$(window).resize(() => {
      let width = $(window).width();
      if (width <= 1000) {
            $('.demo').addClass('responsive_1000');
      } else {
            $('.demo').removeClass('responsive_1000');
      }
});