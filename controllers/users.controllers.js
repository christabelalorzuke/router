const getUsers = (req, res) => {
    res.status(200).send("You message has been saved");
}

const createUser = (req, res) => {
    res.status(201).send("You message has been created");
}

const updateUser = (req, res) => {
    res.status(200).send("You message has been updated");
}

const deleteUser = (req, res) => {
    res.status(200).send("You message has been deleted");
}

module.exports = {
    getUsers,
    createUser,
    updateUser,
    deleteUser,
};