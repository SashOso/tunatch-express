import express from 'express';
import expressLayouts from 'express-ejs-layouts';
import morgan from 'morgan';
import cors from 'cors';
import routes from './routes';
import path from 'path';

const app=express();

// Middlewares
app.use(morgan('dev'));
app.use(express.json());

// Archivos estáticos
app.use(express.static('public'));
app.use('/upload', express.static('upload'));

// EJS + Layout
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../views'));
app.set('layout', 'layout/main');
app.use(expressLayouts);

// CORS Config
app.use(cors(
    {
        origin: 'http://localhost:4200',
        methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
        allowedHeaders: ['Content-Type', 'Authorization', 'Range', 'Accept', 'X-Requested-With'],
        credentials: true,
        exposedHeaders: ['Content-Range', 'Accept-Ranges', 'Content-Length', 'Content-Type'],
    }
));

// Rutas
app.use('/',routes);

export default app;