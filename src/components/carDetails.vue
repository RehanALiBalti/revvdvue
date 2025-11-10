<template>
    <div class="container-fluid py-4">
        <!-- Download Button -->
        <div class="row">

        </div>
        <div class="text-end mb-3 position-relative z-5 d-flex justify-content-between">
            <div class="col-md-3">
                <div class="load-more-info w-100 d-flex justify-content-start align-items-center mb-4 mx-auto">
                    <div class="list-item-btn position-relative load-more-div proceed-div mx-auto">
                        <span class="border-bottom-btn border-top-btn position-absolute">
                            <img src="@/assets/images/Group12white.png" class="img-border position-absolute" alt="" />
                        </span>

                        <span class="border-bottom-btn border-top-btn border-right-radius position-absolute">
                            <img src="@/assets/images/Path467white.png" class="img-border position-absolute" alt="" />
                        </span>

                        <span
                            class="border-bottom-btn border-top-btn border-right-radius border-right-bottom-radius position-absolute">
                            <img src="@/assets/images/Path465white.png" class="img-border position-absolute" alt="" />
                        </span>
                        <!-- <router-link to="/map3" class="signin-btnli signup-btnli">
                            Back To Map
                        </router-link> -->
                        <button @click="$router.go(-1)" class="signin-btnli signup-btnli">
                            Back
                        </button>

                        <span class="border-bottom-btn border-left-btn position-absolute">
                            <img src="@/assets/images/Group11white.png" class="img-border position-absolute" alt="" />
                        </span>
                        <span class="border-bottom-btn position-absolute">
                            <img src="@/assets/images/Path473white.png" class="img-border position-absolute" alt="" />
                        </span>
                    </div>
                </div>

            </div>
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
            <!-- <div class="d-flex justify-content-center gap-4 mb-4 flex-wrap">
                <img :src="carFront" class="car-img" alt="car front" />
                <img :src="carCenter" class="car-img" alt="car center" />
                <img :src="carSide" class="car-img" alt="car side" />
            </div> -->
            <div ref="imagesContainer" class="d-flex justify-content-center gap-4 mb-4 flex-wrap">
                <img :src="carFront" class="car-img" alt="car front" />
                <img :src="carCenter" class="car-img" alt="car center" />
                <img :src="carSide" class="car-img" alt="car side" />
            </div>
            <!-- Headline row -->
            <div class="row text-center mb-4">

                <div class="col-md-4">
                    <h2 class="make"><span class="text-orange">{{ carDetails.make }}</span> {{ carDetails.model }}
                    </h2>
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
import Viewer from "viewerjs";
import "viewerjs/dist/viewer.css";

export default {
    data() {
        return {
            viewer: null,
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
        //     downloadPDF() {
        //         const dataBlock = document.getElementById("pdf-content");

        //         // Absolute or data-URL of the background image
        //         // make sure particlesBg is a full URL or base64 string
        //         const bgUrl = particlesBg;

        //         // Create the temporary wrapper
        //         const wrapper = document.createElement("div");
        //         wrapper.style.width = "297mm";      // A4 landscape
        //         wrapper.style.height = "210mm";
        //         wrapper.style.color = "#fff";
        //         wrapper.style.padding = "20mm";
        //         wrapper.style.boxSizing = "border-box";
        //         wrapper.style.position = "relative";   // needed if we use absolute children

        //         // Copy current pdf-content into the wrapper
        //         wrapper.innerHTML = dataBlock.innerHTML;

        //         // --- Add the background as a real <img> so html2canvas reliably captures it
        //         const bgImg = new Image();
        //         bgImg.src = bgUrl;
        //         bgImg.crossOrigin = "anonymous";       // allow CORS if remote image
        //         bgImg.style.position = "absolute";
        //         bgImg.style.top = 0;
        //         bgImg.style.left = 0;
        //         bgImg.style.width = "100%";
        //         bgImg.style.height = "100%";
        //         bgImg.style.objectFit = "cover";
        //         bgImg.style.zIndex = "-1";
        //         wrapper.insertBefore(bgImg, wrapper.firstChild);

        //         // --- Inject PDF-only CSS globally so html2canvas can read it
        //         const pdfStyle = document.createElement("style");
        //         pdfStyle.textContent = `
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
        //         document.head.appendChild(pdfStyle);

        //         // --- Wait until background image is loaded
        //         bgImg.onload = () => {
        //             document.body.appendChild(wrapper);

        //             const options = {
        //                 margin: 0,
        //                 filename: `${this.carDetails.make} - ${this.carDetails.model} - details.pdf`,
        //                 image: { type: "jpeg", quality: 0.98 },
        //                 html2canvas: { scale: 2, useCORS: true },
        //                 jsPDF: { unit: "mm", format: "a4", orientation: "landscape" },
        //                 pagebreak: { mode: ["avoid-all"] }
        //             };

        //             html2pdf()
        //                 .set(options)
        //                 .from(wrapper)
        //                 .save()
        //                 .then(() => {
        //                     document.body.removeChild(wrapper);   // 🧹 clean up
        //                     document.head.removeChild(pdfStyle);  // optional cleanup
        //                 });
        //         };
        //     }

        //     downloadPDF() {
        //         const dataBlock = document.getElementById("pdf-content");

        //         // show loader
        //         const loader = document.createElement("div");
        //         loader.id = "pdf-loader";
        //         loader.innerHTML = `<div class="pdf-spinner"></div><p>Generating PDF...</p>`;
        //         Object.assign(loader.style, {
        //             position: "fixed",
        //             top: "0",
        //             left: "0",
        //             width: "100%",
        //             height: "100%",
        //             background: "rgba(0,0,0,0.6)",
        //             color: "#fff",
        //             display: "flex",
        //             flexDirection: "column",
        //             alignItems: "center",
        //             justifyContent: "center",
        //             zIndex: "9999",
        //             fontSize: "1.2rem"
        //         });
        //         document.body.appendChild(loader);

        //         // Absolute or data-URL of the background image
        //         const bgUrl = particlesBg;

        //         // Create the temporary wrapper
        //         const wrapper = document.createElement("div");
        //         wrapper.style.width = "297mm";      // A4 landscape
        //         wrapper.style.height = "210mm";
        //         wrapper.style.color = "#fff";
        //         wrapper.style.padding = "20mm";
        //         wrapper.style.boxSizing = "border-box";
        //         wrapper.style.position = "relative";   // needed if we use absolute children

        //         // Copy current pdf-content into the wrapper
        //         wrapper.innerHTML = dataBlock.innerHTML;

        //         // --- Add the background as a real <img> so html2canvas reliably captures it
        //         const bgImg = new Image();
        //         bgImg.src = bgUrl;
        //         bgImg.crossOrigin = "anonymous";       // allow CORS if remote image
        //         bgImg.style.position = "absolute";
        //         bgImg.style.top = 0;
        //         bgImg.style.left = 0;
        //         bgImg.style.width = "100%";
        //         bgImg.style.height = "100%";
        //         bgImg.style.objectFit = "cover";
        //         bgImg.style.zIndex = "-1";
        //         wrapper.insertBefore(bgImg, wrapper.firstChild);

        //         // --- Inject PDF-only CSS globally so html2canvas can read it
        //         const pdfStyle = document.createElement("style");
        //         pdfStyle.textContent = `
        // /* --- PDF-specific styles --- */
        // .label {
        //     font-weight: 600;
        //     font-size: 0.9rem !important;
        //     text-transform: uppercase;
        //     color: #fff;
        //     margin-bottom: 0;
        // }
        // .value {
        //     font-weight: 700;
        //     font-size: 1.1rem !important;
        //     color: #FB6F19;
        // }
        // h2 {
        //     font-size: 2rem !important;
        // }
        // .pdf-spinner {
        //     border: 6px solid #f3f3f3;
        //     border-top: 6px solid #FB6F19;
        //     border-radius: 50%;
        //     width: 50px;
        //     height: 50px;
        //     animation: spin 1s linear infinite;
        //     margin-bottom: 10px;
        // }
        // @keyframes spin {
        //     0% { transform: rotate(0deg); }
        //     100% { transform: rotate(360deg); }
        // }
        // `;
        //         document.head.appendChild(pdfStyle);

        //         // --- Wait until background image is loaded
        //         bgImg.onload = () => {
        //             document.body.appendChild(wrapper);

        //             const options = {
        //                 margin: 0,
        //                 filename: `${this.carDetails.make} - ${this.carDetails.model} - details.pdf`,
        //                 image: { type: "jpeg", quality: 0.98 },
        //                 html2canvas: { scale: 2, useCORS: true },
        //                 jsPDF: { unit: "mm", format: "a4", orientation: "landscape" },
        //                 pagebreak: { mode: ["avoid-all"] }
        //             };

        //             html2pdf()
        //                 .set(options)
        //                 .from(wrapper)
        //                 .save()
        //                 .then(() => {
        //                     document.body.removeChild(wrapper);   // 🧹 clean up
        //                     document.head.removeChild(pdfStyle);  // optional cleanup
        //                     document.body.removeChild(loader);    // hide loader
        //                 })
        //                 .catch(() => {
        //                     document.body.removeChild(loader);    // hide loader even if error
        //                 });
        //         };
        //     }
        //         downloadPDF() {
        //             const dataBlock = document.getElementById("pdf-content");
        //             const bgUrl = particlesBg; // background image (absolute or base64)

        //             // --- Create loader overlay ---
        //             const loader = document.createElement("div");
        //             loader.id = "pdf-loader";
        //             loader.innerHTML = `
        //     <div class="pdf-spinner"></div>
        //     <p>Generating PDF...</p>
        //   `;
        //             Object.assign(loader.style, {
        //                 position: "fixed",
        //                 top: "0",
        //                 left: "0",
        //                 width: "100%",
        //                 height: "100%",
        //                 background: "rgba(0,0,0,0.6)",
        //                 color: "#fff",
        //                 display: "flex",
        //                 flexDirection: "column",
        //                 alignItems: "center",
        //                 justifyContent: "center",
        //                 zIndex: "9999",
        //                 fontSize: "1.2rem",
        //             });
        //             document.body.appendChild(loader);

        //             // --- Create wrapper (PDF page container) ---
        //             const wrapper = document.createElement("div");
        //             Object.assign(wrapper.style, {
        //                 width: "297mm", // A4 landscape width
        //                 height: "210mm",
        //                 color: "#fff",
        //                 padding: "20mm",
        //                 boxSizing: "border-box",
        //                 position: "relative",
        //             });

        //             // Copy current pdf-content
        //             wrapper.innerHTML = dataBlock.innerHTML;

        //             // --- Add background image layer ---
        //             const bgImg = new Image();
        //             bgImg.src = bgUrl;
        //             bgImg.crossOrigin = "anonymous"; // for remote image
        //             Object.assign(bgImg.style, {
        //                 position: "absolute",
        //                 top: 0,
        //                 left: 0,
        //                 width: "100%",
        //                 height: "100%",
        //                 objectFit: "cover",
        //                 zIndex: "-1",
        //             });
        //             wrapper.insertBefore(bgImg, wrapper.firstChild);

        //             // --- Inject temporary PDF-only styles ---
        //             const pdfStyle = document.createElement("style");
        //             pdfStyle.id = "pdf-temp-style";
        //             pdfStyle.textContent = `
        //     /* PDF-specific font and spinner styles */
        //     #pdf-content .label {
        //       font-weight: 600;
        //       font-size: 0.9rem !important;
        //       text-transform: uppercase;
        //       color: #fff;
        //       margin-bottom: 0;
        //     }
        //     #pdf-content .value {
        //       font-weight: 700;
        //       font-size: 1.1rem !important;
        //       color: #FB6F19;
        //     }
        //     #pdf-content h2 {
        //       font-size: 2rem !important;
        //     }
        //     .pdf-spinner {
        //       border: 6px solid #f3f3f3;
        //       border-top: 6px solid #FB6F19;
        //       border-radius: 50%;
        //       width: 50px;
        //       height: 50px;
        //       animation: spin 1s linear infinite;
        //       margin-bottom: 10px;
        //     }
        //     @keyframes spin {
        //       0% { transform: rotate(0deg); }
        //       100% { transform: rotate(360deg); }
        //     }
        //   `;
        //             document.head.appendChild(pdfStyle);

        //             // --- Generate PDF after background loads ---
        //             bgImg.onload = () => {
        //                 document.body.appendChild(wrapper);

        //                 const options = {
        //                     margin: 0,
        //                     filename: `${this.carDetails.make} - ${this.carDetails.model} - details.pdf`,
        //                     image: { type: "jpeg", quality: 0.98 },
        //                     html2canvas: { scale: 2, useCORS: true },
        //                     jsPDF: { unit: "mm", format: "a4", orientation: "landscape" },
        //                     pagebreak: { mode: ["avoid-all"] },
        //                 };

        //                 html2pdf()
        //                     .set(options)
        //                     .from(wrapper)
        //                     .save()
        //                     .then(() => {
        //                         // 🧹 Cleanup after PDF download
        //                         document.body.removeChild(wrapper);
        //                         document.head.removeChild(pdfStyle);
        //                         document.body.removeChild(loader);
        //                     })
        //                     .catch(() => {
        //                         // Remove loader even if error
        //                         document.body.removeChild(loader);
        //                     });
        //             };
        //         }
        //     downloadPDF() {
        //         const dataBlock = document.getElementById("pdf-content");
        //         const bgUrl = particlesBg; // background image (absolute or base64)

        //         // --- Create loader overlay ---
        //         const loader = document.createElement("div");
        //         loader.id = "pdf-loader";
        //         loader.innerHTML = `
        //     <div class="pdf-spinner"></div>
        //     <p>Generating PDF...</p>
        // `;
        //         Object.assign(loader.style, {
        //             position: "fixed",
        //             top: "0",
        //             left: "0",
        //             width: "100%",
        //             height: "100%",
        //             // background: "rgba(0,0,0,0.6)",
        //             background: "#000",
        //             color: "#fff",
        //             display: "flex",
        //             flexDirection: "column",
        //             alignItems: "center",
        //             justifyContent: "center",
        //             zIndex: "9999",
        //             fontSize: "1.2rem",
        //         });
        //         document.body.appendChild(loader);

        //         // --- Create wrapper (PDF page container) ---
        //         const wrapper = document.createElement("div");
        //         Object.assign(wrapper.style, {
        //             width: "297mm", // A4 landscape width
        //             height: "210mm",
        //             color: "#fff",
        //             padding: "20mm",
        //             boxSizing: "border-box",
        //             position: "relative",
        //         });

        //         // Copy current pdf-content
        //         wrapper.innerHTML = dataBlock.innerHTML;

        //         // --- Add background image layer ---
        //         const bgImg = new Image();
        //         bgImg.src = bgUrl;
        //         bgImg.crossOrigin = "anonymous"; // for remote image
        //         Object.assign(bgImg.style, {
        //             position: "absolute",
        //             top: 0,
        //             left: 0,
        //             width: "100%",
        //             height: "100%",
        //             objectFit: "cover",
        //             zIndex: "-1",
        //         });
        //         wrapper.insertBefore(bgImg, wrapper.firstChild);

        //         // --- Inject temporary PDF-only styles ---
        //         const pdfStyle = document.createElement("style");
        //         pdfStyle.id = "pdf-temp-style";
        //         pdfStyle.textContent = `


        //     #pdf-content .label {
        //         font-weight: 600 !important;
        //         font-size: 0.9rem !important;
        //         text-transform: uppercase;
        //         color: #fff !important;
        //         margin-bottom: 0;
        //     }

        //     #pdf-content .value {
        //         font-weight: 700 !important;
        //         font-size: 1.1rem !important;
        //         color: #FB6F19 !important;
        //     }

        //     #pdf-content h2 {
        //         font-size: 2rem !important;
        //         font-family: 'Montserrat', sans-serif !important;
        //     }

        //     /* Spinner styles */
        //     .pdf-spinner {
        //         border: 6px solid #f3f3f3;
        //         border-top: 6px solid #FB6F19;
        //         border-radius: 50%;
        //         width: 50px;
        //         height: 50px;
        //         animation: spin 1s linear infinite;
        //         margin-bottom: 10px;
        //     }

        //     @keyframes spin {
        //         0% { transform: rotate(0deg); }
        //         100% { transform: rotate(360deg); }
        //     }
        // `;
        //         document.head.appendChild(pdfStyle);

        //         // --- Generate PDF after background loads ---
        //         bgImg.onload = () => {
        //             document.body.appendChild(wrapper);

        //             const options = {
        //                 margin: 0,
        //                 filename: `${this.carDetails.make} - ${this.carDetails.model} - details.pdf`,
        //                 image: { type: "jpeg", quality: 0.98 },
        //                 html2canvas: { scale: 2, useCORS: true },
        //                 jsPDF: { unit: "mm", format: "a4", orientation: "landscape" },
        //                 pagebreak: { mode: ["avoid-all"] },
        //             };

        //             html2pdf()
        //                 .set(options)
        //                 .from(wrapper)
        //                 .save()
        //                 .then(() => {
        //                     // 🧹 Cleanup after PDF download
        //                     document.body.removeChild(wrapper);
        //                     document.head.removeChild(pdfStyle);
        //                     document.body.removeChild(loader);
        //                 })
        //                 .catch(() => {
        //                     // Remove loader even if error
        //                     document.body.removeChild(loader);
        //                     document.head.removeChild(pdfStyle);
        //                 });
        //         };
        //     }

        async downloadPDF() {
            const dataBlock = document.getElementById("pdf-content");
            const bgUrl = particlesBg; // background image (can be remote or local)

            // --- 🌀 Create loader overlay ---
            const loader = document.createElement("div");
            loader.id = "pdf-loader";
            loader.innerHTML = `
    <div class="pdf-spinner"></div>
    <p>Generating PDF...</p>
  `;
            Object.assign(loader.style, {
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                background: "#000",
                color: "#fff",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                zIndex: "9999",
                fontSize: "1.2rem",
            });
            document.body.appendChild(loader);

            // --- 📄 Clone the pdf-content node (preserves id + styles) ---
            const wrapper = dataBlock.cloneNode(true);
            Object.assign(wrapper.style, {
                width: "297mm", // A4 landscape
                height: "210mm",
                color: "#fff",
                padding: "20mm",
                boxSizing: "border-box",
                position: "relative",
                overflow: "hidden",
            });

            // --- 🌄 Convert background to base64 safely ---
            const getBase64Image = (url) =>
                new Promise((resolve) => {
                    const img = new Image();
                    img.crossOrigin = "anonymous";
                    img.onload = function () {
                        try {
                            const canvas = document.createElement("canvas");
                            canvas.width = this.width;
                            canvas.height = this.height;
                            const ctx = canvas.getContext("2d");
                            ctx.drawImage(this, 0, 0);
                            resolve(canvas.toDataURL("image/png"));
                        } catch (err) {
                            console.warn("Base64 conversion failed, using original URL.");
                            resolve(url);
                        }
                    };
                    img.onerror = () => resolve(url); // fallback to original
                    img.src = url;
                });

            try {
                const safeBg = await getBase64Image(bgUrl);

                // --- 🌄 Add converted background image ---
                const bgImg = new Image();
                bgImg.src = safeBg;
                Object.assign(bgImg.style, {
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    zIndex: "-1",
                });
                wrapper.insertBefore(bgImg, wrapper.firstChild);

                // --- 🎨 Inject temporary PDF-only CSS ---
                const pdfStyle = document.createElement("style");
                pdfStyle.id = "pdf-temp-style";
                pdfStyle.textContent = `
      #pdf-content .label {
        font-weight: 600 !important;
        font-size: 0.9rem !important;
        text-transform: uppercase;
        color: #fff !important;
        margin-bottom: 0;
      }
      #pdf-content .value {
        font-weight: 700 !important;
        font-size: 1.1rem !important;
        color: #FB6F19 !important;
      }
      #pdf-content h2 {
        font-size: 2rem !important;
        font-family: 'Montserrat', sans-serif !important;
      }
      .pdf-spinner {
        border: 6px solid #f3f3f3;
        border-top: 6px solid #FB6F19;
        border-radius: 50%;
        width: 50px;
        height: 50px;
        animation: spin 1s linear infinite;
        margin-bottom: 10px;
      }
      @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
    `;
                document.head.appendChild(pdfStyle);

                // --- 🧠 Wait until background loads ---
                const waitForImage = (img) =>
                    new Promise((resolve) => {
                        if (img.complete) resolve();
                        else img.onload = resolve;
                        img.onerror = resolve;
                    });

                await waitForImage(bgImg);
                document.body.appendChild(wrapper);

                // --- ⚙️ html2pdf options ---
                const options = {
                    margin: 0,
                    filename: `${this.carDetails?.make || "Car"} - ${this.carDetails?.model || "Details"}.pdf`,
                    image: { type: "jpeg", quality: 0.98 },
                    html2canvas: { scale: 2, useCORS: true },
                    jsPDF: { unit: "mm", format: "a4", orientation: "landscape" },
                    pagebreak: { mode: ["avoid-all"] },
                };

                // --- 💾 Generate & save PDF ---
                await html2pdf().set(options).from(wrapper).save();
            } catch (error) {
                console.error("PDF generation failed:", error);
                alert("Failed to generate PDF. Please try again.");
            } finally {
                // --- 🧹 Cleanup everything ---
                [wrapper, loader, document.getElementById("pdf-temp-style")].forEach((el) => {
                    if (el && el.parentNode) el.parentNode.removeChild(el);
                });
            }
        }



    },
    mounted() {
        // Initialize Viewer.js on the container
        this.viewer = new Viewer(this.$refs.imagesContainer, {
            navbar: false,   // hide thumbnails
            title: false,    // hide image title
            toolbar: {
                prev: true,    // show "previous" button
                next: true,    // show "next" button
            },
        });
    },
    beforeUnmount() {
        // Destroy the viewer instance when component is destroyed
        if (this.viewer) {
            this.viewer.destroy();
            this.viewer = null;
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
