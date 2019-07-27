const express = require('express');
const redis = require('redis');

const app = express();
const client = redis.createClient({
    host: 'redis-server',
    port: 6379
});

client.set('visits', 0);

app.get('/', (req, res) => {
    client.get('visits', (err, vists) => {
        res.send('Number of visits is '+ vists);
        client.set('visits', parseInt(vists) + 1);
    });
});


app.listen(8081, () => {
    console.log('Listening on port 8081');
});