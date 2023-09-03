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