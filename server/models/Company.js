import mongoose from "mongoose";

const companySchema = new mongoose.Schema({
    name: { type: String, reqired: true },
    email: { type: String, requied: true, unique: true },
    image: { type: String, requred: true },
    password: { type: String, required: true }
})

const Company = mongoose.model('Company', companySchema)

export default Company
