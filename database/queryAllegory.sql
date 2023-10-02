DROP TABLE IF EXISTS usuarios;


CREATE TABLE usuarios (
	id_usuario SERIAL PRIMARY KEY,
	nombre VARCHAR(255) ,
	apellido VARCHAR(255) ,
	email VARCHAR(255) UNIQUE,
	password VARCHAR(255),
	cintura DECIMAL,
	busto DECIMAL,
	altura DECIMAL, 
	peso DECIMAL,
	cadera DECIMAL, 
	largo_tiro DECIMAL, 
	largo_pierna DECIMAL, 
	hombro DECIMAL, 
	largo_manga DECIMAL, 
	largo_pie DECIMAL, 
	empeine DECIMAL, 
	state VARCHAR(50)
	);
	

INSERT INTO usuarios (
	nombre,
	apellido,
	email,
	password,
	cintura,
	busto,
	altura, 
	peso,
	cadera, 
	largo_tiro, 
	largo_pierna, 
	hombro, 
	largo_manga, 
	largo_pie, 
	empeine,
	state)	
	VALUES (
		'mariant',
		'rojas',
		'test@test.com',
		'12345',
		'50',
		'155',
		'70',
		'100',
		'50',
		'155',
		'70',
		'100',
		'100',
		'50',
		'155',
		'70'
		'tu cuerpo'
	);

SELECT * FROM usuarios;



CREATE TABLE productos (
	id_producto SERIAL PRIMARY KEY,
	nombre_producto VARCHAR(255) ,
	 tipo_producto VARCHAR(255) ,
	stok INTEGER,
	precio FLOAT,
	 ubicacion VARCHAR(255) ,
	 img_url VARCHAR(255) ,
	 talla VARCHAR(255) ,
	 pecho VARCHAR(255) ,
	 cintura VARCHAR(255) ,
	 color VARCHAR(60),
	);
	

INSERT INTO productos (
	nombre_producto,
	 tipo_producto,
	stok,
	precio,
	 ubicacion,
	 img_url,
	 talla, 
	 pecho,
	 cintura,
	 color)	
	VALUES (
		'Apology Blazer Mujer',
		'blazer',
		10,
		39990,
		'https://www.falabella.com/falabella-cl/product/882760208/Apology-Blazer-Mujer/882797758?exp=tienda',
		'https://falabella.scene7.com/is/image/Falabella/882797758_1?wid=1500&hei=1500&qlt=70',
		'm',
		'99',
		'80',
		'verde'
	);


	SELECT * FROM productos;