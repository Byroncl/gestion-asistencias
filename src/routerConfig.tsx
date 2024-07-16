import React from "react";
import { Atrasos, Attendance, Calendar, Home, Login, Notificaciones, Perfil, Register } from "./pages";

export const routes = [
    {
        path: '/home',
        element: <Home/>
    },
    {
        path: '/',
        element: <Login/>
    },
    {
        path: '/perfil',
        element: <Perfil/>
    },
    {
        path: 'registro',
        element: <Register/>
    },
    {
        path: 'registro-asistencias',
        element: <Attendance/>
    },
    {
        path: 'calendario',
        element: <Calendar/>
    },
    {
        path: 'atrasos',
        element: <Atrasos/>
    },
    {
        path: 'notificaciones',
        element: <Notificaciones/>
    }
]