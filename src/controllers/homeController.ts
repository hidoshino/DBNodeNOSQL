import { Request, Response } from 'express';
import User from '../models/User';

export const home = async (req: Request, res: Response) => {
    let users = await User.find({
        interests: "eletronica"
    }).sort({ age: 1 });
    res.json({users});
}

// $gt -> Greater Than = Maior
// $gte -> Greater or Equal = Maior ou igual
// $lt -> Lower Than = Abaixo de
// $lte -> Lower Than or Equal = Abaixo ou igual

/* 
    Exemplo:
    let users = await User.find({
        age: { $gte: 45} // Maior Igual
        age: { $gt: 45, $lt: 60 } // Maior que 45 e menor que 60
    });

*/


// sort() -> Ordenação

/*
    1 or -1
    1 -> ascendente
   -1 -> decrescente
*/