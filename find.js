function findUserByUsername(arr, username) {
    return arr.find(function(user){
      return user.username === username;
    })
  }
  
  const users = [
    {username: 'mlewis'},
    {username: 'akagen'},
    {username: 'msmith'}
  ];
  
  
  //findUserByUsername(users, 'mlewis') // {username: 'mlewis'}
  findUserByUsername(users, 'taco') // undefined
  
  
  
  function removeUser(arr, username) {
    let found = arr.findIndex(function(user){
      return user.username === username;
    })
    if(found === -1) return;
  
    return arr.splice(foundIndex,1)[0];
  }
  const users = [
    {username: 'mlewis'},
    {username: 'akagen'},
    {username: 'msmith'}
  ];
  
  removeUser(users, 'akagen') // {username: 'akagen'}
  removeUser(users, 'akagen') // undefined
  