const db = require("../index.js");

class Queries {
  constructor(db) {
    this.db = db;
  }
  async getRoleChoices() {
    const [roles] = await this.db.promise().query(`SELECT * FROM role`);
    return roles.map(({ id, title }) => {
      return {
        name: title,
        value: id,
      };
    });
  }

async getManagerChoices() {
    const [managers] = await this.db
    .promise()
    .query(`SELECT * FROM employee WHERE manager_id IS NULL`);
  return managers.map(({ id, first_name, last_name }) => {
    return {
        name: `${first_name} ${last_name}`,
        value: id,
    };
  });
}

async getDepartmentChoices() {
    const [departments] = await this.db
    .promise()
    .query(`SELECT * FROM department`);
  return departments.map(({ id, name }) => {
    return {
        name: name,
        value: id,
    };
  });
}

async getEmployeeNames() {
    const [employeeNames] = await this.db
      .promise()
      .query(`SELECT * FROM employee`);
    return employeeNames.map(({ id, first_name, last_name }) => {
      return {
        name: `${first_name} ${last_name}`,
        value: id,
      };
    });
  }

viewAllRoles() {
    this.db.query(
        "SELECT id, title, salary, department_id FROM role",
        (err, res) => { 
            if (err) throw err;
            console.log(res);
         } 
    );
}

viewAllEmployees() {
    this.db.query(
        "SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name, role.salary, employee.manager_id FROM employee LEFT JOIN role ON employee.role_id = role.id LEFT JOIN department ON role.department_id = department.id", 
        function (err, results) {
            if (err) throw err;
            console.log(results);
         } 
    );
}

viewAllDepartments() {
    this.db.query("SELECT id, name FROM department", function (err, results) {
            if (err) throw err;
            console.log(results);
        });
}

addDepartment({ department }) {
    this.db.query(
      `INSERT INTO department (name) VALUES (?)`,
      [department],
      function (err, results) {
        if (err) throw err;
      }
    );
  }

addRole ({ role_name, salary, department_name }) {
    this.db.query(
        `INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)`,
        [role_name, salary, department_name],
        function (err, results) {
            if (err) throw err;
            console.log(results);
        }
    );
}

addEmployee ({ first_name, last_name, role_id, manager_id }) {
    this.db.query(
        `INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)`,
        [first_name, last_name, role_id, manager_id],
        function (err, results) {
            if (err) throw err;
            console.log(results);
        }
    );
}


updateEmployee ({ employee_name, employee_roel }) {
    this.db.query(
        `UPDATE employee SET role_id = (?) WHERE id = (?)`,
        [employee_role, employee_name],
        function (err, results) {
            if (err) throw err;
            console.log(results);
        }
    );
}
}

module.exports = { Queries }






