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
    
 /*   
 
    // Code Refactored in ajaxService
    
    function getAllFlatmates(){
        
        var httpRequest= new XMLHttpRequest();
        
        httpRequest.open("GET","http://localhost:4000/all",true);
        // setting the request header
        httpRequest.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
        httpRequest.responseType="json";
        httpRequest.send(null);
        
        httpRequest.onreadystatechange = function(){
            
            if(httpRequest.DONE === 4){
                if(httpRequest.status === 200){
                    var response = httpRequest.response;
                    if(response){
                        //var str="";
                        
                        for(var i =0;i<response.length;i++){
                            //str = str + "<li>"+response[i]+"</li>";
                            var listItem = document.createElement("li");
                            listItem.innerHTML=response[i];
                            // appending list items element to ul 
                            document.getElementById("showFlatMates").appendChild(listItem);  
                        }
                        // appending list items to ul in jquery (have append method which accepts string as well)
                        //document.getElementById("showFlatMates").append(str);
                        
                    }
                    
                }
            }
            
        }
        
    }
    
    function postAllFlatmates(){
        
        var httpRequest= new XMLHttpRequest();
        
        httpRequest.open("POST","http://localhost:4000/add",true);
        // setting the request header
        httpRequest.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
        httpRequest.setRequestHeader('Content-Type', 'application/json');
        httpRequest.responseType="json";
        httpRequest.send(JSON.stringify({"name":"akshat"}));
        
        httpRequest.onreadystatechange = function(){
            
            if(httpRequest.DONE === 4){
                if(httpRequest.status === 200){
                    
                    var response = httpRequest.response;
                    if(response){
                        for(var i =0;i<response.length;i++){
                            var listItem = document.createElement("li");
                            listItem.innerHTML=response[i];
                            // appending list items element to ul 
                            document.getElementById("addFlatMates").appendChild(listItem);  
                        }
                    }
                    
                }
            }
            
        }
        
    }
    */
    
}).apply(new ajaxService());