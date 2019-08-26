<template>
	<div class="ingredient-tile">
		<img class="tile-image" :src="imageUrl"/>
		<div class="tile-info">
			<span>
				<span class="tile-name">{{ name }}</span><br/>
				<span class="tile-description">{{ description }}</span>
			</span>
		</div>
	</div>
</template>

<script>
export default {
	name: "IngredientTile",
	props: { 
		ingredient: Object,
	},
	data() {
		var { name, description, imageUrl } = this.ingredient;

		return {
			name,
			description,
			imageUrl,
		};
	},
};
</script>

<style>
.ingredient-tile {
	width: 450px;
	height: 300px;
	position: relative;
	margin: 1em;
	display: inline-block;
}

.ingredient-tile .tile-image {
	width: 100%;
	height: 100%;
}

.ingredient-tile .tile-info {
	position: absolute;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	max-width: 100%;
	max-height: 100%;
	opacity: 0;
	transition: opacity 0.2s ease;
	background-color: transparent;
	text-align: right;
	color: #fff;
	display: flex;
	align-items: center;
	justify-content: flex-end;
	padding: 20px;
	box-sizing: border-box;
}

.ingredient-tile .tile-info:hover {
	opacity: 1;
	background-color: rgba(0, 0, 0, 0.6);
}

.tile-name {
	font-size: 3em;
	text-transform: lowercase;
}

.tile-description {
	font-size: 1.2em;
}
</style>