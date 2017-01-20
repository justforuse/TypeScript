interface IFnStringManipulator{
    (input:string):string;
}

var sayHello:IFnStringManipulator = function(s:string){
    return "hello " + s;
}

var stringUtils:IFnStringManipulator[];
stringUtils.push(sayHello)