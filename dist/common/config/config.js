"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getConfig = () => {
    return {
        MYSQL_DB: {
            DATABASE: process.env.DATABASE,
            DB_USERNAME: process.env.DB_USERNAME,
            PASSWORD: process.env.PASSWORD,
            HOST: process.env.HOST,
            // PORT: parseInt(process.env.DB_PORT!) || 1473,
        },
    };
};
exports.default = getConfig;
