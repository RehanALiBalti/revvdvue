<template>
	<div class="container-fluid my-5">
		<div class="row">
			<div class="col-md-12 m-auto">
				<div class="form-content-home1">

					<form id="subscribe-form" @submit.prevent="updateUserAttributes" v-if="role != 'dealer'">
						<div class="user-profile-page">

							<img :src="this.croppedImageUrl" height="150px" width="150px" @click="openFileInput"
								v-if="this.croppedImageUrl" class="d-block mx-auto">

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
									<img class="ms-4" src="../assets/img/uploadImage.png" height="150px" width="150px"
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
							<div class="col-md-10 m-auto">
								<div class="row">
									<div class="col-md-4">
										<label for="name" class="form-label">{{ $t('Full Name') }}</label>
										<input v-model="fullname" id="name" type="text" name="name"
											class="form-control form-input" :placeholder="$t('Enter here')" required>
									</div>
									<div class="col-md-4">
										<label for="name" class="form-label">{{ $t('Nick Name') }}</label>
										<input v-model="name" id="name" type="text" name="name"
											class="form-control form-input" :placeholder="$t('Enter here')" required>
									</div>
									<div class="col-md-4">
										<label for="age" class="form-label">{{ $t('age') }}</label>
										<input v-model="age" id="age" type="text" name="age"
											class="form-control form-input" :placeholder="$t('Enter here')" required>
									</div>
									<div class="col-md-4">
										<label for="email" class="form-label">{{ $t('emailVerification') }}</label>
										<input v-model="email" id="email" type="email" name="email"
											class="form-control form-input" :placeholder="$t('Enter here')" required>
									</div>
									<div class="col-md-4">
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


									<div class="col-md-4">
										<label for="socialMedia" class="form-label">{{ $t('socialMediaOptional')
											}}</label>
										<input v-model="socialMedia" id="socialMedia" type="text" name="socialMedia"
											class="form-control form-input" placeholder="Enter here">
									</div>
									<div class="col-md-4">
										<label for="country" class="form-label">Country</label>

										<select id="country" class="form-select form-control form-input "
											v-model="formData.country" @change="getcities(formData.country)">
											<option selected value="">Country</option>
											<option value="Afghanistan">Afghanistan</option>
											<option value="Albania">Albania</option>
											<option value="Algeria">Algeria</option>
											<option value="Andorra">Andorra</option>
											<option value="Angola">Angola</option>
											<option value="Antigua and Barbuda">
												Antigua and Barbuda
											</option>
											<option value="Argentina">Argentina</option>
											<option value="Armenia">Armenia</option>
											<option value="Australia">Australia</option>
											<option value="Austria">Austria</option>
											<option value="Azerbaijan">Azerbaijan</option>
											<option value="Bahamas">Bahamas</option>
											<option value="Bahrain">Bahrain</option>
											<option value="Bangladesh">Bangladesh</option>
											<option value="Barbados">Barbados</option>
											<option value="Belarus">Belarus</option>
											<option value="Belgium">Belgium</option>
											<option value="Belize">Belize</option>
											<option value="Benin">Benin</option>
											<option value="Bhutan">Bhutan</option>
											<option value="Bolivia">Bolivia</option>
											<option value="Bosnia and Herzegovina">
												Bosnia and Herzegovina
											</option>
											<option value="Botswana">Botswana</option>
											<option value="Brazil">Brazil</option>
											<option value="Brunei">Brunei</option>
											<option value="Bulgaria">Bulgaria</option>
											<option value="Burkina Faso">Burkina Faso</option>
											<option value="Burundi">Burundi</option>
											<option value="Cabo Verde">Cabo Verde</option>
											<option value="Cambodia">Cambodia</option>
											<option value="Cameroon">Cameroon</option>
											<option value="Canada">Canada</option>
											<option value="Central African Republic">
												Central African Republic
											</option>
											<option value="Chad">Chad</option>
											<option value="Chile">Chile</option>
											<option value="China">China</option>
											<option value="Colombia">Colombia</option>
											<option value="Comoros">Comoros</option>
											<option value="Congo">Congo</option>
											<option value="Costa Rica">Costa Rica</option>
											<option value="Croatia">Croatia</option>
											<option value="Cuba">Cuba</option>
											<option value="Cyprus">Cyprus</option>
											<option value="Czech Republic">Czech Republic</option>
											<option value="Denmark">Denmark</option>
											<option value="Djibouti">Djibouti</option>
											<option value="Dominica">Dominica</option>
											<option value="Dominican Republic">
												Dominican Republic
											</option>
											<option value="Ecuador">Ecuador</option>
											<option value="Egypt">Egypt</option>
											<option value="El Salvador">El Salvador</option>
											<option value="Equatorial Guinea">Equatorial Guinea</option>
											<option value="Eritrea">Eritrea</option>
											<option value="Estonia">Estonia</option>
											<option value="Eswatini">Eswatini</option>
											<option value="Ethiopia">Ethiopia</option>
											<option value="Fiji">Fiji</option>
											<option value="Finland">Finland</option>
											<option value="France">France</option>
											<option value="Gabon">Gabon</option>
											<option value="Gambia">Gambia</option>
											<option value="Georgia">Georgia</option>
											<option value="Germany">Germany</option>
											<option value="Ghana">Ghana</option>
											<option value="Greece">Greece</option>
											<option value="Grenada">Grenada</option>
											<option value="Guatemala">Guatemala</option>
											<option value="Guinea">Guinea</option>
											<option value="Guinea-Bissau">Guinea-Bissau</option>
											<option value="Guyana">Guyana</option>
											<option value="Haiti">Haiti</option>
											<option value="Honduras">Honduras</option>
											<option value="Hungary">Hungary</option>
											<option value="Iceland">Iceland</option>
											<option value="India">India</option>
											<option value="Indonesia">Indonesia</option>
											<option value="Iran">Iran</option>
											<option value="Iraq">Iraq</option>
											<option value="Ireland">Ireland</option>
											<option value="Israel">Israel</option>
											<option value="Italy">Italy</option>
											<option value="Jamaica">Jamaica</option>
											<option value="Japan">Japan</option>
											<option value="Jordan">Jordan</option>
											<option value="Kazakhstan">Kazakhstan</option>
											<option value="Kenya">Kenya</option>
											<option value="Kiribati">Kiribati</option>
											<option value="Korea, North">Korea, North</option>
											<option value="Korea, South">Korea, South</option>
											<option value="Kosovo">Kosovo</option>
											<option value="Kuwait">Kuwait</option>
											<option value="Kyrgyzstan">Kyrgyzstan</option>
											<option value="Laos">Laos</option>
											<option value="Latvia">Latvia</option>
											<option value="Lebanon">Lebanon</option>
											<option value="Lesotho">Lesotho</option>
											<option value="Liberia">Liberia</option>
											<option value="Libya">Libya</option>
											<option value="Liechtenstein">Liechtenstein</option>
											<option value="Lithuania">Lithuania</option>
											<option value="Luxembourg">Luxembourg</option>
											<option value="Madagascar">Madagascar</option>
											<option value="Malawi">Malawi</option>
											<option value="Malaysia">Malaysia</option>
											<option value="Maldives">Maldives</option>
											<option value="Mali">Mali</option>
											<option value="Malta">Malta</option>
											<option value="Marshall Islands">Marshall Islands</option>
											<option value="Mauritania">Mauritania</option>
											<option value="Mauritius">Mauritius</option>
											<option value="Mexico">Mexico</option>
											<option value="Micronesia">Micronesia</option>
											<option value="Moldova">Moldova</option>
											<option value="Monaco">Monaco</option>
											<option value="Mongolia">Mongolia</option>
											<option value="Montenegro">Montenegro</option>
											<option value="Morocco">Morocco</option>
											<option value="Mozambique">Mozambique</option>
											<option value="Myanmar">Myanmar</option>
											<option value="Namibia">Namibia</option>
											<option value="Nauru">Nauru</option>
											<option value="Nepal">Nepal</option>
											<option value="Netherlands">Netherlands</option>
											<option value="New Zealand">New Zealand</option>
											<option value="Nicaragua">Nicaragua</option>
											<option value="Niger">Niger</option>
											<option value="Nigeria">Nigeria</option>
											<option value="North Macedonia">North Macedonia</option>
											<option value="Norway">Norway</option>
											<option value="Oman">Oman</option>
											<option value="Pakistan">Pakistan</option>
											<option value="Palau">Palau</option>
											<option value="Panama">Panama</option>
											<option value="Papua New Guinea">Papua New Guinea</option>
											<option value="Paraguay">Paraguay</option>
											<option value="Peru">Peru</option>
											<option value="Philippines">Philippines</option>
											<option value="Poland">Poland</option>
											<option value="Portugal">Portugal</option>
											<option value="Qatar">Qatar</option>
											<option value="Romania">Romania</option>
											<option value="Russia">Russia</option>
											<option value="Rwanda">Rwanda</option>
											<option value="Saint Kitts and Nevis">
												Saint Kitts and Nevis
											</option>
											<option value="Saint Lucia">Saint Lucia</option>
											<option value="Saint Vincent and the Grenadines">
												Saint Vincent and the Grenadines
											</option>
											<option value="Samoa">Samoa</option>
											<option value="San Marino">San Marino</option>
											<option value="Sao Tome and Principe">
												Sao Tome and Principe
											</option>
											<option value="Saudi Arabia">Saudi Arabia</option>
											<option value="Senegal">Senegal</option>
											<option value="Serbia">Serbia</option>
											<option value="Seychelles">Seychelles</option>
											<option value="Sierra Leone">Sierra Leone</option>
											<option value="Singapore">Singapore</option>
											<option value="Slovakia">Slovakia</option>
											<option value="Slovenia">Slovenia</option>
											<option value="Solomon Islands">Solomon Islands</option>
											<option value="Somalia">Somalia</option>
											<option value="South Africa">South Africa</option>
											<option value="South Sudan">South Sudan</option>
											<option value="Spain">Spain</option>
											<option value="Sri Lanka">Sri Lanka</option>
											<option value="Sudan">Sudan</option>
											<option value="Suriname">Suriname</option>
											<option value="Sweden">Sweden</option>
											<option value="Switzerland">Switzerland</option>
											<option value="Syria">Syria</option>
											<option value="Taiwan">Taiwan</option>
											<option value="Tajikistan">Tajikistan</option>
											<option value="Tanzania">Tanzania</option>
											<option value="Thailand">Thailand</option>
											<option value="Timor-Leste">Timor-Leste</option>
											<option value="Togo">Togo</option>
											<option value="Tonga">Tonga</option>
											<option value="Trinidad and Tobago">
												Trinidad and Tobago
											</option>
											<option value="Tunisia">Tunisia</option>
											<option value="Turkey">Turkey</option>
											<option value="Turkmenistan">Turkmenistan</option>
											<option value="Tuvalu">Tuvalu</option>
											<option value="Uganda">Uganda</option>
											<option value="Ukraine">Ukraine</option>
											<option value="United Arab Emirates">
												United Arab Emirates
											</option>
											<option value="United Kingdom">United Kingdom</option>
											<option value="United States">United States</option>
											<option value="Uruguay">Uruguay</option>
											<option value="Uzbekistan">Uzbekistan</option>
											<option value="Vanuatu">Vanuatu</option>
											<option value="Vatican City">Vatican City</option>
											<option value="Venezuela">Venezuela</option>
											<option value="Vietnam">Vietnam</option>
											<option value="Yemen">Yemen</option>
											<option value="Zambia">Zambia</option>
											<option value="Zimbabwe">Zimbabwe</option>
										</select>
									</div>
									<div class="col-md-4">
										<label for="country" class="form-label">City</label>
										<!-- <input type="text" id="country" class="form-control" placeholder="Enter City" v-model="formData.city"> -->

										<!-- City Select -->
										<select id="city" class="form-select form-control form-input "
											v-model="formData.city">
											<option value="">City</option>
											<option v-for="city in cities" :key="city" :value="city">{{ city }}</option>
										</select>
									</div>
									<div class="col-md-4 d-none">

										<label class="form-label" for="image">Select Image</label>
										<input type="file" class="form-control-file my-2" ref="fileInput"
											@change="openImageModal">
									</div>
									<div class="col-md-12">
										<label for="cars" class="form-label">{{ $t('Preferred Car Culture') }}</label>
										<div class="row g-3">
											<div class="col-md-4">
												<select v-model="preferedCar1"
													class="form-select form-control form-input"
													:placeholder="' Card Spec'">
													<option value="">#1</option>
													<option value="european">European</option>
													<option value="american">American</option>
													<option value="jdm">JDM</option>

												</select>
											</div>
											<div class="col-md-4">
												<select v-model="preferedCar2"
													class="form-select form-control form-input"
													:placeholder="' Card Spec'">
													<option value="">#2</option>
													<option value="european">European</option>
													<option value="american">American</option>
													<option value="jdm">JDM</option>

												</select>
											</div>
											<div class="col-md-4">
												<select v-model="preferedCar3"
													class="form-select form-control form-input"
													:placeholder="' Card Spec'">
													<option value="">#3</option>
													<option value="european">European</option>
													<option value="american">American</option>
													<option value="jdm">JDM</option>

												</select>
											</div>
										</div>

									</div>
									<div class="col-md-12">

									</div>

								</div>
							</div>
							<div class="row justify-content-center">
								<label for="socialMedia" class="form-label colorOr">
									My <span>Garage</span>
								</label>
								<div class="col-md-12 upper">
									<div class="row">
										<div v-for="(dropdown, index) in dropdowns" :key="dropdown.carId"
											:class="['position-relative col-md-2', `z-${5 - index}`]">
											<!-- Card Identifier -->
											<label for="country" class="form-label">{{ dropdown.carId }}</label>

											<!-- Make Input -->
											<div class="customSelect position-relative mb-2 z-5"
												@blur="dropdown.isOpen = false">
												<input type="text" class="form-select form-control form-input"
													v-model="dropdown.make" :placeholder="$t(' Make')"
													@click="toggleDropdown(index)" @input="filterMakeOptions(index);">
												<ul v-show="dropdown.isOpen" class="options-list"
													v-if="dropdown.makefilteredOptions.length">
													<li v-for="(option, optionIndex) in dropdown.makefilteredOptions"
														:key="optionIndex" @click="selectOption(index, option)">
														{{ option }}
													</li>
												</ul>
											</div>

											<!-- Model Input -->
											<div class="customSelect position-relative mb-2 z-4"
												@blur="dropdown.isOpenm = false">
												<input type="text" class="form-select form-control form-input"
													v-model="dropdown.model" :placeholder="$t(' Model')"
													@click.stop="toggleDropdownm(index)"
													@focus="dropdown.make === '' ? (dropdown.isOpenm = false) : null"
													@input="filterModelOptions(index);" @change="getGenerations(index)"
													:disabled="dropdown.make === ''">
												<ul v-show="dropdown.isOpenm" class="options-list"
													v-if="dropdown.modelfilteredOptions.length > 0">
													<li v-for="(option, optionIndex) in dropdown.modelfilteredOptions"
														:key="optionIndex"
														@click="selectOptionModel(index, option.model)">
														{{ option.model }}
													</li>
												</ul>
											</div>

											<!-- Production Year Input -->
											<div class="customSelect position-relative mb-2 z-3"
												@blur="dropdown.isOpeng = false">
												<input type="text" class="form-select form-control form-input"
													v-model="dropdown.year" :placeholder="$t(' Year')"
													@input="GenfilterOption(index)" @click.stop="toggleOpeng(index)"
													:disabled="dropdown.model === ''">
												<ul v-show="dropdown.isOpeng" class="options-list"
													v-if="dropdown.GenfilteredOptions.length > 0">
													<li v-for="(value, gIndex) in dropdown.GenfilteredOptions"
														:key="gIndex" @click="updateModels(index, value)">
														{{ value.production_years.split(' ')[0] }}
														<!-- <span v-if="value.production_years.split(' ')[1]">
															({{ value.production_years.split(' ')[1] }})
														</span> -->
													</li>
												</ul>
											</div>

											<!-- Card Spec Select -->
											<div class="z-2">
												<select v-model="dropdown.cardSpec"
													class="form-select form-control form-input">
													<option value=""> Car Spec</option>
													<option value="Drag">Drag</option>
													<option value="Street">Street</option>
													<option value="Show / Stance">Show / Stance</option>
													<option value="Drift">Drift</option>
													<option value="Track">Track</option>
													<option value="Off-Road">Off-Road</option>
													<option value="Restoration">Restoration</option>
													<option value="Daily Driver">Daily Driver</option>
													<option value="Luxury tuner">Luxury tuner</option>
													<option value="Hot Rod">Hot Rod</option>
													<option value="Sleeper">Sleeper</option>
												</select>
											</div>
										</div>
									</div>

								</div>
								<div class="col-md-6 d-flex justify-content-center gap-3">
									<div v-if="loading" class="d-flex justify-content-center loader">
										<div class="box"></div>
									</div>

									<div
										class="load-more-info w-100 d-flex justify-content-start align-items-center mb-4 mx-auto w-custom">
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
									<div v-if="socialSignIn == false">
										<div
											class="load-more-info w-100 d-flex justify-content-start align-items-center mb-4 mx-auto w-custom">
											<div
												class="list-item-btn position-relative load-more-div proceed-div mx-auto">
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
												<span
													class="border-bottom-btn border-left-btn new-popup position-absolute">
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
						<!-- <div v-if="imageUrl" class="zoom-controls">
							<label for="zoom">Zoom:</label>
							<input type="range" id="zoom" min="1" max="3" step="0.1" v-model="zoomLevel"
								@input="onZoom" />
						</div> -->
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
import CarDataService from '@/services/CarDataService';
// import Multiselect from 'vue-multiselect'
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
		// Multiselect

	},
	data() {
		return {
			cities: [],
			preferedCar1: "",
			preferedCar2: "",
			preferedCar3: "",
			dropdowns: [
				{
					carId: 'car1',
					make: '',
					model: '',
					year: '',
					cardSpec: '', // New property added
					isOpen: false,
					isOpenm: false,
					isOpeng: false,
					makefilteredOptions: [],
					modelfilteredOptions: [],
					GenfilteredOptions: []
				},
				{
					carId: 'car2',
					make: '',
					model: '',
					year: '',
					cardSpec: '', // New property added
					isOpen: false,
					isOpenm: false,
					isOpeng: false,
					makefilteredOptions: [],
					modelfilteredOptions: [],
					GenfilteredOptions: []
				},
				{
					carId: 'car3',
					make: '',
					model: '',
					year: '',
					cardSpec: '', // New property added
					isOpen: false,
					isOpenm: false,
					isOpeng: false,
					makefilteredOptions: [],
					modelfilteredOptions: [],
					GenfilteredOptions: []
				},
				{
					carId: 'car4',
					make: '',
					model: '',
					year: '',
					cardSpec: '', // New property added
					isOpen: false,
					isOpenm: false,
					isOpeng: false,
					makefilteredOptions: [],
					modelfilteredOptions: [],
					GenfilteredOptions: []
				},
				{
					carId: 'car5',
					make: '',
					model: '',
					year: '',
					cardSpec: '', // New property added
					isOpen: false,
					isOpenm: false,
					isOpeng: false,
					makefilteredOptions: [],
					modelfilteredOptions: [],
					GenfilteredOptions: []
				},
				{
					carId: 'car6',
					make: '',
					model: '',
					year: '',
					cardSpec: '', // New property added
					isOpen: false,
					isOpenm: false,
					isOpeng: false,
					makefilteredOptions: [],
					modelfilteredOptions: [],
					GenfilteredOptions: []
				}
			]
			,
			makes: [],
			models: [],
			dataGy: [],
			make: "",
			value: [],
			isOpen: false,
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
				city: 'sdsds',
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
		resetDependentFields(index, level) {
			if (level === 'make') {
				this.dropdowns[index].model = '';
				this.dropdowns[index].year = '';
			} else if (level === 'model') {
				this.dropdowns[index].year = '';
			}
		},

		getcities() {
			if (!this.formData.country) return;  // Exit if no country is selected

			// Set up the headers and request body
			const myHeaders = new Headers();
			myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

			const urlencoded = new URLSearchParams();
			urlencoded.append("country", this.formData.country);

			const requestOptions = {
				method: 'POST',
				headers: myHeaders,
				body: urlencoded,
				redirect: 'follow'
			};
			// Fetch cities based on the selected country
			fetch("https://countriesnow.space/api/v0.1/countries/cities", requestOptions)
				.then(response => response.json())  // Convert response to JSON
				.then(result => {
					if (result.data && result.data.length > 0) {
						this.cities = result.data;  // Update cities array with the result
					} else {
						this.cities = [];  // Clear cities if no data is found
					}
				})
				.catch(error => {
					console.log('error', error);
					this.cities = [];  // Clear cities if an error occurs
				});
		}
		,
		async fetchBannerStories() {
			try {
				const response = await fetch('https://buzzwaretech.com/adminrev/api/bannerstores');
				const data = await response.json();
				console.log("banner_response data", data)
				if (data.success) {
					// Parse the images field from JSON string to an array
					const banner = data.banner;
					console.log("banner data", banner)
					banner.images = JSON.parse(banner.images); // Parse the images
					this.bannerStories = [banner]; // Store it in the featuredCars array
					console.log("banner data", this.bannerStories[0].images)
				}
			} catch (error) {
				console.error('Error fetching featured stories:', error);
			}
		},

		// retrieveMakes() {
		// 	CarDataService.getAll()
		// 		.then((response) => {
		// 			this.makes = response.data.map(item => item.make);
		// 			this.dropdowns.forEach(dropdown => {
		// 				dropdown.makefilteredOptions = [...this.makes];
		// 			});
		// 		})
		// 		.catch((e) => {
		// 			console.log(e);
		// 		});
		// },
		retrieveMakes() {
			CarDataService.getAll()
				.then((response) => {
					// Filter out empty or falsy 'make' values
					this.makes = response.data
						.map(item => item.make)
						.filter(make => make && make.trim() !== "");

					// Assign filtered makes to each dropdown's makefilteredOptions
					this.dropdowns.forEach(dropdown => {
						dropdown.makefilteredOptions = [...this.makes];
					});
				})
				.catch((error) => {
					console.error("Error fetching makes:", error);
				});
		},

		filterMakeOptions(index) {
			const query = this.dropdowns[index].make.toLowerCase();
			this.dropdowns[index].model = '';
			this.dropdowns[index].year = '';
			this.dropdowns[index].cardSpec = '';
			if (query === '') {
				this.dropdowns[index].makefilteredOptions = this.makes;
			} else {
				this.dropdowns[index].makefilteredOptions = this.makes.filter(option =>
					option.toLowerCase().includes(query)
				);
			}
		},
		toggleDropdown(index) {
			console.log("index", index)
			this.dropdowns[index].isOpen = !this.dropdowns[index].isOpen;
		},
		selectOption(index, option) {
			console.log("indexmake", index)
			this.dropdowns[index].model = '';
			this.dropdowns[index].year = '';
			this.dropdowns[index].cardSpec = '';

			console.log("da", this.dropdowns[index].model)
			this.dropdowns[index].make = option;
			this.dropdowns[index].isOpen = false;
			this.make = this.dropdowns[index].make
			this.getModels(index)
			// You can also perform an action specific to carId here
			console.log(`Selected Make for ${this.dropdowns[index].carId}: ${option}`);
		},

		toggleDropdownm(index) {
			console.log("index_modals", index)
			this.dropdowns[index].isOpenm = !this.dropdowns[index].isOpenm;
		},
		filterModelOptions(index) {
			const query = this.dropdowns[index].model.toLowerCase();
			//this.dropdowns[index].make = '';
			this.dropdowns[index].year = '';
			this.dropdowns[index].cardSpec = '';
			if (query === '') {
				this.dropdowns[index].modelfilteredOptions = this.models;
			} else {
				this.dropdowns[index].modelfilteredOptions = this.models.filter(option =>
					option.model.toLowerCase().includes(query)
				);
			}
		},
		selectOptionModel(index, option) {
			this.dropdowns[index].model = option;
			this.dropdowns[index].isOpenm = false;

			console.log(`Selected Model for ${this.dropdowns[index].carId}: ${option}`);

			// Trigger further actions if needed
			this.getGenerations(index);
		},
		getModels(index) {
			// Example: Fetch models based on selected make for a specific car
			console.log("index in getmod", index)
			const selectedMake = this.dropdowns[index].make;
			console.log("make in getmod", this.dropdowns[index].make)
			CarDataService.getModels(selectedMake)
				.then((response) => {
					this.dropdowns[index].modelfilteredOptions = response.data;
					this.models = response.data
					console.log(response);
				})
				.catch((e) => {
					console.log(e);
				});
		},
		getGenerations(index) {
			// Retrieve the selected model from the dropdown based on the index
			const selectedModel = this.dropdowns[index].model;
			const selectedMake = this.dropdowns[index].make;
			const carId = this.dropdowns[index].carId;

			console.log(`Fetching generations for carId: ${carId}, make: ${selectedMake}, model: ${selectedModel}`);

			// Fetch generation data based on make and model
			CarDataService.getGenerations(selectedMake, selectedModel)
				.then((response) => {
					const data = response.data;
					console.log("Fetched data:", data);

					// Filter out invalid or unknown generations
					const filteredOptions = data.filter(item => {
						return (
							item.generation !== "" &&
							item.generation !== "-" &&
							item.generation !== "??" &&
							item.generation !== "?"
						);
					});

					// Extract unique generations and production years
					const generations = [...new Set(filteredOptions.map(item => item.generation))];
					const productionYears = [...new Set(filteredOptions.map(item => item.production_years))];

					// Update the dropdown state with the new data for the selected dropdown
					this.dropdowns[index].GenfilteredOptions = filteredOptions;
					this.dropdowns[index].generations = generations;
					this.dropdowns[index].productionYears = productionYears;
					this.dataGy = filteredOptions
					// Log updated values
					console.log(`Updated generations for carId ${carId}:`, generations);
					console.log(`Updated production years for carId ${carId}:`, productionYears);
				})
				.catch((error) => {
					console.error("Error fetching generations:", error);
				});
		},

		GenfilterOption(index) {
			// Get the specific dropdown object
			const dropdown = this.dropdowns[index];
			// this.dropdowns[index].make = '';
			// this.dropdowns[index].model = '';
			this.dropdowns[index].cardSpec = '';
			if (!dropdown) {
				console.error(`Dropdown at index ${index} is undefined`);
				return;
			}

			const query = dropdown.year.toLowerCase();
			if (query === '') {
				dropdown.GenfilteredOptions = this.dataGy; // Use the full options list when no query
			} else {
				dropdown.GenfilteredOptions = this.dataGy.filter(option =>
					option.production_years.toLowerCase().includes(query)
				);
			}

			console.log(`Filtered options for dropdown ${dropdown.carId}:`, dropdown.GenfilteredOptions);
		},
		toggleOpeng(index) {
			console.log('opneg')
			this.dropdowns[index].isOpeng = !this.dropdowns[index].isOpeng
			//   this.isDropDYear = !this.isDropDYear

		},
		updateModels(index, value) {
			// Close the dropdown for the specific car (dropdown at the given index)
			this.dropdowns[index].isOpeng = false;

			if (value) {
				// Set the selected production year from the clicked value
				// this.dropdowns[index].productionYear = value.production_years;
				this.dropdowns[index].year = value.production_years.split(' ')[0] // Update the model's year
			} else {
				// If no value is selected, set production year to null
				this.dropdowns[index].productionYear = null;
			}
		}
		,
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
				scalable: false,
				zoomable: false,
				ready: () => {
					const canvasData = this.cropper.getCanvasData();
					this.cropper.setCropBoxData({
						left: canvasData.left,
						top: canvasData.top,
						width: canvasData.width,
						height: canvasData.height
					});
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


			// new changed data
			formData.append('preferedCar1', this.preferedCar1);
			formData.append('preferedCar2', this.preferedCar2);
			formData.append('preferedCar3', this.preferedCar3);
			formData.append('city', this.formData.city);
			formData.append('country', this.formData.country);
			this.dropdowns.forEach((dropdown, index) => {
				formData.append(`car${index}carId`, dropdown.carId || '');
				formData.append(`car${index}make`, dropdown.make || '');
				formData.append(`car${index}model`, dropdown.model || '');
				formData.append(`car${index}year`, dropdown.year || '');
				formData.append(`car${index}cardSpec`, dropdown.cardSpec || '');
			});

			console.log('FormData contents:');
			formData.forEach((value, key) => {
				console.log(`${key}: ${value}`);
			});


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
				const profileData = response.data;
				console.log("country", profileData.country, "city", profileData.city,)
				this.formData.country = profileData.country || "";
				this.getcities(this.formData.country)
				this.formData.city = profileData.city || "";
				this.preferedCar1 = profileData.preferedCar1 || "";
				this.preferedCar2 = profileData.preferedCar2 || "";
				this.preferedCar3 = profileData.preferedCar3 || "";

				// Map cars data to dropdowns
				for (let i = 0; i < this.dropdowns.length; i++) {
					const carKey = `car${i}carId`;
					if (profileData[carKey]) {
						this.dropdowns[i].make = profileData[`car${i}make`] || "";
						this.dropdowns[i].model = profileData[`car${i}model`] || "";
						this.dropdowns[i].year = profileData[`car${i}year`] || "";
						this.dropdowns[i].cardSpec = profileData[`car${i}cardSpec`] || "";
					}
				}
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
		this.retrieveMakes()

		await this.fetchProfileData();
		await this.fetchproData();
		this.initialNickname = this.name
		console.log("ini name", this.initialNickname)
		this.setLogin("true");
		localStorage.setItem("login", "true")
		// this.setName(this.name);
		// this.getProfileImage()
		// this.checkIfGoogleOrFacebookUser()
		for (let i = 0; i <= 5; i++) {
			this.getModels(i)
		}
		for (let i = 0; i <= 5; i++) {
			this.getGenerations(i)
		}

	},

	watch: {
		dropdowns: {
			handler(newVal, oldVal) {
				newVal.forEach((dropdown, index) => {
					const oldDropdown = oldVal[index];

					// If 'make' is cleared, reset 'model' and 'year'
					if (dropdown.make === '' && oldDropdown.make !== '') {
						this.$set(this.dropdowns[index], 'model', '');
						this.$set(this.dropdowns[index], 'year', '');
					}

					// If 'model' is cleared, reset 'year'
					if (dropdown.model === '' && oldDropdown.model !== '') {
						this.$set(this.dropdowns[index], 'year', '');
					}
				});
			},
			deep: true, // Ensures deep watching of nested objects
		},
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




.customSelect {

	width: 100%;
	padding: 1px;
}

.customSelect input {
	width: 100% !important;
	max-width: 100% !important;
	border: 0px transparent !important;
}

.selected-option {
	width: 100%;
	padding: 5px;
	border: 1px solid #ccc;
	border-radius: 4px;
}

.options-list {
	position: absolute;
	/* top: 100%;
left: 0; */
	width: 100%;
	background-color: #031726;

	border-top: none;
	border-radius: 0 0 4px 4px;
	list-style-type: none;
	padding: 0;
	margin: 0;
	box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
	/* min-height: fit-content; */
	max-height: 140px;
	overflow-y: scroll;
	color: #fff;
	transition: height 0.5s ease-in-out;
	z-index: 9999
}

.options-list li {
	padding: 8px;
	cursor: pointer;
	display: flex;
	justify-content: start;
	font-size: 12px
}

.options-list li:hover {
	background-color: #083f68;
}

.z-5 {
	z-index: 5 !important;
}

.z-4 {
	z-index: 4 !important;
}

.z-3 {
	z-index: 3 !important;
}

.z-2 {
	z-index: 2 !important;
}

.z-1 {
	z-index: 1 !important;
}

.w-custom {
	width: 130px !important
}

.colorOr {
	font-size: 26px
}

.colorOr span {
	color: #FF7A00 !important
}

.form-label {
	margin-bottom: 0px
}

.form-select {
	text-transform: capitalize;
}

.upper input,
select {
	text-transform: uppercase;
}

.upper input,
select::placeholder {
	text-transform: uppercase !important;
}

.upper .form-select {
	text-transform: uppercase !important;
}

@media(max-width:768px) {
	.options-list {
		max-height: 133px !important;
	}
}
</style>
