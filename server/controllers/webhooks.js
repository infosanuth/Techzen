import { Webhook } from "svix";
import User from "../models/User.js";

// API Controller Function to Manage Clerk User with database
export const clerkWebhook = async (req,res) => {
    try {
        
        const whook = new Webhook (process.env.CLERK_WEBHOOK_SECRET)

        await whook.verify(JSON.stringify(req.body),{
            "svix-id" : req.headers["svix-id"],
            "svix-timestamp" : req.headers ["svix-timestamp"],
            "svix-signature" : req.headers ["svix-signature"]
        })

        // Getting data from request body

        const { data, type} = req.body
    } catch (error) {
        return res.status(400).json({ message: "Invalid webhook signature" })
    }
}