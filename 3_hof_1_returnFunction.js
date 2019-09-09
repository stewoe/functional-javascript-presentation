function getFun() {
  let dateOfCreation = new Date();
  
  return function() {
    console.log('Creation time:  ' + dateOfCreation.toUTCString());
    console.log('Execution time: ' + new Date().toUTCString());    
  }
}
