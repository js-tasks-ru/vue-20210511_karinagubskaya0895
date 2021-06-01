import Vue from './vendor/vue.esm.browser.js';

/** URL адрес API */
const API_URL = 'https://course-vue.javascript.ru/api';

/** ID митапа для примера; используйте его при получении митапа */
const MEETUP_ID = 6;

/**
 * Возвращает ссылку на изображение по идентификатору, например, изображение митапа
 * @param imageId {number} - идентификатор изображения
 * @return {string} - ссылка на изображение
 */
function getImageUrlByImageId(imageId) {
  return `${API_URL}/images/${imageId}`;
}


const agendaItemDefaultTitles = {
   registration: 'Регистрация',
   opening: 'Открытие',
   break: 'Перерыв',
   coffee: 'Coffee Break',
   closing: 'Закрытие',
   afterparty: 'Afterparty',
   talk: 'Доклад',
   other: 'Другое',
 };


const agendaItemIcons = {
   registration: 'key',
   opening: 'cal-sm',
   talk: 'tv',
   break: 'clock',
   coffee: 'coffee',
   closing: 'key',
   afterparty: 'cal-sm',
   other: 'cal-sm',
};

// Требуется создать Vue приложение
const fetchMeetup = () =>
  fetch(`${API_URL}/meetups/${MEETUP_ID}`).then((res) => res.json());

// Создаём новое Vue приложением через конструктор, передавая опции, описывающие приложение
const app = new Vue({
  // Шаблон в #app
  mounted() {
    fetchMeetup().then((meetup) => {
      this.meetup = meetup;
    });
  },
  template: `#app`,
  data() {
    return {
        meetup: null,
        agenda: null,
        agendaTitles: agendaItemDefaultTitles,
        agendaIcons: agendaItemIcons
    }
  },
  computed: {
    formatDate() {
      return new Date(this.meetup.date).toLocaleString(navigator.language, {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      });
    },
    meetupImageLink() {
     return getImageUrlByImageId(this.meetup.imageId);
    }
  },
});
app.$mount('#app');