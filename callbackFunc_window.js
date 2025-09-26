function showData(name, amt) {    
  alert(' Hello ' + name + '\n Your are saving ' + amt);    
}    

function getData(callback) {    
  var name = prompt(" Welcome! \n What is your name? ");    
  var amt = prompt(" Enter the amount you wish to save.");    
  callback(name, amt);    //callback === showData
}    
    
getData(showData);	