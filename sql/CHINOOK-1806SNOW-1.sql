-- Jorge Juarez: 1806-SNOW SQL Homework #1
-- Write a SQL Query that contains the names of all tracks that are longer than 6 minutes  
SELECT * 
FROM track
WHERE milliseconds > 360000;

-- Write a SQL Query to find the biggest song (which takes up the most space)
SELECT *
FROM  track
WHERE ROWNUM < 2
ORDER BY bytes DESC ;

-- Write a SQL Query that contains the titles of all albums with tracks longer than 6 minutes in them 
SELECT a.title, MAX(t.milliseconds) as max_milliseconds
FROM album a
INNER JOIN track t
ON t.albumid = a.albumid
GROUP BY a.title
HAVING MAX(t.milliseconds) > 360000;

-- Write a SQL Query that contains the albumId and number of songs in the album 
SELECT a.albumid, COUNT(t.albumid) as NUM_TRACKS
FROM album a
    INNER JOIN track t
    ON t.albumid = a.albumid
    GROUP BY a.albumid
ORDER BY a.albumid ASC;

-- Write a SQL query that contains artist's names and the number of tracks they have produced (assume an artist
-- produced a track if it appears in one of their albums)
SELECT art.name,art.artistid, COUNT(*) as TRACK_COUNT 
FROM artist art
    INNER JOIN album alb
    ON art.artistid = alb.artistid
        INNER JOIN track t
        ON t.albumid = alb.albumid
    GROUP BY art.artistid, art.name
    ORDER BY art.artistid ASC;

-- Write a SQL Query that returns the most purchased media type
SELECT m.name
FROM mediatype m
    NATURAL JOIN invoiceline inv
     WHERE ROWNUM <2
    GROUP BY m.name
    ORDER BY sum(inv.quantity) ASC;

-- Write a SQL Query showing customers not in the US
SELECT *
FROM customer 
WHERE country != 'USA';

-- Write a SQL Query showing a unique list of billing countries on the Invoice table
SELECT DISTINCT billingcountry
FROM invoice;

-- Write a SQL Query that shows the Invoice Total, Customer Name, Country, and Sales agent for all invoices and customers 
SELECT inv.total, c.firstname || ' ' || c.lastname as CUSTOMER_NAME, 
c.country, e.firstname || ' ' || e.lastname AS EMPLOYEE_NAME
FROM invoice inv
    NATURAL JOIN customer c
    INNER JOIN employee e
        ON c.supportrepid = e.employeeid;

-- Write a SQL Query that shows all Tracks, but displays no IDs. Should also include the Album name, Media Type, and Genre
SELECT t.name, alb.title AS ALBUM, ge.name AS GENRE
FROM track t
    INNER JOIN album alb
    ON alb.albumid = t.albumid
    INNER JOIN genre ge
    ON t.genreid = ge.genreid;
    
-- Write a SQL Query that returns the Top 40 Songs for 2013
SELECT t.name
FROM track t
    INNER JOIN invoiceline invline
        ON t.trackid = invline.invoicelineid
    INNER JOIN invoice i
        ON i.invoiceid = invline.invoiceid
    WHERE ROWNUM < 41 
        AND i.invoicedate >= to_date('01-01-13', 'dd-mm-yy')
        AND i.invoicedate <= to_date('31-12-13','dd-mm-yy')
    GROUP BY t.name
    ORDER BY SUM(i.total);

-- Write a SQL Query that shows which sales agent made the most in sales overall
SELECT e.firstname, SUM(inv.total)
FROM employee e
    INNER JOIN customer c
        ON c.supportrepid = e.employeeid
    INNER JOIN invoice inv
        ON inv.customerid = c.customerid
    GROUP BY e.firstname
    ORDER BY SUM(inv.total) DESC;
        
-- Write a SQL Query that shows the top 3 best selling artists 
select art.artistid, art.name, COUNT(inv.quantity)
FROM artist art
    INNER JOIN album alb ON art.artistid = alb.artistid
    INNER JOIN track t ON t.albumid = alb.albumid
    INNER JOIN invoiceline inv ON t.trackid = inv.trackid
    GROUP BY art.artistid, art.name
    ORDER BY COUNT(inv.quantity) DESC;
            
-- Write a SQL Query that returns which albums have no Heavy Metal tracks
SELECT alb.title AS NON_METAL_ALBUMS
FROM track t
INNER JOIN album alb
ON t.albumid = alb.albumid
WHERE t.albumid != '13'
ORDER BY alb.albumid ASC;

-- Write a SQL Query to find the the managers of employees supporting Brazilian customers
SELECT e.firstname
FROM employee e
INNER JOIN employee emp2
ON emp2.employeeid = e.reportsto
INNER JOIN customer c
ON c.supportrepid = e.employeeid
WHERE c.country = 'Brazil'
GROUP BY e.firstname
;