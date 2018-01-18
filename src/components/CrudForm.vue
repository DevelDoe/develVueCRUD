<!--
@Author: Andree Ray <andreeray>
@Date:   2018-01-13T21:50:46+01:00
@Email:  andreeray@live.com
@Filename: Home.vue
@Last modified by:   andreeray
@Last modified time: 2018-01-18T15:34:28+01:00
-->
<template>
    <div>
        <div v-if="state === 'idle'">
            <button @click="setState('set-title')">Create New Post</button>
        </div>
        <div id="edit">
            <form v-on:submit.prevent="onSubmit">
                <div v-if="state === 'set-title'">
                    <div>
                        <input type="text" name="title" placeholder="title placeholder" v-model="post.title">
                        <button @click="setState('set-body')">add title</button>
                    </div>
                </div>

                <div v-if="state === 'set-body'">
                    <div>
                        <textarea  name="body" v-model="post.body"></textarea>
                        <button @click="setState('set-summary')">add body</button>
                    </div>
                </div>

                <div v-if="state === 'set-summary'">
                    <div>
                        <textarea name="summary" placeholder="summary placeholder" v-model="post.summary"></textarea>
                        <button @click="setState('set-meta')">add summary</button>
                    </div>
                </div>

                <div v-if="state === 'set-meta'">
                    <div><input type="text" name="categories" placeholder="categories placeholder" v-model="post.categories"></div>
                    <div><input type="text" name="tags" placeholder="tags placeholder" v-model="post.tags"></div>
                    <div>
                        <label for="published">Published:</label>
                        <input id="published" type="checkbox" name="published" placeholder="published placeholder" v-model="post.published">
                    </div>
                    <div>
                        <button v-if="updating" @click="setState('idle')">UPDATE</button>
                        <button v-else @click="setState('idle')">Save</button>
                    </div>
                </div>
            </form>
        </div>
        <div id="posts-table">
            <table>
                <tr>
                    <th>title</th>
                    <th>published</th>
                    <th>Update</th>
                    <th>Delete</th>
                </tr>
                <tr v-for="(post, index) in posts">
                    <td>{{ post.title }}</td>
                    <td v-if="post.published">✓</td><td v-else> </td>
                    <td v-on:click.prevent="onEdit(post._id, index)"><a>✎</a></td>
                    <td v-on:click.prevent="onDelete(post._id, index)"><a>✗</a></td>
                </tr>
            </table>
        </div>
    </div>
</template>

<script>
export default {
    props: [ 'posts' ],
    data() {
        return {
            state: 'idle',
            updating: false,
            updateIndex: 0,
            post: {
                title: '',
                summary: '',
                body: '',
                categories: '',
                tags: '',
                published: false
            }
        }
    },
    methods: {
        setState (state) {
            this.state = state
        },
        onSubmit () {
            if (this.state === 'idle') {
                if (this.updating) {
                    this.onUpdate(this.post._id)
                    return
                }
                this.$http.post('http://35.198.129.236/log/posts/', {
                    title: this.post.title,
                    summary: this.post.summary,
                    body: this.post.body,
                    categories: this.post.categories,
                    tags: this.post.tags,
                    published: this.post.published
                })
                .then(function (response) {
                    console.log(response);
                    this.posts.push(this.post)
                    this.post = {
                        title: '',
                        summary: '',
                        body: '',
                        categories: '',
                        tags: '',
                        published: false
                    }
                })
                .catch(function (error) {
                    console.log(error);
                })
            }
        },
        onEdit (id, index) {
            this.state = 'set-title'
            this.updating = true
            this.updateIndex = index
            this.post = this.posts[index]
            this.post._id = id
        },
        onUpdate (id) {
            this.state = 'idle'
            this.updating = false
            this.$http.put(`http://35.198.129.236/log/posts/${id}`, {
                title: this.post.title,
                summary: this.post.summary,
                body: this.post.body,
                categories: this.post.categories,
                tags: this.post.tags,
                published: this.post.published
            })
            .then(function (response) {
                console.log(response);
                this.posts[this.updateIndex] = this.post
                this.post = {
                    title: '',
                    summary: '',
                    body: '',
                    categories: '',
                    tags: '',
                    published: false
                }
            })
            .catch(function (error) {
                console.log(error);
            })
        },
        onDelete (id, index) {
            this.$http.delete(`http://35.198.129.236/log/posts/${id}`, {

            })
            .then(function (response) {
                console.log(response);
                this.posts.splice(index, 1)
            })
            .catch(function (error) {
                console.log(error);
            });
        }
    }
}
</script>
