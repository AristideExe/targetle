CREATE SCHEMA targetle;

CREATE TYPE lang as ENUM ('en', 'fr');

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

CREATE TABLE targetle.destination (
    destination_id UUID PRIMARY KEY,
    label TEXT UNIQUE NOT NULL
);

CREATE TABLE targetle.t_destination (
    destination_id UUID REFERENCES targetle.destination,
    language lang NOT NULL,
    label TEXT NOT NULL,
    PRIMARY KEY (destination_id, language)
);

CREATE TABLE targetle.target (
    target_id     UUID                 PRIMARY KEY,
    image_path    TEXT                 UNIQUE NOT NULL,
    name          VARCHAR              UNIQUE NOT NULL,
    gender        targetle.gender      NOT NULL,
    destination   UUID NOT NULL REFERENCES targetle.destination,
    year_of_birth INT                  NOT NULL,
    nationality   targetle.nationality NOT NULL,
    hitman_game   targetle.game        NOT NULL
);

CREATE TABLE targetle.target_day (
    date          DATE        PRIMARY KEY,
    target_id     UUID        NOT NULL REFERENCES targetle.target
)