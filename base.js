/**
 * @author andy
 * @tutorial base knowledge
 * @copyright ivivisoft@gmail.com
 */

/**
 * !It makes a is local variable and b is global variable
 */
function foo() {
    var a = b = 1;
}

/**
 * !define three global variable,and the var defined global
 * variable can't use delete method delete,but others will do,
 * var defined a variable,and others defined the windows attribute
 */
var global_var = 1;
global_novar = 2;
(function () {
    global_fromfunc = 3;
}());

/**
 * The javascript can defined variable in everywhere in function,
 * it just like the variable defined in the front of function.
 * and it's called "variable improve"!
 */
var myname = 'global';
function func() {
    console.log(myname);//undefined
    var myname = 'local';
    console.log(myname);//local
}


/**
 *  base loop
 *  @param {Array} arr
 */
function baseLoop(arr) {
    for (var i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}


/**
 * use single var pattern and cache the array length
 * @param {Array} arr
 */
function baseImproveLoop(arr) {
    var i, max;
    for (i = 0, max = arr.length; i < max; i++) {
        console.log(arr[i]);
    }
}

/**
 * use least variable and compare to zero
 * by for
 * @param {Array} arr
 */
function goodLoopByFor(arr) {
    var i;
    for (i = arr.length; i--;) {
        console.log(arr[i]);
    }
}

/**
 * use least variable and compare to zero
 * by while
 * @param {Array} arr
 */
function goodLoopByWhile(arr) {
    var i = arr.length;
    while (i--) {
        console.log(arr[i]);
    }
}


/**
 * For in:for-in is used enum the object attribute,the array also
 * can use it,because the array is also a object,but we can recommend
 * use it in array.It maybe get some error,so in array we enum the elements
 * by using for!
 * when we used for-in we use hasOwnProperty will better;
 * @param {Object} obj
 */
function forInUsed(obj) {
    for (var i in obj) {
        if (obj.hasOwnProperty(i)) {
            console.log(i, ":", obj[i]);
        }
    }
}
/**
 * anti-pattern for-in
 * @param {Object} obj
 */
function forInReversePattern(obj) {
    for (var i  in obj) if (obj.hasOwnProperty(i)) {
        console.log(i, ":", obj[i]);
    }
}

/**
 * good practice of fot-in
 * @param {Object} obj
 */
function goodForInUsed(obj) {
    var i, hasOwn = Object.prototype.hasOwnProperty;
    for (i in obj) {
        if (hasOwn.call(obj, i)) {
            console.log(i, ":", obj[i]);
        }
    }
}

/**
 * !avoid the type implicit conversion:use === and !===
 * not == or !==
 * console.log(false == 0);//true
 * console.log(false === 0);//false
 *
 * eval() is a devil!it can run string as script,
 * setInterval(),setTimeout(),new Function(), also can do it!
 * don't use it,while you must do it,please use new Function()
 * or take eval() in immediate function!
 * let's look some example
 */
function myFunc() {

}
/**
 * anti-pattern
 */

setTimeout("myFunc()", 1000);
setTimeout("myFunc(1,2,3)", 1000);
/**
 * recommended pattern
 */
setTimeout(myFunc, 1000);
setTimeout(function () {
    myFunc(1, 2, 3);
}, 1000);

/**
 * 1.eval() can change the global context,and read and write
 * the extend variable,but immediate function and new Function() not!
 */
console.log(typeof un);//undefined
console.log(typeof deux);//undefined
console.log(typeof trois);//undefined

var jsString = "var un=1;console.log(un);";
eval(jsString);//1
jsString = "var deux=1;console.log(deux);";
new Function(jsString)();//1
jsString = "var trois=1;console.log(trois);";
(function () {
    eval(jsString);//1
}());
console.log(typeof un);//number
console.log(typeof deux);//undefined
console.log(typeof trois);//undefined


(function () {
    var local = 1;
    eval("local=3;console.log(local)");//3
    console.log(local);//3
}());
(function () {
    var local = 1;
    Function("console.log(typeof local);")//undefined
}());


/**
 * about the brace,not use it like example:
 * @example
 *function func(){
 *   return
 *   {
 *       name:"Batman"
 *   };
 *}
 * console.log(func());//undefined
 */
function func() {
    return {
        name: "Batman"
    };
}
console.log(func());//object {name:"Batman"}


/**
 * best practise for throw a error
 */
function useThrow() {
    //got a error
    try {
        throw {
            name: "MyErrorType",
            message: "oops",
            extra: "This was rather embarrassing",
            remedy: genericErrorHandler
        };

    } catch (e) {
        //notify user
        console.log(e.message);
        //deal the error
        e.remedy();
    }
}
function genericErrorHandler() {
    console.log("The error deal!");
}

/**
 * about your user-defined constructs,if you use "new" create it
 * not you return or not,it will implicit return this,notify!it's a object,if
 * you return not a object,it will ignore that and return "this"
 * @constructor
 */
function NotReturnObj() {
    return 1;
}
console.log(new NotReturnObj());//object{}

/**
 * Compulsory use "new" create your user-defined constructs!
 * because if you not use "new" create your object,the this is point to windows!
 * @constructor
 * @example
 * Person("andy")
 * or
 * new Person("andy")
 * will return a object{name:"andy"}
 */
function Person(name) {
    if (!(this instanceof arguments.callee)){
        return new arguments.callee();
    }
    this.name = name;
}

