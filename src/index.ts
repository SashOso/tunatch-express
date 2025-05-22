import "reflect-metadata";
import {AppDataSource} from './config/data-source';
import app from './app';
import { PORT } from "./config/env";

async function main(){
    try{
        AppDataSource.initialize();
        app.listen(PORT,()=>{
            console.log(`Server is running at: \x1b[4mhttp://localhost:${PORT}\x1b[0m`);
        });
    }catch(error){
        console.error(error)
    }
}
main();