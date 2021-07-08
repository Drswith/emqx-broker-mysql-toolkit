/*
 * @Author: Drswith
 * @Date: 2021-07-08 20:29:49
 * @LastEditors: Drswith
 * @LastEditTime: 2021-07-08 21:00:03
 * @FilePath: \emqx-broker-mysql-toolkit\src\store\store.js
 */
let store = {
  debug: true,
  state: {
    mainCurrentView: 0,
    setupCurrentView: 0,
  },
  get(key = undefined) {
    if(key == undefined){
      // console.error(`[Store][GET] --> ${key}\r\n <-- [Params Error]`);
      throw new Error(`[Store][GET] --> ${key}\r\n <-- [Params Error]`)
    }
    if (this.state[key] == undefined) {
      if (this.debug) {
        console.error(`[Store][GET] --> ${key}\r\n <-- [Undefined]`);
      }
      return undefined
    } else {
      if (this.debug) {
        console.log("[Store][GET] --> ", key);
        console.log(" <-- ", this.state[key]);
      }
      return this.state[key];
    }
  },
  set(params = {}) {
    const { key = null, value = null } = params;
    if (key!== null && value !== null) {

    }else {
      if (this.debug) {
        console.error(`[Store][SET] --> ${key}\r\n <-- [Params Error]`);
      }
      return undefined
    }
  },
};

export default store;
