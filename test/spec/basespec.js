/**
 * Created by andy on 2017/6/26.
 */

describe("javascript best practice", function () {
    it("bad variable define it will escape the variable to global", function () {
        foo();
        expect(typeof a).toEqual("undefined");
        expect(b).toEqual(1);
    });
    it("some global variable can call delete!why?", function () {
        expect(delete global_var).toBeFalsy();
        expect(delete global_novar).toBeTruthy();
        expect(delete global_fromfunc).toBeTruthy();
    });
    it("variable improve!", function () {
        expect(function () {
            func();
        }).not.toThrowError();

    });
    it("best practice of for and while statement:baseLoop", function () {
        var arr = ["hello", "world", "ni", "hao", "world", "shiJie"];
        expect(function () {
            console.time("baseLoop");
            baseLoop(arr);
            console.timeEnd("baseLoop");
        }).not.toThrowError();

    });
    it("best practice of for and while statement:baseImproveLoop", function () {
        var arr = ["hello", "world", "ni", "hao", "world", "shiJie"];
        expect(function () {
            console.time("baseImproveLoop");
            baseImproveLoop(arr);
            console.timeEnd("baseImproveLoop");
        }).not.toThrowError();

    });
    it("best practice of for and while statement:goodLoopByFor", function () {
        var arr = ["hello", "world", "ni", "hao", "world", "shiJie"];
        expect(function () {
            console.time("goodLoopByFor");
            goodLoopByFor(arr);
            console.timeEnd("goodLoopByFor");
        }).not.toThrowError();

    });
    it("best practice of for and while statement:goodLoopByWhile", function () {
        var arr = ["hello", "world", "ni", "hao", "world", "shiJie"];
        expect(function () {
            console.time("goodLoopByWhile");
            goodLoopByWhile(arr);
            console.timeEnd("goodLoopByWhile");
        }).not.toThrowError();

    });
    it("for-in method called by object", function () {
        var obj = {};
        obj.name = "andy";
        obj.sex = "male";
        obj.age = 18;
        expect(function () {
            forInUsed(obj);
            forInReversePattern(obj);
            goodForInUsed(obj);
        }).not.toThrowError();

    });
    it("best practise the throw errors", function () {
        expect(function () {
            useThrow();
        }).not.toThrowError();

    });

});
