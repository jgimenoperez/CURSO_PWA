# Twittor

Un cascarón de chat usando jQuery para PWAs


chrome://inspect/#devices




PWA vs Aplicación móvil
0 votos
Fernando Aguilar · Clase 117 · hace 2 años
Hola Fernando el curso me parece muy interesante sin embargo me queda la duda... cuándo debería de construir una PWA y cuándo una aplicación móvil?.
Saludos.

1 respuesta

Jaime — Profesor asistente
1 voto
hace 2 años
¡Hola Fernando!



Pues tendrías que ver las ventajas y desventajas de cada desarrollo y decidir cúal es mejor para tu aplicación en concreto, ya que dependiendo de las caracteristicas de la misma te vendrá mejor una u otra...



Te dejo unos enlaces donde te explican diferencias entre cada una de ellas, te animo a que sigas buscando e informandote de los puntos claves entre los dos tipos para poder decidir luego en cada aplicación que se te presente.

https://es.goodbarber.com/blog/mejor-elegir-una-pwa-o-una-app-nativa-a609/

https://platzi.com/blog/pwa-vs-apps-nativas/

https://jelvix.com/blog/pwa-vs-native-app-benefits-for-users-and-developers

https://medium.com/inside-smartapps/native-application-vs-progressive-web-app-which-one-should-you-choose-5eeaaf6ee92d

https://www.ionos.es/digitalguide/paginas-web/desarrollo-web/progressive-web-apps-pros-y-contras/



https://web.dev/customize-install/
https://web.dev/manifest-updates/
https://web.dev/progressive-web-apps/
https://web.dev/promote-install/
https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/Installable_PWAs
https://developers.google.com/codelabs/pwa-training/pwa03--going-offline?hl=es#0
http://www.webondevices.com/9-javascript-apis-accessing-device-sensors/
https://web.dev/progressive-web-apps/


PWA Launcher

//controlar si esta instalado o no
https://pwaexperts.io/tutoriales/como-agregar-pwa-home-screen-movil-escritorio-chrome
https://fontawesome.com/v5.15/icons/arrow-down?style=solid




----------------------
ALINEAR CENTRADO DENTRO DE UN DIV

<!DOCTYPE html>
<html>
  <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" 

<head>

<style>

.install {
  width: 100px;
  height: 100px;
  background-color: #91a7cf;
  border-radius: 50%;
  box-shadow: 0 2px 6px 0 #666;
  transition: all 0.1s ease-in-out;

  font-size: 10px;
  color: white;
  text-align: center;


  position: fixed;
  top: 5px;
  left:5px;
  bottom: 10px;


 

}

.position-absolute__content {
  left: 50%;
  position: absolute;
  top: 50%;

  transform: translate(-50%, -50%);
}


p {

   margin: 0 !important;
}

.contenedor{
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 50px auto;
 }



</style>
</head>
<body>

  <div id="install" class="install  " title="Instalar APP">
  	<div class="position-absolute__content">
    <p>Install</p>
    <p class="fas fa-arrow-down" style="font-size:15px;padding-top:0px" ></p>
    </div>
  </div>


<section class="contenedor">
     <div class="item-1">1</div>
     <div class="item-2">2</div>  
     <div class="item-3">3</div>  
     <div class="item-4">4</div> 
     <div class="item-5">5</div> 
     <div class="item-6">6</div>  
</section>

</body>
</html>


https://developer.mozilla.org/es/docs/Web/CSS/position