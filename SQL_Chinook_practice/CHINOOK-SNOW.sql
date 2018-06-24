-- Select all records from the Employee Table
select * from employee;

-- Select all records from the Employee Table where the lastname is 'King'
select * from employee where lastname = 'King';

-- Select all records from the Employee Table where the firstname is 'Andrew' andrew REPORTSTO is null
select * from employee where firstname = 'Andrew' and REPORTsto is null;

-- Select first name from Customer and sort result set in ascending order by city
select firstname, city from customer order by city;

-- Select all albums in Album table and sort result set in descending order by title
select * from album order by title desc;

-- Insert two new records into Genre table.
-- select * from genre; 
insert into genre values (26, 'Screamo');

insert into genre (name, genreid) values ('EDM', 27);

-- Update Aaron Mitchell in Customer table to Robert Walter.
update customer set firstname = 'Robert', lastname = 'Walter' where firstname = 'Aaron' and lastname = 'Mitchell';
select * from customer where lastname = 'Walter';

commit;

-- Select all invoices with a billing address like “T%”.
select * from invoice where billingaddress like 'T%';

-- Select all employees hired between 1st of June 2003 and 1st of March 2004.
select * from employee where hiredate between to_date('06-01-2003', 'mm-dd-yyyy')and to_date('01/03/04' , 'dd/mm/yy');

-- Delete a record in Customer table where the name is Robert Walter (There may be constraints that rely on this, find out how to resolve them). 
-- delete from customer where firstname = 'Robert' and lastname = 'Walter';
select * from customer where lastname = 'Walter';
--select * from customer where customerid = 32;
select invoicedlineid from invoiceline;

select il.invoicelineid from invoiceline il 
    inner join invoice i
    on il.invoiceid = i.invoiceid
    inner join customer c
    on i.customerid = c.customerid
    where c.customerid = 32;

delete from invoiceline il where il.invoiceid in (
    select il.invoicelineid from invoiceline il
    inner join invoice i
    on il.invoiceid = i.invoiceid
    inner join customer c
    on i.customerid = c.customerid
    where c.customerid = 32
);

rollback;

-- Find out which invoices belong to Robert Walter
select * from invoice i
    inner join customer c
    on i.customerid = c.customerid
    where c.customerid = 32;

select * from invoice i
    where i.customerid = 32;
    
-- From this query, we see that Robert Walter has invoices for id 50, 61, 116, 245, 268, 290, 342
delete from invoiceline where
    invoiceid = 50;
    
delete from invoiceline where 
    invoiceid in (61, 342, 116, 245, 268, 290);
    
-- The previous query is equivalent to 
-- delete from invoiceline where invoice id = 116 or invoiceid = 61 = invoiceid = 34 or invoiceid = 245 or invoiceline = 268 or invoiceline 290

-- Now, all of the invoiceline records are taken care of

-- Now we can delete the individual invoices
delete from invoice where customerid = 32;

-- Now we can FINALLY delete Robert Walter
delete from customer where customerid = 32;

commit;

-- Create an inner join that joins customers and orders and specifies the name of the customer and the invoiceId.
select c.firstname || ' ' || c.lastname as Name, i.invoiceid from customer c
    inner join invoice i
    on c.customerid = i.customerid;
    
select firstname || ' ' || lastname as CustomerName, invoiceid from customer
    inner join invoice
    on customer.customerid = invoice.customerid;

-- Perform a self-join on the employee table, joining on the reportsto column. 
select e1.firstname || '' || e1.lastname as Employee,
       e2.firstname || '' || e2.lastname as Manager
       from employee e1
       inner join employee e2
       on e2.employeeid = e1.reportsto;
       
commit;


