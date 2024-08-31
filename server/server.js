require('dotenv').config()
const express = require('express')
const multer = require('multer')
const nodemailer = require('nodemailer')
const cors = require('cors')
const hbs = require('nodemailer-express-handlebars')
const path = require('path')

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.static('dist'))
app.use(express.urlencoded({ extended: true }))

const PORT  = process.env.PORT || 3001
const storage = multer.memoryStorage()
const upload = multer({ storage: storage })

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASS
  }
})

const hbsOptions = {
  viewEngine: {
    defaultLayout: false
  },
  viewPath: 'views'
}

transporter.use('compile', hbs(hbsOptions))

app.get('/*', function(req, res) {
  console.log("dirname: ",__dirname)
  res.sendFile(path.join(__dirname, 'dist/index.html'), (err) => {
    if (err) {
      res.status(500).send(err)
    }
  })
})

app.post("/api/send", upload.single("liite"), (req, res) => {
  const content = req.body
  const file = req.file
  console.log('file: ', file)
  console.log('data: ', content)
  
  const mailOptions = {
    from: "antti.harra@gmail.com",
    to: "lattiatyovastamaki@gmail.com",
    subject: "Tarjouspyyntö verkkosivuilta",
    template: 'formEmail',
    context: {
      status: content.yksityinen === 'true'
        ? 'Yksityinen'
        : 'Yritys',
      nimi: content.nimi,
      yritys: content.yNimi,
      puhelin: content.puhelin,
      email: content.email,
      osoite: content.osoite,
      ala: content.ala,
      vahvuus: content.vahvuus,
      kohde: content.kohde,
      olosuhde: content.olosuhde,
      eriste: content.eriste,
      sirote: content.sirote === 'true'
        ? 'Kyllä'
        : 'Ei',
      hionta: content.hionta === 'true'
        ? 'Kyllä'
        : 'Ei',
      viesti: content.viesti
    },
    attachments: file
    ? [{ filename: file.originalname, content: file.buffer }]
    : []
  }

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send(error)
    }
    res.status(200).send('Sähköposti lähetetty onnistuneesti')
  })
})

app.listen(PORT, () => {
  console.log(`Serven running on port ${PORT}`)
})