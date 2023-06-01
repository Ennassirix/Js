// get Elements By The ID :
const valider = document.getElementById( 'valider' );
const cne = document.getElementById( 'cne' );
const nom = document.getElementById( 'nom' );
const email = document.getElementById( 'email' );
const date = document.getElementById( 'date' );

// start form Validation :
const GetRed = () => {
    let star = document.querySelectorAll( '.star' );
    star.forEach( element => {
        element.classList.add( 'invalid-star' );
    } );
};
const RemoveRed = () => {
    let star = document.querySelectorAll( '.star' );
    star.forEach( element => {
        element.classList.remove( 'invalid-star' );
    } );
}

const ValidForm = () => {
    if ( cne.value === '' ) {
        GetRed();
        return false;
    } else if ( !ValidCne( cne.value ) ) {
        GetRed();
        alert( 'Invalid CNE' );
    } else {
        RemoveRed();

    }
    if ( nom.value === '' ) {
        GetRed();
        return false;
    } else if ( !ValidNom( nom.value ) ) {
        alert( 'Invalid Nom' );
    } else {
        RemoveRed();

    }
    if ( email.value === '' ) {
        GetRed();
        return false;
    } else if ( !ValidEmail( email.value ) ) {
        alert( 'Invalid Email' );
    } else {
        RemoveRed();

    }
    if ( date.value === '' ) {
        GetRed();
        return false;
    } else if ( !ValidDate( date.value ) ) {
        alert( 'Invalid Date' );
    } else {
        RemoveRed();

    }
};

valider.addEventListener( 'click', ( e ) => {
    e.preventDefault();
    ValidForm();
} );

const ValidCne = ( cne ) => {
    let cneRegex = /[0-9]{14}$/;
    return cneRegex.test( cne );
};

const ValidNom = ( nom ) => {
    let nomRegex = /^[A-Z][a-z]{2,}$/;
    return nomRegex.test( nom );
};

const ValidEmail = ( email ) => {
    let emailRegex = /^\w+@\w+\.[a-z]{2,3}$/;
    return emailRegex.test( email );
};

const ValidDate = ( date ) => {
    // Assuming the date format is dd/mm/yyyy
    let dateRegex = /^\d{2}\/\d{2}\/\d{4}$/;
    return dateRegex.test( date );
};
