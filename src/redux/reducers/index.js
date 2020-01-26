import { combineReducers } from 'redux'
import auth from './auth'
import booking from './booking'
import hotelDetail from './hotelDetail'
import hotelList from './hotelList'
import bill from './bill'
import history from './history'
import profile from './profile'


const appReducer = combineReducers({
   auth, bill,hotelDetail,hotelList,profile,booking,history
})

export default appReducer;
