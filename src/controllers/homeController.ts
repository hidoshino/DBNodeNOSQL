import { Request, Response } from 'express';
import User from '../models/User';

// export const home = async (req: Request, res: Response) => {
//     let users = await User.find({}).skip(0).limit(2)
//     res.json({users});
// }


export const home = async (req: Request, res: Response) => {

    let users = await User.find({});
    res.render('pages/home', {
        users
    })
}


export const createUser = async (req: Request, res: Response) => {
    let { name, interests, age, email } = req.body;

    let arrayInterests : [string] = interests.split(",");

    let newUser = {
        name,
        interests : arrayInterests,
        age,
        email
    }

    console.log(newUser)

    await User.create(newUser);
    const users = await User.find({});

    res.render('pages/home', {
        users
    })
}

export const update = async (req: Request, res: Response) => {
    
    await User.updateMany(
        {age: {$lte: 18}},
        {age : 18}
        /*
            1° param => Coleta todos que é menor ou igual a 18 anos 
            2° param => Atualiza os dados atráves do objeto
         */
    )
}


export const updateUser = async (req: Request, res: Response) => {
    
    await User.updateOne(
        {email: 'hidoshino@gmail.com'},
        {age : 24}
        /*
            1° param => Coleta todos que é menor ou igual a 18 anos 
            2° param => Atualiza os dados atráves do objeto
         */
    )
}


export const deleteUser = async (req: Request, res: Response) => {
    await User.findOneAndDelete({
        email: 'rmarco@gmail.com'
    })   
}


export const updateAgeUser = async (req: Request, res: Response) => {
    let email = req.params;

    let user = await User.findOne({
        email
    });
    user.age += 1;
    await user.save();

    const users = await User.find({});

    res.render('pages/home', {
        users
    })
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


// limitação de dados => Paginate

/*
    limit(x) x=> qtd de objetos a exibir
    skip(x).limit(x) => Paginate Pula x e exibe x Pra frente
*/


