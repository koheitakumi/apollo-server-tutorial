const { DataSource } = require("apollo-datasource");
const bcrypt = require("bcrypt");

class UserDb extends DataSource {
  constructor({ store }) {
    super();
    this.store = store;
  }

  /**
   * This is a function that gets called by ApolloServer when being setup.
   * This function gets called with the datasource config including things
   * like caches and context. We'll assign this.context to the request context
   * here, so we can know about the user making requests
   */
  initialize(config) {
    this.context = config.context;
  }

  async findUser({ email: emailArg }) {
    const email =
      this.context && this.context.user ? this.context.user.email : emailArg;
    if (!email) return null;

    const users = await this.store.User.query().where("email", email);
    return users && users[0] ? users[0] : null;
  }

  async createUser({ name, email, password }) {
    if (!name || !email || !password) {
      throw new Error("Argument error");
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await this.store.User.query().insert({
      name,
      email,
      password: hashedPassword,
    });
    console.log("newUser", newUser);
    return newUser;
  }
}

module.exports = UserDb;
