<template>
	<section class="my-5 " id="gallery">
		<div class="container my-5 d-block d-md-none">
			<div class="banner-content">
				<!-- <h1 class="banner-title">Changing the Car World</h1> -->
				<p class="banner-para">
					Welcome to our ultimate platform for car enthusiasts! Explore our five core modules: a marketplace
					for
					buying and selling modified and super cars, vibrant community forum threads for engaging with fellow
					enthusiasts, a car shops finder to locate the best maintenance and upgrade services, and a parts
					marketplace for discovering a wide selection of vehicle components.
				</p>
			</div>
		</div>

		<div class="container my-5 d-block d-md-none">
			<div class="main-content-home1">
				<div class="logo-R-div d-flex justify-content-center align-items-center">

					<img class="logo-R" src="@/assets/images/Group888.png" alt="R" />

				</div>

				<!-- <div class="list-item-btn position-relative start-engine-div">
            <span class="border-bottom-btn border-top-btn position-absolute">
                <img src="http://localhost/revvdout/assets/images/Group12engine.png" class="img-border position-absolute" alt="">
            </span>

            <span class="border-bottom-btn border-top-btn border-right-radius position-absolute">
                <img src="http://localhost/revvdout/assets/images/Path467engine.png" class="img-border position-absolute" alt="">
            </span>

            <span class="border-bottom-btn border-top-btn border-right-radius border-right-bottom-radius position-absolute">
                <img src="http://localhost/revvdout/assets/images/Path465engine.png" class="img-border position-absolute" alt="">
            </span>
            <button type="button" class="signin-btnli Start Engine mx-auto">
                Start Engine
            </button>
            <span class="border-bottom-btn border-left-btn position-absolute">
                <img src="http://localhost/revvdout/assets/images/Group11engine.png" class="img-border position-absolute" alt="">
            </span>
            <span class="border-bottom-btn position-absolute">
                <img src="http://localhost/revvdout/assets/images/Path473engine.png" class="img-border position-absolute" alt="">
            </span>
        </div> -->
			</div>
		</div>
		<div class="container">
			<div class="row justify-content-center">
				<div class="col-6 col-sm-6 col-md-3 col-lg-2  mb-4 position-relative">
					<div class="cardOverlay d-flex justify-content-start align-items-center flex-column pt-4">
						<img src="../../public/images/layer2.png">
					</div>
					<div class="card z-0">
						<div class="card-body d-flex flex-column justify-content-center align-items-center">
							<h5 class="card-title">{{ $t('buy') }}</h5>
							<p class="card-text ctext">
								Lorem Ipsum is simply dummy text of the printing and
							</p>
							<div class="load-more-info w-100 d-flex justify-content-center align-items-center">
								<div class="list-item-btn position-relative load-more-div">
									<span class="border-bottom-btn border-top-btn position-absolute">
										<img src="@/assets/images/Group12engine.png"
											class="img-border position-absolute" alt="">
									</span>

									<span
										class="border-bottom-btn border-top-btn border-right-radius position-absolute">
										<img src="@/assets/images/Path467engine.png"
											class="img-border position-absolute" alt="">
									</span>

									<span
										class="border-bottom-btn border-top-btn border-right-radius border-right-bottom-radius position-absolute">
										<img src="@/assets/images/Path465engine.png"
											class="img-border position-absolute" alt="">
									</span>
									<button type="button" class="signin-btnli Start Engine load-more-btn mx-auto "
										data-bs-toggle="modal" data-bs-target="#mailModal" disabled>
										{{ $t('loadMore') }}
									</button>
									<span class="border-bottom-btn border-left-btn position-absolute">
										<img src="@/assets/images/Group11engine.png"
											class="img-border position-absolute" alt="">
									</span>
									<span class="border-bottom-btn position-absolute">
										<img src="@/assets/images/Path473engine.png"
											class="img-border position-absolute" alt="">
									</span>
								</div>
							</div>
						</div>

					</div>
				</div>

				<div class="col-6 col-sm-6 col-md-3 col-lg-2  mb-4 position-relative">
					<div class="cardOverlay d-flex justify-content-start align-items-center flex-column pt-4">
						<img src="../../public/images/layer2.png">
					</div>
					<div class="card">
						<div class="card-body d-flex flex-column justify-content-center align-items-center">
							<h5 class="card-title">{{ $t('sell') }}</h5>
							<p class="card-text ctext">
								Lorem Ipsum is simply dummy text of the printing and
							</p>
							<div class="load-more-info w-100 d-flex justify-content-center align-items-center">
								<div class="list-item-btn position-relative load-more-div">
									<span class="border-bottom-btn border-top-btn position-absolute">
										<img src="@/assets/images/Group12engine.png"
											class="img-border position-absolute" alt="">
									</span>

									<span
										class="border-bottom-btn border-top-btn border-right-radius position-absolute">
										<img src="@/assets/images/Path467engine.png"
											class="img-border position-absolute" alt="">
									</span>

									<span
										class="border-bottom-btn border-top-btn border-right-radius border-right-bottom-radius position-absolute">
										<img src="@/assets/images/Path465engine.png"
											class="img-border position-absolute" alt="">
									</span>
									<router-link to="/carShop" class="signin-btnli Start Engine load-more-btn mx-auto">
										{{ $t('loadMore') }}
									</router-link>
									<span class="border-bottom-btn border-left-btn position-absolute">
										<img src="@/assets/images/Group11engine.png"
											class="img-border position-absolute" alt="">
									</span>
									<span class="border-bottom-btn position-absolute">
										<img src="@/assets/images/Path473engine.png"
											class="img-border position-absolute" alt="">
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div class="col-6 col-sm-6 col-md-3 col-lg-2  mb-4">
					<div class="card">
						<div class="card-body d-flex flex-column justify-content-center align-items-center">
							<h5 class="card-title">{{ $t('community') }}</h5>
							<p class="card-text ctext">
								Ask, share and connect with fellow enthusiasts.
							</p>
							<div class="load-more-info w-100 d-flex justify-content-center align-items-center">
								<div class="list-item-btn position-relative load-more-div">
									<span class="border-bottom-btn border-top-btn position-absolute">
										<img src="@/assets/images/Group12engine.png"
											class="img-border position-absolute" alt="">
									</span>

									<span
										class="border-bottom-btn border-top-btn border-right-radius position-absolute">
										<img src="@/assets/images/Path467engine.png"
											class="img-border position-absolute" alt="">
									</span>

									<span
										class="border-bottom-btn border-top-btn border-right-radius border-right-bottom-radius position-absolute">
										<img src="@/assets/images/Path465engine.png"
											class="img-border position-absolute" alt="">
									</span>
									<router-link to="/ourcommunity"><button type="button"
											class="signin-btnli Start Engine load-more-btn mx-auto">
											{{ $t('loadMore') }}
										</button>
									</router-link>
									<span class="border-bottom-btn border-left-btn position-absolute">
										<img src="@/assets/images/Group11engine.png"
											class="img-border position-absolute" alt="">
									</span>
									<span class="border-bottom-btn position-absolute">
										<img src="@/assets/images/Path473engine.png"
											class="img-border position-absolute" alt="">
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div class="col-6 col-sm-6 col-md-3 col-lg-2  mb-4 position-relative">
					<div class="cardOverlay d-flex justify-content-start align-items-center flex-column pt-4">
						<img src="../../public/images/layer2.png">
					</div>
					<div class="card">
						<div class="card-body d-flex flex-column justify-content-center align-items-center">
							<h5 class="card-title">{{ $t('carShop') }}</h5>
							<p class="card-text ctext">
								Lorem Ipsum is simply dummy text of the printing and
							</p>
							<div class="load-more-info w-100 d-flex justify-content-center align-items-center">
								<div class="list-item-btn position-relative load-more-div">
									<span class="border-bottom-btn border-top-btn position-absolute">
										<img src="@/assets/images/Group12engine.png"
											class="img-border position-absolute" alt="">
									</span>

									<span
										class="border-bottom-btn border-top-btn border-right-radius position-absolute">
										<img src="@/assets/images/Path467engine.png"
											class="img-border position-absolute" alt="">
									</span>

									<span
										class="border-bottom-btn border-top-btn border-right-radius border-right-bottom-radius position-absolute">
										<img src="@/assets/images/Path465engine.png"
											class="img-border position-absolute" alt="">
									</span>
									<button type="button" class="signin-btnli Start Engine load-more-btn mx-auto"
										data-bs-toggle="modal" data-bs-target="#carShopFilter">
										{{ $t('loadMore') }}
									</button>
									<span class="border-bottom-btn border-left-btn position-absolute">
										<img src="@/assets/images/Group11engine.png"
											class="img-border position-absolute" alt="">
									</span>
									<span class="border-bottom-btn position-absolute">
										<img src="@/assets/images/Path473engine.png"
											class="img-border position-absolute" alt="">
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="col-6 col-sm-6 col-md-3 col-lg-2  mb-4 position-relative">
					<div class="cardOverlay d-flex justify-content-start align-items-center flex-column pt-4">
						<img src="../../public/images/layer2.png">
					</div>
					<div class="card">
						<div class="card-body d-flex flex-column justify-content-center align-items-center">
							<h5 class="card-title">{{ $t('marketPlace') }}</h5>
							<p class="card-text ctext">
								Lorem Ipsum is simply dummy text of the printing and
							</p>
							<div class="load-more-info w-100 d-flex justify-content-center align-items-center">
								<div class="list-item-btn position-relative load-more-div">
									<span class="border-bottom-btn border-top-btn position-absolute">
										<img src="@/assets/images/Group12engine.png"
											class="img-border position-absolute" alt="">
									</span>

									<span
										class="border-bottom-btn border-top-btn border-right-radius position-absolute">
										<img src="@/assets/images/Path467engine.png"
											class="img-border position-absolute" alt="">
									</span>

									<span
										class="border-bottom-btn border-top-btn border-right-radius border-right-bottom-radius position-absolute">
										<img src="@/assets/images/Path465engine.png"
											class="img-border position-absolute" alt="">
									</span>
									<button type="button" class="signin-btnli Start Engine load-more-btn mx-auto"
										data-bs-toggle="modal" data-bs-target="#maketModal">
										{{ $t('loadMore') }}
									</button>
									<span class="border-bottom-btn border-left-btn position-absolute">
										<img src="@/assets/images/Group11engine.png"
											class="img-border position-absolute" alt="">
									</span>
									<span class="border-bottom-btn position-absolute">
										<img src="@/assets/images/Path473engine.png"
											class="img-border position-absolute" alt="">
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>

			</div>
		</div>
		<div class="container my-5 d-none d-md-block">
			<div class="banner-content">
				<!-- <h1 class="banner-title">Changing the Car World</h1> -->
				<p class="banner-para">
					Welcome to our ultimate platform for car enthusiasts! Explore our five core modules: a marketplace
					for
					buying and selling modified and super cars, vibrant community forum threads for engaging with fellow
					enthusiasts, a car shops finder to locate the best maintenance and upgrade services, and a parts
					marketplace for discovering a wide selection of vehicle components.
				</p>
			</div>
		</div>

		<div class="container my-5 d-none d-md-block">
			<div class="main-content-home1">
				<div class="logo-R-div d-flex justify-content-center align-items-center">

					<img class="logo-R" src="@/assets/images/Group888.png" alt="R" />

				</div>

				<!-- <div class="list-item-btn position-relative start-engine-div">
            <span class="border-bottom-btn border-top-btn position-absolute">
                <img src="http://localhost/revvdout/assets/images/Group12engine.png" class="img-border position-absolute" alt="">
            </span>

            <span class="border-bottom-btn border-top-btn border-right-radius position-absolute">
                <img src="http://localhost/revvdout/assets/images/Path467engine.png" class="img-border position-absolute" alt="">
            </span>

            <span class="border-bottom-btn border-top-btn border-right-radius border-right-bottom-radius position-absolute">
                <img src="http://localhost/revvdout/assets/images/Path465engine.png" class="img-border position-absolute" alt="">
            </span>
            <button type="button" class="signin-btnli Start Engine mx-auto">
                Start Engine
            </button>
            <span class="border-bottom-btn border-left-btn position-absolute">
                <img src="http://localhost/revvdout/assets/images/Group11engine.png" class="img-border position-absolute" alt="">
            </span>
            <span class="border-bottom-btn position-absolute">
                <img src="http://localhost/revvdout/assets/images/Path473engine.png" class="img-border position-absolute" alt="">
            </span>
        </div> -->
			</div>
		</div>
	</section>

	<!-- market place modal -->

	<div class="modal fade" tabindex="-1" role="dialog" id="maketModal">
		<div class="modal-dialog modal-dialog-centered" role="document">
			<div class="modal-content">
				<div class="modal-body text-center">
					<span class="close-icon" data-bs-dismiss="modal" aria-label="Close">
						<i class="fas fa-times"></i>
					</span>
					<div class="mt-4 py-2">
						<h5 class="card-title"> <span class="choose">{{ $t('choose') }} </span>{{ $t('yourCountry') }}
						</h5>
					</div>
					<div class="mt-2 py-2 d-flex justify-content-center align-items-center">
						<select class="form-select" id="countries" name="countries" required="true"
							aria-required="true">
							<option selected>Country</option>
							<option value="Afghanistan">Afghanistan</option>
							<option value="Albania">Albania</option>
							<option value="Algeria">Algeria</option>
							<option value="Andorra">Andorra</option>
							<option value="Angola">Angola</option>
							<option value="Antigua and Barbuda">Antigua and Barbuda</option>
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
							<option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option>
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
							<option value="Central African Republic">Central African Republic</option>
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
							<option value="Dominican Republic">Dominican Republic</option>
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
							<option value="Saint Kitts and Nevis">Saint Kitts and Nevis</option>
							<option value="Saint Lucia">Saint Lucia</option>
							<option value="Saint Vincent and the Grenadines">Saint Vincent and the
								Grenadines</option>
							<option value="Samoa">Samoa</option>
							<option value="San Marino">San Marino</option>
							<option value="Sao Tome and Principe">Sao Tome and Principe</option>
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
							<option value="Trinidad and Tobago">Trinidad and Tobago</option>
							<option value="Tunisia">Tunisia</option>
							<option value="Turkey">Turkey</option>
							<option value="Turkmenistan">Turkmenistan</option>
							<option value="Tuvalu">Tuvalu</option>
							<option value="Uganda">Uganda</option>
							<option value="Ukraine">Ukraine</option>
							<option value="United Arab Emirates">United Arab Emirates</option>
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

					<div class="load-more-info w-100 d-flex justify-content-center align-items-center mb-4">
						<div class="list-item-btn position-relative load-more-div proceed-div">
							<span class="border-bottom-btn border-top-btn position-absolute">
								<img src="@/assets/images/Group12engine.png" class="img-border position-absolute"
									alt="">
							</span>

							<span
								class="border-bottom-btn border-top-btn border-right-radius popup-right position-absolute proceed-top-right">
								<img src="@/assets/images/Path467engine.png" class="img-border position-absolute"
									alt="">
							</span>

							<span
								class="border-bottom-btn border-top-btn border-right-radius border-right-bottom-radius popup-right-bottom position-absolute proceed-bottom-right">
								<img src="@/assets/images/Path465engine.png" class="img-border position-absolute"
									alt="">
							</span>
							<!-- data-bs-toggle="modal" -->
							<router-link to="/map3" class="signin-btnli Start Engine load-more-btn proceed-btn mx-auto"
								data-bs-target="#mailModal">
								{{ $t('proceed') }}
							</router-link>
							<span class="border-bottom-btn border-left-btn new-popup position-absolute proceed-left">
								<img src="@/assets/images/Group11engine.png" class="img-border position-absolute"
									alt="">
							</span>
							<span class="border-bottom-btn position-absolute">
								<img src="@/assets/images/Path473engine.png" class="img-border position-absolute"
									alt="">
							</span>
						</div>
					</div>

				</div>
			</div>
		</div>
	</div>

	<div class="modal fade" tabindex="-1" role="dialog" id="mailModal">
		<div class="modal-dialog modal-dialog-centered" role="document">
			<div class="modal-content">
				<div class="modal-body text-center">
					<span class="close-icon" data-bs-dismiss="modal" aria-label="Close">
						<i class="fas fa-times"></i>
					</span>
					<div class="mt-4 py-2">
						<h5 class="card-title"> <span class="choose">{{ $t('choose') }} </span>{{ $t('yourCountry') }}
						</h5>
					</div>
					<div class="mt-2 py-2 d-flex justify-content-center align-items-center">
						<select class="form-select" id="countries" name="countries" required="true"
							aria-required="true">
							<option selected>Country</option>
							<option value="Afghanistan">Afghanistan</option>
							<option value="Albania">Albania</option>
							<option value="Algeria">Algeria</option>
							<option value="Andorra">Andorra</option>
							<option value="Angola">Angola</option>
							<option value="Antigua and Barbuda">Antigua and Barbuda</option>
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
							<option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option>
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
							<option value="Central African Republic">Central African Republic</option>
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
							<option value="Dominican Republic">Dominican Republic</option>
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
							<option value="Saint Kitts and Nevis">Saint Kitts and Nevis</option>
							<option value="Saint Lucia">Saint Lucia</option>
							<option value="Saint Vincent and the Grenadines">Saint Vincent and the
								Grenadines</option>
							<option value="Samoa">Samoa</option>
							<option value="San Marino">San Marino</option>
							<option value="Sao Tome and Principe">Sao Tome and Principe</option>
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
							<option value="Trinidad and Tobago">Trinidad and Tobago</option>
							<option value="Tunisia">Tunisia</option>
							<option value="Turkey">Turkey</option>
							<option value="Turkmenistan">Turkmenistan</option>
							<option value="Tuvalu">Tuvalu</option>
							<option value="Uganda">Uganda</option>
							<option value="Ukraine">Ukraine</option>
							<option value="United Arab Emirates">United Arab Emirates</option>
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

					<div class="load-more-info w-100 d-flex justify-content-center align-items-center mb-4">
						<div class="list-item-btn position-relative load-more-div proceed-div">
							<span class="border-bottom-btn border-top-btn position-absolute">
								<img src="@/assets/images/Group12engine.png" class="img-border position-absolute"
									alt="">
							</span>

							<span
								class="border-bottom-btn border-top-btn border-right-radius popup-right position-absolute proceed-top-right">
								<img src="@/assets/images/Path467engine.png" class="img-border position-absolute"
									alt="">
							</span>

							<span
								class="border-bottom-btn border-top-btn border-right-radius border-right-bottom-radius popup-right-bottom position-absolute proceed-bottom-right">
								<img src="@/assets/images/Path465engine.png" class="img-border position-absolute"
									alt="">
							</span>
							<!-- data-bs-toggle="modal" -->
							<router-link to="/map" class="signin-btnli Start Engine load-more-btn proceed-btn mx-auto"
								data-bs-target="#mailModal">
								{{ $t('proceed') }}
							</router-link>
							<span class="border-bottom-btn border-left-btn new-popup position-absolute proceed-left">
								<img src="@/assets/images/Group11engine.png" class="img-border position-absolute"
									alt="">
							</span>
							<span class="border-bottom-btn position-absolute">
								<img src="@/assets/images/Path473engine.png" class="img-border position-absolute"
									alt="">
							</span>
						</div>
					</div>

				</div>
			</div>
		</div>
	</div>


	<div class="modal fade" tabindex="-1" role="dialog" id="carShopFilter">
		<div class="modal-dialog modal-dialog-centered" role="document">
			<div class="modal-content">
				<div class="modal-body text-center">
					<span class="close-icon" data-bs-dismiss="modal" aria-label="Close">
						<i class="fas fa-times"></i>
					</span>
					<form action="">
						<div class="mt-4 py-2">
							<h5 class="card-title"> <span class="choose"> Filter </span></h5>
						</div>
						<div class="row">
							<div class="col-md-6">
								<div class="mt-2 py-2 d-flex justify-content-center align-items-center">
									<select class="form-select" id="country" name="country" required="true"
										aria-required="true">
										<option selected>Country</option>
										<option value="Afghanistan">Afghanistan</option>
										<option value="Albania">Albania</option>
										<option value="Algeria">Algeria</option>
										<option value="Andorra">Andorra</option>
										<option value="Angola">Angola</option>
										<option value="Antigua and Barbuda">Antigua and Barbuda</option>
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
										<option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option>
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
										<option value="Central African Republic">Central African Republic</option>
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
										<option value="Dominican Republic">Dominican Republic</option>
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
										<option value="Saint Kitts and Nevis">Saint Kitts and Nevis</option>
										<option value="Saint Lucia">Saint Lucia</option>
										<option value="Saint Vincent and the Grenadines">Saint Vincent and the
											Grenadines</option>
										<option value="Samoa">Samoa</option>
										<option value="San Marino">San Marino</option>
										<option value="Sao Tome and Principe">Sao Tome and Principe</option>
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
										<option value="Trinidad and Tobago">Trinidad and Tobago</option>
										<option value="Tunisia">Tunisia</option>
										<option value="Turkey">Turkey</option>
										<option value="Turkmenistan">Turkmenistan</option>
										<option value="Tuvalu">Tuvalu</option>
										<option value="Uganda">Uganda</option>
										<option value="Ukraine">Ukraine</option>
										<option value="United Arab Emirates">United Arab Emirates</option>
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
							</div>

							<div class="col-md-6">
								<div class="mt-2 py-2 d-flex justify-content-center align-items-center">
									<select class="form-select" id="city" name="city" required="true"
										aria-required="true">
										<option selected>City</option>
										<option value="1">1</option>
										<option value="2">2</option>
									</select>
								</div>
							</div>

							<div class="col-md-6">
								<div class="mt-2 py-2 d-flex justify-content-center align-items-center">
									<select class="form-select" id="cosmetic" name="cosmetic" required="true"
										aria-required="true">
										<option selected>Cosmetic tuning</option>
										<option value="1">1</option>
										<option value="2">2</option>
									</select>
								</div>
							</div>

							<div class="col-md-6">
								<div class="mt-2 py-2 d-flex justify-content-center align-items-center">
									<select class="form-select" id="performanceShops" name="performanceShops"
										required="true" aria-required="true">
										<option selected>Performance shops</option>
										<option value="1">1</option>
										<option value="2">2</option>
									</select>
								</div>
							</div>


							<div class="col-md-6">
								<div class="load-more-info w-100 d-flex justify-content-end align-items-center mb-4">
									<div class="list-item-btn position-relative load-more-div proceed-div">
										<span class="border-bottom-btn border-top-btn position-absolute">
											<img src="@/assets/images/Group12white.png"
												class="img-border position-absolute" alt="">
										</span>

										<span
											class="border-bottom-btn border-top-btn border-right-radius popup-right position-absolute">
											<img src="@/assets/images/Path467white.png"
												class="img-border position-absolute" alt="">
										</span>

										<span
											class="border-bottom-btn border-top-btn border-right-radius border-right-bottom-radius popup-right-bottom position-absolute">
											<img src="@/assets/images/Path465white.png"
												class="img-border position-absolute" alt="">
										</span>
										<router-link to="/carshop"
											class="signin-btnli signup-btnli Start Engine load-more-btn proceed-btn width-set">
											All in one Shops
										</router-link>
										<span class="border-bottom-btn border-left-btn new-popup position-absolute">
											<img src="@/assets/images/Group11white.png"
												class="img-border position-absolute" alt="">
										</span>
										<span class="border-bottom-btn position-absolute">
											<img src="@/assets/images/Path473white.png"
												class="img-border position-absolute" alt="">
										</span>
									</div>
								</div>
							</div>
							<div class="col-md-6">
								<div class="load-more-info w-100 d-flex justify-content-start align-items-center mb-4">
									<div class="list-item-btn position-relative load-more-div proceed-div">
										<span class="border-bottom-btn border-top-btn position-absolute">
											<img src="@/assets/images/Group12engine.png"
												class="img-border position-absolute" alt="">
										</span>

										<span
											class="border-bottom-btn border-top-btn border-right-radius popup-right position-absolute">
											<img src="@/assets/images/Path467engine.png"
												class="img-border position-absolute" alt="">
										</span>

										<span
											class="border-bottom-btn border-top-btn border-right-radius border-right-bottom-radius popup-right-bottom position-absolute">
											<img src="@/assets/images/Path465engine.png"
												class="img-border position-absolute" alt="">
										</span>
										<!-- data-bs-toggle="modal" -->
										<router-link to="/cars"
											class="signin-btnli Start Engine load-more-btn proceed-btn width-set"
											data-bs-target="#mailModal">
											Proceed
										</router-link>
										<span class="border-bottom-btn border-left-btn new-popup position-absolute">
											<img src="@/assets/images/Group11engine.png"
												class="img-border position-absolute" alt="">
										</span>
										<span class="border-bottom-btn position-absolute">
											<img src="@/assets/images/Path473engine.png"
												class="img-border position-absolute" alt="">
										</span>
									</div>
								</div>
							</div>
						</div>
					</form>

				</div>
			</div>
		</div>
	</div>



</template>

<script>
export default {
	name: "OfferCar",
};
</script>

<style scoped>
.card {
	position: relative;
	display: flex;
	flex-direction: column;
	min-width: 0;
	word-wrap: break-word;
	background-color: transparent;
	background-clip: border-box;
	border: 1px solid rgba(0, 0, 0, 0.125);
	border-radius: 0.25rem;
	text-align: center;
	justify-content: center;
	align-items: center;

}

.card-title {
	font-size: 22px;
	font-weight: bold;
	color: #ffffff;
	margin-bottom: 1.5rem;
}

.card-body {
	padding: 1rem 0 0 0;
}

.cardOverlay {

	position: absolute;
	height: 100%;
	width: 95%;

	/* background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
		/* Background image */
	/* url('../../public/images/layer1.png'); */
	opacity: 0.9;
	background-size: cover;
	z-index: 4
}

.cardOverlay img {
	position: absolute;
	width: 100%;
	top: 0;
	height: 110%
}




.border-bottom-btn.border-left-btn.position-absolute.new-popup.proceed-left {
	left: 13px;
}

.border-bottom-btn.border-top-btn.border-right-radius.popup-right.proceed-top-right {
	right: 0;
}

.border-bottom-btn.border-top-btn.border-right-radius.popup-right-bottom.proceed-bottom-right {
	right: 3px;
}

@media(max-width:786px) {
	.cardOverlay img {
		position: absolute;
		width: 100%;
		top: 10px;
		height: 100%
	}

}

@media (min-width: 576px) {
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

	.form-select {
		display: block;
		width: 100%;
		max-width: 920px;
		height: 40px;
		padding: 0.375rem 2.25rem 0.375rem 1.75rem;
		-moz-padding-start: calc(0.75rem - 3px);

		color: #c5c5c5;
		background-color: #000b1c;
		/* background-image: url("../images/Icon\ awesome-chevron-down.png"); */
		background-image: url("../assets/images/Icon\ awesome-chevron-down.png");
		background-repeat: no-repeat;
		background-position: right 1.75rem center;
		background-size: 16px 12px;
		border: 1px solid #1a202c;
		border-radius: 5px;
		transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
		-webkit-appearance: none;
		-moz-appearance: none;
		appearance: none;
		font-family: "Gruppo", sans-serif;
		cursor: pointer;
	}

	.modal-dialog {
		width: 100%;
		max-width: 1000px;
		margin: 1.75rem auto;
		position: relative;
	}

	.form-select:focus {
		border-color: #f95f19;
		outline: 0;
		box-shadow: none;
	}


}

@media(max-width:461px) {
	.ctext {
		width: 50%
	}

	.cardOverlay img {
		position: absolute;
		width: 100%;
		top: 8px;
		/* object-fit: cover; */
		background-position: center;
		height: 102%;
	}
}

@media (min-width: 462px) and (max-width: 572px) {
	.ctext {
		width: 50%
	}

	.cardOverlay img {
		position: absolute;
		width: 47%;
		top: 10px;
		/* object-fit: contain; */
		height: 102%;
	}
}
</style>