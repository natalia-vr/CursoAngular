/*********************************************************************************************************/
/****************************************  IMPORTANCIONES ANGULAR ****************************************/
/*********************************************************************************************************/


import { Component , OnInit } from '@angular/core';

// importamos la libreria de firebase de autenticacion
import * as firebase from 'firebase';


/*********************************************************************************************************/
/*********************************************************************************************************/
/*********************************************************************************************************/

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  title = 'app';
  // cuando se arranque la aplicacion , se ejecutara este metodo para conectarnos a firebase

  ngOnInit(): void {
    
    firebase.initializeApp({

      // tenemos que ir a firebase
      // *Authentication  *Metodo de inicio de sesion  *Habilitar correo y contraseña
      // *Configuracion web : copiamos 'apiKey' y 'authDomain' que  son claves de la API de comunicacion firebase

      apiKey: "AIzaSyCPSyy8GDg74IlT003z-Ziv8nDWV81-Oqs",
      authDomain: "cursoangularcompras.firebaseapp.com"

    })

  }
  
}
