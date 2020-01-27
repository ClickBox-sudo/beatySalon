gallery();
$(document).ready(function () {
    function menu() {
        if ($(".menu #bars").css('display') != 'none') {
            $(".fa-bars").on('click', () => {
                if ($('.menu-list').css('display') === 'flex') {
                    $('.menu-list').css('display', 'none')
                } else {
                    $('.menu-list').css('display', 'flex')
                }
            });
            $(".menu-list a").on('click', () => {
                if ($('.menu-list').css('display') === 'flex') {
                    $('.menu-list').css('display', 'none')
                } else {
                    $('.menu-list').css('display', 'flex')
                }
            })
        };
    }
    menu();

    function toggleServiceList() {
        $(".service-list-button").click(function () {
            $(".service-item").slideToggle(1000, 'linear');
        });
    }
    toggleServiceList();

    var service = $('.service-link');
    $(service).on('click', (event) => {

        var targetID = $(event.target).text().toLowerCase();
        if (targetID != 'contact') {
            var sectionListInMain = $('.main section');
            for (var i = 0; i < sectionListInMain.length; i++) {
                var match = $(sectionListInMain[i]).attr('id');
                match == targetID ? $('#' + match).css({ 'display': 'block' }) : $('#' + match).css({ 'display': 'none' })
            }
        }
    });






    



});



