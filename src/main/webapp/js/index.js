$('.bs-example').each(function(index, ele) {
    $(ele).after('<pre><code class="language-markup">' + ele.innerHTML.replace(/&/ig, '&amp;').replace(/</ig, '&lt;').replace(/>/ig, '&gt;').trim() + '</code></pre>');
})
