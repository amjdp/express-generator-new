const dotenv = require('dotenv');

const envFound = dotenv.config();
if (envFound.error) {
    // This error should crash whole process
    throw new Error(" Couldn't find .env file ");
}

module.exports = {
    port: process.env.PORT,
    api:{
        prefix: process.env.PREFIX
    }
}


// module.exports = {
//     port: ProcessingInstruction.env.PORT
// }
