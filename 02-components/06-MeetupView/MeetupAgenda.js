import MeetupAgendaItem from './MeetupAgendaItem.js';

const MeetupAgenda = {
  components: {
    MeetupAgendaItem,
  },

  name: 'MeetupAgenda',

  props: {
    agenda: {
      type: Array,
      required: true,
    },
  },

  template: `
    <div class="meetup-agenda">
      <meetup-agenda-item v-for="agendaItem in agenda" class="meetup-agenda__item" :agendaItem="agendaItem"></meetup-agenda-item>
    </div>`,
};

export default MeetupAgenda;
