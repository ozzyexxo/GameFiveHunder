/*
 *  Created :Ozzy
 *  Date: 9 Jan 2019

 *  Description: Random scratchpad
 *
 */
/* lets add some values types */

let first_var = "Hello World";;
console.log(first_var);
console.log(typeof first_var);

let num = 30
console.log(num);
console.log(typeof num);

let cond = true
console.log(cond);
console.log(typeof cond);

let garbage = undefined
console.log(garbage);
console.log(typeof garbage);

let nothing = null
console.log(nothing);
console.log(typeof nothing);

/* Lets put some ref types */
let makeobj = {
   var_one: 'string 1',
   var_two: 345
}
console.log(makeobj);
console.log(typeof makeobj);

/* Change object values */
makeobj.var_one = "string 1 changed"
console.log(makeobj);
console.log(typeof makeobj);

/* There is a bracket notation as well
   Dot is better if we know what we need to access.
   Bracket can be use when accessing somthing at runtime, especially if
   user selects the property to be acessed
*/
let user_select = 'var_one'
makeobj[user_select] = "string 1 changed again bracket"
console.log(makeobj);
console.log(typeof makeobj);

/* lets mutate object type */
makeobj.popicoorn = true /*< so can mutate easily on runtime - more like matlab but not like pythion */
console.log(makeobj);
console.log(typeof makeobj);


/* lets try some arrays */
let arrtry = ['col1', 'col2']
console.log(arrtry);
console.log(typeof arrtry);
arrtry[2] = 'col3'
console.log(arrtry);
console.log(typeof arrtry);
arrtry[5] = 'col6' /* super good so the size is dynamic toolbar, we get empy items */
console.log(arrtry);
console.log(typeof arrtry);
arrtry[25] = 'col26'
console.log(arrtry);
console.log(typeof arrtry);

///////////////////////////////////////////////
/* lets try some functions */
function print_var_and_type(var_one, dont_pass) {
   console.log("Using function to print var and its type");
   console.log(var_one);
   console.log(typeof var_one);

   /* Note: i we dont do not pass argument to varibles, they are defaulted to undefined */
   console.log('Not passed paramenter = ' + dont_pass);

   /* Also we can return vlaues using return, same as python */
   return 20 * 20 /*< Sqaure of 20 lets say */
}
print_var_and_type(arrtry);
console.log(print_var_and_type(arrtry));
/* Also we can have  return to variable */
let sq2s = print_var_and_type(arrtry);
console.log(sq2s); /*< should print same as above */

///////////////////
/* Lets make some oop */
const geo_circle = {
   rad: 1,
   loc: {
      x: 1,
      y: 2,
      z: 3
   },
   draw: function () {
      console.log('draw');
   }
};

geo_circle.draw();

/* lets make a factory function */
function create_geo_circle(radius) {
   return {
      radius,
      draw: function () {
         console.log('draw ' + radius);
      }
   }
}
circlefac = create_geo_circle(2);
circlefac.draw()

/* lets make a constructor function(is also the class)
* - no clases in js
* - classes are also made with function with capital fiorst letter
*/
function Circle_construct(radius) {
   this.radius = radius;
   this.draw = function () {
      console.log('draw ' + this.radius);
   }
}
const new_circle = new Circle_construct(12);
new_circle.draw();
new_circle.construtor

/* functions are objects */
/* contrucntors for functions are Functions - lets experiment */
const New_circle_func_obj =
   new Function('radius',
      `  this.radius = radius;
         this.draw = function () {
            console.log('draw ' + this.radius);
      }`)

/* So Js inheritance is a little complicated
the way it works is that we use call function
to invoke the constructor of an object lets 
say but the object we pass to it becomes the
this replacement */
let inheri_obj = {
   radius: 100
};
New_circle_func_obj.call(inheri_obj, 56)

/* copy some code */
function Product(name, price) {
   this.name = name;
   this.price = price;
}

function Food(name, price) {
   Product.call(this, name, price);
   this.category = 'food';
}

function Toy(name, price) {
   /* inheritance of attributes is happneeing here - Toy originlly did not have these name and price attributes */
   Product.call(this, name, price);
   this.category = 'toy';
}

var cheese = new Food('feta', 5);
var fun = new Toy('robot', 40);

/////////////////////
/* How primitives and objects behave diffenrtly */
let xx = 10
let yy = xx

xx = 20

/* x and y are independent - copy are made */

/* let use objct types */
let xxx = { value: 10 }
let yyy = xxx /* never do this - use deep copy */

xxx.value = 50

/* So xxx and yyy both are SyncManager, so refernce is copied 
 * changing one changes ther other */
function increaseobj(obj) {
   obj.value++;
}
increaseobj(xxx);
//// object properties can add and delte on the fly

/* Enumerating the properties */
let cir_enu = new Circle_construct(96);

for (let key in cir_enu) {
   /* iternations will have all keys in cir_enu */
   if (typeof cir_enu[key] != 'function')
      console.log(key, cir_enu[key])
}
const keys = Object.keys(cir_enu)
console.log(keys)

/* Abstraction js- hide attributes to private */
function Circle_private(radius) {
   this.radius = radius;
   /* let makes them scope limited - this makes them availble outside */
   let default_location = { x: 80, y: 790 };
   Object.defineProperty(this,
      'default_location', {
         get: function () {
            return default_location;
         },
         set: function (value) {
            if (!value.x || !value.y)
               throw new Error('Invalid muahah')

         }
      });
   let priv_func = function (fac) {
      console.log('private method')
   }
   this.draw = function () {
      console.log('draw ' + this.radius);
   }
}
const privcirc = new Circle_private(78);

//////
function Stopwatch() {

   let duration = 0;
   Object.defineProperty(this,
      'duration', {
         get: function () {
            return duration;
         }
      });
   let start_time, endtime, is_running = false;
   this.start = function () {
      /* Some timer start */
      if (!is_running) {
         start_time = new Date();
         is_running = true
         return;
      }
      console.log('Already Running')
   }

   this.stop = function () {
      /* Some timer start */
      if (is_running) {
         stop_time = new Date();
         duration =  stop_time.getTime() - start_time.getTime();
         /* make in secs */
         duration = duration/1000
         is_running = false
         return;
      }
      console.log('Already Stopped')
   }

   this.reset = function () {
      /* Some timer start */
      if (!is_running) {
         start_time = null
         stop_time = null
         duration =  0;
         return;
      }
      console.log('Stop watch running !!! Stop it First')
   }   
}

const sw = new Stopwatch();
