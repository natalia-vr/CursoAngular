
/*********************************************************************************************************/
/****************************************  IMPORTANCIONES ANGULAR ****************************************/
/*********************************************************************************************************/

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

// importaciones para formularios
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

// se importan los paquetes de routing ( para las rutas )
import { Routes , RouterModule } from '@angular/router';

// importamos dependencias para peticiones http
import { HttpModule } from '@angular/http';

// importamos la libreria de firebase de autenticacion
import * as firebase from 'firebase'; 



/*********************************************************************************************************/
/******************  IMPORTANCIONES DE NUESTROS SERVICIOS Y COMPONENTES  Y MODULO  ***********************/
/*********************************************************************************************************/

// servicios
import { ProveedoresService } from './servicios/proveedores.service';
import { PresupuestosService } from './servicios/presupuestos.service';
import { AutenticacionService } from './servicios/autenticacion.service';
import { ProteccionderutasService } from './servicios/proteccionderutas.service';

// componentes
import { ProveedoresComponent } from './proveedores/proveedores/proveedores.component';
import { InicioComponent } from './inicio/inicio.component';
import { HeaderComponent } from './header/header.component';
import { AddProveedoresComponent } from './proveedores/addproveedores/addproveedores.component';
import { AddpresupuestosComponent } from './presupuestos/addpresupuestos/addpresupuestos.component';
import { PresupuestosComponent } from './presupuestos/presupuestos/presupuestos.component';
import { EditpresupuestosComponent } from './presupuestos/editpresupuestos/editpresupuestos.component';
import { NuevousuarioComponent } from './autenticacion/nuevousuario/nuevousuario.component';
import { LoginComponent } from './autenticacion/login/login.component';

import { AddfacturasComponent } from './facturas/facturas/addfacturas/addfacturas.component';


// modulo
import { FacturasModule } from './facturas/facturas.module';



/*********************************************************************************************************/
/*********************************************************************************************************/
/*********************************************************************************************************/

// RUTAS
// creamos un array de constantes que contendra todas las rutas de la aplicacion
// canActivate : [ProteccionderutasService] : para proteger las rutas de la aplicacion
const rutas : Routes  = [

  // path : ruta
  // component : componente al que llama

  // RUTA INICIO
  // la ruta '' llama al componente InicioComponent
  { path : '' , component : InicioComponent  } ,

  // RUTA DE LISTADO PROVEEDORES
  // la ruta 'inicio/proveedores' llama al componente ProveedoresComponent
  { path : 'inicio/proveedores' , component : ProveedoresComponent , canActivate : [ProteccionderutasService] } , 

  // RUTA AÑADIR PROVEEDOR
  // la ruta 'inicio/proveedores/addproveedores' llama al componente AddProveedoresComponent
  { path : 'inicio/proveedores/addproveedores' , component :  AddProveedoresComponent , canActivate : [ProteccionderutasService]} , 

  // RUTA LISTADO PRESUPUESTOS 
  // la ruta 'inicio/listpresupuestos' llama al componente PresupuestosComponent
  { path : 'inicio/listpresupuestos' , component :  PresupuestosComponent , canActivate : [ProteccionderutasService] } , 

  // RUTA AÑADIR PRESUPUESTOS 
  // la ruta 'inicio/listpresupuestos/addpresupuestos' llama al componente AddpresupuestosComponent
  { path : 'inicio/listpresupuestos/addpresupuestos' , component :  AddpresupuestosComponent , canActivate : [ProteccionderutasService] } , 

  // RUTA MODIFICAR PRESUPUESTOS 
  // la ruta 'inicio/listpresupuestos/editpresupuestos/:id' llama al componente EditpresupuestosComponent
  // con '/:id' especificamos la ruta especifica para llegar al objeto presupuesto que queremos modificar
  { path : 'inicio/listpresupuestos/editpresupuestos/:id' , component :  EditpresupuestosComponent , canActivate : [ProteccionderutasService] } , 

  // RUTA NUEVO USUARIO / REGISTRO
  // la ruta 'nuevousuario' llama al componente NuevousuarioComponent
  { path : 'nuevousuario' , component :  NuevousuarioComponent } , 

  // RUTA LOGIN
  // la ruta 'login' llama al componente LoginComponent
  { path : 'login' , component :  LoginComponent } , 

  // RUTA DE LISTADO FACTURAS
  // la ruta 'inicio/facturas/addfactura' llama al componente AddfacturasComponent
  { path : 'inicio/facturas' , component : AddfacturasComponent , canActivate : [ProteccionderutasService] } , 

  // PARA RUTAS QUE NO EXISTEN
  // path : '**'  --> para rutas que no existen 
  // la ruta '**' llama al componente inicio
  { path : '**' , component : InicioComponent }

]


@NgModule({

  // añadimos nuestros propios componentes
  declarations: [
    AppComponent,
    ProveedoresComponent,
    InicioComponent,
    HeaderComponent,
    AddProveedoresComponent,
    AddpresupuestosComponent,
    PresupuestosComponent,
    EditpresupuestosComponent,
    NuevousuarioComponent,
    LoginComponent,
    AddProveedoresComponent,
    
  ],

  // añadimos importaciones de  los modulos
  imports: [

    BrowserModule,

    // añadimos la importacion de routing
    // se establece un array de rutas que va a emplear nuestra aplicacion para cargar en la pagina
    // diferentes componentes
    RouterModule.forRoot(rutas),

    // añadimos el componente Angular de Formularios
    FormsModule,

    // añadimos el componente Angular de Formularios reactive
    ReactiveFormsModule,

    // añadimos el componente Angular de Formularios
    HttpModule,

    // añadimos nuestro componente Facturas
    FacturasModule
    
  ],

  // añadimos los servicios que creamos dentro del array
  providers: [ 

    ProveedoresService , 

    PresupuestosService ,

    AutenticacionService,

    ProteccionderutasService,

  ],

  // determina cual es el modulo raiz
  bootstrap: [ AppComponent ]

})

export class AppModule { }
