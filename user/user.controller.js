    import { handleErrors } from "../database/error.js";
    import { userModel } from "./user.model.js";
    import bcript from "bcryptjs";
    import jwt from "jsonwebtoken";
    import { PrismaClient } from '@prisma/client'
    import {pool } from "../database/connection.js";
import { create } from "domain";
import { type } from "os";
    const prisma = new PrismaClient()

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

    const registerUser = async (req, res) => {
    const {
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
        state,
    } = req.body;
    try {
        const newUser = await userModel.createUser({
        nombre,
        apellido,
        email,
        password: bcript.hashSync(password, 10),
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
        state,
        });
        const token = jwt.sign({ email: newUser.email }, process.env.JWT_SECRET);
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
    const { email } = req.body;
    try {
        if (!email.length === 0) {
        throw { message: "email no registrado" };
        }
        const token = jwt.sign({ email }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRATION,
        });

        let query =   `
        SELECT id_usuario, nombre, apellido, email, password, cintura, busto, altura, peso, cadera, largo_tiro, largo_pierna, hombro, largo_manga, largo_pie, empeine, state
	    FROM public.usuarios
        WHERE email like '%${email}%'
        LIMIT 1;
        `;

        const result = await pool.query(query);

        console.log("Result: ", result.rows)

        const obj = {
            usuario: result.rows,
            token: token
        }

        // console.log("obj: ", objs);

        return res.status(200).json(obj);
    } catch (error) {
        const { status, message } = handleErrors(error.code);
        console.log(error, message);
        return res.status(status).json({ ok: false, result: message });
    }
    };

    const getAllProducts = async (req, res) => {
        let message = "entro en la ruta";
        let products = await prisma.productos.findMany();


        return res.send(products);
    }

    const getProduct = async (req , res) => {
        const {nombre_producto,pecho,cintura}  = req.query

        console.log(nombre_producto)
        console.log("Pecho ", pecho)
        console.log("Cintura ", cintura)

        let query;

        if(typeof pecho !== "undefined"){
            query =   `
            SELECT id_producto, nombre_producto, tipo_producto, ubicacion, talla, pecho, cintura
            FROM public.productos
            WHERE nombre_producto = '${nombre_producto}' AND CAST(pecho AS INTEGER) >= ${pecho}
            LIMIT 1;
            `;
        }

        if(typeof cintura !== "undefined"){
            query =   `
            SELECT id_producto, nombre_producto, tipo_producto, ubicacion, talla, pecho, cintura
            FROM public.productos
            WHERE nombre_producto = '${nombre_producto}' AND CAST(cintura AS INTEGER) >= ${cintura}
            LIMIT 1;
            `;
        }

        console.log("query: ", query);

        // const text = "SELECT id_producto, nombre_producto, tipo_producto, ubicacion, talla, pecho, cintura FROM public.productos WHERE nombre_producto = $1 AND CAST(pecho AS INTEGER) >= $2 LIMIT 1;";
        const result = await pool.query(query);
        return res.send(result);
    };

    export const userController = {
    getRaiz,
    getAllUser,
    getIdUser,
    registerUser,
    loginUser,
    getAllProducts,
    getProduct
    };


