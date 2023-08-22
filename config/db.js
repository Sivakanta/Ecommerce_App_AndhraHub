import mongoose from 'mongoose'
import colors from 'colors'

const connectDb = async() => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL);
        console.log(`Connected to database ${conn.connection.host}`.bgYellow.black);
    } catch (error) {
        console.log(`Error in MongoDB ${error}`.bgRed.white)
    }
}

export default connectDb;