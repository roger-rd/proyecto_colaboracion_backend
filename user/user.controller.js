import { handleErrors } from "../database/error.js";
import { userModel } from "./user.model.js";
import bcript from "bcryptjs";
import jwt from "jsonwebtoken";


const getRaiz = async (req, res) => {
    try {
        res.json({ ok: true, result: "todo bien en raiz" });
    } catch (error) {
        const { status, message } = handleErrors(error.code);
        console.log(error, message);
        return res.status(status).json({ ok: false, result: message });
    }
};

const getAllUser = async (req, res) => {
    try {
        const users = await userModel.findAll();
        res.status(200).json(users);
    } catch (error) {
        const { status, message } = handleErrors(error.code);
        console.log(error, message);
        return res.status(status).json({ ok: false, result: message });
    }
};

const getIdUser = async (req, res) => {
    const { id_usuario } = req.params;
    try {
        const usuario = await userModel.findById(id_usuario);
        if (usuario) res.status(200).send(usuario);
        else
        res
            .status(404)
            .send({ message: "No se encontró ningún usuario con ese id" });
    } catch (error) {
        const { status, message } = handleErrors(error.code);
        console.log(error, message);
        return res.status(status).json({ ok: false, result: message });
    }
};

const registerUser = async (req,res) => { 
    const {
        nombre,
        apellido,
        email,
        password,
        altura,
        cintura,
        busto,
        peso,
        state
    } = req.body;
    try {
        const newUser = await userModel.createUser({
            nombre,
            apellido,
            email,
            password: bcript.hashSync(password, 10),
            altura,
            cintura,
            busto,
            peso,
            state
        })
        const token = jwt.sign(
          { email: newUser.email },
          process.env.JWT_SECRET
        );
        const { password: _, ...user } = newUser;
        return res.status(201).json({
          user,
          token,
        });
        // return res.status(201).json({ ok: true, result: newUser });
    } catch (error) {
        const { status, message } = handleErrors(error.code);
    console.log(error, message);
    return res.status(status).json({ ok: false, result: message });
    }
 };

 const loginUser = async (req, res) => { 
    const {email} = req.body;
    try {
      if(!email.length===0){
          throw {message: "email no registrado"}
      }
      const token = jwt.sign({ email }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRATION,
        });
        console.log("Token: ", token);
        return res.status(200).json(token);
    } catch (error) {
        const { status, message } = handleErrors(error.code);
        console.log(error, message);
        return res.status(status).json({ ok: false, result: message });
    }
  };

  export const userController = {
    getRaiz,
    getAllUser,
    getIdUser,
    registerUser,
    loginUser,
};

