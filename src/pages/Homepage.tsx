import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import Hook
import { CheckCircle, BookOpen, Users, Award, Globe, ArrowRight, Star } from 'lucide-react';
import { API_BASE_URL } from '../config';

// Removed Interface HomePageProps entirely

// Define Data Interfaces
interface Review {
  id: number;
  name: string;
  country: string;
  university: string;
  rating: number;
  text: string;
  subject: string;
  grade: string;
}

interface Sample {
  id: number;
  title: string;
  subject: string;
  type: string;
  grade: string;
  university: string;
  wordCount: number;
  coverColor: string;
}

export default function HomePage() { // Removed { onNavigate }
  const navigate = useNavigate();    // Use Hook
  
  const [reviews, setReviews] = useState<Review[]>([]);
  const [sampleAssignments, setSampleAssignments] = useState<Sample[]>([]);
  const [currentReview, setCurrentReview] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [reviewsRes, samplesRes] = await Promise.all([
          fetch(`${API_BASE_URL}/get_reviews.php`),
          fetch(`${API_BASE_URL}/get_samples.php`)
        ]);

        const reviewsData = await reviewsRes.json();
        const samplesData = await samplesRes.json();

        setReviews(reviewsData);
        setSampleAssignments(samplesData.slice(0, 4)); 
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (reviews.length === 0) return;
    const timer = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [reviews.length]);

  const stats = [
    { icon: BookOpen, value: '2000+', label: 'Assignments Completed' },
    { icon: Users, value: '1500+', label: 'Happy Students' },
    { icon: Award, value: '95%', label: 'High Pass Rate' },
    { icon: Globe, value: '15+', label: 'Countries Served' }
  ];

  if (loading) return <div className="min-h-screen flex items-center justify-center">Loading...</div>;

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-cyan-50 via-blue-50 to-yellow-50 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Premium Academic Support You Can{' '}
                <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                  Trust
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Expert academic writing services with a proven track record. 2000+ assignments completed with excellence across 15+ countries worldwide.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => navigate('/contact')} 
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <span>Get Started</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button
                  onClick={() => navigate('/samples')}
                  className="border-2 border-cyan-600 text-cyan-600 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-50 transition-all duration-300"
                >
                  View Samples
                </button>
              </div>
              {/* ... Rest of Stats section ... */}
              <div className="mt-8 flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <span className="text-gray-700 font-semibold">100% Human-Written</span>
                <span className="text-gray-400">|</span>
                <CheckCircle className="w-5 h-5 text-green-600" />
                <span className="text-gray-700 font-semibold">No AI Policy</span>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
                <div className="flex items-center space-x-2 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Quality Guaranteed</p>
                    <p className="text-sm text-gray-500">Trusted by thousands</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center p-4 bg-gradient-to-br from-cyan-50 to-blue-50 rounded-lg">
                      <stat.icon className="w-8 h-8 text-cyan-600 mx-auto mb-2" />
                      <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                      <p className="text-sm text-gray-600">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What Our Students Say
            </h2>
            <p className="text-gray-600 text-lg">Real reviews from students around the world</p>
          </div>

          {reviews.length > 0 && (
            <div className="relative max-w-4xl mx-auto">
              <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl shadow-xl p-8 md:p-12 border border-cyan-100">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 fill-cyan-500 text-cyan-500" />
                  ))}
                </div>
                <p className="text-xl text-gray-800 mb-6 leading-relaxed italic">
                  "{reviews[currentReview].text}"
                </p>
                <div className="flex items-start justify-between flex-wrap gap-4">
                  <div>
                    <p className="font-bold text-gray-900">{reviews[currentReview].name}</p>
                    <p className="text-gray-600">{reviews[currentReview].university}</p>
                    <p className="text-cyan-600 font-semibold">{reviews[currentReview].country}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-500">{reviews[currentReview].subject}</p>
                    <p className="font-bold text-green-600">{reviews[currentReview].grade}</p>
                  </div>
                </div>
              </div>

              <div className="flex justify-center space-x-2 mt-6">
                {reviews.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentReview(index)}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                      index === currentReview
                        ? 'bg-cyan-600 w-8'
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Sample Assignments Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Sample Assignments</h2>
            <p className="text-gray-600 text-lg">
              See the quality of work that helped students achieve top grades
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {sampleAssignments.map((assignment) => (
              <div
                key={assignment.id}
                className="group cursor-pointer"
                onClick={() => navigate('/samples')}
              >
                <div className="relative bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                  <div className={`h-64 bg-gradient-to-br ${assignment.coverColor} p-6 flex flex-col justify-between`}>
                    <div>
                      <div className="text-white/80 text-xs font-semibold mb-2 uppercase tracking-wide">
                        {assignment.type}
                      </div>
                      <h3 className="text-white font-bold text-lg leading-tight">
                        {assignment.title}
                      </h3>
                    </div>
                    <div className="text-white/90 text-sm">
                      <p className="font-semibold">{assignment.subject}</p>
                      <p className="text-xs">{assignment.wordCount} words</p>
                    </div>
                  </div>
                  <div className="bg-white p-4 border-t-4 border-cyan-500">
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-gray-500">{assignment.university}</span>
                      <span className="text-sm font-bold text-green-600">{assignment.grade}</span>
                    </div>
                  </div>
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-xs font-semibold text-cyan-600">View Details →</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button
              onClick={() => navigate('/samples')}
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-xl transition-all duration-300 inline-flex items-center space-x-2"
            >
              <span>View All Samples</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Why Choose Us & Footer CTA */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Ace Your Studies?</h2>
            <p className="text-gray-600 text-lg">Excellence that sets us apart</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Strict No-AI Policy',
                description: '100% human-written content by qualified academic experts. Every assignment is crafted with genuine expertise and deep research.',
                icon: CheckCircle
              },
              {
                title: 'Proven Track Record',
                description: '2000+ successfully completed assignments with consistently high grades. Our students achieve excellence.',
                icon: Award
              },
              {
                title: 'Global Expertise',
                description: 'Supporting students from UK, US, Australia, Malaysia, Singapore, Hong Kong, Saudi Arabia, and beyond.',
                icon: Globe
              }
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-cyan-50 to-blue-50 p-8 rounded-xl border border-cyan-100 hover:shadow-lg transition-shadow"
              >
                <div className="w-14 h-14 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-cyan-500 to-blue-600 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Ace Your Studies?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join thousands of successful students worldwide. Get expert help today.
          </p>
          <button
            onClick={() => navigate('/contact')}
            className="bg-white text-cyan-600 px-10 py-4 rounded-lg font-bold text-lg hover:bg-gray-50 hover:scale-105 transition-all duration-300 shadow-xl"
          >
            Contact Us Now
          </button>
        </div>
      </section>
    </div>
  );
}