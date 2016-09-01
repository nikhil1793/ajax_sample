(function(){
    
    "use strict";
    
    var service = this;

    document.getElementById("allFlatmates").addEventListener("click",function(){
        var node = document.getElementById("showFlatMates");
        refreshPage(node);
        node.style.visibility="visible";
        service.get("http://localhost:4000/all",null,function(response){
          if(response.data.length > 0){
                        for(var i =0;i<response.data.length;i++){
                            var listItem = document.createElement("li");
                            listItem.innerHTML=response.data[i];
                            // appending list items element to ul 
                            node.appendChild(listItem);  
                        }
                    }
        });
    })
    document.getElementById("addFlatmates").addEventListener("click",function(){
        var node = document.getElementById("addFlatMates");
        refreshPage(node);
        node.style.visibility="visible";
        var personName = document.getElementById("name").value;
        console.log(name);  
        var param = {name :personName};
        service.post("http://localhost:4000/add",param,function(response){
            if(response){
                        for(var i =0;i<response.data.length;i++){
                            var listItem = document.createElement("li");
                            listItem.innerHTML=response.data[i];
                            // appending list items element to ul 
                            node.appendChild(listItem);  
                        }
                    }
        });
    })
    
    function refreshPage(node){
        while(node.hasChildNodes()){
            node.removeChild(node.lastChild);
        }
    }
 
}).apply(new ajaxService());
