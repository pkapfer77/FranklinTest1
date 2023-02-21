function defineActions(){
    try{
     const jsActions = (document.querySelectorAll('a[href*="https://js-action/"]'));
      //console.log(jsActions);
      jsActions.forEach(function(action){
        console.log(String(action.href));
        const actionURL = String(action.href) ;
        const actionString = actionURL.split('/');
  
        action.href = "javascript:" + actionString[3] + "();";
        console.log("action=" + actionString[3]);
  
      });
     
      
    }catch(error){
      console.error(error);
    }
}
function startgame(){
    alert("some javascript here")
}

defineActions();

  