import nodemailer from "nodemailer";
import sgTransport from "nodemailer-sendgrid-transport";
import jwt from "jsonwebtoken";
import { JWT_SECRET, SENDGRID_USERNAME, SENDGRID_PASSWORD } from "./key";
const sendMail = (email) => {
  const options = {
    auth: {
      api_user: SENDGRID_USERNAME,
      api_key: SENDGRID_PASSWORD
    }
  };
  const client = nodemailer.createTransport(sgTransport(options));
  return client.sendMail(email);
};

export const sendSecretMail = (adress, secret) => {
  const email = {
    from: "jerrynim@prismagram.com",
    to: adress,
    subject: "🔒Login Secret for Prismagram🔒",
    html: `Hello! Your login secret is <strong>${secret}</strong>.<br/>Copy paste on the app/website to log in`
  };
  return sendMail(email);
};

export const generateToken = (id) => jwt.sign({ id }, JWT_SECRET!);

export const cleanNullArgs = (args: object): object => {
  const notNull = {};
  Object.keys(args).forEach((key) => {
    if (args[key] !== null) {
      notNull[key] = args[key];
    }
  });
  return notNull;
};

export default cleanNullArgs;
