Entrega 1 - Pautas Individuales
Modelar las entidades y sus propiedades, detectadas a partir de la lectura del obligatorio. Para el modelado, puedes hacer uso de herramientas cómo draw.io, o cualquier otra herramienta que prefieras, incluso puedes hacerlo en una hoja de cálculos.
Realizar una petición web a una URL donde se encuentra una colección de productos en formato JSON, con la información básica (precio, nombre, breve descripción) respectiva a cada producto, y mostrar el listado en HTML.
Realizar una pantalla de autenticación, de forma tal que la misma sea el inicio del sitio (en vez de la portada donde se muestra el listado de categorías). Aquí podrás encontrar algún ejemplo.

Pautas grupales
Agregar las validaciones correspondientes de usuario y contraseña (campos no vacíos) y redireccionar al sitio de portada cuando presione el botón de Ingresar.
Nota: la autenticación será ficticia, es decir que los datos ingresados por el usuario se tomarán siempre cómo válidos, el único criterio de validación de datos será que haya ingresado valores en ambos campos.

Desafiate
Quieres realizar una autenticación real con Google?, para eso visita los siguientes links:

OAuth
Autenticación Google

--------------------------------------------------------------
--------------------------------------------------------------

Entrega 2 - Pautas Individuales
Con el listado de productos desplegados:

Aplicar filtros a partir de rango de precio definido.
Agregar las funcionalidades de orden ascendente y descendente en función del precio y descendente en función de la relevancia.
Pautas grupales
En la barra de navegación superior, agregar en la esquina superior derecha el nombre del usuario ingresado en la pantalla de inicio de sesión.
Nota: investiga aquí cómo almacenar el usuario autenticado para utilizarlo en la barra de navegación, Recuerda que el usuario deberás almacenarlo en la pantalla de autenticación previo a redirigir al listado de productos. Para redirigir, te puede ser de ayuda este link.

Desafiate
Además de realizar las funcionalidades de ascendente y descendente, ¿no estaría bueno también tener un buscador?

Incorpora un campo de texto buscador <input type="search" />, donde filtre en tiempo real (reflejar el resultado en cada tecla presionada) según el texto que se ingresa en dicho campo. Incluir en la búsqueda el text en título y/o descripción de los artículos. Estos links te pueden ayudar:

Eventos de tecleo.
Obtener texto de un campo de texto (o buscador).

---------------------------------------------------------------------
---------------------------------------------------------------------

Entrega 3 - Pautas Individuales
Realizar una petición web a una URL con un identificador del producto donde se encuentra toda la información detallada del mismo. Toda la información se deberá desplegar en HTML.
Realizar una petición web a una URL donde ya se encuentran los comentarios y puntuación precargados del producto del punto anterior. Mostrar en HTML la información. ¿Quieres aplicar la puntuación en formato de estrellas?, entra aquí.
Pautas grupales
Agregar los controles gràficos necesarios para poder realizar un nuevo comentario y puntuación. El envío de datos será ficticio, es decir que no se implementará el envío de los mismos.
Desafiate
Si bien el comentario ingresado no será enviado a ningún servidor, cuando se simule el envío del mismo, intenta agregarlo cómo un comentario más de los mostrados referente al producto.

--------------------------------------------------------------------
--------------------------------------------------------------------

Entrega 4 - Pautas individuales
Realizar una petición web a una URL donde se encuentra un carrito ya con un producto precargado. Mostrar en HTML la información respecto al mismo, y los elementos gráficos que involucran al carrito (cantidad de productos, subtotal, envío, etc).
Pautas grupales
Dado el carrito de compras artículo ya cargado en el punto anterior, reflejar el costo total de la compra de ese artículo en tiempo real si se modifica la cantidad. Recuerda que el subtotal se calcula como el precio unitario del producto multiplicado por la cantidad.
Desafiate
En el carrito de las pautas anteriores se encuentra únicamente un producto, prueba a ver que tal te va con un carrito con 2 artículos precargados. Ten en cuenta que cada uno se encuentra en distinta moneda (para esto cotiza el dólar a $40 pesos).

El link de este carrito es: https://japdevdep.github.io/ecommerce-api/cart/654.json.

------------------------------------------------------------------------
------------------------------------------------------------------------

Entrega 5 - Pautas individuales
Es hora de crear nuestro perfil. Recuerda que en la pauta grupal de Entrega 4 elaboramos un menú donde una de las opciones es Mi perfil. Ahora implementaremos esta pantalla. La misma consiste en mostrar nuestros datos personales:
Nombres y apellidos
Edad
E-mail
Teléfono de contacto
Deberá de haber un botón de forma tal que almacene los cambios guardados con respecto a cualquiera de los datos personales, que deberàn ser modificables. Para almacenar nuestro perfil, volveremos a hacer uso de guardar en sesión, cómo se hizo en la pauta grupal de la Entrega 2. Recuerda del uso de los métodos JSON.stringify y JSON.parse para poder almacenar y recuperar los datos almacenados respectivamente.

Ten en cuenta que para efectivamente guardar los datos, se deberá probar a partir de la siguiente forma:

Modificar los datos personales.
Presionar el botón de guardar datos.
Cerrar la pestaña del navegador.
Volver a abrir la pestaña del navegador e ir a mi perfil.
Se deberá mostrar allí los datos guardados.
La primera vez (donde previamente no se guardaron los datos), los campos se deberán mostrar vacíos.
Pautas grupales
Es hora de tener presente el concepto de grilla y Responsive Design. Para esto, en vez de mostrar la lista de productos en forma de filas, se deberán mostrar en forma de cuadrícula. Para esto, investigar el concepto de sistema de grilla que se encuentra en este link.

Allí se explica qué clases de Bootstrap se deben aplicar para poder distribuir los elementos HTML. Recordar que los elementos mencionados se construyen a partir del código JavaScript, por lo tanto es posible que se deba modificar archivos .html y/o .js.

Aquí puedes ver un ejemplo del sistema de grillas aplicado. Consejo: redimensiona la ventana del navegador para observar los distintos comportamientos de la distribución de los elementos cuando las dimensiones se asemejan a las de un dispositivo móvil.

Desafiate
En la página de nuestro perfil, ¿sabías que incluso puedes almacenar una imagen en sesión?. Para esto, primero deberás obtener una imagen con un link público de forma tal que la primera vez se guarde esa imagen en sesión.

Para obtener el link público:

Ingresa aquí.
Selecciona que elimine la imagen automáticamente luego de un mes.
Selecciona la opción HTML completa avanzada, copia el elemento y pegalo en el lugar apropiado de tu perfil.
Visita este link para saber cómo guardar la imagen en sesión y mostrarla.

-------------------------------------------------------------------------------------------------------------------
-------------------------------------------------------------------------------------------------------------------

Entrega 6 - En esta entrega retomaremos al carrito de compras para terminar de implementar las funcionalidades del mismo:

Pautas individuales
A partir de seleccionar un botón de forma de pago, mostrar una ventana con la opción de seleccionar el mismo, y sus campos respectivos. Puedes investigar aquí cómo mostrar ventanas.
A partir de la selección del método de envío, calcular el envío en base al subtotal y el porcentaje respectivo al envío seleccionado. Reflejar ese costo en el desglose de costos del carrito ya hecho en la entrega anterior, en tiempo real al momento de seleccionar entre los distintos envíos posibles.
Pautas grupales
Validar que todos los campos se encuentran seleccionados y/o con valor para poder realizar la compra. El único control de validación será que los campos se encuentran completados: método de envío, cantidad, etc.
Desafiate
Cuando pensamos que terminamos de implementar el carrito, nos damos cuenta que no hay opción de eliminar cualquiera de los artículos. Piensa e implementa la mejor forma de ofrecer al usuario la manera de quitar cualquier artículo del listado, y reflejar los costos.

---------------------------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------------------------

Entrega 7 - Pautas individuales
Es momento de salir de las tecnologías web del navegador, y aceptar el desafío de levantar nuestro propio servidor. Esto quiere decir que deberemos modificar las URLs que hasta ahora ha utilizado el sitio para consumir los datos correspondientes, y los ofreceremos a partir de nuestro propio servidor, corriendo en nuestra computadora de forma local.

Para poder correr un servidor, haremos uso de node.js, Debemos también descargar nuestros datos en archivos formato JSON que se encuentran en el repositorio ecommerce-api en los directorios cart, category y product, y proporcionarlos en tu servidor local. Para esto sigue los pasos.

Notas:

No olvides consultar el material que se encuentra dentro de esta carpeta de entrega, donde encontrarás información sobre cómo instalar y hacer uso de NodeJS y ExpressJS.
Recuerda modificar las URLs del sitio (archivo init.js), accediendo ahora a tu servidor local, y verificar que todo funcione!
No subir las URLs modificadas al repositorio de código, ya que no funcionarán una vez publicado el sitio. Esto sucede debido a que las URLs “apuntaràn” a un servidor local (tu computadora) donde no es accesible desde internet.
La entrega consistirá en entregar el archivo app.js junto con los archivos json involucrados.
Pautas grupales
Comparte con tu compañero/a las mayores dificultades que has tenido en general en todo el obligatorio, brindando y considerando las recomendaciones que surjan y llevarlas a cabo.
Desafiate
Recuerdas que es ficticia la compra una vez completado el carrito?. Ahora que contamos con nuestro propio servidor, intenta publicar una URL donde se deba realizar el envío de datos al servidor del carrito al clickear Comprar. En el servidor, obtén los datos a partir del método POST, y crea un archivo de texto guardando los datos recibidos. Fijate aquí cómo guardar un archivo de texto, y aquí para publicar una URL en con post y obtener los parámetros.

_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_==_==_==_==_==_==_==_=_=_=_=_=_=_=_=_=_=_=_=_=_
=======================================================================__________________________________=========
=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_==_==_==_==_==_==_==_==__=_=_=_=_=_=_=_=_=_=_=_=_________=====

SECCIONES DE LA PAGINA Y DETALLES DE CONTENIDO:

Ideas mercado libre
Inicio:
Destacar productos populares o nuevos.
Ofertas especiales o promociones.
Navegación fácil y llamativa
Noticias
Contenido relevante sobre productos.
Consejos de uso.
Novedades y actualizaciones de la tienda.

Categorias:
Categorías claras y organizadas.
Filtros de búsqueda para facilitar la navegación.
Imágenes de alta calidad y descripciones detalladas.

Productos:
Imágenes detalladas del producto.
Descripciones completas.
Información sobre precios y opciones de compra.

Carrito:
Resumen claro de los productos seleccionados.
Proceso de pago sencillo.
Opciones de modificación del carrito.
Formulario de pago seguro.
Opciones de envío y facturación.
Resumen de la orden antes de la compra.

Mi Perfil:
opcion para publicar venta
Historial de pedidos.
Información de la cuenta y configuraciones.
Posibilidad de guardar productos favoritos.
se despliega cerrar sesion

Contacto:
Información de contacto.
Formulario de contacto o chat en vivo.
Enlaces a redes sociales.

Ofertas y Descuentos:
Sección para ofertas especiales.
Programas de lealtad o descuentos.

Para el footer:
Política de Devoluciones y Términos de Servicio
Claridad en las políticas de devolución y reembolso.
Términos y condiciones del servicio.
Preguntas Frecuentes

Seguridad y Confianza:
Certificados de seguridad.
Testimonios de clientes.
Sellos de garantía y confianza.

----------------------------------------------------------------------------------
----------------------------------------------------------------------------------

INICIO CON GOOGLE 


Crear un Proyecto en la Consola de Desarrolladores de Google:

Ve a Google Cloud Console.
Crea un nuevo proyecto o selecciona uno existente.

Configurar la API de Google:
En el panel de la consola de Google Cloud, activa la API de "Google Identity Toolkit API" o "Google Sign-In API" (según la documentación actualizada).
Configura las credenciales para obtener el ID de cliente y la clave secreta.

Agregar la Biblioteca de Google Sign-In:
Agrega la biblioteca de Google Sign-In en tu página HTML. Puedes hacer esto agregando el siguiente script en el <head> de tu HTML:

html
Copy code
<script src="https://apis.google.com/js/platform.js" async defer></script>
Configurar el Botón de Inicio de Sesión con Google:

Agrega un botón en tu formulario HTML para iniciar sesión con Google. Puedes usar un botón normal o el proporcionado por Google.

html
Copy code
<button id="google-login-button">Iniciar Sesión con Google</button>
Configurar la Autenticación con Google en JavaScript:

Agrega el siguiente script JavaScript para manejar la autenticación con Google.

html
Copy code
<script>
  function onSignIn(googleUser) {
    // Esta función se llama cuando el usuario inicia sesión con Google
    var profile = googleUser.getBasicProfile();
    console.log('ID: ' + profile.getId()); // ID único del usuario
    console.log('Nombre: ' + profile.getName()); // Nombre del usuario
    console.log('Email: ' + profile.getEmail()); // Email del usuario
    // Puedes realizar más acciones con la información del usuario aquí
  }

  function signOut() {
    // Esta función se llama cuando el usuario cierra sesión
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
      console.log('Usuario ha cerrado sesión.');
    });
  }

  // Configuración del botón de inicio de sesión con Google
  document.getElementById('google-login-button').addEventListener('click', function() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signIn().then(onSignIn);
  });
</script>
Asegúrate de reemplazar 'google-login-button' con el ID de tu botón.

Inicializar Google Sign-In:

Agrega el siguiente script al final de tu archivo HTML para inicializar Google Sign-In.

html
Copy code
<script>
  gapi.load('auth2', function() {
    gapi.auth2.init({
      client_id: 'TU_CLIENT_ID', // Reemplaza con tu ID de cliente
    });
  });
</script>
Asegúrate de reemplazar 'TU_CLIENT_ID' con el ID de cliente que obtuviste al configurar las credenciales en la consola de Google Cloud.

Pruebas:

Abre tu página web y verifica que el botón de inicio de sesión con Google funcione correctamente.
Estos pasos proporcionan una guía general. La implementación exacta puede variar según tu aplicación y requisitos específicos. Consulta la documentación oficial de Google Sign-In para obtener información detallada y actualizada.

----------------------------------------------------------------------------
----------------------------------------------------------------------------
Comandos sass

npm init 
(nos brinda nuestros datos, si estan ok, damos "y" )

npm install -g sass
instala sass



sass --watch sass/style.scss css/coso.css
COMPILA

Ctrl  + C 
STOP



IDEAS ////////// 
Puede ser un ecommerce para que las personas publiques sus ropas usadas, dejar direccion para retirar o coordinar con comprador