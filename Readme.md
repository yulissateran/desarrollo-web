

# Curso de responsive design 


## DOM
 Es el acrónimo de Document Object Model o Modelo de objetos del documento, que tiene una estructura en forma de árbol. Cada elemento, atributo y pieza de texto en el HTML se convierte en un nodo DOM en la estructura de árbol.

El DOM es donde se encuentran el CSS y el contenido del documento,por eso comprender el DOM ayuda a diseñar, depurar y mantener el CSS. 

A continuación, un ejemplo sencillo de la estructura del DOM:

- html
  - head
      - title
      - meta
  - body
    - header
    - nav
    - section
    - article
    - footer

El navegador analiza el HTML y crea un DOM a partir de él, luego analiza el CSS y aplica las reglas que se asignaron a los elementos correspondientes.

## Sintaxis CSS

![sintaxis-css](/images/sintaxis-css.png)

**regla** : selector +  declaraciones

**declaración**:  propiedad + valor  

**bloque de declaraciones**:  conjunto de declaraciones

**selector**: etiqueta, clase, id, etc.

## Selectores

**Selectores simples** :  
coinciden con uno o más elementos según el tipo de elemento class, o id.  
- Diferencian entre mayusculas y minusculas
tipos de selectores simples:
- De clase
- De id 
- Universal (*)
 Permite seleccionar todos los elementos en una página. Rara vez se usa para aplicar un estilo a todos los elemento de una página, a menudo se usa en combinación con otros selectores


**Selectores de atributos** :  
Coinciden con uno o más elementos en función de sus atributos / valores de atributos.
Contienen un nombre de atributo seguido de una condición opcional para coincidir con el valor del atributo.  
La condicion puede ser de un valor específico o de un valor contenido dentro de una lista de valores del atributo.

Estos selectores de atributos intentan hacer coincidir un valor de atributo exacto:

**[attr]** --> Selecciona todos los elementos con el atributo *attr*.  
**[attr=val]** -->  Selecciona todos los elementos donde el valor del atributo *attr* sea igual a *val*.  
**[attr~=val]** --> Selecciona todos los elementos donde el valor del atributo *attr*  contenga a *val*   en su lista de valores separados por espacios. 

ofrecen una coincidencia flexible

**[attr^=val]**: Selecciona todos los elementos con el atributo attr para el cual comienza el valor val.
**[attr$=val]**: Selecciona todos los elementos con el atributo attr para el cual el valor termina con val.  
[attr*=val] : Selecciona todos los elementos con el atributo attr para el cual el valor contiene la subcadena val. (Una subcadena es simplemente parte de una cadena, por ejemplo, "cat" es una subcadena en la cadena "caterpillar".) 

**Pseudo-clases** :  
Coinciden con uno o más elementos que existen en un cierto estado, como: 
- Un elemento que se encuentra sobre el puntero del mouse,
- Una casilla de verificación que actualmente está desactivada o marcada. 
- Un elemento que es el primer elemento secundario de su padre en el árbol DOM.

**Pseudo-elementos** :  
Coincide con una o más partes del contenido que se encuentran en cierta posición en relación con un elemento, por ejemplo  
  - La primera palabra de cada párrafo,  
  - El contenido generado que aparece justo antes de un elemento.

**Combinadores** :  
Estos no son exactamente selectores en sí mismos, sino formas de combinar dos o más selectores de manera útil para selecciones muy específicas. Entonces, por ejemplo puede seleccionar:  
  - solo los párrafos que son descendientes directos de divs.
  - los párrafos que vienen directamente después de los encabezados.  
~~~
div > p {
  color: blue;
}
~~~

**Selectores múltiples** :  
Se dan cuando se colocan varios selectores en la misma regla de CSS separados por comas, para aplicar una regla CSS a todos los elementos seleccionados por esos selectores.

~~~
  p, h1, span {
    color: red;
  }
~~~

## Selectores de atributos

## Pseudo clases y Pseudo elementos

## Herencia en CSS

## Modelo  de caja

## Validación CSS

## Combinaciones y selectores multiples

## Colores CSS:
  se pueden representar de tres formas:
  - **palabras clave** : red-blue,transparent, etc.(son limitados , solo existen alrededor de 165 , se usan para representar  colores sencillos)
  - **hexadecimal**
    colores exactos, específicos
    se componen de cualquiera de estos 16 caracteres: 123456789ABCDEF 

    full color   (blanco)  
    **#FFFFFF**   => #FFF  

    ausencia de color  (negro)  
    **#0000000**   => #000 
       
    Los dos primeros caracteres después de # representan color rojo,  
    los dos siguientes: verde  
    dos siguientes : azul  
    Por lo tanto :

    #FF0000 => rojo
 
    #00FF00 => verde

    #00000FF => azul
  
  - **rgb()**  

    **RGB** es una función, a la que pasamos tres parámetros que representas los colores  rojo, verde y azul, parecido al sistema hex. La diferencia radica en que, en lugar de representar cada canal por un par de números, ahora lo hacemos simplemente por un número decimal entre el 0 y el 255.
    - rgb(red, green, blue)
    - rgb(0-255, 0-255, 0-255)
    - rgb (255, 0, 0) --> red

  - **hls()** 

    HSL significa tono o matiz (hue), saturación(saturation) y brillo (lightness)  

    **hue (tono)**: Es   el color básico. Toma un valor entre 0-360, como los ángulos de una rueda de color.  
    - 0 es red,  
    - 120 es green,  
    - 240 es blue  

    **saturación**:  
     ¿Qué tan saturado está el color?  
    Con valores entre 0 y 100%.
    - 0 no hay color (aparece como una sombra gris)  
    - 100% es la saturación total del color.  

    **lightness (brillo)**:  
    Representa la claridad del color.  
    Toma valores entre 0 y 100%.  
    - 0 es la ausencia de luz (completamente negro)  
    - 100% es el brillo total (completamente blanco).  

  - **rgba() -  hlsa()**  
      rgb() y hls() tienen sus correspondientes funciones  
      rgba() y  hlsa()
      Que nos permiten representar, no solo el color, sino también la transparencia del color. Toman los mismos parámetros, más un cuarto valor entre 0–1 — que establece la transparencia, o el llamado canal alfa. 
      - 0 es totalmente transparente  
      - 1 completamente opaco.  
       #### Ejemplo: 
      - rgba(255,0,0,0.5)  
      - hsla(240,100%,50%,0.5)

    Son muy útiles para crear mezcla de fondos, elementos UI semi-transparentes, etc. 
  - **Opacity**  
  Es otra forma de especificar la transparencia vía CSS.
  En lugar de fijar la transparencia de un determinado color de fuente o de fondo,  aquí fijamos la transparencia de todo el elemento seleccionado y sus hijos.
  La opacidad es útil cuando queremos crear un efecto animado en el que todo el elemento UI va, desde completamente visible a invisible ( o viceversa).


  ## UNIDADES DE MEDIDA
  ### **Unidades absolutas**

  - **pixel**:  
  Es la menor unidad homogenea de color
  que forma parte de una imagen digital. Podemos usarlos para redimensionar 
  imgenes, texto,
  bordes, margenes, etc.
  Es una unidad absoluta que siempre tendrá la misma medida.

  ### **Unidades relativas**
  
  - **em**  
  Hace referencia a la medida de fuente del elemento actual. Por defecto los navegadores usan 16px de fuente, por lo que 1em es originalmente 16px.Debido a que el tamaño de fuente es heredable, si se modifica el tamaño de fuente del elemento padre de un elemento, el tamaño de fuente en sus elementos hijos también cambiarán y 1em tendrá la misma medida que el nuevo tamaño de fuente.

 
  - **rem**  
   Hace referencia al tamaño de fuente del elemento ráiz (html) o el elemento más lejano que tenga establecido un font-size (body por ejemplo),  por defecto mide 16px.
  Cambia cuando se modifica el tamaño de fuente del elemento más lejano con tamaño de fuente establecido.
  - **vw - vh**
   Estas son respectivamente 
    - 100% del ancho del ancho del área visible de la ventana.  
    - 100% de la altura del área visible de la ventana.

  - **Porcentajes**  
  Hace referencia a un porcentaje de las medidas  del elemento padre.
    #### Ejemplo:
    El elemento div medirá 50px, que es el 50% del alto de su elemento padre (body).

    ~~~
    body {
      height: 100px;
    }

    body div {
      height: 50%;
    }
    ~~~

  - **Valores sin unidades**  
  Encontrar un valor sin unidades — no siempre es un error. 
  Es permitido en algunas ocasiones.  
   **Ejemplos**:
    1. Cuando el valor es 0, ya que 0 es 0 cualquiera que fuera la unidad anterior.
    ~~~
    margin: 0;
    ~~~
    2. En Line-height, para establecer la altura de cada línea de texto en un elemento. Normalmente se usa un valor que actua como multiplicador.
    ~~~
     line-height: 1.5;
    ~~~
    El font-size son 16px;  
    la altura de linea **1.5 veces esta**, o sea **24px**.

## Fuentes personalizadas  
incluir fuentes:  

~~~
 body {
   font-family: Arial, Helvetica, sans-serif;
 }
~~~

 Arial, opción 1
 Helvetica si no encuentra la opcion 1 
 sans-serif  indica que debe tener serifas  

cuando el nombre tiene espacios, debe estar entre comillas 
~~~
h1 {
  font-family: 'Times New Roman', Times, serif;
}
~~~


Además de todas las propiedades comunes que comparten los elementos estándar de html, como: display, position, margin, padding, top, left, right, bottom, border, etc., los elementos que admiten contenidos textuales aceptan una serie particular de propiedades entre las que se encuentran las siguientes:

font-family: define el tipo de fuente aplicado al texto.  
color: define el colore del texto.  
line-height: define la altura desde la base del texto hasta la base de la siguiente línea de texto.  
font-size: define el tamaño del texto, admite cualquiera de las unidades de medida disponibles.  
letter-spacing: define el espaciado entre las letras del texto.  
font-weight: define el ““peso”” de la letra, negrita, normal, light y normalmente se indica en múltiplos de 100 o usando keywords.  
text-decoration: define el decorado del texto como subrayado, tachado, con subrayado superior, etc.  
text-transform: permite transformar el estado de mayúsculas / minúsculas en el texto, usando uppercase para mayúsculas sostenidas, lowercase para minúsculas sostenidas, etc.  

~~~

h1 {
   line-height: 150%;
   line-height: 1.5;
   line-height: 1.5em;
}

h1 {
  font-size: 40px;
  line-height: 1.5;
  font-weight: 400; 
  font-weight: normal; 
  font-weight: bold;
  font-style: italic;
}
~~~

MARGENES
h1 {
  margin: top right bottom left;
}

## Tipos de display
Display es la propiedad de css que indica cómo debe ser mostrado un elemento html. Todos los elementos tienen algún tipo de display. Si un elemento no se ve en pantalla es porque segurmanete su display es none.

Los valores más comunes que puede recibir la propiedad display son:

block: el elemento intenta abarcar todo el ancho posible.
inline: reduce su tamaño exclusivamente hasta lo que abarca su contenido, descartando las propiedades width y height.
inline-block: combina lo mejor de block e inline, ya que respeta las dimensiones indicadas en las propiedades width y height, pero coloca el elemento en línea (al costado) de elementos hermanos que también tengan display: inline o inline-block.
flex: asume algunas propiedades por defecto que favorecen la alineación de los elementos internos.
grid: similar a flex, asume algunas propiedades por defecto organizando los contenidos en filas y columnas.
none: oculta el elemento. 

FLEX:
display que afecta eldisplay 
del elemento con respecto a sus hijo directos

propiedad paralos hijos de un elemento flex, para que el ancho de  no cambie:
flex-shrink: 0 -1;
0  nada encojible
1 encojible


flex-wrap: wrap;
para que cuando los hijosde 
un elelemento flex ya no quepan en unalinea, bajen a la siguiente
Alinear elementos Horizontal:
justify-content: flex-start- flex-end - center- 
space-araund : espacio igual a la izquierda y derecha de cada elemento hijo

space-between - el mismo espacio entre los hijos, exepto en los extremos ,
 dondeno hay nada de esppacio
space-evenly :el mismo espacio entre todos los hijos

Alinear elementos Vertical:
align-items:  center;

 align-self: flex-start; 
APRENDÍ COSAS NUEVAS:
VERTICAL-ALIGN 
object-fit: cover;
line-height
overflow
font face

position

## Posicionamiento:
satic: defecto

con cualquiera que no sea static se desbloquean dos conjuntos de 
propiedades:
z-index --> sirve para sobreponer nuestro elemento
top right bottom left -- > 
sirven para mover nuestro elemento con coordenadas
pueden ser negativo 
left : -10px
relativo, absoluto, fijo, static.


fixed: se 
absolute
sticky 

Flex: 
-flex
-flex-shrink
-


## VIDEOS HTML5
 
<video><video>











Estas son todas las herramientas (páginas, extensiones, etc) sobre colores, colorpicker, y demás, que he recopilado de los usuarios platzi que han comentado en estas clases:

http://www.colorzilla.com/chrome/
https://www.w3schools.com/colors/colors_picker.asp?color=80ced6
https://cssgradient.io/
https://htmlcolorcodes.com/es/
https://www.materialpalette.com/colors
https://materializecss.com/
https://color.adobe.com/es/create/color-wheel/
http://thestocks.im/?utm_source=launchers

http://html-color.org/es/
http://prettycolors.tumblr.com/add
https://www.rapidtables.com/web/color/html-color-codes.html
https://colorhunt.co/
https://www.color-hex.com/
http://annystudio.com/software/colorpicker/
https://picpick.uptodown.com/windows/descargar

https://html-color-codes.info/codigos-de-colores-hexadecimales/

Color Picker para Visual Studio Code:
https://marketplace.visualstudio.com/items?itemName=anseki.vscode-color
 

 gris oscuro : #1d252c
  gtris claro:#626262
  background gris:#1b2127
  extensiones colorpicker
  color snaper // solo funciona en MAC
   


  BORDES:
  .proyect {
  border: tamaño, tipo, estilo;
}

.proyect {
  border: 1px solid gray;
  border-radius: 10px;
   border-top-left-radius: 900px ;
  background-color: #1b2127; 
}

