import bcrypt from "bcrypt";

import { createUser } from "../repositories/authRepositories";
import { checkIfEmailExists } from "../utils/checkIfEmailExists";
import createToken from "../utils/createToken";

export async function signUpService({email, password} : {email: string, password: string}) {
    await checkIfEmailExists(email, "signup");
    await createUser(email, password);
    return
};

export async function signInService({email, password} : {email: string, password: string}) {
    const user = await checkIfEmailExists(email, "signin");
    if(user === null){
        return
    }
    if (bcrypt.compareSync(password, user.password)){
        return createToken(user.id);
    }
    else{
        throw{
            status: 400,
            message: "Invalid email or password!"
        }
    }
};