import _ from 'lodash'; // eslint-disable-line
import $ from 'jquery'; // eslint-disable-line

export default () => {
  // BEGIN (write your solution here)
  const make = (button) => {
    const coll = $('.carousel-item');
    let active = $('.active');
    let numact;

    for (let i = 0; i < coll.length; i++) {
      if (coll.get(i) === active.get(0)) {
        active.removeClass('active');
        numact = i;
        break;
      }
    }

    coll.each((i, el) => {
      if ( (button === 'next' && coll.length === numact + 1 && i === 0)
        || (button === 'prev' && numact === 0 && i === coll.length - 1)
        || (button === 'next' && i === numact + 1)
        || (button === 'prev' && i === numact - 1) ) {
          $(el).addClass('active');
        }
    });
  };

  const carouselControls = $('#carouselExampleControls').get(0);
  $('.carousel-control-next').click(() => {
    make('next');
  });
  $('.carousel-control-prev').click(() => {
    make('prev');
  });
  // END
