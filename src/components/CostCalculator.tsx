import { useState, useEffect } from 'react';
import { X, Calculator } from 'lucide-react';

interface CostCalculatorProps {
  onClose: () => void;
}

type Currency = 'BDT' | 'USD' | 'GBP';
type AssignmentType = 'Essay' | 'Report' | 'Dissertation' | 'Coursework' | 'Presentation' | 'Exam Prep';

export default function CostCalculator({ onClose }: CostCalculatorProps) {
  const [wordCount, setWordCount] = useState(1000);
  const [assignmentType, setAssignmentType] = useState<AssignmentType>('Essay');
  const [currency, setCurrency] = useState<Currency>('BDT');
  const [specializations, setSpecializations] = useState({
    accounting: false,
    coding: false,
    medical: false
  });
  const [exchangeRates, setExchangeRates] = useState({ USD: 0.0084, GBP: 0.0065 });

  useEffect(() => {
    fetch('https://api.exchangerate-api.com/v4/latest/BDT')
      .then(res => res.json())
      .then(data => {
        setExchangeRates({
          USD: data.rates.USD || 0.0084,
          GBP: data.rates.GBP || 0.0065
        });
      })
      .catch(() => {
        setExchangeRates({ USD: 0.0084, GBP: 0.0065 });
      });
  }, []);

  const calculatePrice = () => {
    const basePrice = (wordCount / 50) * 100;
    const presentationExtra = assignmentType === 'Presentation' ? 500 : 0;
    const specializationCount = Object.values(specializations).filter(Boolean).length;
    const specializationExtra = specializationCount * 500;

    return basePrice + presentationExtra + specializationExtra;
  };

  const priceInBDT = calculatePrice();
  const priceInUSD = priceInBDT * exchangeRates.USD;
  const priceInGBP = priceInBDT * exchangeRates.GBP;

  const displayPrice = () => {
    switch (currency) {
      case 'USD':
        return `$${priceInUSD.toFixed(2)}`;
      case 'GBP':
        return `£${priceInGBP.toFixed(2)}`;
      default:
        return `৳${priceInBDT.toFixed(0)}`;
    }
  };

  const handleSpecializationChange = (key: keyof typeof specializations) => {
    setSpecializations(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-gradient-to-r from-cyan-500 to-blue-600 p-6 rounded-t-2xl flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <Calculator className="w-8 h-8 text-white" />
            <h2 className="text-2xl font-bold text-white">Cost Calculator</h2>
          </div>
          <button
            onClick={onClose}
            className="text-white hover:bg-white/20 p-2 rounded-full transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-6 space-y-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Word Count: {wordCount} words
            </label>
            <input
              type="range"
              min="100"
              max="10000"
              step="50"
              value={wordCount}
              onChange={(e) => setWordCount(Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-cyan-500"
            />
            <div className="flex justify-between text-xs text-gray-500 mt-1">
              <span>100</span>
              <span>10,000</span>
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Assignment Type
            </label>
            <select
              value={assignmentType}
              onChange={(e) => setAssignmentType(e.target.value as AssignmentType)}
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-cyan-500 transition-colors"
            >
              <option value="Essay">Essay</option>
              <option value="Report">Report</option>
              <option value="Dissertation">Dissertation</option>
              <option value="Coursework">Coursework</option>
              <option value="Presentation">Presentation (+৳500)</option>
              <option value="Exam Prep">Exam Preparation</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-3">
              Special Requirements (each adds ৳500)
            </label>
            <div className="space-y-2">
              {[
                { key: 'accounting' as const, label: 'Accounting' },
                { key: 'coding' as const, label: 'Coding/Programming' },
                { key: 'medical' as const, label: 'Medical/Healthcare' }
              ].map(({ key, label }) => (
                <label key={key} className="flex items-center space-x-3 cursor-pointer group">
                  <div className="relative">
                    <input
                      type="checkbox"
                      checked={specializations[key]}
                      onChange={() => handleSpecializationChange(key)}
                      className="sr-only"
                    />
                    <div className={`w-6 h-6 border-2 rounded-md transition-all ${
                      specializations[key]
                        ? 'bg-cyan-500 border-cyan-500'
                        : 'border-gray-300 group-hover:border-cyan-400'
                    }`}>
                      {specializations[key] && (
                        <svg className="w-full h-full text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      )}
                    </div>
                  </div>
                  <span className="text-gray-700 font-medium">{label}</span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Currency
            </label>
            <div className="grid grid-cols-3 gap-3">
              {(['BDT', 'USD', 'GBP'] as Currency[]).map((curr) => (
                <button
                  key={curr}
                  onClick={() => setCurrency(curr)}
                  className={`py-3 px-4 rounded-lg font-semibold transition-all ${
                    currency === curr
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {curr}
                </button>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-cyan-50 to-blue-50 border-2 border-cyan-200 rounded-xl p-6">
            <div className="text-center">
              <p className="text-sm text-gray-600 mb-2">Estimated Cost</p>
              <p className="text-4xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                {displayPrice()}
              </p>
              <div className="mt-4 pt-4 border-t border-cyan-200">
                <div className="grid grid-cols-3 gap-4 text-sm">
                  <div>
                    <p className="text-gray-500">BDT</p>
                    <p className="font-semibold text-gray-700">৳{priceInBDT.toFixed(0)}</p>
                  </div>
                  <div>
                    <p className="text-gray-500">USD</p>
                    <p className="font-semibold text-gray-700">${priceInUSD.toFixed(2)}</p>
                  </div>
                  <div>
                    <p className="text-gray-500">GBP</p>
                    <p className="font-semibold text-gray-700">£{priceInGBP.toFixed(2)}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <p className="text-sm text-blue-800">
              <span className="font-semibold">Note:</span> This is an estimated cost. Final pricing may vary based on complexity, urgency, and specific requirements. Contact us for an accurate quote.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
