
const chai = ("chai");
const spies = ("chai-spies");


function callBack(){
    return chai;

}


function receivesAFunction(callBack){
    callBack()
};

function returnsANamedFunction(){
    return function spy(){
        return spies
    }
};

function returnsAnAnonymousFunction(){
    return function(){

    }
}