const express = require('express');
const app = express();
const cors = require("cors");
const port = 3300 || process.env.PORT;

app.use(express.json());
app.use(cors())

const users = [
    { id: 1, name: 'John Doe', age: 30 },
    { id: 2, name: 'Jane Smith', age: 25 },
    { id: 3, name: 'Alice Johnson', age: 35 }
  ];

// GET
app.get('/app', (req, res) => {
    res.json(users);
})
// POST
// app.post("/users", (req, res) => {
//     let not_found = 0;
//     for (let i = 0; i < users.length; i++) {
//         if (users[i].id !== req.body.id) {
//             not_found++;
//         }
//     }
//     if (not_found === users.length) {
//         users.push(req.body);
//         res.send("USER ADDED SUCCESSFULLY");

//     } else {
//         res.send("SORRY BUT YOU CAN NOT ADD THIS USER BECAUSE THERE IS A USER HAVE THE SAME ID WHICH IS " + req.body.id);
//     }
// })

// // DELETE

// app.delete("/users", (req, res) => {
//     const id = req.body.id;
//     console.log(id);
//     let user_i;
//     if (users.length) {
//         let users_false = 0;
//         for(let i = 0; i < users.length; i++) {
//             if(users[i].id !== id) {
//                 users_false++;
//             }else {
//                 user_i = i;
//             }
//         }
//         if(users_false === users.length) {
//             res.send("SORRY BUT USER IS NOT FOUND!");
//         }else {
//             res.send(users[user_i].name + " DELETED SUCCESSFULLY!");
//             users.splice(user_i , 1);
//         }
//     }else {
//         res.send("THERE IS NO USERS TO DELETE FROM THEM.");
//     }
//     console.log(users);
// })

app.listen(port, () => {
    console.log("started on port " + port);
})