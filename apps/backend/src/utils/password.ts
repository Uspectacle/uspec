import * as bcrypt from 'bcryptjs'

const saltRounds = 10

const encryptPassword = (password) => {
  return bcrypt.hashSync(password, saltRounds)
}

const checkPassword = (clearPassword, hashedPassword) => {
  return bcrypt.compareSync(clearPassword, hashedPassword)
}

export default { encryptPassword, checkPassword }
