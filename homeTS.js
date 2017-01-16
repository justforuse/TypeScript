// declare var $: any;
/// <reference path="lib\jquery-1.8.d.ts" />
var TypeScript;
(function (TypeScript) {
    /**
    * Chapter1
    */
    (function (Revealed) {
        var Chapter1 = (function () {
            function Chapter1() {
            }
            Chapter1.displayDate = function () {
                var currentDate = new Date();
                $("#txtDemo").text(currentDate.toUTCString());
            };
            return Chapter1;
        })();
        Revealed.Chapter1 = Chapter1;
    })(TypeScript.Revealed || (TypeScript.Revealed = {}));
    var Revealed = TypeScript.Revealed;
})(TypeScript || (TypeScript = {}));
var aNumber = 123;
var aString = "123";
console.log(aNumber == aString);

$("#btnGo").click(TypeScript.Revealed.Chapter1.displayDate);
