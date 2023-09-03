DROP TABLE IF EXISTS usuarios;


CREATE TABLE usuarios (
	id_usuario SERIAL PRIMARY KEY,
	nombre VARCHAR(255) ,
	apellido VARCHAR(255) ,
	email VARCHAR(255) UNIQUE,
	password VARCHAR(255),
	altura DECIMAL,
	cintura DECIMAL,
	busto DECIMAL, 
	peso DECIMAL,
	  state VARCHAR(50)
	);
	

INSERT INTO usuarios (
	nombre,
	apellido,
	email,
	password,
	altura,
	cintura,
	busto,
	peso,
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
		'tu cuerpo'
	)

SELECT * FROM usuarios;