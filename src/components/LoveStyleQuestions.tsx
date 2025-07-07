
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

interface LoveStyleQuestionsProps {
  onComplete: (answers: number[], result: string) => void;
}

const LoveStyleQuestions = ({ onComplete }: LoveStyleQuestionsProps) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const { language } = useLanguage();

  const questions = {
    ko: [
      {
        question: "연인과 데이트할 때 가장 중요하게 생각하는 것은?",
        options: [
          "서로 깊은 대화를 나누는 것",
          "함께 즐거운 활동을 하는 것",
          "로맨틱한 분위기를 만드는 것",
          "편안하고 자연스러운 시간"
        ]
      },
      {
        question: "사랑을 표현하는 나만의 방식은?",
        options: [
          "진심 어린 말로 표현",
          "작은 선물이나 서프라이즈",
          "스킨십과 애정표현",
          "함께하는 시간과 관심"
        ]
      },
      {
        question: "연인과 갈등이 생겼을 때 나는?",
        options: [
          "솔직하게 대화로 해결하려 한다",
          "시간을 두고 차근차근 풀어간다",
          "먼저 사과하고 화해하려 한다",
          "감정이 진정될 때까지 기다린다"
        ]
      },
      {
        question: "이상적인 연애 관계는?",
        options: [
          "서로를 완전히 이해하는 관계",
          "함께 성장해가는 파트너십",
          "열정적이고 로맨틱한 사랑",
          "편안하고 안정적인 관계"
        ]
      },
      {
        question: "연인에게 가장 바라는 것은?",
        options: [
          "나를 있는 그대로 받아주는 것",
          "함께 꿈을 꾸고 노력하는 것",
          "나에게만 집중해주는 것",
          "서로의 개인 시간을 존중하는 것"
        ]
      }
    ],
    en: [
      {
        question: "What do you consider most important when dating?",
        options: [
          "Having deep conversations with each other",
          "Doing fun activities together",
          "Creating a romantic atmosphere",
          "Comfortable and natural time"
        ]
      },
      {
        question: "What's your unique way of expressing love?",
        options: [
          "Express with sincere words",
          "Small gifts or surprises",
          "Physical touch and affection",
          "Spending time together and showing interest"
        ]
      },
      {
        question: "When conflicts arise with your partner, I...",
        options: [
          "Try to solve it honestly through conversation",
          "Take time and work it out step by step",
          "Apologize first and try to reconcile",
          "Wait until emotions calm down"
        ]
      },
      {
        question: "What's an ideal romantic relationship?",
        options: [
          "A relationship where we completely understand each other",
          "A partnership where we grow together",
          "Passionate and romantic love",
          "A comfortable and stable relationship"
        ]
      },
      {
        question: "What do you want most from your partner?",
        options: [
          "Accepting me as I am",
          "Dreaming and working together",
          "Focusing only on me",
          "Respecting each other's personal time"
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
      // Calculate result
      const result = calculateLoveStyle(newAnswers);
      onComplete(newAnswers, result);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setAnswers(answers.slice(0, -1));
    }
  };

  const calculateLoveStyle = (allAnswers: number[]): string => {
    const counts = [0, 0, 0, 0];
    allAnswers.forEach(answer => counts[answer]++);
    
    const maxCount = Math.max(...counts);
    const resultIndex = counts.indexOf(maxCount);
    
    const styles = ['DEEP', 'ACTIVE', 'ROMANTIC', 'COMFORTABLE'];
    return styles[resultIndex];
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
              className="w-full text-left justify-start h-auto py-4 px-6 text-wrap whitespace-normal leading-relaxed border-2 border-gray-200 hover:border-pink-400 hover:bg-pink-50 transition-all duration-200 dark:border-gray-600 dark:hover:border-pink-400 dark:hover:bg-pink-900/20 dark:text-gray-200"
            >
              <span className="text-lg font-medium mr-3 text-pink-600 dark:text-pink-400">
                {String.fromCharCode(65 + index)}
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

export default LoveStyleQuestions;
