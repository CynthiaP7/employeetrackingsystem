const inquirer = require("inquirer");

class Prompt {
  constructor() {
    this.options = [
      { name: "View all departments", value: "View All Departments" },
      { name: "View all roles", value: "View All Roles" },
      { name: "View all employees", value: "View All Employees" },
      { name: "Add a department", value: "Add Department" },
      { name: "Add a role", value: "Add Role" },
      { name: "Add an employee", value: "Add Employee" },
      { name: "Update an employee role", value: "Update Employee Role" },
    ];
  }

  prompt() {
    return inquirer.prompt([{
      name: "option",
      type: "list",
      message: "What would you like to do?",
      choices: this.options,
    }]);
  }
  addDepartmentPrompt() {
    return inquirer.prompt([{
      name: "department",
      type: "input",
      message: "What is the name of the department? ",
    }]);
  }

  addRolePrompt(departments) {
    const rolePrompts = [
      {
        name: "role_name",
        type: "text",
        message: "What is the name of the role? ",
      },
      {
        name: "salary",
        type: "input",
        message: "What is the salary of the role? ",
      },
      {
        name: "department_name",
        type: "list",
        message: "Which department does the role belong to? ",
        choices: departments,
      },
    ];
    return inquirer.prompt(rolePrompts);
  }

  addEmployeePrompt(roles, managers) {
    const employeePrompts = [
      {
        name: "first_name",
        type: "text",
        message: "What is the employee's first name? ",
      },
      {
        name: "last_name",
        type: "input",
        message: "What is the employee's last name? ",
      },
      {
        name: "role_id",
        type: "list",
        message: "What is the employee's role? ",
        choices: roles,
      },
      {
        name: "manager_id",
        type: "list",
        message: "Who is the employee's manager? ",
        choices: managers,
      },
    ];
    return inquirer.prompt(employeePrompts);
  };

  updateEmployeePrompt(employeeNames, employeeRoles) {
    const updatePrompts = [
      {
        name: "employee_name",
        type: "list",
        message: "Which employee's role do you want to update? ",
        choices: employeeNames,
      },
      {
        name: "employee_role",
        type: "list",
        message: "Which role do you want to assign the selected employee? ",
        choices: employeeRoles,
      },
    ];
    return inquirer.prompt(updatePrompts);
  }


}
module.exports = Prompt;