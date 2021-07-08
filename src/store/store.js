let store = {
  debug: true,
  state: {
    mainCurrentView: 0,
    setupCurrentView: 0,
  },
  get(key) {
    if (this.state[key] == undefined) {
      return new Error("不存在");
    } else {
      if (this.debug) {
        console.log("[Store][GET] --> ", key);
        console.log(" <-- ", this.state[key]);
      }
      return this.state[key];
    }
  },
  set(params) {
    const { key = null, value = null } = params;
    if (key!== null && value !== null) {
    }
    return new Error("不存在");
  },
};

export default store;
