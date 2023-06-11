//Requiring Modules

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');

//Routes
const loginRoutes = require('./routes/loginRoutes');
const registerRoutes = require('./routes/registerRoute');
const chatRoutes = require('./routes/chatRoutes');

dotenv.config();

const app = express();
app.use(express.urlencoded({ extended: true, limit: '10kb' }));
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());
app.use(cookieParser());
app.use(
  cors({
    origin: ['http://localhost:3000'],
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
    credentials: true,
  })
);

//Connection to Database
mongoose
  .connect(
    'mongodb+srv://admin:Test123@atlascluster.ahs5ujp.mongodb.net/Users',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log('DB connection successful!'));

app.use('/registeration', registerRoutes);
app.use('/login', loginRoutes);
app.use('/messages', chatRoutes);

app.listen(8000, () => console.log('app is listening at 8000'));
