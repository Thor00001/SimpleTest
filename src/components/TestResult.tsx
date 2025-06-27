
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Share2, Download } from 'lucide-react';
import { useRef } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

interface TestResultProps {
  result: string;
  onRestart: () => void;
}

const resultData: Record<string, {
  title: { ko: string; en: string };
  subtitle: { ko: string; en: string };
  description: { ko: string; en: string };
  traits: { ko: string[]; en: string[] };
  compatibility: string[];
  color: string;
  emoji: string;
}> = {
  LEADER: {
    title: { ko: "리더형", en: "Leader Type" },
    subtitle: { ko: "천생 지도자", en: "Natural Leader" },
    description: { 
      ko: "당신은 타고난 리더십을 가지고 있으며, 다른 사람들을 이끌고 동기부여하는 능력이 뛰어납니다. 목표 지향적이고 결단력이 있어 어려운 상황에서도 앞장서서 해결책을 찾습니다.",
      en: "You have natural leadership qualities and excel at guiding and motivating others. You are goal-oriented and decisive, taking the lead to find solutions even in difficult situations."
    },
    traits: { 
      ko: ["리더십", "결단력", "목표지향적", "카리스마"],
      en: ["Leadership", "Decisiveness", "Goal-oriented", "Charisma"]
    },
    compatibility: ["SUPPORTER", "ANALYST"],
    color: "from-red-500 to-orange-500",
    emoji: "👑"
  },
  INNOVATOR: {
    title: { ko: "혁신가형", en: "Innovator Type" },
    subtitle: { ko: "창의적 사상가", en: "Creative Thinker" },
    description: { 
      ko: "새로운 아이디어와 창의적인 해결책을 제시하는 것을 좋아합니다. 변화를 두려워하지 않고 항상 더 나은 방법을 찾으려 노력하는 진정한 혁신가입니다.",
      en: "You love presenting new ideas and creative solutions. You're not afraid of change and always strive to find better ways - a true innovator."
    },
    traits: { 
      ko: ["창의성", "호기심", "도전정신", "유연성"],
      en: ["Creativity", "Curiosity", "Challenge Spirit", "Flexibility"]
    },
    compatibility: ["ANALYST", "MEDIATOR"],
    color: "from-purple-500 to-blue-500",
    emoji: "💡"
  },
  MEDIATOR: {
    title: { ko: "중재자형", en: "Mediator Type" },
    subtitle: { ko: "평화로운 조화자", en: "Peaceful Harmonizer" },
    description: { 
      ko: "갈등을 해결하고 사람들 사이의 조화를 이루는 데 탁월한 능력을 가지고 있습니다. 공감 능력이 뛰어나고 다른 사람의 입장을 잘 이해합니다.",
      en: "You have exceptional ability to resolve conflicts and create harmony between people. You have great empathy and understand others' perspectives well."
    },
    traits: { 
      ko: ["공감능력", "중재력", "평화주의", "균형감각"],
      en: ["Empathy", "Mediation", "Pacifism", "Balance"]
    },
    compatibility: ["SUPPORTER", "INNOVATOR"],
    color: "from-green-500 to-teal-500",
    emoji: "🕊️"
  },
  ANALYST: {
    title: { ko: "분석가형", en: "Analyst Type" },
    subtitle: { ko: "논리적 사고자", en: "Logical Thinker" },
    description: { 
      ko: "복잡한 문제를 논리적으로 분석하고 체계적으로 해결하는 능력이 뛰어납니다. 데이터와 사실을 바탕으로 한 객관적인 판단을 중시합니다.",
      en: "You excel at logically analyzing complex problems and solving them systematically. You value objective judgment based on data and facts."
    },
    traits: { 
      ko: ["논리성", "분석력", "객관성", "체계성"],
      en: ["Logic", "Analysis", "Objectivity", "Systematicity"]
    },
    compatibility: ["INNOVATOR", "LEADER"],
    color: "from-blue-500 to-indigo-500",
    emoji: "🔬"
  },
  SUPPORTER: {
    title: { ko: "지지자형", en: "Supporter Type" },
    subtitle: { ko: "따뜻한 응원자", en: "Warm Supporter" },
    description: { 
      ko: "다른 사람을 도우고 지지하는 것에서 큰 기쁨을 느낍니다. 협력을 중시하고 팀워크를 통해 목표를 달성하는 것을 선호합니다.",
      en: "You find great joy in helping and supporting others. You value cooperation and prefer achieving goals through teamwork."
    },
    traits: { 
      ko: ["협력성", "배려심", "신뢰성", "안정성"],
      en: ["Cooperation", "Consideration", "Reliability", "Stability"]
    },
    compatibility: ["MEDIATOR", "LEADER"],
    color: "from-pink-500 to-rose-500",
    emoji: "🤝"
  },
  OBSERVER: {
    title: { ko: "관찰자형", en: "Observer Type" },
    subtitle: { ko: "신중한 사색가", en: "Thoughtful Contemplator" },
    description: { 
      ko: "상황을 신중하게 관찰하고 깊이 있게 사고하는 것을 선호합니다. 독립적이고 자유로운 환경에서 자신만의 방식으로 문제를 해결합니다.",
      en: "You prefer to carefully observe situations and think deeply. You solve problems in your own way in an independent and free environment."
    },
    traits: { 
      ko: ["관찰력", "신중함", "독립성", "내성적"],
      en: ["Observation", "Prudence", "Independence", "Introversion"]
    },
    compatibility: ["ANALYST", "INNOVATOR"],
    color: "from-gray-500 to-slate-500",
    emoji: "🔍"
  }
};

const TestResult = ({ result, onRestart }: TestResultProps) => {
  const { language } = useLanguage();
  const data = resultData[result] || resultData.OBSERVER;
  const resultRef = useRef<HTMLDivElement>(null);

  const texts = {
    ko: {
      shareButton: "테스트 공유하기",
      downloadButton: "이미지로 저장",
      analysis: "당신의 성격 분석",
      traits: "주요 특성",
      compatibility: "잘 맞는 유형",
      shareText: "성격 테스트 결과",
      shareDescription: (title: string, subtitle: string, description: string) => 
        `성격 테스트 결과 - 나는 ${title}!\n\n${subtitle}\n\n${description}\n\n테스트 해보기:`
    },
    en: {
      shareButton: "Share Test",
      downloadButton: "Save as Image",
      analysis: "Your Personality Analysis",
      traits: "Key Traits",
      compatibility: "Compatible Types",
      shareText: "Personality Test Result",
      shareDescription: (title: string, subtitle: string, description: string) => 
        `Personality Test Result - I am ${title}!\n\n${subtitle}\n\n${description}\n\nTake the test:`
    }
  };

  const t = texts[language];

  const handleShare = async () => {
    const testUrl = `${window.location.origin}/personality-test`;
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
      // Fallback for older browsers
      try {
        const textArea = document.createElement('textarea');
        textArea.value = shareText;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        alert(language === 'ko' ? '테스트 링크가 클립보드에 복사되었습니다!' : 'Test link copied to clipboard!');
      } catch (fallbackError) {
        console.error('All sharing methods failed:', fallbackError);
        alert(language === 'ko' ? '공유에 실패했습니다.' : 'Sharing failed.');
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
      link.download = language === 'ko' ? `성격테스트_${data.title[language]}_결과.png` : `personality_test_${data.title[language]}_result.png`;
      link.href = canvas.toDataURL('image/png');
      link.click();
    } catch (error) {
      console.error('Image save failed:', error);
      alert(language === 'ko' ? '이미지 저장에 실패했습니다. 스크린샷을 이용해 주세요.' : 'Image save failed. Please use screenshot.');
    }
  };

  return (
    <div className="space-y-8">
      <div className="text-center">
        <div className="text-8xl mb-4">{data.emoji}</div>
        <h1 className="text-5xl font-bold text-white mb-2">{data.title[language]}</h1>
        <p className="text-2xl text-white/90 mb-6">{data.subtitle[language]}</p>
      </div>

      <div className="bg-white rounded-lg p-8 shadow-2xl" ref={resultRef}>
        <div className="text-center mb-6">
          <div className="text-6xl mb-4">{data.emoji}</div>
          <h1 className="text-4xl font-bold text-gray-800 mb-2">{data.title[language]}</h1>
          <p className="text-xl text-gray-600 mb-4">{data.subtitle[language]}</p>
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

            <div>
              <h3 className="text-xl font-semibold mb-3 text-white">{t.compatibility}</h3>
              <div className="flex flex-wrap gap-2">
                {data.compatibility.map((type, index) => (
                  <Badge key={index} variant="outline" className="border-white/50 text-white bg-white/20 text-sm px-3 py-1">
                    {resultData[type]?.title[language] || type}
                  </Badge>
                ))}
              </div>
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
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default TestResult;
