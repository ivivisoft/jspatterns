/**
 * @author andy
 * on 2017/6/27
 *
 */

describe("Func", function () {
    it('function hoisting', function () {
        //anti-pattern
        function a() {
            console.log('global a');
        }

        function b() {
            console.log('global b');
        }

        expect(function () {
            hoistMe();
        }).toThrow(new TypeError('b is not a function'));
    });
    it('function callback pattern and the scope', function () {
        var myApp = {};
        myApp.color = 'green';
        myApp.paint = function (node) {
            console.log(node, ':', this.color);
        };
        expect(function () {
            findNodes('paint', myApp);
        }).not.toThrowError();
    });
    it('return a function and closure', function () {
        var next = setup();
        expect(next()).toEqual(1);
    });
    it('self-defining function', function () {
        expect(function () {
            scareMe();//Boo!
            scareMe();//Double Boo!
        }).not.toThrowError();
        expect(function () {
            // add a new attribute
            scareMe.property = 'properly';
            // assignment other variable
            var prank = scareMe;
            //used by object's function
            var spooky = {
                boo: scareMe
            };
            //calling with new name
            prank();//Boo!
            prank();//Boo!
            console.log(prank.property);//properly
            //object function called
            spooky.boo();//Boo!
            spooky.boo();//Boo!
            console.log(spooky.boo.property);//properly

            // using self-defining
            scareMe();//Double Boo!
            scareMe();//Double Boo!
            console.log(scareMe.property);//undefined
        })
    });

});
