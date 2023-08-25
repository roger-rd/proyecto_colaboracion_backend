import {pool } from "../database/connection.js";

const findAll = async () => { 
    const {rows} = await pool.query("SELECT * FROM usuarios")
    return rows;
 };

 const findById = async(id_usuario)=>{
    const text = "SELECT * FROM  usuarios WHERE id_usuario = $1";
    const {rows} = await pool.query(text,[id_usuario]);
    return rows[0]
 };

 const createUser = async(user) => { 
    const {nombre,apellido,email,password,altura,cintura,busto,peso,state} = user;
    const query = 'INSERT INTO usuarios (nombre,apellido,email,password,altura,cintura,busto,peso,state) Values ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *';
    const values = [nombre,apellido,email,password,altura,cintura,busto,peso,state];
    const {rows} = await pool.query(query,values)
    return rows[0]
  };

  const loginUser = async (email) => {
    const text = "SELECT * FROM usuarios WHERE email = $1";
    const result = await pool.query(text, [email]);
    return result;
  };


export const userModel ={
    findAll,
    findById,
    createUser,
    loginUser
}