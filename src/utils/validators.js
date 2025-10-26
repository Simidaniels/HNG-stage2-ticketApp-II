// src/utils/validators.js

/**
 * Validate email format
 * @param {string} email
 * @returns {string|null} Error message or null if valid
 */
export function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!email) return 'Email is required.'
  if (!regex.test(email)) return 'Please enter a valid email address.'
  return null
}

/**
 * Validate password strength (basic)
 * @param {string} password
 * @returns {string|null}
 */
export function validatePassword(password) {
  if (!password) return 'Password is required.'
  if (password.length < 6)
    return 'Password must be at least 6 characters long.'
  return null
}

/**
 * Validate name field (used in signup)
 * @param {string} name
 * @returns {string|null}
 */
export function validateName(name) {
  if (!name || name.trim() === '') return 'Full name is required.'
  return null
}

/**
 * Validate ticket fields
 * @param {Object} ticket - { title, status, description }
 * @returns {Object} - { title?: string, status?: string, description?: string }
 */
export function validateTicket(ticket) {
  const errors = {}

  if (!ticket.title || ticket.title.trim() === '') {
    errors.title = 'Title is required.'
  } else if (ticket.title.length < 3) {
    errors.title = 'Title must be at least 3 characters.'
  }

  const validStatuses = ['open', 'in_progress', 'closed']
  if (!ticket.status) {
    errors.status = 'Status is required.'
  } else if (!validStatuses.includes(ticket.status)) {
    errors.status = 'Invalid status. Must be open, in_progress, or closed.'
  }

  if (ticket.description && ticket.description.length > 300) {
    errors.description = 'Description must be less than 300 characters.'
  }

  return errors
}

/**
 * Generic form validator
 * @param {Object} fields - key-value pair of field names and their values
 * @param {Object} rules - key-value pair of validation functions
 * @returns {Object} - errors object
 */
export function validateForm(fields, rules) {
  const errors = {}
  for (const key in rules) {
    const error = rules[key](fields[key])
    if (error) errors[key] = error
  }
  return errors
}
