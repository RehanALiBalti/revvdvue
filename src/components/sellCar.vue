<template>


    <div class="container my-5">
        <div class="">
            <form class="row" @submit.prevent="submitForm">
                <h3 class="form-title mb-0">Basic <span>Car Details</span></h3>
                <div class="col-md-6">
                    <label class="form-label">Car Make</label>
                    <select class="form-select form-input h35px" v-model="carMake">
                        <option selected value="">Make</option>
                        <option v-for="make in carMakes" :key="make" :value="make">{{ make }}</option>
                    </select>
                </div>
                <div class="col-md-6">
                    <label class="form-label">Car Model</label>
                    <select class="form-select form-input h35px" v-model="carModel">
                        <option selected value="">Model</option>
                        <option v-for="model in carModels" :key="model" :value="model">{{ model }}</option>
                    </select>
                </div>
                <div class="col-md-6">
                    <label class="form-label">Community Valuation or Normal Sell</label>
                    <select v-model="sellType" @change="togglePrice" class="form-select form-input h35px">
                        <option value="community">Community Valuation</option>
                        <option value="normal">Normal Sell</option>
                    </select>
                </div>
                <div class="col-md-6">
                    <label class="form-label">Price</label>
                    <input class="form-control form-input h35px" type="number" v-model="price"
                        :disabled="sellType === 'community'" placeholder="Enter price" />
                </div>
                <div class="col-md-6">
                    <label class="form-label">Year</label>
                    <input type="number" class="form-control form-input h35px" v-model="year"
                        placeholder="Enter year" />
                </div>
                <div class="col-md-6">
                    <label class="form-label">Mileage</label>
                    <div class="input-group">
                        <select class="form-select form-input h35px" v-model="milageUnit">
                            <option value="km">KM</option>
                            <option value="miles">Miles</option>
                        </select>
                        <input type="number" class="form-control form-input h35px" v-model="milage"
                            placeholder="Enter mileage" />
                    </div>
                </div>
                <div class="col-md-6">
                    <label class="form-label">Engine Configuration</label>
                    <select class="form-select form-input h35px" v-model="engineConfig">
                        <option selected value="">Engine Configuration</option>
                        <option v-for="config in engineConfigs" :key="config" :value="config">{{ config }}</option>
                    </select>
                </div>
                <div class="col-md-6">
                    <label class="form-label">Engine Capacity (L)</label>
                    <input type="text" class="form-control form-input h35px" v-model="engineCapacity"
                        placeholder="Enter engine capacity" />
                </div>
                <div class="col-md-6">
                    <label class="form-label">Horsepower (HP)</label>
                    <input type="number" class="form-control form-input h35px" v-model="horsepower"
                        placeholder="Horsepower (HP)" />
                </div>
                <div class="col-md-6">
                    <label class="form-label">Torque (Nm)</label>
                    <input type="number" class="form-control form-input h35px" v-model="torque"
                        placeholder="Torque (Nm)" />
                </div>
                <div class="col-md-6">
                    <label class="form-label">Type of Modification</label>
                    <select class="form-select form-input h35px" v-model="modificationType">
                        <option selected value="">Type of Modification</option>
                        <option value="cosmetic">Cosmetic</option>
                        <option value="performance">Performance</option>
                        <option value="both">Both</option>
                    </select>
                </div>
                <div class="col-md-6">
                    <label class="form-label">Drive Train</label>
                    <select class="form-select form-input h35px" v-model="driveTrain">
                        <option selected value="">Drive Train</option>
                        <option v-for="train in driveTrains" :key="train" :value="train">{{ train }}</option>
                    </select>
                </div>
                <div class="col-md-6">
                    <label class="form-label">Transmission</label>
                    <select class="form-select form-input h35px" v-model="transmission">
                        <option selected value="">Transmission</option>
                        <option v-for="trans in transmissions" :key="trans" :value="trans">{{ trans }}</option>
                    </select>
                </div>
                <div class="col-md-6">
                    <label class="form-label">Color</label>
                    <select class="form-select form-input h35px" v-model="color">
                        <option selected value="">Color</option>
                        <option v-for="col in colors" :key="col" :value="col">{{ col }}</option>
                    </select>
                </div>
                <div class="col-md-6">
                    <label class="form-label">Build Type</label>
                    <select class="form-select form-input h35px" v-model="buildType">
                        <option selected value="">Build Type</option>
                        <option v-for="build in buildTypes" :key="build" :value="build">{{ build }}</option>
                    </select>
                </div>
                <div class="col-md-6">
                    <label class="form-label">Fuel Type</label>
                    <select class="form-select form-input h35px" v-model="fuelType">
                        <option selected value="">Fuel Type</option>
                        <option v-for="fuel in fuelTypes" :key="fuel" :value="fuel">{{ fuel }}</option>
                    </select>
                </div>
                <div class="col-md-6">
                    <label class="form-label">Category</label>
                    <select class="form-select form-input h35px" v-model="category">
                        <option selected value="">Category</option>
                        <option v-for="cat in categories" :key="cat" :value="cat">{{ cat }}</option>
                    </select>
                </div>
                <div class="col-md-6">
                    <label class="form-label">Previous Owners</label>
                    <input type="number" class="form-control form-input h35px" v-model="previousOwners"
                        placeholder="Enter number of previous owners" />
                </div>
                <div class="col-md-6">
                    <label class="form-label">Car Version</label>
                    <select class="form-select form-input h35px" v-model="carVersion">
                        <option selected value="">Car Version</option>
                        <option v-for="version in carVersions" :key="version" :value="version">{{ version }}</option>
                    </select>
                </div>
                <div class="col-md-6">
                    <label class="form-label">Drive Side</label>
                    <select class="form-select form-input h35px" v-model="driveSide">
                        <option selected value="">Drive Side</option>
                        <option value="left">Left-hand drive</option>
                        <option value="right">Right-hand drive</option>
                    </select>
                </div>
                <div class="col-md-6">
                    <label class="form-label">Promo Code</label>
                    <input type="text" class="form-control form-input h35px" v-model="promoCode"
                        placeholder="Enter promo code" />
                </div>
                <div class="col-md-6">
                    <label class="form-label">Country</label>
                    <select class="form-select form-input h35px" v-model="country">
                        <option selected value="">Country</option>
                        <option v-for="country in countries" :key="country" :value="country">{{ country }}</option>
                    </select>
                </div>
                <div class="col-md-6">
                    <label class="form-label">City</label>
                    <input type="text" class="form-control form-input h35px" v-model="city" placeholder="Enter city" />
                </div>

                <h3 class="form-title mt-2 mb-0"><span>Car</span> Services</h3>
                <div class="col-md-6">
                    <label class="form-label">Service Mileage</label>
                    <input type="number" class="form-control form-input h35px" v-model="serviceMilage"
                        placeholder="Enter service mileage" />
                </div>
                <div class="col-md-6">
                    <label class="form-label">Type of Service</label>
                    <select class="form-select form-input h35px" v-model="serviceType">
                        <option selected value="">Type of Service</option>
                        <option v-for="service in serviceTypes" :key="service" :value="service">{{ service }}</option>
                    </select>
                </div>
                <div class="col-md-12">
                    <label class="form-label">Attach Photo of Receipt or Service Report</label>
                    <input type="file" class="form-control form-input h35px d-none" @change="handleFileChange" multiple
                        id="file_p" />

                    <div class="load-more-info w-100 d-flex justify-content-start align-items-center mb-4 mx-auto">
                        <div class="list-item-btn position-relative load-more-div proceed-div ">
                            <span class="border-bottom-btn border-top-btn position-absolute">
                                <img src="@/assets/images/Group12engine.png" class="img-border position-absolute"
                                    alt="" />
                            </span>
                            <span
                                class="border-bottom-btn border-top-btn border-right-radius popup-right position-absolute">
                                <img src="@/assets/images/Path467engine.png" class="img-border position-absolute"
                                    alt="" />
                            </span>
                            <span
                                class="border-bottom-btn border-top-btn border-right-radius border-right-bottom-radius popup-right-bottom position-absolute">
                                <img src="@/assets/images/Path465engine.png" class="img-border position-absolute"
                                    alt="" />
                            </span>
                            <label for="file_p" class="signin-btnli Start Engine load-more-btn proceed-btn width-set"
                                id="submit-button">
                                Choose
                            </label>
                            <span class="border-bottom-btn border-left-btn new-popup position-absolute">
                                <img src="@/assets/images/Group11engine.png" class="img-border position-absolute"
                                    alt="" />
                            </span>
                            <span class="border-bottom-btn position-absolute">
                                <img src="@/assets/images/Path473engine.png" class="img-border position-absolute"
                                    alt="" />
                            </span>
                        </div>
                    </div>

                </div>

                <h3 class="form-title mb-0">List of <span>Modifications</span></h3>

                <!-- Dropdown to select modification category -->
                <div class="col-md-12 pos-rel">
                    <label class="form-label">Modification Category</label>
                    <!-- <select class="form-select form-input h35px" v-model="selectedModCategory">
                        <option value="" selected>Select a category</option>

                        <option v-for="category in modCategories" :key="category" :value="category">{{ category }}
                        </option>
                    </select> -->

                    <v-select class=" form-input h35px f-v-sel" v-model="selectedModCategory" :options="modCategories"
                        placeholder="Select a Category" :filterable="true" taggable multiple>
                        <template #selected-options="{ values }">
                            <div class="selected-tags">
                                <span v-for="(value, index) in values" :key="index" class="selected-tag">
                                    {{ value }}
                                    <span class="remove-tag" @click.stop="removeCategory(value)">✕</span>
                                </span>
                            </div>
                        </template>
                        <template #open-indicator>
                            <!-- Custom SVG Icon -->
                            <img class="indicator_Image"
                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAAMCAYAAACA0IaCAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAADiSURBVChTjZIBEcIwDEVbBeAAHAAOOgk4YA7ACShgFlDAHAAOkAAKxv9cwqWl3dq7XbMk/+03nR+GYe6cu+Lharz3L4knN2jXou2h23ok7kisRMm4CmhANMN1IuyJYGFsTALlNDdolkZ3IYxWezyzGqAZC3W6HgiC51sByDk0dnAF0JsOOesvbATYoamVul6UdURQQA9H434wEQTserP6nQ7BQfJF0B9MgDvsZ3s8xPxd9NZYihxpb+TMHDkH1HIWlHVWAdzojBL38czSIm4vddgCxBlmV/aYtlOAR+T2YyBqPrkMZFSDhkgfAAAAAElFTkSuQmCC"
                                width="11px" />
                        </template>
                        <template #no-options>
                            <span>No options available</span>
                        </template>
                    </v-select>
                </div>


                <div class="row">
                    <!-- Input fields for modification details -->
                    <!-- <div v-if="selectedModCategory" class="col-md-12   p-3 rounded mt-3">
                        <div class="row g-2 borderor">
                            <div class="col-md-3">
                                <input type="text" class="form-control form-input h35px" v-model="newMod.partName"
                                    placeholder="Part Name" />
                            </div>
                            <div class="col-md-3">
                                <input type="text" class="form-control form-input h35px" v-model="newMod.partBrand"
                                    placeholder="Part Brand" />
                            </div>
                            <div class="col-md-3">
                                <input type="number" class="form-control form-input h35px"
                                    v-model="newMod.milageInstalled" placeholder="Mileage When Installed" />
                            </div>
                            <div class="col-md-3">
                                <textarea class="form-control form-input h35px" v-model="newMod.notes"
                                    placeholder="Additional Notes"></textarea>
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
                                        <button type="button" @click="addMod"
                                            class="signin-btnli Start Engine load-more-btn proceed-btn width-set"
                                            id="submit-button">
                                            Add Modification
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
                    </div> -->
                    <div v-for="(mod, index) in modifications" :key="index" class="modification">


                        <h3 class="form-title">Modification {{ index + 1 }} <span>({{ mod.category }})</span>
                        </h3>
                        <div class="row g-3">
                            <div class="col-md-4">
                                <input v-model="mod.partName" class="form-control form-input h35px" type="text"
                                    placeholder="Part Name" />
                            </div>
                            <div class="col-md-4">
                                <input v-model="mod.partBrand" class="form-control form-input h35px" type="text"
                                    placeholder="Part Brand" />
                            </div>
                            <div class="col-md-4">
                                <input v-model="mod.milageInstalled" type="text" class="form-control form-input h35px"
                                    placeholder="Mileage Installed" />


                            </div>
                            <div class="col-md-12">
                                <textarea v-model="mod.notes" class="form-control form-input h35px"
                                    placeholder="Notes"></textarea>
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
                                        <button type="submit"
                                            class="signin-btnli Start Engine load-more-btn proceed-btn width-set"
                                            id="submit-button" @click="removeMod(index)">
                                            Remove
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









                        <!-- Display added modifications -->
                        <div v-for="(mod, index) in modifications" :key="index"
                            class="col-md-12  p-3 rounded mt-3 d-none">
                            <div class="row g-2">
                                <div class="col-md-3">
                                    <strong class="form-label">Category:</strong>
                                    <p class="coloror"> {{ mod.category }}</p>
                                </div>
                                <div class="col-md-3">
                                    <strong class="form-label">Part Name:</strong>
                                    <p class="coloror">{{ mod.partName }}</p>
                                </div>
                                <div class="col-md-3">
                                    <strong class="form-label">Part Brand:</strong>
                                    <p class="coloror"> {{ mod.partBrand }}</p>
                                </div>
                                <div class="col-md-3">
                                    <strong class="form-label">Mileage Installed:</strong>
                                    <p class="coloror">{{ mod.milageInstalled }}</p>
                                </div>
                                <div class="col-md-12">
                                    <strong class="form-label">Notes:</strong>
                                    <p class="coloror">{{ mod.notes }}</p>
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
                                            <button type="submit"
                                                class="signin-btnli Start Engine load-more-btn proceed-btn width-set"
                                                id="submit-button" @click="removeMod(index)">
                                                Remove
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
                    <!-- Submit button -->
                    <div class="col-md-12">
                        <div class="load-more-info w-100 d-flex justify-content-start align-items-center mb-4 mx-auto">
                            <div class="list-item-btn position-relative load-more-div proceed-div mx-auto">
                                <span class="border-bottom-btn border-top-btn position-absolute">
                                    <img src="@/assets/images/Group12engine.png" class="img-border position-absolute"
                                        alt="" />
                                </span>
                                <span
                                    class="border-bottom-btn border-top-btn border-right-radius popup-right position-absolute">
                                    <img src="@/assets/images/Path467engine.png" class="img-border position-absolute"
                                        alt="" />
                                </span>
                                <span
                                    class="border-bottom-btn border-top-btn border-right-radius border-right-bottom-radius popup-right-bottom position-absolute">
                                    <img src="@/assets/images/Path465engine.png" class="img-border position-absolute"
                                        alt="" />
                                </span>
                                <button type="submit"
                                    class="signin-btnli Start Engine load-more-btn proceed-btn width-set"
                                    id="submit-button">
                                    Submit
                                </button>
                                <span class="border-bottom-btn border-left-btn new-popup position-absolute">
                                    <img src="@/assets/images/Group11engine.png" class="img-border position-absolute"
                                        alt="" />
                                </span>
                                <span class="border-bottom-btn position-absolute">
                                    <img src="@/assets/images/Path473engine.png" class="img-border position-absolute"
                                        alt="" />
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </form>

        </div>
    </div>


</template>

<script>
import vSelect from "vue-select";
import "vue-select/dist/vue-select.css";

export default {
    name: "sellCar",
    components: {


        vSelect,

    },

    data() {
        return {
            selectedModCategory: "", // Selected modification category
            newMod: {
                category: "",
                partName: "",
                partBrand: "",
                milageInstalled: "",
                notes: "",
            },
            modifications: [], // List of added modifications
            modCategories: [
                "Engine",
                "Powertrain and Transmission",
                "Fuel",
                "Ignition System",
                "Cooling",
                "Electrical and Sound System",
                "Suspension and Steering",
                "Breaking System",
                "Exhaust System",
                "Forced Induction",
                "Ecu",
                "Wheels and Tires",
                "Nitrous",
                "Body Parts",
                "Interior",
            ],
            carMake: '',
            carModel: '',
            sellType: 'normal',
            price: '',
            year: '',
            milageUnit: 'km',
            milage: '',
            engineConfig: '',
            engineCapacity: '',
            horsepower: '',
            torque: '',
            modificationType: '',
            driveTrain: '',
            transmission: '',
            fuelType: '',
            color: '',
            buildType: '',
            previousOwners: '',
            carVersion: '',
            driveSide: '',
            promoCode: '',
            country: '',
            city: '',
            serviceMilage: '',
            serviceType: '',

            carMakes: ['Toyota', 'Honda'],
            carModels: ['Camry', 'Civic'],
            engineConfigs: ['3I', '4I', '5I', '6I', 'V6', 'V8', 'V10', 'V12', 'W8', 'W12', 'W16', '2 rotor', '3 rotor', '4 rotor', 'Flat 4', 'Flat 6'],
            driveTrains: ['RWD', 'FWD', 'AWD', '4x4'],
            transmissions: ['Manual', 'Automatic', 'Sequential'],
            colors: ['Red', 'Blue', 'Black', 'White', 'Silver', 'Green'],
            buildTypes: ['Drag', 'Street', 'Show/stance', 'Drift', 'Track', 'Off road', 'Restoration', 'Daily driver', 'Luxury tuning', 'Hot rod', 'Sleeper'],
            fuelTypes: ['Petrol', 'Diesel', 'Ethanol', 'Methanol', 'Hybrid', 'Electric'],
            categories: ['Saloon', 'Hatchback', 'Estate', 'SUV', 'Coupe', 'Convertible'],
            carVersions: ['EU', 'USA', 'GP'],
            countries: ['USA', 'Canada', 'UK', 'Germany', 'Japan'],
            serviceTypes: ['Oil Change', 'Brake Service', 'Tire Rotation', 'Engine Tune-Up'],
            formData: {
                title: "",
                selectedBrand: "",
                bodyType: "",
                type: "",
                seats: null,
                doors: null,
                countryVersion: "",
                offerNumber: null,
                modelCode: "",
                milage: null,
                firstRegistration: "",
                generalInspection: "",
                previousOwners: "",
                fullServiceHistory: "",
                nonSmokerVehicle: "",
                price: null,
                descriptionTitle: "",
                fullDescription: "",
                uploadPhotos: [],
            },
            brands: [
                "Car Enthusiast",
                "Tunning/Performance Shop",
                "Private Car Seller",
                "Professional Car Seller",
                "Cosmetics modification shop Performance Modifications shop",
                "Car Photography",
                "Car Spotter",
                "Car Club",
                "Car Animator/Illustrator",
            ],
            errorMessage: "",
        };
    },
    watch: {
        // Watch for changes in the selected modification category
        // selectedModCategory(newCategory) {
        //     this.newMod.category = newCategory;
        //     if (newCategory) {
        //         this.addNewModification(newCategory);

        //     }
        // },
        selectedModCategory(newCategories) {
            // Ensure selectedModCategory is always an array
            if (!Array.isArray(newCategories)) {
                newCategories = [];
            }

            // Remove modifications that are no longer in the selected categories
            this.modifications = this.modifications.filter(mod => newCategories.includes(mod.category));

            // Add only the newly selected categories that don't exist in modifications
            newCategories.forEach(category => {
                if (!this.modifications.some(mod => mod.category === category)) {
                    this.addNewModification(category);
                }
            });
        }

    },
    methods: {
        addNewModification(category) {
            const newMod = {
                category: category,
                partName: "",
                partBrand: "",
                milageInstalled: "",
                notes: "",
            };
            this.modifications.push(newMod);
        },
        addMod() {
            if (
                this.newMod.category &&
                this.newMod.partName &&
                this.newMod.partBrand &&
                this.newMod.milageInstalled
            ) {
                this.modifications.push({ ...this.newMod });
                this.resetNewMod();
            } else {
                alert("Please fill in all fields for the modification.");
            }
        },
        // Remove a modification
        // removeMod(index) {
        //     this.modifications.splice(index, 1);
        // },
        removeMod(index) {
            const removedCategory = this.modifications[index].category;

            // Remove the modification from the array
            this.modifications.splice(index, 1);

            // Remove the category from selectedModCategory if no more modifications exist for it
            if (!this.modifications.some(mod => mod.category === removedCategory)) {
                this.selectedModCategory = this.selectedModCategory.filter(cat => cat !== removedCategory);
            }
        },

        // Reset the new modification form
        resetNewMod() {
            this.newMod = {
                category: this.selectedModCategory,
                partName: "",
                partBrand: "",
                milageInstalled: "",
                notes: "",
            };
        },
        // Submit the form
        submitForm() {
            console.log("Form Submitted", this.$data);
        },
        togglePrice() {
            if (this.sellType === 'community') this.price = '';
        },

        handleFileChange(event) {
            const files = event.target.files;
            for (let i = 0; i < files.length; i++) {
                this.formData.uploadPhotos.push(files[i]);
            }
        },
        validateForm() {
            if (!this.carMake.trim()) {
                this.errorMessage = "Please select a car make";
                return false;
            }
            if (!this.carModel.trim()) {
                this.errorMessage = "Please select a car model";
                return false;
            }
            if (this.sellType === 'normal' && (!this.price || isNaN(this.price) || this.price <= 0)) {
                this.errorMessage = "Please enter a valid price";
                return false;
            }
            if (!this.year || isNaN(this.year) || this.year <= 0) {
                this.errorMessage = "Please enter a valid year";
                return false;
            }
            if (!this.milage || isNaN(this.milage) || this.milage <= 0) {
                this.errorMessage = "Please enter a valid mileage";
                return false;
            }
            if (!this.engineConfig.trim()) {
                this.errorMessage = "Please select an engine configuration";
                return false;
            }
            if (!this.engineCapacity.trim()) {
                this.errorMessage = "Please enter an engine capacity";
                return false;
            }
            if (!this.horsepower || isNaN(this.horsepower) || this.horsepower <= 0) {
                this.errorMessage = "Please enter a valid horsepower";
                return false;
            }
            if (!this.torque || isNaN(this.torque) || this.torque <= 0) {
                this.errorMessage = "Please enter a valid torque";
                return false;
            }
            if (!this.modificationType.trim()) {
                this.errorMessage = "Please select a modification type";
                return false;
            }
            if (!this.driveTrain.trim()) {
                this.errorMessage = "Please select a drive train";
                return false;
            }
            if (!this.transmission.trim()) {
                this.errorMessage = "Please select a transmission";
                return false;
            }
            if (!this.color.trim()) {
                this.errorMessage = "Please select a color";
                return false;
            }
            if (!this.buildType.trim()) {
                this.errorMessage = "Please select a build type";
                return false;
            }
            if (!this.fuelType.trim()) {
                this.errorMessage = "Please select a fuel type";
                return false;
            }
            if (!this.category.trim()) {
                this.errorMessage = "Please select a category";
                return false;
            }
            if (!this.previousOwners || isNaN(this.previousOwners) || this.previousOwners <= 0) {
                this.errorMessage = "Please enter a valid number of previous owners";
                return false;
            }
            if (!this.carVersion.trim()) {
                this.errorMessage = "Please select a car version";
                return false;
            }
            if (!this.driveSide.trim()) {
                this.errorMessage = "Please select a drive side";
                return false;
            }
            if (!this.country.trim()) {
                this.errorMessage = "Please select a country";
                return false;
            }
            if (!this.city.trim()) {
                this.errorMessage = "Please enter a city";
                return false;
            }
            if (!this.serviceMilage || isNaN(this.serviceMilage) || this.serviceMilage <= 0) {
                this.errorMessage = "Please enter a valid service mileage";
                return false;
            }
            if (!this.serviceType.trim()) {
                this.errorMessage = "Please select a service type";
                return false;
            }
            if (this.formData.uploadPhotos.length === 0) {
                this.errorMessage = "Please upload at least one photo";
                return false;
            }
            this.errorMessage = "";
            return true;
        },
    }
};
</script>

<style scoped>
.uploadPhoto {
    width: 100%;
    display: block;
    outline: none;
    border: 1px solid #1a202c;
    font-size: 18px;
    font-weight: 400;
    color: #c5c5c5;
    font-family: "Gruppo", sans-serif;
    height: 55px;
    background-color: #031726;
    border-radius: 5px;
}

.btn-check:focus+.btn,
.btn:focus {
    outline: 0;
    box-shadow: none;
}

.uploadPhoto:hover {
    color: #c5c5c5;
}

#fileList .file-list-item {
    color: #ffffff;
    font-size: 16px;
    font-weight: 400;
    padding-top: 0.9rem;
}

#fileList {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
}

.delete-button {
    border: none;
    background-color: transparent;
    color: #ffffff;
    padding-left: 0.5rem;
}

/* signin start */

.signIn-div {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 1rem;
}

.btn.google-btn {
    width: 100%;
    height: 55px;
    border-radius: 5px;
    background-color: #031726;
    border: 1px solid #1a202c;
    outline: none;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 22px;
    font-weight: 400;
    color: #ffffff;
    gap: 1rem;
    transition: all 0.2s ease;
    max-width: 620px;
}

.btn.google-btn:hover {
    color: #f95f19;
    background-color: #031726;
}

.coloror {
    color: #f95f19;
}

.borderor {
    border: 1px solid #f95f19;
    border-radius: 10px
}

/* signin end */

/* community start */
.btns-community {
    display: flex;
    justify-content: end;
    align-items: end;
    width: 100%;
    gap: 1rem;
    position: relative;
    top: 100px;
}

.btn-div-create-forum {
    width: 100%;
    max-width: 174px;
}

.btn-div-create-forum .signin-btnli.signup-btnli,
.btn-div-create-forum .signin-btnli {
    width: 100%;
}

.btn-div-create-forum .border-bottom-btn .img-border {
    left: 0;
}

.communtiy-content {
    width: 100%;
    height: 230px;
    border-radius: 5px;
    background-color: #1a202c;
    border: 1px solid #000d21;
    padding: 40px;
}

.list-community-add {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 4rem;
}

.like-community {
    color: #ffffff;
    font-size: 12px;
    font-weight: 400;
    display: flex;
    gap: 0.4rem;
    align-items: center;
}

.map-para-div.community-para-div {
    text-align: left;
}

.community-pagination {
    display: flex;
    justify-content: end;
    align-items: center;
}

/* community end */

/* community details start */

.communityDetailsMain {
    background-color: #1a202c;
    border-radius: 10px;
    width: 100%;
    height: 100%;
}

.communityDetails-bg {
    width: 100%;
    height: 100%;
    padding: 2rem;
}

.img-communityDetails-div {
    width: 100%;
    height: 100%;
}

.img-communityDetails-div .img-communityDetails {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.communityDetails-chatContent {
    width: 100%;
    max-height: 700px;
    overflow-y: auto;
    margin: 1.5rem 0;
}

/* width */
.communityDetails-chatContent::-webkit-scrollbar {
    width: 10px;
}

/* Track */
.communityDetails-chatContent::-webkit-scrollbar-track {
    background: #f1f1f1;
}

/* Handle */
.communityDetails-chatContent::-webkit-scrollbar-thumb {
    background: #888;
}

/* Handle on hover */
.communityDetails-chatContent::-webkit-scrollbar-thumb:hover {
    background: #555;
}

.sender-chats {
    width: 100%;
    max-width: 770px;
    max-height: 400px;
    overflow-y: auto;
    float: left;
    background-color: #000b1c;
    border-radius: 5px;
    border: 1px solid #000d21;
    margin: 0.5rem 0;
}

/* width */
.sender-chats::-webkit-scrollbar {
    width: 5px;
}

/* Track */
.sender-chats::-webkit-scrollbar-track {
    background: #f1f1f1;
}

/* Handle */
.sender-chats::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 5px;
}

/* Handle on hover */
.sender-chats::-webkit-scrollbar-thumb:hover {
    background: #555;
}

.receiver-chats {
    width: 100%;
    max-width: 770px;
    max-height: 400px;
    overflow-y: auto;
    float: right;
    background-color: #031726;
    border-radius: 5px;
    border: 1px solid #000d21;
    margin: 0.5rem 0;
    display: flex;
    justify-content: end;
    align-items: center;
    margin-left: auto;
    margin-right: 1rem;
}

/* width */
.receiver-chats::-webkit-scrollbar {
    width: 5px;
}

/* Track */
.receiver-chats::-webkit-scrollbar-track {
    background: #f1f1f1;
}

/* Handle */
.receiver-chats::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 5px;
}

/* Handle on hover */
.receiver-chats::-webkit-scrollbar-thumb:hover {
    background: #555;
}

.sender-chats-para {
    font-size: 17px;
    font-weight: 400;
    color: #eeeeee;
    text-align: left;
    padding: 1rem;
    word-wrap: break-word;
    flex-wrap: wrap;
    word-break: break-all;
    font-family: "Lato", sans-serif;
    margin-bottom: 0;
    width: 100%;
}

.receiver-chats-para {
    font-size: 17px;
    font-weight: 400;
    color: #eeeeee;
    width: 100%;
    text-align: left;
    padding: 1rem;
    word-wrap: break-word;
    flex-wrap: wrap;
    word-break: break-all;
    font-family: "Lato", sans-serif;
    margin-bottom: 0;
}

.commentsByReceiver {
    width: 100%;
}





/* Hide scrollbar for Chrome, Safari and Opera */


/* Hide scrollbar for IE, Edge and Firefox */


.iconMaterialSend {
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
}

/* community details end*/

/* My Car Listing Card start */
.card.myCarListingCard {
    width: 100%;
    max-height: 999px;
    background-color: #1a202c;
    border: 1px solid #000d21;
    border-radius: 5px;
    padding: 20px;
    text-align: left;
}

.slider-img.myCarListingCard-img {
    height: 260px;
    object-fit: cover;
}

.slider-img.myCarListingCard-img,
.swiper-container.myCarListingCard-swiper-container {
    max-width: 100%;
    position: relative;
    cursor: pointer;
}

.myCarListingCard-user-details-car {
    margin-top: 1rem;
}

.card-body {
    padding: 1rem 0 0 0;
}

.myCarListingCard-logo-img-div {
    width: 59px;
    height: 59px;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    left: 0;
    background-color: #ffffff;
    border-radius: 4px;
    z-index: 999;
}

.myCarListingCard-logo-img {
    width: 100%;
    max-width: 51px;
    height: 20px;
    object-fit: cover;
}

.myCarListingCard-edit-delete-div {
    display: flex;
    justify-content: end;
    gap: 1rem;
    position: absolute;
    bottom: 15px;
    right: 15px;
    width: 100%;
    z-index: 999;
}

.myCarListingCard-delete-div {
    width: 50px;
    height: 50px;
    background-color: #000b1c;
    border-radius: 4px;
    border: 2px solid #ffffff;
    color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
}

.myCarListingCard-delete-div:hover {
    color: #f95f19;
    border: 2px solid #f95f19;
}

.trash-icon {
    font-size: 22px;
}

/* My Car Listing Card end */

/* profile start */
.user-profile-page {
    width: 100%;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.user-profile-page-img {
    width: 100%;
    max-width: 120px;
    height: 100%;
    max-height: 120px;
    object-fit: cover;
    border-radius: 15px;
    border: 1px solid #1a202c;
}

.map-para.email-user-profile-page-para {
    color: #c5c5c5;
    font-family: "Gruppo", sans-serif;
    font-size: 20px;
}

/* profile end */

/* weekly story start */

.map-para.email-user-profile-page-para.weekly {
    font-family: "Goldman", cursive;
    color: #ffffff;
    text-align: end;
    margin-bottom: 0;
    padding-right: 15px;
    font-size: 18px;
}

.card-title-div.flex {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
}

.main-slider.weekly-slider {
    width: 100%;
    justify-content: flex-start;
}

.main-slider.weekly-slider .swiper-container {
    margin: 0;
}

.main-slider.weekly-slider .card-content-car {
    width: 100%;
}

.main-slider.weekly-slider .card-title-h2 {
    width: 100%;
    margin-bottom: 0;
}

.card-text.weekly-story-para-card {
    color: #eeeeee;
    font-family: "Lato", sans-serif;
    padding-right: 15px;
    margin-bottom: 0;
}

.main-slider.weekly-slider .user-details-car {
    margin-bottom: 0;
}

/* weekly story end */

/* carListing5 start */
.carListing5Image-img {
    width: 100%;
    height: 505px;
    object-fit: cover;
}

.card-title-h2.carListing5-h2-title {
    padding: 1rem 0 0.5rem;
}

.icon-user.carListing5-icon-user {
    width: 60px;
    height: 30px;
    background-color: #1a202c;
}

.user-details-car.carListing5-user-details-car {
    justify-content: flex-start;
    gap: 5rem;
}

/* carListing5 end */

/* weeklyStory1 start */
.weeklyStory1-section-car-listing {
    /* background-image: linear-gradient(rgba(0, 11, 28, 0.7), rgba(0, 11, 28, 0.7)), url(../images/carsshopdownload.png); */
}

.view-more-cars.position-absolute {
    right: 15px;
    bottom: 0;
}

.icon-user.weeklyStory1 {
    width: 60px;
    height: 35px;
}

/* weeklyStory1 end */

/* map2 start */
.location-img.location-logo-img1 {
    left: 33%;
    top: 22%;
}

.location-img.location-logo-img2 {
    left: 30%;
    top: auto;
    bottom: 32%;
}

.location-img.location-logo-img3 {
    left: auto;
    right: 0%;
    top: auto;
    bottom: 16%;
}

.main-slider.weekly-slider.align-items-start .slider-img {
    cursor: pointer;
}

.form-input {
    border: 1px solid #f95f19 !important;
}

/* map2 end */

@media screen and (max-width: 991px) {
    .communtiy-content {
        height: auto;
        padding: 25px;
    }

    .sender-chats,
    .receiver-chats {
        max-width: 450px;
    }

    .main-slider.weekly-slider.align-items-start .swiper-container {
        max-width: 100%;
    }
}

@media screen and (max-width: 767px) {

    .sender-chats,
    .receiver-chats {
        max-width: 220px;
    }

    .user-details-car.carListing5-user-details-car {
        gap: 1.5rem;
    }
}

@media screen and (max-width: 575px) {

    .sender-chats,
    .receiver-chats {
        max-width: 239px;
    }
}

@media screen and (max-width: 400px) {

    .sender-chats,
    .receiver-chats {
        max-width: 195px;
    }

    .view-more-cars.position-absolute {
        position: relative !important;
    }

    .card-title-div.flex {
        flex-wrap: wrap;
    }

    .card-text.weekly-story-para-card {
        padding-right: 0;
        text-align: justify;
    }
}

@media screen and (max-width: 319px) {

    .sender-chats,
    .receiver-chats {
        max-width: 100%;
    }
}

.form-title span {
    color: #fff !important
}

.form-select {
    display: block;
    /* width: 100%; */
    /* max-width: 920px; */
    height: 50px;
    /* padding: 0.375rem 2.25rem 0.375rem 1.75rem; */
    -moz-padding-start: calc(0.75rem - 3px);
    font-size: 20px;
    font-weight: 400;
    line-height: 1.5;
    color: #fff;
    background-color: #000b1c;
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAAMCAYAAACA0IaCAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAADiSURBVChTjZIBEcIwDEVbBeAAHAAOOgk4YA7ACShgFlDAHAAOkAAKxv9cwqWl3dq7XbMk/+03nR+GYe6cu+Lharz3L4knN2jXou2h23ok7kisRMm4CmhANMN1IuyJYGFsTALlNDdolkZ3IYxWezyzGqAZC3W6HgiC51sByDk0dnAF0JsOOesvbATYoamVul6UdURQQA9H434wEQTserP6nQ7BQfJF0B9MgDvsZ3s8xPxd9NZYihxpb+TMHDkH1HIWlHVWAdzojBL38czSIm4vddgCxBlmV/aYtlOAR+T2YyBqPrkMZFSDhkgfAAAAAElFTkSuQmCC);
    background-repeat: no-repeat;
    background-position: right .75rem center;
    /* background-size: 16px 12px; */
    background-size: 10px 6px;
    border: 1px solid #1a202c;
    border-radius: 5px;
    transition: border-color 0.15sease-in-out, box-shadow 0.15sease-in-out;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    font-family: "Gruppo", sans-serif;
    cursor: pointer;
}

.selected-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 5px;
}

.selected-tag {
    background-color: #007bff;
    color: white;
    padding: 5px 10px;
    border-radius: 15px;
    font-size: 14px;
    display: flex;
    align-items: center;
}

.remove-tag {
    margin-left: 8px;
    cursor: pointer;
    font-weight: bold;
}



.pos-rel {
    position: relative;
    z-index: 999;
}
</style>