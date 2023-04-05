import { DataTypes } from "sequelize";

import sequelize from "../db/conn";

//user

const Tought = sequelize.define("Tought", {
	title: {
		type: DataTypes.STRING,
		allowNull: false,
		require: true,
	},
});

export default Tought;
