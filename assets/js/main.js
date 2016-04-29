$(document).ready(function() {
    $(document).delegate('.open_nav', 'click', function(event) {
        $(this).addClass('oppenned');
        event.stopPropagation();
    })
    $(document).delegate('body', 'click', function(event) {
        $('.open_nav').removeClass('oppenned');
    })

    $(document).delegate('.cls', 'click', function(event) {
        $('.open_nav').removeClass('oppenned');
        event.stopPropagation();
    });
    $(document).delegate('.sub-menu', 'click', function(event) {
        $('.open_nav').removeClass('oppenned');
        event.stopPropagation();
    });

    parallax_scroll();
    ractive_init_tw(function() {
        modal();
    });
    ractive_init_cn(function() {
        modal();
    });
    Ractive.DEBUG = false;
    // side_nav();
    // $('.scrollspy').scrollSpy();

});

function ractive_init_tw(callback) {
    $.get("assets/companys.xml", function(xml) {
        var obj_companys = $.xml2json(xml);
        var stringified = JSON.stringify(obj_companys);
        stringified = stringified.replace(/[\r\n\t]/g, "<br/>");
        var companys = JSON.parse(stringified);
        var ractive = new Ractive({
            el: '.companys',
            template: '#template',
            data: {
                company: companys.company
            }
        });
        callback();
    });
};

function ractive_init_cn(callback) {
    $.get("assets/china.xml", function(xml) {
        var obj_companys = $.xml2json(xml);
        var stringified = JSON.stringify(obj_companys);
        stringified = stringified.replace(/[\r\n\t]/g, "<br/>");
        var china = JSON.parse(stringified);
        var ractive = new Ractive({
            el: '.china',
            template: '#cn',
            data: {
                company: china.company
            }
        });
        callback();
    });
};

function modal() {
    $('.modal-trigger').leanModal();
};

function side_nav() {
    $('.button-collapse').sideNav({
        menuWidth: 120,
        edge: 'left',
    });
};

// parallax scrolling
function parallax_scroll() {
    $('#top').parallax("50%", 0.2);
    $('#job').parallax("50%", 0.1);
    // scroll smoothly
    $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
    
}
