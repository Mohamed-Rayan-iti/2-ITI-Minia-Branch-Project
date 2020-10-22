$(document).ready(function () {
        $('#programStaff .container .row aside .our-team-department a').click(function(e) {
    
        $('#programStaff .container .row aside .our-team-department a.active').removeClass('active');
    
        var $parent = $(this);
        $parent.addClass('active');
        e.preventDefault();
    });
});