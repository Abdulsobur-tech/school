import express from 'express'
import db from './config/database.config'
import router from './route';
import cors from 'cors'
import path from 'path'

db.sync().then(() => {
  console.log('connect to db');

})

const app = express()
app.use(cors())
app.use(express.json())
app.use('/api/v1', router)

const clientPath = path.join(__dirname, '../school/build');

app.use(express.static(clientPath));
app.use('/*', (_req, res) => {
  res.sendFile(path.join(clientPath, 'index.html'));
})

const port = 9000;

app.listen(port, () => {
  console.log('server is running on port ' + port);
})