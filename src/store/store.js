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
    if (key == undefined || typeof key != "string") {
      throw new Error(`\r\n[Store][GET] --> ${key}\r\n --> [Params Error]`);
    } else {
      if (this.state[key] == undefined) {
        if (this.debug) {
          throw new Error(`\r\n[Store][GET] --> ${key}\r\n --> [Undefined]`);
        }
      } else {
        if (this.debug) {
          console.log(`[Store][GET] --> ${key} --> ${this.state[key]}`);
        }
      }
      return this.state[key];
    }
  },
  set(key = null, value = null) {
    if (key !== null && value !== null && typeof key == "string") {
      this.state[key] = value;
    } else {
      if (this.debug) {
        console.error(`[Store][SET] --> ${key}\r\n <-- [Params Error]`);
      }
      return undefined;
    }
  },
};
export default store;
