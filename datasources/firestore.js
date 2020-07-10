const { DataSource } = require("apollo-datasource");

class Firestore extends DataSource {
  constructor({ store }) {
    super();
    this.firestore = store.firestore;
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

  async getTestData() {
    return this.firestore
      .collection("test")
      .get()
      .then((snap) => {
        const items = [];
        snap.forEach((doc) => {
          items.push(doc.data());
        });
        return items;
      });
  }

  async addTestData({ id, name }) {
    const docRef = await this.firestore.collection("test").add({ id, name });
    return docRef.id;
  }
}

module.exports = Firestore;
