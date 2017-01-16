function add(value:string):string;
function add(value:number):number;
function add(value:boolean):number;
function add(value):any{
    if('string' == typeof value){
        return value + "string";
    }
    else if('number' == typeof value){
        return value * 2;
    }
    else if('boolean' == typeof value){
        if(value){
            return 1;
        }else{
            return "123";
        }
    }
}
console.log(add(10))
console.log(add("allen"))
console.log(add(false))
console.log(add(true));
console.log(add(undefined));
