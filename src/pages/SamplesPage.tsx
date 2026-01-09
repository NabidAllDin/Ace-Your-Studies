import { useState, useEffect } from 'react';
import { BookOpen, Award, FileText, ChevronLeft, ChevronRight, X } from 'lucide-react'; // Added X icon
import { sampleAssignments } from '../data/mockData';

export default function SamplesPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [selectedPdf, setSelectedPdf] = useState<string | null>(null); // State for modal

  useEffect(() => {
    // Pause autoplay if a PDF is open
    if (!isAutoPlaying || selectedPdf) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % sampleAssignments.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [isAutoPlaying, selectedPdf]);

  const nextSlide = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % sampleAssignments.length);
  };

  const prevSlide = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + sampleAssignments.length) % sampleAssignments.length);
  };

  const goToSlide = (index: number) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
  };

  // Helper to open PDF
  const openPdf = (url: string) => {
    setIsAutoPlaying(false);
    setSelectedPdf(url);
  };

  return (
    <div className="min-h-screen bg-gray-50 relative">
      {/* PDF PREVIEW MODAL */}
      {selectedPdf && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-in fade-in duration-200">
          <div className="bg-white w-full max-w-6xl h-[90vh] rounded-xl flex flex-col shadow-2xl overflow-hidden">
            <div className="flex justify-between items-center p-4 border-b bg-gray-50">
              <h3 className="font-bold text-gray-700 flex items-center gap-2">
                <FileText className="w-5 h-5 text-cyan-600" />
                Document Preview
              </h3>
              <button 
                onClick={() => setSelectedPdf(null)}
                className="p-2 hover:bg-gray-200 rounded-full transition-colors text-gray-500 hover:text-red-500"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="flex-1 bg-gray-200 relative">
              <iframe 
                src={selectedPdf} 
                className="w-full h-full border-0" 
                title="PDF Preview"
              />
            </div>
          </div>
        </div>
      )}

      <section className="bg-gradient-to-br from-cyan-500 via-blue-500 to-blue-600 py-20 px-4">
        {/* ... (Header content remains same) ... */}
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <BookOpen className="w-12 h-12 text-white" />
            <h1 className="text-5xl md:text-6xl font-bold text-white">
              Sample Assignments
            </h1>
          </div>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Explore high-quality academic work that helped students achieve exceptional grades across various disciplines.
          </p>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 text-center">
            {/* ... (Title remains same) ... */}
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              3D Book Preview Gallery
            </h2>
            <p className="text-gray-600 text-lg">
              Click on the center book to preview the full document
            </p>
          </div>

          <div className="relative">
            <div className="perspective-1000">
              <div className="relative h-[500px] flex items-center justify-center">
                {sampleAssignments.map((assignment, index) => {
                  const offset = index - currentIndex;
                  const absOffset = Math.abs(offset);
                  // ... (Transform logic remains same) ...
                  let transform = '';
                  let zIndex = 0;
                  let opacity = 0;

                  if (absOffset === 0) {
                    transform = 'translateX(0) translateZ(0) rotateY(0deg) scale(1)';
                    zIndex = 40;
                    opacity = 1;
                  } else if (offset === 1) {
                    transform = 'translateX(60%) translateZ(-200px) rotateY(-25deg) scale(0.85)';
                    zIndex = 30;
                    opacity = 0.7;
                  } else if (offset === -1) {
                    transform = 'translateX(-60%) translateZ(-200px) rotateY(25deg) scale(0.85)';
                    zIndex = 30;
                    opacity = 0.7;
                  } else if (absOffset === 2) {
                    transform = offset > 0
                      ? 'translateX(100%) translateZ(-400px) rotateY(-45deg) scale(0.7)'
                      : 'translateX(-100%) translateZ(-400px) rotateY(45deg) scale(0.7)';
                    zIndex = 20;
                    opacity = 0.4;
                  }

                  return (
                    <div
                      key={assignment.id}
                      className={`absolute transition-all duration-700 ease-in-out ${absOffset === 0 ? 'cursor-pointer' : ''}`}
                      style={{
                        transform,
                        zIndex,
                        opacity: absOffset > 2 ? 0 : opacity,
                        pointerEvents: absOffset === 0 ? 'auto' : 'none'
                      }}
                      // UPDATED CLICK HANDLER FOR 3D VIEW
                      onClick={() => {
                        if (absOffset === 0) {
                          openPdf(assignment.pdfUrl || '');
                        }
                      }}
                    >
                      {/* ... (Book visual code remains exactly the same) ... */}
                      <div className="w-80 h-96 relative">
                        <div className="book-container">
                          <div className="book">
                            <div className={`book-cover bg-gradient-to-br ${assignment.coverColor} rounded-r-lg shadow-2xl p-8 flex flex-col justify-between relative overflow-hidden`}>
                              {/* ... (Rest of book cover content) ... */}
                              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
                              <div className="absolute bottom-0 left-0 w-24 h-24 bg-black/10 rounded-full -ml-12 -mb-12"></div>

                              <div className="relative z-10">
                                <div className="inline-block bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full mb-4">
                                  <span className="text-white text-xs font-bold uppercase tracking-wider">
                                    {assignment.type}
                                  </span>
                                </div>
                                <h3 className="text-white font-bold text-2xl leading-tight mb-2">
                                  {assignment.title}
                                </h3>
                                <div className="h-1 w-16 bg-white/50 rounded"></div>
                              </div>

                              <div className="relative z-10">
                                <div className="space-y-2 text-white/90">
                                  <div className="flex items-center space-x-2">
                                    <FileText className="w-4 h-4" />
                                    <span className="text-sm font-medium">{assignment.subject}</span>
                                  </div>
                                  <div className="flex items-center space-x-2">
                                    <BookOpen className="w-4 h-4" />
                                    <span className="text-sm">{assignment.wordCount} words</span>
                                  </div>
                                  <div className="flex items-center space-x-2">
                                    <Award className="w-4 h-4" />
                                    <span className="text-sm font-bold">{assignment.grade}</span>
                                  </div>
                                </div>
                                <div className="mt-4 pt-4 border-t border-white/30">
                                  <p className="text-white/80 text-xs leading-relaxed">
                                    {assignment.university}
                                  </p>
                                </div>
                              </div>
                              
                              {/* Add "Click to View" Hint Overlay */}
                              <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                                <div className="bg-white/20 backdrop-blur-md px-6 py-3 rounded-full border border-white/50 text-white font-semibold flex items-center gap-2">
                                  <BookOpen className="w-5 h-5" />
                                  View PDF
                                </div>
                              </div>
                            </div>
                            <div className="book-spine bg-gradient-to-b from-gray-700 to-gray-900"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* ... (Controls remain the same) ... */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white hover:bg-gray-100 p-4 rounded-full shadow-xl z-50 transition-all hover:scale-110"
            >
              <ChevronLeft className="w-6 h-6 text-gray-800" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white hover:bg-gray-100 p-4 rounded-full shadow-xl z-50 transition-all hover:scale-110"
            >
              <ChevronRight className="w-6 h-6 text-gray-800" />
            </button>
          </div>
          
          {/* ... (Pagination dots remain the same) ... */}
          <div className="flex justify-center space-x-3 mt-12">
            {sampleAssignments.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === currentIndex
                    ? 'w-12 h-3 bg-gradient-to-r from-cyan-500 to-blue-600'
                    : 'w-3 h-3 bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>

          <div className="text-center mt-8">
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className="text-gray-600 hover:text-gray-900 font-medium transition-colors"
            >
              {isAutoPlaying ? 'Pause Auto-Play' : 'Resume Auto-Play'}
            </button>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* ... (Details Header) ... */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Assignment Details
            </h2>
            <p className="text-gray-600 text-lg">
              Each assignment showcases our commitment to quality and academic excellence
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {sampleAssignments.map((assignment) => (
              <div
                key={assignment.id}
                // UPDATED CLICK HANDLER FOR GRID VIEW
                onClick={() => openPdf(assignment.pdfUrl || '')}
                className="bg-white border-2 border-gray-200 rounded-xl overflow-hidden hover:border-cyan-500 hover:shadow-xl transition-all duration-300 group cursor-pointer"
              >
                {/* ... (Grid card content remains same) ... */}
                <div className={`h-32 bg-gradient-to-br ${assignment.coverColor} p-4 flex items-center justify-center relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors"></div>
                  <BookOpen className="w-12 h-12 text-white relative z-10" />
                  {/* Small visual cue for PDF */}
                  <div className="absolute bottom-2 right-2 bg-white/20 backdrop-blur-sm p-1 rounded">
                     <FileText className="w-4 h-4 text-white" />
                  </div>
                </div>
                <div className="p-5">
                  <div className="inline-block bg-cyan-100 text-cyan-700 px-3 py-1 rounded-full text-xs font-semibold mb-3">
                    {assignment.type}
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2 leading-tight">
                    {assignment.title}
                  </h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-500">Subject:</span>
                      <span className="font-semibold text-gray-700">{assignment.subject}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Words:</span>
                      <span className="font-semibold text-gray-700">{assignment.wordCount}</span>
                    </div>
                    <div className="flex justify-between items-center pt-2 border-t border-gray-200">
                      <span className="text-gray-500">Grade:</span>
                      <span className="font-bold text-green-600">{assignment.grade}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ... (Footer section and CSS styles remain same) ... */}
      <section className="py-16 px-4 bg-gradient-to-r from-cyan-500 to-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready for Your Own Success Story?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Get the same quality and expertise for your assignments
          </p>
          <button className="bg-white text-cyan-600 px-10 py-4 rounded-lg font-bold text-lg hover:bg-gray-50 hover:scale-105 transition-all duration-300 shadow-xl">
            Request Your Assignment
          </button>
        </div>
      </section>

      <style>{`
        .perspective-1000 {
          perspective: 1000px;
        }

        .book-container {
          transform-style: preserve-3d;
        }

        .book {
          position: relative;
          width: 320px;
          height: 384px;
          transform-style: preserve-3d;
        }

        .book-cover {
          position: absolute;
          width: 100%;
          height: 100%;
          transform-origin: left center;
        }

        .book-spine {
          position: absolute;
          width: 40px;
          height: 100%;
          left: -40px;
          top: 0;
          transform-origin: right center;
          transform: rotateY(-90deg);
        }
      `}</style>
    </div>
  );
}