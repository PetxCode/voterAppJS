const { google } = require("googleapis");
const nodemailer = require("nodemailer");
const ejs = require("ejs");
const path = require("path");

const GOOGLE_SECRET = "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";
const GOOGLE_ID =
  "1001238833498-cqm9f9c1mh3m1khppm3392npjalj8b4s.apps.googleusercontent.com";
const GOOGLE_REFRESHTOKEN =
  "1//04h7d93kXEa_mCgYIARAAGAQSNwF-L9IrRBMf9gTPHHPp4rsWwU2m6arOFmIUgpZPaL-Cov37TXIF6SM2XIoFhScTFOD1ZDaezBY";
const GOOGLE_REDIRECT = "https://developers.google.com/oauthplayground";

const oAuth = new google.auth.OAuth2(GOOGLE_ID, GOOGLE_SECRET, GOOGLE_REDIRECT);

oAuth.setCredentials({ refresh_token: GOOGLE_REFRESHTOKEN });

const url = "https://nycn-vote.web.app";
const urlLocal = "localhost:2245";

const verifiedUser3 = async (getUser) => {
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

    const buildFile = path.join(__dirname, "../views/AccountCreated.ejs");

    const data = await ejs.renderFile(buildFile, {
      name: getUser.fullName,
      id: getUser?._id,
      realToken,
      organisation: getUser?.orgName,
    });

    const mailOptions = {
      from: "AJ Vote ❤❤❤ <newstudentsportal2@gmail.com>",
      to: email,
      subject: "Account Verification",
      html: data,
    };

    transporter.sendMail(mailOptions, () => {
      console.log("sent successfully");
    });
  } catch (error) {
    return error;
  }
};

const verifiedUser = async (email, user, value, token) => {
  try {
    const accessToken = await oAuth.getAccessToken();
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        type: "OAuth2",
        user: "skuulkude@gmail.com",
        refreshToken: accessToken.token,
        clientId: GOOGLE_ID,
        clientSecret: GOOGLE_SECRET,
        accessToken: GOOGLE_REFRESHTOKEN,
      },
    });

    const buildFile = path.join(__dirname, "../views/AccountCreated.ejs");

    const data = await ejs.renderFile(buildFile, {
      name: getUser.fullName,
      id: getUser?._id,
      realToken,
      organisation: getUser?.orgName,
    });

    const mailOptions = {
      from: "no-reply✉️  <newstudentsportal2@gmail.com>",
      to: email,
      subject: "Account Verification",
      html: data,
    };

    const result = transporter.sendMail(mailOptions);
    return result;
  } catch (error) {
    return error;
  }
};

const verifiedByAdmin = async (generateToken) => {
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

    // console.log("userData: ", generateToken);

    const buildFile = path.join(__dirname, "../views/viewByAdmin.ejs");

    const data = await ejs.renderFile(buildFile, {
      name: generateToken?.fullName,
      organisation: generateToken?.orgName,
      id: generateToken?._id,
      code: generateToken.voteCode,
    });

    const mailOptions = {
      from: "AJ Vote ❤❤❤ <newstudentsportal2@gmail.com>",
      to: generateToken?.orgEmail,
      subject: "Please Verify this Account",
      html: data,
    };

    transporter.sendMail(mailOptions, () => {
      console.log("sent successfully");
    });
  } catch (error) {
    return error;
  }
};

const verifiedByAdminFinally = async (generateToken) => {
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

    console.log("userData: ", generateToken);

    const buildFile = path.join(__dirname, "../views/voterCode.ejs");

    const data = await ejs.renderFile(buildFile, {
      name: generateToken?.fullName,
      organisation: generateToken?.orgName,
      id: generateToken?._id,
      code: generateToken.voteCode,
    });

    const mailOptions = {
      from: "AJ Vote ❤❤❤ <newstudentsportal2@gmail.com>",
      to: generateToken?.orgEmail,
      subject: `${generateToken?.fullName}'s Account has been Verify`,
      html: data,
    };

    transporter.sendMail(mailOptions, () => {
      console.log("sent successfully");
    });
  } catch (error) {
    return error;
  }
};

const verifiedSignUser = async (findUser) => {
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

    const buildFile = path.join(__dirname, "../views/signinAccount.ejs");

    const data = await ejs.renderFile(buildFile, {
      name: findUser?.fullName,
      id: findUser?._id,
      myToken: findUser?.token,
    });

    const mailOptions = {
      from: "AJ Vote ❤❤❤  <newstudentsportal2@gmail.com>",
      to: findUser?.email,
      subject: "Account re-Verification",
      html: data,
    };

    transporter.sendMail(mailOptions, () => {
      console.log("sent successfully");
    });
  } catch (error) {
    return error;
  }
};

const resetMyPassword = async (name, user, myToken) => {
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

    const buildFile = path.join(__dirname, "../views/resetPassword.ejs");

    const data = await ejs.renderFile(buildFile, {
      name,
      id: user?._id,
      myToken,
    });

    const mailOptions = {
      from: "AJ Vote ❤❤❤  <newstudentsportal2@gmail.com>",
      to: user?.email,
      subject: "Requesting for Password Reset",
      html: data,
    };

    transporter.sendMail(mailOptions, () => {
      console.log("sent successfully");
    });
  } catch (error) {
    return error;
  }
};

const acceptance = async (email, positioned, fullName) => {
  try {
    console.log("position from email: ", positioned?.position);

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

    const buildFile = path.join(__dirname, "../views/Acceptance.ejs");

    const data = await ejs.renderFile(buildFile, {
      name: positioned?.fullName,
      position: positioned?.position,
      email: email,
    });

    const mailOptions = {
      from: "AJ Vote ❤❤❤  <newstudentsportal2@gmail.com>",
      to: email,
      subject: `Acceptance for the Position of ${positioned?.position}`,
      html: data,
    };

    transporter.sendMail(mailOptions, () => {
      console.log("sent successfully");
    });
  } catch (error) {
    return error;
  }
};

module.exports = {
  verifiedUser,
  verifiedByAdmin,
  verifiedByAdminFinally,
  verifiedSignUser,
  resetMyPassword,
  acceptance,
};
