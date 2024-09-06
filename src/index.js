"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("dotenv/config");
const nocache_1 = __importDefault(require("nocache"));
const connectDb_1 = __importDefault(require("./db/connectDb"));
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
(0, connectDb_1.default)();
const userRoute_1 = __importDefault(require("./routers/userRoute"));
const adminRoute_1 = __importDefault(require("./routers/adminRoute"));
app.use((0, nocache_1.default)());
app.use("/", userRoute_1.default);
app.use("/admin", adminRoute_1.default);
app.listen(port, () => {
    console.log(`[server]: Server is running in http://localhost:${port}`);
});
