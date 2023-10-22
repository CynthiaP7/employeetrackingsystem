INSERT INTO department (name)
VALUES ("Engineering"),
       ("Sales"),
       ("Legal"),
       ("Finance");

INSERT INTO role (tile, salary, department_id)
VALUES ("Lead Project Engineer", 175000, 1),
       ("Junior Engineer", 90000, 1),
       ("Sales Manager", 95000, 2),
       ("Sales Associate", 70000, 2),
       ("Senior Legal Counsel", 230000, 3),
       ("Junior Legal Counsel", 185000, 3),
       ("Director of Sales", 160000, 4),
       ("Lead of Sales", 130000, 4),

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Philip", "Chan", 1, NULL),
       ("Amiah", "Cook", 2, 1),
       ("Michael", "Brown", 3, NULL),
       ("Natalie", "Allen", 4, 3),
       ("Stephen", "Diggs", 5, 5),
       ("Malia", "Knox", 6, NULL),
       ("Micah", "Hyde", 7,  NULL),
       ("Jordan", "Poyer", 8, 7),
       ("Tyler", "Bass", 9, NULL),
        
