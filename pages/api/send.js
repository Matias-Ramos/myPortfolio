import EmailTemplate from '../../components/EmailTemplate';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async (req, res) => {

  const { data, error } = await resend.emails.send({
    from: 'Matias Ramos <info@matiasramos.dev>',
    to: ['matiasr.computacion@gmail.com'],
    subject: 'Portfolio inquiry',
    react: EmailTemplate({ req })
  });

  if (error) {
    return res.status(400).json(error)
  }

  return(
    res.status(200).json(data)
  )

};
