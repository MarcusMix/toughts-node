import e from "express";
import { ExpressHandlebars } from "express-handlebars";
import session from "express-session";
import sequelize from "./db/conn.js";
import flash from "express-flash";

const { FileStore } = session;

const app = e();

//public path
app.use(e.static("public"));

//handlebars
app.engine("handlebars", Handlebars.engine());
app.set("view engine", "handlebars");

//resposta do body
app.use(
	e.urlencoded({
		extended: true,
	})
);

app.use(e.json());

//session middleware
app.use(
	session({
		name: "session",
		secret: "meu-secret",
		resave: false,
		saveUninitialized: false,
		store: new FileStore({
			logFn: function () {},
			path: __dirname + "./sessions",
		}),
		cookie: {
			secure: false,
			maxAge: 360000,
			expires: new Date(Data.now() + 360000),
			httpOnly: true,
		},
	})
);

// flash messages
app.use(flash());

//set session  to response
app.use((req, res, next) => {
	if (req.session.userid) {
		res.locals.session = req.session;
	}

	next();
});

sequelize
	.sync()
	.then(() => {
		app.listen(3000);
	})
	.catch((error) => console.log(error));
