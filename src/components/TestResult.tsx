
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Share2, Download } from 'lucide-react';

interface TestResultProps {
  result: string;
  onRestart: () => void;
}

const resultData: Record<string, {
  title: string;
  subtitle: string;
  description: string;
  traits: string[];
  compatibility: string[];
  color: string;
  emoji: string;
}> = {
  LEADER: {
    title: "리더형",
    subtitle: "천생 지도자",
    description: "당신은 타고난 리더십을 가지고 있으며, 다른 사람들을 이끌고 동기부여하는 능력이 뛰어납니다. 목표 지향적이고 결단력이 있어 어려운 상황에서도 앞장서서 해결책을 찾습니다.",
    traits: ["리더십", "결단력", "목표지향적", "카리스마"],
    compatibility: ["SUPPORTER", "ANALYST"],
    color: "from-red-500 to-orange-500",
    emoji: "👑"
  },
  INNOVATOR: {
    title: "혁신가형",
    subtitle: "창의적 사상가",
    description: "새로운 아이디어와 창의적인 해결책을 제시하는 것을 좋아합니다. 변화를 두려워하지 않고 항상 더 나은 방법을 찾으려 노력하는 진정한 혁신가입니다.",
    traits: ["창의성", "호기심", "도전정신", "유연성"],
    compatibility: ["ANALYST", "MEDIATOR"],
    color: "from-purple-500 to-blue-500",
    emoji: "💡"
  },
  MEDIATOR: {
    title: "중재자형",
    subtitle: "평화로운 조화자",
    description: "갈등을 해결하고 사람들 사이의 조화를 이루는 데 탁월한 능력을 가지고 있습니다. 공감 능력이 뛰어나고 다른 사람의 입장을 잘 이해합니다.",
    traits: ["공감능력", "중재력", "평화주의", "균형감각"],
    compatibility: ["SUPPORTER", "INNOVATOR"],
    color: "from-green-500 to-teal-500",
    emoji: "🕊️"
  },
  ANALYST: {
    title: "분석가형",
    subtitle: "논리적 사고자",
    description: "복잡한 문제를 논리적으로 분석하고 체계적으로 해결하는 능력이 뛰어납니다. 데이터와 사실을 바탕으로 한 객관적인 판단을 중시합니다.",
    traits: ["논리성", "분석력", "객관성", "체계성"],
    compatibility: ["INNOVATOR", "LEADER"],
    color: "from-blue-500 to-indigo-500",
    emoji: "🔬"
  },
  SUPPORTER: {
    title: "지지자형",
    subtitle: "따뜻한 응원자",
    description: "다른 사람을 도우고 지지하는 것에서 큰 기쁨을 느낍니다. 협력을 중시하고 팀워크를 통해 목표를 달성하는 것을 선호합니다.",
    traits: ["협력성", "배려심", "신뢰성", "안정성"],
    compatibility: ["MEDIATOR", "LEADER"],
    color: "from-pink-500 to-rose-500",
    emoji: "🤝"
  },
  OBSERVER: {
    title: "관찰자형",
    subtitle: "신중한 사색가",
    description: "상황을 신중하게 관찰하고 깊이 있게 사고하는 것을 선호합니다. 독립적이고 자유로운 환경에서 자신만의 방식으로 문제를 해결합니다.",
    traits: ["관찰력", "신중함", "독립성", "내성적"],
    compatibility: ["ANALYST", "INNOVATOR"],
    color: "from-gray-500 to-slate-500",
    emoji: "🔍"
  }
};

const TestResult = ({ result, onRestart }: TestResultProps) => {
  const data = resultData[result] || resultData.OBSERVER;

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: '에겐-테토 테스트 결과',
        text: `나는 ${data.title}! ${data.subtitle}`,
        url: window.location.href
      });
    } else {
      // Fallback for browsers that don't support Web Share API
      navigator.clipboard.writeText(`나는 ${data.title}! ${data.subtitle} - ${window.location.href}`);
    }
  };

  return (
    <div className="space-y-8">
      <div className="text-center">
        <div className="text-8xl mb-4">{data.emoji}</div>
        <h1 className="text-5xl font-bold text-white mb-2">{data.title}</h1>
        <p className="text-2xl text-white/90 mb-6">{data.subtitle}</p>
      </div>

      <Card className={`bg-gradient-to-br ${data.color} border-0 shadow-2xl text-white`}>
        <CardHeader>
          <CardTitle className="text-2xl text-center">당신의 성격 분석</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-lg leading-relaxed text-white/90">
            {data.description}
          </p>
          
          <div>
            <h3 className="text-xl font-semibold mb-3">주요 특성</h3>
            <div className="flex flex-wrap gap-2">
              {data.traits.map((trait, index) => (
                <Badge key={index} variant="secondary" className="bg-white/20 text-white border-white/30">
                  {trait}
                </Badge>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">잘 맞는 유형</h3>
            <div className="flex flex-wrap gap-2">
              {data.compatibility.map((type, index) => (
                <Badge key={index} variant="outline" className="border-white/50 text-white">
                  {resultData[type]?.title || type}
                </Badge>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-white/95 backdrop-blur-sm shadow-xl border-0">
        <CardContent className="pt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Button 
              onClick={handleShare}
              className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-bold"
              size="lg"
            >
              <Share2 className="mr-2 h-5 w-5" />
              결과 공유하기
            </Button>
            
            <Button 
              variant="outline"
              size="lg"
              className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 font-bold"
            >
              <Download className="mr-2 h-5 w-5" />
              결과 저장하기
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default TestResult;
