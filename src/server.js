const { app } = require('./app')
const ManagerCronjobs = require('./cronjobs/manager')
require('dotenv/config')
const port = process.env.PORT || 3000


app.listen(port, () => {
    console.log(`Server has been started at ${port} ✅`)
    ManagerCronjobs.run()
})