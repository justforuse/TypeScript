// declare var $: any;
/// <reference path="lib\jquery-1.8.d.ts" />

/**
 * Chapter1
 */
module TypeScript.Revealed {
    export class Chapter1 {
        static displayDate(): void {
            var currentDate: Date = new Date();
            $("#txtDemo").text(currentDate.toUTCString());
        }
    }
}


$("#btnGo").click(TypeScript.Revealed.Chapter1.displayDate);