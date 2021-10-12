var p1 = new Promise((resolve, reject) => {
	setTimeout(() => resolve('one'), 1000);
});
var p2 = new Promise((resolve, reject) => {
	setTimeout(() => resolve('two'), 2000);
});
var p3 = new Promise((resolve, reject) => {
	setTimeout(() => resolve('three'), 3000);
});
var p4 = new Promise((resolve, reject) => {
	setTimeout(() => resolve('four'), 4000);
});
var p5 = new Promise((resolve, reject) => {
	setTimeout(() => reject('Rejected'), 2500);
});

// Using .catch:
// Promise.all([p1, p2, p3, p4, p5])
// 	.then((values) => {
// 		console.log('success: ', values);
// 	})
// 	.catch((error) => {
// 		console.log('error: ', error);
// 	});

Promise.allSettled([p1, p2, p3, p4, p5])
	.then((values) => {
		console.log('success: ', values);
	})
	.catch((error) => {
		console.log('error: ', error);
	});
