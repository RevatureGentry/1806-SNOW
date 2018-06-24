--Original SQL Examples
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
    
-- More Chinook Examples: 

-- Write a SQL Query that contains the names of all tracks that are longer than 6 minutes
select track.name from track where milliseconds > 360000;

-- Write a SQL Query to find the biggest song (which takes up the most space)
select MAX(milliseconds) as LongestTrack from track;

-- Write a SQL Query that contains the titles of all albums with tracks longer than 6 minutes in them 
select a.title from track t
    inner join album a
    on t.albumid = a.albumid
    where milliseconds > 360000;

-- Write a SQL Query that contains the albumId and number of songs in the album 
select a.albumid, count(t.albumId) from track t  
    inner join album a
    on t.albumid  = a.albumid
    group by a.ALBUMID
    order by a.ALBUMID;

--Write a SQL query that contains artist's names and the number of tracks they have produced 
--(assume an artist produced a track if it appears in one of their albums)

select ar.name, ar.artistid, count(*) from artist ar
    inner join album a
    on ar.artistid = a.artistid
    inner join track t 
    on a.albumid = t.albumid
    group by ar.artistid, ar.name
    order by ar.artistid;

-- Write a SQL Query that returns the most purchased media type
-- Chain of Command: 
--      Mediatype (mediatypeid)-> Track (trackid)-> Invoiceline
-- Answer: Should return Mediatype.name = MPEG audio file, Quantity = 1938

-- Query Version 1: Returns the definitive answer, just without the Mediatype.name for context.
select max(purchasecount) from(
    select mt.name MediaName, SUM(il.QUANTITY) purchasecount from mediatype mt
        inner join track t
        on t.mediatypeid = mt.mediatypeid
        inner join invoiceline il
        on il.trackid = t.trackid
        where mt.mediatypeid = t.mediatypeid
        group by mt.name);

-- Query Version 2: Returns the whole table of counts and MediaNames (is easier to understand contextually, but doesn't give the flat answer). 
select MediaName, max(purchasecount) from(
    select mt.name MediaName, SUM(il.QUANTITY) purchasecount from mediatype mt
        inner join track t
        on t.mediatypeid = mt.mediatypeid
        inner join invoiceline il
        on il.trackid = t.trackid
        where mt.mediatypeid = t.mediatypeid
        group by mt.name)
        group by MediaName;
        
-- Query Version 3: Get the proper format with select * () where rownum <=1.
select * from(
    select mt.name MediaName, SUM(il.QUANTITY) purchasecount from mediatype mt
        inner join track t
        on t.mediatypeid = mt.mediatypeid
        inner join invoiceline il
        on il.trackid = t.trackid
        where mt.mediatypeid = t.mediatypeid
        group by mt.name
        order by sum(il.quantity) DESC
        ) where rownum <=1;
        
--Write a SQL Query showing customers not in the US
-- One Table, Customer
select * from customer c where c.country != 'USA';
-- Can also extend this with OR for different versions of the same name, if feeling sketchy about inconsistent inputs. 

--Write a SQL Query showing a unique list of billing countries on the Invoice table
select distinct i.billingcountry from invoice i order by i.BILLINGCOUNTRY ASC;

--Write a SQL Query that shows the Invoice Total, Customer Name, Country, and Sales agent for all invoices and customers 
-- Write a query that returns all of the above columns in both tables, including details from the employee table.
    -- Invoice values: Total, BillingCountry
        -- Relavent Invoice Keys: CustomerID
    -- Customer Values: FirstName + LastName, Country
        -- Relavent Customer Keys: CustomerID, SupportRepId == Employee.EmployeeId
    -- Employee Values: Title = "Sales Support Agent", FirstName + LastName
        -- Relavent Employee Keys: EmployeeId == Customer.SupportRepId
--The above was left in to show my thought process.
        
select c.firstname || ' ' || c.lastname CustomerName, c.country Country, 
    i.total InvoiceTotal, e.firstname || ' ' || e.lastname SalesAgentName from invoice i
    inner join customer c
    on i.customerid = c.customerid
    inner join employee e
    on c.supportrepid = e.employeeid
    order by CustomerName ASC;

--Write a SQL Query that shows all Tracks, but displays no IDs. Should also include the Album name, Media Type, and Genre.
--  Restated: Write a query that Shows all Tracks with Album Name, Media Type, and Genre, but without including the Track ID. 
select t.name TrackName, a.title AlbumTitle, mt.name MediaTypeName, g.name GenreName from track t
    inner join album a
    on t.albumid = a.albumid
    inner join mediatype mt
    on t.mediatypeid = mt.mediatypeid
    inner join genre g
    on t.genreid = g.genreid;

--Write a SQL Query that returns the Top 40 Songs for 2013
-- Restated: Return the top 40 songs in the year 2013. Use the rownum clause to limit how many rows are returned.
select * from (     
    select t.name SongName, sum(il.quantity) Downloads from track t
        inner join invoiceline il
        on t.trackid = il.trackid
        inner join invoice i
        on il.invoiceid = i.invoiceid
        where i.invoicedate >= DATE '2013-01-01'
        group by t.name
        order by Downloads DESC
    ) where rownum <= 40; --Personal note: you have to wrap an entire statement like this when you want to limit the sorted values.

-- Write a SQL Query that shows which sales agent made the most in sales overall
--  Restated: Write a query that returns the single sales agent with the maximum sales. 
    -- Relavent tables/columns: 
        --Employee: firstname+lastname, Title (For sorting), (Key) employeeid
        --Customer: (Key) supportrepid, (Key) customerid
        --Invoice: total, (Key) customerid
    
select * from(select e.lastname || ', ' || e.firstname SalesRep, sum(i.total) TotalSales from employee e
    inner join customer c
    on c.supportrepid = e.employeeid
    inner join invoice i
    on i.customerid = c.customerid
    where e.title = 'Sales Support Agent'
    group by e.lastname || ', ' || e.firstname
    order by sum(i.total) DESC
    ) where rownum <= 1;

-- Write a SQL Query that shows the top 3 best selling artists 
--  Restated: Find the 3 best selling artists.
    -- Relavent Tables/Columns:
        -- Artist: (key) artistid
        -- Album: (key) albumid, (key) artistid 
        -- Track: (key) trackid, (key) albumid
        -- InvoiceLine: (key) invoiceid, (key) trackid
        -- Invoice: invoice.total, (key) invoiceid
select * from (
    select ar.name, sum(i.total) from artist ar
        inner join album al
        on ar.artistid = al.artistid
        inner join track t
        on t.albumid = al.albumid
        inner join invoiceline il
        on il.trackid = t.trackid
        inner join invoice i
        on i.invoiceid = il.invoiceid
        group by ar.NAME
        order by sum(i.total) DESC
    ) where rownum <= 3;
    
-- Write a SQL Query that returns which albums have no Heavy Metal tracks
--  Restated: Return all albums where no tracks have genre.name = 'Heavy Metal'. 
select a.title from album a 
    inner join track t
    on t.albumid = a.albumid
    inner join genre g
    on g.genreid = t.genreid
    where g.name != 'Heavy Metal'
    group by a.title
    order by a.title ASC;

-- Write a SQL Query to find the the managers of employees supporting Brazilian customers.
--  Restated: Return the managers of each employee that has a Brazilian customer. 
    -- Relavent Tables/Columns: 
        -- Employee: firstname + lastname, (key) EmployeeId, (key) ReportsTo
        -- Customer: country, (key) supportrepid
    -- Solution: First, self join to find all managers. Then, go down the Chain to find all customers that are from Brazil. 
select e2.firstname || ' ' || e2.lastname ManagerName from employee e1
    join employee e2 
    on e1.reportsto = e2.employeeid
    inner join customer c
    on c.supportrepid = e1.employeeid
    where c.country = 'Brazil'
    group by e2.firstname || ' ' || e2.lastname;


