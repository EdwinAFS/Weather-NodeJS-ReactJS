import dotenv from 'dotenv';
import { Application } from 'express';
import container from './server/container';
dotenv.config();

//import './components/shared/infrastructure/database/connection'
import 'express-async-errors';

const app: Application = container.resolve('app');

app.listen( process.env.PORT, ()=>{
	console.log( process.env.APPLICATION_NAME + ' API se esta ejecutando en el puerto ' + process.env.PORT);
});
