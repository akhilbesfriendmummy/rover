canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
rover_width=100;
rover_height=100;
rover_x=10;
rover_y=10;
images_array=["http://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01000/opgs/edr/fcam/FLB_486265257EDR_F0481570FHAZ00323M_.JPG","http://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01000/opgs/edr/fcam/FRB_486265257EDR_F0481570FHAZ00323M_.JPG","http://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01000/opgs/edr/rcam/RLB_486265291EDR_F0481570RHAZ00323M_.JPG","http://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01000/opgs/edr/rcam/RRB_486265291EDR_F0481570RHAZ00323M_.JPG"];
number=Math.floor(Math.random()*4);

rover_image="rover.png";
background_image=images_array[number];
function add(){
    background_imageTag=new Image();
    background_imageTag.onload=uploadBackground;
    background_imageTag.src=background_image;
    rover_imageTag=new Image();
   rover_imageTag.onload=uploadrover;
    rover_imageTag.src=rover_image;
}
function uploadBackground(){
    ctx.drawImage(background_imageTag,0,0,canvas.width,canvas.height);
}
function uploadRover(){
    ctx.drawImage(rover_imageTag,rover_x,rover_y,rover_width,rover_height);
}
window.addEventListener("keydown",my_keydown);
function my_keydown(e){
    keypressed=e.keyCode;
    if(keypressed=='38'){
        up();
    }
    if(keypressed=='40'){
        down();
    }
    if(keypressed=='37'){
        left();
    }
    if(keypressed=='39'){
        right();
    }
}
function up(){
   if (rover_y>=0){
       rover_y-=10;
       uploadBackground();
       uploadRover();
   }
}
function down(){
    if (rover_y<=0){
        rover_y+=10;
        uploadBackground();
        uploadRover();
    }
        }
        function left(){
            if(rover_x>=0){
                rover_x-=0;
                uploadBackground();
                uploadRover();
            }
        }
        function right(){
            if(rover_x<=0){
                rover_x+=10;
                uploadBackground();
                uploadRover();
            }
        }