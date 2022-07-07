const functions = require('firebase-functions');
const nodemailer = require('nodemailer');

var admin = require("firebase-admin");

var serviceAccount = {
    "type": "service_account",
    "project_id": "kal-pathippagam",
    "private_key_id": "b8e2bd87177cdd456607aae1267c7486ef83bcdd",
    "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDAL3ew7DU8vES7\nKYk6kZyGZSZgl5Ma7I7lGlHLbXW0wwdnwOTul1xCyeefKuYiEvRGd+xfgcYUL/+R\ncK4xN20megiu8Wt1PR52rCsjVGC+dVDnCnA28gRjus3XCdPvlTULG5FDL2888Jzr\nfZFm+7To0JukkZRgyBPw471OV5oCO4VYj5w77XEqDFTiO3TwS5OJi7+Ryuc/ocDF\nbfxfPRXqC1fH1RcWRWhB72EHPKyAUPZ/yvpGAmWj/Ibpii6qwSKUc1Rcp6JPWQwI\nRZylx1RH2m/g9i1UU2YFfNS8KbslbHNTnklB+l7xLXPO3aTNrphp8frAECIi1RvQ\npvnnNTi3AgMBAAECggEAVbaV7j1a/QyGpua+gnWg1rvUIu5XOIHatUlIw668+XKm\nIdsA/3xYNJ1yBSYP35COi8M+k9YALs69b/NObTroHmn853Fa2L36kTj2QFqIj0kp\nXPHl3EuSM5yD421JrafhMWQJJGrKdOZnRgwJxmFqbQ9k6z/WalextRUNQByH3og/\nlgvltzQ27UFOYhhOqH8Z58pw/DFV5znYCGeOi9Sjibd7w6RUEUSHIFg3xzm+tUYN\nsrdLxbs1FTF59Qo/f+l1i//RjgYbqNrLoIvTYgDEmc+u/vBtxdg0KKAl4zZwYtNJ\nHps4hPYtm1tHWeLjp6RNb6D4TcaI6DNyb0gB+AAxSQKBgQD+fDqn+imDb2SA6i9/\nqMWyP4pQrg2DyO9LY28Qe2XNswAmpxqWuwWMde8KcUWTr//CHyjrUuXA22opVpCC\nFM+vzX4CrusU8/taQGkGrwLID25YIZ2x3FYaDNctbj+PevA7vW2Ei2x4hzUYSFz5\nPN6sdRiGNlu2O7V10YqLL0O86wKBgQDBVE8s94DWg+MZdGtHOZTn7c14rQykhmuy\naweBUGikduI5e3cJrLBW7sTtwta8MXe97jjHIV2E2wMYCVW4cXb1L6T/29yBdFvK\nJwSaiY7ByCd9XbG5cx61ysSMe59BKCUtKAYoVq2wKxgrsbbuwXK2v+a1EnyLp4jL\n58ZVwccQZQKBgDqPicvnxC/LrVwBB+cfhkbLWl/Qfamqzm4RtpgbXUTlgQ5j+7ld\n1hwJc3V6tWET6g3Yr8jfLaGgnCBhHCXi9hvldK7XY59RubB+C+0OztwMuP6s1aX9\nJw8dj1KUASpaRvfoUlBi6RYfPveUh1iPSkpzM66Gybn4qXwwOOpoePT7AoGAGepE\nRsHSqm65dYMOklicpk5RObjwteky7JK+Sc5OiKVLA+uR9GEKrkyJZ1mz0TxMUdBq\nGf9V+uYkzwcJT5UeHhXJ52ZAc7X2S+3ZByIjWcSLzplNpo9Q8YuBt1cm7OQFv7za\nvnOICtJsBgdnfy+9QdQNh/43Zb0KcFLcWkiEd6UCgYEAjfmL/u8aevqlqwWGKZ9n\noANvEgZyepWvNjOWIhD1cJwIL+l4Qux815l4gm8ypdEJas5WmuY7ZGRvK6bLDECI\nD8b9+isa1pqnRVpWxE0Ip5CVJOXIwpyyMW4I+XN4gxh+YYoq57JEdMpuicJrPXl1\nTrv+W8745iZ2lcw4kIRa2qQ=\n-----END PRIVATE KEY-----\n",
    "client_email": "firebase-adminsdk-nqtyp@kal-pathippagam.iam.gserviceaccount.com",
    "client_id": "104465391564824778667",
    "auth_uri": "https://accounts.google.com/o/oauth2/auth",
    "token_uri": "https://oauth2.googleapis.com/token",
    "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
    "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-nqtyp%40kal-pathippagam.iam.gserviceaccount.com"
  };

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://kal-pathippagam.firebaseio.com"
});

//const deviceToken = "e8LD465_SwyElYCm8cKBR6:APA91bG1tVMIiKW7SB-SFfqtL0Xx1aQxVlGHjI6ocde3_sztJcphJ6Mgf0Z-SS9HOPIMdaYgNTNpfJSTnYmbhEd_PJ2s1YGootVd7udhYHNOn93CmEhPHZNxMNgfpnuLtwDzonbf9crf";
const deviceToken = "fUf3EIYUSM2a4CD630RzMv:APA91bEdmcb8OAg-vhRJN2zaYBhYNnVLZclOayYgxW77CHnP5rZYLbC5nu-sJKX7204FoOs1prE7JbZH5j4HJxHIMUK6vUWi-9YS74hjqUBx1enc8sQxVrs4Kudv4hqSEuH3mehMg9Ud";
var book_ttl = ["Manufacturing Processes (Tamil)", "Manufacturing Processes (English)", "Strength of Materials (Tamil)", "Strength of Materials (English)", "Machine Drawing (Tamil)", "Machine Drawing (English)", "CA & CAD Practical Manual", "Foundry & Welding Practical Manual", "Lathe & Drilling Practical Manual", "Metrology & Metallography Manual", "Process Automation Practical Manual", "Thermal & Automobile Practical Manual", "Life & Employability Skills Practical Manual", "Engineering Graphics I & II (Tamil)", "Engineering Graphics I & II (English)", "Workshop Practice Practical Manual", "Special Machines (Tamil)", "Special Machines (English)", "Special Machines Manual", "Heat Power Engineering (Tamil)", "Heat Power Engineering (English)", "CAD & Manufacturing (Tamil)", "CAD & Manufacturing (English)", "CAD & Manufacturing Practical Manual"];
var db = admin.database();
var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'kalpathippagam@gmail.com',
        pass: 'vdpwtvysllrzfnjh'
    }
});


exports.sendMail = functions.https.onRequest((req, res) => {

    db.ref("orders").push(req.body, function () {
        res.status(200).send("DONE");
    })

    var ord_tbl = `<table border=1 style="border-collapse:collapse;"><tr><th>#</th><th>TITLE</th><th>Qty.</th></tr>`
    req.body.book_ord_t.forEach(function (x, i) {
        ord_tbl += `<tr><td style="padding:5px;" >${i + 1}.</td><td style="padding:5px;">${book_ttl[x]}</td><td style="padding:5px;">${req.body.book_ord_q[i]}</td></tr>`;
    });
    ord_tbl += "</table>";
    var mailOptions = {
        from: 'kalpathippagam@gmail.com',
        to: 'agilanvlr2001@gmail.com,kalpathippagam@gmail.com' + (req.body.mail ? ',' + req.body.mail : ''),
        subject: 'ORDER CONFIRMATION',
        html: `<h3>Hello ${req.body.name},</h3>
        <center>
      <h3 style = "color:red"><u>Your ORDER</u></h3>
      ${ord_tbl}<br>
      Estimated Total : <span style="font-weight:bold">₹ ${req.body.tot}</span>
      </center>
        <h3>Delivery Address:</h3>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${req.body.addr.replace(/\n/g, '<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;') || "NOT SPECIFIED"}<br><br>
        <b>Mob.</b>: ${req.body.tel}
      <center>
      <h3>Thank you for ordering books in KAL PATHIPPAGAM.<br>Your order will be processed at the earliest.<br>Kindly keep in touch with us...<br>We will contact you shortly...</h2>
      <br><br>Regards<br>KAL PATHIPPAGAM
      </center>`
    };

    transporter.sendMail(mailOptions);


    admin.messaging().sendToDevice(deviceToken,
        {
            data: { order: "1" },
            notification: {
                title: 'New Order',
                body: `${req.body.name} has placed an Order.`,
                image:'https://dl.dropbox.com/s/ykzpsfjvow8z6tl/logo%28256%29.png'
            }
        },
    )

});


exports.sendMsg = functions.https.onRequest((req, res) => {
    db.ref("messages").push(req.body, function () {
        res.status(200).send("DONE");
    })

    var mailOptions = {
        from: 'kalpathippagam@gmail.com',
        to: 'agilanvlr2001@gmail.com,kalpathippagam@gmail.com',
        subject: 'MESSAGE NOTIFICATION',
        html: `${req.body.name || 'Someone'} has sent a Message.<br><br>
        Phone: ${req.body.tel}<br>
        Mail: ${req.body.mail}<br>
        Message: ${req.body.msg}`
    };
    transporter.sendMail(mailOptions);

    admin.messaging().sendToDevice(deviceToken,
        {
            data: { order: "0" },
            notification: {
                title: 'New Message',
                body: `${req.body.name || 'Someone'} has sent a message.`,
                image:'https://dl.dropbox.com/s/ykzpsfjvow8z6tl/logo%28256%29.png'
            }
        },
    )

});


// exports.push_message = functions.https.onRequest((req, res) => {

//     admin.messaging().sendToDevice(deviceToken,
//         {
//             data: { order: "0" },
//             notification: {
//                 title: 'New Message',
//                 body: `Raj has placed an Order.`,
//                 image:'https://dl.dropbox.com/s/ykzpsfjvow8z6tl/logo%28256%29.png'
//             }
//         },
//     ).then(data => res.end(JSON.stringify(data)))
// })