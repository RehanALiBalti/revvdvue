<template>


	<section class="section-car-listing">
		<div class="container">
			<div class="row">
				<div class="col-12">
					<div class="heading-car">
						<h1 class="banner-title">{{ $t('myCarListing') }}</h1>
					</div>
				</div>
			</div>
		</div>
	</section>

	<section class="section-car-listing-breadcrumb">
		<div class="container">
			<div class="row">
				<div class="col-12">
					<nav aria-label="breadcrumb" class="nav-breadcrumb">
						<ol class="breadcrumb">
							<li class="breadcrumb-item">
								<router-link to="/profile" class="breadcrumb-item-a-tag">{{ $t('profile')
								}}</router-link>
							</li>
							<li class="breadcrumb-item">
								<router-link to="/mycarlisting" class="breadcrumb-item-a-tag">{{ $t('myCarListing')
								}}</router-link>
							</li>
						</ol>
					</nav>
				</div>
			</div>
		</div>
	</section>


	<section class="car-filter-section my-5">
		<div class="container">
			<div class="row gy-4">
				<div v-for="(car, index) in cars" :key="index" class="col-md-6 px-4">
					<div class="card myCarListingCard position-relative">
						<div class="myCarListingCard-logo-img-div position-absolute">
							<img src="@/assets/images/Imagefordlogo13.png" class="myCarListingCard-logo-img"
								alt="logo" />
						</div>

						<div class="swiper-container myCarListingCard-swiper-container">
							<div class="swiper-wrapper">
								<div class="swiper-slide" v-for="(image, idx) in car.images" :key="idx">
									<!-- <router-link class="d-block" :to="`/carListing${index + 1}`">
										<img :src="image" class="slider-img myCarListingCard-img" alt="car" />
									</router-link> -->
									<img :src="image" class="slider-img myCarListingCard-img" alt="car" />
								</div>


								<!-- Add more slides as needed -->
							</div>
							<div class="myCarListingCard-edit-delete-div">
								<div class="myCarListingCard-delete-div">
									<i class="fa-solid fa-trash trash-icon"></i>
								</div>
								<div class="myCarListingCard-delete-div">
									<i class="fa-solid fa-pen trash-icon"></i>
								</div>
							</div>
						</div>
						<div class="card-body">
							<div class="card-title-div">
								<h2 class="card-title-h2">
									{{ car.title }}: <span> {{ car.quantity }} </span>
								</h2>
							</div>
							<ul class="user-details-car myCarListingCard-user-details-car">
								<li v-for="(detail, idx) in car.details" :key="idx" class="list-item-user">
									<div class="icon-user">
										<img :src="detail.icon" class="icon-user-img" alt="icon" />
									</div>
									<router-link class="a-tag-name-user" to="javascript:void(0);">
										{{ detail.value }}
									</router-link>
								</li>


							</ul>
							<div class="view-more-cars">
								<!-- <router-link class="view-more-a-tag" :to="`/carListing${index + 1}`">View
									more</router-link> -->
								<router-link class="view-more-a-tag" to="#">View
									more</router-link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>


</template>

<script>

import Image1 from "@/assets/images/4image.png";
import Image2 from "@/assets/images/d722fc518c6127ea183d184e5dc715e3.png";
import Image3 from "@/assets/images/20210412111611_Ford_Territory_front.png";
import Image4 from "@/assets/images/images1.png";
import Image5 from "@/assets/images/36346b90e9ed41209ec6b093b61c21ef.png";
import icon1 from "@/assets/images/IconAwesome-user-alt.png";
import icon2 from "@/assets/images/engine.png";
import icon3 from "@/assets/images/Iconmaterial-email.png";

//Import swiper js
import Swiper from "swiper";
//Import Swiper styles
import "swiper/swiper-bundle.css";

//Import Swiper modules
import { Pagination, Navigation } from 'swiper';
// Install Swiper modules
Swiper.use([Pagination, Navigation])

export default {
	name: "MyCarListing",

	data() {
		return {
			swiper: null,
			cars: [
				{
					title: "Koenigsegg agera one",
					quantity: 1,
					images: [Image1, Image2, Image3, Image4, Image5],
					details: [
						{
							icon: icon1,
							value: "Daniyal Doe",
						},
						{
							icon: icon2,
							value: "2,000,000",
						},
						{
							icon: icon3,
							value: "daniyaldoe@info.com",
						},
					],
				},
				{
					title: "Koenigsegg agera one",
					quantity: 1,
					images: [Image1, Image2, Image3, Image4, Image5],
					details: [
						{
							icon: icon1,
							value: "Daniyal Doe",
						},
						{
							icon: icon2,
							value: "2,000,000",
						},
						{
							icon: icon3,
							value: "daniyaldoe@info.com",
						},
					],
				},
				{
					title: "Koenigsegg agera one",
					quantity: 1,
					images: [Image2, Image1, Image3, Image4, Image5],
					details: [
						{
							icon: icon1,
							value: "Daniyal Doe",
						},
						{
							icon: icon2,
							value: "2,000,000",
						},
						{
							icon: icon3,
							value: "daniyaldoe@info.com",
						},
					],
				},
				{
					title: "Koenigsegg agera one",
					quantity: 1,
					images: [Image3, Image2, Image4, Image5],
					details: [
						{
							icon: icon1,
							value: "Daniyal Doe",
						},
						{
							icon: icon2,
							value: "2,000,000",
						},
						{
							icon: icon3,
							value: "daniyaldoe@info.com",
						},
					],
				},
				{
					title: "Koenigsegg agera one",
					quantity: 1,
					images: [Image4, Image1, Image2, Image3, Image5],
					details: [
						{
							icon: icon1,
							value: "Daniyal Doe",
						},
						{
							icon: icon2,
							value: "2,000,000",
						},
						{
							icon: icon3,
							value: "daniyaldoe@info.com",
						},
					],
				},
				{
					title: "Koenigsegg agera one",
					quantity: 1,
					images: [Image5, Image1, Image2, Image3, Image4],
					details: [
						{
							icon: icon1,
							value: "Daniyal Doe",
						},
						{
							icon: icon2,
							value: "2,000,000",
						},
						{
							icon: icon3,
							value: "daniyaldoe@info.com",
						},
					],
				},
				{
					title: "Koenigsegg agera one",
					quantity: 1,
					images: [Image3, Image1, Image2, Image4, Image5],
					details: [
						{
							icon: icon1,
							value: "Daniyal Doe",
						},
						{
							icon: icon2,
							value: "2,000,000",
						},
						{
							icon: icon3,
							value: "daniyaldoe@info.com",
						},
					],
				},
				{
					title: "Koenigsegg agera one",
					quantity: 1,
					images: [Image4, Image1, Image2, Image3, Image5],
					details: [
						{
							icon: icon1,
							value: "Daniyal Doe",
						},
						{
							icon: icon2,
							value: "2,000,000",
						},
						{
							icon: icon3,
							value: "daniyaldoe@info.com",
						},
					],
				},
				{
					title: "Koenigsegg agera one",
					quantity: 1,
					images: [Image5, Image1, Image2, Image3, Image4],
					details: [
						{
							icon: icon1,
							value: "Daniyal Doe",
						},
						{
							icon: icon2,
							value: "2,000,000",
						},
						{
							icon: icon3,
							value: "daniyaldoe@info.com",
						},
					],
				},
				{
					title: "Koenigsegg agera one",
					quantity: 1,
					images: [Image4, Image1, Image2, Image3, Image5],
					details: [
						{
							icon: icon1,
							value: "Daniyal Doe",
						},
						{
							icon: icon2,
							value: "2,000,000",
						},
						{
							icon: icon3,
							value: "daniyaldoe@info.com",
						},
					],
				},
			],
		};
	},
	mounted() {
		// Initialize Swiper
		this.swiper = new Swiper(".myCarListingCard-swiper-container", {
			// Optional parameters
			slidesPerView: 1,
			spaceBetween: 10,
			loop: true,
			// If you need pagination
			pagination: {
				el: ".swiper-pagination",
				clickable: true,
			},

			// Navigation arrows
			navigation: {
				nextEl: ".swiper-button-next",
				prevEl: ".swiper-button-prev",
			},
		});
	},
};
</script>

<style scoped>
a.view-more-a-tag {
	text-decoration: underline !important;
}
</style>
