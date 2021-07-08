/*
 * @Author: Drswith
 * @Date: 2021-06-27 18:05:51
 * @LastEditors: Drswith
 * @LastEditTime: 2021-06-27 21:55:21
 * @FilePath: \emqx-broker-mysql-gadget\vite.config.js
 */
const { createVuePlugin } = require('vite-plugin-vue2');
const {resolve} = require('path')

module.exports = {
  plugins: [createVuePlugin()],
  resolve:{
    alias:[
      { find: '@', replacement: resolve(__dirname, 'src') }
    ]
  }
};
