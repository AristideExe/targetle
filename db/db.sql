CREATE SCHEMA targetle;

CREATE type targetle.destination AS ENUM (
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

CREATE TYPE targetle.gender AS ENUM ('M', 'F');

CREATE TYPE targetle.nationality AS ENUM (
    'AR',
    'AU',
    'BB',
    'BR',
    'CN',
    'CO',
    'CL',
    'DE',
    'DK',
    'ES',
    'FR',
    'GB',
    'GR',
    'IL',
    'IN',
    'IT',
    'JP',
    'KR',
    'LK',
    'MA',
    'MY',
    'NL',
    'NZ',
    'RU',
    'SE',
    'TH',
    'US',
    'ZA'
);

CREATE TYPE targetle.game AS ENUM (
    'WOA1',
    'WOA2',
    'WOA3'
);

CREATE TABLE targetle.target (
    target_id     UUID                 PRIMARY KEY,
    image_path    TEXT                 UNIQUE NOT NULL,
    name          VARCHAR              UNIQUE NOT NULL,
    gender        targetle.gender      NOT NULL,
    destination   targetle.destination NOT NULL,
    year_of_birth INT                  NOT NULL,
    nationality   targetle.nationality NOT NULL,
    hitman_game   targetle.game        NOT NULL
);

CREATE TABLE targetle.target_day (
    date          DATE        PRIMARY KEY,
    target_id     UUID        NOT NULL REFERENCES targetle.target
)