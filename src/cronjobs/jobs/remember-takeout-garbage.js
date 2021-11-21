require('dotenv/config')
const cronjob = require('node-cron')
const client = require('twilio')(process.env.TWILIO_SID, process.env.TWILIO_TOKEN)

async function rememberTakeOutGarbage () {
    try {
        client.messages.create({
            from: `whatsapp:+${process.env.TWILIO_PHONE}`,
            body: '⛔️ LEMBRETE: COLOCAR O LIXO NA RUA, VALIN! ⛔️',
            to: `whatsapp:+${process.env.MY_PHONE}`
        })
    } catch (error) {
        console.log(error)
    }
}

module.exports = cronjob.schedule('20 5 * * *', rememberTakeOutGarbage, {
    scheduled: true,
    timezone: process.env.TIMEZONE
})

// 30 21 * * tue,thu,sun