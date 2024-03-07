<template>
    <div class="container-fluid bg-mesh">
        <div class="container ">
            <div class="row">
                <div class="col-md-6 my-2 pt-2 align-self-center">
                    <h2 class="f1">Koenigsegg agera one:1</h2>
                    <p class="mt-2 f2">
                        Lorem Ipsum is simply dummy text of the printing & typesetting industry. Lorem Ipsum has been
                        the
                        industry's standard dummy text ever since the 1500s,
                    </p>
                    <p class="mt-2 f2">

                        Lorem Ipsum is simply dummy text of the printing & typesetting industry. Lorem Ipsum has been
                        the
                        industry's standard dummy text ever since the 1500s,
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
                <div class="col-md-6 my-2 bg-effect p-2">
                    <img class="img-fluid" src="/images/car.png" alt="">
                    <div class="d-flex justify-content-end">
                        <div>
                            <button class="btn btnAction"><img src="../../public/images/db.png" alt=""
                                    width="35px"></button>
                            <button class="btn btnAction"><img src="../../public/images/eb.png" alt=""
                                    width="35px"></button>
                        </div>
                    </div>
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
                        <p class="my-2 f1"> {{ $t('basicDate') }}</p>


                    </div>
                    <div class="col-md-6">
                        <div class="w-100 d-flex flex-wrap justify-content-between my-2">
                            <p class="f3">{{ $t('bodyType') }}</p>
                            <p class="f3"> Sedan</p>

                        </div>
                        <div class="w-100 d-flex flex-wrap justify-content-between my-2">
                            <p class="f3"> {{ $t('type') }}</p>
                            <p class="f3"> Used</p>

                        </div>
                        <div class="w-100 d-flex flex-wrap justify-content-between my-2">
                            <p class="f3"> {{ $t('seats') }}</p>
                            <p class="f3"> 5</p>

                        </div>
                        <div class="w-100 d-flex flex-wrap justify-content-between my-2">
                            <p class="f3"> {{ $t('doors') }}</p>
                            <p class="f3"> 4</p>

                        </div>
                        <div class="w-100 d-flex flex-wrap justify-content-between my-2">
                            <p class="f3"> {{ $t('countryVersion') }}</p>
                            <p class="f3"> Germany</p>

                        </div>
                        <div class="w-100 d-flex flex-wrap justify-content-between my-2">
                            <p class="f3"> {{ $t('officeNumber') }}</p>
                            <p class="f3"> 1312/Bch</p>

                        </div>
                    </div>
                </div>
                <div class="my-2 row">
                    <div class="col-md-3">
                        <p class="my-2 f1"> {{ $t('vehicleHistory') }}</p>

                    </div>
                    <div class="col-md-6">
                        <div class="w-100 d-flex flex-wrap justify-content-between my-2">
                            <p class="f3"> {{ $t('mileage') }}</p>
                            <p class="f3"> 115,500km</p>

                        </div>
                        <div class="w-100 d-flex flex-wrap justify-content-between my-2">
                            <p class="f3"> {{ $t('firstRegisteration') }}</p>
                            <p class="f3"> 06/2014</p>

                        </div>
                        <div class="w-100 d-flex flex-wrap justify-content-between my-2">
                            <p class="f3"> {{ $t('generalInspection') }}</p>
                            <p class="f3">
                                09/2023</p>

                        </div>
                        <div class="w-100 d-flex flex-wrap justify-content-between my-2">
                            <p class="f3"> {{ $t('previousOwner') }} </p>
                            <p class="f3"> 3</p>

                        </div>
                        <div class="w-100 d-flex flex-wrap justify-content-between my-2">
                            <p class="f3"> {{ $t('fullServiceHistory') }}
                            </p>
                            <p class="f3"> yes</p>

                        </div>
                        <div class="w-100 d-flex flex-wrap justify-content-between my-2">
                            <p class="f3">{{ $t('nonSmokerVehicle') }}</p>
                            <p class="f3"> yes</p>

                        </div>
                    </div>
                </div>
                <div class="my-2 row">
                    <div class="col-md-3">
                        <p class="my-2 f1">{{ $t('technicalData') }}</p>

                    </div>
                    <div class="col-md-6">
                        <div class="w-100 d-flex flex-wrap justify-content-between my-2">
                            <p class="f3"> {{ $t('power') }}</p>
                            <p class="f3"> 373kw(507hp) </p>

                        </div>
                        <div class="w-100 d-flex flex-wrap justify-content-between my-2">
                            <p class="f3"> {{ $t('gearbox') }}</p>
                            <p class="f3"> Automatic</p>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>


export default {
    name: 'CarListingView',

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
</style>