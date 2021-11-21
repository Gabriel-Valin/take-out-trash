const rememberTakeOutGarbage = require('./jobs/remember-takeout-garbage')

class ManagerCronjobs {
    constructor () {
        this.jobs = [rememberTakeOutGarbage]
    }

    run () {
        this.jobs.forEach( job => job.start() )
    }
}

module.exports = new ManagerCronjobs()