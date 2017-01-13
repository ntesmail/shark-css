$('.bs-example').each(function(index, ele) {
    $(ele).after('<pre><code class="language-markup">' + ele.innerHTML.replace(/&/ig, '&amp;').replace(/</ig, '&lt;').replace(/>/ig, '&gt;').trim() + '</code></pre>');
})

$(function() {
    var h1 = $('.g-content h1[id]');
    var sideNav = $('#sideNav');
    $(window).on('scroll', function() {
        var top = $(document).scrollTop();
        if(top >= 20) {
            sideNav.addClass('nav-fixed');
        } else {
            sideNav.removeClass('nav-fixed')
        }
        var activeClass = 'active';
        h1.each(function(idx, t) {
            var offset = top - $(this).offset().top;
            if (offset <= 0 | idx == h1.length - 1) {
                var nearest = Math.abs(offset) < 10 | (idx == h1.length - 1 && offset > 0) ? $(t) : $(h1[idx - 1]);
                $('.g-side .nav > li.' + activeClass).removeClass(activeClass);
                $('.g-side .nav > li a[href="#' + nearest.attr('id') + '"]').closest('li').addClass(activeClass);

                var curh2 = $(h1[idx - 1]).nextUntil('h1').find('h2');
                curh2.each(function(idx, t) {
                    var offset = top - $(t).offset().top;
                    if (offset <= 0 | idx == curh2.length - 1) {
                        var nearest = Math.abs(offset) < 10 | (idx == curh2.length - 1 && offset > 0) ? $(t) : $(curh2[idx - 1]);
                        $('.g-side .nav .nav > li.' + activeClass).removeClass(activeClass);
                        $('.g-side .nav .nav > li a[href="#' + nearest.attr('id') + '"]').closest('li').addClass(activeClass)
                        return false;
                    }

                });
                return false;
            }
        });
        if (top == $(document).height() - $(window).height()) {
            $('.g-side .nav > li.' + activeClass).removeClass(activeClass);
            $('.g-side .nav > li a[href="#' + $(h1[h1.length - 1]).attr('id') + '"]').closest('li').addClass(activeClass);
        }
    });
});
