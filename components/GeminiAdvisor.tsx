
import React, { useState, useCallback } from 'react';
import { getInsuranceAdvice } from '../services/geminiService';
import { GeminiResponse } from '../types';
import { Icon } from './common/Icon';

const GeminiAdvisor: React.FC = () => {
  const [insuranceType, setInsuranceType] = useState<'Auto' | 'Home'>('Auto');
  const [userInput, setUserInput] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<GeminiResponse | null>(null);

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    if (!userInput.trim()) {
      setError('Please tell us a little about your needs.');
      return;
    }

    setLoading(true);
    setError(null);
    setResult(null);

    const advice = await getInsuranceAdvice(insuranceType, userInput);

    if (advice) {
      setResult(advice);
    } else {
      setError('Sorry, our AI advisor is unavailable right now. Please try again later or contact us directly.');
    }

    setLoading(false);
  }, [insuranceType, userInput]);
  
  const handleReset = () => {
    setResult(null);
    setUserInput('');
    setError(null);
  };

  const prompts = {
    Auto: 'e.g., I have a 2021 Ford F-150 for work and a family sedan. We have one new driver. I want good coverage but need to keep costs reasonable.',
    Home: 'e.g., We have a 3-bedroom brick home with a detached garage and a small pool. We are concerned about storm damage.',
  };
  
  return (
    <section id="advisor" className="py-20 sm:py-24 bg-blue-600">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Get Instant, Helpful Advice with Our AI Advisor</h2>
          <p className="mt-4 text-lg text-blue-100">Not sure what coverage you need? Answer one simple question and our AI-powered tool, built with Google's Gemini, will provide a helpful starting point. <strong className="font-semibold">No personal info required.</strong></p>
        </div>

        <div className="mt-12 max-w-3xl mx-auto bg-white rounded-2xl shadow-2xl p-6 sm:p-8">
          {!result ? (
            <form onSubmit={handleSubmit}>
              <div className="flex justify-center border border-gray-200 rounded-full p-1 mb-6 bg-gray-100">
                <button type="button" onClick={() => setInsuranceType('Auto')} className={`w-1/2 px-4 py-2.5 rounded-full text-sm sm:text-base font-semibold transition-colors ${insuranceType === 'Auto' ? 'bg-blue-600 text-white shadow' : 'text-gray-600 hover:bg-gray-200'}`}>Auto Insurance</button>
                <button type="button" onClick={() => setInsuranceType('Home')} className={`w-1/2 px-4 py-2.5 rounded-full text-sm sm:text-base font-semibold transition-colors ${insuranceType === 'Home' ? 'bg-blue-600 text-white shadow' : 'text-gray-600 hover:bg-gray-200'}`}>Home Insurance</button>
              </div>

              <div>
                <label htmlFor="userInput" className="block text-lg font-semibold text-gray-800 mb-2">
                  Describe your {insuranceType.toLowerCase()} insurance needs:
                </label>
                <textarea
                  id="userInput"
                  rows={4}
                  value={userInput}
                  onChange={(e) => setUserInput(e.target.value)}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-shadow"
                  placeholder={prompts[insuranceType]}
                />
              </div>

              {error && <p className="text-red-600 mt-2">{error}</p>}
              
              <button type="submit" disabled={loading} className="mt-6 w-full flex items-center justify-center gap-2 bg-blue-600 text-white px-8 py-3.5 rounded-full font-semibold text-lg hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl disabled:bg-gray-400 disabled:cursor-not-allowed">
                {loading ? (
                    <>
                      <Icon name="loader" className="animate-spin" />
                      Analyzing...
                    </>
                ) : (
                    <>
                      <Icon name="sparkles" />
                      Get My Advice
                    </>
                )}
              </button>
            </form>
          ) : (
            <div className="animate-fade-in">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Your Personalized {insuranceType} Insurance Guide</h3>
              
              <div className="space-y-4 mb-6">
                <h4 className="font-semibold text-gray-700">Recommended Coverages:</h4>
                {result.recommendedCoverages.map((item, index) => (
                  <div key={index} className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                    <div className="flex items-center justify-between">
                      <p className="font-bold text-gray-800">{item.name}</p>
                      <span className="px-2 py-0.5 text-xs font-semibold text-blue-800 bg-blue-100 rounded-full">{item.level}</span>
                    </div>
                    <p className="text-gray-600 mt-1">{item.reason}</p>
                  </div>
                ))}
              </div>

              <div className="space-y-3 mb-6">
                <h4 className="font-semibold text-gray-700">Additional Tips:</h4>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  {result.additionalTips.map((tip, index) => <li key={index}>{tip}</li>)}
                </ul>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
                <p className="text-blue-800">{result.nextStep}</p>
              </div>

              <div className="mt-6 flex flex-col sm:flex-row gap-4">
                <a href="#contact" className="w-full sm:w-auto flex-1 text-center bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors">Speak to an Agent</a>
                <button onClick={handleReset} className="w-full sm:w-auto text-gray-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">Start Over</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default GeminiAdvisor;
