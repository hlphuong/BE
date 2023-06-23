const config = {
    api:{
        port: 3001
    },
    database: {
        database: 'grocery',
        username: 'root',
        port:3306,
        password: '',
        host: 'localhost',
        dialect: 'mysql',
        pool: {
            max: 5,
            min: 1,
            acquire: 30000,
            idle: 10000,
        }
    },
}

module.exports = config;