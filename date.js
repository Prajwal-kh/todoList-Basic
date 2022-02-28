// JS modules used to export repetitive code into JS using .export .

//module.exports = getDate;  //not calling function here.  call this module by instanceName()
module.exports.getDate = getDate;
function getDate() {
  const date = new Date();
  const options = {
    weekday: "long",
    day: "numeric",
    month: "long"
  };
  const day = date.toLocaleString("en-US", options);
  return day;
}
// After refractoring code:
exports.marathiDate = function() {
  const date = new Date();
  //const today = date.getDay();  //ranging from 0 to 6.
  // const days =["Sunday","Monday","Tuesday","Wednesday","Thusday","Friday","Saturday
  // const day =days[today];
  const options = {
    weekday: "long",
    day: "numeric",
    month: "long"
  };
  return date.toLocaleString("mr-IN", options);
}

exports.getDay =()=>{
  const date = new Date();
  const options = {
    weekday: "long",
  };
  return date.toLocaleString("mr-IN", options);
}
