import mongoose from "mongoose";
import config from "../../../../config/config";

mongoose
	.connect(config.MONGO_URI, {
		useCreateIndex: true,
		useUnifiedTopology: true,
		useNewUrlParser: true,
		useFindAndModify: true,
	})
	.then( db => console.log('Database connected!!!'))
	.catch(console.log);