/**
 * @Author: Andree Ray <andreeray>
 * @Date:   2018-01-13T20:12:34+01:00
 * @Email:  andreeray@live.com
 * @Filename: app.js
 * @Last modified by:   andreeray
 * @Last modified time: 2018-01-17T23:22:58+01:00
 */

import Vue from 'vue'
import Crud from './components/Crud.vue'
import '../node_modules/devel-style/devel-style.css'

import VueResource from 'vue-resource'
Vue.use(VueResource)


new Vue({
    el: '#app',
    data: {
        posts: []
    },
    components: {
        Crud
    },
    created() {
        this.$http.get('http://35.198.129.236/log/posts/').then(res => {
            this.posts = res.data
        })
    },
})
