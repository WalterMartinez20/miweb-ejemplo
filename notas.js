/*
*config inicial
*git --version //para ver la version de git
*git config --global user.name "WalterMartinez20" //la config que vamos a add se efectue de manera global y no por proyecto. Con eso config git con nuestro name
*git config --global user.email smis133220@ugb.edu.sv //configu git con nuestro email

*configuramos el editor de texto
*git config --global core.editor "code --wait" //ponemos que VSC es nuestro edit por defec. Wait es pa que la consola se quede esperando hasta que cerremos el edit de texto
*git config --global -e //Se abre el arch de config global dentro de vsc
*core.autocrlf: digamos que hay dos personas que estan trabajando en el mismo repo, la persona A esta trabajando en windows y la persona B en mac, en windows cuando add un salto
de linea, win add dos caracteres especiales para poder marcar esa linea como un salto de linea, se usan CR (carriage return) y LF (line feed), en el caso de linux o mac se add LF,
la persona que esta usando win, cuando quiera subir code, el va a tener que eliminar el caracter especial CR y si quiere descargar code del repo, debera add el CR, para eso tenemos que
cambiar la config de git y la prop de core.autocrlf tiene que tener el val de true, al contrario los user de mac, ellos no estan add el caracter CR, por lo que ellos al subir el code, git no
deberia de realizar ninguna accion sobre el code, pero si por alguna razon el user, debido al editor de texto que el esta usando o puso manualmente el CR, git debe ser capaz de eliminarlo y no
dejar subir el caracter, para esto la prop de autocrlf tiene que contener el val de "input", de esta manera podemos dejar configurado como git va a tratar los saltos de linea ya sea en win, en linux o mac
*git config --global core.autocrlf true //si estamos en linux o mac se cambia el "true" por "input"
*git config -h //nos da un listado de las opciones que podemos add a la config. En mi caso no las abria y me tiraba una advertencia

*comandos de directorios
*ls: nos permite listar todos los arch y carpetas que se encuentran dentro de un directorio
*pwd: nos da el directorio donde nos encontramos
*cd carpeta/: para movernos a una carpeta
*cd ..: salimos del directorio y me devuelve uno mas atras en la jerarquia
*mkdir carpeta: creamos una carpeta o directorio
*git init: inicializamos como un proyecto que vamos a gestionar con git
al usar git init, nos pone en direc como .git, que nos indica que esta oculto, si queremos verlo no va a bastar con usar ls
*ls -a: muestra todo, incluidos los archi que esten ocultos
al usar ls -a, nos sale: . .. .git, el arch .git es el que buscamos, los otros dos puntos los ignoramos xq ya sabemos que con un punto (.) nos quedamos en el mismo direc y que con dos punto (..)
nos movemos un direc atras
*cd .git/ //entramos al arch oculto
*ls //listamos todos los archi en git que se usan para poder gestionar nuestros proyectos, esto es un detalle de implementacion, aqui es donde se van a almacenar las distintas vers de nuestro code,
las distintas ramas, los commit, absolutamente todo, no hay que preocuparse por el space que esto utilizara xq git se encuentra optimizado para utilizar la menor cant de space posible dentro de nuestro
disco duro, y estos son detalles de implemen de como se guardara el code, por lo que a nosotros no nos interesa xq hoy tiene esa estructuraa de carpetas, pero mañana puede cambiar completamente
*cd .. //nos regresamos al direc del proyecto
*la carpeta de .git es siempre ignorada por todos los repo que vayamos a crear y por lo general en una empresa esta carpeta siempre se encuentra ignorada y esta no pasa a un server central o no se comparte entre los
distintos desarrolladores

*flujo de trabajo cuando trabajamos con git
cuando estemos trabajando en la PC, vamos a poder add y modificar todos los arch que nosotros queramos, pero con add, edit y eliminar arch en nuestra pc, esto no quiere decir que se van a add a un repo, para eso tenemos que
ejecu un comando que es "git add", con git add selec los arch que queramos pasar a una etapa que se llama "stage", cuando add estos arch lo que estamos haciendo es verificar todos los cambios que nosotros queremos eventualmente
pasar a nuestro repo, en stage no quiere decir que eso se vera reflejado en el repo, es solo una etapa intermedia para que podamos indicar cuales son los cambios que efectuamos para que estos pasen al repo, no pasan todos, solo los
cambios que nosotros selec, despues de stage van a existir momentos en que nosotros no vamos a querer pasar estos cambios a nuestro repo por lo que vamos a poder sacar estos archi de stage, pero supongamos que ya tenemos los archi y todos
los cambios que queramos comprometer y eventualmen pasarlos al repo, en ese caso ejecu el comando de "git commit", con esto se pasan los archi en la etapa de commit, luego viene la ultima etapa que es opcional entre comillas xq siempre que se
trabaje con git se va a terminar con este paso y es los cambios que nosotros hayamos comprometido los pasaremos a un server con el comando "git push" que se encuentra en la nube, por lo general esta dentro de github,
gitpacket u otros servicios que permiten guardar estos codes.
Si eliminamos un arch debemos usar siempre git add para que en stage se add un archi que hemos eliminado, esto para tener el regis de todo lo que estamos haciendo, luego de hacer este cambio lo podemos comprometer y pasar al server donde este arch
sera eliminado del repo
*code . //con el punto se refiere a que abra la carpeta donde me encuentro. En mi caso abre la carpeta en VSC
tenemos abierto la carpeta miweb que tiene este archi js, en esta carpeta es donde se subiran los cambios
*git status: nos muestra el estado del repo, nos indica que no se han hecho commits todavia y salen los untracked files que son archi que git no esta siguiendo, por defec git no sigue todos los archi que nosotros coloquemos dentro de nuestro proyecto,
nosotros tenemos que selecc, los seleccionamos con "git add"
*git add notas.js //podemos poner como argumento el name del archi, o una expresion regular (*.txt add todos los que tengan el .txt) o tmb el punto "." que add todos loa archi de los untracked files
usar el punto es una mala practica xq se nos puede haber olvidado que modificamos otros archi que quizas no queramos incluir, puede ser que tmb se encuentren archi binarios como imgs, o ejecutables y que no queremos subir al repo xq este se ira haciendo cada
vez mas grande de manera innecesaria, el punto solo se usara en contadas ocasiones donde la cant de code que hayamos escrito estemos 100% seguros que es code util que queremos comprometer
*con git status nos indica que seguimos en la rama main, que no tenemos ningun commit y que se encuentran datos listos para ser comprometidos, osea los archiv verdes se encuentran en la etapa de stage, osea estan listos para ser comprometidos, pero todavia no los
vamos a comprometer, mejor vamos a crear otro archi que sera archivo2.txt y usamos git add para subirlo a stage.
Luego editamos este archi y le damos git status y nos va a salir los dos archi en verde que han sido add a stage, pero tmb nos indica que hay cambios los cuales no se encuentran en stage, y estos cambios son de esta archi xq se han escrito estas lineas
Lo que pasamos a stage no son los archi mismos, si no que son las modificaciones que hemos hecho en estos archi
*Para comprometer los archi (hacer commit) hay dos formas: la 1° y la forma recomendada que es la que vamos a seguir es:
*git commit -m "Commit inicial"
*la otra forma de hacer commit es con "git commit" y presionamos enter y nos abrira un archi en VSC, alli solo tenemos que poner el msj en la primera linea
*rm archivo: eliminamos un archivo
con git status nos saldra que ha sido eliminado el arch, para add este cambio a stage usamos "git add archivo2.txt"
*git rm archivo: este paso de eliminar el archi y luego add a stage es algo repetitivo, pero git tiene un comando que nos ahorra un paso que es "git rm archivo2.txt", con esto ya nos sale el archi en verde listo para ser comiteado, si queremos sacar algun cambio que hayamos
pasado a stage usamos "git restore --staged archivo1.txt", con esto el archi sale en rojo xq ya no se encuentra en stage
git rm notas2.txt //eliminamos el archi y se pasa a stage
git restore --staged notas2.txt //sacamos de stage el cambio de eliminar notas2.txt
git restore notas2.txt //descartamos los cambios que se hicieron, osea recuperamos el archi incluso desde una etapa antes de hacer commit
*mv: mueve y renombra archivos. mv origenDelArchivo destinoDelArchivo. mv notas.js notas1.js
al usar git status nos dice que se ha eliminado notas.js y se ha creado un archivo notas1.js, sale asi por haber usado el mv
add los dos archivos: git add notas.js notas1.js
al usar git status de nuevo nos sale en verde y nos dice que se ha renombrado el archi: renamed: notas.js -> notas1.js
Luego usamos git commit -m "Renombrando archivo"
*Renombramos y ponemos en stage un archivo: git mv notas1.js notas.js
Hacemos commit: git commit -m "Devolviendo el nombre del archivo"

*Como ignorar archivos para que estos no sean incluidos nunca en nuestros repos de git
esto se hace xq a veces tendremos archi de config que sean especificos solo para nuestra PC, como las vars de entorno, supongamos que estamos trabajando en una base, esta base la tendremos instalada en local, y esto para que estemos trabajando en un ambiente de desarrollo,
en ese caso, los users, contraseñas, y cualquier otro tipo de acceso va a ser completamente diferente al de produccion, por eso queremos tener ese doc guardado en la pc, pero que este no se suba por algun error al repo, ya que no queremos que otras personas conozcan nuestra contra
y ademas, queremos que esto sea configurable de manera que cuando la app se despligue a produccion, solo una persona tenga acceso a esas vars de entorno las cuales serviran para configurar la app y que este se conecte finalmente con la base de produccion
*creamos un arch .env que se usa generalmente para vars de entorno, vamos a suponer que la app se va a conectar a una base mysql usando las vars de user y contra. Con git status ya nos sale que podemos add los cambios de .env, pero como no queremos que se suba creamos un archi que se llame
".gitignore" y alli especificamos las rutas de las carpetas o los arch que quiero ignorar y que estas no vayan a nuestro repo, ahora al usar git stat no sale .env, si no solo .gitignore, lo que hacemos es add este arch y lo comprometemos de una
git add .gitignore
git commit -m "Agregando archivo gitignore"
*/
