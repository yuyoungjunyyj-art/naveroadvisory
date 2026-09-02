import React, { useState } from 'react';
import {
  Send,
  Building,
  Mail,
  Lock,
  Clock,
  CheckCircle2,
  PhoneCall,
  Sparkles,
  ArrowRight,
  Copy,
  Check,
  ExternalLink,
  AlertCircle,
} from 'lucide-react';
import { Theme, Language } from '../types';
import { translations } from '../data/translations';

interface ContactSectionProps {
  theme: Theme;
  lang: Language;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ theme, lang }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    sector: '',
    timeline: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [activationNotice, setActivationNotice] = useState(false);
  const t = translations[lang];

  const recipientEmail = 'global@naveroadvisory.com';

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const getMailtoUrl = () => {
    const subject = encodeURIComponent(
      `[NAVERO Advisory Inquiry] ${formData.name || 'Client'} - ${formData.company || 'Direct Consultation'}`
    );
    const body = encodeURIComponent(
      `Name / 성함: ${formData.name}\n` +
      `Email / 이메일: ${formData.email}\n` +
      `Company / 기업명: ${formData.company || 'N/A'}\n` +
      `Industry Sector / 산업 분야: ${formData.sector || 'N/A'}\n` +
      `Target Timeline / 진출 시기: ${formData.timeline || 'N/A'}\n\n` +
      `Project Scope & Message / 문의 내용:\n${formData.message}\n`
    );
    return `mailto:${recipientEmail}?subject=${subject}&body=${body}`;
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(recipientEmail);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(null);
    setActivationNotice(false);

    try {
      const payload = {
        name: formData.name,
        email: formData.email,
        company: formData.company || 'N/A',
        sector: formData.sector || 'General / Unspecified',
        timeline: formData.timeline || 'Not specified',
        message: formData.message,
        _subject: `[NAVERO Strategic Advisory] New Inquiry from ${formData.name} (${formData.company || 'Direct'})`,
        _replyto: formData.email,
        _template: 'table',
        _captcha: 'false',
      };

      const response = await fetch(`https://formsubmit.co/ajax/${recipientEmail}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json().catch(() => ({}));

      if (
        response.ok ||
        data.success === 'true' ||
        data.success === true ||
        (typeof data.message === 'string' && data.message.includes('Activation'))
      ) {
        if (typeof data.message === 'string' && data.message.includes('Activation')) {
          setActivationNotice(true);
        }
        setIsSubmitted(true);
      } else {
        throw new Error(data.message || 'Submission request could not be processed');
      }
    } catch (err: any) {
      console.warn('FormSubmit endpoint status:', err);
      // Even if network blocks cross-origin or third-party, show fallback options gracefully
      setErrorMessage(
        lang === 'ko'
          ? '네트워크 응답 지연이 발생했습니다. 아래 버튼을 클릭하여 메일 앱(Gmail/Outlook)으로 즉시 전송하시거나 다시 시도해 주세요.'
          : 'Network response delay detected. You can dispatch directly via your default email client or try again.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      company: '',
      sector: '',
      timeline: '',
      message: '',
    });
    setIsSubmitted(false);
    setErrorMessage(null);
    setActivationNotice(false);
  };

  return (
    <section
      id="contact"
      className={`py-24 transition-colors duration-500 relative overflow-hidden ${
        theme === 'dark'
          ? 'bg-gradient-to-b from-[#060e1b] via-[#081225] to-[#050b14] text-white'
          : 'bg-gradient-to-b from-[#f4f7fc] via-[#edf2f9] to-[#e4ebf5] text-[#0c1c4f]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border text-xs font-semibold uppercase tracking-widest">
            <Mail className="w-3.5 h-3.5 text-sky-400" />
            <span className={theme === 'dark' ? 'text-sky-400' : 'text-[#0c1c4f]'}>
              {t.contact.eyebrow}
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight font-serif">
            {t.contact.title}
          </h2>
          <p
            className={`text-base sm:text-lg leading-relaxed ${
              theme === 'dark' ? 'text-slate-300' : 'text-slate-600'
            }`}
          >
            {t.contact.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Office Contact & Confidentiality */}
          <div className="lg:col-span-5 space-y-6">
            <div
              className={`rounded-3xl p-8 border shadow-xl ${
                theme === 'dark'
                  ? 'bg-[#081225]/80 border-white/10'
                  : 'bg-white/90 border-slate-200 shadow-slate-900/5'
              }`}
            >
              <h3 className="text-xl font-bold mb-6 font-serif">
                {t.contact.directInfo.officeTitle}
              </h3>

              <div className="space-y-6 text-sm">
                <div className="flex items-start gap-4">
                  <div
                    className={`p-2.5 rounded-xl ${
                      theme === 'dark' ? 'bg-sky-500/15 text-sky-400' : 'bg-slate-100 text-[#0c1c4f]'
                    }`}
                  >
                    <Building className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-0.5">
                      {lang === 'en' ? 'Headquarters' : '본사 주소'}
                    </span>
                    <p className="font-medium leading-relaxed">{t.contact.directInfo.address}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div
                    className={`p-2.5 rounded-xl ${
                      theme === 'dark' ? 'bg-sky-500/15 text-sky-400' : 'bg-slate-100 text-[#0c1c4f]'
                    }`}
                  >
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-0.5">
                      {lang === 'en' ? 'Direct Strategic Inquiries' : '대표 문의 이메일'}
                    </span>
                    <div className="flex flex-wrap items-center gap-2 mt-1">
                      <a
                        href={`mailto:${recipientEmail}`}
                        className="font-semibold text-sky-400 hover:underline break-all text-sm sm:text-base"
                      >
                        {recipientEmail}
                      </a>
                      <button
                        type="button"
                        onClick={handleCopyEmail}
                        title="Copy email to clipboard"
                        className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-medium border transition-all ${
                          copiedEmail
                            ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40'
                            : theme === 'dark'
                            ? 'bg-white/5 hover:bg-white/10 text-slate-300 border-white/10'
                            : 'bg-slate-100 hover:bg-slate-200 text-slate-700 border-slate-200'
                        }`}
                      >
                        {copiedEmail ? (
                          <>
                            <Check className="w-3 h-3 text-emerald-400" />
                            <span>{lang === 'ko' ? '복사됨' : 'Copied'}</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3 h-3" />
                            <span>{lang === 'ko' ? '복사' : 'Copy'}</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div
                    className={`p-2.5 rounded-xl ${
                      theme === 'dark' ? 'bg-sky-500/15 text-sky-400' : 'bg-slate-100 text-[#0c1c4f]'
                    }`}
                  >
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-0.5">
                      {lang === 'en' ? 'Advisory Operating Hours' : '자문 운영 시간'}
                    </span>
                    <p className="font-medium">{t.contact.directInfo.hours}</p>
                  </div>
                </div>
              </div>

              {/* Direct Mail Client Quick Action */}
              <div className="mt-6 pt-6 border-t border-slate-200 dark:border-white/10">
                <a
                  href={`mailto:${recipientEmail}?subject=${encodeURIComponent(
                    '[NAVERO Advisory] Strategic Consultation Request'
                  )}`}
                  className={`w-full py-2.5 px-4 rounded-xl text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 border transition-all ${
                    theme === 'dark'
                      ? 'border-sky-500/30 text-sky-300 hover:bg-sky-500/10'
                      : 'border-slate-300 text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>{lang === 'ko' ? '이메일 앱에서 직접 작성하기' : 'Open in Default Email Client'}</span>
                </a>
              </div>

              {/* Confidentiality Seal */}
              <div className="mt-4 flex items-start gap-3 p-4 rounded-2xl bg-sky-500/10 border border-sky-500/20">
                <Lock className="w-4 h-4 text-sky-400 mt-0.5 flex-shrink-0" />
                <p className="text-xs text-sky-300 dark:text-sky-300 font-medium leading-relaxed">
                  {t.contact.directInfo.confidentiality}
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Confidential Inquiry Form */}
          <div className="lg:col-span-7">
            <div
              className={`rounded-3xl p-8 sm:p-10 border shadow-2xl transition-all ${
                theme === 'dark'
                  ? 'bg-[#081225] border-white/10'
                  : 'bg-white border-slate-200 shadow-slate-900/5'
              }`}
            >
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {errorMessage && (
                    <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-300 space-y-2 text-xs">
                      <div className="flex items-center gap-2 font-bold">
                        <AlertCircle className="w-4 h-4 text-amber-400 flex-shrink-0" />
                        <span>{lang === 'ko' ? '전송 알림' : 'Transmission Notice'}</span>
                      </div>
                      <p className="leading-relaxed">{errorMessage}</p>
                      <a
                        href={getMailtoUrl()}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-500/20 hover:bg-amber-500/30 text-amber-200 font-semibold transition-all"
                      >
                        <Mail className="w-3.5 h-3.5" />
                        <span>{lang === 'ko' ? '이메일 프로그램으로 즉시 전송' : 'Send via Mail Client'}</span>
                      </a>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Name */}
                    <div>
                      <label
                        htmlFor="contact_name"
                        className="block text-xs font-bold uppercase tracking-wider mb-2"
                      >
                        {t.contact.form.name} *
                      </label>
                      <input
                        type="text"
                        id="contact_name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder={t.contact.form.namePlaceholder}
                        className={`w-full px-4 py-3.5 rounded-2xl border text-sm transition-all focus:outline-none focus:ring-2 focus:ring-sky-400 ${
                          theme === 'dark'
                            ? 'bg-[#050b14] border-white/10 text-white placeholder-slate-500'
                            : 'bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400'
                        }`}
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label
                        htmlFor="contact_email"
                        className="block text-xs font-bold uppercase tracking-wider mb-2"
                      >
                        {t.contact.form.email} *
                      </label>
                      <input
                        type="email"
                        id="contact_email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder={t.contact.form.emailPlaceholder}
                        className={`w-full px-4 py-3.5 rounded-2xl border text-sm transition-all focus:outline-none focus:ring-2 focus:ring-sky-400 ${
                          theme === 'dark'
                            ? 'bg-[#050b14] border-white/10 text-white placeholder-slate-500'
                            : 'bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400'
                        }`}
                      />
                    </div>
                  </div>

                  {/* Company */}
                  <div>
                    <label
                      htmlFor="contact_company"
                      className="block text-xs font-bold uppercase tracking-wider mb-2"
                    >
                      {t.contact.form.company}
                    </label>
                    <input
                      type="text"
                      id="contact_company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder={t.contact.form.companyPlaceholder}
                      className={`w-full px-4 py-3.5 rounded-2xl border text-sm transition-all focus:outline-none focus:ring-2 focus:ring-sky-400 ${
                        theme === 'dark'
                          ? 'bg-[#050b14] border-white/10 text-white placeholder-slate-500'
                          : 'bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400'
                      }`}
                    />
                  </div>

                  {/* Sector & Timeline dropdowns */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="contact_sector"
                        className="block text-xs font-bold uppercase tracking-wider mb-2"
                      >
                        {t.contact.form.sector}
                      </label>
                      <select
                        id="contact_sector"
                        name="sector"
                        value={formData.sector}
                        onChange={handleChange}
                        className={`w-full px-4 py-3.5 rounded-2xl border text-sm transition-all focus:outline-none focus:ring-2 focus:ring-sky-400 ${
                          theme === 'dark'
                            ? 'bg-[#050b14] border-white/10 text-white'
                            : 'bg-slate-50 border-slate-200 text-slate-900'
                        }`}
                      >
                        <option value="">{t.contact.form.sectorPlaceholder}</option>
                        {t.contact.form.sectorOptions.map((sec, idx) => (
                          <option key={idx} value={sec}>
                            {sec}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="contact_timeline"
                        className="block text-xs font-bold uppercase tracking-wider mb-2"
                      >
                        {t.contact.form.timeline}
                      </label>
                      <select
                        id="contact_timeline"
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleChange}
                        className={`w-full px-4 py-3.5 rounded-2xl border text-sm transition-all focus:outline-none focus:ring-2 focus:ring-sky-400 ${
                          theme === 'dark'
                            ? 'bg-[#050b14] border-white/10 text-white'
                            : 'bg-slate-50 border-slate-200 text-slate-900'
                        }`}
                      >
                        <option value="">{t.contact.form.timelinePlaceholder}</option>
                        {t.contact.form.timelineOptions.map((time, idx) => (
                          <option key={idx} value={time}>
                            {time}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Message textarea */}
                  <div>
                    <label
                      htmlFor="contact_message"
                      className="block text-xs font-bold uppercase tracking-wider mb-2"
                    >
                      {t.contact.form.message} *
                    </label>
                    <textarea
                      id="contact_message"
                      name="message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder={t.contact.form.messagePlaceholder}
                      className={`w-full px-4 py-3.5 rounded-2xl border text-sm transition-all focus:outline-none focus:ring-2 focus:ring-sky-400 ${
                        theme === 'dark'
                          ? 'bg-[#050b14] border-white/10 text-white placeholder-slate-500'
                          : 'bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400'
                      }`}
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    id="contact_submit"
                    disabled={isSubmitting}
                    className={`w-full py-4 rounded-2xl font-bold text-sm tracking-wide uppercase transition-all duration-300 flex items-center justify-center gap-2 transform hover:-translate-y-0.5 ${
                      theme === 'dark'
                        ? 'bg-sky-400 text-slate-950 hover:bg-sky-300 shadow-xl shadow-sky-500/25'
                        : 'bg-[#0c1c4f] text-white hover:bg-slate-900 shadow-xl shadow-slate-900/15'
                    }`}
                  >
                    {isSubmitting ? (
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                        <span>{t.contact.form.submitting}</span>
                      </div>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>{t.contact.form.submit}</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  <p className="text-center text-xs text-slate-400">
                    {lang === 'ko'
                      ? `모든 상담 요청서는 담당 파트너(${recipientEmail})에게 안전하게 전달됩니다.`
                      : `All inquiry submissions are securely routed to the senior partner (${recipientEmail}).`}
                  </p>
                </form>
              ) : (
                /* Submission Confirmation Box */
                <div className="text-center py-10 space-y-6 animate-fadeIn">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <div className="space-y-3">
                    <h4 className="text-2xl font-bold font-serif">{t.contact.form.successTitle}</h4>
                    <p
                      className={`text-sm max-w-md mx-auto leading-relaxed ${
                        theme === 'dark' ? 'text-slate-300' : 'text-slate-600'
                      }`}
                    >
                      {t.contact.form.successMsg}
                    </p>
                    <div className="inline-block px-4 py-2 rounded-xl bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-semibold">
                      {lang === 'ko'
                        ? `수신 확인 대상: ${recipientEmail}`
                        : `Routed to Advisory Partner: ${recipientEmail}`}
                    </div>
                  </div>

                  {activationNotice && (
                    <div className="p-4 rounded-2xl bg-sky-500/10 border border-sky-500/30 text-sky-200 text-xs text-left max-w-md mx-auto space-y-1">
                      <p className="font-bold flex items-center gap-1.5 text-sky-300">
                        <Sparkles className="w-4 h-4" />
                        <span>{lang === 'ko' ? '최초 1회 이메일 활성화 안내' : 'Initial Activation Notice'}</span>
                      </p>
                      <p className="text-slate-300 leading-relaxed">
                        {lang === 'ko'
                          ? `FormSubmit 연동 확인을 위해 ${recipientEmail} 수신함으로 'Activate Form' 인증 메일이 발송되었습니다. 해당 메일의 활성화 버튼을 1회 클릭하시면 이후 모든 폼 접수가 즉시 메일함으로 자동 포워딩됩니다.`
                          : `An activation link has been delivered to ${recipientEmail}. Click 'Activate Form' once to start receiving all instant forwarding.`}
                      </p>
                    </div>
                  )}

                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                    <a
                      href={getMailtoUrl()}
                      className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-2 border transition-all ${
                        theme === 'dark'
                          ? 'border-sky-500/30 text-sky-300 hover:bg-sky-500/10'
                          : 'border-slate-300 text-slate-700 hover:bg-slate-100'
                      }`}
                    >
                      <Mail className="w-3.5 h-3.5" />
                      <span>{lang === 'ko' ? '메일 앱으로 사본 발송' : 'Send Copy via Mail App'}</span>
                    </a>
                    <button
                      type="button"
                      onClick={handleReset}
                      className={`px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider border transition-all ${
                        theme === 'dark'
                          ? 'border-white/20 text-white hover:bg-white/10'
                          : 'border-slate-300 text-slate-700 hover:bg-slate-100'
                      }`}
                    >
                      {t.contact.form.sendAnother}
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

