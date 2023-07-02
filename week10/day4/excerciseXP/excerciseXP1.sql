--  EX1
SELECT * FROM -- No idea where to find 'Items', but here is the ORDER BY command anyway
 ORDER BY price;

SELECT * FROM --'items'
WHERE price >= 80 ORDER BY price DESC;

SELECT first_name, last_name FROM customer ORDER BY first_name LIMIT 3;

SELECT last_name FROM customer ORDER BY last_name DESC;

--EX2

-- 2.1 
SELECT * FROM customer;

-- 2.2 
SELECT first_name || ' ' || last_name AS full_name FROM customer;

-- 2.3 
SELECT DISTINCT create_date FROM customer;

-- 2.4
SELECT * FROM customer ORDER BY first_name DESC;

-- 2.5 
SELECT film_id, title, description, release_year, rental_rate FROM film ORDER BY rental_rate ASC;

-- 2.6 
SELECT a.address, a.phone 
FROM address a 
JOIN city c ON a.city_id = c.city_id 
WHERE c.city = 'Texas';

-- 2.7 
SELECT * FROM film WHERE film_id IN (15, 150);

-- 2.8 
SELECT film_id, title, description, length, rental_rate 
FROM film 
WHERE title = 'Seven Swarm';

-- 2.9 
SELECT film_id, title, description, length, rental_rate 
FROM film 
WHERE title LIKE 'Se%';

-- 2.10 
SELECT film_id, title, description, length, rental_rate 
FROM film 
ORDER BY rental_rate ASC 
LIMIT 10;

-- 2.11 
SELECT film_id, title, description, length, rental_rate 
FROM film 
ORDER BY rental_rate ASC 
OFFSET 10 ROWS 
FETCH NEXT 10 ROWS ONLY;

--2.12
SELECT c.first_name, c.last_name, p.amount, p.payment_date 
FROM customer c 
JOIN payment p ON c.customer_id = p.customer_id 
ORDER BY c.customer_id ASC;

--2.13
SELECT film_id, title 
FROM film 
WHERE film_id NOT IN (
  SELECT DISTINCT film_id FROM inventory
);

--2.14
SELECT c.city, co.country 
FROM city c 
JOIN country co ON c.country_id = co.country_id;

-- write a request to delete one row from the table
DELETE FROM customer WHERE customer_id = 599;

SELECT SUM(LENGTH(column_name) - LENGTH(REPLACE(column_name, 'symbol', ''))) AS total_count FROM your_table;