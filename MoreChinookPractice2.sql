--Write a SQL Query that contains the names of all tracks that are longer than 6 minutes
    
    select * from track where milliseconds  > 360000 order by milliseconds asc;

--Write a SQL Query to find the biggest song (which takes up the most space)
   
    select max(bytes) from track; 
    
    -- does not display the name of the track only the size of the track

--Write a SQL Query that contains the titles of all albums with tracks longer than 6 minutes in them 
    
    select title
    from TRACK t join ALBUM a on t.albumid = a.albumid
    where milliseconds  > 360000 order by milliseconds asc;
    

--Write a SQL Query that contains the albumId and number of songs in the album 
    
    select a.albumid ,count(t.name)
    from track t join album a 
    on t.albumid = a.albumid
    group by a.albumid;

--Write a SQL query that contains artist's names and the number of tracks they have produced (assume an artist produced a track if it appears in one of their albums)

    select count(t.name), a.name 
    from artist a join album ab
    on a.artistid = ab.artistid
    join track t 
    on ab.albumid = t.albumid
    group by a.name;
    
--Write a SQL Query that returns the most purchased media type

    select *
    from invoiceline il join track t
    on il.trackid = t.trackid
    join mediatype m
    on m.mediatypeid = t.mediatypeid;
   
--Write a SQL Query showing customers not in the US

    select * from customer where not country = 'USA' order by country desc;

--Write a SQL Query showing a unique list of billing countries on the Invoice table
    
    select distinct billingcountry from invoice;

--Write a SQL Query that shows the Invoice Total, Customer Name, Country, and Sales agent for all invoices and customers 
    

--Write a SQL Query that shows all Tracks, but displays no IDs. Should also include the Album name, Media Type, and Genre

    select t.name, a.title, m.name, g.name
    from track t join genre g
    on t.genreid = g.genreid
    join album a
    on a.albumid = t.albumid
    join mediatype m
    on m.mediatypeid = t.mediatypeid;
    
--Write a SQL Query that returns the Top 40 Songs for 2013

    select t.name
    from invoice i join invoiceline il
    on i.invoiceid = il.invoiceid
    join track t
    on t.trackid = il.trackid
    where i.invoicedate between 01-JAN-2013 and 31-DEC-2013
    order by t.name 
    offset 0 rows fetch next 40 rows only;
    
  -- came acrross "SQL command not properly ended error  


--Write a SQL Query that shows which sales agent made the most in sales overall
--Write a SQL Query that shows the top 3 best selling artists 
    select a.name
    from invoiceline i join track t
    on i.trackid = t.trackid
    join album ab 
    on t.albumid = ab.albumid
    join artist a
    on a.artistid = ab.artistid
    group by a.name 
    offset 0 row fetch next 3 rows only;
    
    -- came across SQL command not properly ended error again, Query does not distunguesh top 3 artist
    
    
--Write a SQL Query that returns which albums have no Heavy Metal tracks
--Write a SQL Query to find the the managers of employees supporting Brazilian customers 