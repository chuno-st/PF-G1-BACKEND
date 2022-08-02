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

Trae producto por ID, sino trae to
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


//-------------------------USER----------------------/


GET USER BY ID - Traer Usuario por ID (pasar id "sub" por params)
get.${URL}adduser/:id


GET ROLES USER BY ID - Pasar id por params para recibir string con role del usuario
get.${URL}adduser/checkrole/user/:id


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
material_id: "",
state: true,
stock: default 0
}


Modificar Producto (PASAR POR BODY OBJETO)
patch.${URL}product/
{
id: "",
name: "",
description: "",
price: "",
image: "",
category_id: "",
subCategory_id: "",
material_id: "",
stock: "",
state: ""
}

traer todos los productos CON O SIN FILTRADOS
get.{URL}product/admin TODOS VALORES POR QUERY
{
    name: "",
    category_id: "",
    subCategory_id: "",
    material_id:"",
    max: "",
    min: ""
}

get.{URL}product/admin/:id (product)

Eliminar Producto (PASAR POR PARAMS ID
delete.${URL}product/:id


//ES DE USER
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
    "state":"",
    "color":[]
}


Modificar Material (PASAR POR BODY OBJETO)
patch.${URL}material/
{
    "id": 23,
    "name": "marmolNegroCambiadoUltimaVez",
    "hardness": "3",
    "purity":"2",
    "state":"",
    "color":[""]
}

Revisir todos los materiales 
get.${URL}material/admin


Desactivar material
delete.${URL}material/id=${id_producto}?state=${true o false}
id por params
stado por body


//---------------------------CATEGORY------------------------/


Crear Category  (PASAR POR BODY OBJETO)
post.${URL}category/
{
    "name": "cualquiercosa",
}

Modificar Category (PASAR POR BODY OBJETO)
patch.${URL}category/
{
    "id":9,
    "name":"Lentes",
    "state": ""
}

Revisar todos los materiales 
get.${URL}category/admin


Desactivar category
delete.${URL}category/id=${id_producto}?state=${true o false}
id por params
stado por body


//-------------------------SUB-CATEGORY----------------------/


Crear SubCategory  (PASAR POR BODY OBJETO)
post.${URL}subcategory/
{
    "name": "cualquiercosa",
}

Modificar SubCategory (PASAR POR BODY OBJETO)
patch.${URL}subcategory/
{
    "id":9,
    "name":"Lentes"
    "state": ""
}

Revisar todas las subCategory 
get.${URL}subcategory/admin


Desactivar subcategory
delete.${URL}subcategory/id=${id_producto}?state=${true o false}
id por params
stado por body


//-------------------------USER_FAVS----------------------/TODO USER


Agregar Favorito  (PASAR POR BODY PRODUCTO Y POR PARAMS PASAR EL ID DEL USUARIO)
post.${URL}favs/:id
{
    "product_id": 7
}

Eliminar Favorito  (PASAR POR BODY PRODUCTO Y POR PARAMS PASAR EL ID DEL USUARIO)
put.${URL}favs/:id
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


GET ALL USER 
get.${URL}adduser

Agregar/modificar datos USER  (PASAR POR BODY LOS DATOS DEL USUARIO)//USER
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
  "genero":"srting",
  "state": true
}

Modificar isAdmin del User (PASAR POR BODY EL ID DEL USUARIO Y EL BOOLEANO NUEVO DE ISADMIN)
patch.${URL}adduser/admin/
{
    "id":"google-oauth2|1.-.-.-.-.-.-.-5",
    "isAdmin": true
}


//------------------------- SALES ----------------------/


GET ALL SALES
get.${URL}sales

Modificar Status de la Compra (PASAR POR BODY EL ID DE LA COMPRA Y EL NUEVO STATUS "dispatch" o "ANULED")
patch.${URL}sales
{
    "id":1304403323,
    "status":"ANULED"
}

traer todos los productos comprados por el usuario
get.{URL}sales/user/:id


Filter x Status (PASAR DATOS POR QUERY)
get.{URL}sales/filter/order?order=DESC


Filter x Order Sales (PASAR DATOS POR QUERY)
get.{URL}sales/filter/status?status=approved


Filter x Order Date Sales (PASAR DATOS POR QUERY)
get.{URL}sales/filter/orderDate?orderDate=ASC


Filter x Order Range Date Sales (PASAR DATOS POR QUERY)
get.{URL}sales/filter/rangeDate?desde=2022-07-31&hasta=2022-08-02


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