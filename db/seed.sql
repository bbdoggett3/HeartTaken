CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    username VARCHAR2(50),
    password TEXT,
    profile_pic TEXT
);

CREATE TABLE relationship_goals {
    --work in progress--
    id_goals SERIAL PRIMARY KEY,
    goal_type NUMBER,
    goal_description TEXT,
}

--DUMMY DATA BELOW
INSERT INTO users(username, password, profile_pic)
VALUES
('bbdog', 'ben', 'https://cdn.glitch.com/875fcc3a-ee91-4d48-806c-d5b121d9c21c%2Fme.jpg?v=1569425179160');