

CREATE TABLE usuarios (
  id SERIAL PRIMARY KEY,
	nombre VARCHAR(255) NOT NULL,
	apellido VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
  altura DECIMAL,
  cintura DECIMAL,
  busto DECIMAL,
  peso DECIMAL,
  state VARCHAR(50)
);

INSERT INTO usuarios (nombre,apellido,email,password,altura,cintura,busto,peso, state) Values ('roger','rodriguez','test@test.com','12345','10','10','10','10','tu cuerpo')
Select * from usuarios