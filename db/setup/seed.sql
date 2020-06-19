CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    username VARCHAR2(50),
    password TEXT,
    profile_pic TEXT
);

CREATE TABLE goal_type (
    goal_type_id SERIAL PRIMARY KEY,
    goal_type VARCHAR(50)
);


CREATE TABLE relationship_goals (
    goal_id SERIAL PRIMARY KEY,
    goal_type_id INTEGER REFERENCES goal_type(goal_type_id),
    goal TEXT
);

--DUMMY DATA BELOW
INSERT INTO users(username, password, profile_pic)
VALUES
('bbdog', 'ben', 'https://cdn.glitch.com/875fcc3a-ee91-4d48-806c-d5b121d9c21c%2Fme.jpg?v=1569425179160');

INSERT INTO goal_type(goal_type)
VALUES
('Affirmation'),
('Gifts'),
('Quality Time'),
('Service'),
('Touch');

INSERT INTO relationship_goals (
    goal_type_id,
    goal
)VALUES(
     1,
    'Leave a letter saying how much you love them.'
);