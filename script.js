function toggleMode(){
   const html = document.documentElement
   const img = document.querySelector("#profile img")
   html.classList.toggle('light')
   if(html.classList.contains('light')){
    img.setAttribute('src','assets/assets/Ellipse 3.png')
   }else{
    img.setAttribute('src','assets/assets/Ellipse 3.png')
   }
}

