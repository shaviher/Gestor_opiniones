
# Laboratorio 3 API GESTION DE OPINIONES 

Este sistema tiene como objetivo crear un sistema de gestión de opiniones similar a las publicaciones de 
Facebook, con funcionalidades específicas centradas en la interacción y expresión de opiniones por parte de 
los usuarios.

## Variables de Entorno
- `PORT=3001`
- `URI_MONGO=mongodb://localhost:27017/gestorOpiniones`

## Credenciales del Administrador
```bash
  {
        name: "Braulio",
        lastname: "Echeverria",
        username: "jbraulio85",
        email: "becheverria@gmail.com",
        password: "admin123",
        rol: "ADMIN"
    }
```





# Autenticación: Registrar Usuario
- URL: `/gestionOpiniones/v1/auth/register`
- Método: `POST`

```bash
  {
  "name": "Nombre del usuario",
  "email": "correo@ejemplo.com",
  "password": "contraseña_segura",
  "profilePicture": "imagen_perfil"  // Opcional, si se está subiendo una foto de perfil
}
```
## Respuestas Esperadas
* 201 Created
* 400 Bad Request
* 500 Internal Server Error

# Autenticación: Iniciar Sesión
- URL: `/gestionOpiniones/v1/auth/login`
- Método: `POST`

```bash
  {
  "email": "correo@ejemplo.com",
  "username": "nombre_usuario",
  "password": "contraseña_segura"
}
```
## Respuestas Esperadas
* 200 OK
* 400 Bad Request
* 500 Internal Server Error

# Usuario: Actualizar Usuario
- URL: `/gestionOpiniones/v1/user/updateUser/{uid}`
- Método: `PUT`

```bash
  {
  "name": "Nuevo nombre",
  "email": "nuevo_correo@ejemplo.com"
}
```
## Respuestas Esperadas
* 200 OK
* 400 Bad Request
* 500 Internal Server Error

# Usuario: Actualizar Contraseña
- URL: `/gestionOpiniones/v1/user/updatePassword/{uid}`
- Método: `PATCH`

```bash
  {
  "oldPassword": "contraseña_anterior",
  "newPassword": "contraseña_nueva"
}
```
## Respuestas Esperadas
* 200 OK
* 400 Bad Request
* 500 Internal Server Error

# Usuario: Actualizar Foto de Perfil
- URL: `/gestionOpiniones/v1/user/updateProfilePicture/{uid}`
- Método: `PATCH`

```bash
  {
  "profilePicture": "imagen_perfil_nueva"  // Foto en formato binario
}
```
## Respuestas Esperadas
* 200 OK
* 400 Bad Request
* 500 Internal Server Error

# Publicación: Añadir Publicación
- URL: `/gestionOpiniones/v1/publication/addPublication`
- Método: `POST`

```bash
  {
  "title": "Título de la publicación",
  "content": "Contenido de la publicación"
}
```
## Respuestas Esperadas
* 201 Created
* 400 Bad Request
* 500 Internal Server Error

# Publicación: Actualizar Publicación
- URL: `/gestionOpiniones/v1/publication/updatePublication/{pid}`
- Método: `PUT`

```bash
  {
  "title": "Nuevo título",
  "content": "Nuevo contenido"
}
```
## Respuestas Esperadas
* 200 OK
* 400 Bad Request
* 500 Internal Server Error

# Publicación: Eliminar Publicación
- URL: `/gestionOpiniones/v1/publication/deletePublication/{pid}`
- Método: `DELETE`

## Respuestas Esperadas
* 200 OK
* 400 Bad Request
* 500 Internal Server Error

# Comentarios: Añadir Comentario
- URL: `/gestionOpiniones/v1/comments/addComments/{pid}`
- Método: `POST`

```bash
  {
  "text": "Texto del comentario"
}
```
## Respuestas Esperadas
* 201 Created
* 400 Bad Request
* 500 Internal Server Error

# Comentarios: Actualizar Comentario
- URL: `/gestionOpiniones/v1/comments/updateComments/{cid}`
- Método: `PATCH`

```bash
  {
  "text": "Texto actualizado del comentario"
}
```
## Respuestas Esperadas
* 200 OK
* 400 Bad Request
* 500 Internal Server Error

# Comentarios: Eliminar Comentario
- URL: `/gestionOpiniones/v1/comments/deleteComments/{cid}`
- Método: `DELETE`

## Respuestas Esperadas
* 200 OK
* 400 Bad Request
* 500 Internal Server Error
