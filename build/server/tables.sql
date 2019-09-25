CREATE TABLE IF NOT EXISTS users (
	id SERIAL PRIMARY KEY,
	first_name text,
	last_name text,
	user_name text,
	initials text,
	password text,
	last_login TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	account_created DATE NOT NULL
);
\! echo "\nUsers table created\n";

CREATE TABLE IF NOT EXISTS categories (
	id SERIAL PRIMARY KEY,
	category text
);
\! echo "\nDecks table created\n";

CREATE TABLE IF NOT EXISTS decks (
	id SERIAL PRIMARY KEY,
	user_id integer,
	topic text
);

CREATE TABLE IF NOT EXISTS decks_categories (
	id SERIAL PRIMARY KEY,
	deck_id integer,
	category_id integer
);


\! echo "\nDecks table created\n";
CREATE TABLE IF NOT EXISTS flashcards (
	id SERIAL PRIMARY KEY,
	deck_id integer,
	front text,
	back text
);
\! echo "\nFlashcards table created\n";