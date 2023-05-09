// Add hover style
$(function () {
    $('.navbar-nav li').hover(function () {
        $(this).find('a').css({
            color: '#fff',
            backgroundColor: '#19bfec',
        });
    }, function () {
        $(this).find('a').css({
            color: '',
            backgroundColor: ''
        });
    });
});

// Add active style
$(function () {
    $('.navbar-nav li').click(function () {
        $(this).addClass('active').siblings().removeClass('active');
    });
});