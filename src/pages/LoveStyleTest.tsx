import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, RotateCcw } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '@/contexts/LanguageContext';
import LoveStyleQuestions from '@/components/LoveStyleQuestions';
import LoveStyleResult from '@/components/LoveStyleResult';
import AdDisplay from '@/components/AdDisplay';

const LoveStyleTest = () => {
  const { language } = useLanguage();
  const [currentStep, setCurrentStep] = useState<'intro' | 'test' | 'result'>('intro');
  const [answers, setAnswers] = useState<number[]>([]);
  const [result, setResult] = useState<string>('');

  const texts = {
    ko: {
      title: "💖 연애 스타일 테스트",
      subtitle: "나의 연애 스타일은?",
      description: "당신만의 특별한 연애 방식을 알아보세요",
      accurateAnalysis: "💝 정확한 연애 스타일 분석",
      analysisDescription: "5가지 질문으로 알아보는 나만의 연애 패턴!\n당신의 진짜 연애 스타일과 특성을 발견해보세요.",
      romantic: "로맨틱형",
      romanticDesc: "감성적 연인",
      passionate: "열정형",
      passionateDesc: "뜨거운 연인",
      stable: "안정형",
      stableDesc: "든든한 연인",
      free: "자유형",
      freeDesc: "자유로운 연인",
      caring: "배려형",
      caringDesc: "따뜻한 연인",
      fun: "재미형",
      funDesc: "유쾌한 연인",
      timeRequired: "약 1분 소요",
      questions: "5개 질문",
      accurate: "정확한 분석",
      shareable: "결과 공유",
      startTest: "테스트 시작하기",
      retakeTest: "다시 테스트하기",
      metaTitle: "연애스타일테스트 - SimpleTest.kr",
      metaDescription: "5가지 질문으로 알아보는 나의 연애 스타일! 로맨틱형, 열정형, 안정형, 자유형, 배려형, 재미형 중 어떤 타입인지 확인해보세요.",
      metaKeywords: "연애스타일테스트, 연애테스트, 연애유형, 사랑테스트, 연애성향, 연애심리",
      ogTitle: "연애스타일테스트 - 나의 연애 스타일은?",
      ogDescription: "5가지 질문으로 알아보는 나의 연애 스타일! 당신만의 특별한 연애 방식을 발견해보세요."
    },
    en: {
      title: "💖 Love Style Test",
      subtitle: "What's My Love Style?",
      description: "Discover your unique way of loving",
      accurateAnalysis: "💝 Accurate Love Style Analysis",
      analysisDescription: "Discover your unique love patterns with 5 questions!\nFind out your true love style and characteristics.",
      romantic: "Romantic Type",
      romanticDesc: "Emotional Lover",
      passionate: "Passionate Type",
      passionateDesc: "Intense Lover",
      stable: "Stable Type",
      stableDesc: "Reliable Lover",
      free: "Free Type",
      freeDesc: "Independent Lover",
      caring: "Caring Type",
      caringDesc: "Nurturing Lover",
      fun: "Fun Type",
      funDesc: "Playful Lover",
      timeRequired: "About 1 minutes",
      questions: "5 questions",
      accurate: "Accurate analysis",
      shareable: "Share results",
      startTest: "Start Test",
      retakeTest: "Retake Test",
      metaTitle: "Love Style Test - SimpleTest.kr",
      metaDescription: "Discover your love style with 5 questions! Find out whether you're a Romantic, Passionate, Stable, Free, Caring, or Fun type lover.",
      metaKeywords: "love style test, relationship test, love type, romance test, dating style, love psychology",
      ogTitle: "Love Style Test - What's My Love Style?",
      ogDescription: "Discover your love style with 5 questions! Find out your unique way of loving."
    }
  };

  const currentContent = texts[language];

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
    <div className="min-h-screen bg-gradient-to-br from-pink-400 via-purple-500 to-red-500 p-4 dark:from-pink-900 dark:via-purple-900 dark:to-red-900">
      <Helmet>
        <title>{currentContent.metaTitle}</title>
        <meta name="description" content={currentContent.metaDescription} />
        <meta name="keywords" content={currentContent.metaKeywords} />
        <meta property="og:title" content={currentContent.ogTitle} />
        <meta property="og:description" content={currentContent.ogDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.simpletest.kr/love-style-test" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={currentContent.ogTitle} />
        <meta name="twitter:description" content={currentContent.ogDescription} />
      </Helmet>

      <div className="max-w-4xl mx-auto">
        {currentStep === 'intro' && (
          <div className="text-center animate-fade-in">
            {/* 상단 광고 */}
            <AdDisplay 
              adSlot="6789012345"
              className="mb-8"
            />

            <div className="mb-8 pt-12">
              <h1 className="text-6xl font-bold text-white mb-4 drop-shadow-lg">
                {currentContent.title}
              </h1>
              <h2 className="text-4xl font-bold text-white/90 mb-2">
                {currentContent.subtitle}
              </h2>
              <p className="text-xl text-white/80 mb-8">
                {currentContent.description}
              </p>
            </div>

            <Card className="bg-white/95 backdrop-blur-sm shadow-2xl border-0 mb-8 hover-scale dark:bg-gray-800/90">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-800 dark:text-white">
                  {currentContent.accurateAnalysis}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600 text-lg leading-relaxed dark:text-gray-300">
                  {currentContent.analysisDescription.split('\n').map((line, index) => (
                    <span key={index}>
                      {line}
                      {index === 0 && <br />}
                    </span>
                  ))}
                </p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6">
                  <div className="text-center p-4 bg-pink-50 rounded-lg dark:bg-pink-900/30">
                    <div className="text-3xl mb-2">🌹</div>
                    <h3 className="font-bold text-pink-800 mb-1 dark:text-pink-300">{currentContent.romantic}</h3>
                    <p className="text-xs text-pink-600 dark:text-pink-400">{currentContent.romanticDesc}</p>
                  </div>
                  <div className="text-center p-4 bg-red-50 rounded-lg dark:bg-red-900/30">
                    <div className="text-3xl mb-2">🔥</div>
                    <h3 className="font-bold text-red-800 mb-1 dark:text-red-300">{currentContent.passionate}</h3>
                    <p className="text-xs text-red-600 dark:text-red-400">{currentContent.passionateDesc}</p>
                  </div>
                  <div className="text-center p-4 bg-blue-50 rounded-lg dark:bg-blue-900/30">
                    <div className="text-3xl mb-2">🏠</div>
                    <h3 className="font-bold text-blue-800 mb-1 dark:text-blue-300">{currentContent.stable}</h3>
                    <p className="text-xs text-blue-600 dark:text-blue-400">{currentContent.stableDesc}</p>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-lg dark:bg-green-900/30">
                    <div className="text-3xl mb-2">🦋</div>
                    <h3 className="font-bold text-green-800 mb-1 dark:text-green-300">{currentContent.free}</h3>
                    <p className="text-xs text-green-600 dark:text-green-400">{currentContent.freeDesc}</p>
                  </div>
                  <div className="text-center p-4 bg-purple-50 rounded-lg dark:bg-purple-900/30">
                    <div className="text-3xl mb-2">💕</div>
                    <h3 className="font-bold text-purple-800 mb-1 dark:text-purple-300">{currentContent.caring}</h3>
                    <p className="text-xs text-purple-600 dark:text-purple-400">{currentContent.caringDesc}</p>
                  </div>
                  <div className="text-center p-4 bg-yellow-50 rounded-lg dark:bg-yellow-900/30">
                    <div className="text-3xl mb-2">🎉</div>
                    <h3 className="font-bold text-yellow-800 mb-1 dark:text-yellow-300">{currentContent.fun}</h3>
                    <p className="text-xs text-yellow-600 dark:text-yellow-400">{currentContent.funDesc}</p>
                  </div>
                </div>

                {/* 중간 광고 */}
                <AdDisplay 
                  adSlot="7890123456"
                  className="my-6"
                />

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-500 mt-6 dark:text-gray-400">
                  <div className="flex flex-col items-center space-y-1">
                    <span>⏱️</span>
                    <span>{currentContent.timeRequired}</span>
                  </div>
                  <div className="flex flex-col items-center space-y-1">
                    <span>❓</span>
                    <span>{currentContent.questions}</span>
                  </div>
                  <div className="flex flex-col items-center space-y-1">
                    <span>🎯</span>
                    <span>{currentContent.accurate}</span>
                  </div>
                  <div className="flex flex-col items-center space-y-1">
                    <span>📱</span>
                    <span>{currentContent.shareable}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Button 
              onClick={handleStartTest}
              size="lg"
              className="bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-full text-xl shadow-lg transition-all duration-300 hover:scale-105"
            >
              {currentContent.startTest}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        )}

        {currentStep === 'test' && (
          <div>
            {/* 테스트 중간 광고 */}
            <AdDisplay 
              adSlot="8901234567"
              className="mb-4"
            />
            <LoveStyleQuestions onComplete={handleTestComplete} />
          </div>
        )}

        {currentStep === 'result' && (
          <div className="animate-fade-in">
            {/* 결과 상단 광고 */}
            <AdDisplay 
              adSlot="9012345678"
              className="mb-8"
            />
            
            <LoveStyleResult result={result} onRestart={handleRestart} />
            
            {/* 결과 하단 광고 */}
            <AdDisplay 
              adSlot="0123456789"
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
                {currentContent.retakeTest}
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoveStyleTest;
