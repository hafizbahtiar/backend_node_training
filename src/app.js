'use strict'
require('dotenv').config()

// Import packages
const express = require('express')
const app = express()
const bodyparser = require('body-parser')
const cookieparser = require('cookie-parser')
const PORT = process.env.PORT || 3003

app.use(cookieparser())
app.use(bodyparser.json({ limit: '50mb' }))
app.use(express.urlencoded({ extended: true }))
app.use(bodyparser.urlencoded({ limit: '50mb', extended: true }))

// ====================================================================================================
//             API
// ====================================================================================================

// const authV1Route = require(`./Routes/${apiVersion.toUpperCase()}/authRoute`)
// const keysV1Route = require(`./Routes/${apiVersion.toUpperCase()}/keysRoute`)
// const userV1sRoute = require(`./Routes/${apiVersion.toUpperCase()}/usersRoute`)

// app.use(`/api/${apiVersion}/auth`, authV1Route)
// app.use(`/api/${apiVersion}/keys`, keysV1Route)
// app.use(`/api/${apiVersion}/users`, userV1sRoute)

app.listen(PORT, async () => {
    console.log(`Server listening ${process.pid} at port ${PORT}`)
})