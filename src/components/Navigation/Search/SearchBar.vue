<template>
    <div class="search-bar">
        <div class="search-input-container">
            <input class="search-input" type="text" :placeholder="placeholder"/>
        </div>
        <div class="search-button-container">
            <button class="search-button">Go!</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'search-bar',
    props: {
        placeholder: String
    }
}
</script>

<style>
@import url('./SearchBar.css');
</style>