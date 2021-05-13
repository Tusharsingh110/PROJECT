console.log("CONNECTED!!");

// check off specific to do list when done
$("ul").on("click","li",function()
    {
        $(this).toggleClass("completed");
    });

    // Click on X to delete todos
    $("ul").on("click","span",function(event){
       // alert("Clicked on span!!");
        $(this). parent().fadeOut(500,function(){
            $(this).remove();                               // this $ this in this line is different from the $ this two lines above
        });
        event.stopPropagation();
    });
    $("input[type='text']").keypress(function(event){
        //console.log("Key press");
        if(event.which === 13 ){
          //  console.log("You hit enter");
          // grabbing todo item using this.val() 
          var todoitem = $(this).val() ;
          $(this).val("");
          // create a new li and add to ul
          $("ul").append("<li><span> <i class='fas fa-trash-alt'></i> </span> " + todoitem + "</li>");
        }
    });

    $(".fa-plus").click(function(){
        $("input[type='text']").fadeToggle();  
    });
/*
                                    EVENT BUBBLING
    $("ul").click(function(){
        alert("Clicked on ul!!");
    });


    $("#container").click(function(){
        alert("Clicked on div container!!");
    });


    $("body").click(function(){
        alert("Clicked on body!!");
    }); 
    */
/*  
  THE CODE BELOW DOES THE SAME THING AS LINE 6 DOES
    // if li is gray
    //  console.log($(this).css("color"));
    if($(this).css("color") === "rgb(128, 128, 128)"){
        //console.log("It's already gray");
        $(this).css({
            color : "black",
            textDecoration : "none", 
        });
    }
    //turn it black
    else {
    $(this).css({
        color : "gray",
        textDecoration : "line-through", 
    });
    }
  //  $(this).css("color","gray");
     //  $(this).css("text-decoration","line-through");

    // Above object nested inside js query do the same job as the the two lines above this comment

    */