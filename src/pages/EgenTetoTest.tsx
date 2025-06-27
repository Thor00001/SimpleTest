
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, RotateCcw } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import EgenTetoQuestion from '@/components/EgenTetoQuestion';
import EgenTetoResult from '@/components/EgenTetoResult';
import { useLanguage } from '@/contexts/LanguageContext';

const EgenTetoTest = () => {
  const [currentStep, setCurrentStep] = useState<'intro' | 'gender' | 'test' | 'result'>('intro');
  const [selectedGender, setSelectedGender] = useState<'male' | 'female' | null>(null);
  const [answers, setAnswers] = useState<number[]>([]);
  const [result, setResult] = useState<string>('');
  const { language } = useLanguage();

  const content = {
    ko: {
      title: "에겐 vs 테토",
      subtitle: "나는 어떤 타입일까?",
      description: "당신의 진짜 매력 포인트를 발견해보세요",
      testTitle: "🔥 에겐 vs 테토 테스트",
      testDescription: "요즘 SNS에서 화제인 에겐/테토 테스트!",
      testSubDescription: "당신은 카리스마 넘치는 에겐? 아니면 귀여운 매력의 테토?",
      egenTitle: "에겐",
      egenDescription: "카리스마, 리더십, 강인함",
      tetoTitle: "테토",
      tetoDescription: "귀여움, 다정함, 순수함",
      startButton: "테스트 시작하기",
      genderTitle: "성별을 선택해주세요",
      genderDescription: "더 정확한 분석을 위해 성별을 알려주세요",
      male: "남성",
      maleDescription: "남성용 테스트로 진행",
      female: "여성",
      femaleDescription: "여성용 테스트로 진행",
      backButton: "뒤로 가기",
      restartButton: "다시 테스트하기",
      stats: {
        time: "약 2분 소요",
        questions: "10개 질문",
        accuracy: "정확한 분석",
        share: "SNS 공유"
      }
    },
    en: {
      title: "Egen vs Teto",
      subtitle: "What's My Type?",
      description: "Discover your true charm points",
      testTitle: "🔥 Egen vs Teto Test",
      testDescription: "The trending Egen/Teto test on social media!",
      testSubDescription: "Are you a charismatic Egen or a cute and charming Teto?",
      egenTitle: "Egen",
      egenDescription: "Charisma, Leadership, Strength",
      tetoTitle: "Teto",
      tetoDescription: "Cuteness, Kindness, Purity",
      startButton: "Start Test",
      genderTitle: "Please select your gender",
      genderDescription: "Tell us your gender for more accurate analysis",
      male: "Male",
      maleDescription: "Proceed with male test",
      female: "Female",
      femaleDescription: "Proceed with female test",
      backButton: "Go Back",
      restartButton: "Take Test Again",
      stats: {
        time: "About 2 minutes",
        questions: "10 questions",
        accuracy: "Accurate analysis",
        share: "SNS sharing"
      }
    }
  };

  const currentContent = content[language];

  const handleStartTest = () => {
    setCurrentStep('gender');
  };

  const handleGenderSelect = (gender: 'male' | 'female') => {
    setSelectedGender(gender);
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
    setSelectedGender(null);
    setAnswers([]);
    setResult('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 p-4 dark:from-blue-900 dark:via-purple-900 dark:to-pink-900">
      <Helmet>
        <title>{language === 'ko' ? '에겐남 vs 테토남 테스트 - SimpleTest.kr' : 'Egen vs Teto Test - SimpleTest.kr'}</title>
        <meta name="description" content={language === 'ko' ? 'SNS에서 화제인 에겐남/테토남 테스트! 당신은 카리스마 넘치는 에겐남인가요, 아니면 귀여운 매력의 테토남인가요? 지금 바로 확인해보세요.' : 'The trending Egen/Teto test on social media! Are you a charismatic Egen or a cute and charming Teto? Find out now!'} />
        <meta name="keywords" content={language === 'ko' ? '에겐남, 테토남, 에겐테토, 남자 성격테스트, 매력테스트, 성격분석, 심리테스트' : 'Egen, Teto, personality test, charm test, character analysis, psychology test'} />
        <meta property="og:title" content={language === 'ko' ? '에겐남 vs 테토남 테스트 - 나는 어떤 타입일까?' : 'Egen vs Teto Test - What\'s My Type?'} />
        <meta property="og:description" content={language === 'ko' ? 'SNS에서 화제인 에겐남/테토남 테스트! 당신의 진짜 매력 포인트를 발견해보세요.' : 'The trending Egen/Teto test on social media! Discover your true charm points.'} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://simpletest.kr/egen-teto-test" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={language === 'ko' ? '에겐남 vs 테토남 테스트 - 나는 어떤 타입일까?' : 'Egen vs Teto Test - What\'s My Type?'} />
        <meta name="twitter:description" content={language === 'ko' ? 'SNS에서 화제인 에겐남/테토남 테스트! 당신의 진짜 매력 포인트를 발견해보세요.' : 'The trending Egen/Teto test on social media! Discover your true charm points.'} />
      </Helmet>
      <div className="max-w-4xl mx-auto">
        {currentStep === 'intro' && (
          <div className="text-center animate-fade-in">
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

            <Card className="bg-white/90 backdrop-blur-sm shadow-2xl border-0 mb-8 hover-scale dark:bg-gray-800/90">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-800 dark:text-white">
                  {currentContent.testTitle}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600 text-lg leading-relaxed dark:text-gray-300">
                  {currentContent.testDescription}<br/>
                  {currentContent.testSubDescription}
                </p>
                <div className="grid grid-cols-2 gap-6 mt-6">
                  <div className="text-center p-4 bg-blue-50 rounded-lg dark:bg-blue-900/30">
                    <div className="text-4xl mb-2">😎</div>
                    <h3 className="font-bold text-blue-800 mb-2 dark:text-blue-300">{currentContent.egenTitle}</h3>
                    <p className="text-sm text-blue-600 dark:text-blue-400">{currentContent.egenDescription}</p>
                  </div>
                  <div className="text-center p-4 bg-pink-50 rounded-lg dark:bg-pink-900/30">
                    <div className="text-4xl mb-2">🥰</div>
                    <h3 className="font-bold text-pink-800 mb-2 dark:text-pink-300">{currentContent.tetoTitle}</h3>
                    <p className="text-sm text-pink-600 dark:text-pink-400">{currentContent.tetoDescription}</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-500 mt-6 dark:text-gray-400">
                  <div className="flex items-center space-x-2">
                    <span>⏱️</span>
                    <span>{currentContent.stats.time}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span>❓</span>
                    <span>{currentContent.stats.questions}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span>🎯</span>
                    <span>{currentContent.stats.accuracy}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span>📱</span>
                    <span>{currentContent.stats.share}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Button 
              onClick={handleStartTest}
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-full text-xl shadow-lg transition-all duration-300 hover:scale-105"
            >
              {currentContent.startButton}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        )}

        {currentStep === 'gender' && (
          <div className="text-center animate-fade-in">
            <div className="mb-8 pt-12">
              <h2 className="text-4xl font-bold text-white mb-4">
                {currentContent.genderTitle}
              </h2>
              <p className="text-xl text-white/80 mb-8">
                {currentContent.genderDescription}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <Card 
                className="bg-white/90 backdrop-blur-sm shadow-2xl border-0 cursor-pointer transition-all duration-300 hover:scale-105 dark:bg-gray-800/90"
                onClick={() => handleGenderSelect('male')}
              >
                <CardContent className="p-8 text-center">
                  <div className="text-6xl mb-4">👨</div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2 dark:text-white">{currentContent.male}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{currentContent.maleDescription}</p>
                </CardContent>
              </Card>

              <Card 
                className="bg-white/90 backdrop-blur-sm shadow-2xl border-0 cursor-pointer transition-all duration-300 hover:scale-105 dark:bg-gray-800/90"
                onClick={() => handleGenderSelect('female')}
              >
                <CardContent className="p-8 text-center">
                  <div className="text-6xl mb-4">👩</div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2 dark:text-white">{currentContent.female}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{currentContent.femaleDescription}</p>
                </CardContent>
              </Card>
            </div>

            <Button 
              onClick={() => setCurrentStep('intro')}
              variant="outline"
              size="lg"
              className="bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30 font-bold py-3 px-6 rounded-full"
            >
              {currentContent.backButton}
            </Button>
          </div>
        )}

        {currentStep === 'test' && (
          <EgenTetoQuestion onComplete={handleTestComplete} gender={selectedGender} />
        )}

        {currentStep === 'result' && (
          <div className="animate-fade-in">
            <EgenTetoResult result={result} gender={selectedGender} onRestart={handleRestart} />
            <div className="text-center mt-8">
              <Button 
                onClick={handleRestart}
                variant="outline"
                size="lg"
                className="bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30 font-bold py-3 px-6 rounded-full"
              >
                <RotateCcw className="mr-2 h-5 w-5" />
                {currentContent.restartButton}
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default EgenTetoTest;
