import { CheckCircle, FileText, BookOpen, GraduationCap, Edit, Presentation, HeartPulse } from 'lucide-react';
import { services } from '../data/mockData';

export default function ServicesPage() {
  const iconMap: { [key: number]: React.ElementType } = {
    1: FileText,
    2: BookOpen,
    3: GraduationCap,
    4: Edit,
    5: CheckCircle,
    6: Presentation
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-br from-amber-500 via-orange-500 to-orange-600 py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Our Services
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Comprehensive academic support tailored to your needs. From essays to dissertations, we deliver excellence at every level.
          </p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service) => {
              const Icon = iconMap[service.id];
              return (
                <div
                  key={service.id}
                  className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
                >
                  <div className="bg-gradient-to-r from-amber-500 to-orange-600 p-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    <div className="space-y-3">
                      {service.features.map((feature, index) => (
                        <div key={index} className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Academic Disciplines We Cover
            </h2>
            <p className="text-gray-600 text-lg">Expert guidance across a wide range of fields</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              'Business & Management',
              'Marketing',
              'Finance & Accounting',
              'Nursing & Healthcare',
              'Law & Criminology',
              'Sociology',
              'Psychology',
              'Engineering',
              'Education',
              'Literature',
              'Hospitality & Tourism',
              'IT & Computer Science',
              'Medical Sciences',
              'Architecture',
              'Environmental Studies',
              'Public Health'
            ].map((discipline, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-100 rounded-lg p-4 text-center hover:shadow-md transition-shadow"
              >
                <p className="font-semibold text-gray-800">{discipline}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-amber-500 to-orange-600 rounded-2xl p-12 text-center shadow-2xl">
            <h2 className="text-4xl font-bold text-white mb-4">
              Need Custom Support?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Don't see exactly what you need? We offer personalized academic support tailored to your specific requirements.
            </p>
            <button className="bg-white text-amber-600 px-10 py-4 rounded-lg font-bold text-lg hover:bg-gray-50 hover:scale-105 transition-all duration-300 shadow-xl">
              Contact Us for Custom Solutions
            </button>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Process</h2>
            <p className="text-gray-600 text-lg">Simple, transparent, and effective</p>
          </div>

          <div className="space-y-8">
            {[
              {
                step: '01',
                title: 'Share Your Requirements',
                description: 'Tell us about your assignment, deadline, and specific requirements. The more details you provide, the better we can help.'
              },
              {
                step: '02',
                title: 'Expert Assignment',
                description: 'We match you with a qualified subject expert who has the right expertise and experience for your task.'
              },
              {
                step: '03',
                title: 'Quality Research & Writing',
                description: 'Our expert conducts thorough research and crafts your assignment with academic rigor and original insights.'
              },
              {
                step: '04',
                title: 'Review & Delivery',
                description: 'Your completed work undergoes quality checks and plagiarism screening before timely delivery.'
              }
            ].map((process, index) => (
              <div key={index} className="flex items-start space-x-6 group">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-amber-500 to-orange-600 rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-lg group-hover:scale-110 transition-transform">
                  {process.step}
                </div>
                <div className="flex-1 bg-gradient-to-br from-amber-50 to-orange-50 rounded-lg p-6 border border-amber-100">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{process.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{process.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
