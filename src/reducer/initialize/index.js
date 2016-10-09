import Immutable from 'seamless-immutable';
module.exports = function (
  state = Immutable.from({
    app:{
      text:null,
    },
  }),
  action
) {
  const { type, payload } = action;
  switch (type) {
    case 'INITIALIZE_APP': {
      return state.setIn(['app', 'text'], payload);
    }
    default:
  }
  return state;
};
