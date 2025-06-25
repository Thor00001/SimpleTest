
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Share2, Download } from 'lucide-react';

interface EgenTetoResultProps {
  result: string;
  gender: 'male' | 'female' | null;
  onRestart: () => void;
}

const resultData: Record<string, {
  title: string;
  subtitle: string;
  description: string;
  traits: string[];
  celebrities: string[];
  color: string;
  emoji: string;
  percentage: string;
}> = {
  EGEN_MALE: {
    title: "에겐남",
    subtitle: "카리스마 넘치는 남자력",
    description: "당신은 강인하고 카리스마 넘치는 에겐남입니다! 자연스러운 리더십과 당당한 매력으로 사람들을 이끄는 능력이 있어요. 어려운 상황에서도 흔들리지 않는 강한 멘탈을 가지고 있으며, 주변 사람들에게 든든한 존재가 되어줍니다.",
    traits: ["카리스마", "리더십", "남자다움", "강인함", "책임감"],
    celebrities: ["공유", "현빈", "마동석", "조정석"],
    color: "from-blue-600 to-indigo-600",
    emoji: "😎",
    percentage: "35%"
  },
  TETO_MALE: {
    title: "테토남",
    subtitle: "귀여운 매력남",
    description: "당신은 사랑스럽고 귀여운 테토남입니다! 순수하고 다정한 매력으로 사람들의 마음을 따뜻하게 만드는 능력이 있어요. 친근하고 유쾌한 성격으로 주변을 밝게 만들며, 귀여운 행동과 말투로 사람들에게 힐링을 선사합니다.",
    traits: ["귀여움", "다정함", "순수함", "유쾌함", "친근함"],
    celebrities: ["박보검", "송중기", "유연석", "이종석"],
    color: "from-pink-500 to-purple-500",
    emoji: "🥰",
    percentage: "65%"
  },
  EGEN_FEMALE: {
    title: "에겐녀",
    subtitle: "카리스마 넘치는 여자력",
    description: "당신은 강인하고 카리스마 넘치는 에겐녀입니다! 자신감 있고 당당한 매력으로 사람들을 사로잡는 능력이 있어요. 독립적이고 주관이 뚜렷하며, 어떤 상황에서도 자신만의 색깔을 잃지 않는 강인한 매력을 가지고 있습니다.",
    traits: ["카리스마", "자신감", "독립성", "강인함", "리더십"],
    celebrities: ["전지현", "김태리", "손예진", "김고은"],
    color: "from-red-600 to-pink-600",
    emoji: "👑",
    percentage: "30%"
  },
  TETO_FEMALE: {
    title: "테토녀",
    subtitle: "사랑스러운 매력녀",
    description: "당신은 귀엽고 사랑스러운 테토녀입니다! 순수하고 따뜻한 매력으로 사람들의 마음을 녹이는 능력이 있어요. 애교가 많고 상냥한 성격으로 주변 사람들에게 행복을 전해주며, 자연스러운 귀여움으로 모든 이의 사랑을 받습니다.",
    traits: ["귀여움", "애교", "순수함", "다정함", "상냥함"],
    celebrities: ["아이유", "박보영", "김다미", "김유정"],
    color: "from-pink-500 to-rose-500",
    emoji: "🌸",
    percentage: "70%"
  }
};

const EgenTetoResult = ({ result, gender, onRestart }: EgenTetoResultProps) => {
  const data = resultData[result] || resultData.TETO_MALE;

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: '에겐/테토 테스트 결과',
        text: `나는 ${data.title}! ${data.subtitle}`,
        url: window.location.href
      });
    } else {
      navigator.clipboard.writeText(`나는 ${data.title}! ${data.subtitle} - ${window.location.href}`);
    }
  };

  return (
    <div className="space-y-8">
      <div className="text-center">
        <div className="text-8xl mb-4">{data.emoji}</div>
        <h1 className="text-5xl font-bold text-white mb-2">{data.title}</h1>
        <p className="text-2xl text-white/90 mb-2">{data.subtitle}</p>
        <p className="text-lg text-white/80">
          한국 {gender === 'female' ? '여성' : '남성'}의 {data.percentage}가 이 유형입니다
        </p>
      </div>

      <Card className={`bg-gradient-to-br ${data.color} border-0 shadow-2xl text-white`}>
        <CardHeader>
          <CardTitle className="text-2xl text-center">당신의 매력 분석</CardTitle>
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
            <h3 className="text-xl font-semibold mb-3">비슷한 연예인</h3>
            <div className="flex flex-wrap gap-2">
              {data.celebrities.map((celebrity, index) => (
                <Badge key={index} variant="outline" className="border-white/50 text-white">
                  {celebrity}
                </Badge>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-white/95 backdrop-blur-sm shadow-xl border-0 dark:bg-gray-800/95">
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
              className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 font-bold dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700"
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

export default EgenTetoResult;
