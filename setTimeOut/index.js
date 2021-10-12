const time = setTimeout(() => {
	console.log('foo');
}, 3000);

// console.log('time: ', time);

let i = 0;

const counter = setInterval(() => {
	i++;
	console.log('couting...', i);
	if (i === 5) {
		console.log(counter);
		clearInterval(counter);
		console.log('end: ', counter);
	}
}, 1000);
