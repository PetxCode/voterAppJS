const { google } = require("googleapis");
const nodemailer = require("nodemailer");
const ejs = require("ejs");
const path = require("path");

const GOOGLE_SECRET = "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";
const GOOGLE_ID =
  "1001238833498-cqm9f9c1mh3m1khppm3392npjalj8b4s.apps.googleusercontent.com";
const GOOGLE_REFRESHTOKEN =
  "1//04h7d93kXEa_mCgYIARAAGAQSNwF-L9IrRBMf9gTPHHPp4rsWwU2m6arOFmIUgpZPaL-Cov37TXIF6SM2XIoFhScTFOD1ZDaezBY";

// Constant
const GOOGLE_REDIRECT = "https://developers.google.com/oauthplayground";

const oAuth = new google.auth.OAuth2(GOOGLE_ID, GOOGLE_SECRET, GOOGLE_REDIRECT);

oAuth.setCredentials({ refresh_token: GOOGLE_REFRESHTOKEN });

const verifiedByAdmin = async (getUser) => {
  try {
    const accessToken = await oAuth.getAccessToken();
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        type: "OAuth2",
        user: "ajwalletcoins@gmail.com",
        refreshToken: accessToken.token,
        clientId: GOOGLE_ID,
        clientSecret: GOOGLE_SECRET,
        accessToken: GOOGLE_REFRESHTOKEN,
      },
    });

    const myTransporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "Gideonekeke64@gmail.com",
        pass: "sgczftichnkcqksx",
      },
    });

    const buildFile = path.join(__dirname, "../views/viewByAdmin.ejs");

    const data = await ejs.renderFile(buildFile, {
      name: getUser?.fullName,
      organisation: getUser?.orgName,
      id: getUser?._id,
      code: getUser.voteCode,
    });

    console.log(getUser?.orgEmail);

    const mailOptions = {
      from: "AJ Vote ❤❤❤ <newstudentsportal2@gmail.com>",
      // to: getUser?.orgEmail,
      to: getUser?.orgEmail,
      subject: "Please Verify this Account",
      html: data,
    };

    myTransporter.sendMail(mailOptions, () => {
      console.log("sent successfully to Admin");
    });
  } catch (error) {
    return error;
  }
};

module.exports = {
  verifiedByAdmin,
};
