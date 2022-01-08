# JavaScript Syntax Notes

## 01. Values, Types and Operators

```js
let variableName // Declare variable
const variableName // Declare constant
console.log(stuff) // Print to console
```

## 02. Program Structure

### If else

```js
if (condition){
	// Stuff
}
else if (condition){
	// Stuff
}
else{
	// Stuff
}
```

### Loops

```js
for (let i=0; i<=10; i+=1){
	// Stuff
}

while (condition){
	// Stuff
}

do {
	// Stuff
}
while (condition);
```

## 03. Functions

```js
let functionName=function(parameters){
	// Stuff
};

function functionName(parameters){
	// Stuff
};

let functionName = (parameters) => {
	// Stuff
};

// If you write "...paramters", function will store all paramters inside the parameters list
```

## 04. Data Structures

### Array =~ List

```js
let listName=[element1, element2...] // Make a list
let listName=[e1,...anotherList,e2] // Add anotherList in listName
listName[id] // Element of list at id
listName.length // Total elements
listName.push(element) // Add element to end and return new list length
listName.unshift(element) // Add element to front
listName.pop() // Delete last element and return it
listName.shift() // Delete first element
listName.includes(element) // true if element in list
listName.indexOf(element) // 1st location from left where element is found, -1 if not found
listName.lastIndexOf(element) // From right
listName.slice(fromId,untilId) // List from fromId(included) to untilId(not included, default until end)
newList=listName.concat(anotherListOrElement) // Returns list added to another list
```

### Object =~ Dictionary

```js
let objName={"key1":value1, "key2":value2...} // Make an object
objName["key1"] // Element of object
objName.key1 // Also works when key is named as a variable
delete objName.key1 // Delete an element
"key1" in ObjName // true if key1 exists
Object.keys(ObjName) // List of keys
Object.assign(Obj1, Obj2) // Merge Obj2 into Obj1
```

### Strings

```js
string.length // Total characters
string[id] // Char of string at id
string.slice(fromId,untilId) // Substring from fromId(included) to untilId(not included, default until end)
string.indexOf(substring) // 1st location from left where substring is found, -1 if not found
string.lastIndexOf(substring) // From right
string.padStart(maxLength,padChar) // Add padChars at front until string is of maxLength
list = string.split("{at}") // split string
string = list.join("{with}") // join list element to string
```

### Loop through Array or String

```js
for (let element of list){
	// loop through all elements
}

for (let id in list){
	// loop through ids of elements
}
```

### Math object

```js
Math.property();
//min, max, abs, round, floor, ceil, cos, sin etc
```

### JSON

```js
jsonString = JSON.stringify(object) // convert object to json
object = JSON.parse(jsonString) // convert json to object
```

## 05. Higher Order Functions

```js
array.forEach(function(element){
	// Go through array elements one by one
});

array.filter(function(element){
	// If element satisfy any condition return it
	return element;
}); // Returns a new filtered array

array.map(function(element){
	// Do something to all elements
	return modifiedElement;
}); // Returns an array with elements modified in some way
```

## 06. Secret Life of Objects

### Method

```js
let object={"key1":val1, "someFn":function(arguments){
	// Do Stuff
	// val1 can be used here as this.key1
}}; // Used as object.someFn(arguments), here someFn is the method
```

### Prototype

```js
let objPrototype={"someFn1":function(arguments){/*Do Stuff*/},"someFn2":function(arguments){/*Do Stuff*/}};
let newObj = Object.create(objPrototype) // someFn1 and 2 will be included by default with newObj
```

### Class

> Prototypes can only contain methods. But class can contain both methods and properties. Its better to use classes instead of prototypes.

```js
class ClassName{ /*Class names start with uppercase*/
	constructor(argumentsA){
		this.property1=arg1;
		this.property2=arg2;
	}
	someFn1(argumentsB){/*Do Stuff*/};
	someFn2(argumentsB){/*Do Stuff*/};
}

let obj=new ClassName(agumentsA); // This obj will have property1,2 and someFn1,2
```

### Get, Set, Static

```js
class ClassName{
	constructor(argumentsA){
		this.property1=arg1;
		this.property2=arg2;
	}
	get property3(){/*Return something*/};
	set property3(value){/*Do something and store in other properties*/};
	static property4(argumentsB){
		return new ClassName(argumentsA);
	}; // Create ClassName with different set of arguments
}
// obj.property3 = value; will invoke set
// value = obj.property3; will invoke get 
```

## 08. Errors

```js
"use strict"; // Put at top for better error reporting
throw new Error("Error msg"); // Trigger an error

try{
	// Do stuff
}
catch(error){
	// Do stuff in case of error
}
finally{
	// Do stuff w or w/o error
}
```