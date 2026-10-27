import { useState, useEffect } from 'react';
import { HeroBanner } from '../components/HeroBanner';
import { ARTIST_DATA } from '../data/artist';
import { Mail, Phone, MapPin, ExternalLink, Send, CheckCircle2, AlertCircle } from 'lucide-react';

interface FormState {
  fullName: string;
  email: string;
  phone: string;
  enquiryType: 'Music' | 'Events' | 'Mentalism' | 'Collaboration' | 'Other';
  message: string;
}

export const Contact: React.FC = () => {
  useEffect(() => {
    document.title = 'Contact & Bookings — Sumesh Koottickal';
  }, []);

  const [formData, setFormData] = useState<FormState>({
    fullName: '',
    email: '',
    phone: '',
    enquiryType: 'Music',
    message: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors: Partial<Record<keyof FormState, string>> = {};
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Please enter your full name.';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Please provide a valid email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email format.';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Please provide details about your enquiry.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    // Direct mailto fallback as requested to ensure zero fake promises
    const subject = encodeURIComponent(`[Enquiry: ${formData.enquiryType}] from ${formData.fullName}`);
    const body = encodeURIComponent(
      `Name: ${formData.fullName}\nEmail: ${formData.email}\nPhone: ${formData.phone || 'N/A'}\nEnquiry Type: ${formData.enquiryType}\n\nMessage:\n${formData.message}`
    );
    const mailtoUrl = `mailto:${ARTIST_DATA.contact.email}?subject=${subject}&body=${body}`;

    window.location.href = mailtoUrl;
    setSubmitted(true);
  };

  return (
    <div className="w-full bg-black text-white">
      {/* Standard Reusable Hero Banner */}
      <HeroBanner title="CONTACT" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* ========================================================= */}
          {/* LEFT: DIRECT CONTACT DETAILS                              */}
          {/* ========================================================= */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <span className="text-xs font-sans tracking-widest text-neutral-400 uppercase block mb-3">
                DIRECT DETAILS
              </span>
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold tracking-wider text-white uppercase mb-6">
                MANAGEMENT & BOOKING DESK
              </h2>
              <p className="text-sm text-neutral-300 font-sans leading-relaxed mb-10">
                Whether you are organizing a national festival, seeking an original feature film soundtrack, or booking a private mentalism illusion showcase, contact Sumesh Koottickal directly.
              </p>

              {/* Direct Info List */}
              <div className="space-y-6">
                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-surface-card border border-white/10 flex items-center justify-center text-white shrink-0 mt-0.5">
                    <Mail className="w-4 h-4 text-neutral-300" />
                  </div>
                  <div>
                    <span className="text-xs font-sans tracking-widest text-neutral-400 uppercase block mb-0.5">
                      Email
                    </span>
                    <a
                      href={`mailto:${ARTIST_DATA.contact.email}`}
                      className="text-base text-white hover:underline font-mono break-all"
                    >
                      {ARTIST_DATA.contact.email}
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-surface-card border border-white/10 flex items-center justify-center text-white shrink-0 mt-0.5">
                    <Phone className="w-4 h-4 text-neutral-300" />
                  </div>
                  <div>
                    <span className="text-xs font-sans tracking-widest text-neutral-400 uppercase block mb-0.5">
                      Phone / WhatsApp
                    </span>
                    <a
                      href={`tel:${ARTIST_DATA.contact.phone}`}
                      className="text-base text-white hover:underline font-mono"
                    >
                      {ARTIST_DATA.contact.displayPhone}
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-surface-card border border-white/10 flex items-center justify-center text-white shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4 text-neutral-300" />
                  </div>
                  <div>
                    <span className="text-xs font-sans tracking-widest text-neutral-400 uppercase block mb-0.5">
                      Location / Studio
                    </span>
                    <p className="text-sm text-neutral-300 font-sans leading-relaxed">
                      {ARTIST_DATA.location.fullFormatted}
                    </p>
                    <a
                      href={ARTIST_DATA.location.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs text-neutral-400 hover:text-white mt-2 underline"
                    >
                      <span>Open on Google Maps</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Prominent Digital Visiting Card Link */}
              <div className="mt-8">
                <a
                  href="https://www.vkard.pro/sumesh-koottickal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-lg bg-white text-black hover:bg-neutral-200 font-display tracking-widest text-xs font-bold uppercase transition-all shadow-md group w-full sm:w-auto"
                >
                  <span>DIGITAL VISITING CARD</span>
                  <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </a>
              </div>
            </div>

            {/* Social & vCard shortcuts */}
            <div className="mt-12 pt-8 border-t border-white/10">
              <span className="text-xs font-sans tracking-widest text-neutral-400 uppercase block mb-3">
                OFFICIAL LINKS
              </span>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://www.vkard.pro/sumesh-koottickal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded border border-white/20 bg-surface-card hover:bg-white text-white hover:text-black text-xs font-display tracking-widest transition-all inline-flex items-center gap-1.5"
                >
                  <span>DIGITAL VISITING CARD</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
                <a
                  href={ARTIST_DATA.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded border border-white/20 bg-surface-card hover:bg-white text-white hover:text-black text-xs font-display tracking-widest transition-all inline-flex items-center gap-1.5"
                >
                  <span>INSTAGRAM</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
                <a
                  href={ARTIST_DATA.socials.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded border border-white/20 bg-surface-card hover:bg-white text-white hover:text-black text-xs font-display tracking-widest transition-all inline-flex items-center gap-1.5"
                >
                  <span>YOUTUBE</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
                <a
                  href={ARTIST_DATA.socials.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded border border-white/20 bg-surface-card hover:bg-white text-white hover:text-black text-xs font-display tracking-widest transition-all inline-flex items-center gap-1.5"
                >
                  <span>FACEBOOK</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>

          {/* ========================================================= */}
          {/* RIGHT: ENQUIRY FORM                                       */}
          {/* ========================================================= */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-2xl bg-surface-card border border-white/10 shadow-2xl">
              <span className="text-xs font-sans tracking-widest text-neutral-400 uppercase block mb-2">
                REACH OUT
              </span>
              <h3 className="font-display text-2xl sm:text-3xl font-bold tracking-wider text-white uppercase mb-6">
                SEND AN ENQUIRY
              </h3>

              {submitted && (
                <div
                  className="p-4 mb-6 rounded-lg bg-emerald-950/60 border border-emerald-500/30 flex items-start gap-3"
                  role="status"
                >
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div className="text-xs sm:text-sm text-neutral-200 font-sans">
                    <p className="font-semibold text-emerald-400 mb-1">
                      Email Client Triggered
                    </p>
                    <p>
                      Your enquiry has been prepared in your default email client for direct dispatch to <strong>{ARTIST_DATA.contact.email}</strong>. If your email client did not open automatically, please send your email manually to the address above.
                    </p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} noValidate className="space-y-6">
                {/* Name */}
                <div>
                  <label
                    htmlFor="fullName"
                    className="block text-xs font-sans tracking-widest text-neutral-400 uppercase mb-2"
                  >
                    FULL NAME <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="Enter your name"
                    className={`w-full px-4 py-3 rounded-lg bg-neutral-900 border text-white text-sm font-sans focus:outline-none focus:ring-1 ${
                      errors.fullName
                        ? 'border-red-500 focus:ring-red-500'
                        : 'border-white/15 focus:border-white focus:ring-white/40'
                    }`}
                  />
                  {errors.fullName && (
                    <p className="mt-1 text-xs text-red-400 font-sans flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.fullName}</span>
                    </p>
                  )}
                </div>

                {/* Email and Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs font-sans tracking-widest text-neutral-400 uppercase mb-2"
                    >
                      EMAIL ADDRESS <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="your@email.com"
                      className={`w-full px-4 py-3 rounded-lg bg-neutral-900 border text-white text-sm font-sans focus:outline-none focus:ring-1 ${
                        errors.email
                          ? 'border-red-500 focus:ring-red-500'
                          : 'border-white/15 focus:border-white focus:ring-white/40'
                      }`}
                    />
                    {errors.email && (
                      <p className="mt-1 text-xs text-red-400 font-sans flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.email}</span>
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-xs font-sans tracking-widest text-neutral-400 uppercase mb-2"
                    >
                      PHONE NUMBER (OPTIONAL)
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 XXXXX XXXXX"
                      className="w-full px-4 py-3 rounded-lg bg-neutral-900 border border-white/15 focus:border-white focus:ring-1 focus:ring-white/40 text-white text-sm font-sans focus:outline-none"
                    />
                  </div>
                </div>

                {/* Enquiry Type */}
                <div>
                  <label
                    htmlFor="enquiryType"
                    className="block text-xs font-sans tracking-widest text-neutral-400 uppercase mb-2"
                  >
                    ENQUIRY TYPE
                  </label>
                  <select
                    id="enquiryType"
                    name="enquiryType"
                    value={formData.enquiryType}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        enquiryType: e.target.value as FormState['enquiryType'],
                      })
                    }
                    className="w-full px-4 py-3 rounded-lg bg-neutral-900 border border-white/15 focus:border-white focus:ring-1 focus:ring-white/40 text-white text-sm font-sans focus:outline-none"
                  >
                    <option value="Music">Film Music / Score Direction</option>
                    <option value="Events">Live Concert / Festival Booking</option>
                    <option value="Mentalism">Mentalism / Illusion Performance</option>
                    <option value="Collaboration">Musical Collaboration / Studio Session</option>
                    <option value="Other">Other Enquiry</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-sans tracking-widest text-neutral-400 uppercase mb-2"
                  >
                    MESSAGE <span className="text-red-400">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Provide details about dates, venue, scope, or musical requirements..."
                    className={`w-full px-4 py-3 rounded-lg bg-neutral-900 border text-white text-sm font-sans focus:outline-none focus:ring-1 ${
                      errors.message
                        ? 'border-red-500 focus:ring-red-500'
                        : 'border-white/15 focus:border-white focus:ring-white/40'
                    }`}
                  />
                  {errors.message && (
                    <p className="mt-1 text-xs text-red-400 font-sans flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.message}</span>
                    </p>
                  )}
                </div>

                {/* Submission note as required by instructions */}
                <p className="text-[11px] text-neutral-400 font-sans leading-normal">
                  Note: Clicking submit prepares a pre-formatted message in your default email application. To connect an automated backend service (such as Formspree, Resend, or EmailJS), see the instructions in <code>README.md</code>.
                </p>

                {/* Submit button */}
                <button
                  type="submit"
                  className="w-full py-4 rounded bg-white hover:bg-neutral-200 text-black font-display tracking-widest text-sm font-bold uppercase transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg hover:shadow-white/10"
                >
                  <span>SUBMIT ENQUIRY</span>
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
