
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { ArrowRight, ChevronLeft, ChevronRight, RotateCcw } from 'lucide-react';

const LoveStyleTest = () => {
  const [currentStep, setCurrentStep] = useState<'intro' | 'test' | 'result'>('intro');
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [result, setResult] = useState<any>(null);

  const questions = [
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
  ];

  const loveStyles = {
    ROMANTIC: {
      title: "로맨틱 러버",
      emoji: "🌹",
      description: "당신은 진정한 로맨티스트입니다! 사랑을 아름답고 특별한 감정으로 여기며, 연인과의 관계에서 로맨틱한 순간들을 매우 소중히 여깁니다.",
      traits: ["로맨틱", "감성적", "이상주의적", "헌신적"],
      advice: "때로는 현실적인 면도 고려해보세요. 완벽한 사랑보다는 진실한 사랑이 더 아름답답니다.",
      color: "from-pink-500 to-rose-500"
    },
    PLAYFUL: {
      title: "플레이풀 러버",
      emoji: "🎪",
      description: "당신은 사랑을 즐기는 사람입니다! 연애를 재미있고 신나는 모험으로 여기며, 연인과 함께 다양한 경험을 쌓는 것을 좋아합니다.",
      traits: ["유쾌함", "모험적", "자유로움", "활발함"],
      advice: "때로는 진지한 대화도 필요해요. 재미도 중요하지만 깊이 있는 관계도 고려해보세요.",
      color: "from-orange-500 to-yellow-500"
    },
    COMPANION: {
      title: "컴패니언 러버",
      emoji: "🤝",
      description: "당신은 진정한 동반자를 원합니다! 연인과의 깊은 유대감과 서로에 대한 이해를 가장 중요하게 여기는 성숙한 연애 스타일입니다.",
      traits: ["이해심", "안정적", "신뢰성", "성숙함"],
      advice: "가끔은 즉흥적이고 스릴 있는 순간도 만들어보세요. 예측 가능함도 좋지만 새로움도 필요해요.",
      color: "from-blue-500 to-indigo-500"
    },
    INDEPENDENT: {
      title: "인디펜던트 러버",
      emoji: "🦋",
      description: "당신은 독립적인 사랑을 추구합니다! 서로의 개인적인 공간과 자유를 존중하면서도 사랑하는 균형 잡힌 연애 스타일을 가지고 있습니다.",
      traits: ["독립적", "자유로움", "균형감", "존중"],
      advice: "때로는 더 가까워지려는 노력도 필요해요. 거리감이 너무 생기지 않도록 주의하세요.",
      color: "from-purple-500 to-indigo-500"
    }
  };

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
    
    setResult(loveStyles[resultKey]);
    setCurrentStep('result');
  };

  const handleAnswerSelect = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
  };

  const handleNext = () => {
    if (selectedAnswer === null) return;
    
    const newAnswers = [...answers, selectedAnswer];
    setAnswers(newAnswers);
    setSelectedAnswer(null);

    if (currentQuestion < questions.length - 1) {
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

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-500 via-pink-500 to-red-500 p-4 dark:from-purple-900 dark:via-pink-900 dark:to-red-900">
      <div className="max-w-4xl mx-auto">
        {currentStep === 'intro' && (
          <div className="text-center animate-fade-in">
            <div className="mb-8 pt-12">
              <h1 className="text-6xl font-bold text-white mb-4 drop-shadow-lg">
                💖 연애 스타일 테스트
              </h1>
              <h2 className="text-4xl font-bold text-white/90 mb-2">
                나만의 사랑 방식은?
              </h2>
              <p className="text-xl text-white/80 mb-8">
                당신의 연애 스타일을 분석하고 맞춤형 조언을 받아보세요
              </p>
            </div>

            <Card className="bg-white/95 backdrop-blur-sm shadow-2xl border-0 mb-8">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-800">
                  💕 나의 연애 스타일 알아보기
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600 text-lg leading-relaxed">
                  8가지 질문을 통해 당신만의 독특한 연애 스타일을 발견해보세요.<br/>
                  로맨틱, 플레이풀, 컴패니언, 인디펜던트 중 어떤 타입일까요?
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                  <div className="text-center p-3 bg-pink-50 rounded-lg dark:bg-pink-900/30">
                    <div className="text-3xl mb-1">🌹</div>
                    <h4 className="font-bold text-pink-800 dark:text-pink-300">로맨틱</h4>
                  </div>
                  <div className="text-center p-3 bg-orange-50 rounded-lg dark:bg-orange-900/30">
                    <div className="text-3xl mb-1">🎪</div>
                    <h4 className="font-bold text-orange-800 dark:text-orange-300">플레이풀</h4>
                  </div>
                  <div className="text-center p-3 bg-blue-50 rounded-lg dark:bg-blue-900/30">
                    <div className="text-3xl mb-1">🤝</div>
                    <h4 className="font-bold text-blue-800 dark:text-blue-300">컴패니언</h4>
                  </div>
                  <div className="text-center p-3 bg-purple-50 rounded-lg dark:bg-purple-900/30">
                    <div className="text-3xl mb-1">🦋</div>
                    <h4 className="font-bold text-purple-800 dark:text-purple-300">인디펜던트</h4>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Button 
              onClick={() => setCurrentStep('test')}
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-4 px-8 rounded-full text-xl shadow-lg transition-all duration-300 hover:scale-105"
            >
              테스트 시작하기
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        )}

        {currentStep === 'test' && (
          <div className="animate-fade-in">
            <div className="mb-8">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold text-white">
                  질문 {currentQuestion + 1} / {questions.length}
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
                  {questions[currentQuestion].question}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {questions[currentQuestion].options.map((option, index) => (
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
                이전
              </Button>
              
              <Button
                onClick={handleNext}
                disabled={selectedAnswer === null}
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold disabled:opacity-50"
              >
                {currentQuestion === questions.length - 1 ? '결과 보기' : '다음'}
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        )}

        {currentStep === 'result' && result && (
          <div className="animate-fade-in space-y-8">
            <div className="text-center">
              <div className="text-8xl mb-4">{result.emoji}</div>
              <h1 className="text-5xl font-bold text-white mb-2">{result.title}</h1>
              <p className="text-xl text-white/80 mb-4">당신의 연애 스타일입니다</p>
            </div>

            <Card className={`bg-gradient-to-br ${result.color} border-0 shadow-2xl text-white`}>
              <CardHeader>
                <CardTitle className="text-2xl text-center">연애 스타일 분석</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-lg leading-relaxed text-white/90">
                  {result.description}
                </p>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3">주요 특성</h3>
                  <div className="flex flex-wrap gap-2">
                    {result.traits.map((trait: string, index: number) => (
                      <span key={index} className="bg-white/20 text-white px-3 py-1 rounded-full text-sm border border-white/30">
                        {trait}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="bg-white/10 p-4 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2">💡 연애 조언</h3>
                  <p className="text-white/90">{result.advice}</p>
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
                다시 테스트하기
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoveStyleTest;
