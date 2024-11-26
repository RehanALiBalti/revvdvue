<template>
	<div class="container my-5">
		<div class="row">
			<div class="col-md-8 m-auto">
				<div class="form-content-home1">

					<form id="subscribe-form" @submit.prevent="updateUserAttributes" v-if="role != 'dealer'">
						<div class="user-profile-page">

							<img :src="this.croppedImageUrl" height="150px" width="150px" @click="openFileInput"
								v-if="this.croppedImageUrl">

							<img :src="getProfileImage(profileImageState.profileImage)" class="user-profile-page-img"
								alt="Profile Image"
								v-else-if="this.image != '' && this.image != null && this.image != undefined"
								@click="openFileInput" />


							<div v-else>
								<div v-if="this.croppedImageUrl">
									<img :src="this.croppedImageUrl" height="150px" width="150px"
										@click="openFileInput">
								</div>
								<div v-else>
									<img src="../assets/img/uploadImage.png" height="150px" width="150px"
										@click="openFileInput">
								</div>
								<p class="text-white text-center">Upload Image</p>
							</div>

							<h2 class="form-title mt-2 mb-0">

								{{ name }}
							</h2>
							<p class="map-para email-user-profile-page-para">
								{{ email }}

							</p>
							<h2 class="form-title mt-2 mb-0">
								{{ uname }}
								<!-- {{ state.name }} -->


							</h2>

						</div>
						<div class="row">
							<div class="col-md-6">
								<label for="name" class="form-label">{{ $t('Full Name') }}</label>
								<input v-model="fullname" id="name" type="text" name="name"
									class="form-control form-input" :placeholder="$t('Enter here')" required>
							</div>
							<div class="col-md-6">
								<label for="name" class="form-label">{{ $t('Nick Name') }}</label>
								<input v-model="name" id="name" type="text" name="name" class="form-control form-input"
									:placeholder="$t('Enter here')" required>
							</div>
							<div class="col-md-6">
								<label for="age" class="form-label">{{ $t('age') }}</label>
								<input v-model="age" id="age" type="text" name="age" class="form-control form-input"
									:placeholder="$t('Enter here')" required>
							</div>
							<div class="col-md-6">
								<label for="email" class="form-label">{{ $t('emailVerification') }}</label>
								<input v-model="email" id="email" type="email" name="email"
									class="form-control form-input" :placeholder="$t('Enter here')" required>
							</div>
							<div class="col-md-6">
								<label for="phone" class="form-label">{{ $t('phoneVerification') }}</label>
								<input v-model="phone" id="phone" type="tel" name="phone"
									class="form-control form-input" :placeholder="$t('+920000000000')" required>
								<!-- <div
									class="load-more-info w-100 d-flex justify-content-start align-items-center mb-4 mx-auto">
									<div class="list-item-btn position-relative load-more-div proceed-div mx-auto">
										<span class="border-bottom-btn border-top-btn position-absolute">
											<img src="@/assets/images/Group12engine.png"
												class="img-border position-absolute" alt="" />
										</span>

										<span
											class="border-bottom-btn border-top-btn border-right-radius popup-right position-absolute">
											<img src="@/assets/images/Path467engine.png"
												class="img-border position-absolute" alt="" />
										</span>

										<span
											class="border-bottom-btn border-top-btn border-right-radius border-right-bottom-radius popup-right-bottom position-absolute">
											<img src="@/assets/images/Path465engine.png"
												class="img-border position-absolute" alt="" />
										</span>
									
										<button type="button"
											class="signin-btnli Start Engine load-more-btn proceed-btn width-set"
											@click="openPhoneVerifyModel">
											Verify Phone #
										</button>
										<span class="border-bottom-btn border-left-btn new-popup position-absolute">
											<img src="@/assets/images/Group11engine.png"
												class="img-border position-absolute" alt="" />
										</span>
										<span class="border-bottom-btn position-absolute">
											<img src="@/assets/images/Path473engine.png"
												class="img-border position-absolute" alt="" />
										</span>
									</div>
								</div> -->
							</div>


							<div class="col-md-6">
								<label for="socialMedia" class="form-label">{{ $t('socialMediaOptional') }}</label>
								<input v-model="socialMedia" id="socialMedia" type="text" name="socialMedia"
									class="form-control form-input" placeholder="Enter here">
							</div>
							<div class="col-md-6 d-none">

								<label class="form-label" for="image">Select Image</label>
								<input type="file" class="form-control-file my-2" ref="fileInput"
									@change="openImageModal">
							</div>
							<div class="col-md-12 z-2 position-relative ">
								<label for="cars" class="form-label pt-0">
									Preffered Cars
								</label>
								<multiselect v-model="value" :options="options" :multiple="true"
									:close-on-select="false" :clear-on-select="false" placeholder="Pick some"
									label="name" track-by="name" class="form-control form-input  ">

								</multiselect>

							</div>
							<div class="col-md-12">

							</div>
							<div class="col-md-12">
								<div v-if="loading" class="d-flex justify-content-center loader">
									<div class="box"></div>
								</div>
								<div
									class="load-more-info w-100 d-flex justify-content-start align-items-center mb-4 mx-auto">
									<div class="list-item-btn position-relative load-more-div proceed-div mx-auto">
										<span class="border-bottom-btn border-top-btn position-absolute">
											<img src="@/assets/images/Group12engine.png"
												class="img-border position-absolute" alt="" />
										</span>

										<span
											class="border-bottom-btn border-top-btn border-right-radius popup-right position-absolute">
											<img src="@/assets/images/Path467engine.png"
												class="img-border position-absolute" alt="" />
										</span>

										<span
											class="border-bottom-btn border-top-btn border-right-radius border-right-bottom-radius popup-right-bottom position-absolute">
											<img src="@/assets/images/Path465engine.png"
												class="img-border position-absolute" alt="" />
										</span>
										<!-- data-bs-toggle="modal" -->
										<button type="submit"
											class="signin-btnli Start Engine load-more-btn proceed-btn width-set"
											id="submit-button" :disabled="loading">
											{{
												$t("updateProfile") }}
										</button>
										<span class="border-bottom-btn border-left-btn new-popup position-absolute">
											<img src="@/assets/images/Group11engine.png"
												class="img-border position-absolute" alt="" />
										</span>
										<span class="border-bottom-btn position-absolute">
											<img src="@/assets/images/Path473engine.png"
												class="img-border position-absolute" alt="" />
										</span>
									</div>
								</div>
								<!-- <div class="list-item-btn position-relative submit-btn-div">
									<button type="submit" class="signin-btnli submitNow" >{{
						$t("updateProfile") }}</button>
								</div> -->
							</div>
							<div class="col-md-12" v-if="socialSignIn == false">
								<div
									class="load-more-info w-100 d-flex justify-content-start align-items-center mb-4 mx-auto">
									<div class="list-item-btn position-relative load-more-div proceed-div mx-auto">
										<span class="border-bottom-btn border-top-btn position-absolute">
											<img src="@/assets/images/Group12engine.png"
												class="img-border position-absolute" alt="" />
										</span>

										<span
											class="border-bottom-btn border-top-btn border-right-radius popup-right position-absolute">
											<img src="@/assets/images/Path467engine.png"
												class="img-border position-absolute" alt="" />
										</span>

										<span
											class="border-bottom-btn border-top-btn border-right-radius border-right-bottom-radius popup-right-bottom position-absolute">
											<img src="@/assets/images/Path465engine.png"
												class="img-border position-absolute" alt="" />
										</span>
										<!-- data-bs-toggle="modal" -->
										<button type="button"
											class="signin-btnli Start Engine load-more-btn proceed-btn width-set"
											id="submit-button" @click="isModalReset = true">
											Change Password
										</button>
										<span class="border-bottom-btn border-left-btn new-popup position-absolute">
											<img src="@/assets/images/Group11engine.png"
												class="img-border position-absolute" alt="" />
										</span>
										<span class="border-bottom-btn position-absolute">
											<img src="@/assets/images/Path473engine.png"
												class="img-border position-absolute" alt="" />
										</span>
									</div>
								</div>
								<!-- <div class="list-item-btn position-relative submit-btn-div">
									<button type="submit" class="signin-btnli submitNow" >{{
						$t("updateProfile") }}</button>
								</div> -->
							</div>
						</div>
						<!-- nickname modal -->
						<div class="modal show d-block" tabindex="-1" role="dialog" id="carShopFilter"
							v-if="isModalOpenName === true">
							<div class="modal-dialog modal-dialog-centered" role="document">
								<div class="modal-content">
									<div class="modal-body text-center">
										<span class="close-icon" @click="isModalOpenName = false">
											<i class="fas fa-times"></i>
										</span>

										<div class="mt-4 py-2">
											<h5 class="card-title"><span class="choose">Nick Name Alredy Existed </span>
											</h5>

											<p class="text-white">Please Try With Different Name</p>
										</div>


									</div>
								</div>
							</div>
						</div>
					</form>
					<form id="subscribe-form" @submit.prevent="updateUserAttributesDealer" v-else>

						<img :src="this.croppedImageUrl" height="150px" width="150px" @click="openFileInput"
							v-if="this.croppedImageUrl">

						<img :src="getProfileImage(profileImageState.profileImage)" class="user-profile-page-img"
							alt="Profile Image"
							v-else-if="this.image != '' && this.image != null && this.image != undefined"
							@click="openFileInput" />


						<div v-else>
							<div v-if="this.croppedImageUrl">
								<img :src="this.croppedImageUrl" height="150px" width="150px" @click="openFileInput">
							</div>
							<div v-else>
								<img src="../assets/img/uploadImage.png" height="150px" width="150px"
									@click="openFileInput">
							</div>
							<p class="text-white text-center">Upload Image</p>
						</div>

						<div class="user-profile-page">
							<h2 class="form-title mt-2 mb-0">

								{{ formData.CompanyName }}
							</h2>


							<p class="map-para email-user-profile-page-para">
								{{ formData.email }}
							</p>
						</div>
						<div class="row">
							<div class="col-md-12">
								<h3 class="text-white mt-2 mb-0">{{ $t('LocationOfVehicle') }}</h3>
								<label for="companyName" class="form-label">{{ $t('CompanyName') }}</label>


								<input v-model="formData.CompanyName" id="companyName mt-2" type="text"
									class="form-control form-input" required />
							</div>
							<div class="col-md-6">
								<label for="street" class="form-label">{{ $t('Street') }}</label>
								<input v-model="formData.street" id="street" type="text" class="form-control form-input"
									required :placeholder="$t('Enter here')" />
							</div>
							<div class="col-md-3">
								<label for="streetNo" class="form-label">No.</label>
								<input v-model="formData.streetNo" id="streetNo" type="number"
									class="form-control form-input" required :placeholder="$t('Enter here')" />
							</div>
							<div class="col-md-3">
								<label for="street2" class="form-label">{{ $t('Street') }} 2</label>
								<input v-model="formData.street2" id="street2" type="text"
									class="form-control form-input" required :placeholder="$t('Enter here')" />
							</div>
							<div class="col-md-3">
								<label for="zipCode" class="form-label">{{ $t('ZipCode') }}</label>
								<input v-model="formData.zipCode" id="zipCode" type="text"
									class="form-control form-input" required :placeholder="$t('Enter here')" />
							</div>
							<div class="col-md-3">
								<label for="city" class="form-label">{{ $t('City') }}</label>
								<input v-model="formData.city" id="city" type="text" class="form-control form-input"
									required :placeholder="$t('Enter here')" />
							</div>
							<div class="col-md-6">
								<label for="country" class="form-label">{{ $t('Country') }}</label>
								<input v-model="formData.country" type="text" class="form-control form-input" required
									:placeholder="$t('Enter here')" />
							</div>
							<!-- <div class="col-md-4">
								<label for="intlPrefix1" class="form-label">{{ $t('InternatPrefix1') }}</label>

								<input v-model="formData.intlPrefix1" id="fax" type="text"
									class="form-control form-input" required :placeholder="$t('Enter here')" />
							</div> -->
							<!-- <div class="col-md-3">
								<label for="prefix1" class="form-label">{{ $t('Prefix1') }}</label>
								<input v-model="formData.prefix1" id="prefix1" type="text"
									class="form-control form-input" required :placeholder="$t('Enter here')" />
							</div> -->
							<div class="col-md-6">
								<label for="phone1" class="form-label">{{ $t('Phone1') }}</label>
								<input v-model="formData.phone1" id="phone1" type="tel" class="form-control form-input"
									required :placeholder="$t('Enter here')"
									oninput="this.value = this.value.replace(/[^0-9]/g, '');" />
							</div>
							<!-- <div class="col-md-4">
								<label for="intlPrefix2" class="form-label">{{ $t('InternatPrefix1') }}</label>

								<input v-model="formData.intlPrefix2" id="intlPrefix2" type="text"
									class="form-control form-input" required :placeholder="$t('Enter here')" />
							</div> -->
							<!-- <div class="col-md-3">
								<label for="prefix2" class="form-label">{{ $t('Prefix1') }}</label>
								<input v-model="formData.prefix2" id="prefix2" type="text"
									class="form-control form-input" required :placeholder="$t('Enter here')" />
							</div> -->
							<div class="col-md-6">
								<label for="fax" class="form-label">{{ $t('Fax') }}</label>
								<input v-model="formData.fax" id="fax" type="tel" class="form-control form-input"
									required :placeholder="$t('Enter here')"
									oninput="this.value = this.value.replace(/[^0-9]/g, '');" />
							</div>
							<!-- <div class="col-md-4">
								<label for="intlPrefix3" class="form-label">{{ $t('InternatPrefix1') }}</label>

								<input v-model="formData.intlPrefix3" id="fax" type="text"
									class="form-control form-input" required :placeholder="$t('Enter here')" />
							</div> -->
							<!-- <div class="col-md-3">
								<label for="prefix3" class="form-label">{{ $t('Prefix1') }}</label>
								<input v-model="formData.prefix3" id="prefix3" type="text"
									class="form-control form-input" required :placeholder="$t('Enter here')" />
							</div> -->
							<div class="col-md-6">
								<label for="mobilePhone" class="form-label">{{ $t('MobilePhone') }}</label>
								<input v-model="formData.mobilePhone" id="mobilePhone" type="tel"
									class="form-control form-input" required :placeholder="$t('Enter here')"
									oninput="this.value = this.value.replace(/[^0-9]/g, '');" />
							</div>
							<div class="col-md-6">
								<label for="email" class="form-label">{{ $t('Email') }}</label>
								<input v-model="formData.email" id="email" type="email" class="form-control form-input"
									required :placeholder="$t('Enter here')" />
								<input v-model="formData.role" id="h" type="text" class="form-control form-input d-none"
									:placeholder="$t('Enter here')" value="dealer" />
							</div>



							<div class="col-md-12">
								<p id="errormsg"></p>
							</div>
							<div class="col-md-12">
								<div v-if="loading" class="d-flex justify-content-center loader">
									<div class="box"></div>
								</div>
								<div class="list-item-btn position-relative submit-btn-div">
									<span class="border-bottom-btn border-top-btn position-absolute">
										<img src="@/assets/images/Group12.png" class="img-border position-absolute"
											alt="" />
									</span>
									<span
										class="border-bottom-btn border-top-btn border-right-radius position-absolute">
										<img src="@/assets/images/Path467.png" class="img-border position-absolute"
											alt="" />
									</span>
									<span
										class="border-bottom-btn border-top-btn border-right-radius border-right-bottom-radius position-absolute">
										<img src="@/assets/images/Path465.png" class="img-border position-absolute"
											alt="" />
									</span>
									<button type="submit" class="signin-btnli submitNow" id="submit-button"
										:disabled="loading">
										{{ $t('submit') }}
									</button>
									<span class="border-bottom-btn border-left-btn position-absolute">
										<img src="@/assets/images/Group11.png" class="img-border position-absolute"
											alt="" />
									</span>
									<span class="border-bottom-btn position-absolute">
										<img src="@/assets/images/Path473.png" class="img-border position-absolute"
											alt="" />
									</span>
								</div>
							</div>
							<div class="col-md-6 d-none">

								<label class="form-label" for="image">Select Image</label>
								<input type="file" class="form-control-file my-2" ref="fileInput"
									@change="openImageModal">
							</div>
							<div class="col-md-12" v-if="socialSignIn == false">
								<div
									class="load-more-info w-100 d-flex justify-content-start align-items-center mb-4 mx-auto">
									<div class="list-item-btn position-relative load-more-div proceed-div mx-auto">
										<span class="border-bottom-btn border-top-btn position-absolute">
											<img src="@/assets/images/Group12engine.png"
												class="img-border position-absolute" alt="" />
										</span>

										<span
											class="border-bottom-btn border-top-btn border-right-radius popup-right position-absolute">
											<img src="@/assets/images/Path467engine.png"
												class="img-border position-absolute" alt="" />
										</span>

										<span
											class="border-bottom-btn border-top-btn border-right-radius border-right-bottom-radius popup-right-bottom position-absolute">
											<img src="@/assets/images/Path465engine.png"
												class="img-border position-absolute" alt="" />
										</span>
										<!-- data-bs-toggle="modal" -->
										<button type="button"
											class="signin-btnli Start Engine load-more-btn proceed-btn width-set"
											id="submit-button" @click="isModalReset = true">
											Change Password
										</button>
										<span class="border-bottom-btn border-left-btn new-popup position-absolute">
											<img src="@/assets/images/Group11engine.png"
												class="img-border position-absolute" alt="" />
										</span>
										<span class="border-bottom-btn position-absolute">
											<img src="@/assets/images/Path473engine.png"
												class="img-border position-absolute" alt="" />
										</span>
									</div>
								</div>
								<!-- <div class="list-item-btn position-relative submit-btn-div">
									<button type="submit" class="signin-btnli submitNow" >{{
						$t("updateProfile") }}</button>
								</div> -->
							</div>
						</div>
					</form>


				</div>
			</div>
		</div>
	</div>

	<!-- modal succes -->
	<div class="modal show d-block" tabindex="-1" role="dialog" id="carShopFilter" v-if="isModalOpen === true">
		<div class="modal-dialog modal-dialog-centered" role="document">
			<div class="modal-content">
				<div class="modal-body text-center">
					<span class="close-icon" @click="isModalOpen = false">
						<i class="fas fa-times"></i>
					</span>

					<div class="mt-4 py-2">
						<h5 class="card-title"><span class="choose">Success!</span></h5>
						<p class="text-white">User profile has been successfully updated!</p>
					</div>


				</div>
			</div>
		</div>
	</div>
	<!-- modal fail -->
	<div class="modal show d-block" tabindex="-1" role="dialog" id="carShopFilter" v-if="isModalOpenFail === true">
		<div class="modal-dialog modal-dialog-centered" role="document">
			<div class="modal-content">
				<div class="modal-body text-center">
					<span class="close-icon" @click="isModalOpenFail = false">
						<i class="fas fa-times"></i>
					</span>

					<div class="mt-4 py-2">
						<h5 class="card-title"><span class="choose">Something Went Wronge </span></h5>

						<p class="text-white">{{ errorMessage }}</p>
					</div>


				</div>
			</div>
		</div>
	</div>
	<!-- modal success -->
	<div class="modal show d-block" tabindex="-1" role="dialog" id="carShopFilter" v-if="modalSuccess === true">
		<div class="modal-dialog modal-dialog-centered" role="document">
			<div class="modal-content">
				<div class="modal-body text-center">
					<span class="close-icon" @click="modalSuccess = false">
						<i class="fas fa-times"></i>
					</span>

					<div class="mt-4 py-2">
						<h5 class="card-title"><span class="choose">Congratulation </span></h5>

						<p class="text-white">{{ SuccessMesage }}</p>
					</div>


				</div>
			</div>
		</div>
	</div>
	<!-- modal restpasword -->
	<div class="modal show d-block" tabindex="-1" role="dialog" id="carShopFilter" v-if="isModalReset === true">
		<div class="modal-dialog modal-dialog-centered" role="document">
			<div class="modal-content">
				<div class="modal-body text-center">
					<span class="close-icon" @click="isModalReset = false">
						<i class="fas fa-times"></i>
					</span>

					<div class="mt-4 py-2">
						<h5 class="card-title"><span class="choose">Reset Pssword </span></h5>

						<div class="row">

							<div class="col-md-12">
								<label for="socialMedia" class="form-label">Old Password</label>
								<input v-model="oldPassword" id="socialMedia" type="password" name="socialMedia"
									class="form-control form-input" placeholder="Enter here">
							</div>
							<div class="col-md-12">
								<label for="socialMedia" class="form-label">New Password</label>
								<input v-model="newPassword" id="socialMedia" type="password" name="socialMedia"
									class="form-control form-input" placeholder="Enter here">
							</div>
							<div class="col-md-12">
								<div
									class="load-more-info w-100 d-flex justify-content-start align-items-center mb-4 mx-auto">
									<div class="list-item-btn position-relative load-more-div proceed-div mx-auto">
										<span class="border-bottom-btn border-top-btn position-absolute">
											<img src="@/assets/images/Group12engine.png"
												class="img-border position-absolute" alt="" />
										</span>

										<span
											class="border-bottom-btn border-top-btn border-right-radius popup-right position-absolute">
											<img src="@/assets/images/Path467engine.png"
												class="img-border position-absolute" alt="" />
										</span>

										<span
											class="border-bottom-btn border-top-btn border-right-radius border-right-bottom-radius popup-right-bottom position-absolute">
											<img src="@/assets/images/Path465engine.png"
												class="img-border position-absolute" alt="" />
										</span>
										<!-- data-bs-toggle="modal" -->
										<button type="submit"
											class="signin-btnli Start Engine load-more-btn proceed-btn width-set"
											id="submit-button" @click="changePassword(oldPassword, newPassword)">
											Update Pasword
										</button>
										<span class="border-bottom-btn border-left-btn new-popup position-absolute">
											<img src="@/assets/images/Group11engine.png"
												class="img-border position-absolute" alt="" />
										</span>
										<span class="border-bottom-btn position-absolute">
											<img src="@/assets/images/Path473engine.png"
												class="img-border position-absolute" alt="" />
										</span>
									</div>
								</div>

							</div>
						</div>
					</div>


				</div>
			</div>
		</div>
	</div>

	<!-- modal phone veiryf -->
	<div class="modal show d-block" tabindex="-1" role="dialog" id="carShopFilter" v-if="phoneVeify === true">
		<div class="modal-dialog modal-dialog-centered" role="document">
			<div class="modal-content">
				<div class="modal-body text-center">
					<span class="close-icon" @click="phoneVeify = false">
						<i class="fas fa-times"></i>
					</span>

					<div class="mt-4 py-2">
						<h5 class="card-title"><span class="choose">Verify Phone Number </span></h5>

						<div class="row">

							<div class="col-md-12">
								<label for="socialMedia" class="form-label">Enter Phone Number</label>
								<div class="d-flex gap-2">
									<input v-model="countryCode" id="socialMedia" type="text" name="socialMedia"
										class="form-control form-input w-25" placeholder="+92">
									<input v-model="phoneVnum" id="socialMedia" type="tel" name="socialMedia"
										class="form-control form-input" placeholder="3040348584">
								</div>
							</div>

							<div class="col-md-12">
								<div
									class="load-more-info w-100 d-flex justify-content-start align-items-center mb-4 mx-auto">
									<div class="list-item-btn position-relative load-more-div proceed-div mx-auto">
										<span class="border-bottom-btn border-top-btn position-absolute">
											<img src="@/assets/images/Group12engine.png"
												class="img-border position-absolute" alt="" />
										</span>

										<span
											class="border-bottom-btn border-top-btn border-right-radius popup-right position-absolute">
											<img src="@/assets/images/Path467engine.png"
												class="img-border position-absolute" alt="" />
										</span>

										<span
											class="border-bottom-btn border-top-btn border-right-radius border-right-bottom-radius popup-right-bottom position-absolute">
											<img src="@/assets/images/Path465engine.png"
												class="img-border position-absolute" alt="" />
										</span>
										<!-- data-bs-toggle="modal" -->
										<button type="submit"
											class="signin-btnli Start Engine load-more-btn proceed-btn width-set"
											id="submit-button" @click="verifyPhoneNum()">
											Verify
										</button>
										<span class="border-bottom-btn border-left-btn new-popup position-absolute">
											<img src="@/assets/images/Group11engine.png"
												class="img-border position-absolute" alt="" />
										</span>
										<span class="border-bottom-btn position-absolute">
											<img src="@/assets/images/Path473engine.png"
												class="img-border position-absolute" alt="" />
										</span>
									</div>
								</div>

							</div>
						</div>
					</div>


				</div>
			</div>
		</div>
	</div>

	<!-- modal end -->

	<!-- modal setting profile image -->
	<!-- <div class="modal show d-block" tabindex="-1" role="dialog" id="carShopFilter" v-if="imageModal">
		<div class="modal-dialog modal-dialog-centered" role="document">
			<div class="modal-content">
				<div class="modal-body text-center">
					<span class="close-icon" @click="imageModal = false">
						<i class="fas fa-times"></i>
					</span>
					<div class="mt-4 py-2 d-flex flex-column align-items-center justify-content-center">
						<div v-if="imageUrl" class="frame">
							<vue-draggable-resizable ref="draggable" :parent="true" :resizable="false" :draggable="true"
								:x="draggableStyle.left" :y="draggableStyle.top">
								<img :src="imageUrl" :style="imageStyle" />
							</vue-draggable-resizable>
						</div>
						<div v-if="imageUrl" class="zoom-controls">
							<label for="zoom">Zoom:</label>
							<input type="range" id="zoom" min="1" max="3" step="0.1" v-model="zoomLevel"
								@input="onZoom" />
						</div>
					</div>
				</div>
			</div>
		</div>
	</div> -->
	<!-- working modal -->
	<!-- <div class="modal show d-block" tabindex="-1" role="dialog" id="carShopFilter" v-if="imageModal">
		<div class="modal-dialog modal-dialog-centered" role="document">
			<div class="modal-content">
				<div class="modal-body text-center">
					<span class="close-icon" @click="imageModal = false">
						<i class="fas fa-times"></i>
					</span>
					<div class="mt-4 py-2 d-flex flex-column align-items-center justify-content-center">
						<div v-if="imageUrl" class="frame">
							<img ref="image" :src="imageUrl" alt="Source Image" />
						</div>
						<div v-if="imageUrl" class="zoom-controls">
							<label for="zoom">Zoom:</label>
							<input type="range" id="zoom" min="1" max="3" step="0.1" v-model="zoomLevel"
								@input="onZoom" />
						</div>
					</div>
				</div>
			</div>
		</div>
	</div> -->
	<!-- modal setting profile image -->
	<div class="modal show d-block" tabindex="-1" role="dialog" id="carShopFilter" v-if="imageModal">
		<div class="modal-dialog modal-dialog-centered" role="document">
			<div class="modal-content">
				<div class="modal-body text-center">
					<span class="close-icon" @click="closeModal(false)">
						<i class="fas fa-times"></i>
					</span>
					<div class="mt-4 py-2 d-flex flex-column align-items-center justify-content-center">
						<div v-if="imageUrl" class="frame">
							<img ref="image" :src="imageUrl" alt="Source Image" />
						</div>
						<div v-if="imageUrl" class="zoom-controls">
							<label for="zoom">Zoom:</label>
							<input type="range" id="zoom" min="1" max="3" step="0.1" v-model="zoomLevel"
								@input="onZoom" />
						</div>
						<button class="btn btn-primary mt-3" @click="closeModal(true)">Done</button>
					</div>
				</div>
			</div>
		</div>
	</div>
	<!-- modal end -->
	<!-- Display cropped image -->


</template>

<script>

import axios from 'axios';
import { Auth } from 'aws-amplify';
import { useProfileImage } from '@/composables/useProfileImage';
import { useProfileName } from '@/composables/useProfileName';
import { useIslogin } from "@/composables/uselogin"
import { computed } from "vue";
const { state, setIslogin } = useIslogin();
// import VueDraggableResizable from 'vue-draggable-resizable';
import '../../node_modules/vue-draggable-resizable/dist/style.css';
import Cropper from 'cropperjs';
import 'cropperjs/dist/cropper.css';
import Multiselect from 'vue-multiselect'
// import VueAvatarCropper from 'vue-avatar-cropper';
export default {
	setup() {
		const { state: profileImageState, setProfileImage } = useProfileImage();
		const { state: nameState, setName } = useProfileName();

		const changeProfileImage = (newSrc) => {
			setProfileImage(newSrc);
		};

		const changeName = (newName) => {
			setName(newName);
		};
		const setLogin = (logvalue) => {
			setIslogin(logvalue)
		};
		const isLogin2 = computed(() => state.isLogin);

		return {
			profileImageState,
			nameState,
			changeProfileImage,
			changeName,
			setLogin,
			isLogin2
		};
	},
	name: "UserProfile",
	components: {
		// VueDraggableResizable,
		Multiselect

	},
	data() {
		return {
			value: [],
			options: [
				{ name: 'JDM' },
				{ name: 'European' },
				{ name: 'American' },

			],
			isModalOpenName: false,
			croppedBlob: null, // Added to store the cropped image blob
			croppedImageUrl: null, // Added to store the URL of the cropped image
			imageSrc: null,
			croppedImage: null,
			zoomLevel: 1,
			imageUrl: "",
			cropper: null,

			draggableStyle: {
				top: 0,
				left: 0,
			},
			imageStyle: {
				transform: 'scale(1)'
			},
			imageModal: false,
			loading: false,
			phoneNumToVerify: "",
			countryCode: "",
			phoneVnum: "",
			phoneVeify: false,
			IsphonExists: false,
			fullname: "",
			isModalOpen: false,
			isModalOpenFail: false,
			UserData: null,
			name: "",
			image: "",
			email: "",
			age: "",
			phone: "",
			socialMedia: "",
			password: "",
			errorMessage: '',
			role: '',
			initialNickname: '',
			// formData: {},
			formData: {
				CompanyName: "",
				name: '',
				street: '',
				streetNo: '',
				street2: '',
				zipCode: '',
				city: '',
				country: '',
				// intlPrefix1: '',
				// prefix1: '',
				phone1: '',
				// intlPrefix2: '',
				// prefix2: '',
				fax: '',
				// intlPrefix3: '',
				// prefix3: '',
				mobilePhone: '',
				email: '',
				sub: "",
				cognitoId: ""


			},
			oldPassword: "",
			newPassword: "",
			isModalReset: false,
			modalSuccess: false,
			successMessge: "",
			socialSignIn: false

		};
	},
	methods: {

		// test 
		openImageModal(event) {
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
			this.imageModal = true;
		},
		initCropper() {
			const image = this.$refs.image;
			if (this.cropper) {
				this.cropper.destroy();
			}
			this.cropper = new Cropper(image, {
				aspectRatio: 1,
				viewMode: 1,
				autoCropArea: 1,
				scalable: true,
				zoomable: true,
				ready: () => {
					this.cropper.zoomTo(this.zoomLevel);
				}
			});
		},
		onZoom() {
			if (this.cropper) {
				this.cropper.zoomTo(this.zoomLevel);
			}
		},
		closeModal(done) {
			if (done && this.cropper) {
				const canvas = this.cropper.getCroppedCanvas();
				canvas.toBlob((blob) => {
					this.croppedBlob = blob; // Store the cropped image blob
					this.croppedImageUrl = URL.createObjectURL(blob); // Create a URL for the cropped image
					this.imageModal = false;
				}, 'image/png');
			} else {
				this.imageModal = false;
				console.log("sdss")
			}
		},
		// working with image
		// async submitProfileForm() {
		// 	this.loading = true;
		// 	try {
		// 		if (!this.croppedBlob) {
		// 			console.error("Cropped image not available.");
		// 			this.loading = false;

		// 		}

		// 		const file = this.$refs.fileInput.files[0];
		// 		if (!file) {
		// 			console.error("No file selected.");
		// 			this.loading = false;

		// 		}

		// 		const originalFilename = file.name;

		// 		const formData = new FormData();
		// 		formData.append('image', this.croppedBlob, originalFilename);
		// 		formData.append('sub', this.formData.sub);
		// 		formData.append('name', this.fullname);
		// 		formData.append('nickname', this.name);
		// 		formData.append('age', this.age);
		// 		formData.append('email', this.email);
		// 		formData.append('phone', this.phone.replace(/[+\-()]/g, ''));
		// 		formData.append('socialMedia', this.socialMedia);

		// 		console.log("Submitting form data:", formData);

		// 		// Send the form data to the API
		// 		const response = await axios.post(
		// 			'https://king-prawn-app-3rw3o.ondigitalocean.app/api/users/updateuser',
		// 			formData,
		// 			{
		// 				headers: {
		// 					'Content-Type': 'multipart/form-data',
		// 				}
		// 			}
		// 		);
		// 		this.loading = false;
		// 		console.log('Form data submitted successfully:', response.data);

		// 		if (response.data && response.data.message && response.data.message.includes('Phone number already exists')) {
		// 			this.IsphonExists = true;
		// 			this.errorMessage = response.data.message;
		// 			this.isModalOpenFail = true;
		// 		} else {
		// 			this.IsphonExists = false;
		// 		}

		// 		const profiledata = await this.fetchproData();
		// 		return profiledata;
		// 	} catch (error) {
		// 		this.loading = false;
		// 		console.error('Error submitting form:', error);
		// 	}
		// },
		// current working 
		// async submitProfileForm() {
		// 	console.log("blob image ", this.croppedBlob)
		// 	this.loading = true;
		// 	console.log("nick namee in submit", 'nickname', this.name)
		// 	try {
		// 		const file = this.$refs.fileInput.files[0];
		// 		const originalFilename = file ? file.name : null;

		// 		const formData = new FormData();
		// 		if (this.croppedBlob) {
		// 			formData.append('image', this.croppedBlob, originalFilename);
		// 		}

		// 		formData.append('sub', this.formData.sub);
		// 		formData.append('name', this.fullname);
		// 		formData.append('nickname', this.name);
		// 		formData.append('age', this.age);
		// 		formData.append('email', this.email);
		// 		formData.append('phone', this.phone.replace(/[+\-()]/g, ''));
		// 		formData.append('socialMedia', this.socialMedia);

		// 		console.log("Submitting form data:", formData);

		// 		// Send the form data to the API
		// 		const response = await axios.post(
		// 			'https://king-prawn-app-3rw3o.ondigitalocean.app/api/users/updateuser',
		// 			formData,
		// 			{
		// 				headers: {
		// 					'Content-Type': 'multipart/form-data',
		// 				}
		// 			}
		// 		);
		// 		this.loading = false;
		// 		console.log('Form data submitted successfully:', response.data);

		// 		if (response.data && response.data.message && response.data.message.includes('Phone number already exists')) {
		// 			this.IsphonExists = true;
		// 			this.errorMessage = response.data.message;
		// 			this.isModalOpenFail = true;
		// 		} else {
		// 			this.IsphonExists = false;
		// 		}

		// 		const profiledata = await this.fetchproData();
		// 		return profiledata;
		// 	} catch (error) {
		// 		this.loading = false;
		// 		console.error('Error submitting form:', error);
		// 	}
		// }
		// async submitProfileForm() {
		// 	console.log("Checking nickname availability for:", this.name);
		// 	this.loading = true;

		// 	try {
		// 		// First, check if the nickname is unique
		// 		const nicknameUrl = `https://king-prawn-app-3rw3o.ondigitalocean.app/api/users/nickname?nickname=${this.name}`;
		// 		const nicknameResponse = await axios.get(nicknameUrl);
		// 		console.log("Nickname check response:", nicknameResponse);

		// 		if (nicknameResponse.data && nicknameResponse.data.count === 0) {
		// 			console.log("Nickname is unique, proceeding with form submission");

		// 			// Proceed with form submission
		// 			const file = this.$refs.fileInput.files[0];
		// 			const originalFilename = file ? file.name : null;

		// 			const formData = new FormData();
		// 			if (this.croppedBlob) {
		// 				formData.append('image', this.croppedBlob, originalFilename);
		// 			}

		// 			formData.append('sub', this.formData.sub);
		// 			formData.append('name', this.fullname);
		// 			formData.append('nickname', this.name);
		// 			formData.append('age', this.age);
		// 			formData.append('email', this.email);
		// 			formData.append('phone', this.phone.replace(/[+\-()]/g, ''));
		// 			formData.append('socialMedia', this.socialMedia);

		// 			console.log("Submitting form data:", formData);

		// 			// Send the form data to the API
		// 			const response = await axios.post(
		// 				'https://king-prawn-app-3rw3o.ondigitalocean.app/api/users/updateuser',
		// 				formData,
		// 				{
		// 					headers: {
		// 						'Content-Type': 'multipart/form-data',
		// 					}
		// 				}
		// 			);
		// 			this.loading = false;
		// 			console.log('Form data submitted successfully:', response.data);

		// 			if (response.data && response.data.message && response.data.message.includes('Phone number already exists')) {
		// 				this.IsphonExists = true;
		// 				this.errorMessage = response.data.message;
		// 				this.isModalOpenFail = true;
		// 			} else {
		// 				this.IsphonExists = false;
		// 			}

		// 			// Fetch profile data after successful submission
		// 			const profiledata = await this.fetchproData();
		// 			return profiledata;
		// 		} else {

		// 			console.log("Nickname already exists");
		// 			this.isModalOpenName = true
		// 			// alert("Nickname already exists. Please choose a different nickname.");
		// 			this.loading = false;
		// 		}
		// 	} catch (error) {
		// 		this.loading = false;
		// 		console.error('Error during nickname check or form submission:', error);
		// 	}
		// }
		async submitProfileForm() {
			console.log("initial name", this.initialNickname, "name", this.name)
			// If the nickname has changed, check its availability
			if (this.name !== this.initialNickname) {
				console.log("Checking nickname availability for:", this.name);
				this.loading = true;

				try {
					// Check if the nickname is unique
					const nicknameUrl = `https://king-prawn-app-3rw3o.ondigitalocean.app/api/users/nickname?nickname=${this.name}`;
					const nicknameResponse = await axios.get(nicknameUrl);
					console.log("Nickname check response:", nicknameResponse);

					if (nicknameResponse.data && nicknameResponse.data.count === 0) {
						console.log("Nickname is unique, proceeding with form submission");

						// Proceed with form submission
						await this.submitFormData();
					} else {
						console.log("Nickname already exists");
						this.isModalOpenName = true;
						this.loading = false;
					}
				} catch (error) {
					this.loading = false;
					console.error('Error during nickname check or form submission:', error);
				}
			} else {
				// If the nickname hasn't changed, submit the form directly
				await this.submitFormData();
			}
		},

		// Function to submit the form data
		async submitFormData() {
			const formData = new FormData();
			const file = this.$refs.fileInput.files[0];
			const originalFilename = file ? file.name : null;

			// Add image to form data if croppedBlob exists
			if (this.croppedBlob) {
				formData.append('image', this.croppedBlob, originalFilename);
			}

			// Add other form fields to the form data
			formData.append('sub', this.formData.sub);
			formData.append('name', this.fullname);
			formData.append('nickname', this.name);
			formData.append('age', this.age);
			formData.append('email', this.email);
			formData.append('phone', this.phone.replace(/[+\-()]/g, ''));
			formData.append('socialMedia', this.socialMedia);

			console.log("Submitting form data:", formData);

			try {
				const response = await axios.post(
					'https://king-prawn-app-3rw3o.ondigitalocean.app/api/users/updateuser',
					formData,
					{
						headers: {
							'Content-Type': 'multipart/form-data',
						}
					}
				);
				this.loading = false;
				console.log('Form data submitted successfully:', response.data);

				if (response.data && response.data.message && response.data.message.includes('Phone number already exists')) {
					this.IsphonExists = true;
					this.errorMessage = response.data.message;
					this.isModalOpenFail = true;
				} else {
					this.IsphonExists = false;
				}

				// Fetch profile data after successful submission
				const profiledata = await this.fetchproData();
				return profiledata;
			} catch (error) {
				this.loading = false;
				console.error('Error during form submission:', error);
			}
		},


		async submitProfileFormDeler() {
			console.log("blob image ", this.croppedBlob)
			this.loading = true;
			console.log("nick namee in submit", 'nickname', this.name)
			try {
				const file = this.$refs.fileInput.files[0];
				const originalFilename = file ? file.name : null;

				const formData = new FormData();
				if (this.croppedBlob) {
					formData.append('image', this.croppedBlob, originalFilename);

					console.log("Submitting form data:", formData);
				}

				formData.append('sub', this.formData.sub);
				formData.append('street1', this.formData.street);
				formData.append('street2', this.formData.street2);
				formData.append('zipCode', this.formData.zipCode);
				formData.append('mobileCustomer', this.formData.mobilePhone);
				formData.append('number', this.formData.phone1);
				formData.append('phoneCustomer', this.formData.phone1);


				formData.append('name', this.formData.CompanyName);
				formData.append('companyName', this.formData.CompanyName);
				formData.append('nickname', this.formData.CompanyName);
				formData.append('country', this.formData.country);

				formData.append('city', this.formData.city);
				formData.append('email', this.formData.email);
				formData.append('emailForCustomer', this.formData.email);
				formData.append('faxCustomer', this.formData.fax);
				formData.append('phone', this.phone.replace(/[+\-()]/g, ''));


				// Send the form data to the API
				const response = await axios.post(
					'https://king-prawn-app-3rw3o.ondigitalocean.app/api/users/updateuser',
					formData,
					{
						headers: {
							'Content-Type': 'multipart/form-data',
						}
					}
				);
				this.loading = false;
				console.log('Form data submitted successfully dealer1:', response.data);

				if (response.data && response.data.message && response.data.message.includes('Phone number already exists')) {
					this.IsphonExists = true;
					this.errorMessage = response.data.message;
					this.isModalOpenFail = true;
				} else {
					this.IsphonExists = false;
				}

				const profiledata = await this.fetchproData();
				return profiledata;
			} catch (error) {
				this.loading = false;
				console.error('Error submitting form:', error);
			}
		},
		// end test

		// wprking

		// openImageModal(event) {
		// 	const file = event.target.files[0];
		// 	if (file) {
		// 		const reader = new FileReader();
		// 		reader.onload = (e) => {
		// 			this.imageUrl = e.target.result;
		// 			this.$nextTick(() => {
		// 				this.initCropper();
		// 			});
		// 		};
		// 		reader.readAsDataURL(file);
		// 	}
		// 	this.imageModal = true;
		// },
		// initCropper() {
		// 	const image = this.$refs.image;
		// 	if (this.cropper) {
		// 		this.cropper.destroy();
		// 	}
		// 	this.cropper = new Cropper(image, {
		// 		aspectRatio: 1,
		// 		viewMode: 1,
		// 		autoCropArea: 1,
		// 		scalable: true,
		// 		zoomable: true,
		// 		ready: () => {
		// 			this.cropper.zoomTo(this.zoomLevel);
		// 		}
		// 	});
		// },
		// onZoom() {
		// 	if (this.cropper) {
		// 		this.cropper.zoomTo(this.zoomLevel);
		// 	}
		// },
		// async submitProfileForm() {
		// 	this.loading = true;
		// 	try {
		// 		if (!this.cropper) {
		// 			console.error("Cropper not initialized.");
		// 			this.loading = false;
		// 			return;
		// 		}

		// 		const canvas = this.cropper.getCroppedCanvas();
		// 		canvas.toBlob(async (blob) => {
		// 			if (!blob) {
		// 				console.error("Failed to create blob from canvas.");
		// 				this.loading = false;
		// 				return;
		// 			}

		// 			const file = this.$refs.fileInput.files[0];
		// 			if (!file) {
		// 				console.error("No file selected.");
		// 				this.loading = false;
		// 				return;
		// 			}

		// 			const originalFilename = file.name;
		// 			console.log("blob", blob)
		// 			const formData = new FormData();
		// 			formData.append('image', blob, originalFilename);
		// 			formData.append('sub', this.formData.sub);
		// 			formData.append('name', this.fullname);
		// 			formData.append('nickname', this.name);
		// 			formData.append('age', this.age);
		// 			formData.append('email', this.email);
		// 			formData.append('phone', this.phone.replace(/[+\-()]/g, ''));
		// 			formData.append('socialMedia', this.socialMedia);

		// 			console.log("Submitting form data:", formData);

		// 			// Send the form data to the API
		// 			const response = await axios.post(
		// 				'https://king-prawn-app-3rw3o.ondigitalocean.app/api/users/updateuser',
		// 				formData,
		// 				{
		// 					headers: {
		// 						'Content-Type': 'multipart/form-data',
		// 					}
		// 				}
		// 			);
		// 			this.loading = false;
		// 			console.log('Form data submitted successfully:', response.data);

		// 			if (response.data && response.data.message && response.data.message.includes('Phone number already exists')) {
		// 				this.IsphonExists = true;
		// 				this.errorMessage = response.data.message;
		// 				this.isModalOpenFail = true;
		// 			} else {
		// 				this.IsphonExists = false;
		// 			}

		// 			const profiledata = await this.fetchproData();
		// 			return profiledata;
		// 		}, 'image/png');
		// 	} catch (error) {
		// 		this.loading = false;
		// 		console.error('Error submitting form:', error);
		// 	}
		// }
		// end working

		verifyPhoneNum() {
			// Remove spaces and dashes from phoneVnum
			let cleanedNumber = this.phoneVnum.replace(/[\s-]+/g, '');

			// Concatenate countryCode and cleanedNumber
			this.phoneNumToVerify = this.countryCode + cleanedNumber;

			// Optionally, you can log or use phoneNumToVerify here
			console.log('Phone number to verify:', this.phoneNumToVerify);

		},
		openPhoneVerifyModel() {
			this.phoneVeify = true
		},
		getProfileImage(profileImage) {
			if (!profileImage || profileImage.includes('null') || profileImage.includes('undefined')) {
				return '/images/uploadImage.png';
			}
			return profileImage;
		},

		// async checkIfGoogleOrFacebookUser() {
		// 	try {
		// 		const user = await Auth.currentAuthenticatedUser();
		// 		const identities = user.attributes.identities;
		// 		console.log("identities", identities.providerName)
		// 		// Check if the user has identities
		// 		if (identities) {
		// 			// Iterate through the identities to check if Google or Facebook is one of them
		// 			for (const identity of identities) {
		// 				console.log("identityproviderName ", identity.providerName)
		// 				if (identity.providerName === 'Google') {
		// 					console.log('User signed in using Google');
		// 					console.log("identityproviderName ", identity.providerName)
		// 					this.socialSignIn = true
		// 				} else if (identity.providerName === 'Facebook') {
		// 					console.log("identityproviderName ", identity.providerName)
		// 					console.log('User signed in using Facebook');
		// 					this.socialSignIn = true
		// 				}
		// 				else {
		// 					console.log('User signed normal');
		// 					this.socialSignIn = false
		// 				}
		// 			}
		// 		}
		// 	} catch (error) {
		// 		console.error('Error:', error);
		// 	}

		// 	console.log('User did not sign in using Google or Facebook');
		// 	this.socialSignIn = false
		// }
		// async checkIfGoogleOrFacebookUser() {
		// 	try {
		// 		const user = await Auth.currentAuthenticatedUser();
		// 		const identities = user.attributes.identities;
		// 		console.log("identities", identities)
		// 		console.log("user.attributes.identities.providerName", user.attributes.identities.providerName)


		// 		// Check if the user has identities
		// 		if (identities) {
		// 			// Iterate through the identities
		// 			for (const identity of identities) {
		// 				console.log("Identity:", identity); // Log the entire identity object
		// 				if (identity.providerName === 'Google') {
		// 					console.log('User signed in using Google');
		// 					this.socialSignIn = true;
		// 					return; // Exit the loop since Google sign-in is detected
		// 				} else if (identity.providerName === 'Facebook') {
		// 					console.log('User signed in using Facebook');
		// 					this.socialSignIn = true;
		// 					return; // Exit the loop since Facebook sign-in is detected
		// 				}
		// 			}
		// 			// If no Google or Facebook identity is found
		// 			console.log('User signed in using another method');
		// 			this.socialSignIn = false;
		// 		} else {
		// 			console.log('User does not have any identities');
		// 			this.socialSignIn = false;
		// 		}
		// 	} catch (error) {
		// 		console.error('Error:', error);
		// 		this.socialSignIn = false;
		// 	}
		// }

		// async checkIfGoogleOrFacebookUser() {
		// 	try {
		// 		const user = await Auth.currentAuthenticatedUser();
		// 		const identities = user.attributes.identities;
		// 		console.log("identities", identities);

		// 		// Check if the user has identities
		// 		if (identities) {
		// 			// Iterate through the identities
		// 			for (const identity of identities) {
		// 				console.log("Identity:", identity); // Log each identity object separately
		// 				console.log("identity.providerName:", identity.providerName); // Log the providerName property of each identity
		// 				if (identity.providerName === 'Google') {
		// 					console.log('User signed in using Google');
		// 					this.socialSignIn = true;
		// 					return; // Exit the loop since Google sign-in is detected
		// 				} else if (identity.providerName === 'Facebook') {
		// 					console.log('User signed in using Facebook');
		// 					this.socialSignIn = true;
		// 					return; // Exit the loop since Facebook sign-in is detected
		// 				}
		// 			}
		// 			// If no Google or Facebook identity is found
		// 			console.log('User signed in using another method');
		// 			this.socialSignIn = false;
		// 		} else {
		// 			console.log('User does not have any identities');
		// 			this.socialSignIn = false;
		// 		}
		// 	} catch (error) {
		// 		console.error('Error:', error);
		// 		this.socialSignIn = false;
		// 	}
		// }
		async checkIfGoogleOrFacebookUser() {
			try {
				const user = await Auth.currentAuthenticatedUser();
				console.log("socail service", user);
				console.log("social user attribute", user.attributes)
				let socialCheck = localStorage.getItem("social")
				console.log("check social", socialCheck, typeof (socialCheck));

				if (socialCheck == "true") {
					console.log("in socila if state")
					const mydata = {
						// "name": user.attributes.name,
						// "nickname": user.attributes.name,
						"fullname": user.attributes.name,
						"nickname": user.attributes.given_name
						,
						"sub": user.attributes.sub,
						"email": user.attributes.email,
						"cognitoId": user.attributes.sub,
						"role": "user"

					}
					console.log("mydata", mydata)
					const response = await axios.post('https://king-prawn-app-3rw3o.ondigitalocean.app/api/users', mydata);

					// Handle success response
					console.log('Form data submitted successfully:', response.data);
					localStorage.setItem("social", "false")
					this.fetchproData()

				}



				const identities = user.attributes.identities;

				// Check if the user has identities
				if (identities) {
					this.socialSignIn = true;

				} else {
					console.log('User does not have any identities');
					this.socialSignIn = false;
				}
			} catch (error) {
				console.error('Error:', error);
				this.socialSignIn = false;
			}
		}


		,
		async changePassword(oldPassword, newPassword) {
			try {
				const user = await Auth.currentAuthenticatedUser();
				const data = await Auth.changePassword(user, oldPassword, newPassword);
				console.log(data);
				if (data == 'SUCCESS') {
					this.isModalReset = false
					this.modalSuccess = true;
					this.successMessge = "Password Reset Successfully"
				}
			} catch (err) {
				console.log(err);
				this.isModalReset = false
				this.isModalOpenFail = true
				this.errorMessage = err
			}
		},
		openFileInput() {
			this.$refs.fileInput.click(); // Trigger click event on file input when icon is clicked
		},
		handleFileChange() {
			console.log("filechange")
			// Handle file change event and update this.image
			const formData = new FormData();

			formData.append('userImage', this.$refs.fileInput.files[0]);
			console.log(this.$refs.fileInput.files[0]);
			axios.post('https://king-prawn-app-3rw3o.ondigitalocean.app/api/comments/users', formData)
				.then(response => {
					// Handle success
					console.log('Post request successful:', response.data);
					this.image = response.data.photo_url
					// Optionally, update the comments data with the response data if needed
					// this.comments = response.data;

				})
				.catch(error => {
					// Handle error
					console.error('Error making post request:', error);
				});


		},
		// async updateUserAttributes() {

		// 	const updatedProfile = {
		// 	fullName: this.Fullname,
		// 		name: this.name,
		// 		email: this.email,
		// 		age: this.age,
		// 		phone: this.phone,
		// 		socialMedia: this.socialMedia,
		// 		image: this.image,
		// 	};

		// 	console.log("The profile data", updatedProfile)
		// 	const data = await this.$store.dispatch("auth/handleProfile", updatedProfile);
		// 	console.log(data, typeof data);
		// 	if (data == "SUCCESS") {
		// 		this.isModalOpen = true

		// 	} else {
		// 		this.isModalOpenFail = true
		// 	}


		// },

		// async submitProfileForm() {
		// 	try {
		// 		console.log("sub ID", this.formData.sub)
		// 		console.log("this is formData", this.formData)
		// 		const FormDataa = new FormData();
		// 		let cleanedPhoneNumber = this.phone.replace(/[+\-()]/g, '');

		// 		FormDataa.append('image', this.$refs.fileInput.files[0]);
		// 		FormDataa.append('name', this.fullname);
		// 		FormDataa.append('nickname', this.name);
		// 		FormDataa.append('age', this.age);
		// 		FormDataa.append('email', this.email);
		// 		FormDataa.append('phone', cleanedPhoneNumber);
		// 		FormDataa.append("socialMedia", this.socialMedia)
		// 		// Make a POST request to the API endpoint
		// 		console.log("fffdata", this.FormDataa)
		// 		const response = await axios.put(`https://king-prawn-app-3rw3o.ondigitalocean.app/api/users/${this.formData.sub}`, FormDataa);

		// 		// Handle success response
		// 		console.log('Form data submitted successfully:', response.data);
		// 		if (response.data.message.includes("Phone number already exists")) {
		// 			this.IsphonExists = true
		// 			this.errorMessage = response.data.message
		// 			this.isModalOpenFail = true;

		// 		} else {
		// 			this.IsphonExists = false
		// 		}

		// 		const profiledata = this.fetchproData();
		// 		return profiledata;




		// 		// const { email, name, role, sub, cognitoId } = this.formData;
		// 		// // this.$store.signup({ email, name, role });
		// 		// this.$store.dispatch('auth/signup', { email, name, role, sub, cognitoId });

		// 		// You can perform further actions here, such as redirecting the user or showing a success message
		// 	} catch (error) {
		// 		// Handle error
		// 		console.error('Error submitting form :', error);
		// 		// You can show an error message to the user or handle the error in any other appropriate way
		// 	}
		// },
		// async submitProfileForm() {
		// 	try {
		// 		console.log("sub ID", this.formData.sub);
		// 		console.log("this is formData", this.formData);

		// 		const FormDataa = new FormData();
		// 		let cleanedPhoneNumber = this.phone.replace(/[+\-()]/g, '');

		// 		FormDataa.append('image', this.$refs.fileInput.files[0]);
		// 		FormDataa.append('name', this.fullname);
		// 		FormDataa.append('nickname', this.name);
		// 		FormDataa.append('age', this.age);
		// 		FormDataa.append('email', this.email);
		// 		FormDataa.append('phone', cleanedPhoneNumber);
		// 		FormDataa.append("socialMedia", this.socialMedia);

		// 		// Make a PUT request to the API endpoint
		// 		console.log("FormDataa", FormDataa);

		// 		const response = await axios.put(`https://king-prawn-app-3rw3o.ondigitalocean.app/api/users/${this.formData.sub}`, FormDataa);

		// 		// Handle success response
		// 		console.log('Form data submitted successfully:', response.data);
		// 		if (response.data.message && response.data.message.includes("Phone number already exists")) {
		// 			this.IsphonExists = true;
		// 			this.errorMessage = response.data.message;
		// 			this.isModalOpenFail = true;
		// 		} else {
		// 			this.IsphonExists = false;
		// 		}

		// 		const profiledata = await this.fetchproData();
		// 		return profiledata;

		// 	} catch (error) {
		// 		// Handle error
		// 		console.error('Error submitting form:', error);
		// 		// You can show an error message to the user or handle the error in any other appropriate way
		// 	}
		// }
		// async submitProfileForm() {
		// 	try {
		// 		console.log("sub ID", this.formData.sub);
		// 		let cleanedPhoneNumber = this.phone.replace(/[+\-()]/g, '');
		// 		console.log("this is formData", this.formData, this.fullname,
		// 			this.name, this.age, this.email, cleanedPhoneNumber, this.socialMedia);



		// 		const formdataa = new FormData();
		// 		formdataa.append('image', this.$refs.fileInput.files[0]);
		// 		formdataa.append('name', this.fullname);
		// 		formdataa.append('nickname', this.name);
		// 		formdataa.append('age', this.age);
		// 		formdataa.append('email', this.email);
		// 		formdataa.append('phone', cleanedPhoneNumber);
		// 		formdataa.append("socialMedia", this.socialMedia);

		// 		const requestOptions = {
		// 			method: "PUT",
		// 			body: formdataa,
		// 			redirect: "follow"
		// 		};


		// 		const response = await fetch(`https://king-prawn-app-3rw3o.ondigitalocean.app/api/users/${this.formData.sub}`, requestOptions);
		// 		const result = await response.text();

		// 		console.log('Fom data submitted successfully:', result);

		// 		if (result.includes("Phone number already exists")) {
		// 			this.IsphonExists = true;
		// 			this.errorMessage = result;
		// 			this.isModalOpenFail = true;
		// 		} else {
		// 			this.IsphonExists = false;
		// 		}

		// 		const profiledata = await this.fetchproData();
		// 		return profiledata;

		// 	} catch (error) {
		// 		console.error('Error submitting :', error);
		// 	}
		// }

		// this is the current
		// async submitProfileForm() {
		// 	this.loading = true
		// 	try {
		// 		console.log("sub ID", this.formData.sub);
		// 		let cleanedPhoneNumber = this.phone.replace(/[+\-()]/g, '');
		// 		console.log("this is formData", this.formData, this.fullname, this.name, this.age, this.email, cleanedPhoneNumber, this.socialMedia);

		// 		const formdata = new FormData();
		// 		formdata.append('image', this.$refs.fileInput.files[0]);
		// 		formdata.append('sub', this.formData.sub);
		// 		formdata.append('name', this.fullname);
		// 		formdata.append('nickname', this.name);
		// 		formdata.append('age', this.age);
		// 		formdata.append('email', this.email);
		// 		formdata.append('phone', cleanedPhoneNumber);
		// 		formdata.append("socialMedia", this.socialMedia);

		// 		const response = await axios.post(
		// 			`https://king-prawn-app-3rw3o.ondigitalocean.app/api/users/updateuser`,
		// 			formdata,
		// 			{
		// 				headers: {
		// 					'Content-Type': 'multipart/form-data',
		// 				}
		// 			}
		// 		);
		// 		this.loading = false
		// 		console.log('Form data submitted successfully:', response.data);

		// 		if (response.data && response.data.message && response.data.message.includes("Phone number already exists")) {
		// 			this.IsphonExists = true;
		// 			this.errorMessage = response.data.message;
		// 			this.isModalOpenFail = true;
		// 		} else {
		// 			this.IsphonExists = false;
		// 		}

		// 		const profiledata = await this.fetchproData();
		// 		return profiledata;

		// 	} catch (error) {
		// 		this.loading = false
		// 		console.error('Error submitting form:', error);
		// 	}
		// }
		// async submitProfileForm() {
		// 	this.loading = true;
		// 	try {
		// 		await this.$nextTick();
		// 		// Check if draggable and file input refs are available
		// 		console.log("dragable", this.$refs.draggable)
		// 		console.log("file ino", this.$refs.fileInput)
		// 		if (!this.$refs.draggable || !this.$refs.fileInput) {
		// 			console.error("Draggable component or file input not found.");
		// 			this.loading = false;
		// 			return;
		// 		}

		// 		const imgElement = this.$refs.draggable.$el.querySelector('img');
		// 		const frameElement = this.$el.querySelector('.frame');

		// 		// Check if imgElement and frameElement are available
		// 		if (!imgElement || !frameElement) {
		// 			console.error("Image or frame element not found.");
		// 			this.loading = false;
		// 			return;
		// 		}

		// 		// Create a canvas to capture the adjusted image
		// 		const canvas = document.createElement('canvas');
		// 		canvas.width = frameElement.offsetWidth;
		// 		canvas.height = frameElement.offsetHeight;

		// 		const ctx = canvas.getContext('2d');
		// 		ctx.drawImage(
		// 			imgElement,
		// 			-this.draggableStyle.left,
		// 			-this.draggableStyle.top,
		// 			imgElement.width * this.zoomLevel,
		// 			imgElement.height * this.zoomLevel
		// 		);

		// 		// Convert canvas to Blob
		// 		canvas.toBlob(async (blob) => {
		// 			if (!blob) {
		// 				console.error("Failed to create blob from canvas.");
		// 				this.loading = false;
		// 				return;
		// 			}

		// 			const file = this.$refs.fileInput.files[0];
		// 			if (!file) {
		// 				console.error("No file selected.");
		// 				this.loading = false;
		// 				return;
		// 			}

		// 			const originalFilename = file.name;

		// 			const formData = new FormData();
		// 			formData.append('image', blob, originalFilename);
		// 			formData.append('sub', this.formData.sub);
		// 			formData.append('name', this.fullname);
		// 			formData.append('nickname', this.name);
		// 			formData.append('age', this.age);
		// 			formData.append('email', this.email);
		// 			formData.append('phone', this.phone.replace(/[+\-()]/g, ''));
		// 			formData.append('socialMedia', this.socialMedia);

		// 			console.log("Submitting form data:", formData);

		// 			// Send the form data to the API
		// 			const response = await axios.post(
		// 				'https://king-prawn-app-3rw3o.ondigitalocean.app/api/users/updateuser',
		// 				formData,
		// 				{
		// 					headers: {
		// 						'Content-Type': 'multipart/form-data',
		// 					}
		// 				}
		// 			);
		// 			this.loading = false;
		// 			console.log('Form data submitted successfully:', response.data);

		// 			if (response.data && response.data.message && response.data.message.includes('Phone number already exists')) {
		// 				this.IsphonExists = true;
		// 				this.errorMessage = response.data.message;
		// 				this.isModalOpenFail = true;
		// 			} else {
		// 				this.IsphonExists = false;
		// 			}

		// 			const profiledata = await this.fetchproData();
		// 			return profiledata;
		// 		}, 'image/png');
		// 	} catch (error) {
		// 		this.loading = false;
		// 		console.error('Error submitting form:', error);
		// 	}
		// }



		// async submitProfileForm() {
		// 	try {
		// 		console.log("sub ID", this.formData.sub);
		// 		console.log("this is formData", this.formData);

		// 		const formdata = new FormData();
		// 		let cleanedPhoneNumber = this.phone.replace(/[+\-()]/g, '');

		// 		formdata.append('image', this.$refs.fileInput.files[0]);
		// 		formdata.append('name', this.fullname);
		// 		formdata.append('nickname', this.name);
		// 		formdata.append('age', this.age);
		// 		formdata.append('email', this.email);
		// 		formdata.append('phone', cleanedPhoneNumber);
		// 		formdata.append("socialMedia", this.socialMedia);

		// 		const response = await axios.put(`https://king-prawn-app-3rw3o.ondigitalocean.app/api/users/${this.formData.sub}`, formdata, {
		// 			headers: {
		// 				'Content-Type': 'multipart/form-data'
		// 			}
		// 		});

		// 		console.log('Form data submitted successfully:', response.data);

		// 		if (response.data.includes("Phone number already exists")) {
		// 			this.IsphonExists = true;
		// 			this.errorMessage = response.data;
		// 			this.isModalOpenFail = true;
		// 		} else {
		// 			this.IsphonExists = false;
		// 		}

		// 		const profiledata = await this.fetchproData();
		// 		return profiledata;

		// 	} catch (error) {
		// 		console.error('Error submitting form:', error);
		// 	}
		// }


		async updateUserAttributes() {
			const profiledata = await this.submitProfileForm();
			console.log("cehck pro data", profiledata)
			console.log(profiledata);
			if (this.IsphonExists == false && this.isModalOpenName == false) {
				this.loading = true
				console.log("full name", this.fullname, "nick name", this.name)
				const updatedProfile = {
					fullname: this.fullname, // Correct the key to fullName if needed
					name: this.name,
					nickname: this.name,
					email: this.email,
					age: this.age,
					phone: this.phone,
					socialMedia: this.socialMedia,
					image: this.image,
				};

				console.log("The profile data update", updatedProfile);

				try {
					const data = await this.$store.dispatch("auth/handleProfile", updatedProfile);
					console.log(data, typeof data);
					if (data === "SUCCESS") {
						this.loading = false
						this.isModalOpen = true;
						this.$router.push({ name: 'HomeLanding' });
					}
				} catch (error) {
					this.loading = false
					console.error("Error updating user profile:", error);
					// Handle error gracefully, e.g., display an error message to the user
					this.errorMessage = error
					this.isModalOpenFail = true
				}


			}


		}
		,

		async updateUserAttributesDealer() {
			this.loading = true
			const profiledata = await this.submitProfileFormDeler();
			console.log(profiledata);
			const updatedProfile = {

				city: this.formData.city,

				companyName: this.formData.CompanyName,

				country: this.formData.country,


				emailForCustomer: this.formData.email,

				faxCustomer: this.formData.fax,

				// interanetPrefix1: this.formData.intlPrefix1,

				// interanetPrefix2: this.formData.intlPrefix2,

				// interanetPrefix3: this.formData.intlPrefix3,

				mobileCustomer: this.formData.mobilePhone,

				number: this.formData.phone1,

				phoneCustomer: this.formData.phone1,

				// prefix1: this.formData.prefix1,
				// prefix2: this.formData.prefix2,

				// prefix3: this.formData.prefix3,

				street1: this.formData.street,

				street2: this.formData.street2,

				zipCode: this.formData.zipCode,

				email: this.formData.email


			}
			console.log("The profile data", updatedProfile);
			try {
				const data = await this.$store.dispatch("auth/handleProfile2", updatedProfile);
				console.log(data, typeof data);
				if (data === "SUCCESS") {
					this.loading = false
					this.isModalOpen = true;
					this.changeName(this.formData.CompanyName)
					this.$router.push({ name: 'HomeLanding' });
				}
			} catch (error) {
				this.loading = false
				console.error("Error updating user profile:", error);
				// Handle error gracefully, e.g., display an error message to the user
				const customErrorRegex = /custom:[^\s]+ must not be null/;
				const match = error.message.match(customErrorRegex);

				// If the match is found, use it; otherwise, use the entire error message
				const errorMessage = match ? match[0] : error.message;

				// Handle error gracefully, e.g., display an error message to the user
				this.errorMessage = errorMessage;
				// this.errorMessage = error
				this.isModalOpenFail = true
			}
		},


		async fetchProfileData() {
			try {
				// console.log("Fetching profile data...");
				const data = await this.$store.dispatch("auth/getprofiledata");
				// console.log("Profile data:", data);
				this.UserData = data.result
				console.log("user dataddfdd", this.UserData)
				this.formData.sub = this.UserData.sub
				this.formData.cognitoId = this.UserData.sub
				this.role = this.UserData['custom:Role'];


				console.log("userdata nick name", this.UserData)
				this.formData.fullname = this.UserData['custom:fullname']
				// this.role = this.UserData.nickname
				if (this.role == "dealer") {
					this.changeName(this.UserData.name)
					this.formData.CompanyName = this.UserData.name;
					this.formData.email = this.UserData.email
					this.formData.mobilePhone = this.UserData["custom:mobileCustomer"]
					// this.formData.prefix3 = this.UserData["custom:prefix3"]
					// this.formData.intlPrefix3 = this.UserData["custom:street1"]
					this.formData.fax = this.UserData["custom:faxCustomer"]
					// this.formData.prefix2 = this.UserData["custom:prefix2"]
					// this.formData.prefix1 = this.UserData["custom:prefix1"]
					// this.formData.intlPrefix1 = this.UserData["custom:interanetPrefix1"]
					this.formData.phone1 = this.UserData["custom:phoneCustomer"]
					// this.formData.intlPrefix2 = this.UserData["custom:interanetPrefix2"]

					this.formData.street = this.UserData["custom:street1"]
					this.formData.streetNo = this.UserData["custom:number"]
					this.formData.street2 = this.UserData["custom:street2"]
					this.formData.zipCode = this.UserData["custom:zipCode"]
					this.formData.city = this.UserData["custom:city"]
					this.formData.country = this.UserData["custom:country"]

				} else {
					let social = false;
					if ('identities' in this.UserData) {
						social = true;
						this.socialSignIn = true
					}
					console.log("socialsttus", social)
					this.name = this.UserData.name
					this.email = this.UserData.email

					this.socialMedia = this.UserData.website
					this.phone = this.UserData.phone_number
					this.age = this.UserData["custom:age"]
					this.fullname = this.UserData["custom:fullname"]
					if (this.UserData.picture) {
						this.image = this.UserData.picture
					}
				}



			} catch (error) {
				1
				console.error("Error fetching profile data prof page:", error);
			}
		},


		async fetchproData() {
			if (localStorage.getItem('signupstatus') == "true") {
				localStorage.setItem('signupstatus', "");

				//await this.fetchProfileData()
			}
			console.log("calling fetchPRo Data1", this.formData.sub)
			const myid = this.formData.sub || localStorage.getItem('storgekey');
			const url = 'https://king-prawn-app-3rw3o.ondigitalocean.app/api/users/sub?sub=' + myid;
			console.log("jaloru", myid, url);
			try {
				// Make the GET request with query parameters
				const response = await axios.get(url);

				// Handle the response data
				console.log(this.formData.sub, "new porofile Data is dw", response.data);
				this.image = response.data.image
				this.name = response.data.nickname
				// this.name = response.data.nickname
				// this.fullname = response.data.name
				// console.log("before set the name", this.name);
				// this.changeName(this.name);
				// console.log("username is", this.uname);
				// use this origional
				// let imageUrl = "https://52.59.240.119/users/" + this.image;
				let imageUrl = "https://king-prawn-app-3rw3o.ondigitalocean.app/users/" + this.image;
				console.log("image url", imageUrl);
				this.changeProfileImage(imageUrl)
				//				this.image = response.data[0].image
			} catch (error) {
				// Handle any errors
				console.error('Error making GET request:', error);
			}
		},



		// isFormValid() {
		// 	// Basic form validation
		// 	return this.name && this.email && this.age && this.phone;
		// }




	},
	async created() {

		// this.getprofile()
		await this.fetchProfileData()
		await this.fetchproData()
		await this.checkIfGoogleOrFacebookUser()




	},
	async mounted() {

		await this.fetchProfileData();
		await this.fetchproData();
		this.initialNickname = this.name
		console.log("ini name", this.initialNickname)
		this.setLogin("true");
		localStorage.setItem("login", "true")
		// this.setName(this.name);
		// this.getProfileImage()
		// this.checkIfGoogleOrFacebookUser()
	},


};
</script>

<style scoped>
.modal-dialog {
	max-width: auto;
	margin-right: auto;
	margin-left: auto;
}

.modal-content {
	position: relative;
	display: flex;
	flex-direction: column;
	width: 100%;
	pointer-events: auto;
	background-color: #031726;
	background-clip: padding-box;
	border: 1px solid #1a202c;
	border-radius: 5px;
	outline: 0;
}

.user-profile-page {
	cursor: pointer;
}

.loader {
	position: absolute;
	top: 50%;
	left: 45%;
	z-index: 9;
	background: transparent;
	height: fit-content;
	width: fit-content;
}

.box {
	height: 100px;
	width: 100px;
	border-radius: 50%;
	border: 6px solid;
	border-color: #FF7A00 transparent;
	animation: spin 1s infinite ease-out;
}



.frame {
	width: 300px;
	/* Adjust the frame size as needed */
	height: 300px;
	/* border-radius: 50%; */
	overflow: hidden;
	position: relative;
	background-color: #f3f3f3;
}


.draggable {
	/* position: absolute;
	top: 0;
	left: 0; */
	cursor: move;
}



@keyframes spin {
	0% {
		transform: rotate(0deg);
	}

	100% {
		transform: rotate(360deg);
	}
}
</style>
