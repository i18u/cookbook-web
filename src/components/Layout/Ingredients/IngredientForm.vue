<template>
	<div class="ingredient-form-shadow">
		<div class="ingredient-form-modal">
			<div class="ingredient-form-inner">
				<div class="ingredient-item-wrapper">
					<h1 class="modal-title">Add Ingredient</h1>
					<form class="ingredient-form">
						<div class="left-aside aside">
							<div class="form-set">
								<input v-model="ingredientName" class="ingredient-input" placeholder="Ingredient name" name="ingredientName"/>
							</div>
							<div class="form-set">
								<textarea v-model="ingredientDescription" :style="textareaStyle" class="ingredient-input" placeholder="Ingredient description" name="ingredientDescription"></textarea>
							</div>
							<div class="form-set tags">
								<vue-tags-input placeholder="Tags" ref="tagInput" v-model="tag" :tags="tags" :autocomplete-items="autocompleteTags" @tags-changed="onTagsChanged" />
								<button type="button" class="add-tag-button">
									<img class="add-tag-icon" src="/assets/icons/add-white.svg" />
								</button>
							</div>
							<div class="buttons">
								<button class="flat-button save-ingredient-button" type="button" @click="onAddIngredientClick">Add Ingredient</button>
								<button class="flat-button cancel-button" type="button" @click="onCancelClick">Cancel</button>
							</div>
						</div>
						<div class="right-aside aside">
							<image-upload class="image-upload-input" placeholderUrl="/assets/icons/ingredients-black.svg" placeholderText="Ingredient" @saved="onImageSaved" />
						</div>
					</form>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import ImageUpload from '@/components/Files/ImageUpload.vue';
import VueTagsInput from '@johmun/vue-tags-input';
import { IngredientApi } from '@/apis/ingredients';

export default {
	name: "IngredientForm",
	data() {
		return {
			tag: '',
			ingredientName: '',
			ingredientDescription: '',
			ingredientImageLocation: '',
			unsaved: true,
			availableTags: [{
				text: "tangy"
			}, {
				text: "fruit"
			}, {
				text: "cornflakes"
			}, {
				text: "not-cornflakes"
			}],
			tags: [],
			api: IngredientApi,
		};
	},
	beforeRouteLeave(to, from, next) {
		if (!this.hasData() || !this.unsaved) {
			next();
			return;
		}

		var leave = window.confirm("You have unsaved changes; are you sure you want to leave?");

		next(leave);
	},
	components: {
		VueTagsInput,
		ImageUpload,
	},
	methods: {
		onTagsChanged(newTags) {
			this.tags = newTags;
		},
		async saveIngredient(ingredient) {
			await this.api.save(ingredient)
				.then(() => {
					this.unsaved = false;
				});
		},
		onImageSaved(evt) {
			this.ingredientImageLocation = evt.location;
		},
		onAddIngredientClick() {
			const ingredient = {
				name: this.ingredientName,
				description: this.ingredientDescription,
				tags: this.tags.map(tag => tag.text),
				img: this.ingredientImageLocation,
			};

			this.saveIngredient(ingredient)
				.then(() => {
					this.close();
				})
				.catch(() => {

				});
		},
		hasData() {
			const hasName = this.ingredientName.length > 0;
			const hasDescription = this.ingredientDescription.trim().length > 0;
			const hasTags = this.tags.length > 0;

			return hasName || hasDescription || hasTags;
		},
		onCancelClick() {
			this.close();
		},
		close() {
			this.$router.push({ path: '/ingredients' });
		}
	},
	computed: {
		autocompleteTags() {
			return this.availableTags.filter(tag => {
				return tag.text.toLowerCase().indexOf(this.tag.toLowerCase()) !== -1;
			});
		},
		textareaStyle() {
			if (this.ingredientDescription.length > 30) {
				return 'font-size: 1.2em;';
			}

			return '';
		}
	},
};
</script>

<style>
	.ingredient-form-shadow {
		position: fixed;
		left: 0;
		top: 0;
		bottom: 0;
		right: 0;
		background-color: rgba(0, 0, 0, 0.4);
	}

	.ingredient-form {
		display: flex;
		margin-top: 10px;
		max-height: calc(100% - 50px);
	}

	.aside {
		max-height: 100%;
	}

	.left-aside {
		flex-basis: 70%;
		margin-right: 5px;
	}

	.right-aside {
		flex-basis: 30%;
		margin-left: 5px;
		text-align: center;
	}

	.form-set {
		margin-bottom: 10px;
		clear: both;
	}

	.ingredient-form-modal {
		width: 80%;
		height: 37%;
		background-color: #eee;
		position: fixed;
		left: 0;
		bottom: 0;
		right: 0;
		top: 0;
		margin: auto;
	}

	.ingredient-form-inner {
		width: 100%;
		height: 100%;
		position: relative;
	}

	.modal-title {
		margin: 0;
	}

	.ingredient-item-wrapper {
		width: 100%;
		height: 100%;
		padding: 20px;
		box-sizing: border-box;
	}

	.vue-tags-input .ti-tag {
		background-color: #ff8080;
	}

	.ingredient-input {
		padding: 10px;
		border: 1px solid #ccc;
		font-family: 'Lato', sans-serif;
		box-sizing: border-box;
		width: 100%;
	}

	.ingredient-input:focus, .ingredient-input:active {
		outline: none;
	}

	.vue-tags-input {
		display: inline-block;
		vertical-align: middle;
		max-width: 100%!important;
		width: calc(100% - 48px); /* Account for button width */
	}

	.ingredient-input, .vue-tags-input .ti-new-tag-input, .vue-tags-input .ti-tag {
		font-size: 24px;
	}

	.add-tag-button {
		height: 100%;
		width: 48px;
		padding: 0;
		margin: 0;
		border-top: 1px solid #ccc;
		border-right: 1px solid #ccc;
		border-bottom: 1px solid #ccc;
		background: #ff8080;
		border-left: none;
		vertical-align: middle;
		box-sizing: border-box;
	}

	.add-tag-button:active, .add-tag-button:focus {
		outline: none;
	}

	.add-tag-icon {
		width: 100%;
		height: 100%;
	}

	.form-set.tags {
		vertical-align: middle;
		height: 48px;
	}

	textarea.ingredient-input {
		transition: font-size 0.5s ease;
		min-height: 100px;
	}

	.image-upload-input {
		max-width: 80%;
		width: 80%;
		max-height: 100%;
		height: 100%;
		margin: auto;
	}

	.flat-button {
		font-size: 1.2em;
		padding: 10px;
		background: none;
		border: none;
	}

	.save-ingredient-button {
		background-color: #22a7f0;
		color: #ffffff;
		border-radius: 5px;
	}

	.cancel-button {
		color: #616972;
		border: 1px solid #616972;
		border-radius: 5px;
		margin-left: 5px;
	}

	.buttons {
		text-align: right;
	}
</style>