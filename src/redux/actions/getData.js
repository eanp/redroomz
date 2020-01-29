/* eslint-disable prettier/prettier */
import axios from 'axios'
import qs from 'qs'

import { APP_URL } from './config'


const url = "http://3.90.3.168:3000"

export const getAuth = (data) => {
   return {
      type: 'GET_AUTH',
      payload: axios({
      method: 'post',
         url: `${url}/login`,
         data
      })
   }
}

export const getHotels = (query) => {
   return {
      type: 'GET_HOTEL_LIST',
      payload: axios({
         method: 'get',
         url: `${url}/hotel`,
         params : query
      })
   }
}
export const getHotelRecommend = (query) => {
   return {
      type: 'GET_RECOMMENDED_LIST',
      payload: axios({
         method: 'get',
         url: `${url}/hotel`,
         params : query
      })
   }
}

export const getHotelDetail = (id) => {
   return {
      type: 'GET_HOTEL_DETAIL',
      payload: axios({
         method: 'get',
         url: `${url}/item/${id}`
      })
   }
}

export const getProfile = (token) => {
   return {
      type: 'GET_PROFILE',
      payload: axios({
         method: 'get',
         url: `${url}/profile`,
         headers: { 'Authorization': 'Bearer ' + token }
      })
   }
}

export const getBooking = (token) => {
   return {
      type: 'GET_BOOKING',
      payload: axios({
         method: 'get',
         url: `${url}/booking`,
         headers: { 'Authorization': 'Bearer ' + token }
      })
   }
}

export const getHistory = (token) => {
   return {
      type: 'GET_HISTORY',
      payload: axios({
         method: 'get',
         url: `${url}/history`,
         headers: { 'Authorization': 'Bearer ' + token }
      })
   }
}

export const getBill = (token) => {
   return {
      type: 'GET_BILL',
      payload: axios({
         method: 'get',
         url: `${url}/checkout`,
         headers: { 'Authorization': 'Bearer ' + token }
      })
   }
}


