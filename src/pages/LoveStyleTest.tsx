
import { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { ArrowRight, ChevronLeft, ChevronRight, RotateCcw, Share2, Download } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '@/contexts/LanguageContext';

const LoveStyleTest = () => {
  const [currentStep, setCurrentStep] = useState<'intro' | 'test' | 'result'>('intro');
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [result, setResult] = useState<any>(null);
  const resultRef = useRef<HTMLDivElement>(null);
  const { language } = useLanguage();

  const content = {
    ko: {
      title: "💖 연애 스타일 테스트",
      subtitle: "나만의 사랑 방식은?",
      description: "당신의 연애 스타일을 분석하고 맞춤형 조언을 받아보세요",
      testTitle: "💕 나의 연애 스타일 알아보기",
      testDescription: "8가지 질문을 통해 당신만의 독특한 연애 스타일을 발견해보세요.",
      testSubDescription: "로맨틱, 플레이풀, 컴패니언, 인디펜던트 중 어떤 타입일까요?",
      startButton: "테스트 시작하기",
      shareButton: "테스트 공유하기",
      downloadButton: "이미지로 저장",
      restartButton: "다시 테스트하기",
      nextButton: "다음",
      prevButton: "이전",
      resultButton: "결과 보기",
      styles: {
        romantic: "로맨틱",
        playful: "플레이풀", 
        companion: "컴패니언",
        independent: "인디펜던트"
      },
      resultTitle: "당신의 연애 스타일입니다",
      analysisTitle: "연애 스타일 분석",
      traitsTitle: "주요 특성",
      adviceTitle: "💡 연애 조언"
    },
    en: {
      title: "💖 Love Style Test",
      subtitle: "What's My Love Style?",
      description: "Analyze your love style and receive personalized advice",
      testTitle: "💕 Discover My Love Style",
      testDescription: "Discover your unique love style through 8 questions.",
      testSubDescription: "Which type are you among Romantic, Playful, Companion, or Independent?",
      startButton: "Start Test",
      shareButton: "Share Test",
      downloadButton: "Save as Image",
      restartButton: "Take Test Again",
      nextButton: "Next",
      prevButton: "Previous",
      resultButton: "View Results",
      styles: {
        romantic: "Romantic",
        playful: "Playful", 
        companion: "Companion",
        independent: "Independent"
      },
      resultTitle: "This is your love style",
      analysisTitle: "Love Style Analysis",
      traitsTitle: "Key Traits",
      adviceTitle: "💡 Love Advice"
    }
  };

  const questions = {
    ko: [
      {
        question: "이상적인 데이트는?",
        options: [
          "로맨틱한 레스토랑에서 촛불 디너",
          "신나는 놀이공원이나 액티비티",
          "조용한 카페에서 깊은 대화",
          "집에서 영화 보며 편안하게"
        ]
      },
      {
        question: "연인과 갈등이 생겼을 때 당신의 반응은?",
        options: [
          "즉시 대화로 해결하려 한다",
          "시간을 두고 차분히 생각한다",
          "감정을 솔직하게 표현한다",
          "일단 피하고 나중에 생각한다"
        ]
      },
      {
        question: "사랑을 표현하는 방식은?",
        options: [
          "말로 자주 사랑한다고 표현",
          "행동으로 보여준다",
          "선물이나 깜짝 이벤트로",
          "함께 있는 시간 자체로"
        ]
      },
      {
        question: "연인의 어떤 모습을 가장 중요하게 생각하나요?",
        options: [
          "나를 이해하고 공감해주는 모습",
          "함께 즐겁게 놀 수 있는 모습",
          "안정적이고 믿을 수 있는 모습",
          "독립적이고 자신만의 매력이 있는 모습"
        ]
      },
      {
        question: "연애에서 가장 중요한 것은?",
        options: [
          "서로에 대한 깊은 이해",
          "함께하는 즐거운 시간",
          "서로를 향한 변함없는 사랑",
          "개인의 자유와 공간 존중"
        ]
      },
      {
        question: "연인과의 미래를 생각할 때?",
        options: [
          "구체적인 계획을 함께 세운다",
          "그때그때 자연스럽게 흘러가길 원한다",
          "로맨틱한 상상을 자주 한다",
          "현재에 충실하며 살아간다"
        ]
      },
      {
        question: "연인의 관심을 끌고 싶을 때?",
        options: [
          "진솔한 대화를 시도한다",
          "재미있는 활동을 제안한다",
          "특별한 이벤트를 준비한다",
          "자연스럽게 어필한다"
        ]
      },
      {
        question: "질투를 느낄 때의 반응은?",
        options: [
          "솔직하게 감정을 이야기한다",
          "은근히 신경쓰이지만 참는다",
          "상대방에게 더 잘해준다",
          "별로 신경쓰지 않는다"
        ]
      }
    ],
    en: [
      {
        question: "What's your ideal date?",
        options: [
          "Romantic candlelit dinner at a restaurant",
          "Fun amusement park or activities",
          "Deep conversation at a quiet cafe",
          "Watching movies comfortably at home"
        ]
      },
      {
        question: "How do you react when there's conflict with your partner?",
        options: [
          "Try to resolve it immediately through dialogue",
          "Take time to think calmly",
          "Express emotions honestly",
          "Avoid it for now and think about it later"
        ]
      },
      {
        question: "How do you express love?",
        options: [
          "Often say 'I love you' verbally",
          "Show it through actions",
          "Through gifts or surprise events",
          "Through the time spent together"
        ]
      },
      {
        question: "What aspect of your partner do you value most?",
        options: [
          "Understanding and empathizing with me",
          "Being able to have fun together",
          "Being stable and trustworthy",
          "Being independent with unique charm"
        ]
      },
      {
        question: "What's most important in a relationship?",
        options: [
          "Deep understanding of each other",
          "Enjoyable time together",
          "Unchanging love for each other",
          "Respecting personal freedom and space"
        ]
      },
      {
        question: "When thinking about the future with your partner?",
        options: [
          "Make specific plans together",
          "Want it to flow naturally as it comes",
          "Often have romantic fantasies",
          "Live faithfully in the present"
        ]
      },
      {
        question: "When you want to get your partner's attention?",
        options: [
          "Try sincere conversation",
          "Suggest fun activities",
          "Prepare special events",
          "Appeal naturally"
        ]
      },
      {
        question: "How do you react when feeling jealous?",
        options: [
          "Talk about feelings honestly",
          "Secretly bothered but endure it",
          "Treat the other person even better",
          "Don't really care much"
        ]
      }
    ]
  };

  const loveStyles = {
    ROMANTIC: {
      title: { ko: "로맨틱 러버", en: "Romantic Lover" },
      emoji: "🌹",
      description: { 
        ko: "당신은 진정한 로맨티스트입니다! 사랑을 아름답고 특별한 감정으로 여기며, 연인과의 관계에서 로맨틱한 순간들을 매우 소중히 여깁니다.",
        en: "You are a true romanticist! You view love as a beautiful and special emotion, and you cherish romantic moments in your relationship with your partner."
      },
      traits: { 
        ko: ["로맨틱", "감성적", "이상주의적", "헌신적"],
        en: ["Romantic", "Emotional", "Idealistic", "Devoted"]
      },
      advice: { 
        ko: "때로는 현실적인 면도 고려해보세요. 완벽한 사랑보다는 진실한 사랑이 더 아름답답니다.",
        en: "Sometimes consider the practical side too. Genuine love is more beautiful than perfect love."
      },
      color: "from-pink-500 to-rose-500"
    },
    PLAYFUL: {
      title: { ko: "플레이풀 러버", en: "Playful Lover" },
      emoji: "🎪",
      description: { 
        ko: "당신은 사랑을 즐기는 사람입니다! 연애를 재미있고 신나는 모험으로 여기며, 연인과 함께 다양한 경험을 쌓는 것을 좋아합니다.",
        en: "You are someone who enjoys love! You view dating as a fun and exciting adventure, and you love building various experiences with your partner."
      },
      traits: { 
        ko: ["유쾌함", "모험적", "자유로움", "활발함"],
        en: ["Cheerful", "Adventurous", "Free-spirited", "Lively"]
      },
      advice: { 
        ko: "때로는 진지한 대화도 필요해요. 재미도 중요하지만 깊이 있는 관계도 고려해보세요.",
        en: "Sometimes serious conversations are needed too. Fun is important, but consider deeper relationships as well."
      },
      color: "from-orange-500 to-yellow-500"
    },
    COMPANION: {
      title: { ko: "컴패니언 러버", en: "Companion Lover" },
      emoji: "🤝",
      description: { 
        ko: "당신은 진정한 동반자를 원합니다! 연인과의 깊은 유대감과 서로에 대한 이해를 가장 중요하게 여기는 성숙한 연애 스타일입니다.",
        en: "You want a true companion! You have a mature love style that values deep bonds with your partner and mutual understanding most."
      },
      traits: { 
        ko: ["이해심", "안정적", "신뢰성", "성숙함"],
        en: ["Understanding", "Stable", "Reliable", "Mature"]
      },
      advice: { 
        ko: "가끔은 즉흥적이고 스릴 있는 순간도 만들어보세요. 예측 가능함도 좋지만 새로움도 필요해요.",
        en: "Sometimes create spontaneous and thrilling moments. Predictability is good, but novelty is needed too."
      },
      color: "from-blue-500 to-indigo-500"
    },
    INDEPENDENT: {
      title: { ko: "인디펜던트 러버", en: "Independent Lover" },
      emoji: "🦋",
      description: { 
        ko: "당신은 독립적인 사랑을 추구합니다! 서로의 개인적인 공간과 자유를 존중하면서도 사랑하는 균형 잡힌 연애 스타일을 가지고 있습니다.",
        en: "You pursue independent love! You have a balanced love style that respects each other's personal space and freedom while still loving."
      },
      traits: { 
        ko: ["독립적", "자유로움", "균형감", "존중"],
        en: ["Independent", "Free", "Balanced", "Respectful"]
      },
      advice: { 
        ko: "때로는 더 가까워지려는 노력도 필요해요. 거리감이 너무 생기지 않도록 주의하세요.",
        en: "Sometimes efforts to get closer are needed too. Be careful not to create too much distance."
      },
      color: "from-purple-500 to-indigo-500"
    }
  };

  const currentContent = content[language];
  const currentQuestions = questions[language];

  const calculateResult = () => {
    const styleScores = { ROMANTIC: 0, PLAYFUL: 0, COMPANION: 0, INDEPENDENT: 0 };
    
    answers.forEach((answer, index) => {
      switch (answer) {
        case 0:
          if (index % 2 === 0) styleScores.ROMANTIC++;
          else styleScores.COMPANION++;
          break;
        case 1:
          if (index % 2 === 0) styleScores.PLAYFUL++;
          else styleScores.INDEPENDENT++;
          break;
        case 2:
          if (index % 2 === 0) styleScores.ROMANTIC++;
          else styleScores.PLAYFUL++;
          break;
        case 3:
          if (index % 2 === 0) styleScores.INDEPENDENT++;
          else styleScores.COMPANION++;
          break;
      }
    });

    const maxScore = Math.max(...Object.values(styleScores));
    const resultKey = Object.keys(styleScores).find(key => styleScores[key as keyof typeof styleScores] === maxScore) as keyof typeof loveStyles;
    
    const selectedStyle = loveStyles[resultKey];
    setResult({
      ...selectedStyle,
      title: selectedStyle.title[language],
      description: selectedStyle.description[language],
      traits: selectedStyle.traits[language],
      advice: selectedStyle.advice[language]
    });
    setCurrentStep('result');
  };

  const handleShare = async () => {
    const testUrl = `${window.location.origin}/love-style-test`;
    const shareText = language === 'ko' 
      ? `연애 스타일 테스트 결과\n${result ? `나는 ${result.title}!` : ''}\n\n${result ? result.description : ''}\n\n테스트 해보기: ${testUrl}`
      : `Love Style Test Result\n${result ? `I am a ${result.title}!` : ''}\n\n${result ? result.description : ''}\n\nTake the test: ${testUrl}`;
    
    if (navigator.share) {
      try {
        await navigator.share({
          title: language === 'ko' ? '연애 스타일 테스트 결과' : 'Love Style Test Result',
          text: shareText,
          url: testUrl
        });
      } catch (error) {
        console.log('공유 취소됨');
      }
    } else {
      try {
        await navigator.clipboard.writeText(shareText);
        alert(language === 'ko' ? '테스트 링크가 클립보드에 복사되었습니다!' : 'Test link copied to clipboard!');
      } catch (error) {
        console.error('클립보드 복사 실패:', error);
        const textArea = document.createElement('textarea');
        textArea.value = shareText;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        alert(language === 'ko' ? '테스트 링크가 클립보드에 복사되었습니다!' : 'Test link copied to clipboard!');
      }
    }
  };

  const handleDownload = async () => {
    if (!resultRef.current) return;

    try {
      const html2canvas = (await import('html2canvas')).default;
      const canvas = await html2canvas(resultRef.current, {
        backgroundColor: '#ffffff',
        scale: 2,
        useCORS: true,
        allowTaint: true,
        width: resultRef.current.offsetWidth,
        height: resultRef.current.offsetHeight
      });

      const link = document.createElement('a');
      link.download = language === 'ko' 
        ? `연애스타일_${result.title}_결과.png`
        : `LoveStyle_${result.title.replace(/\s+/g, '_')}_Result.png`;
      link.href = canvas.toDataURL('image/png');
      link.click();
    } catch (error) {
      console.error('이미지 저장 실패:', error);
      alert(language === 'ko' ? '이미지 저장에 실패했습니다. 스크린샷을 이용해 주세요.' : 'Failed to save image. Please use screenshot.');
    }
  };

  const handleAnswerSelect = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
  };

  const handleNext = () => {
    if (selectedAnswer === null) return;
    
    const newAnswers = [...answers, selectedAnswer];
    setAnswers(newAnswers);
    setSelectedAnswer(null);

    if (currentQuestion < currentQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      calculateResult();
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setAnswers(answers.slice(0, -1));
      setSelectedAnswer(answers[currentQuestion - 1] || null);
    }
  };

  const handleRestart = () => {
    setCurrentStep('intro');
    setCurrentQuestion(0);
    setAnswers([]);
    setSelectedAnswer(null);
    setResult(null);
  };

  const progress = ((currentQuestion + 1) / currentQuestions.length) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-500 via-pink-500 to-red-500 p-4 dark:from-purple-900 dark:via-pink-900 dark:to-red-900">
      <Helmet>
        <title>{language === 'ko' ? '연애 스타일 테스트 - SimpleTest.kr' : 'Love Style Test - SimpleTest.kr'}</title>
        <meta name="description" content={language === 'ko' ? '8가지 질문으로 알아보는 나만의 연애 스타일! 로맨틱, 플레이풀, 컴패니언, 인디펜던트 중 어떤 타입인지 확인해보세요.' : 'Discover your unique love style through 8 questions! Find out which type you are among Romantic, Playful, Companion, and Independent.'} />
        <meta name="keywords" content={language === 'ko' ? '연애 스타일, 연애 테스트, 사랑 유형, 연애 성향, 로맨스 테스트, 심리테스트' : 'love style, dating test, love type, relationship tendency, romance test, psychology test'} />
        <meta property="og:title" content={language === 'ko' ? '연애 스타일 테스트 - 나만의 사랑 방식은?' : 'Love Style Test - What\'s My Love Style?'} />
        <meta property="og:description" content={language === 'ko' ? '8가지 질문으로 알아보는 나만의 연애 스타일! 당신만의 독특한 사랑 방식을 발견해보세요.' : 'Discover your unique love style through 8 questions! Find your own unique way of loving.'} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://simpletest.kr/love-style-test" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={language === 'ko' ? '연애 스타일 테스트 - 나만의 사랑 방식은?' : 'Love Style Test - What\'s My Love Style?'} />
        <meta name="twitter:description" content={language === 'ko' ? '8가지 질문으로 알아보는 나만의 연애 스타일! 당신만의 독특한 사랑 방식을 발견해보세요.' : 'Discover your unique love style through 8 questions! Find your own unique way of loving.'} />
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

            <Card className="bg-white/95 backdrop-blur-sm shadow-2xl border-0 mb-8 dark:bg-gray-800/95">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-800 dark:text-gray-200">
                  {currentContent.testTitle}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600 text-lg leading-relaxed dark:text-gray-300">
                  {currentContent.testDescription}<br/>
                  {currentContent.testSubDescription}
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                  <div className="text-center p-3 bg-pink-50 rounded-lg dark:bg-pink-900/30">
                    <div className="text-3xl mb-1">🌹</div>
                    <h4 className="font-bold text-pink-800 dark:text-pink-300">{currentContent.styles.romantic}</h4>
                  </div>
                  <div className="text-center p-3 bg-orange-50 rounded-lg dark:bg-orange-900/30">
                    <div className="text-3xl mb-1">🎪</div>
                    <h4 className="font-bold text-orange-800 dark:text-orange-300">{currentContent.styles.playful}</h4>
                  </div>
                  <div className="text-center p-3 bg-blue-50 rounded-lg dark:bg-blue-900/30">
                    <div className="text-3xl mb-1">🤝</div>
                    <h4 className="font-bold text-blue-800 dark:text-blue-300">{currentContent.styles.companion}</h4>
                  </div>
                  <div className="text-center p-3 bg-purple-50 rounded-lg dark:bg-purple-900/30">
                    <div className="text-3xl mb-1">🦋</div>
                    <h4 className="font-bold text-purple-800 dark:text-purple-300">{currentContent.styles.independent}</h4>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Button 
              onClick={() => setCurrentStep('test')}
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-4 px-8 rounded-full text-xl shadow-lg transition-all duration-300 hover:scale-105"
            >
              {currentContent.startButton}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        )}

        {currentStep === 'test' && (
          <div className="animate-fade-in">
            <div className="mb-8">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold text-white">
                  {language === 'ko' ? `질문 ${currentQuestion + 1} / ${currentQuestions.length}` : `Question ${currentQuestion + 1} / ${currentQuestions.length}`}
                </h2>
                <span className="text-white/80 text-lg font-semibold">
                  {Math.round(progress)}%
                </span>
              </div>
              <Progress value={progress} className="h-3 bg-white/20" />
            </div>

            <Card className="bg-white/95 backdrop-blur-sm shadow-2xl border-0 mb-8">
              <CardHeader>
                <CardTitle className="text-xl text-gray-800 leading-relaxed">
                  {currentQuestions[currentQuestion].question}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {currentQuestions[currentQuestion].options.map((option, index) => (
                  <Button
                    key={index}
                    variant={selectedAnswer === index ? "default" : "outline"}
                    className={`w-full text-left p-6 h-auto transition-all duration-200 ${
                      selectedAnswer === index 
                        ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg scale-105' 
                        : 'bg-white border-2 border-gray-200 text-gray-700 hover:border-purple-300 hover:bg-purple-50 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700'
                    }`}
                    onClick={() => handleAnswerSelect(index)}
                  >
                    <span className="font-medium">{option}</span>
                  </Button>
                ))}
              </CardContent>
            </Card>

            <div className="flex justify-between">
              <Button
                onClick={handlePrevious}
                disabled={currentQuestion === 0}
                variant="outline"
                size="lg"
                className="bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30 disabled:opacity-50"
              >
                <ChevronLeft className="mr-2 h-5 w-5" />
                {currentContent.prevButton}
              </Button>
              
              <Button
                onClick={handleNext}
                disabled={selectedAnswer === null}
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold disabled:opacity-50"
              >
                {currentQuestion === currentQuestions.length - 1 ? currentContent.resultButton : currentContent.nextButton}
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        )}

        {currentStep === 'result' && result && (
          <div className="animate-fade-in space-y-8">
            <div className="bg-white rounded-lg p-8 shadow-2xl" ref={resultRef}>
              <div className="text-center mb-6">
                <div className="text-6xl mb-4">{result.emoji}</div>
                <h1 className="text-4xl font-bold text-gray-800 mb-2">{result.title}</h1>
                <p className="text-xl text-gray-600 mb-4">{currentContent.resultTitle}</p>
              </div>

              <Card className={`bg-gradient-to-br ${result.color} border-0 shadow-lg text-white mb-6`}>
                <CardHeader>
                  <CardTitle className="text-2xl text-center text-white">{currentContent.analysisTitle}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-lg leading-relaxed text-white">
                    {result.description}
                  </p>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-white">{currentContent.traitsTitle}</h3>
                    <div className="flex flex-wrap gap-2">
                      {result.traits.map((trait: string, index: number) => (
                        <span key={index} className="bg-white/30 text-white px-3 py-1 rounded-full text-sm border border-white/50">
                          {trait}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="bg-white/20 p-4 rounded-lg border border-white/30">
                    <h3 className="text-xl font-semibold mb-2 text-white">{currentContent.adviceTitle}</h3>
                    <p className="text-white">{result.advice}</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-white/95 backdrop-blur-sm shadow-xl border-0 dark:bg-gray-800/95">
              <CardContent className="pt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Button 
                    onClick={handleShare}
                    className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-bold"
                    size="lg"
                  >
                    <Share2 className="mr-2 h-5 w-5" />
                    {currentContent.shareButton}
                  </Button>
                  
                  <Button 
                    onClick={handleDownload}
                    variant="outline"
                    size="lg"
                    className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 font-bold dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700"
                  >
                    <Download className="mr-2 h-5 w-5" />
                    {currentContent.downloadButton}
                  </Button>
                </div>
              </CardContent>
            </Card>

            <div className="text-center">
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

export default LoveStyleTest;
