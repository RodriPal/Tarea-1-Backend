let users = [
    {
        id: 1,
        name: "Rodrigo",
        lastname: "Paliza",
        dni: 35195774,
    },
    {
        id: 2,
        name: "Antonella",
        lastname: "Olivieri",
        dni: 35520520,
    },
    {
        id: 3,
        name: "Hugo",
        lastname: "Paliza",
        dni: 12123456,
    },
    {
        id: 4,
        name: "Teresa",
        lastname: "Cuartero",
        dni: 12234567,
    }
]

const getUsers = (req, res) => {
    res.status(200).send(users);
  };
  
const createUser = (req, res) => {
    const newUser = { ...req.body, id: users.length + 1 };
    users.push(newUser);
  
    res.status(201).send(users);
};
  
const updateUser = (req, res) => {
    const newData = req.body;
    const userUpdate = users.find(
      (users) => users.id === parseInt(req.params.id)
    );
  
    if (!userUpdate) {
      return res
        .status(404)
        .json({ message: "Usuario no actualizado inexistente" });
    }
  
    users = users.map((u) =>
      u.id === parseInt(req.params.id) ? { ...u, ...newData } : u
    );
  
    res.status(201).send("Usuario actualizado correctamente");
};
  
const deleteUser = (req, res) => {
    const userDel = users.find((users) => users.id === parseInt(req.params.id));
  
    if (!userDel) {
      return res
        .status(404)
        .json({ message: "Usuario no eliminado inexistente" });
    }
    users = users.filter((u) => u.id !== parseInt(req.params.id));
  
    res.status(201).send("Usuario eliminado");
};

module.exports = {
    getUsers,
    createUser,
    updateUser,
    deleteUser
}