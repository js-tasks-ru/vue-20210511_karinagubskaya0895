import MeetupView from './MeetupView.js';
import { MEETUP_ID, fetchMeetup } from './data.js';

const MeetupPage = {
  data() {
    return {
      fetchMeetup,
      MEETUP_ID,
      meetup: null,
    };
  },
  components: {
    MeetupView,
  },
  mounted() {
    fetchMeetup(MEETUP_ID).then((meetup) => {
      this.meetup = meetup;
    });
  },
  name: 'MeetupPage',
  template: `<div v-if="meetup">
    <meetup-view :meetup="meetup"></meetup-view>
  </div>`,
};
export default MeetupPage;
