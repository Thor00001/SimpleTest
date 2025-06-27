
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

interface EgenTetoQuestionProps {
  onComplete: (answers: number[], result: string) => void;
  gender: 'male' | 'female' | null;
}

const EgenTetoQuestion = ({ onComplete, gender }: EgenTetoQuestionProps) => {
  const { language } = useLanguage();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);

  const questions = {
    ko: [
      {
        id: 1,
        question: "친구들 사이에서 당신의 포지션은?",
        options: [
          "자연스럽게 리더 역할을 맡는다",
          "분위기 메이커 역할을 한다",
          "조용히 듣고 공감해준다",
          "귀여운 막내 같은 존재다"
        ]
      },
      {
        id: 2,
        question: "좋아하는 사람 앞에서 어떻게 행동하나요?",
        options: [
          "당당하게 어필한다",
          "쿨한 척하며 관심을 끈다",
          "수줍어하며 살짝 피한다",
          "귀엽게 장난치며 다가간다"
        ]
      },
      {
        id: 3,
        question: "스트레스 받을 때 주로 어떻게 하나요?",
        options: [
          "운동이나 액티브한 활동으로 푼다",
          "친구들과 만나서 이야기한다",
          "혼자만의 시간을 갖는다",
          "좋아하는 것들로 힐링한다"
        ]
      },
      {
        id: 4,
        question: "패션 스타일은 어떤 편인가요?",
        options: [
          "시크하고 강인한 느낌",
          "트렌디하고 멋스러운 스타일",
          "편안하고 자연스러운 룩",
          "귀엽고 포근한 느낌"
        ]
      },
      {
        id: 5,
        question: "갈등 상황에서 어떻게 대처하나요?",
        options: [
          "정면으로 맞서서 해결한다",
          "논리적으로 설득한다",
          "중재자 역할을 하려 한다",
          "피하거나 누군가에게 도움을 청한다"
        ]
      },
      {
        id: 6,
        question: "연애에서 중요하게 생각하는 것은?",
        options: [
          "상대방을 지켜줄 수 있는 힘",
          "서로에 대한 깊은 이해",
          "편안하고 따뜻한 관계",
          "함께 있을 때의 즐거움"
        ]
      },
      {
        id: 7,
        question: "새로운 환경에 적응하는 방법은?",
        options: [
          "빠르게 상황을 파악하고 주도한다",
          "관찰 후 적절한 타이밍에 참여한다",
          "천천히 조심스럽게 적응한다",
          "누군가의 도움을 받아 적응한다"
        ]
      },
      {
        id: 8,
        question: "친구들이 당신을 어떻게 표현하나요?",
        options: [
          "든든하고 믿음직한 언니/형",
          "쿨하고 매력적인 사람",
          "따뜻하고 다정한 사람",
          "귀엽고 사랑스러운 사람"
        ]
      },
      {
        id: 9,
        question: "취미나 관심사는 주로?",
        options: [
          "스포츠나 피트니스",
          "음악, 영화 등 문화생활",
          "독서나 조용한 활동",
          "게임이나 귀여운 것들"
        ]
      },
      {
        id: 10,
        question: "미래에 대한 당신의 태도는?",
        options: [
          "목표를 세우고 강하게 추진한다",
          "계획을 세우되 유연하게 대처한다",
          "자연스럽게 흘러가는 대로 둔다",
          "불안하지만 누군가와 함께라면 괜찮다"
        ]
      }
    ],
    en: [
      {
        id: 1,
        question: "What's your position among friends?",
        options: [
          "Naturally take on a leadership role",
          "Act as the mood maker",
          "Listen quietly and empathize",
          "Be like a cute youngest member"
        ]
      },
      {
        id: 2,
        question: "How do you act in front of someone you like?",
        options: [
          "Confidently make my appeal",
          "Act cool to attract attention",
          "Get shy and slightly avoid them",
          "Approach them with cute playfulness"
        ]
      },
      {
        id: 3,
        question: "What do you mainly do when stressed?",
        options: [
          "Relieve stress through exercise or active activities",
          "Meet friends and talk",
          "Have some alone time",
          "Heal with things I like"
        ]
      },
      {
        id: 4,
        question: "What's your fashion style like?",
        options: [
          "Chic and strong feeling",
          "Trendy and stylish",
          "Comfortable and natural look",
          "Cute and cozy feeling"
        ]
      },
      {
        id: 5,
        question: "How do you handle conflict situations?",
        options: [
          "Face it head-on and solve it",
          "Persuade logically",
          "Try to play a mediator role",
          "Avoid it or ask someone for help"
        ]
      },
      {
        id: 6,
        question: "What's important to you in relationships?",
        options: [
          "The power to protect your partner",
          "Deep understanding of each other",
          "Comfortable and warm relationship",
          "Joy when being together"
        ]
      },
      {
        id: 7,
        question: "How do you adapt to new environments?",
        options: [
          "Quickly grasp the situation and take charge",
          "Observe then participate at the right timing",
          "Adapt slowly and carefully",
          "Adapt with someone's help"
        ]
      },
      {
        id: 8,
        question: "How do friends describe you?",
        options: [
          "Reliable and trustworthy older sibling",
          "Cool and attractive person",
          "Warm and affectionate person",
          "Cute and lovable person"
        ]
      },
      {
        id: 9,
        question: "What are your main hobbies or interests?",
        options: [
          "Sports or fitness",
          "Music, movies, and cultural activities",
          "Reading or quiet activities",
          "Games or cute things"
        ]
      },
      {
        id: 10,
        question: "What's your attitude toward the future?",
        options: [
          "Set goals and pursue them strongly",
          "Make plans but respond flexibly",
          "Let things flow naturally",
          "Anxious but okay if with someone"
        ]
      }
    ]
  };

  const texts = {
    ko: {
      question: "질문",
      previous: "이전",
      next: "다음",
      viewResult: "결과 보기"
    },
    en: {
      question: "Question",
      previous: "Previous",
      next: "Next",
      viewResult: "View Result"
    }
  };

  const currentQuestions = questions[language];
  const currentTexts = texts[language];
  const progress = ((currentQuestion + 1) / currentQuestions.length) * 100;

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
      const result = calculateResult(newAnswers, gender);
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

  const calculateResult = (allAnswers: number[], selectedGender: 'male' | 'female' | null): string => {
    const egenScore = allAnswers.reduce((acc, answer) => {
      if (answer === 0) return acc + 3;
      if (answer === 1) return acc + 2;
      if (answer === 2) return acc + 1;
      return acc;
    }, 0);

    const isEgen = egenScore >= 15;
    const genderSuffix = selectedGender === 'female' ? '_FEMALE' : '_MALE';
    
    return isEgen ? `EGEN${genderSuffix}` : `TETO${genderSuffix}`;
  };

  return (
    <div className="animate-fade-in">
      <div className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-white">
            {currentTexts.question} {currentQuestion + 1} / {currentQuestions.length}
          </h2>
          <span className="text-white/80 text-lg font-semibold">
            {Math.round(progress)}%
          </span>
        </div>
        <Progress value={progress} className="h-3 bg-white/20" />
      </div>

      <Card className="bg-white/95 backdrop-blur-sm shadow-2xl border-0 mb-8 dark:bg-gray-800/95">
        <CardHeader>
          <CardTitle className="text-xl text-gray-800 leading-relaxed dark:text-white">
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
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg scale-105' 
                  : 'bg-white border-2 border-gray-200 text-gray-700 hover:border-blue-300 hover:bg-blue-50 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-600'
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
          {currentTexts.previous}
        </Button>
        
        <Button
          onClick={handleNext}
          disabled={selectedAnswer === null}
          size="lg"
          className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold disabled:opacity-50"
        >
          {currentQuestion === currentQuestions.length - 1 ? currentTexts.viewResult : currentTexts.next}
          <ChevronRight className="ml-2 h-5 w-5" />
        </Button>
      </div>
    </div>
  );
};

export default EgenTetoQuestion;
