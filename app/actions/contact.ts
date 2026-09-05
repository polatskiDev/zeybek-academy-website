'use server';

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendContactForm(prevState: any, formData: FormData) {
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const phone = formData.get('phone') as string;
  const service = formData.get('service') as string;
  const message = formData.get('message') as string;

  // Basic server-side validation
  if (!name || !email || !message) {
    return { success: false, error: 'Lütfen zorunlu alanları doldurun.' };
  }

  try {
    await resend.emails.send({
      from: 'Zeybek Academy <info@zeybekacademy.nl>', // Note: Use onboarding@resend.dev initially, or your own verified domain later
      to: ['info@zeybekacademy.nl'], // The email address where you want to receive notifications
      subject: `Yeni İletişim Formu: ${name} (${service || 'Genel'})`,
      text: `
Ad Soyad: ${name}
E-posta: ${email}
Telefon: ${phone || 'Belirtilmedi'}
Hizmet: ${service || 'Belirtilmedi'}

Mesaj:
${message}
      `,
    });

    return { success: true, error: null };
  } catch (error) {
    console.error('Resend error:', error);
    return { success: false, error: 'Mesaj gönderilirken bir hata oluştu. Lütfen tekrar deneyin.' };
  }
}