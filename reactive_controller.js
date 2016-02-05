$(document).ready(function() {
    
    const   SMALL_STATE     = "SMALL_STATE",
            MEDIUM_STATE    = "MEDIUM_STATE";

    var     $window         = $(window),
            state           = null,
            windowWidth     = null,
            $one            = $('#one'),
            $two            = $('#two'),
            $three          = $('#three'),
            $four           = $('#four'),
            $five           = $('#five'),
            $colOne         = $('#column-one'),
            $colTwo         = $('#column-two'),
            $blah           = $('#blah'),
            $cs395          = $('#cs395'),
            toggle          = true,
            server          = io();
    
    server.on('receive_file', function(file){
        
        var html;
        
        if (file == null) {
            html = "<div class='empty'>empty</div>"
        } else {
            var width   = toggle ? "big-width" : "small-width";
            toggle      = toggle ? false : true;

            html        =  "<div class= 'col " + width + "'>" + file + "</div>";
        }
        
        console.log(html);
        
        $cs395.append(html);
    });
    
    function checkWidth(){
        
        windowWidth = $window.width();
        
        if (windowWidth < 600) {
            moveToSingleColumn();
            state = SMALL_STATE;
        } else if (windowWidth < 1024) { //transitioning from small to medium
            if(state == SMALL_STATE){ //was small -> now medium
                transToMed();
            } else  { //was big -> now medium
                moveFourMed();
                moveFiveMed();
            }
            state = MEDIUM_STATE;
        } else {
            if(state == MEDIUM_STATE) { //was medium -> now big
                restoreFourBig();
                restoreFiveBig();
            } else if (state == SMALL_STATE) {
                transToMed();
                restoreFourBig();
                restoreFiveBig();
            }
            
        }
    }
    
    function moveFourMed() {
        $four.removeClass('big-height').addClass('left big-width');
        $colOne.append($four);
    }
    
    function moveFiveMed() {
        $five.removeClass('small-height').addClass('right small-width');
        $colOne.append($five);
    }
    
    function restoreFourBig() {
        $four.removeClass('left big-width').addClass('big-height');
        $colTwo.append($four);
    }
    
    function restoreFiveBig() {
        $five.removeClass('right small-width').addClass('small-height');
        $colTwo.append($five);
    }
    
    function moveToSingleColumn(){
        $blah.hide();
        
        $one.removeClass('small-height').addClass('big-height');
        $two.removeClass('small-width').addClass('big-height');
        $three.removeClass('big-width').addClass('big-height');
        $four.removeClass('big-height').addClass('big-height');
        $five.removeClass('small-height').addClass('big-height');

        $colOne.append($one);
        $colOne.append($two);
        $colOne.append($three);
        $colOne.append($four);
        $colOne.append($five);
    }
    
    function transToMed() {
        $blah.show();
        
        $one.removeClass('big-height').addClass('small-height');
        $two.removeClass('big-height').addClass('small-width');
        $three.removeClass('big-height').addClass('big-width');
        $four.removeClass('big-height').addClass('big-height');
        $five.removeClass('big-height').addClass('small-height');

        $colOne.append($one);
        $blah.append($two);
        $blah.append($three);
        $colOne.append($blah);
        $colOne.append($four);
        $colOne.append($five);
    }
    // Execute on load
    checkWidth();
    // Bind event listener
    $(window).resize(checkWidth);
});