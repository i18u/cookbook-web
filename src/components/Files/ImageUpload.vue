<template>
	<div class="image-upload">
		<div class="image-upload-inner">
			<div class="image-upload-overlay" @click="onClick">
				<div class="image-upload-overlay-text">
					Upload File
				</div>
			</div>
			<div class="image-preview-container">
				<img class="image-preview" :src="imageUrl" :alt="imageText"/>
			</div>
			<input ref="imageField" class="image-upload-input-field" type="file" accept="image/*" @change="onFileChange" />
		</div>
	</div>
</template>

<script>
import { Files } from '@/apis/files';

export default {
	name: 'image-upload',
	props: {
		placeholderUrl: String,
		placeholderText: String,
	},
	data() {
		return {
			imageUrl: this.placeholderUrl,
			imageText: this.placeholderText,
		};
	},
	methods: {
		onClick(evts) {
			const me = this;
			me.$emit('click');
			me.$refs.imageField.click(evts);
		},
		async onFileChange() {
			const me = this;
			const element = this.$refs.imageField;
			const formData = new FormData();

			if (element.files.length !== 1) {
				return;
			}

			formData.append('file', element.files[0]);

			Files.create(formData)
				.then((response) => {
					var { location } = response.data;
					
					me.imageUrl = location;
					me.$emit("saved", { location, target: me });
				})
				.catch((response) => {
					// eslint-disable-next-line
					console.log(response);
				});
		}
	},
};
</script>

<style scoped>
.image-upload {
	display: block;
}

.image-upload-inner {
	position: relative;
	width: 100%;
	height: 100%;
}

.image-preview-container {
	width: 100%;
	height: 100%;
	text-align: center;
}

.image-preview {
	display: block;
	max-height: 100%;
	max-width: 100%;
	margin: auto;
}

.image-upload-overlay {
	position: absolute;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	opacity: 0;
	background-color: rgba(0, 0, 0, 0.4);
}

.image-upload-overlay:hover {
	opacity: 1;
	transition: background-color 0.4s ease;
}

.image-upload-input-field {
	display: none;
}

.image-upload-overlay-text {
	position: absolute;
	left: 0;
	bottom: 0;
	height: 30px;
	line-height: 30px;
	width: 100%;
	color: #fff;
	text-align: center;
	background-color: rgba(0, 0, 0, 0.8);
}
</style>