<template>
  <div class="ingredients page-container">
    <div class="heading-wrapper">
      <h1>Ingredients</h1>
      <router-link class="add-ingredient-button" to="/ingredients/add">
        <img src="/assets/icons/add-white.svg" />
      </router-link>
    </div>
    <div class="router-wrapper">
      <router-view></router-view>
    </div>
    <div class="ingredients-wrapper" v-if="!ingredientsLoaded">
      <div class="ingredient-loader-wrapper">
        <LoopingRhombusesSpinner :animation-duration="2500" :rhombus-size="20" color="#ff8080" />
      </div>
    </div>
  </div>
</template>

<script>
import { LoopingRhombusesSpinner } from 'epic-spinners';
import { MockApi } from '@/apis/ingredients';

export default {
  name: 'ingredient-page',
  props: {},
  components: {
    LoopingRhombusesSpinner,
  },
  async created() {
    const me = this;
    me.api.get().then((data) => {
      me.ingredients = data;
      me.ingredientsLoaded = true;
    });
  },
  data() {
    return {
      ingredients: [],
      ingredientsLoaded: false,
      api: MockApi,
    };
  },
  methods: {
    addIngredientClicked() {

    },
  },
};
</script>

<style>
  .ingredients {
    font-family: 'Lato', sans-serif;
  }

  .heading-wrapper {
    height: 60px;
    display: grid;
    line-height: 60px;
    grid-template-columns: auto 60px;
  }

  .heading-wrapper h1 {
    margin: 0;
  }

  .add-ingredient-button {
    display: block;
    width: 60px;
    height: 60px;
    line-height: 60px;
    text-align: center;
    background: none;
    border: none;
    box-sizing: border-box;
    cursor: pointer;
    margin: 0;
    padding: 0;
    -webkit-tap-highlight-color:  rgba(255, 255, 255, 0);
    border-radius: 5px;
    background-color: #22a7f0;
  }

  button {
    user-select: none;
    -moz-user-select: -moz-none;
    -webkit-user-select: none;
  }

  .add-ingredient-button img {
    position: relative;
    top: 5px;
    width: 50px;
    height: 50px;
  }

  .add-ingredient-button:focus, .add-ingredient-button:active {
    outline: none;
    padding: 0;
    margin: 0;
  }
</style>
