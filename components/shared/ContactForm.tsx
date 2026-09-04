'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';

export function ContactForm() {
  const t = useTranslations('contact.form');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');

    const form = e.currentTarget;
    const formData = new FormData(form);
    const body = new URLSearchParams(formData as any).toString();

    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: body,
      });

      if (response.ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setStatus('error');
    }
  };

  const inputClass =
    'w-full px-4 py-3 rounded-xl border border-background-dark bg-white focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors text-brand-text';

  if (status === 'success') {
    return (
      <div className="bg-green-50 border border-green-200 rounded-2xl p-10 text-center">
        <svg className="w-12 h-12 text-green-500 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <p className="text-green-800 font-medium">{t('success')}</p>
      </div>
    );
  }

  return (
    <form
      name="contact"
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
      className="space-y-6"
    >
      {/* Netlify bot protection */}
      <input type="hidden" name="form-name" value="contact" />
      <p className="hidden">
        <label>
          Do not fill this out: <input name="bot-field" />
        </label>
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="cf-name" className="block text-sm font-medium text-brand-text mb-2">
            {t('name')} <span className="text-primary">*</span>
          </label>
          <input
            type="text"
            id="cf-name"
            name="name"
            required
            placeholder={t('namePlaceholder')}
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="cf-email" className="block text-sm font-medium text-brand-text mb-2">
            {t('email')} <span className="text-primary">*</span>
          </label>
          <input
            type="email"
            id="cf-email"
            name="email"
            required
            placeholder={t('emailPlaceholder')}
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <label htmlFor="cf-phone" className="block text-sm font-medium text-brand-text mb-2">
          {t('phone')}
        </label>
        <input
          type="tel"
          id="cf-phone"
          name="phone"
          placeholder={t('phonePlaceholder')}
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="cf-service" className="block text-sm font-medium text-brand-text mb-2">
          {t('service')}
        </label>
        <select id="cf-service" name="service" className={inputClass}>
          <option value="">{t('servicePlaceholder')}</option>
          <option value="weekly">{t('serviceOptions.weekly')}</option>
          <option value="private">{t('serviceOptions.private')}</option>
          <option value="couple">{t('serviceOptions.couple')}</option>
          <option value="wedding">{t('serviceOptions.wedding')}</option>
          <option value="other">{t('serviceOptions.other')}</option>
        </select>
      </div>

      <div>
        <label htmlFor="cf-message" className="block text-sm font-medium text-brand-text mb-2">
          {t('message')} <span className="text-primary">*</span>
        </label>
        <textarea
          id="cf-message"
          name="message"
          rows={5}
          required
          placeholder={t('messagePlaceholder')}
          className={`${inputClass} resize-none`}
        />
      </div>

      {status === 'error' && (
        <p className="text-red-600 text-sm">{t('error')}</p>
      )}

      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full py-4 px-6 bg-primary text-white font-medium rounded-full hover:bg-primary-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
      >
        {status === 'loading' ? t('sending') : t('submit')}
      </button>
    </form>
  );
}
