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
			if (response[0]) {
				console.log("response is", response);
				res.send(response[0])
			}else {
				res.sendStatus(404)
			}
			
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
	console.log(req.body)
	let weight = new Stats(req.body)
	
	try {
		await weight.save()
		console.log("success", weight)
		res.send(weight)

	} catch (e) {
		console.log("error")
		res.sendStatus(300)
	}
})


app.post("/profile/:id/addworkout", (req, res) => {

})


app.get("/profile/:id", (req, res) => {
	const user = req.params.id ; 
	const userData = User.find( { _id :  user }).then( (data) => {
		console.log(data[0])
		res.send(data[0])
	} )


})

app.get("/profile/:id/weighthistory", (req, res) => {	
	
	let dates = []
	let weight =  []

	const stats = Stats.find({ user : req.params.id }).then(  (userstats) => {
		console.log(userstats)

		userstats.forEach( (item) => {
			const str =  item.createdAt ; 
			console.log(typeof str )
			dates.push(item.createdAt);
			weight.push(item.weight);
		});

		console.log("data" , dates, weight)

		res.send( {
			"dates" : dates,
			"weight" : weight
		});
	}).catch( e => res.send(e))



})




app.listen(port, () => {
	console.log("Server up on port: " + port);
});