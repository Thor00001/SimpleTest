import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, RotateCcw } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '@/contexts/LanguageContext';
import TestQuestion from '@/components/TestQuestion';
import TestResult from '@/components/TestResult';
import AdDisplay from '@/components/AdDisplay';

const PersonalityTest = () => {
  const { language } = useLanguage();
  const [currentStep, setCurrentStep] = useState<'intro' | 'test' | 'result'>('intro');
  const [answers, setAnswers] = useState<number[]>([]);
  const [result, setResult] = useState<string>('');

  const texts = {
    ko: {
      title: "🧠 성격 테스트",
      subtitle: "나는 어떤 성격일까?",
      description: "12가지 질문으로 알아보는 나의 진짜 성격",
      accurateAnalysis: "🎯 정확한 성격 분석",
      analysisDescription: "과학적 근거를 바탕으로 한 성격 분석 테스트!\n당신의 진짜 성격과 특성을 발견해보세요.",
      leader: "리더형",
      leaderDesc: "천생 지도자",
      innovator: "혁신가형", 
      innovatorDesc: "창의적 사상가",
      mediator: "중재자형",
      mediatorDesc: "평화로운 조화자",
      analyst: "분석가형",
      analystDesc: "논리적 사고자",
      supporter: "지지자형",
      supporterDesc: "따뜻한 응원자",
      observer: "관찰자형",
      observerDesc: "신중한 사색가",
      timeRequired: "약 3분 소요",
      questions: "12개 질문",
      accurate: "정확한 분석",
      shareable: "결과 공유",
      startTest: "테스트 시작하기",
      retakeTest: "다시 테스트하기",
      metaTitle: "성격테스트 - SimpleTest.kr",
      metaDescription: "12가지 질문으로 알아보는 나의 성격 유형! 리더형, 혁신가형, 중재자형, 분석가형, 지지자형, 관찰자형 중 어떤 타입인지 확인해보세요.",
      metaKeywords: "성격테스트, 성격분석, 심리테스트, MBTI, 성격유형, 자기분석",
      ogTitle: "성격테스트 - 나는 어떤 성격일까?",
      ogDescription: "12가지 질문으로 알아보는 나의 성격 유형! 당신의 진짜 성격을 발견해보세요."
    },
    en: {
      title: "🧠 Personality Test",
      subtitle: "What's My Personality?",
      description: "Discover your true personality with 12 questions",
      accurateAnalysis: "🎯 Accurate Personality Analysis",
      analysisDescription: "Scientifically-based personality analysis test!\nDiscover your true personality and characteristics.",
      leader: "Leader Type",
      leaderDesc: "Natural Leader",
      innovator: "Innovator Type",
      innovatorDesc: "Creative Thinker", 
      mediator: "Mediator Type",
      mediatorDesc: "Peaceful Harmonizer",
      analyst: "Analyst Type",
      analystDesc: "Logical Thinker",
      supporter: "Supporter Type",
      supporterDesc: "Warm Supporter",
      observer: "Observer Type",
      observerDesc: "Thoughtful Contemplator",
      timeRequired: "About 3 minutes",
      questions: "12 questions",
      accurate: "Accurate analysis",
      shareable: "Share results",
      startTest: "Start Test",
      retakeTest: "Retake Test",
      metaTitle: "Personality Test - SimpleTest.kr",
      metaDescription: "Discover your personality type with 12 questions! Find out whether you're a Leader, Innovator, Mediator, Analyst, Supporter, or Observer type.",
      metaKeywords: "personality test, personality analysis, psychology test, MBTI, personality type, self analysis",
      ogTitle: "Personality Test - What's My Personality?",
      ogDescription: "Discover your personality type with 12 questions! Find out your true personality."
    }
  };

  const t = texts[language];

  const handleStartTest = () => {
    setCurrentStep('test');
    setAnswers([]);
  };

  const handleTestComplete = (finalAnswers: number[], testResult: string) => {
    setAnswers(finalAnswers);
    setResult(testResult);
    setCurrentStep('result');
  };

  const handleRestart = () => {
    setCurrentStep('intro');
    setAnswers([]);
    setResult('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-4 dark:from-indigo-900 dark:via-purple-900 dark:to-pink-900">
      <Helmet>
        <title>{t.metaTitle}</title>
        <meta name="description" content={t.metaDescription} />
        <meta name="keywords" content={t.metaKeywords} />
        <meta property="og:title" content={t.ogTitle} />
        <meta property="og:description" content={t.ogDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.simpletest.kr/personality-test" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={t.ogTitle} />
        <meta name="twitter:description" content={t.ogDescription} />
      </Helmet>
      
      <div className="max-w-4xl mx-auto">
        {currentStep === 'intro' && (
          <div className="text-center animate-fade-in">
            {/* 상단 광고 */}
            <AdDisplay 
              adSlot="1234567890"
              className="mb-8"
            />

            <div className="mb-8 pt-12">
              <h1 className="text-6xl font-bold text-white mb-4 drop-shadow-lg">
                {t.title}
              </h1>
              <h2 className="text-4xl font-bold text-white/90 mb-2">
                {t.subtitle}
              </h2>
              <p className="text-xl text-white/80 mb-8">
                {t.description}
              </p>
            </div>

            <Card className="bg-white/95 backdrop-blur-sm shadow-2xl border-0 mb-8 hover-scale dark:bg-gray-800/90">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-800 dark:text-white">
                  {t.accurateAnalysis}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600 text-lg leading-relaxed dark:text-gray-300">
                  {t.analysisDescription.split('\n').map((line, index) => (
                    <span key={index}>
                      {line}
                      {index === 0 && <br />}
                    </span>
                  ))}
                </p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6">
                  <div className="text-center p-4 bg-blue-50 rounded-lg dark:bg-blue-900/30">
                    <div className="text-3xl mb-2">👑</div>
                    <h3 className="font-bold text-blue-800 mb-1 dark:text-blue-300">{t.leader}</h3>
                    <p className="text-xs text-blue-600 dark:text-blue-400">{t.leaderDesc}</p>
                  </div>
                  <div className="text-center p-4 bg-purple-50 rounded-lg dark:bg-purple-900/30">
                    <div className="text-3xl mb-2">💡</div>
                    <h3 className="font-bold text-purple-800 mb-1 dark:text-purple-300">{t.innovator}</h3>
                    <p className="text-xs text-purple-600 dark:text-purple-400">{t.innovatorDesc}</p>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-lg dark:bg-green-900/30">
                    <div className="text-3xl mb-2">🕊️</div>
                    <h3 className="font-bold text-green-800 mb-1 dark:text-green-300">{t.mediator}</h3>
                    <p className="text-xs text-green-600 dark:text-green-400">{t.mediatorDesc}</p>
                  </div>
                  <div className="text-center p-4 bg-indigo-50 rounded-lg dark:bg-indigo-900/30">
                    <div className="text-3xl mb-2">🔬</div>
                    <h3 className="font-bold text-indigo-800 mb-1 dark:text-indigo-300">{t.analyst}</h3>
                    <p className="text-xs text-indigo-600 dark:text-indigo-400">{t.analystDesc}</p>
                  </div>
                  <div className="text-center p-4 bg-pink-50 rounded-lg dark:bg-pink-900/30">
                    <div className="text-3xl mb-2">🤝</div>
                    <h3 className="font-bold text-pink-800 mb-1 dark:text-pink-300">{t.supporter}</h3>
                    <p className="text-xs text-pink-600 dark:text-pink-400">{t.supporterDesc}</p>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-lg dark:bg-gray-900/30">
                    <div className="text-3xl mb-2">🔍</div>
                    <h3 className="font-bold text-gray-800 mb-1 dark:text-gray-300">{t.observer}</h3>
                    <p className="text-xs text-gray-600 dark:text-gray-400">{t.observerDesc}</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-500 mt-6 dark:text-gray-400">
                  <div className="flex flex-col items-center space-y-1">
                    <span>⏱️</span>
                    <span>{t.timeRequired}</span>
                  </div>
                  <div className="flex flex-col items-center space-y-1">
                    <span>❓</span>
                    <span>{t.questions}</span>
                  </div>
                  <div className="flex flex-col items-center space-y-1">
                    <span>🎯</span>
                    <span>{t.accurate}</span>
                  </div>
                  <div className="flex flex-col items-center space-y-1">
                    <span>📱</span>
                    <span>{t.shareable}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* 중간 광고 */}
            <AdDisplay 
              adSlot="2345678901"
              className="mb-8"
            />

            <Button 
              onClick={handleStartTest}
              size="lg"
              className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-full text-xl shadow-lg transition-all duration-300 hover:scale-105"
            >
              {t.startTest}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        )}

        {currentStep === 'test' && (
          <div>
            {/* 테스트 중간 광고 */}
            <AdDisplay 
              adSlot="3456789012"
              className="mb-4"
            />
            <TestQuestion onComplete={handleTestComplete} />
          </div>
        )}

        {currentStep === 'result' && (
          <div className="animate-fade-in">
            {/* 결과 상단 광고 */}
            <AdDisplay 
              adSlot="4567890123"
              className="mb-8"
            />
            
            <TestResult result={result} onRestart={handleRestart} />
            
            {/* 결과 하단 광고 */}
            <AdDisplay 
              adSlot="5678901234"
              className="mt-8 mb-8"
            />
            
            <div className="text-center mt-8">
              <Button 
                onClick={handleRestart}
                variant="outline"
                size="lg"
                className="bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30 font-bold py-3 px-6 rounded-full"
              >
                <RotateCcw className="mr-2 h-5 w-5" />
                {t.retakeTest}
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PersonalityTest;
