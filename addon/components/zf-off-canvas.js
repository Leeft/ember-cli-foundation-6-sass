import Ember from 'ember';
import zfWidget from 'ember-cli-foundation-6-sass/mixins/zf-widget';
import layout from '../templates/components/zf-off-canvas';


export default Ember.Component.extend(zfWidget, {

  /** @member Layout */
  layout: layout,

  /** @member Class names */
  classNames: ['off-canvas-wrapper'],

  /** @member Left off canvas class names */
  leftClassNames: ['off-canvas','position-left'],

  /** @member Right off canvas class names */
  rightClassNames: ['off-canvas','position-right'],

  concatenatedProperties: ['leftClassNames', 'rightClassNames'],

  leftClasses: Ember.computed( 'leftClassNames.[]', function() {
    return this.get('leftClassNames').join(' ');
  }),

  rightClasses: Ember.computed( 'rightClassNames.[]', function() {
    return this.get('rightClassNames').join(' ');
  }),

  /** @member Makes the data attribute binding appear */
  'off-canvas-wrapper': '',

  /** @member Foundation type */
  'zfType': 'OffCanvas',

  /** @member Foundation specific options */
  'zfOptions': ['closeOnClick', 'transitionTime', 'position', 'forceTop', 'isRevealed',
                'revealOn', 'autoFocus', 'revealClass', 'trapFocus'],

  /** @member Off canvas control ids */
  'controlIds': null,

  /** @member Off canvas left section flags */
  offCanvasLeftContent: { isOffCanvasLeft: true },

  /** @member Off canvas right section flags */
  offCanvasRightContent: { isOffCanvasRight: true },

  /** @member Show left off canvas */
  showLeftOffCanvas: true,

  /** @member Show right off canvas */
  showRightOffCanvas: false,

  handlePreRender() {
    let controlIds = [];

    // Create control ids
    if (true === this.get('showLeftOffCanvas')) {
      controlIds.push('#zf-off-canvas-left');
    }
    if (true === this.get('showRightOffCanvas')) {
      controlIds.push('#zf-off-canvas-right');
    }

    // Set control ids
    this.set('controlIds', controlIds);
  }
});
