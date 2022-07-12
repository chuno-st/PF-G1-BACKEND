# PF-G1-BACKEND

Pasos a seguir luego de tener repo.

Posicionarse en rama Develop y generar el respectivo npm i

luego para poder manipular una base de datos local, agregar archivo .env a nivel de carpeta (siendo asi, archivo de PF-G1-BACKEND)

Completar datos con datos pasadon en "#BACKEND INFO" de discord
Completar datos .ENV con DB_USER, DB_HOST, DB_PASSWORD (esta carpeta generarla a nivel de gitignore)

Estoy en remote

TRAE TODOS LOS PRODUCTOS
http://localhost:3001/product 


Si hay parametros trae los que contengan ese nombre, sino trae a todos. 
http://localhost:3001/product?name=${str}


Trae producto por ID, sino trae todo
http://localhost:3001/product/{id}


filtra por category, subcategory y paginado, si faltan parametros devuelve todo
http://localhost:3001/product/category?category=${int}&subcategory=${int}&limite=${int}&desde=${int}


filtra por orderBy(name o price), order(ASC o DESC) y paginado, si faltan parametros devuelve todo
http://localhost:3001/product/order?orderBy=${str}&order=${str}&limite=${int}&desde=${int}


Trae todas las categorias
http://localhost:3001/category
