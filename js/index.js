document.addEventListener("DOMContentLoaded", function() {
    // Redirect to user language page
    var manual = document.cookie.split('; ').find(row => row.startsWith('user_language_preference='))?.split('=')[1];

    if (!manual) {
        var FullUserLang = navigator.language || navigator.userLanguage;
        var userLang = FullUserLang.slice(0, 2);

        if (userLang === "en") {
            if (window.location.href !== "https://en.gemsync.xyz/") {
                window.location.replace("https://en.gemsync.xyz/");
            }
        } else {
            if (window.location.href !== "https://gemsync.xyz/") {
                window.location.replace("https://gemsync.xyz/");
            }
        }
    }
});

window.addEventListener('scroll', function(){
    var header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
});

function toggleMenu(){
    var  menuToggle = document.querySelector('.toggle');
    var  menu = document.querySelector('.menu');
    menuToggle.classList.toggle('active');
    menu.classList.toggle('active');
}

function mail(event) {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);
    const submitButton = document.getElementById('submitButton');

    submitButton.value = 'Sending...';
    submitButton.style.backgroundColor = '#e3a739';

    fetch(form.action, {
        method: form.method,
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    })
    .then(response => {
        if (response.ok) {
            submitButton.value = 'Sent !';
            submitButton.style.backgroundColor = '#4caf50';
            form.reset();
            setTimeout(() => {
                submitButton.value = 'Send';
                submitButton.style.backgroundColor = '#46449e';
            }, 3000);
        } else {
            alert('There was a problem with your submission. Please try again.');
            submitButton.value = 'Send';
            submitButton.style.backgroundColor = '#46449e';
        }
    })
    .catch(error => {
        console.error('Erreur:', error);
        alert('There was a problem with your submission. Please try again.');
        submitButton.value = 'Send';
        submitButton.style.backgroundColor = '#46449e';
    });
}