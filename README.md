# ELDAR CHALLENGE

Este proyecto fue desarrollado para el Front End Challenge de Eldar, el cual se constituye de 2 pantallas principales por la cual el usuario puede navegar: Log In y Home.
Se utilizó Angular con la librería PrimeNG, y para el manejo de datos y estado global se aplicó Ngrx para que los datos puedan persistir en el store y ser accedidos de manera fácil -mediante suscripciones- en componentes y comunicar los datos por input().

Para la protección de rutas y roles se utilizó un Guard para poder navegar en la aplicación solamente si hay un usuario logueado. Para los usuarios de tipo 'admin', se muestran los botones de "crear" y "editar" correspondientemente en la tabla de datos, mientras que para el usuario 'user', se los oculta. 
Los componentes utilizados de PrimeNG fueron inputs, modals, toast, tablas, skeleton, paginadores, y se componentizó todo para mejor manejo y código limpio, utilizando comunicación padre-hijo entre los componentes.
Para el orden y arquitectura se dividieron los componentes y páginas en carpetas presentadas en pages y components. Cada feature tiene su carpeta de ngrx correspondiente donde se manejan los archivos de efectos, reducers, etc. y también los servicios en caso que los posean.

Para el diseño, se manejó una clase global de CSS y para los componentes que necesitaban una "vuelta de rosca", se aplicaron clases y estilos adentro del componente. Se mantuvo una imagen sencilla con cards y botones. Se probó de manera responsiva. También se simula tiempo de carga cuando se navega entre las páginas de la tabla, mostrando un skeleton. El Log In posee un componente que muestra un mensaje de error en caso que el usuario o contraseña estén mai ingresados, y para mayor seguridad, no se muestra de manera explícita cuál es el dato incorrecto.

Para el llamado a apis se utilizó la librería de angular HTTPClient para realizar los get, post y put. Ya que la API de referencia es ficticia, no se logran mostrar los nuevos datos o datos realmente actualizados, pero de todas formas los llamados a servicios se envían de manera que, al actualizar un dato, se vuelva a llamar al get de la lista para obtenerlos nuevamente, si así se pudiera, actualizados. Esto se puede visualizar en "network".

Como funcionalidades opcionales se agregó un paginado para los datos que se muestran en la tabla de forma ordenada, y también un mensaje toast cuando se quiere crear o actualizar un dato de la tabla. Se mostrará tanto en caso de éxito como falla, dependiendo de lo que suceda con el servicio. Auto focus en el input de usuario de login para comodidad. Toggle Mask para poder elegir si se muestra la contraseña o no a medida que se escribe. 
La aplicación cuenta con un estado "loading" que poseen tanto el Store de autenticación como el de datos, para mostrar componente de carga en caso que los servicios demoren en cargar. Se puede realizar el diseño y aplicar en el app.component.html, y mostrarlo leyendo la propiedad loading del store.

Se puede cerrar sesión y se pueden utilizar los siguientes usuarios para iniciar sesión con la contraseña "test123":

    username: 'admin',
    role: 'admin',

    username: 'eldar',
    role: 'admin',

    username: 'user',
    role: 'user',

Se validan ambos campos usuario y contraseña para habilitar el botón Iniciar Sesión.

        --Gastón Ibarrola Heer


# [Angular CLI] version 17.3.9.
## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.