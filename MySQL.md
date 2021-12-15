# MySQL

1. 存储定长字符数据：char
2. 存储变长字符数据：varchar


### 自增长
auto_increment

### 创建
- 创建一个数据库：`create database 数据库名`
- 进入数据库：`use 数据库名`
- 设置字符集：`set names utf8mb4`
- 创建一个数据表：`create table 数据表名`

### 表的修改
- 添加字段：
```
alter table 数据表名
add column 字段名 位置 属性
```
- 删除字段：add 改成 drop 即可
- 修改属性（数据类型）：
```
alter table 数据表名
modify column 字段名 属性
```
- 修改字段默认值：
```
alter table 数据表名
alter column 字段名 set default 默认值
```
- 修改字段名：
```
alter table 数据表名
change 旧字段名 新字段名 属性  
```
- 修改表名：
```
alter table 数据表名
rename to 新表名
```

### 插入字段
- 完全插入：
```
insert into 表名 values('','',''......),
                      ('','',''......);
```
- 指定插入：
```
insert into 表名(字段1,字段2......) values('','',''......),
                                        ('','',''......);
```

### 查看所有字段：
`select * from 表名`


### 修改记录
- 修改所有字段：
```
update 表名
set 要修改的内容
```
- 修改指定字段：
```
update 表名
set 要修改的内容
where 限制条件 （同时多个条件 && || and or 连接）
```
- 删除所有记录：`delete from 表名`
- 删除指定字段：`delete 表名 where 限制条件`

### 添加唯一约束：
1. `直接在设置字段属性的时候加一个 unique`
2. `constraint 约束名 uniquekey(字段名) `
3. `alter table 表名; add constraint 约束名 unique key(字段名)`
4. `create unique index 约束名 on 表名(字段名)`

### 删除唯一约束：
1. `alter table 表名; drop index 约束名`
2. `drop index 约束名 on 表名`

### 添加外键约束：
`foreign key(外键名) references 主表名(主键名)`
### 级联更新和级联删除：
`foreign key(外键名) references主表名(主键名) on update cascade on delete cascade`

### 添加check约束：
```
alter table xxx
add constraint check_id
check( 条件 );
```

### 修改默认值：
```
alter table xxx
change 字段名 属性 default ‘ ’;
```

### 字段查询 
所有字段：`select * from 表名`

指定字段：`select 字段名… from 表名`

### 去除重复字段：
```
select distinct 字段名
from 表名
```

### 取别名：
```
select 字段名 as 别名
from 表名 as 别名
```

### case when：（分数等级制）
```
select xh,xm,case xb when 1 then '男' else '女' end as 性别
from 表名
```

### 限制返回记录行数：（开始记录从0开始，可省略，默认从第一条开始）
```
select * 
from 表名
limit 开始记录,记录行数
```

### 算术运算符：
+、-、*、/、%

% —— 计算年龄 = 当前年份 – 出生年份：

```
select xh,xm,date_format(now(),'%Y') - date_format(cssj,'%Y') as 年龄
from xsb
```

### 比较运算符：
=、<、>、<=、>=、!=或<> 

is、null、not is null  

between and、not between and

in( )、not in( )

least( )、greatest( )

取最小值：`select least(1,2,3)`
最大值：`select gratest(1,2,3)`

### 逻辑运算符：
not或!   and或&&  or或||  xor（同时为true或false，结果为false）

### 条件查询
模糊查询：_单字符查询  %可以是0、1、多字符查询
```
select *
from xsb
where xm like '王%'

select *
from xsb
where xm like '王_'
```
