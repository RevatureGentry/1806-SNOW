--Write a SQL Query that contains the names of all tracks that are longer than 6 minutes
	select name from track
    where milliseconds > '360000';
--Write a SQL Query to find the biggest song (which takes up the most space)
	select * from track
    where bytes = (
    select max(bytes)
    from track);
--Write a SQL Query that contains the titles of all albums with tracks longer than 6 minutes in them 
	select a.title 
    from album a, track t
    where a.albumid = t.albumid and
    t.milliseconds > '360000'
    group by a.title;    
--Write a SQL Query that contains the albumId and number of songs in the album 
	select albumid, count(trackid)
    from track
    group by albumid;
--Write a SQL query that contains artist's names and the number of tracks they have produced (assume an artist produced a track 
--if it appears in one of their albums)
	select a.name, count(trackid)
    from artist a, album al, track t
    where t.albumid = al.albumid and 
    a.artistid = al.artistid
    group by a.name;
--Write a SQL Query that returns the most purchased media type
	select mname
    from (select max(amount) maxamount
    from (select m.name mname, count(m.name) amount
    from mediatype m, track t, invoiceline i
    where m.mediatypeid = t.mediatypeid and
    t.trackid = i.trackid
    group by m.name)),
    (select m.name mname, count(m.name) amount
    from mediatype m, track t, invoiceline i
    where m.mediatypeid = t.mediatypeid and
    t.trackid = i.trackid
    group by m.name)
    where maxamount = amount;
--Write a SQL Query showing customers not in the US
    select *
    from customer c
    where c.country != 'USA';
--Write a SQL Query showing a unique list of billing countries on the Invoice table
    select billingcountry
    from invoice 
    group by billingcountry;
--Write a SQL Query that shows the Invoice Total, Customer Name, Country, and Sales agent for all invoices and customers 
    select (invoice_number) invoice_amount,(c.firstname || ' ' || c.lastname) customer_name, c.country, (e.firstname || ' ' || e.lastname) sales_agent
    from customer c, invoice i, employee e,
    (select count(i.invoiceid) invoice_number, c.customerid c_id
    from customer c, invoice i
    where c.customerid = i.customerid
    group by c.customerid)
    where c.customerid = i.customerid and
    c.SUPPORTREPID = e.employeeid and
    c.customerid = c_id;
    
--Write a SQL Query that shows all Tracks, but displays no IDs. Should also include the Album name, Media Type, and Genre
    select t.name, a.title, (g.name)genre, t.composer, t.milliseconds, t.bytes, t.unitprice 
    from track t, album a, genre g, mediatype m
    where t.albumid = a.albumid and g.genreid = t.genreid and t.mediatypeid = m.mediatypeid;
--Write a SQL Query that returns the Top 40 Songs for 2013
    select name
    from
    (select count(t.trackid) amount, t.name name
    from track t, invoiceline il, invoice i
    where t.trackid = il.trackid and il.invoiceid = i.invoiceid and i.invoicedate like '%-13'
    group by t.name
    order by amount desc)
    where ROWNUM <= 40;
--Write a SQL Query that shows which sales agent made the most in sales overall
     select name
     from
    (select count(e.employeeid) e_id, (e.firstname || ' ' || e.lastname) name
    from employee e, customer c
    where e.employeeid = c.SUPPORTREPID
    group by e.employeeid, (e.firstname || ' ' || e.lastname)),
    (select max(e_id) max_count
    from (select count(e.employeeid) e_id
    from employee e, customer c
    where e.employeeid = c.SUPPORTREPID
    group by e.employeeid, (e.firstname || ' ' || e.lastname)))
    where e_id = max_count;
    
--Write a SQL Query that shows the top 3 best selling artists 
    select name
    from (select count(il.invoiceid) count_id, art.name name
    from artist art, album al, track t, invoiceline il
    where art.ARTISTID = al.ARTISTID and
    al.ALBUMID = t.albumid and
    t.trackid = il.trackid 
    group by art.name
    order by count_id desc)
    where ROWNUM <= 3;
--Write a SQL Query that returns which albums have no Heavy Metal tracks
    select a.title
    from album a, track t
    where a.ALBUMID = t.ALBUMID
    and t.name not in (select t.name
    from track t, genre g
    where g.genreid = t.genreid and
    g.name = 'Heavy Metal');
--Write a SQL Query to find the the managers of employees supporting Brazilian customers
    select e.firstname || ' ' || e.lastname name
    from employee e,
    (select e.reportsto report
    from employee e, customer c
    where c.SUPPORTREPID = e.EMPLOYEEID and
    c.country = 'Brazil')
    where report = e.employeeid
    group by e.firstname || ' ' || e.lastname;
        