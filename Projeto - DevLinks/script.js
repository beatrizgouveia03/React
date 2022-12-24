function toogleMode(){
  const html = document.documentElement

  /*if(html.classList.contains('light')) {
    html.classList.remove('light')
  }else {
    html.classList.add('light')
  }*/

  html.classList.toggle("light")

  //pegar a tag img
  const img = document.querySelector('#profile img')

  //Substituir a image

  if(html.classList.contains('light')){
    img.setAttribute('src', './assets/avatar-lm.png')
    img.setAttribute('alt', 'Panda daymode')
  }else {
    img.setAttribute('src', './assets/avatar-dm.png')
    img.setAttribute('alt', 'Panda nightmode')
  }
}