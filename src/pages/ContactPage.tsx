import { useState } from 'react';
import { Mail, MessageSquare, Phone, MapPin, Send, Clock, CheckCircle } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    assignmentType: '',
    deadline: '',
    wordCount: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        subject: '',
        assignmentType: '',
        deadline: '',
        wordCount: '',
        message: ''
      });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-br from-cyan-500 via-blue-500 to-blue-600 py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Get In Touch
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Ready to ace your studies? Contact us today and let our experts help you achieve academic excellence.
          </p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {[
              {
                icon: Mail,
                title: 'Email Us',
                content: 'aceyourstudies.info@gmail.com',
                subtext: 'We reply within 24 hours',
                color: 'from-blue-500 to-cyan-600'
              },
              {
                icon: MessageSquare,
                title: 'Live Chat',
                content: 'Available 24/7',
                subtext: 'Instant responses to your queries',
                color: 'from-green-500 to-emerald-600'
              },
              {
                icon: Phone,
                title: 'WhatsApp',
                content: '+880 1998-422052',
                subtext: 'Text or call anytime',
                color: 'from-cyan-500 to-blue-600'

              }
            ].map((contact, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all group cursor-pointer"
                onClick={() => contact.title === 'WhatsApp' && window.open('https://wa.link/8fagrg', '_blank')}
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${contact.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <contact.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{contact.title}</h3>
                <p className="text-lg font-semibold text-gray-700 mb-1">{contact.content}</p>
                <p className="text-sm text-gray-500">{contact.subtext}</p>
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Send Us a Message</h2>

              {submitted ? (
                <div className="flex flex-col items-center justify-center py-12">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-4">
                    <CheckCircle className="w-12 h-12 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Message Sent!</h3>
                  <p className="text-gray-600 text-center">
                    Thank you for contacting us. We'll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-cyan-500 transition-colors"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-cyan-500 transition-colors"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-cyan-500 transition-colors"
                      placeholder="Assignment Help Request"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Assignment Type
                      </label>
                      <select
                        name="assignmentType"
                        value={formData.assignmentType}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-cyan-500 transition-colors"
                      >
                        <option value="">Select type</option>
                        <option value="essay">Essay</option>
                        <option value="report">Report</option>
                        <option value="dissertation">Dissertation</option>
                        <option value="coursework">Coursework</option>
                        <option value="presentation">Presentation</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Word Count
                      </label>
                      <input
                        type="text"
                        name="wordCount"
                        value={formData.wordCount}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-cyan-500 transition-colors"
                        placeholder="e.g., 2000"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Deadline
                    </label>
                    <input
                      type="date"
                      name="deadline"
                      value={formData.deadline}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-cyan-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-cyan-500 transition-colors resize-none"
                      placeholder="Please provide details about your assignment requirements..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-4 rounded-lg font-bold text-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300 flex items-center justify-center space-x-2"
                  >
                    <span>Send Message</span>
                    <Send className="w-5 h-5" />
                  </button>
                </form>
              )}
            </div>

            <div className="space-y-8">
              <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-8 border border-cyan-100">
                <div className="flex items-center space-x-3 mb-4">
                  <Clock className="w-8 h-8 text-cyan-600" />
                  <h3 className="text-2xl font-bold text-gray-900">Response Time</h3>
                </div>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We typically respond to all inquiries within 24 hours. For urgent requests, please use our live chat or WhatsApp for immediate assistance.
                </p>
                <div className="bg-white rounded-lg p-4 border border-cyan-200">
                  <p className="text-sm font-semibold text-gray-900 mb-2">Operating Hours:</p>
                  <p className="text-sm text-gray-600">24/7 Support Available</p>
                  <p className="text-xs text-gray-500 mt-2">We're here whenever you need us</p>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Contact Us?</h3>
                <div className="space-y-4">
                  {[
                    'Free consultation and quote',
                    'Expert advice on your assignment',
                    'Flexible deadline options',
                    'Custom pricing based on your needs',
                    'Complete confidentiality guaranteed'
                  ].map((item, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl p-8 text-white">
                <div className="flex items-center space-x-3 mb-4">
                  <MapPin className="w-8 h-8" />
                  <h3 className="text-2xl font-bold">Global Service</h3>
                </div>
                <p className="leading-relaxed">
                  Serving students from 15+ countries including UK, US, Australia, Malaysia, Singapore, Hong Kong, and more. No matter where you are, we're here to help you succeed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 text-lg">Quick answers to common questions</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {[
              {
                question: 'How quickly can you complete my assignment?',
                answer: 'We offer flexible deadlines from 24 hours to several weeks. Urgent orders are our specialty.'
              },
              {
                question: 'Is the work 100% original?',
                answer: 'Yes! We have a strict No-AI Policy. All work is human-written and comes with a plagiarism report.'
              },
              {
                question: 'What if I need revisions?',
                answer: 'We offer unlimited revisions to ensure your complete satisfaction with the final work.'
              },
              {
                question: 'How do I make payment?',
                answer: 'We accept multiple payment methods including bank transfer, PayPal, and major credit cards.'
              }
            ].map((faq, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl p-6 border border-cyan-100"
              >
                <h4 className="font-bold text-gray-900 mb-2">{faq.question}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
