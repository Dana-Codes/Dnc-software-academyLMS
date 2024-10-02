import {app} from './app';
import connectDB from './utils/db';
require('dotenv').config();


// CREATE SERVER      

app.listen(process.env.PORT, () => {
console.log(`server started on PORT ${process.env.PORT}` );
connectDB();

})