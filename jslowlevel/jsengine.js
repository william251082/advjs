// JS Engine
// const isHappy = true;

// list of ECMAscript engines
// https://en.wikipedia.org/wiki/List_of_ECMAScript_engines
// v8 is written in c++, ex. for google maps // fastest
// spider monkey, used by firefox

// astexplorer.net

function jsengine(code) {
    return code.split(/\s+/)
}

console.log(jsengine('var a = 5'));
