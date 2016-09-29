require('es6-promise');
require('isomorphic-fetch');
const config = require('../../config.js');
const createAction = require('redux-actions').createAction;

const initializeApp = createAction('INITIALIZE_APP', props => props);
const setErrorMsg = createAction('SET_ERROR_MSG', msg => msg);
const setPageContent = createAction('SET_PAGE_CONTENT', content => content);
exports.initialize = () => (dispatch, getState) => dispatch(initializeApp('hello world'));

exports.fetchPageContent = () => (dispatch, getState) =>
  fetch(config.pageContentAPI, config.requestOptions)
    .then(res => {
      if (!res.ok) {
        dispatch(setErrorMsg('请求数据失败'));
      }
      return res.json();
    })
    .then(result => {
      dispatch(setPageContent(result));
    })
    .catch(err => {
      console.info(err);
    });
