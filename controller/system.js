'use strict';
import { time } from "console";
import { consoleBar, timeLog, resSend } from "../config/common.js";



const ping = (req, res) => {
    const result = true;
    res.send({result});
    consoleBar();
    timeLog("Get ping called");
};

export {ping};