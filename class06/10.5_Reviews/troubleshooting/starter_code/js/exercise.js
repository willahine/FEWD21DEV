jQuery(document).ready(function(){
    $('.breedContainer').click(makeImagePop);

});


function makeImagePop() {
    $(this).toggleClass("breedContainerLG");
    if($(this).find('.toggler').attr('src') == "img/240px-Gnome-window-close.svg.png"){
        $(this).find('.toggler').attr('src', "img/48px-Gnome-list-add.svg.png");
    }else{
        $(this).find('.toggler').attr('src', "img/240px-Gnome-window-close.svg.png");
    }
}

