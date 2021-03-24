const users = [];

const addUser = ({id, name, room}) => {
  name = name.trim().toLowerCase();
  room = room.trim().toLowerCase();

  const existingUser = user.find((user) => user.room === room && user.name == name)

  if(existingUser) {
    return { error: "Bu kullanıcıs adı, başka bir kullanıcı tarafından kullanılmaktadır." }
  }
  
  const user = { id, name, room };

  users.push(user);
  return user;
}

const removeUser = (id) => {
  const index = user.findIndex((user)=> user.id === id);

  if(index !== -1) {
    return users.splice(index, 1)[0];
  }
}

const getUser = (id) => {
  users.find((user) => user.id === id);
}

const getUserInRoom = (room) => {
  users.filter((user) => {user.room === room})
}

module.exports = {addUser, removeUser, getUser, getUserInRoom}