const express = require('express')
const router = express.Router()

const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY)

router.post('/', (req,res) => {
    const msg = {
        to: req.body.to,
        //verified single sender registered to sendGrid
        from: 'patriciamarievalentine@gmail.com',
        //this is where the response of the buyer goes through
        replyTo: req.body.from,
        subject: req.body.subject,
        text: req.body.text,
        html: req.body.html,
      }
    
      sgMail
        .send(msg)
        .then(() => {
            res.sendStatus(200)
        }, error => {
            res.sendStatus(500)
        })       
})


module.exports = router