-- This is how you make a comment

--SELECT
--Select all records from the Employee table. 
SELECT * FROM employee;
--Select all records from the Employee table where last name is King.
SELECT * FROM employee WHERE LASTNAME = 'King';
--Select all records from the Employee table where the first name is 'Andrew' and REPORTSTO is NULL.
SELECT * FROM employee where firstname = 'Andrew' AND reportsto is null; --null is n ot in quotations. 
--Everything in SQL is case insensitive, except things in quotes ''. "Double Quotes are invalid in Oracle SQL."

--ORDER BY
--Select first name from Customer and sort result set in ascending order by city. 
SELECT firstname FROM customer ORDER BY city ASC; --ORDER BY's default is Ascending order.
--Select all albums in Album table and sort the result set in descending order by title. 
SELECT * FROM Album ORDER BY title DESC;

--INSERT
--Insert two new records into Genre table.
SELECT * FROM genre;
INSERT INTO genre VALUES (26, 'Anime');
--INSERT [a record] INTO genre [table] (col1, col2, etc.) [these] VALUES (col1Content, col2Content, etc.)
INSERT INTO genre (name, genreid) VALUES ('K-Pop', 27);


--UPDATE

--Update Aaron Mitchell in Customer table to Robert Walter.
UPDATE customer SET firstname = 'Robert', lastname = 'Walter' WHERE firstname = 'Aaron' AND lastname = 'Mitchell';

COMMIT;

--LIKE
--Select all invoices with a billing address like "T%".
SELECT * FROM invoice WHERE billingaddress like 'T%'; --T% is a wildcard where it looks for all records that Start with T. 
-- <StartsWith>%<EndsWith> 

--Select all employees hired between the 1st of June 2003 and 1st of March 2004. 
select * from employee where hiredate between to_date('06-01-2003', 'mm-dd-yyyy') 
AND to_date('01/03/04','mm/dd/yy'); --to_date(fromString, formatOfString) translates the string into a mathematical date.

--Delete a record in Customer table where the name is Robert Walter
SAVEPOINT; 
select * from customer where lastname='Walter';

select * from invoice where customerid=32;
--select * from invoiceline il 
--    inner join invoice i
--    on il.invoiceid = i.invoiceid
--    inner join customer c
--    on i.customerid = c.customerid
--    where c.customerid = 32;

--DELETE Robert Walter Chain
--This query tells us that Robert Walter has invoices for invoiceid:
--116, 245, 268, 290, 342, 50, 61.
select * from INVOICE i
where customerid = 32;

--So, we can go about the Hamfisted approach: 
delete from invoiceline il where il.invoiceid = 116 OR il.invoiceid = 245;--(etc.)
-- More Elegant Hamfisted Approach: 
delete from invoiceline il where 
    il.invoiceid in(116, 245, 268, 290, 342, 50, 61);

--The Elegant Approach: 
DELETE FROM invoiceline il WHERE il.invoiceid in (
    select i.invoiceid from invoice i
        inner join customer c
        on i.customerid = c.customerid
        where c.customerid = 32
    ); --Layer 1
DELETE FROM invoice where customerid = 32;    --Layer 2
DELETE FROM customer WHERE firstname='Robert' and lastname = 'Walter'; --Layer 3

commit; --Goodbye, Robert Walter.

--JOINS
--Create an inner join that joins customers and orders and specifies the name of the customer and the invoiceid.
--|| is the concatenation operator
select c.firstname || ' ' || c.lastname as Name, i.invoiceid from customer c
    inner join invoice i
    on c.customerid = i.customerid;

--Perform a self-join on the employee table, joining on the reportsto column. 
select e1.firstname || ' ' || e1.lastname as Employee,
       e2.firstname || ' ' || e2.lastname as Manager
       from employee e1
       inner join employee e2 
       on e2.employeeid = e1.reportsto;
    -- Self join is just a conceptual thing
    
    commit;