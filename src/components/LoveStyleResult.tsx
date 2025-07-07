
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Share2, Download } from 'lucide-react';
import { useRef } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

interface LoveStyleResultProps {
  result: string;
  answers: number[];
  onRestart: () => void;
}

const resultData: Record<string, {
  title: { ko: string; en: string };
  subtitle: { ko: string; en: string };
  description: { ko: string; en: string };
  traits: { ko: string[]; en: string[] };
  color: string;
  emoji: string;
}> = {
  DEEP: {
    title: { ko: "깊이 있는 연애형", en: "Deep Love Type" },
    subtitle: { ko: "진정한 소울메이트를 찾는 당신", en: "You who seeks true soulmate" },
    description: {
      ko: "당신은 피상적인 관계보다는 깊이 있고 의미 있는 연결을 중시합니다. 서로의 내면을 이해하고 진정한 마음을 나누는 관계를 추구하며, 시간이 지날수록 더욱 깊어지는 사랑을 꿈꿉니다.",
      en: "You value deep and meaningful connections rather than superficial relationships. You pursue relationships where you understand each other's inner selves and share true hearts, dreaming of love that deepens over time."
    },
    traits: {
      ko: ["진정성", "깊이", "이해심", "소통", "신뢰"],
      en: ["Authenticity", "Depth", "Understanding", "Communication", "Trust"]
    },
    color: "from-blue-500 to-purple-500",
    emoji: "💙"
  },
  ACTIVE: {
    title: { ko: "활발한 연애형", en: "Active Love Type" },
    subtitle: { ko: "함께 성장하는 파트너십을 추구하는 당신", en: "You who pursues growing partnership" },
    description: {
      ko: "당신은 연인과 함께 다양한 경험을 하며 서로 발전해 나가는 관계를 선호합니다. 정적인 사랑보다는 역동적이고 활기찬 관계에서 더 큰 만족을 느끼며, 함께 목표를 향해 나아가는 것을 좋아합니다.",
      en: "You prefer relationships where you have various experiences with your partner and develop together. You feel greater satisfaction in dynamic and vibrant relationships rather than static love, and enjoy moving toward goals together."
    },
    traits: {
      ko: ["활발함", "성장", "도전", "협력", "열정"],
      en: ["Activity", "Growth", "Challenge", "Cooperation", "Passion"]
    },
    color: "from-orange-500 to-red-500",
    emoji: "🔥"
  },
  ROMANTIC: {
    title: { ko: "로맨틱한 연애형", en: "Romantic Love Type" },
    subtitle: { ko: "드라마틱한 사랑을 꿈꾸는 당신", en: "You who dreams of dramatic love" },
    description: {
      ko: "당신은 영화나 드라마 같은 로맨틱한 사랑을 꿈꿉니다. 특별한 순간들과 감동적인 기억을 만들어가는 것을 중요하게 생각하며, 사랑하는 사람에게 온 마음을 다해 애정을 표현합니다.",
      en: "You dream of romantic love like in movies or dramas. You consider creating special moments and touching memories important, and express your affection wholeheartedly to the person you love."
    },
    traits: {
      ko: ["로맨스", "감성", "특별함", "애정표현", "기억"],
      en: ["Romance", "Emotion", "Specialness", "Affection", "Memory"]
    },
    color: "from-pink-500 to-rose-500",
    emoji: "💕"
  },
  COMFORTABLE: {
    title: { ko: "편안한 연애형", en: "Comfortable Love Type" },
    subtitle: { ko: "안정적이고 평화로운 사랑을 추구하는 당신", en: "You who pursues stable and peaceful love" },
    description: {
      ko: "당신은 자연스럽고 편안한 관계를 선호합니다. 무리하지 않고 서로의 개성을 존중하며, 일상 속에서 소소한 행복을 찾아가는 사랑을 추구합니다. 안정감과 신뢰가 바탕이 된 관계를 중시합니다.",
      en: "You prefer natural and comfortable relationships. You pursue love that doesn't force things, respects each other's individuality, and finds small happiness in daily life. You value relationships based on stability and trust."
    },
    traits: {
      ko: ["편안함", "안정", "자연스러움", "존중", "일상"],
      en: ["Comfort", "Stability", "Naturalness", "Respect", "Daily life"]
    },
    color: "from-green-500 to-teal-500",
    emoji: "🌿"
  }
};

const LoveStyleResult = ({ result, answers, onRestart }: LoveStyleResultProps) => {
  const { language } = useLanguage();
  const data = resultData[result] || resultData.DEEP;
  const resultRef = useRef<HTMLDivElement>(null);

  const texts = {
    ko: {
      shareButton: "테스트 공유하기",
      downloadButton: "이미지로 저장",
      analysis: "당신의 연애 스타일 분석",
      traits: "주요 특성",
      restartButton: "다시 테스트하기",
      shareText: "연애 스타일 테스트 결과",
      shareDescription: (title: string, subtitle: string, description: string) => 
        `연애 스타일 테스트 결과 - 나는 ${title}!\n\n${subtitle}\n\n${description}\n\n테스트 해보기:`
    },
    en: {
      shareButton: "Share Test",
      downloadButton: "Save as Image",
      analysis: "Your Love Style Analysis",
      traits: "Key Traits",
      restartButton: "Test Again",
      shareText: "Love Style Test Result",
      shareDescription: (title: string, subtitle: string, description: string) => 
        `Love Style Test Result - I am ${title}!\n\n${subtitle}\n\n${description}\n\nTake the test:`
    }
  };

  const t = texts[language];

  const handleShare = async () => {
    const testUrl = `${window.location.origin}/love-style-test`;
    const shareText = t.shareDescription(data.title[language], data.subtitle[language], data.description[language]) + ` ${testUrl}`;
    
    try {
      if (navigator.share) {
        await navigator.share({
          title: t.shareText,
          text: shareText,
          url: testUrl
        });
      } else {
        await navigator.clipboard.writeText(shareText);
        alert(language === 'ko' ? '테스트 링크가 클립보드에 복사되었습니다!' : 'Test link copied to clipboard!');
      }
    } catch (error) {
      console.log('Share cancelled or failed:', error);
    }
  };

  const handleDownload = async () => {
    if (!resultRef.current) return;

    try {
      const html2canvas = (await import('html2canvas')).default;
      
      const isDarkMode = document.documentElement.classList.contains('dark');
      
      const canvas = await html2canvas(resultRef.current, {
        backgroundColor: isDarkMode ? '#1f2937' : '#ffffff',
        scale: 2,
        useCORS: true,
        allowTaint: true,
        width: resultRef.current.offsetWidth,
        height: resultRef.current.offsetHeight
      });

      const link = document.createElement('a');
      link.download = language === 'ko' ? `연애스타일테스트_${data.title[language]}_결과.png` : `love_style_test_${data.title[language]}_result.png`;
      link.href = canvas.toDataURL('image/png');
      link.click();
    } catch (error) {
      console.error('Image save failed:', error);
      alert(language === 'ko' ? '이미지 저장에 실패했습니다. 스크린샷을 이용해 주세요.' : 'Image save failed. Please use screenshot.');
    }
  };

  return (
    <div className="space-y-8">
      <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-2xl" ref={resultRef}>
        <div className="text-center mb-6">
          <div className="text-6xl mb-4">{data.emoji}</div>
          <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-2">{data.title[language]}</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-4">{data.subtitle[language]}</p>
        </div>

        <Card className={`bg-gradient-to-br ${data.color} border-0 shadow-lg text-white mb-6`}>
          <CardHeader>
            <CardTitle className="text-2xl text-center text-white">{t.analysis}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="text-lg leading-relaxed text-white">
              {data.description[language]}
            </p>
            
            <div>
              <h3 className="text-xl font-semibold mb-3 text-white">{t.traits}</h3>
              <div className="flex flex-wrap gap-2">
                {data.traits[language].map((trait, index) => (
                  <Badge key={index} variant="secondary" className="bg-white/30 text-white border-white/50 text-sm px-3 py-1">
                    {trait}
                  </Badge>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="bg-white/95 backdrop-blur-sm shadow-xl border-0 dark:bg-gray-800/95">
        <CardContent className="pt-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Button 
              onClick={handleShare}
              className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-bold"
              size="lg"
            >
              <Share2 className="mr-2 h-5 w-5" />
              {t.shareButton}
            </Button>
            
            <Button 
              onClick={handleDownload}
              variant="outline"
              size="lg"
              className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 font-bold dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700"
            >
              <Download className="mr-2 h-5 w-5" />
              {t.downloadButton}
            </Button>

            <Button 
              onClick={onRestart}
              variant="outline"
              size="lg"
              className="border-2 border-pink-300 text-pink-700 hover:bg-pink-50 font-bold dark:border-pink-600 dark:text-pink-300 dark:hover:bg-pink-900/20"
            >
              {t.restartButton}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default LoveStyleResult;
