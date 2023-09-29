const express = require('express');
const app = express();

app.use(express.json());

const port = 3000;
const isLocal = true;

app.get('/', (req, res) => {
    res.json({
		message: "✨ 👋🌏 ✨",
		stage: process.env.NODE_ENV,
	});
});

app.get("/ping", (req, res) => {
	res.json({
		message: "🏓",
	});
});

let data = [
	{ loanId: 1, borrowers: [ { pairId: 1, firstName: 'Tyler', lastName: 'Pranger', phone: '9999999999',}]},
	{ loanId: 2, borrowers: [ { pairId: 2, firstName: 'Tyler2', lastName: 'Pranger2', phone: '9999777999',}]},
	{ loanId: 3, borrowers: [ { pairId: 3, firstName: 'Tyler3', lastName: 'Pranger3', phone: '99443399999',}]}
]


app.get("/getLoans", (req, res) => {
	res.json({
		message: JSON.stringify(data)
	})
});

app.get("/getLoansById", (req, res) => {
	let loanId = req.query.loanId;

	let loan = data.find((data) => data.loanId === parseInt(loanId));

	res.json({
		message: JSON.stringify(loan)
	})
})

app.post("/addLoanItem", (req, res) => {
	console.log(req.headers);
	console.log(req.body);

	data.push(req.body);
	res.json({
		message: JSON.stringify(data)
	})
})

app.delete("/removeItem", (req, res) =>{
	let loanId = req.query.loanId;
	let pairId = req.query.pairId;
	console.log(loanId);
	console.log(pairId);
	// && data.pairId === parseInt(pairId)
	let index = data.findIndex((data) => data.borrowers[0].pairId === parseInt(pairId) && data.loanId === parseInt(loanId));

	data.splice(index, 1);

	res.json({
		message: JSON.stringify(data)
	})

});

app.delete("/removeItemByLoanID", (req, res) =>{
	let loanId = req.query.loanId;
	// let pairId = req.query.pairId;
	// console.log(loanId);
	// console.log(pairId);
	// && data.pairId === parseInt(pairId)
	let index = data.findIndex((data) => data.loanId === parseInt(loanId));

	data.splice(index, 1);

	res.json({
		message: JSON.stringify(data)
	})

});

app.patch("/updateBorrowers", (req, res) => {
	let updatedInfo = req.body;
	let loanId = req.body.loanId;
	let oldPairId = req.body.oldPairId;

	console.log(updatedInfo)
	console.log(loanId);
	console.log(oldPairId);
	// && data.pairId === parseInt(pairId)
	let index = data.findIndex((data) => {data.borrowers[0].pairId === parseInt(oldPairId) && data.loanId === parseInt(loanId)});
	// console.log(data[index]);
	// console.log(index);
	data[index].borrowers[0].pairId = updatedInfo.pairId
	data[index].borrowers[0].firstName = updatedInfo.firstName
	data[index].borrowers[0].lastName = updatedInfo.lastName
	data[index].borrowers[0].phone = updatedInfo.phone

	res.json({
		message: JSON.stringify(data)
	})
})
if (isLocal) {
	//local host
	app.listen(port, () => {
		console.log(`Example app listening on port ${port}`)
	});
} else {
	//for lambda export
	module.exports = app;
}
