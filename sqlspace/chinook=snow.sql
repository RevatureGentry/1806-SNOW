-- Write a SQL Query that contains the names of all tracks that are longer than 6 minutes
select name from TRACK where ((MILLISECONDS / 1000)/ 60) >= 6;

-- Write a SQL Query to find the biggest song (which takes up the most space)
select * from track where bytes >= (select max(bytes) from track);

--Write a SQL Query that contains the titles of all albums with tracks longer than 6 minutes in them 
select album.title from album
    right join track on album.albumid = track.albumid
    where ((track.milliseconds / 1000)/ 60) >= 6;
    
--Write a SQL Query that contains the albumId and number of songs in the album 
select albumid, count(trackid) from track
group by albumid;

--Write a SQL query that contains artist's names and theselect number of tracks they have produced (assume an artist produced a track if it appears in one of their albums)
select artist.name, count(track.trackid) from artist
    inner join album on artist.artistid = album.artistid
        inner join track on album.albumid = track.trackid
        group by artist.name;

--Write a SQL Query that returns the most purchased media type
select mediatype.name from mediatype
    inner join track on mediatype.mediatypeid = track.mediatypeid
        inner join invoiceline on track.trackid = invoiceline.trackid
        group by mediatype.name
        order by sum(invoiceline.quantity);
        

--Write a SQL Query showing customers not in the US
 select * from customer where COUNTRY not in('USA');
 
--Write a SQL Query showing a unique list of billing countries on the Invoice table
select distinct BILLINGCOUNTRY from INVOICE;

--Write a SQL Query that shows the Invoice Total, Customer Name, Country, and Sales agent for all invoices and customers 
select invoice.total, customer.firstname, customer.country, employee.firstname from invoice
    inner join customer on invoice.CUSTOMERID = customer.CUSTOMERID
        inner join employee on customer.supportrepid = employee.employeeid;

--Write a SQL Query that shows all Tracks, but displays no IDs. Should also include the Album name, Media Type, and Genre
select TRACK.NAME as track, album.title as album, mediatype.name as format, genre.name as genre from track
    inner join album on track.albumid = album.albumid
    inner join mediatype on track.mediatypeid = mediatype.mediatypeid
    inner join genre on track.genreid = genre.genreid;
        
--Write a SQL Query that returns the Top 40 Songs for 2013
select track.name from track
    inner join invoiceline on track.trackid = invoiceline.invoicelineid
        inner join invoice on invoiceline.invoiceid = invoice.invoiceid
        where rownum <= 40 and invoice.invoicedate between to_date('01-JAN-13', 'dd-mon-yy') and to_date('12-DEC-13', 'dd-mon-yy')
        group by track.name
        order by sum(invoice.total);

select * from invoice;
--Write a SQL Query that shows which sales agent made the most in sales overall
 select employee.firstname || employee.lastname from employee
    inner join customer on employee.employeeid = customer.supportrepid
        inner join invoice on customer.customerid = invoice.invoiceid;
        
--Write a SQL Query that shows the top 3 best selling artists 
select artist.name from artist
    inner join album on artist.artistid = album.artistid
        inner join track on album.albumid = track.albumid
            inner join invoiceline on track.trackid = invoiceline.trackid
            group by artist.name
            order by count(INVOICELINE.QUANTITY);
            

--Write a SQL Query that returns which albums have no Heavy Metal tracks
select albumid from track where GENREID not in (13);


--Write a SQL Query to find the the managers of employees supporting Brazilian customers 
select employee.firstname || employee.lastname as fullname, employee.reportsto from employee 
    full outer join customer on employee.employeeid = customer.supportrepid
    where employee.employeeid = 2
    group by employee.title, employee.firstname || employee.lastname, employee.reportsto;
    