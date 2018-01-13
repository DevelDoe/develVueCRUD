/**
 * @Author: Andree Ray <andreeray>
 * @Date:   2018-01-13T20:12:34+01:00
 * @Email:  andreeray@live.com
 * @Filename: app.js
 * @Last modified by:   andreeray
 * @Last modified time: 2018-01-13T22:08:43+01:00
 */

import Vue from 'vue'
import Home from './components/Home.vue'
import '../node_modules/devel-style/devel-style.css'


new Vue({
    el: '#app',
    data: {
        msg: 'Upp & Running With Vue'
    },
    components: {
        Home
    }
})
