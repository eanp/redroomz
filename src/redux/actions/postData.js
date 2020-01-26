import axios from 'axios'
import qs from 'qs'

import { APP_URL } from './config'


const url = "http://192.168.0.115:3000"


export const postLogout = (token) => {
   return {
      type: 'POST_LOGOUT',
      payload: axios({
         method: 'post',
         url: `${url}/logout`,
         headers: { 'Authorization': 'Bearer ' + token }
      })
   }
}
export const postAuth = (data) => {
   return {
      type: 'POST_AUTH',
      payload: axios({
         method: 'post',
         url: `${url}/register`
         , data: data
      })
   }
}

export const postBooking = (token, data,id_hotel) => {
   return {
      type: 'POST_BOOKING',
      payload: axios({
         method: 'post',
         url: `${url}/booking/${id_hotel}`,
         data: data,
         headers: { 'Authorization': 'Bearer ' + token }
      })
   }
}

export const putCarts = (token, data) => {
   return {
      type: 'POST_CART',
      payload: axios({
         method: 'post',
         url: `${url}/cart`,
         data: data,
         headers: { 'Authorization': 'Bearer ' + token }
      })
   }
}

export const postReview = (token, data) => {
   return {
      type: 'POST_REVIEW',
      payload: axios({
         method: 'post',
         url: `${url}/review`,
         data,
         headers: { 'Authorization': 'Bearer ' + token }
      })
   }
}

export const postCheckout = (token, data) => {
   return {
      type: 'POST_CHECKOUT',
      payload: axios({
         method: 'post',
         url: `${url}/checkout`,
         data,
         headers: { 'Authorization': 'Bearer ' + token }
      })
   }
}

export const postProfile = (token, data) => {
   return {
      type: 'POST_PROFILE',
      payload: axios({
         method: 'put',
         url: `${url}/profile`,
         data,
         headers: { 'Authorization': 'Bearer ' + token }
      })
   }
}

export const postEmployee = (data) => {
   return {
      type: 'POST_EMPLOYEE',
      payload: axios.post(url, qs.stringify(data))
   }
}