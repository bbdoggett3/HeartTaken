INSERT INTO users(
    username,
    password
)VALUES(
    $1,
    $2
);

SELECT * FROM users
WHERE username = $1;