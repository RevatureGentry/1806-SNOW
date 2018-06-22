-- Select all records from Employee Table
select * from employee;

-- Select all records from Employee Table where last name is King
select * from employee where lastname = 'King';

-- Select all records from Employee Table where firstname is Andrew and reportsto is null
select * from employee where firstname = 'Andrew' AND reportsto is null;

-- Select first name and city from Customer and rort result set in ascending order by city
select firstname, city from customer order by city asc;

-- Select all albums in Album table and sort result set in descending order by title.
select * from album order by title desc;

-- Insert two new records into Genre table.
select * from genre order by genreid asc;
insert into genre values (26, 'Screamo');

insert into genre (name, genreid) values ('EDM', 27);

-- Update Aaron Mitchell in Customer table to Robert Walter.
update customer set firstname = 'Robert', lastname = 'Walter' where firstname = 'Aaron' and lastname = 'Mitchell';
select * from customer where lastname = 'Walter';

-- Make changes permanent
commit;

-- Select all invoices with a billing address like T% (starts with T)
select * from invoice where billingaddress like 'T%';

-- Select all employees hired between 1st of June 2003 and 1st of March 2004.
select * from employee where hiredate between to_date('06-01-2003', 'mm-dd-yyyy') and to_date('01/03/04', 'dd/mm/yy');

-- Delete a record in Customer table where the name is Robert Walter (There may be constraints that rely on this, find out how to resolve them). 
select * from customer where lastname = 'Walter';
-- Find his ID is 32. Use to find his invoices
select * from invoice where customerid = 32;
-- Find all his invoiceline records.
select * from invoiceline il
    inner join invoice i
    on il.invoiceid = i.invoiceid
    inner join customer c
    on i.customerid = c.customerid
    where c.customerid = 32;
-- Delete his invoicelines. (Note the subquery is how we found his records)
delete from invoiceline il where il.invoiceid in (
    select il.invoiceid from invoiceline il
        inner join invoice i
        on il.invoiceid = i.invoiceid
        inner join customer c
        on i.customerid = c.customerid
        where c.customerid = 32
);
-- Delete his invoices
delete from invoice where customerid = 32;
-- Send him to his maker
delete from customer where lastname = 'Walter';

commit;

-- Create an inner join that joins customers and orders and specifies the name of the customer and the invoiceId.
select c.firstname || ' ' || c.lastname as Name, i.invoiceid from customer c
    inner join invoice i
    on c.customerid = i.customerid;
    
-- Perform a self-join on the employee table, joining on the reportsto column.
select e1.firstname || ' ' || e1.lastname as Employee,
       e2.firstname || ' ' || e2.lastname as Manager
        from employee e1
        inner join employee e2
        on e2.employeeid = e1.reportsto;