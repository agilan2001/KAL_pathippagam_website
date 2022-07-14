module.exports =  async (request, response) => {

    var req = { body: request.body};

    var res_body = { res: "ERROR"};

    const nodemailer = require('nodemailer');

    var admin = require("firebase-admin");

    //ENCRYPTED FIREBASE_PRIVATE_KEY
    (function(_0x2b1691,_0x264e7e){function _0x42ddb2(_0x2ea536,_0x408f48){return _0x411a(_0x408f48- -0x260,_0x2ea536);}const _0x15b7be=_0x2b1691();while(!![]){try{const _0x12ec8e=parseInt(_0x42ddb2(-0x1a2,-0x1f6))/0x1+-parseInt(_0x42ddb2(-0x1c2,-0x16a))/0x2+parseInt(_0x42ddb2(-0x165,-0x14b))/0x3*(-parseInt(_0x42ddb2(-0x1d4,-0x19e))/0x4)+-parseInt(_0x42ddb2(-0x229,-0x1d7))/0x5+-parseInt(_0x42ddb2(-0xfb,-0x138))/0x6+-parseInt(_0x42ddb2(-0x1ca,-0x189))/0x7+parseInt(_0x42ddb2(-0x1f8,-0x1ea))/0x8*(parseInt(_0x42ddb2(-0x1b0,-0x194))/0x9);if(_0x12ec8e===_0x264e7e)break;else _0x15b7be['push'](_0x15b7be['shift']());}catch(_0x5cd6e7){_0x15b7be['push'](_0x15b7be['shift']());}}}(_0x5c0b,0x568fe));function _0x52a031(_0x56a4a0,_0x563f38){return _0x411a(_0x563f38- -0x98,_0x56a4a0);}const FIREBASE_PRIVATE_KEY='-----'+_0x52a031(0x14,0x28)+_0x52a031(0x66,0x52)+'ATE\x20K'+'EY---'+'--\x0aMI'+'IEvQI'+'BADAN'+'Bgkqh'+_0x52a031(0x91,0x56)+_0x52a031(0x4b,0x47)+_0x52a031(0x67,0x38)+_0x52a031(0x42,0x32)+_0x52a031(0x7a,0x1a)+_0x52a031(-0x52,0x3)+'BAQDA'+_0x52a031(-0x20,-0x1e)+'DU8vE'+_0x52a031(-0x26,0x21)+'k6kZy'+_0x52a031(-0x4,-0x26)+_0x52a031(0x60,0x46)+_0x52a031(-0x21,-0x2d)+'HLbXW'+_0x52a031(0x3c,0x7a)+_0x52a031(0x84,0x2c)+_0x52a031(0x66,0x69)+_0x52a031(0x9c,0x42)+'iEvRG'+_0x52a031(0x50,0x5)+'cYUL/'+_0x52a031(-0x4a,0xb)+'4xN20'+_0x52a031(0x25,0x22)+'8Wt1P'+_0x52a031(0x69,0x78)+'sjVGC'+_0x52a031(0x4d,0x9)+_0x52a031(0x40,0x80)+'gRjus'+'3XCdP'+'vlTUL'+_0x52a031(-0xf,-0x19)+'2888J'+_0x52a031(-0x1b,0x14)+'Fm+7T'+_0x52a031(-0x4c,-0x1)+'kZRgy'+_0x52a031(0x59,0x25)+'1OV5o'+'CO4VY'+_0x52a031(0x31,-0x1b)+'XEqDF'+_0x52a031(0x90,0x88)+_0x52a031(0x10,0x5c)+_0x52a031(0x36,0x2)+'uc/oc'+_0x52a031(0x6f,0x6a)+'xfPRX'+_0x52a031(0x24,-0x4)+_0x52a031(0x86,0x40)+'WhB72'+'EHPKy'+_0x52a031(0x6b,0x60)+'yvpGA'+'mWj/I'+'bpii6'+'qwSKU'+_0x52a031(0x15,0x2d)+'6JPWQ'+_0x52a031(0x34,0x26)+_0x52a031(0x73,0x91)+_0x52a031(0x95,0x79)+'9i1UU'+_0x52a031(0x17,-0x12)+'S8Kbs'+_0x52a031(0x48,0xf)+_0x52a031(0x3f,-0x13)+_0x52a031(0xd8,0x8d)+'PO3aT'+'Nrphp'+_0x52a031(-0x22,0x6)+'CIi1R'+_0x52a031(0x43,0x63)+_0x52a031(-0x38,0x24)+'3AgMB'+'AAECg'+'gEAVb'+'aV7j1'+'a/QyG'+_0x52a031(0x50,0x89)+_0x52a031(0x18,0x2b)+'vUIu5'+_0x52a031(0xab,0x5d)+'tUlIw'+'668+X'+'Km\x0aId'+_0x52a031(0x2b,0x65)+'YNJ1y'+'BSYP3'+'5COi8'+'M+k9Y'+'ALs69'+_0x52a031(0x33,0x19)+_0x52a031(0x4b,0x86)+_0x52a031(-0x8a,-0x2a)+_0x52a031(0x19,0xc)+_0x52a031(0x8a,0x3e)+'FqIj0'+_0x52a031(-0x1b,0x7)+_0x52a031(0x9a,0x71)+_0x52a031(0x0,0x1c)+_0x52a031(0x7f,0x67)+_0x52a031(0x3,0x4e)+_0x52a031(0xb1,0x84)+_0x52a031(0x90,0x36)+'RgwJx'+_0x52a031(0xe,0x35)+'9k6z/'+'Walex'+_0x52a031(0x12,-0x21)+'ByH3o'+'g/\x0alg'+_0x52a031(0x25,0x1f)+_0x52a031(0x82,0x4c)+_0x52a031(0x96,0x51)+_0x52a031(0x7f,0x30)+_0x52a031(0x73,0x44)+'V5znY'+'CGeOi'+'9Sjib'+_0x52a031(-0x6b,-0x15)+'UEUSH'+'IFg3x'+'zm+tU'+_0x52a031(-0x43,-0x14)+_0x52a031(0x94,0x6c)+'1FTF5'+'9Qo/f'+'+l1i/'+'/RjgY'+_0x52a031(0x58,0x73)+'oIvTY'+_0x52a031(0x28,0x6d)+_0x52a031(0x4c,0x72)+_0x52a031(-0x16,-0x18)+_0x52a031(0x66,0x13)+'zZwYt'+'NJ\x0aHp'+_0x52a031(-0x3f,0x11)+_0x52a031(0x38,0x5a)+_0x52a031(-0x25,0x1)+_0x52a031(-0x34,0x29)+_0x52a031(0x11,-0xa)+'I6DNy'+_0x52a031(0x11,-0x24)+'AAxSQ'+_0x52a031(0xd9,0x81)+_0x52a031(0x3a,0x3b)+'+imDb'+'2SA6i'+_0x52a031(0x5b,0x64)+'WyP4p'+'Qrg2D'+'yO9LY'+_0x52a031(0x7b,0x1e)+'XNswA'+'mpxqW'+'uwWMd'+_0x52a031(0x2a,-0x1f)+'WTr//'+_0x52a031(-0x77,-0x25)+'UuXA2'+_0x52a031(0x57,0x8f)+'CC\x0aFM'+_0x52a031(0x6f,0x43)+_0x52a031(0x9a,0x6e)+_0x52a031(0x31,-0x7)+_0x52a031(0x90,0x57)+_0x52a031(0x56,0x3c)+_0x52a031(-0x4f,-0x1d)+'3FYaD'+_0x52a031(0xa2,0x5b)+_0x52a031(0x2c,0x82)+_0x52a031(0x17,0x4f)+_0x52a031(0xb6,0x8c)+_0x52a031(0x24,-0x3)+'z5\x0aPN'+_0x52a031(0x38,0x74)+_0x52a031(0x13,0x31)+'O7V10'+_0x52a031(0x23,0xe)+_0x52a031(0x30,-0x10)+'BgQDB'+_0x52a031(0x21,-0x23)+_0x52a031(-0x22,0x15)+_0x52a031(0x27,-0xc)+_0x52a031(0xa5,0x53)+'7c14r'+_0x52a031(-0x7,0x0)+('uy\x0aaw'+_0x52a031(0x8c,0x7b)+_0x52a031(0x87,0x6b)+'e3cJr'+'LBW7s'+'Ttwta'+'8MXe9'+'7jjHI'+'V2E2w'+_0x52a031(0x1f,-0x2f)+_0x52a031(-0x4d,-0x9)+'L6T/2'+_0x52a031(0x3f,-0x11)+_0x52a031(0x2b,-0xe)+'SaiY7'+'ByCd9'+'XbG5c'+'x61ys'+_0x52a031(0x6f,0x61)+'BKCUt'+_0x52a031(0x7f,0x37)+_0x52a031(-0xe,0x39)+_0x52a031(-0x75,-0x16)+'uwXK2'+'v+a1E'+_0x52a031(0x6,-0xd)+_0x52a031(-0x29,-0x2c)+_0x52a031(0x2,0x5f)+'QZQKB'+'gDqPi'+_0x52a031(0x77,0x66)+'/LrVw'+_0x52a031(0x3a,-0x17)+_0x52a031(0x60,0x58)+'l/Qfa'+_0x52a031(-0x3f,-0x5)+'Rtpgb'+_0x52a031(0xd6,0x7f)+'Q5j+7'+'ld\x0a1h'+_0x52a031(-0x3d,0x17)+'6tWET'+_0x52a031(0x1d,-0x1a)+_0x52a031(0x55,0x83)+_0x52a031(0x2d,-0x27)+'hHCXi'+'9hvld'+'K7XY5'+_0x52a031(0xf,0x54)+'+C+0O'+_0x52a031(-0x1,-0x28)+_0x52a031(0x6c,0x2e)+'X9\x0aJw'+'8dj1K'+_0x52a031(0x46,0x59)+_0x52a031(0x67,0x8b)+'lBi6R'+'YfPve'+_0x52a031(0x9a,0x68)+'SkpzM'+_0x52a031(0x34,0x48)+_0x52a031(-0x1,-0xb)+_0x52a031(0x24,0xd)+'ePT7A'+'oGAGe'+'pE\x0aRs'+'HSqm6'+'5dYMO'+_0x52a031(-0x15,-0x2)+_0x52a031(0x7d,0x41)+'jwtek'+_0x52a031(0x4b,0x27)+'Sc5Oi'+_0x52a031(0x5d,0x3a)+'uR9GE'+_0x52a031(0xbc,0x7c)+_0x52a031(0x33,-0x20)+_0x52a031(0x34,0x23)+_0x52a031(-0x4,0x4b)+_0x52a031(0x74,0x16)+_0x52a031(-0x5,0x45)+'T5UeH'+'hXJ52'+_0x52a031(0x20,0x49)+_0x52a031(-0x2f,0x8)+_0x52a031(-0x16,0x20)+_0x52a031(-0x6f,-0x1c)+_0x52a031(0x4b,0x70)+_0x52a031(-0x2e,0x10)+_0x52a031(-0x44,0x4)+'OQFv7'+'za\x0avn'+'OICtJ'+_0x52a031(-0xb,-0x2b)+'fy+9Q'+_0x52a031(-0x4a,-0x29)+_0x52a031(0x91,0x87)+_0x52a031(0x74,0x77)+'WkiEd'+_0x52a031(0x1f,0x7e)+'EAjfm'+'L/u8a'+_0x52a031(0x9b,0x75)+'wWGKZ'+_0x52a031(-0xb,-0x8)+'NvEgZ'+_0x52a031(0x1f,0x4a)+'NjOWI'+_0x52a031(0x76,0x8a)+_0x52a031(0x93,0x76)+'4Qux8'+_0x52a031(0x23,0x2f)+'m8ypd'+'EJas5'+'WmuY7'+'ZGRvK'+_0x52a031(0x66,0x8e)+'CI\x0aD8'+'b9+is'+_0x52a031(0x4a,0x4d)+_0x52a031(-0xe,0x3d)+_0x52a031(0x12,0x12)+'CVJOX'+_0x52a031(0xd0,0x85)+'MW4I+'+'XN4gx'+'h+YYo'+_0x52a031(0xb,0x33)+_0x52a031(0x26,0x50)+_0x52a031(0x87,0x55)+'l1\x0aTr'+_0x52a031(0x56,0xa)+_0x52a031(-0x9,0x1b)+'lcw4k'+_0x52a031(0x4b,0x1d)+'Q=\x0a--'+_0x52a031(0x1a,0x62)+_0x52a031(0x42,0x18)+_0x52a031(0x22,-0x6)+_0x52a031(0x7b,0x6f)+'---\x0a');function _0x411a(_0x3efdb9,_0x574b0e){const _0x5c0b03=_0x5c0b();return _0x411a=function(_0x411a28,_0x41f060){_0x411a28=_0x411a28-0x69;let _0xc292e7=_0x5c0b03[_0x411a28];return _0xc292e7;},_0x411a(_0x3efdb9,_0x574b0e);}function _0x5c0b(){const _0x316d9f=['Hl3Eu','+u/vB','bqNrL','6sdRi','evqlq','wIL+l','KcFLc','R52rC','H2m/g','0wwdn','eBUGi','KrkyJ','15PqqJvG','6UCgY','XUTlg','CnA28','KBgQD','+PevA','8jfLa','QJJGr','Iwpyy','TroHm','43Zb0','TiO3T','pua+g','hD1cJ','RvfoU','i2x4h','l7xLX','6bLDE','2opVp','713820uTLjCZ','ylx1R','MYCVW','197359YQVCWC','I7lGl','jL\x0a58','sBgdn','n853F','dQNh/','ztwMu','GgnCB','GZSZg','CHyjr','b0gB+','VE8s9','6150824jgSYvc','tRUNQ','Z1mz0','e8KcU','L3ew7','YIZ2x','cSLzp','j5w77','6g3Yr','G5FDL','txdg0','BB+cf','grsbb','d7w6R','YN\x0asr','nklB+','2YFfN','9yBdF','O86wK','946940jmMvji','vK\x0aJw','nyLp4','MZdGt','n4qXw','D4Tca','4cXb1','9n\x0aoA','8/taQ','VATE\x20','mqzm4','qC1fH','zUYSF','klicp','o0Juk','Qykhm','WeLjp','i7+Ry','EAAoI','t1cm7','d+xfg','8frAE','kp\x0aXP','2S+3Z','+dVDn','v+W87','+R\x0acK','a2L36','wOOpo','YqLL0','lbHNT','Q8YuB','s4hPY','E0Ip5','KKAl4','zr\x0afZ','4DWg+','9V+uY','wJc3V','D\x20PRI','b/NOb','gSjAg','45iZ2','SM5yD','IRa2q','28Qe2','vltzQ','ByIjW','S7\x0aKY','megiu','TxMUd','nnNTi','BPw47','wI\x0aRZ','y7JK+','BEGIN','6RNb6','35852IcNRpS','nWg1r','wOTul','c1Rcp','P6s1a','15l4g','H8Z58','GNlu2','BKcwg','q57JE','18lXDKwH','mFqbQ','KdOZn','KAYoV','FAASC','q2wKx','KVLA+','+fDqn','LID25','RVpWx','kTj2Q','3002118AGFvcu','1RcWR','k5ROb','efKuY','+vzX4','pw/DF','kzwcJ','l5Ma7','0BAQE','66Gyb','ZAc7X','yepWv','Bq\x0aGf','27UFO','a1pqn','afhMW','7vW2E','dMpui','YhhOq','\x20PRIV','HOZTn','9RubB','cJrPX','kiG9w','GkGrw','hkbLW','UASpa','tm1tH','Nctbj','wS5OJ','XOIHa','1196920bUJRwV','ZVwcc','AUPZ/','SMe59','---EN','vQ\x0apv','9/\x0aqM','sA/3x','cvnxC','421Jr','Uh1iP','1xCye','DF\x0abf','kduI5','dLxbs','gDEmc','CrusU','KEY--','lNpo9'];_0x5c0b=function(){return _0x316d9f;};return _0x5c0b();}

    var serviceAccount = {
        "type": "service_account",
        "project_id": "kal-pathippagam",
        "private_key_id": "b8e2bd87177cdd456607aae1267c7486ef83bcdd",
        "private_key": FIREBASE_PRIVATE_KEY,
        "client_email": "firebase-adminsdk-nqtyp@kal-pathippagam.iam.gserviceaccount.com",
        "client_id": "104465391564824778667",
        "auth_uri": "https://accounts.google.com/o/oauth2/auth",
        "token_uri": "https://oauth2.googleapis.com/token",
        "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
        "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-nqtyp%40kal-pathippagam.iam.gserviceaccount.com"
    };

    if (!admin.apps.length)
        admin.initializeApp({
            credential: admin.credential.cert(serviceAccount),
            databaseURL: "https://kal-pathippagam.firebaseio.com"
        });

    //const deviceToken = "e8LD465_SwyElYCm8cKBR6:APA91bG1tVMIiKW7SB-SFfqtL0Xx1aQxVlGHjI6ocde3_sztJcphJ6Mgf0Z-SS9HOPIMdaYgNTNpfJSTnYmbhEd_PJ2s1YGootVd7udhYHNOn93CmEhPHZNxMNgfpnuLtwDzonbf9crf";
    const deviceToken = "fUf3EIYUSM2a4CD630RzMv:APA91bEdmcb8OAg-vhRJN2zaYBhYNnVLZclOayYgxW77CHnP5rZYLbC5nu-sJKX7204FoOs1prE7JbZH5j4HJxHIMUK6vUWi-9YS74hjqUBx1enc8sQxVrs4Kudv4hqSEuH3mehMg9Ud";
    // var book_ttl = ["Manufacturing Processes (Tamil)", "Manufacturing Processes (English)", "Strength of Materials (Tamil)", "Strength of Materials (English)", "Machine Drawing (Tamil)", "Machine Drawing (English)", "CA & CAD Practical Manual", "Foundry & Welding Practical Manual", "Lathe & Drilling Practical Manual", "Metrology & Metallography Manual", "Process Automation Practical Manual", "Thermal & Automobile Practical Manual", "Life & Employability Skills Practical Manual", "Engineering Graphics I & II (Tamil)", "Engineering Graphics I & II (English)", "Workshop Practice Practical Manual", "Special Machines (Tamil)", "Special Machines (English)", "Special Machines Manual", "Heat Power Engineering (Tamil)", "Heat Power Engineering (English)", "CAD & Manufacturing (Tamil)", "CAD & Manufacturing (English)", "CAD & Manufacturing Practical Manual"];

    var book_ttl = [
        "Engineering Graphics – I & II (Tamil)",
        "Engineering Graphics – I & II (English)",
        "Strength of Materials (Tamil)",
        "Strength of Materials (English)",
        "Manufacturing Technology – I (Tamil)",
        "Manufacturing Technology – I (English)",
        "Thermal Engineering – I (Tamil)",
        "Thermal Engineering – I (English)",
        "Measurements and Metrology (Tamil)",
        "Measurements and Metrology (English)",
        "Machine Drawing and CAD Practical Manual",
        "Manufacturing Technology – I Practical Manual",
        "Measurements and Metrology Practical Manual",
        "Manufacturing Technology – II (Tamil)",
        "Manufacturing Technology – II (English)",
        "Manufacturing Technology – II Practical Manual",
        "Thermal Engineering – II (Tamil)",
        "Thermal Engineering – II (English)",
        "Computer Integrated Manufacturing (Tamil)",
        "Computer Integrated Manufacturing (English)",
        "Process Automation Practical Manual",
        "Thermal Engineering Practical Manual",
        "Computer Integrated Manufacturing Practical Manual",
        "Entrepreneurship and Start-Ups Practical Manual (Tamil)",
        "Entrepreneurship and Start-Ups Practical Manual (English)",
    ]

    var db = admin.database();
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'kalpathippagam@gmail.com',
            pass: 'vdpwtvysllrzfnjh'
        }
    });


    if (req.body.function == "PLACE_ORDER") {

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

        var res = await Promise.all([
            db.ref("orders").push(req.body),

            transporter.sendMail(mailOptions),


            admin.messaging().sendToDevice(deviceToken,
                {
                    data: { order: "1" },
                    notification: {
                        title: 'New Order',
                        body: `${req.body.name} has placed an Order.`,
                        image: 'https://dl.dropbox.com/s/ykzpsfjvow8z6tl/logo%28256%29.png'
                    }
                },
            )

        ])

        if (res.every(e => e)) {
            res_body["res"] = "DONE"
        }

    }


    if (req.body.function == "SEND_MESSAGE") {



        var mailOptions = {
            from: 'kalpathippagam@gmail.com',
            to: 'agilanvlr2001@gmail.com,kalpathippagam@gmail.com',
            subject: 'MESSAGE NOTIFICATION',
            html: `${req.body.name || 'Someone'} has sent a Message.<br><br>
        Phone: ${req.body.tel}<br>
        Mail: ${req.body.mail}<br>
        Message: ${req.body.msg}`
        };

        var res = await Promise.all([
            db.ref("messages").push(req.body),

            transporter.sendMail(mailOptions),

            admin.messaging().sendToDevice(deviceToken,
                {
                    data: { order: "0" },
                    notification: {
                        title: 'New Message',
                        body: `${req.body.name || 'Someone'} has sent a message.`,
                        image: 'https://dl.dropbox.com/s/ykzpsfjvow8z6tl/logo%28256%29.png'
                    }
                },
            )

        ])

        if (res.every(e => e)) {
            
            res_body["res"] = "DONE"
        }

    }

    response.setHeader('Access-Control-Allow-Origin', '*')

    response.status("200").send(JSON.stringify(res_body));

}