// printDate() : prints the current date
// - printMonth() : prints the current month
// - getBatchInfo() : prints batch name, week#, Day#, the topic being taught today is ….. For example - Radon, W3D3, the topic for today is Nodejs module system’
const fullDate=new Date();
function printDate(){
    console.log("Date :: ",fullDate.getDate());
}
function printMonth(){
    console.log("Month :: ",fullDate.getMonth()+1);
}
function getBatchInfo(){
    console.log("Plutonium, W3D5, the topic being taught today is Nodejs module system.");
}
module.exports.getBatchInfo=getBatchInfo
module.exports.printMonth=printMonth
module.exports.printDate=printDate