$(document).ready(function () {
  $('.submit').click(function (event) {
    console.log('Clicked Button')

    var firstName = $('.firstName').val();
    var secondName = $('.secondName').val();
    var email = $('.email').val();
    var message = $('.message').val();
    var statusElm = $('.status')
    statusElm.empty();

    if(firstName.length <= 2) {
      event.preventDefault()
      $('#f1').append('<div>First Name is not valid!</div>')
    }

    if(secondName.length <= 2) {
      event.preventDefault()
      $('#f2').append('<div>Second Name is not valid!</div>')
    }

    if(email.length < 5 && email.includes ('@') && email.includes ('.')) {
      event.preventDefault()
      $('#f3').append('<div>Email is not valid!</div>')
    }

    if(message.length  < 2) {
      event.preventDefault()
      $('#f5').append('<div>Message is not valid!</div>')
    }

  })
})
