import Tought from "../models/Tought.js";
import User from "../models/User.js";

class ToughtController {
    static async showToughts(res, render) {
        res.render('toughts/home')
    }
}

export default ToughtController