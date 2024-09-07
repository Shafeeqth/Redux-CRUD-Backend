import mongoose from "mongoose";

export default async function name(): Promise<void> {
    try {
        await mongoose.connect(process.env.DB_URL as string);
        console.log('Database connnected');
        
        
    } catch (error: unknown) {
        console.error('Database connection failed');
        process.exit(1);
        
        
    }

    
}