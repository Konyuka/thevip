// eslint-disable-next-line no-async-promise-executor
const functions = require('firebase-functions')
const nodemailer = require('nodemailer')
const postmarkTransport = require('nodemailer-postmark-transport')
const admin = require('firebase-admin')
const striptags = require('striptags')

try {admin.initializeApp(functions.config().firebase)} catch(e) {
  console.log('dbMessageOnUpdate initializeApp failure')
}


const postmarkKey = functions.config().postmark.key
const mailTransport = nodemailer.createTransport(postmarkTransport({
  auth: {
    apiKey: postmarkKey
  }
}))

exports.forwardMessage = functions.firestore.document('/bookings/{bookingsId}').onCreate((snapshot, context) => {
  let html="<strong>Client's Name:</strong> "+striptags(snapshot.get('name'))+"<br/><br/>"
  html+="<strong>Contact Email:</strong> "+striptags(snapshot.get('email'))+"<br/><br/>"
  html+="<strong>Contact Number:</strong> "+striptags(snapshot.get('phone'))+"<br/><br/>"
  html+="<strong>Services Required:</strong> "+striptags(snapshot.get('service'))+"<br/><br/>"
  html+="<strong>Number Of Guests:</strong> "+striptags(snapshot.get('guests'))+"<br/><br/>"
  html+="<strong>Description:</strong> "+striptags(snapshot.get('description'))+"<br/><br/>"
  
  if(snapshot.get('bookings')) {
    html+="<strong>:</strong><br/><pre>"+striptags(snapshot.get('bookings'))+"</pre><br/><br/>"
  }

  return sendEmail(html);
})

function sendEmail(html) {

  const mailOptions = {
    from: 'michael.saiba@sturgeonlimited.co.ke',
    to: 'test@sturgeonlimited.co.ke',
    subject: 'Booking Details',
    html: html
  }

  return mailTransport.sendMail(mailOptions)
    .then(() => console.log('dbMessagesOnUpdate:Welcome confirmation email'))
    .catch((error) => console.error('There was an error while sending the email:', error))
}