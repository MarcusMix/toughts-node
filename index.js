import e from "express";
import ExpressHandlebars from "express-handlebars";
import session from "express-session";
import sequelize from "./db/conn.js";
import flash from "express-flash";
import FileStore  from "session-file-store";
// const  FileStore  = session;

//routes
import router from "./routes/toughtsRoutes.js";

//Models
import Tought from "./models/Tought.js";
import User from "./models/User.js";

//Controllers
import ToughtController from "./controllers/ToughtController.js";

//path
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const app = e();

//public path
app.use(e.static("public"));

//handlebars
app.engine("handlebars", ExpressHandlebars.engine());
app.set("view engine", "handlebars");

//resposta do body
app.use(
	e.urlencoded({
		extended: true,
	})
);

app.use(e.json());

// //session middleware
// app.use(
// 	session({
// 		name: "session",
// 		secret: "meu-secret",
// 		resave: false,
// 		saveUninitialized: false,
// 		store: new FileStore({
// 			logFn: function () {},
// 			path: __dirname + "./sessions",
// 		}),
// 		cookie: {
// 			secure: false,
// 			maxAge: 360000,
// 			expires: new Date(Date.now() + 360000),
// 			httpOnly: true,
// 		},
// 	})
// );

// flash messages
app.use(flash());

//public path
app.use(e.static("public"));

//set session  to response
app.use((req, res, next) => {
	if (req.session.userid) {
		res.locals.session = req.session;
	}

	next();
});


//Routes
app.use('/toughts', router)

app.get('/', ToughtController.showToughts)

sequelize
	.sync()
	.then(() => {
		app.listen(5000);
	})
	.catch((error) => console.log(error));
