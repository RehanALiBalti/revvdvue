
import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap'
// import 'bootstrap-vue/dist/css/bootstrap-vue.css'
import router from './routes'
import store from './store'
import {Amplify} from 'aws-amplify';
Amplify.configure({
    Auth: {
    region: 'eu-north-1',
    userPoolId: 'eu-north-1_udYkkIEkt',
    userPoolWebClientId: '3gdn1a64vc584t64t7e0up87el',
    authenticationFlowType: 'USER_SRP_AUTH'    
}
});


createApp(App).use(router).use(store).mount('#app');
