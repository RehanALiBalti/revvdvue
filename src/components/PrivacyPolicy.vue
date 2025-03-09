<template>
    <div class="container">
        <div name="termly-embed" :key="$route.fullPath" data-id="5a579c58-9c7c-40c5-8345-6731f59458c9"></div>
    </div>
</template>

<script>
export default {
    name: 'PrivacyPolicy',
    mounted() {
        this.loadTermlyScript();
    },
    watch: {
        '$route'() {
            this.loadTermlyScript();
        }
    },
    methods: {
        loadTermlyScript() {
            const existingScript = document.getElementById('termly-jssdk');
            if (existingScript) {
                existingScript.remove();
            }

            setTimeout(() => {
                (function (d, s, id) {
                    var js, tjs = d.getElementsByTagName(s)[0];
                    if (d.getElementById(id)) return;
                    js = d.createElement(s);
                    js.id = id;
                    js.src = "https://app.termly.io/embed-policy.min.js";
                    js.onload = () => {
                        console.log('Termly script loaded successfully!');
                    };
                    js.onerror = () => {
                        console.error('Failed to load Termly script.');
                    };
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