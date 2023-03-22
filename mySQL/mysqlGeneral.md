
[back to list](https://github.com/TerryTxx/CS-Diary/blob/master/mySQL/mySQL.md)

---
## mySQL in General
- ###  [Installation and path](#1-installation-and-path)
- ### [The three-tier structure of the databases](#2-the-three-tier-structure-of-the-database)
- ### [How the data is stored in the databases](#3-how-the-data-is-stored-in-the-database)
- ### [Classification of SQL statement](#4-classification-of-sql-statements)
- ### [operate in Java](#5-operate-in-java)
- ### [database CRUD](#6-crud-of-database)


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
### group by,     having
```sql
SELECT column1,column2,column3.. FROM table
        group by column having...
```


