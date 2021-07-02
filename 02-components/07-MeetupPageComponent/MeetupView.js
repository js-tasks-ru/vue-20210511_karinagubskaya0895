import MeetupCover from './MeetupCover.js';
import MeetupDescription from './MeetupDescription.js';
import MeetupAgenda from './MeetupAgenda.js';
import MeetupInfo from './MeetupInfo.js';
import { getImageUrlByImageId } from './data.js';

const MeetupView = {
  name: 'MeetupView',
  components: {
    MeetupAgenda,
    MeetupCover,
    MeetupDescription,
    MeetupInfo,
  },
  computed: {
    getImageUrlByImageId() {
      return getImageUrlByImageId;
    },
  },
  props: {
    meetup: {
      type: Object,
      required: true,
    },
  },
  template: `
    <div>
      <meetup-cover :link="meetup.imageId && getImageUrlByImageId(meetup.imageId)" :title="meetup.title"></meetup-cover>
      <div class="container">
        <div class="meetup">
          <div class="meetup__content">
            <h3>Описание</h3>
            <meetup-description :description="meetup.description"></meetup-description>
            <h3>Программа</h3>
            <meetup-agenda :agenda="meetup.agenda"></meetup-agenda>
          </div>
          <div class="meetup__aside">
            <meetup-info :date="new Date(meetup.date)" :organizer="meetup.organizer" :place="meetup.place"></meetup-info>
          </div>
        </div>
      </div>
    </div>`,
};

export default MeetupView;
