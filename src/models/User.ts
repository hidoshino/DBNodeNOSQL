import { Schema , model, connection } from "mongoose";

type UserType = {
    email: string,
    age: number,
    interests: [string],
    name: string
}

const schema = new Schema<UserType>({
    email: {  type: String, required: true},
    age: {  type: Number, required: true},
    interests: [String],
    name: String
})

const modelName: string = 'User';

//export default model<UserType>(modelName, schema);

export default (connection && connection.models[modelName]) ? 
    connection.models[modelName] 
    :
    model<UserType>(modelName, schema);