function ajaxService(){
    
    var vm = this;
    
    
}

/**
  * get
  */
ajaxService.prototype.get= function(url,param,callback){
    var vm=this;
    var getResponse = {};
    param = param || null;
    vm._httpRequest = new XMLHttpRequest();
    vm._httpRequest.open("GET",url,true);
    vm._httpRequest.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
    vm._httpRequest.responseType="json";
    vm._httpRequest.send(null);
    vm._httpRequest.onreadystatechange = function(){
        if(vm._httpRequest.DONE === 4){
                if(vm._httpRequest.status === 200){
                    getResponse.data = vm._httpRequest.response;
                    getResponse.status=vm._httpRequest.status;
                    getResponse.responseType = vm._httpRequest.responseType;
                    callback.apply(vm,[getResponse]);
                }
            }
    }
}

/**
  * post
  */
ajaxService.prototype.post = function(url,param,callback){
    var vm = this;
    var postResponse={};
    param = param || "test";
    vm._httpRequest = new XMLHttpRequest();
    vm._httpRequest.open("POST",url,true);
    // set the header
    vm._httpRequest.setRequestHeader("Content-Type","application/json");
    vm._httpRequest.responseType="json";
    vm._httpRequest.send(JSON.stringify(param));
    vm._httpRequest.onreadystatechange = function(){
            if(vm._httpRequest.DONE === 4){
                if(vm._httpRequest.status === 200){
                     postResponse.data=vm._httpRequest.response;
                     postResponse.status =vm._httpRequest.status;
                     postResponse.responseType = vm._httpRequest.responseType;
                    callback.apply(vm,[postResponse]);
                 }
            }
    }
 }
            
        
