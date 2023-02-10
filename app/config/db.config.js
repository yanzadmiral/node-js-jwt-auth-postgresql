module.exports = {
    HOST: "localhost",
    USER: "yayan",
    PASSWORD: "123456",
    DB: "express_jwt_postgres1",
    dialect: "postgres",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};