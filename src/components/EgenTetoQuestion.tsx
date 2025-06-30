
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

interface EgenTetoQuestionProps {
  onComplete: (answers: number[], result: string) => void;
  gender?: 'male' | 'female' | null;
}

const EgenTetoQuestion = ({ onComplete, gender }: EgenTetoQuestionProps) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const { language } = useLanguage();

  const questions = {
    ko: [
      {
        question: "친구들과 있을 때 나는...",
        options: [
          "주로 대화를 이끌어가는 편이다",
          "조용히 듣고 있는 편이다"
        ]
      },
      {
        question: "새로운 사람을 만날 때 나는...",
        options: [
          "먼저 다가가서 인사한다",
          "상대방이 다가올 때까지 기다린다"
        ]
      },
      {
        question: "갈등 상황에서 나는...",
        options: [
          "직접적으로 문제를 해결하려고 한다",
          "조화를 위해 양보하는 편이다"
        ]
      },
      {
        question: "데이트 장소를 정할 때 나는...",
        options: [
          "내가 계획을 세워서 제안한다",
          "상대방의 의견을 먼저 들어본다"
        ]
      },
      {
        question: "스트레스를 받을 때 나는...",
        options: [
          "운동이나 활동적인 것으로 해소한다",
          "혼자만의 시간을 가지며 휴식한다"
        ]
      },
      {
        question: "팀 프로젝트에서 나는...",
        options: [
          "리더 역할을 맡는 것을 좋아한다",
          "팀원으로서 협력하는 것을 선호한다"
        ]
      },
      {
        question: "연인과의 관계에서 나는...",
        options: [
          "확실하고 분명한 표현을 선호한다",
          "은은하고 섬세한 표현을 선호한다"
        ]
      },
      {
        question: "어려운 결정을 내려야 할 때 나는...",
        options: [
          "빠르게 결정을 내리는 편이다",
          "충분히 고민한 후 결정한다"
        ]
      },
      {
        question: "친구가 고민 상담을 할 때 나는...",
        options: [
          "구체적인 해결책을 제시한다",
          "공감하고 위로해준다"
        ]
      },
      {
        question: "나의 매력 포인트는...",
        options: [
          "자신감 있고 당당한 모습",
          "따뜻하고 다정한 모습"
        ]
      }
    ],
    en: [
      {
        question: "When I'm with friends, I...",
        options: [
          "Usually lead the conversation",
          "Tend to listen quietly"
        ]
      },
      {
        question: "When meeting new people, I...",
        options: [
          "Approach them first and introduce myself",
          "Wait for them to approach me"
        ]
      },
      {
        question: "In conflict situations, I...",
        options: [
          "Try to solve problems directly",
          "Tend to compromise for harmony"
        ]
      },
      {
        question: "When deciding on a date location, I...",
        options: [
          "Make plans and suggest them",
          "Ask for the other person's opinion first"
        ]
      },
      {
        question: "When I'm stressed, I...",
        options: [
          "Relieve it through exercise or activities",
          "Take alone time and rest"
        ]
      },
      {
        question: "In team projects, I...",
        options: [
          "Like to take on leadership roles",
          "Prefer to cooperate as a team member"
        ]
      },
      {
        question: "In relationships, I prefer...",
        options: [
          "Clear and definite expressions",
          "Subtle and delicate expressions"
        ]
      },
      {
        question: "When making difficult decisions, I...",
        options: [
          "Make decisions quickly",
          "Think thoroughly before deciding"
        ]
      },
      {
        question: "When friends come to me for advice, I...",
        options: [
          "Provide specific solutions",
          "Empathize and comfort them"
        ]
      },
      {
        question: "My charm point is...",
        options: [
          "Being confident and bold",
          "Being warm and kind"
        ]
      }
    ]
  };

  const currentQuestions = questions[language];

  const handleAnswer = (answerIndex: number) => {
    const newAnswers = [...answers, answerIndex];
    setAnswers(newAnswers);

    if (currentQuestion < currentQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Calculate result - 수정된 로직
      // 0번 선택지는 테토(강한) 답변, 1번 선택지는 에겐(부드러운) 답변
      const tetoScore = newAnswers.filter(answer => answer === 0).length;
      const egenScore = newAnswers.filter(answer => answer === 1).length;
      
      // Determine base result type
      const baseResult = tetoScore > egenScore ? 'TETO' : 'EGEN';
      
      // Add gender suffix for specific result
      const genderSuffix = gender === 'female' ? '_FEMALE' : '_MALE';
      const finalResult = baseResult + genderSuffix;
      
      onComplete(newAnswers, finalResult);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setAnswers(answers.slice(0, -1));
    }
  };

  const progress = ((currentQuestion + 1) / currentQuestions.length) * 100;

  const texts = {
    ko: {
      questionCounter: (current: number, total: number) => `질문 ${current}/${total}`,
      previousButton: "이전"
    },
    en: {
      questionCounter: (current: number, total: number) => `Question ${current}/${total}`,
      previousButton: "Previous"
    }
  };

  const t = texts[language];

  return (
    <div className="max-w-2xl mx-auto p-4 animate-fade-in">
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <span className="text-white font-medium">
            {t.questionCounter(currentQuestion + 1, currentQuestions.length)}
          </span>
          <span className="text-white/70 text-sm">
            {Math.round(progress)}%
          </span>
        </div>
        <Progress value={progress} className="h-2 bg-white/20" />
      </div>

      <Card className="bg-white/95 backdrop-blur-sm shadow-2xl border-0 dark:bg-gray-800/95">
        <CardHeader>
          <CardTitle className="text-2xl text-center text-gray-800 dark:text-white leading-relaxed">
            {currentQuestions[currentQuestion].question}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {currentQuestions[currentQuestion].options.map((option, index) => (
            <Button
              key={index}
              onClick={() => handleAnswer(index)}
              variant="outline"
              size="lg"
              className="w-full text-left justify-start h-auto py-4 px-6 text-wrap whitespace-normal leading-relaxed border-2 border-gray-200 hover:border-blue-400 hover:bg-blue-50 transition-all duration-200 dark:border-gray-600 dark:hover:border-blue-400 dark:hover:bg-blue-900/20 dark:text-gray-200"
            >
              <span className="text-lg font-medium mr-3 text-blue-600 dark:text-blue-400">
                {index === 0 ? 'A' : 'B'}
              </span>
              <span className="flex-1 text-base">{option}</span>
              <ArrowRight className="ml-2 h-5 w-5 opacity-50" />
            </Button>
          ))}
          
          {currentQuestion > 0 && (
            <div className="pt-4">
              <Button
                onClick={handlePrevious}
                variant="ghost"
                size="lg"
                className="text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                {t.previousButton}
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default EgenTetoQuestion;
