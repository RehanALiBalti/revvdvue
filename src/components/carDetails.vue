<template>
    <div class="container mt-4">
        <!-- Download Button -->
        <div class="row">
            <div class="col-md-12">
                <div class="mb-3 text-end">
                    <button class="btn btn-primary" @click="downloadPDF">Download as PDF</button>
                </div>
            </div>
        </div>

        <!-- PDF Content -->
        <div id="pdf-content">
            <div class="row">
                <div class="col-md-12 d-none">
                    <img :src="logo1" width="150px" />
                </div>
                <div class="col-md-12">
                    <img :src="car" width="150px" />
                </div>
                <div class="col-6 col-md-3" v-for="(value, label) in carDetails" :key="label">
                    <label class="form-label">{{ label }}:</label>
                    <p class="form-value">{{ value }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import logo1 from "../assets/images/cars_logos/26.png";
import car from "../assets/images/4image.png";
import html2pdf from "html2pdf.js";

export default {
    data() {
        return {
            logo1,
            car,
            carDetails: {
                "Car Make": "Toyota",
                "Car Model": "Corolla",
                "Build Type": "Sedan",
                "Price": "$25,000",
                "Mileage": "15,000 km",
                "Fuel Type": "Petrol",
                "Category": "Saloon",
                "Color": "Black",
                "Transmission Type": "Automatic",
                "Horsepower": "168 HP",
                "Torque": "200 Nm",
                "Engine Configuration": "v8",
                "Engine Capicity": "3.5L",
                "Drive Train": "AWD",
                "Transmission": "8-speed",
                "Previous Owners": "1",
                "Country": "USA",
                "City": "Los Angeles",
                "Car Version": "2021",
                "Drive Side": "Left-Hand Drive",
            },
        };
    },
    methods: {
        downloadPDF() {
            const element = document.getElementById("pdf-content");

            // Save original styles
            const originalBackground = element.style.backgroundColor;
            const originalColor = element.style.color;

            // Apply black background and white text
            element.style.backgroundColor = "#000";
            element.style.color = "#fff";

            const options = {
                margin: 0.5,
                filename: `${this.carDetails["Car Make"]} - ${this.carDetails["Car Model"]} - details.pdf`,

                image: { type: "jpeg", quality: 0.98 },
                html2canvas: { scale: 2, backgroundColor: "#000" },
                jsPDF: { unit: "in", format: "a4", orientation: "portrait" },
            };

            html2pdf()
                .set(options)
                .from(element)
                .save()
                .then(() => {
                    // Revert styles after download
                    element.style.backgroundColor = originalBackground;
                    element.style.color = originalColor;
                });
        },
    },
};
</script>

<style scoped>
.form-label {
    color: #fff !important;
}

.form-value {
    font-weight: bold;
    color: #fff;
}

@media print {
    body * {
        visibility: hidden;
    }

    #pdf-content,
    #pdf-content * {
        visibility: visible;
    }

    #pdf-content {
        position: absolute;
        left: 0;
        top: 0;
    }
}
</style>