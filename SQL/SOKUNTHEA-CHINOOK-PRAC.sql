--Write a SQL Query that contains the names of all tracks that are longer than 6 minutes
-- 1 minute to milliseconds is 60000;
select * from track where milliseconds > 360000;

--Write a SQL Query to find the biggest song (which takes up the most space)
--Took the track table and sort it by bytes in descending order. Then select the first row which should be the highest bytes.
select * from (select * from track order by bytes desc) where rownum =1;
    
--Write a SQL Query that contains the titles of all albums with tracks longer than 6 minutes in them
--Inner join the album and track table and then match the album id that have a song longer than 6 minutes.
select distinct title from album a
    inner join track t
    on a.albumid = t.albumid
    where t.milliseconds > 360000;

--Write a SQL Query that contains the albumId and number of songs in the album 
--Same tables as the last one. Use count to count all songs and group them by their proper id.
select a.albumid, a.title as album, count(a.albumid) as songs from album a
    inner join track t
    on a.albumid = t.albumid
    group by a.albumid, a.title
    order by a.albumid asc;

--Write a SQL query that contains artist's names and the number of tracks they have produced (assume an artist produced a track if it appears in one of their albums)
--Same as last table rearranged value to correspond with the apporiated table.
select a.name, count(a.artistid) as songs from artist a
    inner join track t
    on a.name = t.composer
    group by a.name
    order by a.name asc;

--Write a SQL Query that returns the most purchased media type	
--Same as last table rearranged value to correspond with the apporiated table.
select m.mediatypeid, m.name, count(m.mediatypeid) as solded from mediatype m
    inner join track t
    on m.mediatypeid = t.mediatypeid
    group by m.mediatypeid, m.name
    order by solded desc;

--Write a SQL Query showing customers not in the US
select * from customer where country != 'USA';

--Write a SQL Query showing a unique list of billing countries on the Invoice tables
select unique billingcountry from invoice;

--Write a SQL Query that shows the Invoice Total, Customer Name, Country, and Sales agent for all invoices and customers 
select  e.firstname as rep_firstname, e.lastname as rep_lastname,c.firstname as customer_firstname, c.lastname as customer_lastname,c.country, i.total from customer c
    inner join invoice i
    on c.customerid = i.customerid
    inner join employee e
    on c.supportrepid = e.employeeid
    order by c.country asc;

--Write a SQL Query that shows all Tracks, but displays no IDs. Should also include the Album name, Media Type, and Genre
select t.name as title, a.title as album, m.name as mediatype, g.name as genre from album a
    inner join track t
    on a.albumid = t.albumid
    inner join mediatype m
    on t.mediatypeid = m.mediatypeid
    inner join genre g
    on t.genreid = g.genreid
    order by album asc;

--Write a SQL Query that returns the Top 40 Songs for 2013
select * from (select t.name as song, count(il.trackid) as total from invoiceline il
    inner join invoice i
    on il.INVOICEID = i.INVOICEID
    inner join track t
    on il.trackid = t.trackid
    where i.invoicedate between to_date('01-01-2013', 'mm-dd-yyyy') and to_date('12-31-2013', 'mm-dd-yyyy')
    group by t.name
    order by total desc)
    where rownum < 41;

--Write a SQL Query that shows which sales agent made the most in sales overall
select * from (select e.firstname, e.lastname, sum(i.total) as totalsales from customer c
    inner join invoice i
    on c.customerid = i.customerid
    inner join employee e
    on c.supportrepid = e.employeeid
    group by e.firstname, e.lastname
    order by totalsales desc)
    where rownum = 1;

--Write a SQL Query that shows the top 3 best selling artists 
--select * from track;
select * from (select a.name as artist, sum(t.unitprice) as sales from artist a
    inner join track t
    on a.name = t.composer
    inner join invoiceline il
    on t.trackid = il.trackid
    group by a.name
    order by sales desc)
    where rownum < 4;

--Write a SQL Query that returns which albums have no Heavy Metal tracks
--select * from genre;
--select * from track where genreid = 13;

select a.title as album from album a
    inner join track t
    on a.albumid = t.albumid
    inner join genre g
    on t.genreid = g.genreid
    where a.albumid != 98 and a.albumid !=101 and a.albumid != 102
    group by a.title
    order by a.title asc;

--Write a SQL Query to find the the managers of employees supporting Brazilian customers
select e.firstname, e.lastname, c.country from customer c
    inner join invoice i
    on c.customerid = i.customerid
    inner join employee e
    on c.supportrepid = e.employeeid
    where c.country = 'Brazil'
    group by e.firstname, e.lastname, c.country
    order by c.country asc;