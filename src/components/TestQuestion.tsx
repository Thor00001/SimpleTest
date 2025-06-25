
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface TestQuestionProps {
  onComplete: (answers: number[], result: string) => void;
}

const questions = [
  {
    id: 1,
    question: "새로운 사람들과 만날 때 어떤 기분이 드나요?",
    options: [
      "흥미롭고 에너지가 넘친다",
      "약간 긴장되지만 괜찮다",
      "조금 부담스럽다",
      "매우 피곤하다"
    ]
  },
  {
    id: 2,
    question: "주말에 무엇을 하는 것을 선호하나요?",
    options: [
      "친구들과 활발한 활동",
      "소수의 친구와 조용한 시간",
      "혼자서 취미 활동",
      "집에서 휴식"
    ]
  },
  {
    id: 3,
    question: "결정을 내릴 때 주로 무엇을 중시하나요?",
    options: [
      "논리적 분석",
      "직감과 느낌",
      "다른 사람들의 의견",
      "과거 경험"
    ]
  },
  {
    id: 4,
    question: "스트레스를 받을 때 어떻게 행동하나요?",
    options: [
      "문제를 적극적으로 해결한다",
      "누군가와 이야기한다",
      "혼자 생각할 시간을 갖는다",
      "일단 피하고 나중에 생각한다"
    ]
  },
  {
    id: 5,
    question: "새로운 아이디어나 변화에 대해 어떻게 생각하나요?",
    options: [
      "매우 흥미롭고 도전적이다",
      "신중하게 검토해본다",
      "약간 불안하다",
      "가능한 피하고 싶다"
    ]
  },
  {
    id: 6,
    question: "팀 프로젝트에서 주로 어떤 역할을 하나요?",
    options: [
      "리더십을 발휘한다",
      "아이디어를 제공한다",
      "조화를 이루려 노력한다",
      "주어진 일을 성실히 한다"
    ]
  },
  {
    id: 7,
    question: "감정 표현에 대해 어떻게 생각하나요?",
    options: [
      "솔직하게 표현하는 것이 좋다",
      "상황에 따라 조절한다",
      "가능한 감추는 편이다",
      "표현하기 어렵다"
    ]
  },
  {
    id: 8,
    question: "미래에 대해 어떤 태도를 가지고 있나요?",
    options: [
      "구체적인 계획을 세운다",
      "대략적인 방향만 정한다",
      "그때그때 상황을 본다",
      "걱정이 많다"
    ]
  },
  {
    id: 9,
    question: "갈등 상황에서 어떻게 대처하나요?",
    options: [
      "직접적으로 해결하려 한다",
      "중재자 역할을 한다",
      "타협점을 찾으려 한다",
      "가능한 피한다"
    ]
  },
  {
    id: 10,
    question: "새로운 것을 배울 때 어떤 방식을 선호하나요?",
    options: [
      "실습과 경험을 통해",
      "이론을 먼저 이해하고",
      "다른 사람들과 토론하며",
      "혼자서 천천히"
    ]
  },
  {
    id: 11,
    question: "중요한 선택을 할 때 무엇이 가장 영향을 주나요?",
    options: [
      "개인적 가치관",
      "실용적 이익",
      "주변 사람들",
      "안전성"
    ]
  },
  {
    id: 12,
    question: "자신의 성격을 한 마디로 표현한다면?",
    options: [
      "역동적이고 활발함",
      "신중하고 사려깊음",
      "따뜻하고 배려심 많음",
      "독립적이고 자유로움"
    ]
  }
];

const TestQuestion = ({ onComplete }: TestQuestionProps) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);

  const progress = ((currentQuestion + 1) / questions.length) * 100;

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
      // Calculate result
      const result = calculateResult(newAnswers);
      onComplete(newAnswers, result);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setAnswers(answers.slice(0, -1));
      setSelectedAnswer(answers[currentQuestion - 1] || null);
    }
  };

  const calculateResult = (allAnswers: number[]): string => {
    // Simple result calculation based on answer patterns
    const sum = allAnswers.reduce((acc, answer) => acc + answer, 0);
    const average = sum / allAnswers.length;
    
    if (average <= 0.75) return 'LEADER';
    if (average <= 1.25) return 'INNOVATOR';
    if (average <= 1.75) return 'MEDIATOR';
    if (average <= 2.25) return 'ANALYST';
    if (average <= 2.75) return 'SUPPORTER';
    return 'OBSERVER';
  };

  return (
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
                  : 'bg-white border-2 border-gray-200 text-gray-700 hover:border-purple-300 hover:bg-purple-50'
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
  );
};

export default TestQuestion;
