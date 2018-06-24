--Write a SQL Query that contains the names of all tracks that are longer than 6 minutes
select name, milliseconds from track where milliseconds >=36000 order by milliseconds;

--Write a SQL Query to find the biggest song (which takes up the most space)
select name, bytes from track 
    where bytes = (select max(bytes) from track);

--Write a SQL Query that contains the titles of all albums with tracks longer than 6 minutes in them 
select album.title, count(track.name) as NumberOfTracks from album
    inner join track on track.albumid = album.albumid
    where milliseconds >=360000
    group by album.title;	
    
--Write a SQL Query that contains the albumId and number of songs in the album 
select album.albumid, album.title, count(track.name) as NumberOfTracks from album
    inner join track on track.albumid = album.albumid
    group by album.albumid, album.title;

--Write a SQL query that contains artist's names and the number of tracks they have produced (assume an artist produced a track if it appears in one of their albums)
select artist.name, count(track.name) as NumberOfTracksComposed, artist.artistid from ((artist
    inner join album on album.artistid = artist.artistid)
    inner join track on album.albumid = track.albumid)
    group by artist.name, artist.artistid
    order by artist.artistid;

--Write a SQL Query that returns the most purchased media type
select mediatype.name, count(invoiceline.trackid) as AmountOfMediaPurchased from ((mediatype
    inner join track on mediatype.mediatypeid = track.mediatypeid)
    inner join invoiceline on track.trackid = invoiceline.trackid)
    group by mediatype.name
    order by AmountOfMediaPurchased desc;

--Write a SQL Query showing customers not in the US
select * from customer
    where country <> 'USA';
    
--Write a SQL Query showing a unique list of billing countries on the Invoice table
select distinct billingcountry from invoice;

--Write a SQL Query that shows the Invoice Total, Customer Name, Country, and Sales agent for all invoices and customers 
select invoice.total, customer.firstname || ' ' || customer.lastname as CustomerName, customer.country, employee.firstname || ' ' || employee.lastname as EmployeeName from invoice
    inner join customer on invoice.customerid = customer.customerid
    inner join employee on customer.supportrepid = employee.employeeid;

--Write a SQL Query that shows all Tracks, but displays no IDs. Should also include the Album name, Media Type, and Genre
select * from track;
select track.name as Track_Name, album.title as Album_Title, mediatype.name as Media_Type, genre.name as Genre_Name from track
    inner join album on track.albumid = album.albumid
    inner join mediatype on track.mediatypeid = mediatype.mediatypeid
    inner join genre on track.genreid = genre.genreid;
    
--Write a SQL Query that returns the Top 40 Songs for 2013
select track.name, invoice.invoicedate, invoiceline.invoicelineid from track
    inner join invoiceline on track.trackid = invoiceline.trackid
    inner join invoice on invoiceline.invoicelineid = invoice.invoiceid 
        where rownum <= 40 and invoice.invoicedate between to_date ('01-01-2013' , 'mm-dd-yyyy') and to_date('12-31-2013', 'mm-dd-yyyy')
        group by track.name, invoice.invoicedate, invoiceline.invoicelineid
        order by sum(invoiceline.invoiceid) desc;

--Write a SQL Query that shows which sales agent made the most in sales overall
select * from (
    select employee.firstname || ' ' || employee.lastname as Employee_Name, employee.employeeid as Employee_ID, sum(invoice.total) as Total from invoice
        inner join customer on invoice.customerid = customer.customerid
        inner join employee on customer.supportrepid = employee.employeeid
        group by employee.firstname || ' ' || employee.lastname, employee.employeeid
        order by total desc)
    where rownum <= 1;
    
--Write a SQL Query that shows the top 3 best selling artists
select * from (
    select artist.name, sum(invoice.total) as Total_Sales from artist
        inner join album on artist.artistid = album.artistid
        inner join track on album.albumid = track.albumid
        inner join invoiceline on track.trackid = invoiceline.trackid
        inner join invoice on invoiceline.invoiceid = invoice.invoiceid
        group by artist.name
        order by sum(invoice.total) desc)
    where rownum <= 3;
    
--Write a SQL Query that returns which albums have no Heavy Metal tracks
select distinct album.title, genre.name from album
    inner join track on album.albumid = track.albumid
    inner join genre on track.genreid = genre.genreid
    where genre.name <> 'Heavy Metal'
    order by album.title;
    
--Write a SQL Query to find the the managers of employees supporting Brazilian customers
select employee.employeeid, employee.firstname || ' ' || employee.lastname, employee.title from employee
    where employee.employeeid in (
        select employee.reportsto from employee
        inner join customer on employee.employeeid = customer.supportrepid
        where customer.country = 'Brazil');
