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
	
	const user = User(req.body);
	try {
	  await user.save();
	  res.status(200).send(user)
	} catch (e) {
	  res.status(400).send();
	  console.log("no response sent back")
	}
  });

app.post("/login", async (req, res) => {
	console.log(req.body)

	try {
		await User.find({email : req.body.email , password : req.body.password}).then((response) => {			
			res.send(response[0])	
		})
	}catch (e) {
		console.log("failure")
		res.send(408)
	}
})

app.get("/users" , (req, res) => {
	console.log("request working")
	User.find({}, function (err, users) {
	  res.send(users);
  	});
});

app.post("/profile/:id/updateweight" , async  (req, res) => {
	let weight = new Stats(req.body)
	
	try {
		awaitweight.save()
		res.sendStatus(200).send(weight)

	} catch (e) {
		res.sendStatus(300)
	}
})


app.post("/profile/:id/addworkout", (req, res) => {

})

app.get("/profile/:id/weighthistory", (req, res) => {
	Stats.find({ user : req.params.id }).then(  (userstats) => {
		res.send(userstats)
	})
})






app.listen(port, () => {
	console.log("Server up on port: " + port);
});