$().ready(function(){

    // STYLE CHANGER

        var style = $('body').attr('class').split(' ');

        $('#change-pattern a').click(function (){
            style[0] = $(this).attr('href');
            $('body').removeClass().addClass(style[0]).addClass(style[1]).addClass(style[2]);
            return false;
        });

        $('#change-color a').click(function (){
            style[1] = $(this).attr('href');
            $('body').removeClass().addClass(style[1]).addClass(style[0]).addClass(style[2]);
            return false;
        });

    // FLEXSLIDER PORTFOLIO

        $('.flexslider').flexslider({
            slideshow: false,
            directionNav: false,
            controlNav: true,
            animationDuration: 500 
        });

        $('.flexslider-detail').flexslider({
            animation: "fade",
            slideshowSpeed: 4000,
            directionNav: false,
            controlNav: true,
            animationDuration: 500 
        });

    // FANCYBOX PORTFOLIO

        $("a.show-portfolio-text").fancybox({
            'titlePosition'     : 'inside'
        });

        $("a.show-portfolio-img").fancybox();

    // PORTFOLIO SELECT

        $('#choose').change(function() {
            var port = $("select option:selected").attr('value');
            $("#formCategory").attr("action", port+".html#a-portfolio");
            $("#formCategory").submit();
        });

    // PORTFOLIO LI IMAGES
    
         $("ul.portfolio-slide li:nth-child(4n)").addClass("marginright-zero");

    // NAV

        $('.nav-global-li a').click(function (){
            style[2] = $(this).attr('href').replace('#sec-','');
            $('body').removeClass().addClass(style[0]).addClass(style[1]).addClass(style[2]);
            return false;
            
        });

        var $content = $("#main");
        
        // Run easytabs
        $content.easytabs({
          animate           : true,
          updateHash        : false,
          transitionIn      :'slideDown',
          transitionOut     :'slideUp',
          animationSpeed    :600,
          tabs              :"> #header > #nav-global > ul > li",
          tabActiveClass    :'active'
        });

    // CONTACT VALIDATE

        $('#form-contact-me').validate({
             rules:{
                 name:{
                     required: true
                 },
                 message:{
                     required: true
                 },
                 email: {
                     required: true,
                     email: true
                 }
             }
         });

});
