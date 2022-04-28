import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import passport from 'passport';
import { serve, setup } from 'swagger-ui-express';
import yaml from 'yamljs';
const swaggerJsDocs = yaml.load('./api.yaml');
import cors from 'cors';
import cookieSession from 'cookie-session';
import './Model/passport.js';
import './config/db.js';
import './config/githubAuthConfig.js';
import oauthRoutes from './Routes/oauthRoutes.js';
import githubAuthRoutes from './Routes/githubAuthRoutes.js';
import userRoutes from './Routes/userRoutes.js';
import codeRoutes from './Routes/codeRoutes.js';

const app = express();
app.use(cookieSession({ name: 'auth-session', keys: ['key1', 'key2'] }));
app.use(passport.initialize());
app.use(passport.session());
app.use(express.json());
app.use(
  cors({
    credentials: true,
    origin: '*',
  })
);

app.use(oauthRoutes);
app.use('/api/user', githubAuthRoutes);
app.use('/api/user', userRoutes);
app.use('/code', codeRoutes);
app.use('/', serve, setup(swaggerJsDocs));

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(
    `Server is up and running at port ${port}\nURL: http://localhost:${port}/`
  );
});
