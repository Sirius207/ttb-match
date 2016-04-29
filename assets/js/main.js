$(document).ready(function() {
    side_nav();
    parallax_scroll();
    ractive_init_tw(function() {
        modal();
    });
    ractive_init_cn(function() {
        modal();
    });
    // $('.scrollspy').scrollSpy();
});

function ractive_init_tw(callback) {
    $.get("assets/companys.xml", function(xml) {
        var obj_companys = $.xml2json(xml);
        var stringified = JSON.stringify(obj_companys);
        stringified = stringified.replace(/[\r\n\t]/g,"<br/>");
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
        stringified = stringified.replace(/[\r\n\t]/g,"<br/>");
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

function side_nav(){
    $('.button-collapse').sideNav({
        menuWidth: 120,
        edge: 'left',
    });
};

// parallax scrolling
function parallax_scroll(){
    // scroll smoothly
    $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top - 50
                }, 1000);
                return false;
            }
        }
    });
    $('#top').parallax("50%", 0.2);
    $('#job').parallax("50%", 0.1);
}
