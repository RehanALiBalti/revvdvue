<template>
    <div class="container-fluid py-4">
        <!-- Download Button -->
        <div class="text-end mb-3 position-relative z-5 d-flex justify-content-end">

            <div class="load-more-info w-fit d-flex justify-content-start align-items-center mb-4 ">
                <div class="list-item-btn position-relative load-more-div proceed-div ">
                    <span class="border-bottom-btn border-top-btn position-absolute">
                        <img src="@/assets/images/Group12.png" class="img-border position-absolute" alt="" />
                    </span>

                    <span class="border-bottom-btn border-top-btn border-right-radius position-absolute">
                        <img src="@/assets/images/Path467.png" class="img-border position-absolute" alt="" />
                    </span>

                    <span
                        class="border-bottom-btn border-top-btn border-right-radius border-right-bottom-radius position-absolute">
                        <img src="@/assets/images/Path465.png" class="img-border position-absolute" alt="" />
                    </span>
                    <button class="signin-btnli  border-0" @click="downloadPDF">
                        Download PDF
                    </button>
                    <span class="border-bottom-btn border-left-btn position-absolute">
                        <img src="@/assets/images/Group11.png" class="img-border position-absolute" alt="" />
                    </span>
                    <span class="border-bottom-btn position-absolute">
                        <img src="@/assets/images/Path473.png" class="img-border position-absolute" alt="" />
                    </span>
                </div>
            </div>
        </div>

        <!-- PDF Content -->
        <div id="pdf-content" class="pdf-section text-white p-4">
            <!-- Top images -->
            <div class="d-flex justify-content-center gap-4 mb-4 flex-wrap">
                <img :src="carFront" class="car-img" alt="car front" />
                <img :src="carCenter" class="car-img" alt="car center" />
                <img :src="carSide" class="car-img" alt="car side" />
            </div>

            <!-- Headline row -->
            <div class="row text-center mb-4">

                <div class="col-md-4">
                    <h2 class="make"><span class="text-orange">{{ carDetails.make }}</span> {{ carDetails.model }}</h2>
                </div>
                <div class="col-md-4">
                    <h2 class="km text-whote">15000 <span class="text-orange">km</span></h2>
                </div>
                <div class="col-md-4">
                    <h2 class="price text-white"><span class="text-orange"> $</span>25000</h2>
                </div>
            </div>

            <!-- Details Grid -->
            <div class="row text-center g-4">
                <div class="col-6 col-md-3" v-for="(value, label) in infoLeft" :key="label">
                    <p class="label">{{ label }}</p>
                    <p class="value">{{ value }}</p>
                </div>
                <div class="col-6 col-md-3" v-for="(value, label) in infoRight" :key="label">
                    <p class="label">{{ label }}</p>
                    <p class="value">{{ value }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import html2pdf from "html2pdf.js";

// Replace these imports with your own car images
import carFront from "@/assets/images/c.png";
import carCenter from "@/assets/images/c.png";
import carSide from "@/assets/images/c.png";
import particlesBg from "@/assets/images/particles-bg.png";

export default {
    data() {
        return {
            carFront,
            carCenter,
            carSide,
            carDetails: {
                make: "Toyota",
                model: "Corolla",
                mileage: "15,000 km",
                price: "$25,000",
            },
            infoLeft: {
                "Build Type": "Sedan",
                "Fuel Type": "Petrol",
                "Category": "Saloon",
                "Colour": "Black",
                "Transmission Type": "Automatic",
                "Horsepower": "168 HP",
                "Torque": "200 Nm",
                "Engine Configuration": "V8",

            },
            infoRight: {


                "Engine Capacity": "3.5L",

                "Drive Train": "AWD",
                "Transmission": "Manual",

                "Previous Owners": "1",
                "Country": "USA",



                "City": "Los Angeles",


                "Car Version": "2021",
                "Drive Side": "Left-Hand Drive",
            },
        };
    },
    methods: {

        // downloadPDF() {
        //     const element = document.getElementById("pdf-content");
        //     const originalBg = element.style.backgroundColor;
        //     const originalColor = element.style.color;

        //     element.style.backgroundColor = "#000";
        //     element.style.color = "#fff";

        //     const options = {
        //         margin: 0,   // no white frame
        //         filename: `${this.carDetails.make} - ${this.carDetails.model} - details.pdf`,
        //         image: { type: "jpeg", quality: 0.98 },
        //         // capture at high DPI so text stays sharp
        //         html2canvas: { scale: 2, backgroundColor: "#000", useCORS: true },
        //         jsPDF: { unit: "mm", format: "a4", orientation: "portrait" }
        //     };

        //     html2pdf()
        //         .set(options)
        //         .from(element)
        //         .save()
        //         .then(() => {
        //             element.style.backgroundColor = originalBg;
        //             element.style.color = originalColor;
        //         });
        // }
        // downloadPDF() {
        //     const element = document.getElementById("pdf-content");

        //     // save current styles so we can restore them
        //     const originalBg = element.style.backgroundImage;
        //     const originalColor = element.style.color;

        //     // ✅ set your own background image
        //     element.style.backgroundImage = `url(${particlesBg})`;
        //     element.style.backgroundSize = 'cover';     // cover the whole area
        //     element.style.backgroundPosition = 'center';// center the image
        //     element.style.color = '#fff';               // keep text readable if needed

        //     const options = {
        //         margin: 0,
        //         filename: `${this.carDetails.make} - ${this.carDetails.model} - details.pdf`,
        //         image: { type: "jpeg", quality: 0.98 },
        //         html2canvas: { scale: 2, useCORS: true },
        //         jsPDF: { unit: "mm", format: "a4", orientation: "portrait" }
        //     };

        //     html2pdf().set(options).from(element).save().then(() => {
        //         // restore original styles
        //         element.style.backgroundImage = originalBg;
        //         element.style.color = originalColor;
        //     });
        // }


        // downloadPDF() {
        //     const dataBlock = document.getElementById("pdf-content");

        //     // ✅ create a temporary full-page wrapper
        //     const wrapper = document.createElement("div");
        //     wrapper.style.width = "210mm";          // A4 width
        //     wrapper.style.height = "297mm";          // A4 height
        //     wrapper.style.backgroundImage = `url(${particlesBg})`;
        //     wrapper.style.backgroundSize = "cover";
        //     wrapper.style.backgroundPosition = "center";
        //     wrapper.style.backgroundRepeat = "no-repeat";
        //     wrapper.style.color = "#fff";
        //     wrapper.style.padding = "20mm"; // optional inner padding
        //     wrapper.style.boxSizing = "border-box";

        //     // copy the current pdf-content into the wrapper
        //     wrapper.innerHTML = dataBlock.innerHTML;

        //     // put it in the DOM so html2canvas can “see” it
        //     document.body.appendChild(wrapper);

        //     const options = {
        //         margin: 0,
        //         filename: `${this.carDetails.make} - ${this.carDetails.model} - details.pdf`,
        //         image: { type: "jpeg", quality: 0.98 },
        //         html2canvas: { scale: 1.3, useCORS: true },
        //         jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
        //         pagebreak: { mode: ['avoid-all'] }  // ✅ prevent auto page breaks
        //     };

        //     html2pdf().set(options).from(wrapper).save().then(() => {
        //         // 🧹 clean up so your webpage stays unchanged
        //         document.body.removeChild(wrapper);
        //     });
        // }
        //     downloadPDF() {
        //         const dataBlock = document.getElementById("pdf-content");

        //         // ✅ create a temporary full-page wrapper
        //         const wrapper = document.createElement("div");
        //         wrapper.style.width = "297mm";   // A4 landscape
        //         wrapper.style.height = "210mm";
        //         wrapper.style.backgroundImage = `url(${particlesBg})`;
        //         wrapper.style.backgroundSize = "cover";
        //         wrapper.style.backgroundPosition = "center";
        //         wrapper.style.backgroundRepeat = "no-repeat";
        //         wrapper.style.color = "#fff";
        //         wrapper.style.padding = "20mm";
        //         wrapper.style.boxSizing = "border-box";

        //         // copy current pdf-content into the wrapper
        //         wrapper.innerHTML = dataBlock.innerHTML;

        //         // ✅ Inject PDF-only CSS so the downloaded PDF uses fixed font sizes
        //         const pdfStyle = document.createElement("style");
        //         pdfStyle.innerHTML = `
        //     /* --- PDF-specific styles --- */
        //     .label {
        //         font-weight: 600;
        //         font-size: 0.9rem !important;
        //         text-transform: uppercase;
        //         color: #fff;
        //         margin-bottom: 0;
        //     }
        //     .value {
        //         font-weight: 700;
        //         font-size: 1.1rem !important;
        //         color: #FB6F19;
        //     }
        //     h2 {
        //         font-size: 2rem !important;
        //     }
        // `;
        //         wrapper.appendChild(pdfStyle);

        //         // put it in the DOM so html2canvas can “see” it
        //         document.body.appendChild(wrapper);

        //         const options = {
        //             margin: 0,
        //             filename: `${this.carDetails.make} - ${this.carDetails.model} - details.pdf`,
        //             image: { type: "jpeg", quality: 0.98 },
        //             html2canvas: { scale: 2, useCORS: true },
        //             jsPDF: { unit: "mm", format: "a4", orientation: "landscape" },
        //             pagebreak: { mode: ['avoid-all'] }
        //         };

        //         html2pdf()
        //             .set(options)
        //             .from(wrapper)
        //             .save()
        //             .then(() => {
        //                 // 🧹 remove the temporary DOM elements
        //                 document.body.removeChild(wrapper);
        //             });
        //     }
        downloadPDF() {
            const dataBlock = document.getElementById("pdf-content");

            // Absolute or data-URL of the background image
            // make sure particlesBg is a full URL or base64 string
            const bgUrl = particlesBg;

            // Create the temporary wrapper
            const wrapper = document.createElement("div");
            wrapper.style.width = "297mm";      // A4 landscape
            wrapper.style.height = "210mm";
            wrapper.style.color = "#fff";
            wrapper.style.padding = "20mm";
            wrapper.style.boxSizing = "border-box";
            wrapper.style.position = "relative";   // needed if we use absolute children

            // Copy current pdf-content into the wrapper
            wrapper.innerHTML = dataBlock.innerHTML;

            // --- Add the background as a real <img> so html2canvas reliably captures it
            const bgImg = new Image();
            bgImg.src = bgUrl;
            bgImg.crossOrigin = "anonymous";       // allow CORS if remote image
            bgImg.style.position = "absolute";
            bgImg.style.top = 0;
            bgImg.style.left = 0;
            bgImg.style.width = "100%";
            bgImg.style.height = "100%";
            bgImg.style.objectFit = "cover";
            bgImg.style.zIndex = "-1";
            wrapper.insertBefore(bgImg, wrapper.firstChild);

            // --- Inject PDF-only CSS globally so html2canvas can read it
            const pdfStyle = document.createElement("style");
            pdfStyle.textContent = `
        /* --- PDF-specific styles --- */
        .label {
            font-weight: 600;
            font-size: 0.9rem !important;
            text-transform: uppercase;
            color: #fff;
            margin-bottom: 0;
        }
        .value {
            font-weight: 700;
            font-size: 1.1rem !important;
            color: #FB6F19;
        }
        h2 {
            font-size: 2rem !important;
        }
    `;
            document.head.appendChild(pdfStyle);

            // --- Wait until background image is loaded
            bgImg.onload = () => {
                document.body.appendChild(wrapper);

                const options = {
                    margin: 0,
                    filename: `${this.carDetails.make} - ${this.carDetails.model} - details.pdf`,
                    image: { type: "jpeg", quality: 0.98 },
                    html2canvas: { scale: 2, useCORS: true },
                    jsPDF: { unit: "mm", format: "a4", orientation: "landscape" },
                    pagebreak: { mode: ["avoid-all"] }
                };

                html2pdf()
                    .set(options)
                    .from(wrapper)
                    .save()
                    .then(() => {
                        document.body.removeChild(wrapper);   // 🧹 clean up
                        document.head.removeChild(pdfStyle);  // optional cleanup
                    });
            };
        }




    },

};
</script>

<style scoped>
.car-img {
    width: 180px;
    height: auto;
    border-radius: 8px;
    object-fit: cover;
}

.make,
.km,
.price {
    font-weight: 700;
}

.label {
    font-weight: 600;
    font-size: 0.9rem;
    text-transform: uppercase;
    color: #fff;
    margin-bottom: 0;
}

.value {
    font-weight: 700;
    font-size: 1.1rem;
    color: #FB6F19;
}

.text-orange {
    color: #FB6F19;
}

.car-img {
    width: 130px
}

@media(max-width:768px) {
    .car-img {
        width: 130px
    }
}

@media screen and (min-width: 1800px) {
    .label {
        font-weight: 600;
        font-size: 1.8rem;
        text-transform: uppercase;
        color: #fff;
        margin-bottom: 0;
    }

    .value {
        font-weight: 700;
        font-size: 2rem;
        color: #FB6F19;
    }

    h2 {
        font-size: 3rem
    }

    .car-img {
        width: 180px
    }
}
</style>
