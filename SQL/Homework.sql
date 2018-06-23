--Write a SQL Query that contains the names of all tracks that are longer than 6 minutes
select * from track
where milliseconds > 360000;
--Write a SQL Query to find the biggest song (which takes up the most space)
select name from track
where bytes = (select MAX(BYTES) from track);
--Write a SQL Query that contains the titles of all albums with tracks longer than 6 minutes in them
select title from album a
inner join track t on
t.albumid = a.albumid
where t.milliseconds > 360000;
--Write a SQL Query that contains the albumId and number of songs in the album
select count(album.albumid) as count, t.albumid from album
inner join track t on
t.albumid = album.albumid
group by album.albumid
order by albumid;
--Write a SQL query that contains artist's names and the number of tracks they have produced (assume an artist produced a track if it appears in one of their albums)
select count(b.albumid) as count, a.name from artist a
inner join album b on
a.artistid = b.artistid
inner join track t on
b.albumid = t.albumid
group by a.name
order by name;
--Write a SQL Query that returns the most purchased media type (*)
select m.name, count(m.mediatypeid) as counter from mediatype m
inner join track t on
m.mediatypeid = t.mediatypeid
inner join invoiceline i on
i.trackid = t.trackid
where quantity = (select MAX(quantity) from mediatype m)
group by m.name
order by counter desc;
--Write a SQL Query showing customers not in the US
select firstname || ' ' || lastname as fullname, country from customer
where country != 'USA';
--Write a SQL Query showing a unique list of billing countries on the Invoice table
select distinct billingcountry from invoice;
--Write a SQL Query that shows the Invoice Total, Customer Name, Country, and Sales agent for all invoices and customers 

--Write a SQL Query that shows all Tracks, but displays no IDs. Should also include the Album name, Media Type, and Genre
select t.name as Track, m.name as Media_Type, g.name as Genre, b.title as Album_Name from track t
inner join genre g on
g.genreid = t.genreid
inner join mediatype m on
m.mediatypeid = t.mediatypeid
inner join album b on
b.albumid = t.albumid;
--Write a SQL Query that returns the Top 40 Songs for 2013

--Write a SQL Query that shows which sales agent made the most in sales overall

--Write a SQL Query that shows the top 3 best selling artists 
select distinct a.name from artist a
inner join album b on
b.artistid = a.artistid
inner join track t on
t.albumid = b.albumid
inner join invoiceline i on
i.trackid = t.trackid
where quantity = (select  MAX(i.quantity) from invoiceline);
--Write a SQL Query that returns which albums have no Heavy Metal tracks
select distinct a.title from album a
inner join track t on
t.albumid = a.albumid
inner join genre g on
g.genreid = t.genreid
where g.name != 'Heavy Metal';
--Write a SQL Query to find the the managers of employees supporting Brazilian customers 
select e.firstname || ' ' || e.lastname as fullname, e.reportsto as manager from employee e
inner join customer c on
c.supportrepid = e.employeeid
where c.country = 'Brazil';