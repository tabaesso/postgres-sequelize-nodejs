module.exports = {
    dialect: 'postgres',
    host: 'postgres',
    username: 'root-postgres',
    password: 'password-postgres',
    database: 'postgres',
    port: 5432,
    // ssl: true,
    define: {
        timestamps: true,
        underscored: true,
    }
};