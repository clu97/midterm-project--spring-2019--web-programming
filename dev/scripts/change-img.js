$(document).ready(function(){
    $(`.artworks`).change(function(){
        $(`img[id=image-swap]`).attr(`src`,$(this).val());

    });
});