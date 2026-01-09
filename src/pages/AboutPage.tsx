import { Award, Shield, Target, Users, Globe2, TrendingUp, CheckCircle2, Heart } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-br from-cyan-500 via-blue-500 to-blue-600 py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            About Ace Your Studies
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Your trusted partner in academic excellence since our inception. Empowering students worldwide to achieve their academic goals.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">
                At Ace Your Studies, our mission is simple: to empower students to achieve academic excellence with confidence, clarity, and expert guidance.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">
                We believe every learner deserves access to high-quality support, and we are committed to delivering services that make education easier, more manageable, and more successful.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                With over 2000+ assignments successfully completed and students from 15+ countries, we've built a reputation for quality, integrity, and exceptional results.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Award, label: 'Quality First', color: 'from-cyan-500 to-blue-600' },
                { icon: Shield, label: 'Integrity Always', color: 'from-blue-500 to-cyan-600' },
                { icon: Target, label: 'Results Driven', color: 'from-green-500 to-emerald-600' },
                { icon: Heart, label: 'Student Focused', color: 'from-rose-500 to-pink-600' }
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow text-center"
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${item.color} rounded-lg flex items-center justify-center mx-auto mb-3`}>
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <p className="font-bold text-gray-900">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-gray-600 text-lg">The principles that guide everything we do</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Quality',
                description: 'Every assignment is meticulously researched, expertly written, and thoroughly reviewed to meet the highest academic standards.',
                icon: Award
              },
              {
                title: 'Integrity',
                description: 'Our strict No-AI Policy ensures 100% human-written content. We stand behind the authenticity and originality of every piece.',
                icon: Shield
              },
              {
                title: 'Expertise',
                description: 'Our team consists of qualified academics with advanced degrees, bringing real subject knowledge and professional research skills.',
                icon: Users
              }
            ].map((value, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mb-6">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Makes Us Different</h2>
            <p className="text-gray-600 text-lg">Excellence that sets us apart from the rest</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: '2000+ Assignments Completed',
                description: 'Years of experience with proven results and industry-leading success rates.'
              },
              {
                title: 'Strict No-AI Policy',
                description: '100% human-written content ensuring originality and academic integrity.'
              },
              {
                title: 'High Pass Rate',
                description: 'Our clients consistently achieve top grades through quality research and academic rigor.'
              },
              {
                title: 'Multi-Country Expertise',
                description: 'Understanding of UK, US, Australian, and Asian academic formats and standards.'
              },
              {
                title: 'On-Time Delivery',
                description: 'We work with your deadlines with flawless professionalism, every time.'
              },
              {
                title: 'Confidential & Secure',
                description: 'Your personal information and project details are always protected.'
              }
            ].map((item, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-cyan-50 to-blue-50 p-6 rounded-xl border border-cyan-100 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start space-x-3 mb-3">
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <h3 className="text-lg font-bold text-gray-900">{item.title}</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Global Reach</h2>
            <p className="text-gray-600 text-lg">Supporting students across continents</p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {[
                { icon: Globe2, value: '15+', label: 'Countries Served' },
                { icon: Users, value: '1500+', label: 'Happy Students' },
                { icon: TrendingUp, value: '95%', label: 'Success Rate' }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-10 h-10 text-white" />
                  </div>
                  <p className="text-4xl font-bold text-gray-900 mb-2">{stat.value}</p>
                  <p className="text-gray-600 font-medium">{stat.label}</p>
                </div>
              ))}
            </div>

            <div className="border-t border-gray-200 pt-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                Countries We Serve
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  'United Kingdom',
                  'United States',
                  'Australia',
                  'Malaysia',
                  'Singapore',
                  'Hong Kong',
                  'China',
                  'Saudi Arabia',
                  'United Arab Emirates',
                  'Canada',
                  'New Zealand',
                  'India'
                ].map((country, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-lg p-3 text-center border border-cyan-100"
                  >
                    <p className="text-gray-800 font-semibold text-sm">{country}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gradient-to-r from-cyan-500 to-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Join Our Success Story
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Be part of thousands of students who achieved academic excellence with our support
          </p>
          <button className="bg-white text-cyan-600 px-10 py-4 rounded-lg font-bold text-lg hover:bg-gray-50 hover:scale-105 transition-all duration-300 shadow-xl">
            Get Started Today
          </button>
        </div>
      </section>
    </div>
  );
}
