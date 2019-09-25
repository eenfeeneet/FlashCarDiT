/*
Seeding tables with info
*/

/* hafiz password : 1234*/
INSERT INTO users (username, password, last_login, account_created) VALUES('hafiz', '0fabe337e5da14fb9b56981862217ae5ce4cdc56545cdbb42a8a43536222f95f', '2019-04-10', '2016-10-01');
/* jim password : 0000*/
INSERT INTO users (username, password, last_login, account_created) VALUES('jim', 'ed0eb6a11f479d7ebc4ae6a9322c632d6d268e3237ff7073f5394c9e4c8aa2ae', '2019-05-16', '2016-04-28');
/* jim password : 1111*/
INSERT INTO users (username, password, last_login, account_created) VALUES('jack', 'e0ac57dd44aa5b5c3121bd74c3447e826d71a575347a5cfaa62e0cd5b2b226a7', '2017-03-28', '2017-01-30');
/* jim password : 2222*/
INSERT INTO users (username, password, last_login, account_created) VALUES('jonny', 'a755d9d49e11a463631c240fa7cffa8862cd5cde99c2a540bfdd03d3ab1b2e3e', '2018-08-01', '2018-01-19');
/* jim password : 3333*/
INSERT INTO users (username, password, last_login, account_created) VALUES('jenny', '0832b7c762f96e361a8f4b04fdaffa2c86e58819a2ebaa343960e69bf6bc18ad', '2019-08-01', '2018-01-21');
/* jim password : 4444*/
INSERT INTO users (username, password, last_login, account_created) VALUES('jacqueline', '023745f69f5c854b3acb8de50c2368bd786ca47a37606e7dc79846b35a732daf', '2019-05-29', '2019-01-13');
/* jim password : 5555*/
INSERT INTO users (username, password, last_login, account_created) VALUES('joey', 'c8303aefe87acaa954ac1bee7577773fe46de28b34e1cbc52f84bd1c1221b83b', '2019-07-15', '2019-02-09');
\! echo "\nusers table populated\n";