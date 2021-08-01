const users = [
    {
        id: 1,
        name: "John",
        age: 20
    },
    {
        id: 2,
        name: "George",
        age: 17
    },
    {
        id: 3,
        name: "Tim",
        age: 27
    },
    {
        id: 4,
        name: "Pete",
        age: 23
    },
    {
        id: 5,
        name: "Maria",
        age: 31
    },
    {
        id: 6,
        name: "Robert",
        age: 20
    },
    {
        id: 7,
        name: "David",
        age: 17
    },
    {
        id: 8,
        name: "Charles",
        age: 27
    },
    {
        id: 9,
        name: "Daniel",
        age: 23
    },
    {
        id: 10,
        name: "Paul",
        age: 31
    }
];

module.exports.getUsers = function (req, res) {
    res.status(200);
    res.send(users)
}

module.exports.getCurrentUser = function (req, res) {
    const id = +req.params.id
    res.status(200);
    const user = users.find(user => user.id === id)

    res.send(user === undefined ? `please enter the correct user id, there is no user with id ${id}` : user)
}

module.exports.addNewUser = function (req, res) {
    res.status(200);
    const data = req.body;
    data.id = users[users.length -1].id + 1;

    users.push(data)
    res.send(users)
}

module.exports.changeCurrentUser = function (req, res) {
    res.status(200);
    const pos = req.params.id - 1;
    const id = req.params.id;
    if ( req.body.id ) {
        req.body.id = id
    }
    users[pos] = {id: pos+1, ...req.body}

    res.send(users)
}

module.exports.deleteCurrentUser = function (req, res) {
    res.status(200);
    const id = req.params.id;

    res.send(deleteUser(id))
}

// function helper
function deleteUser(id) {
    id = id - 1
    return users.splice(id, 1);
}