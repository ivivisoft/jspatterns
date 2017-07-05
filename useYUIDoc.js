/**
 * Created by andy on 2017/6/26.
 */

/**
 * my javascript application
 * @module myApp
 **/

var MYAPP = {};
/**
 * a number tool
 * @namespace MYAPP
 * @class MathStuff
 */
MYAPP.MathStuff = {
    /**
     * Sums two numbers
     * @method sum
     * @param {Number} a  the first num
     * @param  {Number} b the second num
     * @return {Number} two numbers add
     */
    sum: function (a, b) {
        return a + b;
    }
};

/**
 * Constructs Person objects
 * @class Person
 * @constructor
 * @namespace MYAPP
 * @param {String} first firstName
 * @param {String} last lastName
 */
MYAPP.Person = function (first, last) {
    /**
     * person's firstName
     * @property first_name
     * @type String
     */
    this.first_name = first;
    /**
     * person's lastName
     * @property last_name
     * @type String
     */
    this.last_name = last;
};
/**
 * Returns the name of the person object
 * @method getName
 * @return {string} Person's name
 */
MYAPP.Person.prototype.getName = function () {
    return this.first_name + ' ' + this.last_name;
};