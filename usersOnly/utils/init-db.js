const db = require("./config-db");

const initDB = () => {
	// if need clean app :
	// dropTables(db);

	createTables(db);
};

const dropTables = (db) => {
	db.run("DROP TABLE if exists users");
};

const createTables = (db) => {
	const sqlUsers =
		"CREATE TABLE if not exists users (id INTEGER PRIMARY KEY AUTOINCREMENT, email UNIQUE, password, name)";
	db.run(sqlUsers);

	const addAdmin =
		"INSERT INTO users (email, password, name) VALUES ('admin@test.com', '$2a$10$XEOPtzU0NWSpxEpj3oHyTuPFjQ41p03/B8LP88DFk4OHmeqlGXjN.', 'Admin Istrateur')";
	db.run(addAdmin, (err) => null);
};

module.exports = initDB;
