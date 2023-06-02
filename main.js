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


// ex 2 

function getData() {
    // Remplir un tableau de 9 chiffres de 1 à 9
    var T = [];
    for ( var i = 1; i <= 9; i++ ) {
        T.push( i );
    }

    // Supprimer la valeur 9 du tableau
    var index = T.indexOf( 9 );
    if ( index !== -1 ) {
        T.splice( index, 1 );
    }

    // Mélanger les éléments du tableau
    for ( var i = T.length - 1; i > 0; i-- ) {
        var j = Math.floor( Math.random() * ( i + 1 ) );
        var temp = T[ i ];
        T[ i ] = T[ j ];
        T[ j ] = temp;
    }

    // Copier le tableau T dans un tableau à 2D de 3 lignes et 3 colonnes
    var T2D = [];
    for ( var i = 0; i < 3; i++ ) {
        T2D.push( T.slice( i * 3, ( i + 1 ) * 3 ) );
    }

    return T2D;
}

console.log( getData() );

let table = document.getElementById( 'myTable' );
console.log(table);

const init = () => {
    let tr1 = document.createElement( 'tr' );
    let tr2 = document.createElement( 'tr' );
    let tr3 = document.createElement( 'tr' );
    let data = getData();

    data.forEach( ( el ) => {
        for ( let i = 0; i < 3; i++ ) {
            let td = document.createElement( 'td' );
            let tdText = document.createTextNode( el[ i ] );
            td.appendChild( tdText );
            if ( i === 0 ) {
                tr1.appendChild( td );
            } else if ( i === 1 ) {
                tr2.appendChild( td );
            } else {
                tr3.appendChild( td );
            }
        }
    } );

    // let table = document.createElement( 'table' );
    table.appendChild( tr1 );
    table.appendChild( tr2 );
    table.appendChild( tr3 );

    // document.body.appendChild( table ) ;
}

console.log( init() );


