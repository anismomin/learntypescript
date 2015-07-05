//////////////////////////////////
//Interface
//////////////////////////////////
console.log('im Form Interface');
//when ever we define obj usign object litral. you can assign new method to this.
// LOSELY TYPED EXAMPLE WORK GREAT IN JAVASCIPT. But ERROR IN TS
var person = {
	firstname : "anis",
	lastname : "momin"	
}

person = {
	firstname : "anis",
	lastname : "momin",
	sayhi: function(){
		console.log('Interface Example : Object literal');
	}
}
//person.sayhi();


// TYPESCRIPT INTERFACE
// init level propetes and methids must be there when using it
var human = {
	firstname : "anis",
	lastname : "momin",
	sayhello: function(){ }
}

// no problem with less prperties but error if call extra
function doSomeThing(human : { firstname : string; lastname : string }) {
	human.firstname;	
}

// using person iterfece
doSomeThing(human);

// no problem with equal prperties 
doSomeThing({ 
	firstname: "anis", 
	lastname: "momin", 
	sayhello: function(){ } 
});

console.log('Interface is a contract whatever function implements that inertace must have those properties and mthods');

interface IPerson {
	firstname: string;
	lastname?: string;
	sayHi(): any;
}

var pearson: IPerson = {
	firstname: 'anis',
	lastname: 'momin',
	sayHi: function() { }
};

function doNewThing(person : IPerson, fn : (valy : any) => any ) {
	
}

console.log('++++++++++++++End Interface+++++++++++++++++++');

//////////////////////////////////
//Overloading
//////////////////////////////////

////this is called overload declaration 
//function sum(a: number , b: number): number;
//function sum(a: string , b: number): number;
//function sum(a: number , b: string): number;
//function sum(a: string , b: string): number;
////this is called overload defination
//function sum(a, b) {
//	if(typeof a === 'string') { a = parseInt(a, 10); }
//	if(typeof b === 'string') { b = parseInt(b, 10); }
//	return a + b;
//}
//
//console.log("overload n:n " + sum(3,5));
//console.log("overload n:s " + sum(3,'5'));
//console.log("overload s:n " + sum('3',5));
//console.log("overload s:s " + sum('3','5'));
//
//
////its customary to order overloads from most specific to least specific
//function add(arg1: string, arg2: string): string;//option 1
//function add(arg1: number, arg2: number): number;//option 2
//function add(arg1: boolean, arg2: boolean): boolean;//option 3
//function add(arg1: any, arg2: any): any {
//	//this is not part of the overload list, 
//	//so it only has three overloads
//    return arg1 + arg2;
//}
//
////Calling 'add' with any other parameter types would cause an error except for the three options
//console.log("overload n:n " + add(1, 2));
//console.log("overload s:s " +add("Hello", "World"));
//console.log("overload b:b " + add(true, false));


//////////////////////////////////
//Type Anotation OR Type Signature
//////////////////////////////////
//console.log('using signature as type anotation');
//console.log();
//console.log('annot function doesnt return anything. when return then error occur. signature says void return');
//var anot = function(fn : (a :number) => void ) {
//	fn(1);
//}
//
//console.log(anot(bashir))
//
//console.log('annotation return as per signature. getting number param and return numver');
//
//var anot2 = function(fn : (a :number) => number ) {
//	return fn(1);
//}
//
//console.log(anot2(bashir))


//////////////////////////////////
//Fat Arrow function presereve value of this
// Extremlly use full when ever writing code  with callback // we can also use for overloads
//////////////////////////////////

//// normally when we call this it return undefine. when using with this not 'that' refrence
//var jsWay = {
//	message: 'Im form old js way : Preserve this value sxample',
//	start: function() {
//		//var that = this;
//		// when ever this anynomus function call this call in syntax of window  object or Global obj
//		setTimeout(function(){
//			//alert(that.message);
//			console.log(this.message);
//		},1000);
//	}
//}
//jsWay.start(); // undefined
//
////With Fat Arrow method 
//// see comiled js to see result using the same thchnique we use above
//var fatArrow = {
//	message: 'im from fat Arrow Message : Preserve this value sxample',
//	start: function() {
//		setTimeout(() => {
//			console.log(this.message);			
//		},1000);
//	}
//}
//
//fatArrow.start(); // message



//////////////////////////////////
//function ways
//////////////////////////////////
//
//console.log('Multiple Ways to cretae function in Typescript. using same signature');
//var foo = function(a: number){
//	return a + 25;
//}
//
//function bashir(a: number){
//	return  a + 25;
//} 
//
//// fat arrow and in c shrp lamda expression.
//// IMP: Fatarrow sytax preserve the value of this
//var fatarrow = (a : number) => a + 25;
//
//console.log('anynomus func ' + foo(1));
//
//console.log('Named Func: ' + foo(1));
//
//console.log('Fat Arrow Func and Lamda Expression in c#: ' + fatarrow(10));


