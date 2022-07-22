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

--------------------------------------------------------------
DATOS MERCADO PAGO

USUARIO 1 VENDEDOR

{"id":1165071449,"nickname":"TESTLWQ9KQVB","password":"qatest6361","site_status"
:"active","email":"test_user_70735004@testuser.com"}
Acces Token TEST-5156527929068625-072206-65b513d9ae0512a3368f73d499f60b79-1165071449


USUARIO 2 COMPRADOR

{"id":1165072510,"nickname":"TESTMYCQYJIS","password":"qatest9956","site_status"
:"active","email":"test_user_99523462@testuser.com"}
------------------------------------------------------------------------------------