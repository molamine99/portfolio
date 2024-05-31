document.getElementById('form').addEventListener('submit', function(event) 
{
    event.preventDefault();
    emailjs.sendForm('service_ohf3tx6', 'template_n4tmk13', this)
      .then(function(response) 
      {
        console.log('Email sent!', response.status, response.text);
        alert('Votre email à été envoyé avec succès!');
      }, 
      function(error) 
      {
        console.error('Error sending email:', error);
        alert("Echec lors de l'envoie du mail.");
      });
  });