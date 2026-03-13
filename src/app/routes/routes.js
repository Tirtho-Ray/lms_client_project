import express from 'express';
import { AuthRoutes } from '../modules/Auth/auth.route.js';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);

const routes = express.Router();

const moduleRoutes = [
    {
        path: '/auth',
        route: AuthRoutes,
    },
];

moduleRoutes.forEach((route) => routes.use(route.path, route.route));
export default routes;
