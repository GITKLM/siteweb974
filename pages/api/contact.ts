import FormData from 'form-data'
import Mailgun from 'mailgun.js'
import type { NextApiRequest, NextApiResponse } from 'next'

const API_KEY = process.env.MAILGUN_API_KEY || '32a0fef1-f3bb3ff3'
const DOMAIN = process.env.MAILGUN_DOMAIN || ''

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log('Data', req.body)

  const mailgun = new Mailgun(FormData)
  const client = mailgun.client({ username: 'api', key: API_KEY })

  const { name, email, message } = req.body

  const messageData = {
    from: 'Contact Form <cprioton@gmail.com>',
    to: 'cprioton@gmail.com',
    subject: 'New Contact Form!',
    text: `Hello,

    You have a new form entry from: ${name} ${email}.

    ${message}
    `,
  }

  try {
    const emailRes = await client.messages.create(DOMAIN, messageData)
    console.log(emailRes)
  } catch (err: any) {
    console.error('Error sending email', err)
  }

  res.status(200).json({ submitted: true })
}