--ex1.1
SELECT DISTINCT language.name
FROM language;
--1.2
SELECT film.title, film.description, language.name
FROM film
LEFT JOIN language ON film.language_id = language.language_id;

SELECT film.title, film.description, language.name
FROM language
LEFT JOIN film ON language.language_id = film.language_id;
--1.3
CREATE TABLE new_film (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL
);

INSERT INTO new_film (name) VALUES ('Film 1'), ('Film 2'), ('Film 3');
--1.4
CREATE TABLE customer_review (
  review_id SERIAL PRIMARY KEY,
  film_id INTEGER NOT NULL REFERENCES new_film(id) ON DELETE CASCADE,
  language_id INTEGER NOT NULL REFERENCES language(language_id),
  title VARCHAR(255) NOT NULL,
  score INTEGER NOT NULL CHECK (score >= 1 AND score <= 10),
  review_text TEXT NOT NULL,
  last_update TIMESTAMP NOT NULL DEFAULT NOW()
);
--1.5
INSERT INTO customer_review (film_id, language_id, title, score, review_text)
VALUES (1, 1, 'Great movie!', 9, 'I really enjoyed this movie. The acting was JUST AMAAAAAAZING! Hugo Weaving played a fantastic Doctor Octopus in this Spider-Man 7: Return of the Jedi EPISODE 99.'),
       (2, 2, 'Disappointing', 4, 'veri veri bad muvie. ai vill never go to zis movie again. beri disaponted.');
--1.6
DELETE FROM new_film WHERE id = 1; --Since the movie gets deleted, the review also will be deleted.
--ex2.1
UPDATE film
SET language_id = 2
WHERE title IN ('Dying Maker', 'Atlantis Cause');
--2.2
-- store_id and adress_id,  we need to ensure that the values we insert for store_id and address_id already exist in their respective tables
--2.3
DROP TABLE customer_review; --Before  dropping the customer_review table, we should make sure that we have a backup of the data in case we need to restore it later
--2.4
SELECT COUNT(1)
FROM rental
WHERE return_date IS NULL;
--2.5
SELECT film.title, film.rental_rate
FROM film
JOIN inventory ON film.film_id = inventory.film_id
JOIN rental ON inventory.inventory_id = rental.inventory_id
WHERE rental.return_date IS NULL
ORDER BY film.rental_rate DESC
LIMIT 30;
--2.6
--1st movie
SELECT *
FROM film
JOIN film_actor ON film.film_id = film_actor.film_id
WHERE film_actor.actor_id = 120;
--2nd movie
SELECT title
FROM film
WHERE length < '60'
  AND rating = 'R';
--3rd movie
SELECT film.title
FROM film
JOIN inventory ON film.film_id = inventory.film_id
JOIN rental ON inventory.inventory_id = rental.inventory_id
WHERE rental.customer_id = (SELECT customer_id FROM customer WHERE first_name = 'Matthew' AND last_name = 'Mahan')
  AND film.rental_rate > 4.00
  AND rental.return_date BETWEEN '2005-07-28' AND '2005-08-01';
--4th movie
SELECT title
FROM film
WHERE title LIKE '%boat%' OR description LIKE '%boat%'
