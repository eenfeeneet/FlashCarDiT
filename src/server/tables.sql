CREATE TABLE IF NOT EXISTS users (
	id SERIAL PRIMARY KEY,
	username text,
	password text,
	last_login TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	account_created DATE NOT NULL
);
\! echo "\nusers table created\n";

CREATE TABLE IF NOT EXISTS flashdecks (
	id SERIAL PRIMARY KEY,
	uploader_id integer,
	topic text,
	description text
);
\! echo "\nflashdecks table created\n";


CREATE TABLE IF NOT EXISTS flashcards (
	id SERIAL PRIMARY KEY,
	flashdeck_id integer,
	front text,
	back text
);
\! echo "\nflashcards table created\n";