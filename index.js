const firebaseApp = firebase.initializeApp({ 
    apiKey: "AIzaSyCvdNBUlnM3QCu_9-IF9XSjq8AkyFqU0BU",
    authDomain: "estudiar-214d5.firebaseapp.com",
    projectId: "estudiar-214d5",
    storageBucket: "estudiar-214d5.appspot.com",
    messagingSenderId: "761523708569",
    appId: "1:761523708569:web:6589cefc1d9f14b2254e08"});


const db = firebaseApp.firestore();

const base = db.collection("estudiante");


function obtenerDatos() {
    
    
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const codigo = document.getElementById('codigo').value;

    codigo = parseInt(codigo);
    

        db.collection("estudiante").add({
            nombre: nombre,
            apellido: apellido,
            codigo: codigo
        });
}



// ----------------------------------- Agregar Coleccion de: Estudiante ---------------------------

/*db.collection("estudiante").add({
    nombre: "Sergio",
    apellido: "Alvarez",
    codigo: 191818
})*/


// ----------------------------------- Eliminar Estudiante ----------------------------

//base.doc("k2IUhrkFBZvJVo9WIHSi").delete();


// ----------------------------------- Modificar campos -----------------------------------

/*base.doc("Ui8sULkDBbk7mBE0VkzJ").set({
    nombre: "Sergio"
})*/


// ------------------------------------- Agregar campos ----------------------------------

/*base.doc("Ui8sULkDBbk7mBE0VkzJ").update({
    nombre: "Sergio Andres",
    apellido: "Ortiz",
    codigo: 191792,
    activo: true
})*/


//-------------------------------------- Obtener informacion ----------------------------------

/*base.get().then(snap => {
    const estudiantes = [];

    snap.forEach(sn => {

        estudiantes.push({
            id: sn.id,
            ...sn.data()
        })

        
        
    });
    console.log(estudiantes)
})*/


//------------------------------------- Consultas -----------------------------------------------

base.where('nombre', '==', 'Sergio').where('apellido', '==', 'Ortiz').get().then(snap => {
    const estudiantes = [];

    snap.forEach(sn => {

        estudiantes.push({
            id: sn.id,
            ...sn.data()
        })

        
        
    });
    
    console.log(estudiantes);
})

// ------------------------------------- Imprimir en pantalla ------------------------


/*base.get().then(snap => {
    
    const estudiantes = [];
    snap.forEach(sn => {

        estudiantes.push({
            id: sn.id,
            ...sn.data()
        })      
        
    });
    const impresion = document.getElementById("contenedor");

    let tabla = `<table>
                        <thead>
                            <tr>
                                <th>Nombre</th>
                                <th>Apellido</th>
                                <th>Codigo</th>
                            </tr>
                        <tead>
                    `

    for(let i = 0; i<estudiantes.length; i++){

            tabla = tabla + `
                            <tr>
                                <td>${estudiantes[i].nombre}</td>
                                <td>${estudiantes[i].apellido}</td>
                                <td>${estudiantes[i].codigo}</td>
                            </tr>
                            `

    }

    impresion.innerHTML=tabla;
})*/

