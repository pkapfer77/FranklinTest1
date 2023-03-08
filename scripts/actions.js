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
      //<div id="webcam-container"></div>
      //<div id="label-container"></div>
      const mydiv = (document.querySelector('div[data-id="container1"]'));
      mydiv.setAttribute("id","webcam-containerMain");
      mydiv.innerHTML += '<div id="webcam-container"></div><div id="label-container"></div>';
/*
      let div = document.createElement("div");
        div.id = "webcam-container" ;
        div.className = "div_class";
        div.style = "background-color: white;";
        div.style.width = "100px";
        div.style.height = "100px";
        document.body.appendChild("div");

        let div2 = document.createElement("div");
        div2.id = "label-container" ;
        div2.className = "div_class";
        div2.style = "background-color: black;";
        div2.style.width = "100px";
        div2.style.height = "100px";
        document.body.appendChild("div2");
      */
    }catch(error){
      console.error(error);
    }
}
function startgame(){
    alert("some javascript here")
}

defineActions();

  