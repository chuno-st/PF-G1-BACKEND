# PF-G1-BACKEND

Pasos a seguir luego de tener repo.

Posicionarse en rama Develop y generar el respectivo npm i

luego para poder manipular una base de datos local, agregar archivo .env a nivel de carpeta (siendo asi, archivo de PF-G1-BACKEND)

Completar datos con datos pasadon en "#BACKEND INFO" de discord
Completar datos .ENV con DB_USER, DB_HOST, DB_PASSWORD (esta carpeta generarla a nivel de gitignore)

TRAE TODOS LOS PRODUCTOS
${URL}product

Si hay parametros trae los que contengan ese nombre, sino trae a todos.
${URL}product?name=${str}

Trae producto por ID, sino trae todo
${URL}product/{id}

filtra por subcategory y rango de precio si faltan parametros devuelve todo
${URL}product/subCategory?subcategory=${int}&max=${int}&min=${int}

filtra por orderBy(name o price), order(ASC o DESC) y paginado, si faltan parametros devuelve todo
${URL}product/order?orderBy=${str}&order=${str}&limite=${int}&desde=${int}

Trae todas las categorias
${URL}category

Traer productos por rango de precio
${URL}product/rangeprice?min=${int}&max=${int}

Traer productos por material NOMBRE
${URL}product/material?material=${str}

Traer productos por query
${URL}product/allfilter?category_id=${int}&subCategory_id=${str}&material_id=${str}&name=${str}&max=${str}&min=${str}


//-------------------------PRODUCTOS----------------------/


Crear Producto  (PASAR POR BODY OBJETO)
post.${URL}product/
{
name: "",
description: "",
price: "",
image: "",
category_id: "",
subCategory_id: "",
material_id: ""
}


Modificar Producto (PASAR POR BODY OBJETO)
put.${URL}product/
{
id: INT (obligatorio)
name: "",
description: "",
price: FLOAT,
image: "",
category_id: "",
subCategory_id: "",
material_id: ""
}


Eliminar Producto (PASAR POR PARAMS ID)
delete.${URL}product/:id


Agregar comentario a producto (PASAR {id, comment, author, rating} POR BODY)
post.${URL}product/addreview
{
    "id": "" ,
    "coment": "",
    "author": "",
    "rating": ""
}



//-------------------------MATERIAL----------------------/

Crear Material  (PASAR POR BODY OBJETO)
post.${URL}material/
{
    "name": "marmoldecolores",
    "hardness": "4",
    "purity":"5",
    "color":[]
}


Modificar Material (PASAR POR BODY OBJETO)
put.${URL}material/
{
    "id": 23,
    "name": "marmolNegroCambiadoUltimaVez",
    "hardness": "3",
    "purity":"2",
    "color":[]
}

Eliminar Material (PASAR POR PARAMS ID)
delete.${URL}material/:id





//---------------------------CATEGORY------------------------/

Crear Category  (PASAR POR BODY OBJETO)
post.${URL}category/
{
    "name": "cualquiercosa",
}

Modificar Category (PASAR POR BODY OBJETO)
put.${URL}category/
{
    "id":9,
    "name":"Lentes"
}

Eliminar Category (PASAR ID POR PARAMS )
delete.${URL}category/:id




//-------------------------SUB-CATEGORY----------------------/

Crear SubCategory  (PASAR POR BODY OBJETO)
post.${URL}category/
{
    "name": "cualquiercosa",
}

Modificar SubCategory (PASAR POR BODY OBJETO)
put.${URL}category/
{
    "id":9,
    "name":"Lentes"
}

Eliminar SubCategory (PASAR ID POR PARAMS )
delete.${URL}category/:id




//-------------------------USER_FAVS----------------------/

Agregar Favorito  (PASAR POR BODY PRODUCTO Y POR PARAMS PASAR EL ID DEL USUARIO)
post.${URL}favs/:id
{
    "product_id": 7
}

Eliminar Favorito  (PASAR POR BODY PRODUCTO Y POR PARAMS PASAR EL ID DEL USUARIO)
delete.${URL}favs/:id
{
    "product_id": 7
}

Get Favs (PASAR ID DEL USUARIO POR PARAMS)
get.${URL}favs/:id

Check Fav (PASAR POR BODY PRODUCTO Y POR PARAMS PASAR EL ID DEL USUARIO)
post.${URL}favs/checkfav/:id
{
    "product_id": 7
}


//-------------------------USER_ADMIN----------------------/

Agregar/modificar datos USER  (PASAR POR BODY LOS DATOS DEL USUARIO)
put.${URL}adduser
{
  "id":"google-oauth2|1-.-.-.-.-.-.5",    
  "calle":"string",
  "direccion":1234,
  "piso":"string",
  "departamento":"",
  "codigo_postal":5006,
  "provincia":"string",
  "localidad":"string",
  "telefono":3,
  "dni":12121212,
  "fecha_nacimiento":"2000-10-24",
  "genero":"srting"
}

Modificar isAdmin del User (PASAR POR BODY EL ID DEL USUARIO Y EL BOOLEANO NUEVO DE ISADMIN)
put.${URL}adduser/admin/
{
    "id":"google-oauth2|1.-.-.-.-.-.-.-5",
    "isAdmin": true
}

Delete User (PASAR ID DEL USUARIO POR BODY)
delete.${URL}adduser/admin/
{
    "id":"google-oauth2|1.-.-.-.-.-.-.-5",
}


------------------------------------------------------------------------------------

DATOS MERCADO PAGO

USUARIO 1 VENDEDOR

{"id":1165071449,"nickname":"TESTLWQ9KQVB","password":"qatest6361","site_status"
:"active","email":"test_user_70735004@testuser.com"}
Acces Token TEST-5156527929068625-072206-65b513d9ae0512a3368f73d499f60b79-1165071449


USUARIO 2 COMPRADOR

{"id":1165072510,"nickname":"TESTMYCQYJIS","password":"qatest9956","site_status"
:"active","email":"test_user_99523462@testuser.com"}

------------------------------------------------------------------------------------