--PART 1
CREATE TABLE Customer (
  id INT PRIMARY KEY,
  first_name VARCHAR(255) NOT NULL,
  last_name VARCHAR(255) NOT NULL
);

CREATE TABLE CustomerProfile (
  id INT PRIMARY KEY,
  isLoggedIn BOOLEAN DEFAULT false,
  customer_id INT,
  FOREIGN KEY (customer_id) REFERENCES Customer(id)
);

INSERT INTO Customer (id, first_name, last_name) VALUES
  (1, 'John', 'Doe'),
  (2, 'Jerome', 'Lalu'),
  (3, 'Lea', 'Rive');

INSERT INTO CustomerProfile (id, isLoggedIn, customer_id) VALUES
  (1, true, (SELECT id FROM Customer WHERE first_name = 'John')),
  (2, false, (SELECT id FROM Customer WHERE first_name = 'Jerome')));


-- The first_name of the LoggedIn customers
SELECT c.first_name
FROM Customer c
JOIN CustomerProfile cp ON c.id = cp.customer_id
WHERE cp.isLoggedIn = true;

-- All customers first_name and isLoggedIn columns
SELECT c.first_name, cp.isLoggedIn
FROM Customer c
LEFT JOIN CustomerProfile cp ON c.id = cp.customer_id;

-- The number of customers that are not LoggedIn
SELECT COUNT(*)
FROM Customer c
LEFT JOIN CustomerProfile cp ON c.id = cp.customer_id
WHERE cp.isLoggedIn = false OR cp.isLoggedIn IS NULL;

--PART 2

CREATE TABLE Book (
  book_id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  author VARCHAR(255) NOT NULL
);

INSERT INTO Book (title, author) VALUES
  ('Alice In Wonderland', 'Lewis Carroll'),
  ('Harry Potter', 'J.K Rowling'),
  ('To kill a mockingbird', 'Harper Lee');

CREATE TABLE Student (
  student_id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL UNIQUE,
  age INT CHECK (age <= 15)
);

INSERT INTO Student (name, age) VALUES
  ('John', 12),
  ('Lera', 11),
  ('Patrick', 10),
  ('Bob', 14);

  CREATE TABLE Library (
  book_fk_id INT,
  student_fk_id INT,
  borrowed_date DATE,
  PRIMARY KEY (book_fk_id, student_fk_id),
  FOREIGN KEY (book_fk_id) REFERENCES Book(book_id) ON DELETE CASCADE ON UPDATE CASCADE,
  FOREIGN KEY (student_fk_id) REFERENCES Student(student_id) ON DELETE CASCADE ON UPDATE CASCADE
);

INSERT INTO Library (book_fk_id, student_fk_id, borrowed_date) VALUES
  ((SELECT book_id FROM Book WHERE title = 'Alice In Wonderland'), (SELECT student_id FROM Student WHERE name = 'John'), '2022-02-15'),
  ((SELECT book_id FROM Book WHERE title = 'To kill a mockingbird'), (SELECT student_id FROM Student WHERE name = 'Bob'), '2021-03-03'),
  ((SELECT book_id FROM Book WHERE title = 'Alice In Wonderland'), (SELECT student_id FROM Student WHERE name = 'Lera'), '2021-05-23'),
  ((SELECT book_id FROM Book WHERE title = 'Harry Potter'), (SELECT student_id FROM Student WHERE name = 'Bob'), '2021-08-12');


  -- 7.1
SELECT *
FROM Library;

--  7.2
SELECT s.name, b.title
FROM Library l
JOIN Student s ON l.student_fk_id = s.student_id
JOIN Book b ON l.book_fk_id = b.book_id;

-- 7.3
SELECT AVG(s.age)
FROM Library l
JOIN Student s ON l.student_fk_id = s.student_id
JOIN Book b ON l.book_fk_id = b.book_id
WHERE b.title = 'Alice In Wonderland';

-- 7.4
DELETE FROM Student
WHERE name = 'Bob';
-- If a student is deleted from the Student table, all the records in the Library table that reference that student will also be deleted due to the ON DELETE CASCADE