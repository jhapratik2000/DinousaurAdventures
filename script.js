
score=0;
cross=true;
audiogo=new Audio('gameover.mp3');
audio=new Audio('music.mp3');


setTimeout(() => {
  audio.play()
},1000);
document.onkeydown=function(e)
{
  if(e.key==="ArrowUp")
  {
      dino=document.querySelector('.dino');
      dino.classList.add('animateDino');//class lagane se dino kudega
      setTimeout(() => {
          
        dino.classList.remove('animateDino');
        
      }, 700)//700 ms ke baad ye class hata denge to dino nhi kudega
  }
  if(e.key=="ArrowRight")
  {
      dino=document.querySelector('.dino');
   dinoX=parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
   dino.style.left=dinoX+112+"px";
  }
  if(e.key=="ArrowLeft")
  {
      dino=document.querySelector('.dino');
   dinoX=parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
   dino.style.left=(dinoX-112)+"px";
  }

}
//it will check if we are hitting with our obstacle
setInterval(() => {
  dino=document.querySelector('.dino');
  gameOver=document.querySelector('.gameOver')
  obstacle=document.querySelector('.obstacle')
  dx=parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
  dy=parseInt(window.getComputedStyle(dino, null).getPropertyValue('top'));
  ox=parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('left'));
  oy=parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('top'));

  offsetX=Math.abs(dx-ox);
  offsetY=Math.abs(dy-oy);

  if(offsetX<73&&offsetY<52)
  {
    gameOver.innerHTML="Game over-Reload to start over"
    obstacle.classList.remove('obstacleAny')
    audiogo.play()
    setTimeout(() => {
      audiogo.pause();
      audio.pause();
    }, 1000);
  }
  else if(offsetX<145&&cross)
  {
    score+=1;
    updateScore(score);
    cross=false;

    setTimeout(()=>
    {
      cross=true;

    },1000);
    setTimeout(() => {
      aniDur=parseFloat(window.getComputedStyle(obstacle, null).getPropertyValue('animation-duration'));
    newDur=aniDur-0.1;
    obstacle.style.animationDuration=newDur+'s';
    }, 500);
    

  }
}, 10);
function updateScore(score)
{
  scorecnt.innerHTML="Your Score: "+score;
}