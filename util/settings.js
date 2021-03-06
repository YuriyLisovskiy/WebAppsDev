const secret = 'secret_key';
const dbPath = './shop.db';
const dbModule = require('./db');

let db = null;
if (!db) {
	db = new dbModule.Db(dbPath);
	db.createDb();
}

let host = 'http://localhost:3000';

let transporterData = {
	host: 'smtp.gmail.com',
	port: 587,
	secure: false,
	auth: {
		user: 'deploy.only@gmail.com',
		pass: 'deploy.only'
	}
};

module.exports = {
	SecretKey: secret,
	Db: db,
	transporterData: transporterData,
	host: host
};
