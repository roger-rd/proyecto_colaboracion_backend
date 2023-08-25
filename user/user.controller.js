import { handleErrors } from "../database/error.js";
import { userModel } from "./user.model.js";

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
            password,
            altura,
            cintura,
            busto,
            peso,
            state
        })
        return res.status(201).json({ ok: true, result: newUser });
    } catch (error) {
        const { status, message } = handleErrors(error.code);
    console.log(error, message);
    return res.status(status).json({ ok: false, result: message });
    }
 };

 const loginUser = async (req, res) => { 
    const {email} = req.body;
    try {
        if(email.length===0){
            throw {message: "email no registrado"}
        }
        return res.status(200).json({ ok: true, message: "Usuario registrado" });
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

