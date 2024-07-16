import React from 'react';
import Home from '../components/home/Home'

export { Home }

export const Login = React.lazy(() => import('../components/login/Login'));
export const Perfil = React.lazy(() => import('../components/users/perfil'));
export const Register = React.lazy(() => import('../components/registro/registroUsuario'));
export const Attendance = React.lazy(() => import('../components/registro/registroAsistencias'));
export const Calendar = React.lazy(() => import('../components/users/calendario'));
export const Atrasos = React.lazy(() => import('../components/users/atrasos'));
export const Notificaciones = React.lazy(() => import('../components/users/notificacion'));