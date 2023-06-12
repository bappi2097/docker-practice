const express = require('express')
const redis = require('redis')
const process= require('process')


const app = express()
const client = redis.createClient({
    host: 'redis-server',
    port: 6379
});
client.set('visits', 0)


app.get('/', (req, res) => {
    // process.exit(0)
    return client.get('visits', (err, visits) => {
        if(err){
            console.log(err)
        }
        client.set('visits', parseInt(visits) + 1)
        return res.send('Number of visits is ' + visits)
    })
})

app.listen('8081', () => {
    console.log('Listening on port 8081')
})