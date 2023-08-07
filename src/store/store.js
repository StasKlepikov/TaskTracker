import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux';
import taskReducer from '../services/reducers/taskReducer'
import modalReducer from '../services/reducers/modalReducer';
import searchReducer from '../services/reducers/searchReducer';

const combinedReducer = combineReducers({
    tasks: taskReducer,
    modal: modalReducer,
    search: searchReducer
})
const store = configureStore({ reducer: combinedReducer, devTools: { name: 'Store' } })

export default store;