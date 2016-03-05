jQuery(document).ready(function(){
    $(".toggler").on("click",function(){
        $(this).parent().toggleClass("breedContainerLG");
        if(jQuery(this).attr('src') == "img/240px-Gnome-window-close.svg.png"){
            $(this).attr('src',"img/48px-Gnome-list-add.svg.png");
        }else{
            $(this).attr('src',"img/240px-Gnome-window-close.svg.png");
    });

    $(".breedImage").on("click",function(){

$(this).parent().parent().toggleClass ("breedContainerLG");
console.log("hi");
});
    });

console.log("bye");