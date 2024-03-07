<template>
    <div class="container-fluid bg-mesh">
        <div class="container ">
            <div class="row pt-4">
                <div class="col-md-6 my-2 pt-2 align-self-start pt-5">
                    <h2 class="f1 mt-2">Nexen Tire Npriz SH9i 195/55R16</h2>
                    <p class="mt-2 f2">
                        {{ $t('potHoleMileageGuarantee') }}
                    </p>
                    <p class="mt-2 f2">

                        {{ $t('improvedDrainagePerformance') }}
                    </p>
                    <div class="my-2">
                        <div class="d-flex my-2 align-items-center">
                            <img class="object-fit-contain" src="/images/icons/licon.png" alt="icon image" width="50px">
                            <p class="ms-2 mb-0 f2">San Francisco, California USA</p>
                        </div>
                        <div class="d-flex my-2  align-items-center">
                            <img class="object-fit-contain" src="/images/icons/micon.png" alt="icon image"
                                width="50px" />
                            <p class="ms-2 mb-0 f2">+98 765 432 10</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 my-2 bg-effect p-2 align-self-center">
                    <img class="img-fluid sImg mt-5" src="../../public/images/singlemp.png" alt="">

                </div>
            </div>
            <div class="row   py-2 position-relative">
                <!-- <img class="meshImage" src="../../public/images/mesh.png"> -->
                <p class="mt-2 f1">{{ $t('overview') }}</p>
                <div class="col-md-8">
                    <div class="my-2 d-flex justify-content-between flex-wrap">
                        <div class="d-flex my-2  align-items-center">
                            <img class="object-fit-contain" src="/images/prof.png" alt="icon image" width="50px" />
                            <p class="ms-2 mb-0 f2">Daniyal Doe</p>
                        </div>
                        <div class="d-flex my-2  align-items-center">
                            <img class="object-fit-contain" src="/images/em.png" alt="icon image" width="50px" />
                            <p class="ms-2 mb-0 f2">daniyaldoe@info,com</p>
                        </div>
                        <div class="d-flex my-2  align-items-center">
                            <img class="object-fit-contain" src="/images/pric.png" alt="icon image" width="50px" />
                            <p class="ms-2 mb-0 f2">2,000,000</p>
                        </div>
                    </div>
                    <!-- Rest of the template -->

                </div>
            </div>
            <div>
                <div class="my-2 row">
                    <div class="col-md-3">
                        <p class="my-2 f1">{{ $t('basicDate') }}</p>


                    </div>
                    <div class="col-md-6">
                        <div class="w-100 d-flex flex-wrap justify-content-between ">
                            <p class="f3">{{ $t('bodyCategory') }}</p>
                            <p class="f3"> Tyres&wheels </p>

                        </div>
                        <div class="w-100 d-flex flex-wrap justify-content-between ">
                            <p class="f3"> {{ $t('subCategory') }}</p>
                            <p class="f3"> Car Tyres</p>

                        </div>
                        <div class="w-100 d-flex flex-wrap justify-content-between ">
                            <p class="f3"> {{ $t('lastUpdated') }}</p>
                            <p class="f3"> july 18,2023</p>

                        </div>
                        <div class="w-100 d-flex flex-wrap justify-content-between m">
                            <p class="f3"> Ad Ref#</p>
                            <p class="f3"> 688110</p>

                        </div>

                    </div>
                </div>
                <div class="row my-2">
                    <div class="col-md-12">
                        <p class="f1">{{ $t('description') }}</p>
                        <p class="my-2 f2">
                            {{ $t('abnormalWearPrevention') }}
                        </p>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script>


export default {
    name: 'SingleMarket',

};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Goldman:wght@400;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap');

.bg-effect {
    background: url("../../public/images/icons/LightEffect.png") !important;
    background-size: contain !important;
    background-repeat: no-repeat !important;
}

.bg-mesh {
    background: url("../../public/images/mesh.png") !important;
    background-size: contain !important;
    background-repeat: repeat !important;
}

.f1 {
    font-family: "Goldman";
    font-size: 26px;
    font-weight: normal;
    line-height: 19.200000762939453px;
    font-style: normal;
    text-align: left;
    color: #ffffff;
}

.f2 {
    font-family: "Lato";
    font-size: 14px;
    font-weight: normal;

    font-style: normal;
    text-align: left;
    color: #eeeeee;
}

.f3 {

    font-family: "Goldman";
    font-size: 18px;
    font-weight: normal;
    line-height: 46px;
    font-style: normal;
    text-align: left !important;
    color: #ffffff;
}

.btnAction {
    border: 0px transparent !important;
}

.meshImage {
    position: absolute;
    top: -350px;
    border: 0px;
    border-radius: 10px;
}

.sImg {
    border-radius: 15px;
    height: 280px;
    width: 100%;
}
</style>