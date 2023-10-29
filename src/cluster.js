'use strict'

const cluster = require('cluster')
const numCPUs = require('os').cpus().length

if (cluster.isPrimary) {
    console.log(`Master ${process.pid} is running`)

    // Create cluster workers
    for (let i = 0; i < numCPUs; i++) {
        cluster.fork()
    }

    cluster.on('exit', (worker, code, signal) => {
        console.log(`Worker ${worker.process.pid} died. Restarting...`)
        // Replace the dead worker by forking a new one
        const newWorker = cluster.fork() // Fork a new worker
        console.log(`New worker ${newWorker.process.pid} started.`)
    })
} else {
    require('./app') // Start the Express.js app by requiring app.js
}
