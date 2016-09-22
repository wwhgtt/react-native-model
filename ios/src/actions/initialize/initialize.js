const createAction = require('redux-actions').createAction;

const initializeApp = createAction('INITIALIZE_APP', props => props);

exports.initialize = () => (dispatch, getState) => dispatch(initializeApp('hello world'));
