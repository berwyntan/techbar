const MongoStore = require('connect-mongo');

const sessionOptions = {
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true, maxAge: 24 * 60 * 60 * 1000 },
    store: MongoStore.create({ mongoUrl: process.env.MONGO_URL})
}

module.exports = sessionOptions