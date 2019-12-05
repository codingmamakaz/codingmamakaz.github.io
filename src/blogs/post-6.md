---
path: "/blog/javascript_hoist_and_scopes"
date: "2019-07-17"
title: "JavaScript Hoist and Scopes"
---



Hoisting and scopes can be very confusing especially for beginners. I’ve spent some time trying to understand them and here is what I’ve learned.
Hoisting is a behavior in JavaScript where variable and function declarations are lifted to the top of your scope before code execution. 

This logs out “Lemon”. 
![var code example](https://res.cloudinary.com/codingmamakaz/image/upload/v1565185122/F%20Blog%20Hoist/lemon.png)

This returns “undefined” because var lemon is “hoisted” to the top of the scope and basically transforming into 
![var code example2](https://res.cloudinary.com/codingmamakaz/image/upload/v1565185122/F%20Blog%20Hoist/lemon2.png)

this code below.
![var code example 3](https://res.cloudinary.com/codingmamakaz/image/upload/v1565185122/F%20Blog%20Hoist/lemon3.png)


let and const hoist but they cannot be accessed before the actual declaration is evaluated. These will throw reference errors. 
![let const example](https://res.cloudinary.com/codingmamakaz/image/upload/v1565185122/F%20Blog%20Hoist/letconst.png)

Scope is a rule that determines where a variable can be found and how it can be used. There are three levels of scope in JS:
* Global: Variable is available throughout the program
![global example](https://res.cloudinary.com/codingmamakaz/image/upload/v1565185122/F%20Blog%20Hoist/global.png)

* Function level: Variable is available only in the function
![function example](https://res.cloudinary.com/codingmamakaz/image/upload/v1565185122/F%20Blog%20Hoist/function.png)

* Block level: Variable is available only in the declared code block (I will explain about this later).

ES6 introduced let and const in 2015. Before that, it was just var. I showed var and let are not interchangeable. Here are more differences.  1: var and let can change their value and const cannot change its value.

I found a good image to explain [this.](https://pbs.twimg.com/media/CzLVVjtXAAERmbc.jpg)

var can be accessed anywhere in function but let and const can only be accessed inside the block where they are declared. Let and const have block scope. 
A block is a chunk of code inside of curly braces. Anything within curly braces is considered in block scope. So a variable declared in a block with let or const are only available for use within that block. Here are some examples. 
![access code example](https://res.cloudinary.com/codingmamakaz/image/upload/v1565185122/F%20Blog%20Hoist/fruit.png)

This logs out Apple, Banana and Clementine because they all are declared inside the block scope. 
![access code example2](https://res.cloudinary.com/codingmamakaz/image/upload/v1565185122/F%20Blog%20Hoist/fruit2.png)

This only logs out Apple because var can be accessed anywhere in a function, but let and const are block scoped.
Having a good understanding of the hoisting mechanism will help you avoid spending too much time debugging. To avoid possible side effects of hoisting like undefined variables or reference error, always try to declare the variables at the top of the scopes, use let and const instead of var and also always try to initialize variables when you declare them.
Happy coding!



