"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const database_config_1 = __importDefault(require("./config/database.config"));
const route_1 = __importDefault(require("./route"));
const cors_1 = __importDefault(require("cors"));
database_config_1.default.sync().then(() => {
    console.log('connect to db');
});
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use('/api/v1', route_1.default);
const port = 9000;
app.listen(port, () => {
    console.log('server is running on port ' + port);
});
