process.env.NODE_ENV = 'test';

let chai = require('chai');
chai.should();

let check = require('../lib/index.js');

let testQueries = [
  "SELECT * FROM EMPLOYEE_TBL;",
  "SELECT EMP_ID FROM EMPLOYEE_TBL;",
  "SELECT EMP_ID FROM EMPLOYEE_TBL;",
  "SELECT EMP_ID, LAST_NAME FROM EMPLOYEE_TBL;",
  "SELECT EMP_ID, LAST_NAME FROM EMPLOYEE_TBL WHERE EMP_ID = '333333333';",
  "SELECT EMP_ID, LAST_NAME FROM EMPLOYEE_TBL WHERE CITY = 'INDIANAPOLIS' ORDER BY EMP_ID;",
  "SELECT EMP_ID, LAST_NAME FROM EMPLOYEE_TBL WHERE CITY = 'INDIANAPOLIS' ORDER BY EMP_ID, LAST_NAME DESC;",
  "SELECT EMP_ID, LAST_NAME FROM EMPLOYEE_TBL WHERE CITY = 'INDIANAPOLIS' ORDER BY 1;",
  "SELECT EMP_ID, LAST_NAME FROM EMPLOYEE_TBL WHERE CITY = 'INDIANAPOLIS' ORDER BY 2, 1;",
  "Select * from Employee where Rowid= select max(Rowid) from Employee;",
  "Select * from Employee where Rownum <= 5;",
  "select * from (Select * from Employee e order by rowid desc) where rownum <=5;",
  "select distinct salary from employee a where 3 >= (select count(distinct salary) from emp loyee b where a.salary <= b.salary) order by a.salary desc;",
  "Select * from(Select rownum as rno,E.* from Employee E) where Mod(rno,2)=1;"
]

let falsePositives = [
  'select an option from the following menu'
]

describe('sql-scrub', function() {

    it('empty string', function() {
        let str = '';
        check(str).should.not.be.ok;
    });

    describe('test queries', function(){
      testQueries.forEach(function(q){
        it('should flag: ' + q, function() {
            check(q).should.be.ok;
        });
      });
    });
    describe('falsePositives', function(){
      falsePositives.forEach(function(q){
        it('should flag: ' + q, function() {
            check(q).should.be.ok;
        });
      });
    });
});
