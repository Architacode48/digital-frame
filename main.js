function setup(){
    canvas= createCanvas(580,450);
    canvas.position(300,150);
    video= createCapture(VIDEO);
    
    video.hide();
}

  function draw() {
     image(video, 0, 0, 310, 300);
    circle(60, 100, 64 )
    circle(60, 400, 64 )
    circle(500, 400, 64 )
    circle(500, 100, 64 )
    circle(500, 170, 12 )
    circle(500, 230, 12 )
    circle(500, 280, 12 )
    circle(500, 340, 12 )
    circle( 60, 170, 12 )
    circle(60, 230 , 12 )
    circle(60, 280 , 12 )
    circle(60, 340 , 12 )
    
  }
  
  function preload() {
  }
  
  
  
  function download(){  
    save('Our_pic.png');
    
    
  }