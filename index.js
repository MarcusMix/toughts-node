import e from "express";
import { ExpressHandlebars } from "express-handlebars";
import session from "express-session";
import sequelize from "./db/conn.js";
import flash from "express-flash";

const { FileStore } = session;

const app = e();


sequelize
	.sync()
	.then(() => {
		app.listen(3000);
	})
	.catch((error) => console.log(error));
