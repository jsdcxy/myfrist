/* ============
 * Axios
 * ============
 *
 * Promise based HTTP client for the browser and node.js.
 * Because Vue Resource has been retired, Axios will now been used
 * to perform AJAX-requests.
 *
 * https://github.com/mzabriskie/axios
 */

import Vue from 'vue'
import Axios from 'axios'

Axios.defaults.baseURL = process.env.apiRoot
Axios.defaults.headers.common.Accept = 'application/json'
Axios.defaults.withCredentials = true
// Bind Axios to Vue.
Vue.$http = Axios
// Object.defineProperty(Vue.prototype, '$http', {
//   get () {
//     return Axios
//   }
// })
