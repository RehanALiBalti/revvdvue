<template>
    <div class="container mt-4">
        <!-- Page 1: Car Details -->
        <div class="row">
            <div class="col-md-12">
                <img :src="logo1" width="150px" />
            </div>
            <div class="col-6 col-md-3">
                <label class="form-label">Car Make:</label>
                <p class="form-value">{{ carMake }}</p>
            </div>
            <div class="col-6 col-md-3">
                <label class="form-label">Car Model:</label>
                <p class="form-value">{{ carModel }}</p>
            </div>
            <div class="col-6 col-md-3">
                <label class="form-label">Build Type:</label>
                <p class="form-value">{{ buildType }}</p>
            </div>
            <div class="col-6 col-md-3">
                <label class="form-label">Price:</label>
                <p class="form-value">{{ price }}</p>
            </div>
            <div class="col-6 col-md-3">
                <label class="form-label">Mileage:</label>
                <p class="form-value">{{ mileage }}</p>
            </div>
            <div class="col-6 col-md-3">
                <label class="form-label">Fuel Type:</label>
                <p class="form-value">{{ fuelType }}</p>
            </div>
            <div class="col-6 col-md-3">
                <label class="form-label">Category:</label>
                <p class="form-value">{{ category }}</p>
            </div>
            <div class="col-6 col-md-3">
                <label class="form-label">color:</label>
                <p class="form-value">{{ color }}</p>
            </div>
        </div>

        <!-- Page 2: Engine Performance -->
        <div class="row mt-3">
            <div class="col-6 col-md-3">
                <label class="form-label">Transmission Type:</label>
                <p class="form-value">{{ transmissionType }}</p>
            </div>
            <div class="col-6 col-md-3">
                <label class="form-label">Horsepower:</label>
                <p class="form-value">{{ horsepower }}</p>
            </div>
            <div class="col-6 col-md-3">
                <label class="form-label">Torque:</label>
                <p class="form-value">{{ torque }}</p>
            </div>
            <div class="col-6 col-md-3">
                <label class="form-label">Engine Configuration:</label>
                <p class="form-value">{{ EngineConfiguration }}</p>
            </div>
            <div class="col-6 col-md-3">
                <label class="form-label">Engine Capicity:</label>
                <p class="form-value">{{ EngineCapicity }}</p>
            </div>
            <div class="col-6 col-md-3">
                <label class="form-label">Drive Train:</label>
                <p class="form-value">{{ DriveTrain }}</p>
            </div>
            <div class="col-6 col-md-3">
                <label class="form-label">Transmission:</label>
                <p class="form-value">{{ transmission }}</p>
            </div>
        </div>

        <!-- Page 3: Ownership & Location -->
        <div class="row mt-3">
            <div class="col-6 col-md-3">
                <label class="form-label">Previous Owners:</label>
                <p class="form-value">{{ previousOwners }}</p>
            </div>
            <div class="col-6 col-md-3">
                <label class="form-label">Country:</label>
                <p class="form-value">{{ country }}</p>
            </div>
            <div class="col-6 col-md-3">
                <label class="form-label">City:</label>
                <p class="form-value">{{ city }}</p>
            </div>
            <div class="col-6 col-md-3">
                <label class="form-label">Car Version:</label>
                <p class="form-value">{{ carVersion }}</p>
            </div>
            <div class="col-6 col-md-3">
                <label class="form-label">Drive Side:</label>
                <p class="form-value">{{ DriveSide }}</p>
            </div>
        </div>
    </div>
</template>

<script>
import logo1 from "../assets/images/cars_logos/26.png"
export default {
    data() {
        return {
            logo1,
            carMake: "Toyota",
            carModel: "Corolla",
            buildType: "Sedan",
            price: "$25,000",
            mileage: "15,000 km",
            fuelType: "Petrol",
            transmission: "8-speed",
            horsepower: "168 HP",
            torque: "200 Nm",
            previousOwners: "1",
            country: "USA",
            city: "Los Angeles",
            color: "Black",
            category: "Saloon",
            DriveTrain: "AWD",
            EngineCapicity: "3.5L",
            EngineConfiguration: "v8",
            transmissionType: "Automatic",
            carVersion: "2021",
            DriveSide: "Left-Hand Drive"
        };
    }
};
</script>

<style>
.form-value {
    font-weight: bold;
    color: #f95f19;
    ;
}
</style>