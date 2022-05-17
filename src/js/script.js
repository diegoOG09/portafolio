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
    'images/website4.png',
    'images/website5.png',
    'images/website6.png',
    'images/website7.png',
    'images/website8.png'
  ]
  let title = [
    "BlogDeCafe",
    "ToDo App",
    // "Universidad",
    "Buscador de autos",
    "Check in/out",
    "Personal website & blog",
    "Frontend Mentor - Remote work app",
    "YesNo App"
  ]
  let text = [
    "is a blog dedicated to coffee where tips, recipes and courses are provided.",
    "is a task manager made with Rails & Javascript",
    "engine has a list of cars, which can be filtered by make, year, etc. [HTML,CSS,JS]",
    "is a system designed for a company that wants to check in and check out employees. [Rails, JS, HTML, CSS]",
    "is where I write articles and tell some things about myself. It takes a while to open the website because the heroku server has to start up",
    "is a Frontend Mentor challenge made with HTML, CSS(Grid, Flexbox) & JS",
    "is a small app that responds to anything with a yes or no answer [Vue, HTML, CSS]."
  ]
  let links = [
    "https://gifted-einstein-e0f0e1.netlify.app/",
    "https://whattodo-rails.herokuapp.com/",
    "https://gracious-nobel-67deb6.netlify.app/",
    "https://tlostl-f.herokuapp.com/",
    "https://diego-salinas-blog.herokuapp.com/",
    "https://diegoog09.github.io/remote-work-app/",
    "https://playful-flan-aba5cd.netlify.app"
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
  //Next we want to create a function that will be called when that element is intersected
  function handleIntersection(entries) {
    //The callback will return an array of entries, even if you are only onserving a single item
    entries.map(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animation')
      } else {
        entry.target.classList.remove('animation')
      }
    })
  }
  const observer = new IntersectionObserver(handleIntersection)
  document.querySelectorAll(".pro-bar").forEach(i => {
    if (i) {
      observer.observe(i)
    }
  })
})
