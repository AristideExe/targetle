CREATE type destination AS ENUM (
    'ica_training_facility',
    'paris',
    'sapienza',
    'marrakesh',
    'bangkok',
    'colorado',
    'hokkaido',
    'hawkes_bay',
    'miami',
    'santa_fortuna',
    'mumbai',
    'whittleton_creek',
    'isle_of_sgail',
    'new_york',
    'haven_island',
    'himmelstein',
    'hantu_port',
    'siberia',
    'dubai',
    'dartmoor',
    'berlin',
    'chongqing',
    'mendoza',
    'carpathian_mountains',
    'ambrose_island'
);

CREATE TYPE gender AS ENUM ('M', 'F');

CREATE TYPE nationality AS ENUM ('FR', 'IL', 'RU', 'US');

CREATE TABLE target (
    target_id     UUID         PRIMARY KEY,
    image_path    TEXT        UNIQUE NOT NULL,
    name          VARCHAR     UNIQUE NOT NULL,
    gender        gender      NOT NULL,
    destination   destination NOT NULL,
    year_of_birth INT         NOT NULL,
    nationality   nationality NOT NULL,
    hitman_game   INT         NOT NULL
);

CREATE TABLE target_day (
    date          DATE        PRIMARY KEY,
    target_id     UUID        NOT NULL REFERENCES target
)