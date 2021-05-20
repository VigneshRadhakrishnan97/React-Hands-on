import { combineReducers } from 'redux' 
import { reducer as formreducer } from 'redux-form'
import authreducers from './authreducers' 
import streamreducers from './streamreducers'


export default combineReducers({
    auth : authreducers,
    form : formreducer,
    streams:streamreducers
});


