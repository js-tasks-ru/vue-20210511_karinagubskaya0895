import Vue from './vendor/vue.esm.browser.js';

const fetchMeetups = () =>
  fetch('https://course-vue.javascript.ru/api/meetups/').then((res) => res.json());

// Создаём новое Vue приложением через конструктор, передавая опции, описывающие приложение
const app = new Vue({
  // Шаблон в #app
  template: `#app`,
  data() {
    return {
        rawMeetups: null,
        radioTitle: ' ',
    }
  },
  mounted() {
    fetchMeetups().then((meetups) => {
      this.rawMeetups = meetups;
    });
  },
});
app.$mount('#app');