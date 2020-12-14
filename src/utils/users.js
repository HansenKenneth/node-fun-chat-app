const users = []

// addUser, removeUser, getUser, getUsersInRoom

const addUser = ({ id, username }) => {
    // Clean the data
    username = username.trim().toLowerCase()

    // Validate the data
    if (!username) {
        return {
            error: 'Username are required!'
        }
    }

    // Check for existing user
    const existingUser = users.find((user) => {
        return user.username === username
    })

    // Validate Username
    if (existingUser) {
        return {
            error: 'User already exists!'
        }
    }

    // Store user
    const user = { id, username }
    users.push(user)
    return { user }
}

const removeUser = (id) => {
    const index = users.findIndex((user) => user.id === id)
    
    if (index !== -1) {
        return users.splice(index, 1)[0]
    }
}

const getUser = (id) => {
    return users.find((user) => user.id === id)
}

const getUsersInRoom = (room) => {
    return users.filter((user) => user.room === room)
}

module.exports = {
    addUser,
    removeUser,
    getUser,
    getUsersInRoom
}