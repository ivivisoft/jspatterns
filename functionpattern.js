/**
 * @author andy
 * on 2017/6/27
 * @module Func
 * @description function base and pattern
 *
 */

/**
 * function defined types:
 * 1.define
 * 2.expression
 * 3.Named expression
 */
function foo() {
}
var bar = function () {
};
var baz = function baz() {
};

/**
 * !hoisting
 * @see jasmine test
 */
function hoistMe() {
    console.log(typeof a);//function
    console.log(typeof b);//undefined

    a();//local a
    b();//TypeError:b is not a function
    // function defined,the variable a and its implements will hoisting
    function a() {
        console.log('local a');
    }

    //function expression,only the variable will hoisting,but the implements
    var b = function () {
        console.log('local b');
    }
}


/**
 * callback pattern:notify the callback function's scope
 * find dom elements
 * @param {String} callback function's name
 * @param {Object} callback_obj who's function
 * @example findNodes('paint',myApp)
 * @see jasmine test
 */
var findNodes = function (callback, callback_obj) {
    var i = 3,
        nodes = [],
        found;


    while (i) {
        i -= 1;
        //some complex deal
        found = i;

        if (typeof callback === "string") {
            callback = callback_obj[callback];
        }
        if (typeof callback === "function") {
            callback.call(callback_obj, found);
        }
        nodes.push(found);
    }
};

/**
 * return a function and the closure
 * @example
 * var next = setup();
 * next();//1
 * next();//2
 * @see jasmine test
 */
var setup = function () {
    var count = 0;
    return function () {
        return (count += 1);
    }
};

/**
 * self-defining function also call lazy function definition
 * when your functions have some init operations and them
 * only need execute once!you can use it!But it have some shortcoming:
 * 1.when it  defining  self,the old attribute will lost.
 * 2.when assignment it to variable or used by object's function,the
 * self defining will never happen and the old function body will execute!
 * @see jasmine test
 */
var scareMe = function () {
    console.log('Boo!');
    scareMe = function () {
        console.log('Double Boo!');
    }
};



