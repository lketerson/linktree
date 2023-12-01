function toggleMode(){
   const html = document.documentElement
   const img = document.querySelector("#profile img")
   html.classList.toggle('light')
   if(html.classList.contains('light')){
    img.setAttribute('src','assets/assets/light-profile.png')
   }else{
    img.setAttribute('src','assets/assets/dark-profile.png')
   }
}

