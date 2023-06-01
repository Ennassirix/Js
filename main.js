// get Elements By The ID : 

const valider = document.getElementById( 'valider' );
const cne = document.getElementById( 'cne' );
const nom = document.getElementById( 'nom' );
const email = document.getElementById( 'email' );
const date = document.getElementById( 'date' );

// start form Validation : 
const Valider = () => {
    let star = document.getElementById( 'star' );
    return star.style.color = 'red';
}


const ValidForm = () => {
    if ( cne.value === '' ) {
        // Valider();
        alert( 'cne must fiel out' );
    } else if ( !ValidCne( cne.value ) ) {
        alert( 'cne not valid' );
    }
    if ( nom.value === '' ) {
        // Valider();
        alert( 'nom must fiel out' );
    } else if ( !Validnom( nom.value ) ) {
        alert( 'nom not Valid' );
    }
    if ( email.value === '' ) {
        alert( 'email is empty' );
    } else if ( !Validemail( email.value ) ) {
        alert( 'email not valid' );
    }
    if ( date.value === '' ) {
        alert( 'date not set' );
    } else if ( !Validedate( date.value ) ) {
        alert( 'date not valid' );
    }
}


valider.addEventListener( 'click', ( e ) => {
    e.preventDefault();
    ValidForm();
} )

const ValidCne = ( cne ) => {
    let cneGerex = /[0-9]{14}/;
    let cneText = cne;
    return cneGerex.test( cneText );
}

const Validnom = ( nom ) => {
    let nomRegex = /^[A-Z]{1}[a-z]{2,}/;
    let nomText = nom;
    return nomRegex.test( nomText );
}

const Validemail = ( email ) => {
    let emailRegex = /\/w+@\/w+\.[a-z]{,3}/ ;
    let emailText = email;
    return emailRegex.test(emailText);
}