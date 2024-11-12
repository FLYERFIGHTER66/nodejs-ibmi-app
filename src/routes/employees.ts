import express from "express";
import db from "../db";

const root = express.Router();

// APIs will be defined here.
root.get("/", async (req, res) => {
    const  sql = `
    Select 
        empno as "id",
        firstname as "first", 
        lastname as "last",
        workdept as "workdept",
        salary as "salary",
    from employee
    `;

    const resultSet = await db.query(sql);

    res.json(resultSet);
})


root.get("/", (req, res) => {
  res.send("Hello World!");
});

export default root;