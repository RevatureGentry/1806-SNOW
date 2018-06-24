-- SQL query that names all tracks longer than 6 minutes
SELECT name from track where (milliseconds / 1000 / 60) > 6;
SELECT name, milliseconds from track where (milliseconds / 1000 / 60) > 6;
SELECT name, milliseconds / 1000 / 60 from track where (milliseconds / 1000 / 60) > 6;

-- Biggest song (has the most space
SELECT t.trackid, t.name, m.max from track t, (SELECT MAX(bytes) as max from track) m
    where t.bytes = m.max;
SELECT * FROM
    (SELECT t.trackid, t.name, t.bytes from track t order by t.bytes DESC)
    WHERE ROWNUM = 1;

-- titles of all albums with tracks longer than 6 minutes
SELECT DISTINCT a.title FROM album a
    inner join track t on a.albumid = t.albumid
    where (t.milliseconds / 1000 / 60) > 6;

-- for each album, get the albumid and number of songs in the album
SELECT a.albumid, COUNT(t.trackid) FROM album a
    INNER JOIN track t ON a.albumid = t.albumid GROUP BY a.albumid;
SELECT a.albumid, a.title, COUNT(t.trackid) FROM album a
    INNER JOIN track t ON a.albumid = t.albumid GROUP BY a.albumid, a.title;
    
-- for each artist, get their name and the number of tracks they have produced (have had
-- the track in their albums)
SELECT a.name, COUNT(t.trackid) FROM artist a
    LEFT JOIN album al on a.artistid = al.artistid
    INNER JOIN track t on al.albumid = t.albumid
    GROUP BY a.artistid, a.name;
    
-- get the id and name of the most purchased media type.
SELECT s.mediatypeid, s.name, m.maximum FROM
    (SELECT m.mediatypeid, m.name, SUM(iv.quantity) as total FROM mediatype m
        INNER JOIN track t on m.mediatypeid = t.mediatypeid
        INNER JOIN invoiceline iv on t.trackid = iv.trackid
        GROUP BY m.mediatypeid, m.name) s,
    (SELECT MAX(m.total) as maximum FROM
        (SELECT m.mediatypeid, m.name, SUM(iv.quantity) as total FROM mediatype m
            INNER JOIN track t on m.mediatypeid = t.mediatypeid
            INNER JOIN invoiceline iv on t.trackid = iv.trackid
            GROUP BY m.mediatypeid, m.name) m) m
    WHERE s.total = m.maximum;
SELECT s.mediatypeid, s.name, s.total FROM
    (SELECT m.mediatypeid, m.name, SUM(iv.quantity) as total FROM mediatype m
        INNER JOIN track t on m.mediatypeid = t.mediatypeid
        INNER JOIN invoiceline iv on t.trackid = iv.trackid
        GROUP BY m.mediatypeid, m.name) s
    WHERE s.total >= ALL
        (SELECT SUM(iv.quantity) as total FROM mediatype m
            INNER JOIN track t on m.mediatypeid = t.mediatypeid
            INNER JOIN invoiceline iv on t.trackid = iv.trackid
            GROUP BY m.mediatypeid, m.name);
SELECT * FROM
    (SELECT m.mediatypeid, m.name, SUM(iv.quantity) as total FROM mediatype m
            INNER JOIN track t on m.mediatypeid = t.mediatypeid
            INNER JOIN invoiceline iv on t.trackid = iv.trackid
            GROUP BY m.mediatypeid, m.name ORDER BY total DESC)
    WHERE ROWNUM = 1;
            
-- Get all customers that are not in the U.S.
SELECT * FROM customer WHERE country != 'USA';
    
-- Get all unique billing countries present in the invoice table
SELECT DISTINCT billingcountry from invoice;

-- GET invoice total, customer name, country, and sales agent for all invoices and customers.
SELECT DISTINCT i.total, c.firstname || ' ' || c.lastname as name, c.country,
    e.firstname || ' ' || e.lastname as sales_agent FROM invoice i
    INNER JOIN customer c on i.customerid = c.customerid
    INNER JOIN employee e on c.supportrepid = e.employeeid;
    
-- For each track, GET track name, album name, media type name, and genre name.
SELECT t.name, a.title, mt.name, g.name FROM track t
    LEFT JOIN album a on t.albumid = a.albumid
    LEFT JOIN genre g on t.genreid = g.genreid
    LEFT JOIN mediatype mt on t.mediatypeid = mt.mediatypeid;
    
-- GET the Top 40 Songs for 2013.
-- That is, get the 40 most-purchased tracks sold in 2013.
SELECT * FROM
    (SELECT t.trackid, t.name, SUM(il.quantity) as total FROM track t
        INNER JOIN invoiceline il on t.trackid = il.trackid
        INNER JOIN invoice i on il.invoiceid = i.invoiceid
        WHERE i.invoicedate between to_date('01-01-2013', 'mm-dd-yyyy')
            and to_date('12-31-2013', 'mm-dd-yyyy')
        GROUP BY t.trackid, t.name ORDER BY total DESC)
    WHERE ROWNUM <= 40;
SELECT * FROM -- assumes songs with same name ARE the same. Bad assumption though.
    (SELECT t.name, SUM(il.quantity) as total FROM track t
        INNER JOIN invoiceline il on t.trackid = il.trackid
        INNER JOIN invoice i on il.invoiceid = i.invoiceid
        WHERE i.invoicedate between to_date('01-01-2013', 'mm-dd-yyyy')
            and to_date('12-31-2013', 'mm-dd-yyyy')
        GROUP BY t.name ORDER BY total DESC)
    WHERE ROWNUM <= 40;


-- GET the sales agent who made the most in sales overall.
SELECT DISTINCT totals.employeeid, totals.firstname || ' ' || totals.lastname, totals.total as name FROM
    (SELECT e.employeeid, e.firstname, e.lastname, SUM(i.total) as total FROM employee e
        INNER JOIN customer c on e.employeeid = c.customerid
        INNER JOIN invoice i on c.customerid = i.customerid
        GROUP BY e.employeeid, e.firstname, e.lastname) totals
    WHERE totals.total >= ALL
        (SELECT SUM(i.total) as total FROM employee e
            INNER JOIN customer c on e.employeeid = c.customerid
            INNER JOIN invoice i on c.customerid = i.customerid
            GROUP BY e.employeeid, e.firstname, e.lastname);
SELECT * FROM
    (SELECT e.employeeid, e.firstname, e.lastname, SUM(i.total) as total FROM employee e
            INNER JOIN customer c on e.employeeid = c.customerid
            INNER JOIN invoice i on c.customerid = i.customerid
            GROUP BY e.employeeid, e.firstname, e.lastname ORDER BY total DESC)
    WHERE ROWNUM = 1;
                
-- Select top 3 best selling artists in the database... by number of tracks sold?
-- Or by total sales in dollars?
SELECT * FROM -- by number of tracks.
    (SELECT a.artistid, a.name, SUM(ivl.quantity) as total FROM artist a
        INNER JOIN album alb on a.artistid = alb.artistid
        INNER JOIN track t on alb.albumid = t.albumid
        INNER JOIN invoiceline ivl on t.trackid = ivl.trackid
        GROUP BY a.artistid, a.name ORDER BY total DESC)
    WHERE ROWNUM <= 3;
SELECT * FROM -- by sales.
    (SELECT a.artistid, a.name, SUM(ivl.quantity * ivl.unitprice) as total FROM artist a
        INNER JOIN album alb on a.artistid = alb.artistid
        INNER JOIN track t on alb.albumid = t.albumid
        INNER JOIN invoiceline ivl on t.trackid = ivl.trackid
        GROUP BY a.artistid, a.name ORDER BY total DESC)
    WHERE ROWNUM <= 3;

-- GET albums with no heavy metal tracks
SELECT DISTINCT a.albumid, a.title FROM album a
    LEFT JOIN track t on a.albumid = t.albumid
    LEFT JOIN genre g on t.genreid = g.genreid
    WHERE a.albumid NOT IN
        (SELECT a.albumid FROM album a
            INNER JOIN track t on a.albumid = t.albumid
            INNER JOIN genre g on t.genreid = g.genreid
            WHERE g.name = 'Heavy Metal'); 
        

-- GET all managers of any employees that support any Brazilian customers.
-- Seems like there is only one such manager.
SELECT distinct m.employeeid, m.firstname || ' ' || m.lastname as name FROM
    employee m,
    (SELECT e.employeeid, e.reportsto FROM employee e
        INNER JOIN customer c on e.employeeid = c.supportrepid
        WHERE c.country = 'Brazil') e
    WHERE e.reportsto = m.employeeid;
SELECT distinct e.employeeid, e.firstname || ' ' || e.lastname as name FROM
    employee e WHERE e.employeeid = ANY
        (SELECT e.reportsto FROM employee e
            INNER JOIN customer c on e.employeeid = c.supportrepid
            WHERE c.country = 'Brazil');