import { v4 as uuidv4 } from 'uuid';

let users = [];

export const creatUser = (req, res) => {
    const user = req.body;

    const userId = uuidv4();

    const userWithId = { ...user, id: userId };

    users.push(userWithId)
    res.send(`User with the name ${user.firstname} added to the database`);
}

export const getUsers = (req, res) => {
    console.log(users);
    res.json(users);
}

export const getUser = (req, res) => {
    const { id } = req.params;

    const foundUser = users.find((users) => users.id === id);

    res.send(foundUser);
}
export const deleteUser = (req, res) => {
    const { id } = req.params;

    users = users.filter((users) => users.id != id);

    res.send(`User with the id ${id} deleted from the database`);
}
export const patchUser = (req, res) => {
    const { id } = req.params;

    const { firstname, lastname, age } = req.body;

    const user = users.find((users) => users.id === id);

    if (firstname) user.firstname = firstname;
    if (lastname) user.lastname = lastname;
    if (age) user.age = age;

    res.send(`Use with the id ${id} has been updated`);
}