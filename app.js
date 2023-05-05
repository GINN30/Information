import $ from jQuery;

$(document).ready(function () {
    // Add active class when off-canvas menu is shown
    $('.off-canvas').on('show.bs.off-canvas', function () {
        $(this).addClass('active');
        $(this).find('.off-canvas-content').addClass('active');
    });

    // Remove active class when off-canvas menu is hidden
    $('.off-canvas').on('hide.bs.off-canvas', function () {
        $(this).removeClass('active');
        $(this).find('.off-canvas-content').removeClass('active');
    });

    // Handle click events on off-canvas toggler
    $('.off-canvas-toggler').on('click', function (evt) {
        evt.stopPropagation();
        evt.preventDefault();
        var target = $(this).data('target');
        if (!$(target).hasClass('active')) {
            $(target).trigger('show.bs.off-canvas');
        } else {
            $(target).trigger('hide.bs.off-canvas');
        }
    });

    // Handle click events on off-canvas content
    $('.off-canvas-content:not(.off-canvas-no-close)').on('click', function (evt) {
        var target = $(this).data('target');
        if ($(target).hasClass('active')) {
            evt.stopPropagation();
            $(target).trigger('hide.bs.off-canvas');
        }
    });
});