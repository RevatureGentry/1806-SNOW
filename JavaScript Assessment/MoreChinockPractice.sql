--Write a SQL Query that contains the names of all tracks that are longer than 6 minutes
select * from TRACK where MILLISECONDS > 6*1.6666666666667*POWER(10,5);
	
--Write a SQL Query to find the biggest song (which takes up the most space)
select T.* from TRACK T ,(select max(BYTES) AS maxBytes from TRACK) S where T.bytes = S.maxBytes;

--Write a SQL Query that contains the titles of all albums with tracks longer than 6 minutes in them
select TITLE from ALBUM WHERE albumid in (select ALBUMID from TRACK where MILLISECONDS > 6*1.6666666666667*POWER(10,5));
	
--Write a SQL Query that contains the albumId and number of songs in the album 
select 
a.title, 
s.trackCount, 
s.albumid 
from album a, 
	(select 
	 count(*) as TrackCount, 
	 t.albumid 
	 from track t group by albumid) s 
where s.albumid = a.albumid;
	
--Write a SQL query that contains artist's names and the number of tracks they have produced 
--(assume an artist produced a track if it appears in one of their albums)
select a.name, c.trackCount from artist a,
    (select a.artistid, s.trackCount, s.albumid 
    from album a, ( select 
                    count(*) as TrackCount, 
                    t.albumid from track t 
                    group by albumid) s 
    where s.albumid = a.albumid) c
where c.artistid = a.artistid;
	
--Write a SQL Query that returns the most purchased media type
select 
s.quant as Number_Purchased, 
m.NAME as Type_Most_Purchased from 
    (select 
    count(L.quantity) as quant, 
    T.MEDIATYPEID 
    from 
    track T, invoiceline L 
    where 
    L.trackID = T.trackID
    group by mediatypeid)s,
    mediatype m
    where rownum < 2
    and m.MEDIATYPEID = s.MEDIATYPEID
order by quant desc;

	
--Write a SQL Query showing customers not in the US
select * from customer where country <> 'USA'

--Write a SQL Query showing a unique list of billing countries on the Invoice table
select distinct billingcountry from invoice;

--Write a SQL Query that shows the Invoice Total, Customer Name, Country, and Sales agent for all invoices and customers
select 
I.total AS Invoice_Total,
C.firstname || ' '|| c.lastname as Customer_Name,
C.country,
E.firstName || ' ' || E.lastName as Sales_Agent
from customer C, invoice I, Employee E
where C.customerid = I.customerID
and E.employeeID = C.supportRepID;

Write a SQL Query that shows all Tracks, but displays no IDs. Should also include the Album name, Media Type, and Genre
select 
T.NAME TRACK_NAME,
A.TITLE AS ALBUM_NAME,
G.NAME as GENRE,
M.NAME as MEDIA_TYPE
from 
track T,
album A,
genre G,
mediaType M
where T.GENREID = G.GENREID
and T.ALBUMID = A.ALBUMID
and T.MEDIATYPEID = M.MEDIATYPEID;

--Write a SQL Query that returns the Top 40 Songs for 2013
SELECT
    T.NAME,
    L.quantity
    FROM
    INVOICELINE L,
    track T,
    invoice I
    where L.trackID = t.trackid
    and I.invoiceid = L.invoiceID
    and substr(i.invoicedate,-2,2) = '13'
order by l.quantity desc


--Write a SQL Query that shows which sales agent made the most in sales overall
select E.firstname || ' ' || E.lastName as sales_agenet,
s.quant as sales
from  
    (select 
    c.supportRepID,
    count(L.quantity) as quant
    from
    invoiceline L,
    invoice I,
    customer C
    where L.invoiceID = I.invoiceid
    and I.customerid = C.customerid
    group by c.supportRepID) S,
Employee E
where E.employeeID = S.supportRepID;

--Write a SQL Query that shows the top 3 best selling artists 
select * from
    (select
    S.quant as sales,
    A.name from 
        (select 
        sum(L.quantity) as quant,
        A.artistid 
        from 
        track T,
        album A,
        invoiceline L
        where 
        T.albumID = A.albumID
        and T.trackid = L.trackid
        group by artistid) S,
    artist A
    where A.artistid = S.artistid
    order by quant desc) T
where rownum < 4

--Write a SQL Query that returns which albums have no Heavy Metal tracks
select distinct
A.title
from 
track T,
genre G,
album A
where T.genreID = G.genreid
and T.albumid = A.albumid
and G.NAME <> 'HEAVY METAL'
and G.NAME NOT LIKE '%eavy%'
and G.NAME NOT LIKE '%etal%'

--Write a SQL Query to find the the managers of employees supporting Brazilian customers 
select distinct m.FIRSTNAME || ' ' || m.LASTNAME from 
customer c,
employee e,
employee m
where c.country = 'Brazil'
and c.supportrepid = e.employeeid
and e.REPORTSTO = m.EMPLOYEEID;