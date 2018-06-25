select * from employee;



-- Write a SQL Query that contains the names of all tracks that are longer than 6 minutes
select * from track where MILLISECONDS > 60000;

-- Write a SQL Query to find the biggest song (which takes up the most space)

select * 
from 
    ( select * from track 
    order by BYTES desc) 
    where ROWNUM <2;
    
-- Write a SQL Query that contains the titles of all albums with tracks longer than 6 minutes in them

select NAME from track where MILLISECONDS > 60000;

--Write a SQL Query that contains the albumId and number of songs in the album 
select count(trackid) as Songs from track group by albumid;

-- Write a SQL query that contains artist's names and the number of tracks they have produced (assume an artist produced a track if it appears in one of their albums)
select artist.name, count(track.COMPOSER) as songs
from ((track
inner join album on track.ALBUMID = album.ALBUMID)
inner join artist on album.artistid = artist.artistid) group by artist.name;
-- Write a SQL Query that returns the most purchased media type
select mediatype.name, count(invoiceline.trackid)as purchased
from((
MEDIATYPE inner join track on MEDIATYPE.mediatypeid = TRACK.MEDIATYPEID)
inner join invoiceline on track.trackid = INVOICELINE.TRACKID) group by mediatype.name order by purchased desc
;

--Write a SQL Query showing customers not in the US
select * from customer where not(country = 'USA');

--Write a SQL Query showing a unique list of billing countries on the Invoice table
select unique billingcountry as uniquebillingcountries  from invoice;

--Write a SQL Query that shows the Invoice Total, Customer Name, Country, and Sales agent for all invoices and customers 

select  INVOICE.TOTAL, customer.firstname || '' || customer.lastname as customername, customer.country, employee.FIRSTNAME ||''|| employee.LASTNAME as Salesagent
from (( INVOICE
inner join customer on invoice.customerid = customer.customerid)
inner join employee on customer.supportrepid = employee.employeeid);

--Write a SQL Query that shows all Tracks, but displays no IDs. Should also include the Album name, Media Type, and Genre

select track.NAME, album.TITLE, genre.name, mediatype.name  from (((track 
inner join album on track.albumid = album.albumid)
inner join genre on track.genreid = genre.genreid)
inner join mediatype on track.mediatypeid = mediatype.mediatypeid);


--Write a SQL Query that returns the Top 40 Songs for 2013
select TRACK.NAME, count (invoiceline.QUANTITY)as salecount, invoice.INVOICEDATE  from ((
track inner join invoiceline on track.trackid = invoiceline.trackid)
inner join invoice on invoiceline.invoiceid = invoice.invoiceid) where rownum < 41 and invoice.INVOICEDATE between to_date('01.01.2013', 'mm.dd.yyyy') and to_date('12.31.2013', 'mm.dd.yyyy') group by TRACK.NAME, invoice.INVOICEDATE order by salecount;

--Write a SQL Query that shows which sales agent made the most in sales overall
select employee.firstname || ' ' || employee.lastname as SalesRep, count (Invoiceline.invoiceid)as sales
from ((( employee
inner join customer on customer.supportrepid = employee.employeeid)
inner join invoice on customer.customerid = invoice.customerid)
inner join invoiceline on invoice.INVOICEID = invoiceline.INVOICEID) group by employee.firstname || ' ' || employee.lastname order by sales desc ;

--Write a SQL Query that shows the top 3 best selling artists
select artist.name, count (invoiceline.TRACKID) as salecount 
from ((((
INVOICE inner join invoiceline on invoiceline.invoiceid = invoice.invoiceid)
inner join track on invoiceline.trackid = TRACK.TRACKID)
inner join album on track.albumid = album.albumid)
inner join artist on album.ARTISTID = artist.ARTISTID)
group by artist.name
order by salecount desc;


--Write a SQL Query that returns which albums have no Heavy Metal tracks
select album.TITLE
from ((track 
inner join album on track.albumid = album.albumid)
inner join genre on track.genreid = genre.genreid) where not (genre.NAME = 'Heavy Metal');

--Write a SQL Query to find the the managers of employees supporting Brazilian customers 

select e2.firstname || ' ' || e2.lastname as Manager, customer.firstname || '' || customer.lastname as customername 
        from ((customer inner join employee on customer.supportrepid = employee.employeeid)
        inner join employee e2
        on e2.employeeid = employee.reportsto) where customer.country = 'Brazil';