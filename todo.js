console.log("Connected!");
var todos = [];



while (input !== "quit"){
    var input = prompt("What would you like to do?");

    if (input === "list") {
        var i = todos.length;
        var j = 0;
        console.log("*********");
        while(j < i){
        console.log(j + " : " + todos[j]);
        j=j+1;
    }
        console.log("*********");
    }
    else if ( input === "new")
    {
        // ask for a task to add to the list
  var newtodo = prompt("What would you like to add to the list?");
  // add todo to the array
  console.log(newtodo + " added to the list");
  todos.push(newtodo);
    }
    else if(input === "remove"){
        var index = prompt("Enter the index of a todo to remove from the list.");
        todos.splice(index,1);
    }
    if ( input === "quit"){
    console.log("You quit the app!!");
    }
}