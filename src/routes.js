import Vue from 'vue'
import Router from 'vue-router'
import PasswordList from "./components/PasswordList";
import PasswordForm from './components/PasswordForm'

Vue.use(Router)

export const routes = [
  {
    path: '/',
    name: 'PasswordList',
    component: PasswordList
  },
  {
    path: '/form',
    name: 'PasswordForm',
    component: PasswordForm
  },
  {
    path: '/form/:system',
    name: 'SystemForm',
    component: PasswordForm,
    props: true
  }
]
