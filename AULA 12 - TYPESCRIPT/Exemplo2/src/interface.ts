interface Todo {
    title: string;
    description: string;
  }
  
  const todo1 = {
    title: "organize desk",
    description: "clear clutter",
  };
  
  function teste(todo: Todo){
      console.log(todo.title);
      console.log(todo.description);
  }
  
  teste(todo1);