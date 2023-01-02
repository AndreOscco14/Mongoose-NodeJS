Para iniciar MongoDB ---> mongo
Para ver las BBDD ---> show dbs
Para entrar a ver la BBDD ---> use (NombreBBDD)
                            use nombreBDD 
Mostrar datos de la BBDD ---> show collections  (Muestra lo que lleva dentro Collecciones).
Para ver los datos dentro de la BBDD ---> db.(NombreColeccion).find()
                                       db.(NombreColeccion).find().pretty() ---> Muestra datos más ordenado

Hacer una consulta para saber un nombre ---> (NombreColleccion).find({name: '' });
                                            User.findOne({ username: 'Andre'});  --> Otra Forma