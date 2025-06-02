
const mongoose = require("mongoose");
const User = require("./models/user");
const express = require("express");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// database connect
async function connection() {
    await mongoose
        .connect('mongodb+srv://lokeshkumawat:p2noVWCorMoEgVeo@cluster0.awuu6zl.mongodb.net/personal_projects?retryWrites=true&w=majority&appName=Cluster0')
        .then(() => console.log("connected to the database"))
        .catch((err) => console.log(err))
}

connection()

// routers
app.get("/", (req, res) => {
    res.send("code is running perferct in code");
});

// Add new user
app.post("/user", async (req, res) => {
    let { name, email, phone } = req.body;
    try {
        const newUser = new User({
        name: name,
        email: email,
        phone: phone
    })
    await newUser.save();
   res.status(201).json({ message: "User created successfully" });
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "Something went wrong" })
    }
    
});



let port = 3000;
app.listen(port, () => {
    console.log('Server is running on port localhost:3000');
})

module.exports = app

  