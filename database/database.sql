CREATE DATABASE apirest;

CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    nom VARCHAR(40),
    email TEXT
);

INSERT INTO users(nom, email) VALUES 
    ('Youssouf', 'youssouf@gmail.com'),
    ('Daniel', 'daniel@gmail.com'),
    ('Benedicte', 'benedicte@gmail.com'),
    ('Jordan', 'jordan@gmail.com'),
    ('Kevine', 'kevine@gmail.com'),
    ('Darcy', 'darcy@gmail.com');