- What are the advantages of AJAX?
    - bandwidth utilization: memory is saved when the data is fetched from the same page
    - more interactive, data retrieved quicker
- What are the DISadvantages of AJAX?
    - fully dependent on JS; if there is a problem browser or OS wise => no AJAX
    - JSON service code is easily human readible, it follows that there could be some 
        security issues
    - Use of AJAX increases the size of HTTP requests
    - Provides problems using back button in AJAX heavy web pages
     ________                                  ____________
    | Client |    -- HTTP request -->         | Web Server |
     ________     <-- HTTP response --         ____________

- RBDBMS => RelationAl Database Management System
- What is a DB? A collection of objects which store data
    - Entities: a place to hold data in the form of 
        - Attributes (columns, fields)
        - Records (rows)
    - Schema: group of realted DB objects
- What is SQL? (Structured Query Language)
    - Language used for managing data held inside a RDBMS
- What are the 5 sublanguages of SQL?
    - DDL (Data Definition Language): CREATE, DROP, ALTER, TRUNCATE
    - DQL (Data Query Language): SELECT
    - DML (Data Manipulation Language): INSERT, UPDATE, DELETE
    - TCL (Transaction Control Language): COMMIT, ROLLBACK, SAVEPOINT
    - DCL (Data Control Language): GRANT, REVOKE
- What is the difference between DELETE, DROP, and TRUNCATE?
    - DROP removes the table from the Database
        - all privileges and constraints as well
        - cannot be ROLLBACKed (yIkEs)
    - TRUNCATE removes all rows (record) from table
        - keeps the original strcture of the table
        - cannot ROLLBACK a TRUNCATE (YiKes X2)
        - faster than DELETE because it does not require undo memory
    - DELETE deletes all records that match the associated WHERE clause
        - call be ROLLBACKed and is not permanent until COMMIT
- What is some common SQL clauses?
    - FROM: specifies the table from which data is retrieved
    - WHERE: specifies a condition in which records must satisfy in order to be selected to the query
    - GROUP BY: arranges the result set into groups by 1+ columns
    - HAVING: specifes a condition which further restricts which data gets puts into which group
        - must be used with a GROUP BY clause
    - ORDER BY: sorts the data by 1+ columns with ASC or DESC
    - LIMIT: max number of records in result set
    - IN: alternative to multiple OR conditions
- What's a Scalar Function?
    - a function that returns a single output generated from a single input
    - UCASE (uppercase), LCASE (lowercase), TRIM, SUBSTR, ABS (absolute value), REVERSE, ROUND, TO_DATE,
        TO_CHAR, 
- What's an Agggregate Function?
    - functions that returns a single output from multiple inputs
    - SUM, AVG, MIN, MAX, MEDIAN, COUNT
- What is a contraint?
    - rules that specify conditions for columns in a table
- What is the different constraints availiable?
    - Not-Null Key: requires that a value in a column can't be Null
    - Unique Key: required that values in columb must be Unique
    - Primary Key: used to identify in a table, unique, not-null 
    - Foreign Key: used to establish relationship between another table's Primary Key
    - Default: provides a value if none is provided either ways
    - Check Key: ensures that the value in the column meets some certain criteria
- What is Referential Integrity?
    - The principle that foreign keys and any referring table must always refers to a valid
        in the referred table
- What's an Orphan Record?
    - A record that references a key that no longer exists
    - If referential integrity is enforced by a foreign key, this can never happen
- Multiplicity? Relationship between 2 tables
- What are the different relationships?
    - One-To-one: relationship between 2 tables in which the table should be associated 
        on one and only one matching row
            - established by creating a Primary Key/unique Foreign Key
    - One-To-Many: relationship between 2 tables in which one row may be related to many
        rows in another table
            - established by createing Primary Key/Foreign Key relationship
    - Many-To-Many: relationship between 2 tables in which many rows from one table relate
        to many rows in the other
            - established b creating a JunctionTable
- Composite Key: Primary Key consisting of multiple columns
- Junction Table
    - created by making a composite key consisting of both table's Primary Keys, and each column is a foreign key
        pointing to both table's Primary key
            _____ -            _____           -  _____
            | A | ----------  | A_B | ---------- |  B  | 
            _____ -            _____           -  _____
            SELECT A, B from A_B
                JOIN A.id = A_B.id;
                JOIN B.id = A_B.id;        
- What is a JOIN?
    - Construct in SQL that allows you to retrieve data from 2+ tables based on a logical
        relationship sbetween the tables
    - A join condition defines the way 2 tables are related in a query by specifying the column 
        from each table to be used in the join
- Type of JOINs
    - INNER JOIN : returns rows in left table that match rows in right table based on the JOIN conditions
    - RIGHT (outer) JOIN: returns all rows in the right table as well as those in the left table that match 
        based on the join predicate
    - LEFT (outer) JOIN: returns all rows in the left table as well as those in the right table that match 
        based on the join predicate
    - FULL OUTER JOIN: returns the rows that match based on the join predicate, as well as those that don't
    - SELF JOIN: in which you join a table with itself
    - NATURAL (inner) JOIN: inner jon between two tables made on all columns with the same name
    - CROSS JOIN: Cartesian product of 2 tables, where every record in one table is joined to every 
        recrod in another table
-
