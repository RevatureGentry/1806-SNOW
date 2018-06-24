--Write a SQL Query that contains the names of all tracks that are longer than 6 minutes
select name from track where milliseconds > '360000';
--Write a SQL Query to find the biggest song (which takes up the most space)
select * from track where bytes  = (select max(bytes) from track);
--Write a SQL Query that contains the titles of all albums with tracks longer than 6 minutes in them 
select distinct a.albumid,a.title from album a
inner join (select * from track where milliseconds > '360000') z
on a.albumid = z.albumid;
--Write a SQL Query that contains the albumId and number of songs in the album 
select albumid, count(albumid) from track group by albumid;
--Write a SQL query that contains artist's names and the number of tracks they have produced (assume an artist produced a track if it appears in one of their albums)
	select name,count(trackid) from (select a.name,c.trackid from artist a
    inner join album b
    on a.artistid = b.artistid
    inner join track c
    on c.albumid = b.albumid)
    group by name;
--Write a SQL Query that returns the most purchased media type
    select name,counts from (select * from(select mediatypeid,count(a.mediatypeid) as counts from (select t.mediatypeid from invoiceline li
    inner join track t
    on li.trackid = t.trackid
    inner join mediatype m
    on t.mediatypeid=m.mediatypeid) a group by mediatypeid)
    where counts  = (select max(counts) from(select count(a.mediatypeid) as counts from (select t.mediatypeid from invoiceline li
    inner join track t
    on li.trackid = t.trackid
    inner join mediatype m
    on t.mediatypeid=m.mediatypeid) a group by mediatypeid))) p
    inner join mediatype m
    on m.mediatypeid=p.mediatypeid;
--Write a SQL Query showing customers not in the US
select * from customer where country != 'USA';
--Write a SQL Query showing a unique list of billing countries on the Invoice table
select * from (select distinct billingcountry,invoiceid from invoice);
--Write a SQL Query that shows the Invoice Total, Customer Name, Country, and Sales agent for all invoices and customers 
select i.total,c.firstname,c.lastname,i.billingcountry,r.firstname,r.lastname from customer c
inner join invoice i
on c.customerid = i.customerid
inner join employee r
on c.supportrepid=r.employeeid;
--Write a SQL Query that shows all Tracks, but displays no IDs. Should also include the Album name, Media Type, and Genre
select t.name,a.title,t.composer,t.milliseconds,t.bytes,t.unitprice, m.name,g.name from track t
inner join mediatype m
on t.mediatypeid=m.mediatypeid
inner join genre g
on t.genreid=g.genreid
inner join album a
on t.albumid=a.albumid;
--Write a SQL Query that returns the Top 40 Songs for 2013
select * from (select trackid, counts from (select max(counts) as counters from(select trackid,count(*) as counts from invoiceline li
group by trackid)) a
inner join (select trackid,count(*) as counts from invoiceline li
group by trackid) d
on a.counters = d.counts) where rownum <40 ;
--Write a SQL Query that shows which sales agent made the most in sales overall
select employeeid,maxx from ((select a.employeeid, sum(a.total) as totals from (select e.employeeid, i.total from employee e
inner join customer c
on e.employeeid = c.supportrepid
inner join invoice i
on i.customerid=c.customerid) a
group by a.employeeid) y
inner join (select max(totals) as maxx from (select a.employeeid, sum(a.total) as totals from (select e.employeeid, i.total from employee e
inner join customer c
on e.employeeid = c.supportrepid
inner join invoice i
on i.customerid=c.customerid) a
group by a.employeeid)) x
on x.maxx=y.totals);

--Write a SQL Query that shows the top 3 best selling artists 
select*from(select * from(select name, sum(total)as totals from(select a.name,total from artist a
inner join album ab 
on a.artistid = ab.albumid
inner join track t
on ab.albumid=t.albumid
inner join invoiceline il
on il.trackid=t.trackid
inner join invoice i
on i.invoiceid=il.invoiceid) group by name) order by totals desc) where rownum <4;
--Write a SQL Query that returns which albums have no Heavy Metal tracks
select albumid,name from (select a.albumid, g.name from album a
inner join track t
on a.albumid=t.albumid
inner join genre g
on g.genreid=t.genreid) group by albumid,name 
having name != 'Heavy Metal';
--Write a SQL Query to find the the managers of employees supporting Brazilian customers 
select reportsto from (
select e.reportsto,c.country from customer c
inner join employee e
on supportrepid=employeeid) 
where country='Brazil';