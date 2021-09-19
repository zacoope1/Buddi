create table users (
	username varchar primary key not null,
	firstName varchar not null,
	lastName varchar not null,
	hash varchar not null,
	salt varchar not null,
	email varchar not null,
	handle varchar not null,
	accountCreated timestamp default(now())
);


select * from users;