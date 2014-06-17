var Opentip = require('opentip');

Opentip.styles['auth0-light'] = {
  className:    'auth0',
  extends:      'glass',
  target:       true,
  showOn:       'mouseover',
  hideTrigger:  'closeButton',
  tipJoint:     'left',
  fixed:        true
};

Opentip.styles['auth0-dark'] = {
  className:    'auth0',
  extends:      'dark',
  target:       true,
  showOn:       'mouseover',
  hideTrigger:  'closeButton',
  tipJoint:     'left',
  fixed:        true
};

Opentip.defaultStyle = 'auth0-light';

exports.Opentip = Opentip;
