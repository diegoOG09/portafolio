const sendBtn = document.querySelector('#sendBtn')
const nameValue = document.querySelector('#name')
const emailValue = document.querySelector('#email')

let data = {
    name: nameValue,
    email: emailValue
}


emailjs.send('service_gjk6ws8', 'template_5nfkvhm', data)
    .then(function(response) {
        console.log('SUCCES', response.status, response.text)   
    }, function(error) {
        console.log('FAILED...', error)
    })