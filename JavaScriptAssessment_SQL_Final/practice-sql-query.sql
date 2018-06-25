--Write a SQL Query that contains the names of all tracks that are longer than 6 minutes
select name,milliseconds from track where MILLISECONDS>36000;

--Write a SQL Query to find the biggest song (which takes up the most space)
select name,bytes from track WHERE BYTES=(SELECT MAX(BYTES) FROM TRACK);

--Write a SQL Query that contains the titles of all albums with tracks longer than 6 minutes in them 
SELECT T.NAME as "Track Name",a.TITLE as "Album Name",T.milliseconds as "Track Duratation " FROM TRACK T,album a
 where t.albumid=a.albumid and T.MILLISECONDS>36000
 ORDER BY a.TITLE;

 
 
 --Write a SQL Query that contains the albumId and number of songs in the album
 SELECT albumid, count (albumid) as "Total Song in the Album" from track group by albumid ;
 
 /*Write a SQL query that contains artist's names and the number of tracks 
 they have produced (assume an artist produced a track if it appears in one of their albums)*/
 
 select composer, count(trackid) from track group by COMPOSER;
 
 --Write a SQL Query that returns the most purchased media type
 SELECT M.NAME AS "Most Purchased Media Type" FROM TRACK T, INVOICE I,MEDIATYPE M,INVOICELINE IL
 WHERE T.TRACKID=IL.TRACKID AND I.INVOICEID=IL.INVOICEID AND T.MEDIATYPEID=M.MEDIATYPEID and ROWNUM<=1 order by IL.QUANTITY desc;
 
  
--Write a SQL Query showing customers not in the US
select * from customer where country != 'USA';

--Write a SQL Query showing a unique list of billing countries on the Invoice table
SELECT DISTINCT BILLINGCOUNTRY FROM INVOICE;

--Write a SQL Query that shows the Invoice Total, Customer Name, Country, and Sales agent for all invoices and customers 
select c.FIRSTNAME || ' '|| c.lastname as "Customer Name",c.country, e.FIRSTNAME || ' '|| e.lastname 
as "Sales Agent",i.total as "Total Invoice" from customer c, invoice i,employee e
where (c.CUSTOMERID=i.CUSTOMERID) and  (e.employeeid=c.supportrepid);

-- Write a SQL Query that shows all Tracks, but displays no IDs. Should also include the Album name, Media Type, and Genre
select t.name as "Track Name",a.title as"Album Name",m.name as"Media Type",g.NAME as "Genre Name" 
from track t,album a,genre g,mediatype m
where (t.albumid=a.albumid) and (t.mediatypeid=m.MEDIATYPEID) and
(t.genreid=g.GENREID);

--Write a SQL Query that returns the Top 40 Songs for 2013
select t.name from track t,invoice i,INVOICELINE IL
 where  (t.trackid=IL.TRACKID)AND (i.INVOICEID =IL.INVOICEID)and 
 i.invoicedate between TO_DATE('01-JAN-13')AND TO_DATE('31-DEC-13')AND ROWNUM<=40;
 
 --Write a SQL Query that shows which sales agent made the most in sales overall
 select e.firstname,e.lastname from employee e,customer c,invoice i,invoiceline il where (e.EMPLOYEEID=c.SUPPORTREPID )
 and (c.CUSTOMERID=i.CUSTOMERID) and (i.INVOICEID = il.INVOICEID) and rownum<=1 order by il.quantity desc;
 
--Write a SQL Query that shows the top 3 best selling artists 

select * from invoiceline where rownum<=3 order by quantity desc;
select albumid from track where trackid in(882,886,884);
select artistid from album where albumid =71;
select name from artist where artistid=41;


--Write a SQL Query that returns which albums have no Heavy Metal tracks
select album.title as "Track Name",genre.name as "Genre Name" from album ,track,genre 
where album.albumid=track.albumid and track.genreid=genre.genreid and genre.GENREID !=3;

--Write a SQL Query to find the the managers of employees supporting Brazilian customers 

commit;



 
 
 
  
