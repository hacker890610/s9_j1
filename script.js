//Fonctionnalité 1
document.addEventListener('DOMContentLoaded', function() {
    var footer = document.querySelector('footer');
    footer.addEventListener('click', function() {
        console.log('clique');
    });
});
//Fonctionnalité 1 bis
document.addEventListener('DOMContentLoaded', function() {
    var footer = document.querySelector('footer');
    var clicCounter = 0;

    footer.addEventListener('click', function() {
        clicCounter++;
        console.log('clic numéro ' + clicCounter);
    });
});

// Fonctionnalité 2
document.addEventListener('DOMContentLoaded', function() {
    
    var hamburgerButton = document.querySelector('.navbar-toggler');
    
    
    var navbarHeader = document.getElementById('navbarHeader');

    
    hamburgerButton.addEventListener('click', function() {
        
        navbarHeader.classList.toggle('collapse');
    });
});

// Fonctionnalité 3
document.addEventListener('DOMContentLoaded', function() {
    
    var firstCard = document.querySelector('.card');

    console.log(firstCard);

   
    var editButton = firstCard.querySelector('.btn-outline-secondary');

    
    console.log(editButton);

    
    editButton.addEventListener('click', function() {
        
        firstCard.querySelector('.card-text').style.color = 'red';

        
        editButton.disabled = true;
    });
});

// Fonctionnalité 4
document.addEventListener('DOMContentLoaded', function() {
    
    var secondCard = document.querySelectorAll('.card')[1];

    
    console.log(secondCard);

    
    var editButton = secondCard.querySelector('.btn-outline-secondary');

    
    console.log(editButton);

    
    editButton.addEventListener('click', function() {
        
        if (secondCard.style.color === 'green') {
            secondCard.style.color = '';
        } else {
            secondCard.style.color = 'green';
        }
    });
});

// Fonctionnalité 5
document.addEventListener('DOMContentLoaded', function() {
    
    var navbar = document.querySelector('.navbar');

    
    navbar.addEventListener('dblclick', function() {
        
        document.querySelectorAll('.card').forEach(function(card) {
            card.classList.toggle('d-none');
        });
        document.querySelector('.jumbotron').classList.toggle('d-none');
    });
});

// Fonctionnalité 6
document.addEventListener('DOMContentLoaded', function() {
    
    var cards = document.querySelectorAll('.card');

    
    cards.forEach(function(card) {
        
        var cardElement = card;

        
        cardElement.addEventListener('mouseover', function() {
            cardElement.querySelector('.card-text').classList.add('d-none');
            cardElement.style.transition = 'all 1.9s';
            cardElement.style.transform = 'scale(0.8)';
            cardElement.style.overflow = 'hidden';
            cardElement.style.height = 'auto';

           
            cardElement.querySelector('.card-img-top').style.width = '20%';

            
            
        });

        
        cardElement.addEventListener('mouseleave', function() {
            
            cardElement.style.transform = 'scale(1)';
            cardElement.style.overflow = 'visible';
            cardElement.style.height = 'auto';

           
            cardElement.querySelector('.card-img-top').style.width = '100%';

           
            cardElement.querySelector('.card-text').classList.remove('d-none');
        });
    });
});



// Fonctionnalité 7
document.addEventListener('DOMContentLoaded', function() {
    
    var nextButton = document.querySelector('.btn-secondary');

    
    nextButton.addEventListener('click', function() {
       
        var cardContainer = document.querySelector('.album .container .row');

      
        var lastCard = cardContainer.lastElementChild;

        cardContainer.insertBefore(lastCard, cardContainer.firstElementChild);
    });
});

// Fonctionnalité 8
document.addEventListener('DOMContentLoaded', function() {
    
    var prevButton = document.querySelector('.btn-primary');

    
    prevButton.addEventListener('click', function(event) {
        
        event.preventDefault();

        
        var cardContainer = document.querySelector('.album .container .row');

        
        var firstCard = cardContainer.firstElementChild;

        
        cardContainer.insertBefore(firstCard, cardContainer.lastElementChild.nextSibling);
    });
});

// Fonctionnalité 9
document.addEventListener('DOMContentLoaded', function() {
    
    var logo = document.querySelector('.navbar-brand');

    
    logo.addEventListener('keypress', function(event) {
        // Récupérez la touche pressée
        var keyPressed = event.key;

        // Sélectionnez le corps de la page
        var body = document.querySelector('body');

        // Retirez toutes les classes du corps
        body.classList.remove('col-4', 'offset-md-4', 'offset-md-8');

        // Appliquez les classes en fonction de la touche pressée
        switch (keyPressed) {
            case 'a':
                body.classList.add('col-4', 'offset-md-4');
                break;
            case 'y':
                body.classList.add('col-4', 'offset-md-4');
                break;
            case 'p':
                body.classList.add('col-4', 'offset-md-8');
                break;
            case 'b':
                // Pour revenir à la normale, ne rajoutez aucune classe
                break;
            default:
                break;
        }
    });
});
