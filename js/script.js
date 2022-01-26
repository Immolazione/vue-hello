console.log('VUE OK', Vue);

Vue.config.devtools = true;

const app = new Vue (
 {
    el: '#root',
    data: {
        message: 'Hello World!',
        imageURL: 'amogus.png',
    },
 },
);