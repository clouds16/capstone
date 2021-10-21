const express = require("express");
const cors = require('cors');
require("./database/mongoconnect.js");

// Mongo DB schemas
const User = require("./models/users");
const Stats = require("./models/stats")
const Workouts = require("./models/workouts")

// App engine 
const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());
app.use(cors());

//Start of Routes
app.post("/", (req, res) => {
	res.send({ message : "hello"})
});

app.post("/users", async (req, res) => {
	//using async await
	const user = new User(req.body);
	try {
		await user.save();
		res.status(201).send(user);
	} catch (e) {
		res.status(400).send(e);
	}
});

app.post('/signup', async function(req, res ) {
	console.log(req.body)
	const user = new User(req.body);
	try {
	  await user.save()
	  res.status(201).send(user);
	} catch (e) {
	  res.status(400).send();
	}
  });

app.post("/login", async (req, res) => {
	console.log(req.body)

	try {
		User.find({email : req.body.email , password : req.body.password}).then((response) => {
			console.log(response[0])
			res.send(response[0])
		})
	}catch (e) {
		res.send(408)
	}

})

app.get("/users" , (req, res) => {
	console.log("request working")
	User.find({}, function (err, users) {
	  res.send(users);
  	});
  });
  

app.listen(port, () => {
	console.log("Server up on port: " + port);
});