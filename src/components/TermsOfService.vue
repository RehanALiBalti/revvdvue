<template>
    <section class="termsOfService-section my-5">
        <div class="container">
            <div name="termly-embed" data-id="6545030a-abed-4bf9-bd8a-7d5f27958df9"></div>

        </div>
    </section>
</template>

<script>
export default {
    name: 'TermsOfService',
    mounted() {
        this.loadTermlyScript();
    },
    watch: {
        '$route'() {
            // Re-initialize the Termly script when the route changes
            this.loadTermlyScript();
        }
    },
    methods: {
        loadTermlyScript() {
            // Clear any existing Termly script
            const existingScript = document.getElementById('termly-jssdk');
            if (existingScript) {
                existingScript.remove();
            }

            // Inject the Termly script
            setTimeout(() => {
                (function (d, s, id) {
                    var js, tjs = d.getElementsByTagName(s)[0];
                    if (d.getElementById(id)) return;
                    js = d.createElement(s);
                    js.id = id;
                    js.src = "https://app.termly.io/embed-policy.min.js";
                    tjs.parentNode.insertBefore(js, tjs);
                })(document, "script", "termly-jssdk");
            }, 500);
        }
    }
}
</script>
<style scoped>
/* Style the container of the privacy policy */
div[name="termly-embed"] {
    font-family: Arial, sans-serif;
    font-size: 16px;
    color: #333;
    line-height: 1.5;
    padding: 20px;

    border-radius: 8px;

    /* max-width: 800px; */
    position: relative;
    z-index: 9999;

    margin: 20px auto;
}

/* Adjust specific elements within the policy if possible */
div[name="termly-embed"] h1,
div[name="termly-embed"] h2,
div[name="termly-embed"] h3 {
    color: #0056b3;
}

div[name="termly-embed"] a {
    color: #007bff;
    text-decoration: none;
}

div[name="termly-embed"] a:hover {
    text-decoration: underline;
}
</style>
