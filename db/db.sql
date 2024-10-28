CREATE TYPE mission AS ENUM (
    'training',
    'the_final_test',
    'the_showstopper',
    'holiday_hoarders',
    'world_of_tomorrow',
    'the_icon',
    'landslide',
    'the_author',
    'a_guilded_cage',
    'a_house_built_on_sand',
    'club_27',
    'the_source',
    'freedom_fighters',
    'the_vector',
    'situs_invertus',
    'patient_zero',
    'hokkaido_snow_festival',
    'nightcall',
    'the_finish_line',
    'a_silver_tongue',
    'three_header_serpent',
    'embrace_of_the_serpent',
    'chasing_a_ghost',
    'illusions_of_grandeur',
    'another_life',
    'a_bitter_pill',
    'the_ark_society',
    'golden_handshake',
    'the_last_resort',
    'the_last_yardbird',
    'the_pen_and_the_sword',
    'crime_and_punishment',
    'on_top_of_the_world',
    'death_in_the_family',
    'the_dartmoor_garden_show',
    'apex_predator',
    'end_of_an_era',
    'the_farewell',
    'untouchable',
    'shadows_in_the_water'
);

CREATE TYPE gender AS ENUM ('M', 'F');

CREATE TYPE nationality AS ENUM ('FR', 'IL', 'RU', 'US');

CREATE TABLE target (
    target_id     UUID         PRIMARY KEY,
    image_path    TEXT        UNIQUE NOT NULL,
    name          VARCHAR     UNIQUE NOT NULL,
    gender        gender      NOT NULL,
    mission       mission     NOT NULL,
    age           INT         NOT NULL,
    nationality   nationality NOT NULL
);
