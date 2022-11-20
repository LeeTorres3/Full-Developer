SELECT
/*Sirve para hacer una consulta de datos*/

FROM 
/*Esta instrucción nos marca los datos de los usuarios, con (SELECT) le decimos que datos queremos saber*/

SELECT name
FROM users;
/*Este ejemplo nos muestra los datos de los usuarios de la columna name (nombres)*/

SELECT title
FROM movies;
/*Este ejemplo nos muestra la lista de títulos de películas de la tabla*/

SELECT name, email
FROM users;
/*Así se hacen varias consultas separadas por una coma el nombre de las columnas de la tabla*/

SELECT *
FROM stock;
/* con el * se puede hacer un consulta de tods los datos de la tabla*/

SELECT DISTINCT name
FROM users;
/*El (DISTINCT) excluye valores duplicados o que se repiten en la columna de la tabla*/
