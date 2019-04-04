var queries = ["Lakers","Bulls","Rockets","Warriors"];
      
            
       
      

        $("button").on("click",function(event){
          event.preventDefault();
           
            var x = $(this).data("search");
            

            var queryURL = "http://api.giphy.com/v1/gifs/search?q="+x+"&api_key=oJwwFulSpIoCqiS9Z8lYPu1eMzv44zeU&limit=8";
        

            $.ajax({url:queryURL,method: 'GET'})
         .done(function(response){
             
             for(var i=0;i<response.data.length;i++){ 
             $("#Gifarea").prepend("<p>Rating"+response.data[i].rating+"</p>");
             $("#Gifarea").prepend("<img src='"+response.data[i].images.downsized.url+"'>");
            }
               
           
         });
        })
//tried make  a function to add buttons but was unsucessful 

                 function renderButtons(){
                   $("#heart-view").empty();
                   
                  for(var i=0;i<response.data.length;i++){
                    var a = $("<button>");
                      console.log(i);
                   a.addClass("btn btn-primary");
                   a.attr("search",response[i]);
                   a.text(response[i]);
                  $("#hearts-view").append(a);
                  const button2 = $("<button>").addClass('btn btn-primary')
                                                .attr('search',response[i])
                                                .text(response[i]);
                  $("#hearts-view").append(a);
                }
                }

               $("add-heart").on("click",function(event){
                 event.preventDefault();
                  var a= $("heart-input").val().trim();
                  queries.push(queries);
                  renderButtons();
                });  

                $(document).on("click","btn btn-primary",);
                renderButton();