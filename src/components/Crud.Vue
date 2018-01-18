<!--
@Author: Andree Ray <andreeray>
@Date:   2018-01-16T14:49:56+01:00
@Email:  andreeray@live.com
@Filename: Crud.Vue
@Last modified by:   andreeray
@Last modified time: 2018-01-16T15:01:13+01:00
-->

<template>
    <div>
        <crud-form :posts="posts"></crud-form>
    </div>
</template>

<script>
import CrudForm from './CrudForm.vue'


export default {
    props: [ 'posts' ],
    components: {
        CrudForm
    }
}
</script>
