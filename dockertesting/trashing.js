db.createUser({
    user:'pruebauser',
    pwd:'pruebauser',
    roles:['readWrite']
})

db.usuarios.insertMany([
    {
        nombre:'Carlos Fraile',
        foto:'https://picsum.photos/200',
        descripcion:'Primer objeto de la lista'
    },
    {
        nombre:'Manuel Gómez',
        foto:'https://picsum.photos/200',
        descripcion:'segundo objeto de la lista'
    },
    {
        nombre:'Rodrigo Díaz',
        foto:'https://picsum.photos/200',
        descripcion:'Tercer objeto de la lista'
    },
]);



db.usuarios.insertMany([
    {
        "nombre":"Carlos",
        "correo":"Carlos@correo.es",
        "password":"carlospass",
        "rol":"ADMIN_ROLE"

    },
    {
        "nombre":"Juan",
        "correo":"Juan@correo.es",
        "password":"Juanpass",
        "rol":"ADMIN_ROLE"
    },
    {
        "nombre":"Alberto",
        "correo":"Alberto@correo.es",
        "password":"Albertopass",
        "rol":"ADMIN_ROLE"
    },
    {
        "nombre":"Laura",
        "correo":"Laura@correo.es",
        "password":"Laurapass",
        "rol":"ADMIN_ROLE"
    },
    {
        "nombre":"Lorena",
        "correo":"Lorena@correo.es",
        "password":"Lorenapass",
        "rol":"VENTAS_ROLE"
    },
    {
        "nombre":"Joaquin",
        "correo":"Joaquintest@test.es",
        "password":"Buenardovichado",
        "rol":"USER_ROLE"
    }
])