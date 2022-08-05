// - trim() : calls the trim function on a hardcoded string for example ‘ functionUp  ’
// - changetoLowerCase() : changes the case of the string to lower. [Call toLowerCase() on a hardcoded string]
// - changeToUpperCase() : changes the case of the string to upper case [Call toUpperCase() on a hardcoded string]
const str="    ****Functionup is a placement   bootcamp.****      ";
function Trim(){
    console.log(str.trim());
}
function changetoLowerCase(){
    console.log(str.toLowerCase());
}
function changeToUpperCase(){
    console.log(str.toUpperCase());
}

module.exports.Trim=Trim
module.exports.changetoLowerCase=changetoLowerCase  
module.exports.changeToUpperCase=changeToUpperCase