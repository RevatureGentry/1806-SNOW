--Write a SQL Query that contains the names of all tracks that are longer than 6 minutes
select * from track where MILLISECONDS > 360000;

--Write a SQL Query to find the biggest song (which takes up the most space)
select * FROM (
    SELECT * FROM track ORDER BY track.BYTES DESC
)
WHERE ROWNUM <= 1;

--Write a SQL Query that contains the titles of all albums with tracks longer than 6 minutes in them 
select a1.TITLE as album
        from album a1
        inner join track a2
        on a2.ALBUMID = a1.ALBUMID
        where a2.MILLISECONDS > 360000;

--Write a SQL Query that contains the albumId and number of songs in the album        
select albumid, COUNT(*) from track
group by ALBUMID;

--Write a SQL query that contains artist's names and the number of tracks they have produced (assume an artist produced a track if it appears in one of their albums)
select composer, COUNT(COMPOSER) from track
group by composer;

--Write a SQL Query that returns the most purchased media type
select count(s.mediatypeid_t) from ( 
    select T.trackid as track_id_T, T.MEDIATYPEID as mediatypeid_T, T.UNITPRICE as price_T, L.QUANTITY as Quantity_L 
    from track T,invoiceline L
    where T.TRACKID = L.TRACKID
) s
group by s.mediatypeid_T;

--Write a SQL Query showing customers not in the US
select * from customer where country != 'USA';

--Write a SQL Query showing a unique list of billing countries on the Invoice table
select billingcountry from invoice
group by billingcountry;

--Write a SQL Query that shows the Invoice Total, Customer Name, Country, and Sales agent for all invoices and customers 
select c.firstname || ' ' || c.lastname as CustomerName,
e.firstname || ' ' || e.lastname as EmployeeName,
c.country, i.total from customer c 
    inner join invoice i
    on c.customerid = i.customerid
    inner join employee e
    on c.supportrepid = e.employeeid;

--Write a SQL Query that shows all Tracks, but displays no IDs. Should also include the Album name, Media Type, and Genre
select t.name,a.title, t.composer,m.name as MediaType,g.name as Genre, t.milliseconds, t.bytes, t.unitprice
from track T, album A, mediatype M, genre G
where T.ALBUMID = A.ALBUMID AND T.MEDIATYPEID = M.MEDIATYPEID and T.GENREID = G.GENREID;

--Write a SQL Query that returns the Top 40 Songs for 2013
Select * from(
select t.name,count(l.quantity) as quantity_
from track T, invoiceline L
where T.UNITPRICE = L.UNITPRICE 
group by t.name
order by quantity_ desc)
where rownum <= 40;

--Write a SQL Query that shows which sales agent made the most in sales overall
select * from(
select E.firstname || ' ' || E.lastname as Employeename, sum(I.total) as total_
from employee E, customer C, invoice I
where E.EMPLOYEEID = C.SUPPORTREPID AND C.CUSTOMERID = I.CUSTOMERID
group by E.firstname, E.lastname
order by total_ desc)
where rownum <= 1;

--Write a SQL Query that shows the top 3 best selling artists 
select * from(
select a.name, sum(i.total) as total_
from artist A, track T,album AB,invoiceline IL,invoice i
where T.ALBUMID = AB.ALBUMID AND AB.ALBUMID = A.ARTISTID AND IL.TRACKID = T.TRACKID AND i.INVOICEID = IL.INVOICEID
group by a.name
order by total_ desc)
where rownum <= 3;

--Write a SQL Query that returns which albums have no Heavy Metal tracks
select ab.title
from album ab, track t, genre g
where t.ALBUMID = ab.ALBUMID AND t.GENREID = g.GENREID AND g.NAME != 'Heavy Metal';

--Write a SQL Query to find the the managers of employees supporting Brazilian customers 
select E.firstname || ' ' || E.lastname as Employeename, E.REPORTSTO
from employee E, customer C
where E.EMPLOYEEID = C.SUPPORTREPID AND C.COUNTRY = 'Brazil';



 




