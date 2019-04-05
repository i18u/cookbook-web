<template>
    <nav class="navigation-bar">
        <SearchBar placeholder="Ingredients, recipes, and more..."/>
    </nav>
</template>

<script>
import SearchBar from './Search/SearchBar.vue'
export default {
    name: 'navigation-bar',
    components: {
        SearchBar
    },
    props: {}
}
</script>

<style>
@import url("./NavigationBar.css");
</style>