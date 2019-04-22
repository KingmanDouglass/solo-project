
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

-- CREATE TABLE "user" (
--     "id" SERIAL PRIMARY KEY,
--     "name" varchar(50) NOT NULL
-- );

CREATE TABLE "tattoo" (
    "id" SERIAL PRIMARY KEY,
    "user_id" INT REFERENCES "user",
    "description" varchar(1000),
    "style_id" INT REFERENCES "styles", 
    "ideal_timeframe" date,
    "photos" varchar(500),
    "area_id" INT REFERENCES "body_part",
    "email" varchar(100),
    "name" varchar(200),
);

CREATE TABLE "styles" (
    "id" SERIAL PRIMARY KEY,
    "styles" varchar(50)
);

-- CREATE TABLE "scheduling" (
--     "id" SERIAL PRIMARY KEY,
--     "user_id" INT REFERENCES "user",
--     "tattoo_id" INT REFERENCES "tattoo",
--     "appointment" date,
-- );

CREATE TABLE "body_part" (
    "id" SERIAL PRIMARY KEY,
    "areas" varchar(50)
);

INSERT INTO "user" ("username", "password") 
VALUES ('Mary', 'Mary'), ('Bradley', 'Mary');

INSERT INTO "styles" ("styles") 
VALUES ('Blackwork'), ('Traditional'), ('Japanese'), ('Realism'), ('Tribal'), ('New School'), ('Neo Traditional'), ('Script'), ('Flash');

INSERT INTO "body_part" ("areas") 
VALUES ('Face'), ('Arm'), ('Shoulder'), ('Back'), ('Chest'), ('Side'), ('Stomach'), ('Leg'), ('Neck'),('Hand'), ('Forearm'), ('Thigh'), ('Other'),;

INSERT INTO "tattoo" ("user_id", "description", "style_id", "ideal_timeframe", "photos", "area_id") 
VALUES (1, 'A Mike Tyson style face tattoo but purple', 5, 'May', 'PHOTO OF MIKEY T', 1);

INSERT INTO "tattoo" ("user_id", "description", "style_id", "ideal_timeframe", "photos", "area_id") 
VALUES (2, 'Portrait of Will dancing with Anna Bosma', 4, 'ASAP', 'PHOTO OF COUPLE', 4);