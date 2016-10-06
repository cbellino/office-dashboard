import React from 'react';
import Home from './Home';

export default {

  path: '/',

  async action() {
    // TODO: fetch the data from firebase.
    const data = {
      previews: [{"comment":"Update SSP\n","key":"instance-20","name":"Preview 20","requested_by":"JB","status":"free","updated_at":1475740680497,"url":"https://preview-20.ayl.io"},{"comment":"Dashboard V3D WYSIWYG ++ !!!11","key":"instance-21","name":"Preview 21","requested_by":"cbellino","status":"free","updated_at":1475756929086,"url":"https://preview-21.ayl.io"},{"comment":"Bo backend","key":"instance-22","name":"Preview 22","requested_by":"flo","status":"used","updated_at":1471352479548,"url":"https://preview-22.ayl.io"},{"comment":"Sprint --","key":"instance-23","name":"Preview 23","requested_by":"flo","status":"free","updated_at":1472644978314,"url":"https://preview-23.ayl.io"},{"comment":"Contextual Floors (floor v2)","key":"instance-24","name":"Preview 24","requested_by":"thomasbertet","status":"used","updated_at":1475661484300,"url":"https://preview-24.ayl.io"},{"comment":"Deal UI","key":"instance-25","name":"Preview 25","requested_by":"thomasbertet","status":"free","updated_at":1475756935352,"url":"https://preview-25.ayl.io"},{"comment":"Merge visitor buyerid","key":"instance-26","name":"Preview 26","requested_by":"silvin","status":"used","updated_at":1475158866977,"url":"https://preview-26.ayl.io"},{"comment":"mobile testing","key":"instance-27","name":"Preview 27","requested_by":"mehdi","status":"locked","updated_at":1475757332087,"url":"https://preview-27.ayl.io"}],
    };
    return {
      title: 'Dashboard',
      component: <Home previews={data.previews} />,
    };
  },

};
