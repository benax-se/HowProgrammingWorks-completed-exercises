'use strict';

const fn = () => {
  let letobj = {
    name: 'Egor',
  };

  const constobj = {
    name: 'Egor',
  };

  letobj.name = 'Egorr';
  constobj.name = 'Egorr';

  letobj = {
    name: 'Egorka',
  };
};

module.exports = { fn };
