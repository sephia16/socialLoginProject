
CREATE TABLE users (
  userid VARCHAR(60) PRIMARY KEY,
  username VARCHAR(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  profileimg VARCHAR(200),
  created DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- 데이터 삽입
INSERT INTO users (userid, username, profileimg) VALUES
('user1', '공군', '/images/1.png'),
('user2', '육군', '/images/2.png'),
('user3', '박근원', '/images/3.png'),
('user4', '김기재', '/images/4.png'),
('asd', '김민지3', '/images/5.png');


SELECT userid, username FROM users ORDER BY created DESC LIMIT 1;


SELECT username FROM users WHERE userid = 'asd';


DELETE FROM users WHERE username = '박근원';


UPDATE users SET userid = 'dsa' WHERE username = '김기재';

SELECT * FROM users;


