import express from 'express'
import db from './config/database.config'
import router from './route';
import cors from 'cors'
db.sync().then(() => {
    console.log('connect to db');

})

const app = express()
app.use(cors())
app.use(express.json())
app.use('/api/v1',router)

  const port = 9000;




app.listen(port, () => {
    console.log('server is running on port ' + port);

})