document.addEventListener('DOMContentLoaded', () => {

  let index = 0;

  let webimg = document.getElementById('website')
  let webtext = document.getElementById('webtext')
  let weblink = document.getElementById('links')


  webimg.src = 'images/website1.png'
  webtext.innerHTML = "<b>BlogDeCafe</b> is a blog dedicated to coffee where tips, recipes and courses are provided."
  weblink.href = 'https://gifted-einstein-e0f0e1.netlify.app/'


  let images = [
    'images/website1.png',
    'images/website2.png',
    // '/images/website3.png',
    'images/website4.png',
    'images/website5.png',
  ]

  let title = [
    "BlogDeCafe",
    "To Do List",
    // "Universidad",
    "Buscador de autos",
    "Check in/out"
  ]

  let text = [
    "is a blog dedicated to coffee where tips, recipes and courses are provided.",
    "is a task manager that uses browser storage. Tasks can be added and deleted.",
    // "is a site with courses that can be added to a shopping cart. Items in the cart can be removed. Uses browser storage.",
    "engine has a list of cars, which can be filtered by make, year, etc.",
    "is a system designed for a company that wants to check in and check out employees."
  ]

  let links = [
    "https://gifted-einstein-e0f0e1.netlify.app/",
    "https://ecstatic-wright-a63ed1.netlify.app/",
    "https://gracious-nobel-67deb6.netlify.app/",
  ]

  const btnNext = document.getElementById('next')
  btnNext.onclick = function next() {
    index += 1
    if (index > images.length - 1 && index > title.length - 1 && index > text.length - 1) {
      index = 0
    }
    webimg.src = images[index]
    webtext.innerHTML = `<b>${title[index]}</b> ${text[index]}`
    weblink.href = links[index]
  }

  const btnPrev = document.getElementById('prev')
  btnPrev.onclick = function prev() {
    index -= 1
    if (index < 0) {
      index = images.length - 1
    }
    webimg.src = images[index]
    webtext.innerHTML = `<b>${title[index]}</b> ${text[index]}`
    weblink.href = links[index]
  }

})