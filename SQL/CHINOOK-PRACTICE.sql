--Write a SQL Query that contains the names of all tracks that are longer than 6 minutes
select name from track where milliseconds > 360000;
--Write a SQL Query to find the biggest song (which takes up the most space)
select * from (select * from track order by bytes desc) where rownum = 1;
--Write a SQL Query that contains the titles of all albums with tracks longer than 6 minutes in them 
select distinct a.title from track t
    inner join album a
    on t.albumid = a.albumid
    where milliseconds > 360000;
--Write a SQL Query that contains the albumId and number of songs in the album 
select a.albumid, count(*) as Tracks from album a
    inner join track t
    on a.albumid = t.albumid
    group by a.albumid;
--Write a SQL query that contains artist's names and the number of tracks they have produced (assume an artist produced a track if it appears in one of their albums)
select r.name, count(*) as Tracks from artist r
    inner join album a
    on r.artistid = a.artistid
    inner join track t
    on a.albumid = t.albumid
    group by r.name;
--Write a SQL Query that returns the most purchased media type
select name from (select m.name, count(*) from invoiceline i
                    inner join track t
                    on i.trackid = t.trackid
                    inner join mediatype m
                    on t.mediatypeid = m.mediatypeid
                    group by m.name
                    order by count(*) desc)
    where rownum = 1;
select * from mediatype;
--Write a SQL Query showing customers not in the US
select * from customer where country != 'USA';
--Write a SQL Query showing a unique list of billing countries on the Invoice table
select distinct billingcountry from invoice;
--Write a SQL Query that shows the Invoice Total, Customer Name, Country, and Sales agent for all invoices and customers 
select i.total, c.firstname || ' ' || c.lastname as Customer, c.country, e.firstname || ' ' || e.lastname as Sales_Agent from invoice i
    join customer c
    on i.customerid = c.customerid
    join employee e
    on c.supportrepid = e.employeeid;
--Write a SQL Query that shows all Tracks, but displays no IDs. Should also include the Album name, Media Type, and Genre
select t.name, a.title as Album, m.name as Media_Type, g.name as Genre, t.composer, t.milliseconds, t.bytes, t.unitprice from track t
    join album a
    on t.albumid = a.albumid
    join mediatype m
    on t.mediatypeid = m.mediatypeid
    join genre g
    on t.genreid = g.genreid;
--Write a SQL Query that returns the Top 40 Songs for 2013
select name from (select t.name, count(*) from invoice i
            join invoiceline il
            on i.invoiceid = il.invoiceid
            join track t
            on il.trackid = t.trackid
            where i.invoicedate like '%%-%%%-13'
            group by t.name
            order by count(*) desc)
    where rownum <= 40;
--Write a SQL Query that shows which sales agent made the most in sales overall
select e.firstname || ' ' || e.lastname as Name from (select e.employeeid, sum(i.total) from invoice i
                join customer c
                on i.customerid = c.customerid
                join employee e
                on c.supportrepid = e.employeeid
                group by e.employeeid
                order by sum(i.total) desc) x
    join employee e
    on x.employeeid = e.employeeid
    where rownum = 1;
--Write a SQL Query that shows the top 3 best selling artists 
select name from (select ar.name, count(*) from invoiceline il
            join track t
            on il.trackid = t.trackid
            join album al
            on t.albumid = al.albumid
            join artist ar
            on al.artistid = ar.artistid
            group by ar.name
            order by count(*) desc)
    where rownum <= 3;
--Write a SQL Query that returns which albums have no Heavy Metal tracks
select distinct a.title from track t
    join album a
    on t.albumid = a.albumid
    join genre g
    on t.genreid = g.genreid
    where g.name != 'Heavy Metal';
--Write a SQL Query to find the the managers of employees supporting Brazilian customers
select distinct e2.firstname || ' ' || e2.lastname as Name from employee e2
    join employee e1
    on e2.employeeid = e1.reportsto
    join customer c
    on e1.employeeid = c.supportrepid
    where c.country = 'Brazil';