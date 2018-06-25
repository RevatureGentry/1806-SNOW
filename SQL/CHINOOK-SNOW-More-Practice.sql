--Write a SQL Query that contains the names of all tracks that are longer than 6 minutes
Select name from track where (milliseconds/1000)/60 > 6; --623 songs
	
--Write a SQL Query to find the biggest song (which takes up the most space)
Select t.name,t.bytes from track t where bytes in(select max(bytes) from track); --Through a Looking Glass, 1059546140
	
--Write a SQL Query that contains the titles of all albums with tracks longer than 6 minutes in them 
Select distinct title from album join track on album.albumid = track.albumid
where (milliseconds/1000)/60 > 6; --182 albums
	
--Write a SQL Query that contains the albumId and number of songs in the album 
select count(albumid) from track group by albumid;
	
--Write a SQL query that contains artist's names and the number of tracks they have produced (assume an artist produced a track if it appears in one of their albums)
select a.name,count(t.trackid) from artist a join album al on al.artistid = a.artistid 
join track t on t.albumid = al.albumid group by a.name;
	
--Write a SQL Query that returns the most purchased media type
select * from (select m.name,count(*) as most_purchase from mediatype m
join track t on t.mediatypeid = m.mediatypeid group by m.name
order by most_purchase DESC) where rownum =1;
	
--Write a SQL Query showing customers not in the US
select * from customer where country != 'USA';

--Write a SQL Query showing a unique list of billing countries on the Invoice table
select distinct billingcountry from invoice;

--Write a SQL Query that shows the Invoice Total, Customer Name, Country, and Sales agent for all invoices and customers 
select i.total, c.firstname, c.lastname, c.country, e.firstname, e.lastname from invoice i join customer c
on i.customerid = c.customerid join employee e on c.supportrepid = e.employeeid;

--Write a SQL Query that shows all Tracks, but displays no IDs. Should also include the Album name, Media Type, and Genre
select t.name,a.title,m.name,g.name from track t join album a on t.albumid = a.albumid
join mediatype m on t.mediatypeid = m.mediatypeid join genre g on t.genreid = g.genreid;

--Write a SQL Query that returns the Top 40 Songs for 2013

select * from (select t.name,t.trackid,count(il.quantity) as top40 from invoiceline il 
join invoice i on il.invoiceid = i.invoiceid
join track t on t.trackid = il.trackid
where i.invoicedate between '01-JAN-13' and '31-DEC-13' 
group by t.name,t.trackid order by top40 desc) where rownum < 41;

--Write a SQL Query that shows which sales agent made the most in sales overall
select * from (select e.firstname,e.lastname,sum(i.total) as best_sale from employee e
join customer c on e.employeeid = c.supportrepid
join invoice i on c.customerid = i.customerid group by e.firstname, e.lastname
order by best_sale desc) where rownum < 2;

--Write a SQL Query that shows the top 3 best selling artists 
select * from (select a.name,sum(il.unitprice * il.quantity) as selling from artist a join album al on a.ARTISTID = al.ARTISTID
join track t on al.albumid = t.albumid join invoiceline il on t.trackid = il.trackid
group by a.name
order by selling desc)
where rownum < 4;

--Write a SQL Query that returns which albums have no Heavy Metal tracks
select distinct a.title from album a join track t on a.ALBUMID =t.albumid
join genre g on g.genreid = t.genreid where g.name != 'Heavy Metal';

--Write a SQL Query to find the the managers of employees supporting Brazilian customers
select distinct m.firstname,m.lastname from employee e join employee m on e.reportsto = m.employeeid
join customer c on c.supportrepid = e.employeeid where c.country = 'Brazil';
