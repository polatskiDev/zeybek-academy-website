'use client';

import { useActionState } from 'react';
import { sendContactForm } from '@/app/actions/contact';
import { useTranslations } from 'next-intl';

export function ContactForm() {
  const t = useTranslations('contact.form');
  
  const [state, formAction, isPending] = useActionState(sendContactForm, {
    success: false,
    error: null,
  });

  if (state.success) {
    return (
      <div className="p-6 bg-primary/10 rounded-2xl text-center">
        <p className="text-primary font-medium text-lg">
          {t('success') || 'Mesajınız başarıyla gönderildi! En kısa sürede size döneceğiz.'}
        </p>
      </div>
    );
  }

  return (
    <form action={formAction} className="space-y-6">
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
            className="w-full rounded-xl border border-gray-300 p-3 text-brand-text"
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
            className="w-full rounded-xl border border-gray-300 p-3 text-brand-text"
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
          className="w-full rounded-xl border border-gray-300 p-3 text-brand-text"
        />
      </div>

      <div>
        <label htmlFor="cf-service" className="block text-sm font-medium text-brand-text mb-2">
          {t('service')}
        </label>
        <select id="cf-service" name="service" className="w-full rounded-xl border border-gray-300 p-3 text-brand-text bg-white">
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
          className="w-full rounded-xl border border-gray-300 p-3 text-brand-text resize-none"
        />
      </div>

      {state.error && (
        <p className="text-red-600 text-sm">{state.error}</p>
      )}

      <button
        type="submit"
        disabled={isPending}
        className="w-full py-4 px-6 bg-primary text-white font-medium rounded-full hover:bg-primary-dark transition-colors disabled:opacity-50"
      >
        {isPending ? t('sending') || 'Gönderiliyor...' : t('submit') || 'Gönder'}
      </button>
    </form>
  );
}