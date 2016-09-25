console.log('Loaded!');

var button =documnet.getElmentById('counter');


button.onclick = function(){
    var request = new XMLHttpRequest();
    
    request.onreadystatechange = function(){
        
        if (request.readyState === XMLHttpRequest.DONE){
            
            if (request.status === 200){
                var counter = request.responseText;
                var span = documnet.getElementById('count');
                span.innerHTML = counter.toString();
            }
        }
    }


    request.open('GET','http://allanjojoa.imad.hasura-app.io/counter');
    request.send(null);
};
