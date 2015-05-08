$(document).ready(function() {
    $('#motherboard').draggable({
        opacity:.5,
        create: function(){$(this).data('position',$(this).position())},
        cursorAt:{left:15},
        cursor:'move',
        revert: 'invalid',
        start:function(){$(this).stop(true,true)}
    });

    $("#motherboard").data({'originalLeft': $("#motherboard").css('left'),
        'origionalTop': $("#motherboard").css('top')
    });

    $('#mbmount').droppable({

        drop:function(event, ui){
            snapToMiddle(ui.draggable,$(this));
            accept: '#motherboard';
            alert("Success!");
        }
    });

    $(".reset").click(function () {
        $("#motherboard").css({
            'left': $("#motherboard").data('originalLeft'),
            'top': $("#motherboard").data('origionalTop')
        })
    });


    });
    function snapToMiddle(dragger, target){
        var topMove = target.position().top - dragger.data('position').top + (target.outerHeight(true) - dragger.outerHeight(true)) / 1;
        var leftMove= target.position().left - dragger.data('position').left + (target.outerWidth(true) - dragger.outerWidth(true)) / 2;
        dragger.animate({top:topMove,left:leftMove},{duration:600,easing:'easeOutBack'});
    }
