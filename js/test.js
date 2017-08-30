/*
var a = 1;
let b = 2;
console.log(a);
console.log(b);

if(true){
	var a = 1;
	let b = 2;
};
console.log('a:', a);
console.log('b:', b);
*/
if (1){
	let a = 4;
	console.log('a:',a);
};
if(true){
	let b = 6;
	console.log('b:',b);
};
for (var i=0;i<5;i++){
	console.log('i:',i);
};
for (let j=0;j<5;j++){
	console.log('j:',j);
};
var a = 1;

function fuu (){
	if(false){
		var a =1;
	}
	console.log('a:',a);
};
fuu();

let user = {
	name:'王花花',
	age:20,
};
const LOVE_YOU = user;
console.log('user:',user);
user.age = 13;
console.log('user:',user);
/*var a = 1;
var b = 2;
var c = 3;
var a = 1,b = 2,c = 3;
var [a, b, c]=[1,2,3];
var[a,[b,c]]=[1,[2,3]];*/
/*var [a,,c]=[1,,3];
console.log('a:',a);
console.log('c:',c);
console.log('b:',b);*/
var [a,...c]=[1,2,3];
console.log('a:',a);
console.log('c:',c);
var arr = [1,2,3,4];
console.log('arr:',arr);
var s = new Set ([1,2,3,3]);
console.log('s:',s);
console.log('s.size:',s.size);
s.add(4,5);
console.log('s:',s);
s.delete(2);
console.log('s:',s);
console.log('s.has(5)',s.has(5));
console.log('s.has(1)',s.has(1));
s.clear();
console.log('s:',s);
var f =[1,2,3,4,6];
console.log('f:',f);
var h =new Set ([1,2,4,6,7,7,8]);
console.log('h:',h);
console.log("h.size:",h.size);
h.add(3);
console.log('h:',h);
h.delete(7);
console.log('h:',h);
console.log('h.has(7)',h.has(7));
console.log('h.has(1)',h.has(1));
h.clear();
console.log('h:',h);

var use = {};
use.fname = 'boob';
use.lname = 'woood';

full_name = use.fname + ' ' + use.lname;
console.log('full_name:',full_name);

console.log('Yo' .includes('Y'));
console.log('Yo'.startsWith('Y'));
console.log('beautiful'.endsWith('a'));
console.log('yo '.repeat(5));
console.log('yo'.indexOf ('y')!==-1);
console.log('we'.indexOf('w')!==-1);
console.log('he'.includes('e'));
console.log('yo'.startsWith('o'));
console.log('yo'.endsWith('h'));
console.log('we '.repeat(5));
