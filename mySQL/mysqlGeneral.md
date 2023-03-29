
[back to list](https://github.com/TerryTxx/CS-Diary/blob/master/mySQL/mySQL.md)

---
## mySQL in General
####  [1. Installation and path](#1-installation-and-path)
#### [2. The three-tier structure of the databases](#2-the-three-tier-structure-of-the-database)
#### [3. How the data is stored in the databases](#3-how-the-data-is-stored-in-the-database)
#### [4. Classification of SQL statement](#4-classification-of-sql-statements)
#### [5. operate in Java](#5-operate-in-java)
#### [6. database CRUD](#6-crud-of-database)
#### [6.4. General functions in select](#--select)
#### [6.4. mySQL functions with select](#--select)
- #### 6.4.1 Statistics functions on single form
- - 1. [count() , sum(), avg(), Max()/Min()](#functions-of--count----sum----avg----max---min--)
- - 2. [group by , having](#group-by-having)
- - 3. [String functions](#string-functions)
- - 4. [Math functions](#math-functions)
- - 5. [Date Functions](#date-functions)
- - 6. [Encryption and system functions](#encryption-functions)
- - 7. [Flow Control Functions](#control-flow-functions)
- #### 6.4.2 enhanced select
- - 1. [select_increments](#selectincrements)
- - 2. [select by pages](#select-by-pages)
- - 3. [multi-clause](#multi-clause-query)
- #### 6.4.3 Multi-table select
- - 1. [multi-table query](#multi-table-query)
- - 2. [self-join](#self-join)




---
#### 1. Installation and path
- Mac can directly brew or official website;

- homebrew is more recommanded, and go to the web search and install under instruction;
- You can follow the official website, software installation:
```
1. port, 'touch.bath_profile'
2. Then open, 'open -t .bash_profile'
3. Configure the path in the file: find the local bin in masql, copy the path (Option) of the bin to the file
   'export$path$```path'. Then save and close,
4. Then re-enter the port, enter: 'mysql -u root -p'
    It can be called in the terminal;
5.  '\q' exit
```

#### 2. The three-tier structure of the database
- 1. Installing mysql means installing a DBMS, which means a management system for multiple databases;
- 2. A database can create multiple tables;
- 3. Actual relationship:
     There are multiple databases DB1, DB2, DB3 under DMS. . .
     There are multiple tables Table1, Table2 in each DB. . . There may also be other data objects;
     The entire DMS and all its subordinate DBs form mySQL, which will be created with a port (3306);
```
The client terminal (Dos), such as SQLyog, Java, etc., communicates with the database through port 3306;
```

#### 3. How the data is stored in the database
```
   A row in the table becomes a record (row),
   and in Java, it often corresponds to an object;

```
#### 4. Classification of SQL statements
```
   DDL: data definition statement ---- create
   DML: data manipulation statement (insert, update, delete)
   DQL: data query statement (select)
   DCL: data control statement (management database: grant, revoke)
```
   These operations will be entered into the DBMS through port 3306, and added to the corresponding database;

[[back to list]](#mysql-in-general)

### 5. Operate in Java
```
1. create a txx_goods table
2. add 2 data
3. delete the txx_goods table
```
```java
class main {
Class.forName("com.mysql.jdbc.Driver");
     Connection connection = DriverManager.getConnection("jdbc:mysql://localhose:3306");
        //select ,create ,insert ,update ,delete...
     String sql = "create table txx_goods (id int, name carchar(32),price double, introduce text)";
     String sql = "insert into txx_goods values(1,'iphone',2000,'good smart phone')";
     String sql = "drop table txx_goods";
     
     Statement statement = connection.createStatement();
     statement.executeUpdate(sql);
     
     
     statement.close();
     connection.close();
     System.out.println("succeed");
}
select * from txx_goods in terminal
```
[[back to list]](#mysql-in-general)


### 6. CRUD of database
#### Insert
```sql
INSERT INTO table_name [(column[,column...])]
VALUES (vlaue [,value...]);
-- 1.the insert type should excatly same with filds;
-- 2.care of the value length
-- 3.char and date should be circled by ''
-- 4.column could be null, as insert into table value(null)
-- 5. insert into tab name(vow name), values(),(),()
-- 6. if add the value to all field, could not have the field name
-- 7. if not assign value to a field, then will need default value, or erro;
```
#### Update
```sql
UPDATE tbl_name
        SET col_name = expr1 [1,col_name2=expr2...]
        [WHERE where_definition]
```
#### Delete
```sql
     delete from tbl_name
     [WHERE where_definition]
```
#### ** Select
single table
```sql
SELECT [DISTINCT]*|{column1,column2,column3..}
        FROM tablename;

SELECT *|{column1|expression, column2|expression...}
        FROM tablename;

SELECT columnname as NickName from tablename;
```
expresions in where
```
1. compare: >, <, <= , >=, =,<>,!=
   BETWEEN...AND...
   LIKE   /  NOT LIKE
   IS NULL
2. logic: and (both or all should meet)
          or  (at least one should meet)
          not (none meet)
```
order by languages:
```sql
SELECT column1,column2,column3...
        FROM table;
        order by column asc|desc; ...
```
[[back to list]](#mysql-in-general)

### FUNCTIONS of: count() , sum(), avg(), Max()/Min()
Count return the lines of results you searched;
```sql
Select count(*) count(columnName) from table_name
            [WHERE where_definition]
-- if the count is not *, it will count the lines and skip the null ones
```
SUM:
```sql
SELECT SUM(math) FROM student;--all math scores together by the students
SELECT SUM(math),SUM(english) From student;--all math,and all english scores
SELECT SUM(math) AS math_intotal FROM student;
SELECT SUM(math+english+science) FROM student;
SELECT SUM(math)/COUNT(*) FROM student;--get average score for the class,we can use AVG also
```
AVG 
```sql
SELECT AVG(math) FROM student;
SELECT AVG(math+english+science) FROM student;
```
Max/min
```sql
SELECT MAX(math+english+science),MIN(math+english+science) FROM student;
-- will have the highest total score and lowest score
```
### Functions of group by and having
### group by,     having
```sql
SELECT column1,column2,column3.. FROM table
        group by column having...
-- group by is to show the result in group
-- having is sorting the group with conditions
```
[[back to list]](#mysql-in-general)

### string functions
```SQL
--1. CHARASET(str)
SELECT CHARSET (ename)FROM emp;
--2. CINCAT(string2 [,...])
SELECT CHARSET (ename,' position is : ',job)FROM emp;
-- 3. UCASE
-- 4. LCASE
-- 5. LENGTH(string)
SELECT LENGTH(ename) FROM emp;
-- 6. REPLACE(string,search_str,replace_str)
SELECT ename REPLACE (job, 'Manager','Worker') FROM emp;--change the job from manager to worker
-- 7. SUBSTRING(str, position [,length])
SELECT SUBSTRING(ename,1,2)from emp;
--get 2 chars in ename column from the 1st position 
```
[[back to list]](#mysql-in-general)

### Math functions
```sql
-- 1. ABS(num)
SELECT ABS(-10) FROM DUAL;
-- 2. CEILING(num)
SELECT CEILING(1.1) FROM DUAL;--2, return the smallest int
-- 3. FLOOR(num)
SELECT FLOOR(1.1) FROM DUAL; --1, return the biggest int
-- 4. FORMAT(number,decimal_place)
SELECT FORMAT(78.12344 , 2) FROM DUAL;--78.12
-- 5. LEAST(num1,num2[,..])
SELECT LEAST(0,1,-14,4) FROM DUAL; -- -14
-- 6. MOD(numerator,denominator)
SELECT MOD(10,3) FROM DUAL;  -- 10%3==1
-- 7. RAND([SEED])
SELECT RAND() FROM DUAL;

```
[[back to list]](#mysql-in-general)

### Date Functions
```sql
-- 1. CURRENT_DATE()
-- 2. CURRENT_TIME()
-- 3. CURRENT_TIMESTAMP()
-- 4. DATE(datetime)
-- 5. DATE_ADD(date2,INTERVAL d_value d_type)
-- 6. DATE_SUB(date2,INTERVAL d_value d_type)
-- 7. NOW()
SELECT *
FROM mes -- ADD IN mes
WHERE DATA_ADD(send_time, INTERVAL 10 MINUTE) >= NOW();
-- or
-- WHERE send_time >= DATE_SUB(NOW(), INTERVAL 10 MINUTE);

-- means get all sth within 10 mins from send to now
--get time 10 minutes after send time and with 10 mins from now
-- 8. DATEDIFF(date1,date2)
SELECT DATEDIFF('2011-11-11','1990-01-01') FROM DUAL;
-- from 1990 to 2011, how many days between
SELECT DATEDIFF(NOW(),'1992-01-01') FROM DUAL;
-- how many days you lived

-- 9. YEAR | MONTH | DAY | DATE(datetime)
-- 10. FROM_UNIXTIME()  unix_timestamp();
SELECT YEAR(NOW()) FROM DUAL;
SELECY UNIX_TIMESTAMP()/(365*24*3600) FROM DUAL;
SELECT FROM_UNIXTIME(1618483484,'%Y-%m-%d') FROM DUAL;
```
[[back to list]](#mysql-in-general)

### Encryption Functions
```sql
-- 1. USER()
SELECT USER() FROM DUAL;
-- 2. DATABASE()
-- 3. MD5(str)
-- 4. PASSWORD(str)
-- 5. select * from mysql.user \G
```
[[back to list]](#mysql-in-general)

### Control Flow Functions
```sql
-- 1. IF
SELECT IF(TRUE, 'DUBLIN', 'PARIS') FROM DUAL;
-- 2. IFNULL
SELECT IFNULL(NULL,'TXX') FROM DUAL;--TXX
SELECT INFNULL('TERRY','TXX') FROM DUAL;--TERRY
-- 3. CASE... ELSE
SELECT CASE WHEN expr1 THEN expr2
            WHEN expr3 THEN expr4
            ELSE expr5 END;
```
[[back to list]](#mysql-in-general)

## Multi-table select/enhanced select
### select_increments
1. in mysql, date types could be checked directly
```sql
SELECT*FROM emp
        WHERE hiredate > '2021-01-01'
```
2. 'like' select
```sql
SELECT ename,sal FROM emp
        WHERE ename LIKE 'S%';
        WHERE ename LIKE '__S%';
SELECT * FROM emp
        WHERE mgr IS NULL;--should use is not = to check null
```
[[back to list]](#mysql-in-general)
### select by pages
```sql
-- SELECT...LIMIT START,ROWS
-- get row lines from start+1
SELECT * FROM emp
         ORDER BY empNO
         LIMIT 0, 3
SELECT * FROM emp
          ORDER BY empNO
          LIMIT 3, 3
```
### Enhance group-by
```sql
SELECT COUNT(*),AVG(sal),job
        FROM emp
        GROUP BY job;
```
[[back to list]](#mysql-in-general)
### multi-clause in one query
```sql
SELECT column1,column2,column3.. AS AVG FROM table
        group by column
        having condition
        order by column
        limit start, rows;
```
[[back to list]](#mysql-in-general)

### multi-table query
```
That is, the query of two or more tables. 
In practical applications, querying a single table may not meet the requirements.
For example, dept and emp are required
```
```sql
SELETC ename,sal,dname,emp,deptno    -- to find the columns you want to show
    FROM emp,dept
    WHERE emp.deptno = dept.deptno   -- the most import is to confirm the flitter condition
```
[[back to list]](#mysql-in-general)
### self-join

A self-join is a SQL query in which a single table is referenced twice in the query, as if it were two separate tables.
```
1. a single table used as two tables;
2. need to alias the table to prevent duplicate names (table name AS 'xxx')
3. a column alias can also be specified if the column name information is not clear (column name AS 'XXX')
```
```sql
SELECT worker.ename as worker_name, boss.ename as boss_name
        from emp worker, emp boss;
        where worker.mgr = boss.empno;
```
[[back to list]](#mysql-in-general)


### Subqueries, nested queries
select statements embedded in other sql statements;
```
single-row subquery: a single-row subquery is a subquery statement that returns only one row of data;
Multi-row subquery: subqueries that return multiple rows of data, keyword in
```
```sql
SELECT * 
        FROM emp
        WHERE deptno = (
                SELECT deptno
                FROM emp
                where enmae = 'SMITH'
             )
-- SELECT deptno    this part is used as a subquery
--           FROM emp
--           where enmae = 'SMITH'
```
```sql
SELECT job from emp
            where deptno = 10;
SELETC ename, job, sal, deptno
        from emp
        where jo IN(
                SELECT DISTINCT job
                FROM emp
                Where deptno = 10
        ) AND deptnpo != 10

```

[[back to list]](#mysql-in-general)
### 


[[back to list]](#mysql-in-general)
