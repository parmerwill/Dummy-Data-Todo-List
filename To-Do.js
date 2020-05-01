let arrayOfTodos = [
  {
  "userId": 14,
  "id": 1,
  "title": "delectus aut autem",
  "completed": false
  },
   {
     "userId": 20,
     "id": 2,
     "title": "delectus aut autem",
     "completed": false
   }]

   const fetchTodos = () => {
     fetch('https://jsonplaceholder.typicode.com/todos/?_limit=10')
     .then(response => response.json())
     .then(data => arrayOfTodos = data)
   }

   const logTodos = () => {
     console.log(arrayOfTodos)
   }

  //  const populateTodos = () => {

  //  }
   console.log(arrayOfTodos[0].title) 
   console.log(arrayOfTodos[1].title) 
   
   
   function populateTodos () { 
    // create a new div element
    for(let I=0; I < arrayOfTodos.length; I++){
      var newDiv = document.createElement("li"); 
    // and give it some content 
    var newContent = document.createTextNode(arrayOfTodos[I].title); 
    // add the text node to the newly created div
    newDiv.appendChild(newContent);  
    // add the newly created element and its content into the DOM 
    var currentDiv = document.getElementById("todo-list"); 
    document.body.insertBefore(newDiv, currentDiv);
    }
     
  }