$(document).ready(function () {
  $('#submit').click(function (event) {
    console.log('Clicked Button')

    var firstName = $('.firstName').val();
    var secondName = $('.secondName').val();
    var email = $('.email').val();
    var message = $('.message ').val();
    var statusElm = $('.status')
    statusElm.empty();

    if(firstName.length >= 2) {
      statusElm.append('<div>First Name is valid</div>')
    } else {
      event.preventDefault()
      statusElm.append('<div>First Name is not valid</div>')
    }

    if(secondName.length >= 2) {
      statusElm.append('<div>Second Name is valid</div>')
    } else {
      event.preventDefault()
      statusElm.append('<div>Second Name is not valid</div>')
    }


    if(email.length > 5 && email.includes ('@') && email.includes('.')) {
      statusElm.append('<div>Email is valid</div>')
    } else {
      event.preventDefault()
      statusElm.append('<div>Email is not valid</div>')
    }

    if(message.length >= 10) {
      statusElm.append('<div>Message is valid</div>')
    } else {
      event.preventDefault()
      statusElm.append('<div>Message is not valid</div>')
    }

  })
})
