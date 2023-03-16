import { Sequelize } from "sequelize";

const sequelize = new Sequelize("toughts", "root", "admin", {
	host: "localhost",
	dialect: "mysql",
});

try {
	sequelize.authenticate();
	console.log("Conectado ao MySQL com sucesso!");
} catch (error) {
	console.log("Erro ao conectar ao MySQL! " + error);
}

export default sequelize;
