window.levels = [
	{name:'Tutorial', start: 9, end: 17, startAtWork: true, endAtWork: false, events:[
		{type: 'message', time: 9, message: 'Welcome to the tutorial'},	
		{type: 'message', time: 9.1, message: 'Drag cars to move them around.'},
		{type: 'car', time: 9.25, due: 10.25},
		{type: 'message', time:9.3, message: 'Cars can move in any of the four cardinal directions.'},
		{type: 'message', time:9.4, message: 'Just like real life!'},
		{type: 'message', time: 9.6, message: 'The time on the car is when it needs to leave the lot.'},
		{type: 'message', time: 9.7, message: 'Make sure the car is in the top row at that time.'},
		{type: 'message', time: 10.25, message: 'We\'re going to skip forward a bit.'},
		{type: 'fastforward', time: 10.3, amount: 2},
		{type: 'message', time: 12.5, message: 'You only get 1:00 for lunch, and if you miss it, you lose.'},
		{type: 'message', time: 12.8, message: 'When your car appears at the bottom, drag it to the top by 1:10 PM'},
		{type: 'message', time: 13 + 1/6, message: 'Once you leave the lot, you cannot move any other cars around.'},
		{type: 'car', time: 13.25, due: 15},
		{type: 'message', time: 13.5, message: 'When you get back from break, drag your car back to the box it started in.'},
		{type: 'message', time: 14, message: 'If two cars collide, you lose the game.'},
		{type: 'car', time: 14, due: 18},
		{type: 'car', time: 14.1, due: 16.5},
		{type: 'car', time: 14.2, due: 18},
		{type: 'message', time: 15, message: 'When a car tries to enter the lot, if there is no room in the top row, you lose the game.'},
		{type: 'car', time: 15.5, due: 16 + 1/6},
		{type: 'car', time: 15.51, due: 16.75},
		{type: 'car', time: 15.52, due: 17.25},
		{type: 'message', time: 16, message:'Once you leave the lot, any cars that are still there are somebody else\'s problem.'},
		{type: 'message', time: 16.5, message: 'Drag your car to the top row at the end of the day.'}
	]},
	{name:'Level 1', start: 9, end: 17, events:[
		{type: 'car', time: 9.1, due: 11},
		{type: 'car', time: 9.15, due: 13.5},
		{type: 'car', time: 9.2, due: 11.25},
		{type: 'car', time: 9.4, due: 15},
		{type: 'car', time: 9.5, due: 16.5},
		{type: 'car', time: 10, due: 20},
		{type: 'car', time: 10.3, due: 12},
		{type: 'car', time: 11.1, due: 11.75},
		{type: 'car', time: 11.5, due: 12.5},
		{type: 'car', time: 12, due: 14},
		{type: 'car', time: 12.5, due: 16},
		{type: 'car', time: 12.52, due: 16},
		{type: 'car', time: 13.1, due: 14.25},
		{type: 'car', time: 13.5, due: 15 + 5/60},
		{type: 'car', time: 13, due: 15},
		{type: 'car', time: 13 + 1/6, due: 16 + 40/60},
		{type: 'car', time: 14, due: 19},
		{type: 'car', time: 15.75, due: 20.5},
		{type: 'car', time: 16, due: 22},
		{type: 'car', time: 16 + 25/60, due: 23.5},
		{type: 'car', time: 16.5 + 1/6, due: 23},
		{type: 'car', time: 16.75, due: 18}
	]},
	{name: '9 to 5', start: 8, end: 18, events:[
		{"type":"car","time":8.2,"due":17.65},
		{"type":"car","time":8.2,"due":17.9},
		{"type":"car","time":8.25,"due":11.5},
		{"type":"car","time":8.283333333333333,"due":17.783333333333335},
		{"type":"car","time":8.35,"due":17.65},
		{"type":"car","time":8.416666666666666,"due":13.916666666666666},
		{"type":"car","time":8.475,"due":17.3},
		{"type":"car","time":8.55,"due":13.05},
		{"type":"car","time":8.583333333333334,"due":17.633333333333333},
		{"type":"car","time":8.683333333333334,"due":11.8},
		{"type":"car","time":9.4125,"due":16.633333333333333},
		{"type":"car","time":12.4375,"due":17.666666666666668},
		{"type":"car","time":12.7,"due":17.816666666666666},
		{"type":"car","time":12.825000000000001,"due":15.016666666666667},
		{"type":"message", time:13, message:"Manager: Yeah, if you could stay until 6:00 today, that would be great."},
		{"type":"car","time":14.05,"due":17.8},
		{"type":"car","time":14.85,"due":17.983333333333334},
		{"type":"car","time":15,"due":19.983333333333334},
		{"type":"car","time":15.2,"due":17.983333333333334},
		{"type":"car","time":16.033333333333335,"due":17.966666666666665}
	]},
	{name: 'Convenient Parking', start: 9, end: 17, events:[
		{"type":"car","time":9.016666666666667,"due":9.5},
		{"type":"car","time":9.216666666666667,"due":9.833333333333334},
		{"type":"car","time":9.116666666666667,"due":9.516666666666667},
		{"type":"car","time":9.366666666666667,"due":10.05},
		{"type":"car","time":9.783333333333333,"due":10.833333333333334},
		{"type":"car","time":10.166666666666666,"due":11.416666666666666},
		{"type":"car","time":9.6,"due":10.566666666666666},
		{"type":"car","time":10.34,"due":11.8},
		{"type":"car","time":10.1,"due":10.966666666666667},
		{"type":"car","time":10.53,"due":12.316666666666666},
		{"type":"car","time":10.133333333333333,"due":11.05},
		{"type":"car","time":10.866666666666667,"due":12.75},
		{"type":"car","time":11.28,"due":16.533333333333335},
		{"type":"car","time":12,"due":14.016666666666667},
		{"type":"car","time":11.116666666666667,"due":13.766666666666667},
		{"type":"car","time":11.716666666666667,"due":14.966666666666667},
		{"type":"car","time":11.516666666666667,"due":14.366666666666667},
		{"type":"car","time":13.64,"due":15.916666666666666},
		{"type":"car","time":12.05,"due":13.416666666666666},
		{"type":"car","time":12.45,"due":15.166666666666666},
		{"type":"car","time":13.083333333333334,"due":15.783333333333333},
		{"type":"car","time":14.566666666666666,"due":16.3},
		{"type":"car","time":14.25,"due":15.616666666666667},
		{"type":"car","time":13.966666666666667,"due":16.516666666666666},
		{"type":"car","time":14.616666666666667,"due":16.55},
		{"type":"car","time":14.966666666666667,"due":16.716666666666665},
		{"type":"car","time":15.7,"due":17.016666666666666},
		{"type":"car","time":15.5,"due":16.983333333333334},
		{"type":"car","time":15.966666666666667,"due":17.15},
		{"type":"car","time":16.116666666666667,"due":17.433333333333334},
		{"type":"car","time":16.383333333333333,"due":17.7},
		{"type":"car","time":16.216666666666665,"due":16.666666666666668},
		{"type":"car","time":16.833333333333332,"due":18.1}
	]},
	{name: 'Slow day', start: 9, end: 14.05, events:[
		{type: 'message', time: 10, message: 'You: "Man, it\'s slow today..."'},
		{type: 'fastforward', time: 10.15, amount: 2.6},
		{type: 'message', time: 14, message: 'Manager: "Kid, what are you doing here? It\'s a holiday. Go home."'}
	]},
	{name: 'Full house', start: 9, end: 17, events:[
		{"type":"car","time":9.131250000000001,"due":18.083333333333332},
		{"type":"car","time":9.54375,"due":16.933333333333334},
		{"type":"car","time":9.8,"due":22.466666666666665},
		{"type":"car","time":9.416666666666666,"due":13.866666666666667},
		{"type":"car","time":10.083333333333334,"due":16.45},
		{"type":"car","time":9.95,"due":16.6},
		{"type":"car","time":10.837499999999999,"due":17.8},
		{"type":"car","time":10.1625,"due":23.316666666666666},
		{"type":"car","time":11.283333333333333,"due":15.933333333333334},
		{"type":"car","time":10.537500000000001,"due":23.9},
		{"type":"car","time":11.8875,"due":23.966666666666665},
		{"type":"car","time":10.283333333333333,"due":22.283333333333335},
		{"type":"car","time":11.116666666666667,"due":14.933333333333334},
		{"type":"car","time":9.716666666666667,"due":22.966666666666665},
		{"type":"car","time":10.59375,"due":23.866666666666667},
		{"type":"car","time":12.1125,"due":23.966666666666665},
		{"type":"car","time":10.066666666666666,"due":16.366666666666667},
		{"type":"car","time":13.14375,"due":23.15},
		{"type":"car","time":11.83125,"due":23.7},
		{"type":"car","time":11.1375,"due":23.566666666666666},
		{"type":"function", time: 14.1, func:function(game) {
			game.addMessage("Customer: \"We've got to get my car out, it's an emergency!\"");
			for(var i = 0; i < 2; i++) {
				var chosenCar = game.grid.cars[Math.floor(Math.random() * game.grid.cars.length)];
				chosenCar.due = game.time + (1/3);
				chosenCar.urgent = true;
			}
		}}
	]}
];
