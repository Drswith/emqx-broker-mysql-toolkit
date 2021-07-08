/*
 * @Author: Drswith
 * @Date: 2021-06-29 21:02:13
 * @LastEditors: Drswith
 * @LastEditTime: 2021-06-29 21:03:39
 * @FilePath: \emqx-broker-mysql-gadget\src\utils\utils.js
 */
/**
 * @description: 将以flag连接的字符串改为空格，并首字母大写
 * @param {*} s
 * @param {*} flag
 * @return {*}
 */
export function titleCase(s,flag) {
  return s.toLowerCase().split(flag).map(function(item, index) {
      return item.slice(0, 1).toUpperCase() + item.slice(1);
  }).join(' ');
}