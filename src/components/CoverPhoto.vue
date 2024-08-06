<template>
    <div>
        <input type="file" @change="onFileChange" />
        <div v-if="imageUrl">
            <img ref="image" :src="imageUrl" alt="Source Image" />
            <button @click="cropImage">Crop</button>
        </div>
        <div v-if="croppedImage">
            <h3>Cropped Image:</h3>
            <img :src="croppedImage" alt="Cropped Image" />
        </div>
    </div>
</template>

<script>
import Cropper from 'cropperjs';
import 'cropperjs/dist/cropper.css';

export default {
    data() {
        return {
            imageUrl: null,
            croppedImage: null,
            cropper: null
        };
    },
    methods: {
        onFileChange(event) {
            const file = event.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = (e) => {
                    this.imageUrl = e.target.result;
                    this.$nextTick(() => {
                        this.initCropper();
                    });
                };
                reader.readAsDataURL(file);
            }
        },
        initCropper() {
            if (this.cropper) {
                this.cropper.destroy();
            }
            const image = this.$refs.image;
            this.cropper = new Cropper(image, {
                aspectRatio: 1,
                viewMode: 1,
                autoCropArea: 1,
                crop: () => {
                    const canvas = this.cropper.getCroppedCanvas();
                    this.croppedImage = canvas.toDataURL('image/png');
                }
            });
        },
        cropImage() {
            const canvas = this.cropper.getCroppedCanvas();
            this.croppedImage = canvas.toDataURL('image/png');
        }
    },

};
</script>

<style>
/* Add any necessary styling here */
</style>