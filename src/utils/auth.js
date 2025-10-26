// src/utils/auth.js

const AUTH_KEY = 'ticket_app_user'

/**
 * Save user data to localStorage
 * @param {Object} user - User object { id, name, email, token }
 */
export function saveUser(user) {
  localStorage.setItem(AUTH_KEY, JSON.stringify(user))
}

/**
 * Retrieve current logged-in user
 * @returns {Object|null}
 */
export function getUser() {
  const user = localStorage.getItem(AUTH_KEY)
  return user ? JSON.parse(user) : null
}

/**
 * Check if user is logged in
 * @returns {boolean}
 */
export function isLoggedIn() {
  return !!getUser()
}

/**
 * Remove user from localStorage (logout)
 */
export function logoutUser() {
  localStorage.removeItem(AUTH_KEY)
}

/**
 * Simulate user authentication (mock login)
 * @param {string} email
 * @param {string} password
 * @returns {Object|null}
 */
export function loginUser(email, password) {
  // Example mock users
  const mockUsers = [
    { id: 1, name: 'Admin', email: 'admin@example.com', password: '123456' },
    { id: 2, name: 'User', email: 'user@example.com', password: '123456' }
  ]

  const found = mockUsers.find(u => u.email === email && u.password === password)
  if (found) {
    const userData = {
      id: found.id,
      name: found.name,
      email: found.email,
      token: Math.random().toString(36).substring(2)
    }
    saveUser(userData)
    return userData
  }
  return null
}

/**
 * Register a new user (mock signup)
 * @param {Object} newUser - { name, email, password }
 * @returns {Object}
 */
export function signupUser(newUser) {
  const userData = {
    id: Date.now(),
    name: newUser.name,
    email: newUser.email,
    token: Math.random().toString(36).substring(2)
  }
  saveUser(userData)
  return userData
}
