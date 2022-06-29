-- Use this file to define your SQL tables
-- The SQL in this file will be executed when you run `npm run setup-db`
DROP TABLE IF EXISTS sharks;

CREATE TABLE sharks (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    scientific_name TEXT NOT NULL,
    family TEXT NOT NULL,
    kingdom TEXT NOT NULL,
    living TEXT NOT NULL,
    random_fact TEXT NOT NULL
    );
-- CREATE TABLE userss (
--     id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
--     first_name TEXT NOT NULL,
--     last_name TEXT NOT NULL,
--     email TEXT NOT NULL,
--     password_hash TEXT NOT NULL
--     );

INSERT INTO sharks (scientific_name, family, kingdom, living, random_fact) VALUES
('Baby Shark', 'Everyone', 'Philodendron', 'yes', 'doot dooot doot');