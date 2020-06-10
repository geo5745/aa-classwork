PRAGMA foreign_keys = ON;

DROP TABLE IF EXISTS users;

CREATE TABLE users (
  id INTEGER PRIMARY KEY,
  fname TEXT NOT NULL,
  lname TEXT NOT NULL
);

DROP TABLE if exists questions;

CREATE TABLE questions (
  id INTEGER PRIMARY KEY,
  title TEXT NOT NULL,
  body TEXT NOT NULL,
  author_id INTEGER NOT NULL,
  FOREIGN KEY (author_id) REFERENCES users(id)
);

DROP TABLE if exists question_follows;

CREATE TABLE question_follows (
  id INTEGER PRIMARY KEY,

  user_id INTEGER NOT NULL,
  question_id INTEGER NOT NULL,

  FOREIGN KEY (user_id) REFERENCES users(id),
  FOREIGN KEY (question_id) REFERENCES questions(id)
  
);

DROP TABLE if exists replies;

CREATE TABLE replies (
  id INTEGER PRIMARY KEY,

  parent_id INTEGER, 
  user_id INTEGER NOT NULL,
  question_id INTEGER NOT NULL,
  body TEXT NOT NULL,

  FOREIGN KEY (parent_id) REFERENCES replies(id),
  FOREIGN KEY (user_id) REFERENCES users(id),
  FOREIGN KEY (question_id) REFERENCES questions(id)
  
);

DROP TABLE if exists question_likes;

CREATE TABLE question_likes (
  id INTEGER PRIMARY KEY,

  user_id INTEGER NOT NULL,
  question_id INTEGER NOT NULL,
 
  FOREIGN KEY (user_id) REFERENCES users(id),
  FOREIGN KEY (question_id) REFERENCES questions(id)
);


INSERT INTO
  users (fname, lname)
VALUES
  ('peter', 'kim'),
  ('kafele', 'kossaly'),
  ('valerie', 'whitehouse');

INSERT INTO
  questions (title, body, author_id)
VALUES
  ('peters question', 'is it flex time yet?', (SELECT id FROM users WHERE fname = 'peter')),
  ('kafeles question', 'when is my flex time?', (SELECT id FROM users WHERE fname = 'kafele')),
  ('valeries question', 'i think its my flex time',( SELECT id FROM users WHERE fname = 'valerie'));


-- -- INSERT INTO
-- --   question_follows (user_id, question_id)
-- -- VALUES
-- --   (1, 1),
-- --   (2, 2),
-- --   (3, 3);

INSERT INTO
  replies (parent_id, user_id, question_id, body)
VALUES
  (1, 3, 3, 'are you sure?'),
  (1, 2, 2, 'its never your flex time'),
  (2, 1, 2, 'you just missed it'),
  (3, 1, 1, 'its always your flex time');

-- INSERT INTO
--   question_likes (user_id, question_id)
-- VALUES
--   (1, 3),
--   (2, 1),
--   (3, 2);


