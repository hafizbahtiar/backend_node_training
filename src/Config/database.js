'use strict'

require('dotenv').config()
const mongoose = require('mongoose')

mongoose.set('strictQuery', true)

const uri = `mongodb://${process.env.MONGODB_IP}:${process.env.MONGODB_PORT}/${process.env.MONGODB_NAME}`

const connectDB = mongoose.createConnection(uri, { useNewUrlParser: true, useUnifiedTopology: true })

module.exports = connectDB