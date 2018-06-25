--Write a SQL Query that contains the names of all tracks that are longer than 6 minutes
SELECT * From TRACK where milliseconds > 360000;

--Write a SQL Query to find the biggest song (which takes up the most space)
SELECT * FROM TRACK where BYTES = (SELECT MAX(BYTES) FROM TRACK);

--Write a SQL Query that contains the titles of all albums with tracks longer than 6 minutes in them 
SELECT TITLE FROM ALBUM WHERE ALBUMID IN (SELECT ALBUMID FROM TRACK WHERE MILLISECONDS > 360000);

--XXXXX
--Write a SQL Query that contains the albumId and number of songs in the album 
SELECT A.TITLE, COUNT(T.TRACKID) FROM TRACK T --Now how do i combine the numbers?
    INNER JOIN ALBUM A
    ON T.ALBUMID = A.ALBUMID
    GROUP BY A.TITLE, T.TRACKID;

--XXXXX
--Write a SQL query that contains artist's names and the number of tracks they have produced (assume an artist produced a track if it appears in one of their albums)
SELECT AR.NAME, T.MYCOUNT FROM ARTIST AR
INNER JOIN ALBUM A
ON AR.ARTISTID = A.ARTISTID
INNER JOIN (                                                --This kinda worked, kinda didn't....
    SELECT ALBUMID, COUNT(*) AS MYCOUNT
    FROM TRACK
    GROUP BY ALBUMID) T
ON T.ALBUMID = A.ALBUMID;


--Write a SQL Query that returns the most purchased media type
SELECT MAX(T.MYCOUNT), M.NAME FROM MEDIATYPE M
INNER JOIN (
    SELECT COUNT(I.trackid) AS MYCOUNT, I.TRACKID, T.MEDIATYPEID FROM INVOICELINE I
    INNER JOIN TRACK T
    ON T.TRACKID = I.TRACKID
    GROUP BY I.TRACKID, T.MEDIATYPEID
) T
ON T.MEDIATYPEID = M.MEDIATYPEID
GROUP BY M.NAME;


--Write a SQL Query showing customers not in the US
SELECT * FROM CUSTOMER WHERE NOT COUNTRY = 'USA';

--Write a SQL Query showing a unique list of billing countries on the Invoice table
SELECT DISTINCT BILLINGCOUNTRY FROM INVOICE;

--Write a SQL Query that shows the Invoice Total, Customer Name, Country, and Sales agent for all invoices and customers 
SELECT I.TOTAL, C.FIRSTNAME || ' ' || C.LASTNAME AS NAME, I.BILLINGCOUNTRY, E.EMPLOYEEID FROM INVOICE I
    INNER JOIN CUSTOMER C
    ON I.CUSTOMERID = C.CUSTOMERID
    INNER JOIN EMPLOYEE E
    ON C.SUPPORTREPID = E.EMPLOYEEID;
    
--Write a SQL Query that shows all Tracks, but displays no IDs. Should also include the Album name, Media Type, and Genre
SELECT T.NAME AS TRACKNAME, A.TITLE AS ALBUMNAME, M.NAME AS MEDIATYPE, G.NAME AS GENRENAME FROM TRACK T
    INNER JOIN ALBUM A
    ON T.ALBUMID = A.ALBUMID
    INNER JOIN MEDIATYPE M
    ON T.MEDIATYPEID = M.MEDIATYPEID
    INNER JOIN GENRE G
    ON T.GENREID = G.GENREID;
    

--XXXXX
--Write a SQL Query that returns the Top 40 Songs for 2013
SELECT T.NAME, COUNT(IL.QUANTITY) FROM TRACK T --The count doesn't work right
    INNER JOIN INVOICELINE IL
    ON T.TRACKID = IL.TRACKID
    INNER JOIN INVOICE I
    ON IL.INVOICEID = I.INVOICEID
    WHERE I.INVOICEDATE BETWEEN '1-JAN-13' AND '31-DEC-2013'; --????
    
SELECT INVOICEID FROM INVOICE WHERE INVOICEDATE BETWEEN '1-JAN-13' AND '31-DEC-2013';


SELECT COUNT(*) FROM (
SELECT IL.TRACKID FROM INVOICELINE IL
INNER JOIN INVOICE I
ON I.INVOICEID = IL.INVOICEID
WHERE I.INVOICEDATE BETWEEN '1-JAN-13' AND '31-DEC-2013');




    
    
SELECT * FROM INVOICE;

--Write a SQL Query that shows which sales agent made the most in sales overall
SELECT COUNT(E.EMPLOYEEID) AS TOTAL, E.FIRSTNAME
    FROM EMPLOYEE E
    INNER JOIN CUSTOMER C
    ON E.EMPLOYEEID = C.SUPPORTREPID
    GROUP BY E.EMPLOYEEID, E.FIRSTNAME;
    --Cannot figure out how to order them from most sales to least

--Write a SQL Query that shows the top 3 best selling artists 
SELECT TOTAL FROM INVOICE;

--Write a SQL Query that returns which albums have no Heavy Metal tracks
SELECT DISTINCT A.TITLE FROM ALBUM A
    INNER JOIN TRACK T
    ON A.ALBUMID = T.ALBUMID
    INNER JOIN GENRE G
    ON T.GENREID = G.GENREID
    WHERE NOT G.NAME ='Heavy Metal';
    
--Write a SQL Query to find the the managers of employees supporting Brazilian customers 
SELECT * FROM EMPLOYEE E 
    INNER JOIN CUSTOMER C
    ON E.EMPLOYEEID = C.SUPPORTREPID
    WHERE C.COUNTRY = 'Brazil';