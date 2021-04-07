var canvas = new fabric.Canvas("myCanvas");
block_image_width = 30;
block_image_height = 30;
hero_x = 10;
hero_y = 10;

var hero_object = "";

function hero_update(){
}


fabric.Image.fromURL("avengers.png" , function(Img){
    hero_object = "Img";
    hero_object.scaleToWidth(150);
    hero_object.scaleToHeight(140);
    hero_object.set({
        top: hero_y,
        left: hero_x,
    });
    canvas.add(hero_object);
}