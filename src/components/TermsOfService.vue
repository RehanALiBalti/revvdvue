<template>
    <section class="termsOfService-section my-5">
        <div class="container">
            <div name="termly-embed" data-id="6545030a-abed-4bf9-bd8a-7d5f27958df9"></div>
        </div>
    </section>
</template>
<script type="text/javascript">
(function (d, s, id) {
    var js,
        tjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s);
    js.id = id;
    js.src = "https://app.termly.io/embed-policy.min.js";
    tjs.parentNode.insertBefore(js, tjs);
})(document, "script", "termly-jssdk");
</script>

<style scoped>
/* Style the container of the privacy policy */
div[name="termly-embed"] {
    font-family: Arial, sans-serif;
    font-size: 16px;
    color: #fff !important;
    line-height: 1.5;
    padding: 20px;
    /* border: 1px solid #ccc; */
    border-radius: 8px;
    /* background-color: #f9f9f9; */
    /* max-width: 800px; */
    position: relative;
    z-index: 9999;

    margin: 20px auto;
}

/* Adjust specific elements within the policy if possible */
div[name="termly-embed"] h1,
div[name="termly-embed"] h2,
div[name="termly-embed"] h3 {
    color: #fff !important;
}

div[name="termly-embed"] a {
    color: #007bff;
    text-decoration: none;
}

div[name="termly-embed"] a:hover {
    text-decoration: underline;
}

.particles-js-canvas-el {
    display: none !important;

}
</style>
