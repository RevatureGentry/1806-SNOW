select * from employee;
select * from employee where lastname='King';
select * from employee e where firstname='Andrew' and reportsto is null;

select firstname from customer order by city asc;
select * from album order by title desc;

insert into genre (genreid, name) values(123, 'horrible');
insert into genre (genreid, name) values(155, 'cool');

update artist set name='CCR' where name='Creedence Clearwater Revival';
select * from customer where firstname='Aaron' or firstname='Robert';
update customer set firstname='Robert', lastname='Walter' where firstname='Aaron' and lastname='Mitchell';

commit;

select * from invoice where billingaddress like 'T%';

select * from invoice where total between 15 and 50;
select * from employee where hiredate between to_date('01-jun-2003 00:00:00', 'dd-mon-yyyy hh24:mi:ss') and to_date('01-mar-2004 00:00:00', 'dd-mon-yyyy hh24:mi:ss');
select * from employee where hiredate between to_date('06-01-2003', 'mm-dd-yyyy') and to_date('01-03-2004', 'mm-dd-yyyy');

-- deleting while tryiing to preserve referential integrity
select * from customer where lastname='Walter';   -- customerid is 32
select * from invoice  where customerid=32;
select * from invoiceline il
    inner join invoice i on il.invoiceid = i.invoiceid
    inner join customer c on i.customerid = c.customerid
    where c.customerid = 32;
select il.invoiceid from invoiceline il
    inner join invoice i on il.invoiceid = i.invoiceid
    inner join customer c on i.customerid = c.customerid
    where c.customerid = 32;
delete from invoiceline il where il.invoicelineid in (
    select il.invoicelineid from invoice i
    inner join invoiceline il on i.invoiceid = il.invoiceid
    inner join customer c on i.customerid = c.customerid
    where c.customerid = 32
);
delete from invoice i where i.invoiceid in (
    select i.invoiceid from invoice i
    inner join customer c on i.customerid = c.customerid
    where c.customerid = 32
);
delete from customer where firstname='Robert' and lastname='Walter'; -- integrity constraints makes this fail

-- END DELETE


-- JOINS
select c.firstname || ' ' || c.lastname as name, i.invoiceid from customer c
    inner join invoice i on c.customerid = i.invoiceid;
select e1.firstname || ' ' || e1.lastname as employee,
        e2.firstname || ' ' || e2.lastname as manager 
            from employee e1, employee e2 where e1.reportsto = e2.employeeid;
select e1.firstname || ' ' || e1.lastname as employee,
        e2.firstname || ' ' || e2.lastname as manager from employee e1
            inner join employee e2 on e1.employeeid = e2.reportsto;