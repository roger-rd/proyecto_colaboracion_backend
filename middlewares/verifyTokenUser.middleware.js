import bcrypt from "bcryptjs";
import { handleErrors } from "../database/error.js";
import { userModel } from "../user/user.model.js";





export const verifyTokenUser = async (req, res, next) => {
    const { email, password } = req.body;
    try {
        if (!email || !password) {
            throw { code: "403" };
        }
        const { rows: [userDB], rowCount } = await userModel.loginUser(email);

        const result = await userModel.loginUser(email);
        
        if (!result.rowCount) {
            throw { code: "error en email" };
        }

        const validatePassword = await bcrypt.compare(password, userDB.password);
       if (!validatePassword) {
            throw { code: "error de contraseña" };
      }
        console.log("Usuario autenticado con éxito: ", userDB.email)
       
        next() 


    } catch (error) {
        const { status, message } = handleErrors(error.code)
        console.log(error, message)
        return res.status(status).json({ ok: false, result: message });
    }
}
