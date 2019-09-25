/*
Seeding tables with info
*/

/* hafiz password : 1234*/
INSERT INTO users (first_name, last_name, user_name, initials, password, last_login, account_created)
VALUES('Mad', 'Hatter', 'MH', 'eenfeeneet', '0fabe337e5da14fb9b56981862217ae5ce4cdc56545cdbb42a8a43536222f95f', '2019-04-10', '2016-10-01');
/* jim password : 0000*/
INSERT INTO users (first_name, last_name, user_name, initials, password, last_login, account_created)
VALUES('Hunter', 'Helmsley', 'HH', 'TheGame', 'ed0eb6a11f479d7ebc4ae6a9322c632d6d268e3237ff7073f5394c9e4c8aa2ae', '2019-05-16', '2016-04-28');
/* jim password : 1111*/
INSERT INTO users (first_name, last_name, user_name, initials, password, last_login, account_created)
VALUES('Jack', 'Sparrow', 'JS', 'thepirateking', 'e0ac57dd44aa5b5c3121bd74c3447e826d71a575347a5cfaa62e0cd5b2b226a7', '2017-03-28', '2017-01-30');
/* jim password : 2222*/
INSERT INTO users (first_name, last_name, user_name, initials, password, last_login, account_created)
VALUES('Jun', 'Jie', 'JJ', 'monk', 'a755d9d49e11a463631c240fa7cffa8862cd5cde99c2a540bfdd03d3ab1b2e3e', '2018-08-01', '2018-01-19');
/* jim password : 3333*/
INSERT INTO users (first_name, last_name, user_name, initials, password, last_login, account_created)
VALUES('Tammy', 'Brown', 'TB', 'tamtam', '0832b7c762f96e361a8f4b04fdaffa2c86e58819a2ebaa343960e69bf6bc18ad', '2019-08-01', '2018-01-21');

INSERT INTO categories (category) VALUES('Entertainment');
INSERT INTO categories (category) VALUES('Language');
INSERT INTO categories (category) VALUES('Science');
INSERT INTO categories (category) VALUES('Technology');
INSERT INTO categories (category) VALUES('Japanese');
INSERT INTO categories (category) VALUES('Korean');
INSERT INTO categories (category) VALUES('Nature');
INSERT INTO categories (category) VALUES('Geography');
INSERT INTO categories (category) VALUES('Literature');
INSERT INTO categories (category) VALUES('General Knowledge');
INSERT INTO categories (category) VALUES('Trivia');
INSERT INTO categories (category) VALUES('Learning');


INSERT INTO decks (user_id, topic) VALUES(1, 'Basic Japanese Words and Phrases for All Situations');
INSERT INTO decks (user_id, topic) VALUES(1, 'Japanese Kanji Numbers');
INSERT INTO decks (user_id, topic) VALUES(1, 'Books Trivia');
INSERT INTO decks (user_id, topic) VALUES(1, 'Computer Knowledge');
INSERT INTO decks (user_id, topic) VALUES(2, 'Interesting Science');
INSERT INTO decks (user_id, topic) VALUES(2, 'Geography Stuff');
INSERT INTO decks (user_id, topic) VALUES(3, 'Korean Basic Greetings');
INSERT INTO decks (user_id, topic) VALUES(4, 'Japanese Greetings for Everyday');
INSERT INTO decks (user_id, topic) VALUES(4, 'Korean Basic & Polite Phrases');
INSERT INTO decks (user_id, topic) VALUES(4, 'Video Games Trivia');

INSERT INTO decks_categories (deck_id, category_id) VALUES(1, 2);
INSERT INTO decks_categories (deck_id, category_id) VALUES(1, 5);

INSERT INTO decks_categories (deck_id, category_id) VALUES(2, 2);
INSERT INTO decks_categories (deck_id, category_id) VALUES(2, 5);



INSERT INTO decks_categories (deck_id, category_id) VALUES(3, 2);
INSERT INTO decks_categories (deck_id, category_id) VALUES(3, 9);
INSERT INTO decks_categories (deck_id, category_id) VALUES(3, 11);

INSERT INTO decks_categories (deck_id, category_id) VALUES(4, 4);
INSERT INTO decks_categories (deck_id, category_id) VALUES(4, 3);
INSERT INTO decks_categories (deck_id, category_id) VALUES(4, 10);

INSERT INTO decks_categories (deck_id, category_id) VALUES(5, 3);
INSERT INTO decks_categories (deck_id, category_id) VALUES(5, 11);

INSERT INTO decks_categories (deck_id, category_id) VALUES(6, 7);
INSERT INTO decks_categories (deck_id, category_id) VALUES(6, 8);
INSERT INTO decks_categories (deck_id, category_id) VALUES(6, 10);

INSERT INTO decks_categories (deck_id, category_id) VALUES(7, 2);
INSERT INTO decks_categories (deck_id, category_id) VALUES(7, 6);
INSERT INTO decks_categories (deck_id, category_id) VALUES(7, 12);

INSERT INTO decks_categories (deck_id, category_id) VALUES(8, 2);
INSERT INTO decks_categories (deck_id, category_id) VALUES(8, 5);
INSERT INTO decks_categories (deck_id, category_id) VALUES(8, 12);

INSERT INTO decks_categories (deck_id, category_id) VALUES(9, 2);
INSERT INTO decks_categories (deck_id, category_id) VALUES(9, 6);
INSERT INTO decks_categories (deck_id, category_id) VALUES(9, 12);

INSERT INTO decks_categories (deck_id, category_id) VALUES(10, 1);
INSERT INTO decks_categories (deck_id, category_id) VALUES(10, 11);



INSERT INTO flashcards (deck_id, front, back) VALUES(1, 'ありがとうございます', 'Thank You');
INSERT INTO flashcards (deck_id, front, back) VALUES(1, 'ごめんなさい', 'I’m Sorry');
INSERT INTO flashcards (deck_id, front, back) VALUES(1, 'はい or うん', 'Yes');
INSERT INTO flashcards (deck_id, front, back) VALUES(1, 'いいえ or ううん', 'No');
INSERT INTO flashcards (deck_id, front, back) VALUES(1, '名前は___', 'My name is ___');
INSERT INTO flashcards (deck_id, front, back) VALUES(1, '___ です', 'I am ___');
INSERT INTO flashcards (deck_id, front, back) VALUES(1, 'いいですよ', 'It’s Good');
INSERT INTO flashcards (deck_id, front, back) VALUES(1, 'だめです', 'It’s Bad');
INSERT INTO flashcards (deck_id, front, back) VALUES(1, 'もう一度お願いします', 'Again, Please');
INSERT INTO flashcards (deck_id, front, back) VALUES(1, 'ゆっくりお願いします', 'More Slowly, Please');


INSERT INTO flashcards (deck_id, front, back) VALUES(2, '一', 'ichi, itsu');
INSERT INTO flashcards (deck_id, front, back) VALUES(2, '二', 'ni');
INSERT INTO flashcards (deck_id, front, back) VALUES(2, '三', 'san');
INSERT INTO flashcards (deck_id, front, back) VALUES(2, '四', 'shi');
INSERT INTO flashcards (deck_id, front, back) VALUES(2, '五', 'go');
INSERT INTO flashcards (deck_id, front, back) VALUES(2, '六', 'roku');
INSERT INTO flashcards (deck_id, front, back) VALUES(2, '七', 'shichi');
INSERT INTO flashcards (deck_id, front, back) VALUES(2, '八', 'hachi');
INSERT INTO flashcards (deck_id, front, back) VALUES(2, '九', 'kyuu, ku');
INSERT INTO flashcards (deck_id, front, back) VALUES(2, '十', 'juu, ji');
INSERT INTO flashcards (deck_id, front, back) VALUES(2, '百', 'hyaku');
INSERT INTO flashcards (deck_id, front, back) VALUES(2, '千', 'sen');
INSERT INTO flashcards (deck_id, front, back) VALUES(2, '万', 'man, ban');
INSERT INTO flashcards (deck_id, front, back) VALUES(2, '円', 'en');