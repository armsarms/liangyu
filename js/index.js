$(document).ready(function(){
    tabColor();
})

function tabColor() {
    var $li = $('.tab li');
    var $pop = $('.popup');
    $li.mouseover(function() {
        var $this = $(this);
        var $t = $this.index();
        $li.removeClass();
        $this.addClass('current');
        $pop.css('display', 'none');
        $pop.eq($t).css('display', 'block');
    })
}