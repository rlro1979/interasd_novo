export function saveUserToStorage(user, token) {
    localStorage.setItem('user', JSON.stringify(user))
    localStorage.setItem('token', token)
}

export function getUserFromStorage() {
    const user = JSON.parse(localStorage.getItem('user'))
    const token = localStorage.getItem('token')
    return { user, token }
}

export function clearUserFromStorage() {
    localStorage.removeItem('user')
    localStorage.removeItem('token')
}
