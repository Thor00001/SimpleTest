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
  color: string;
  emoji: string;
}> = {
  LEADER: {
    title: { ko: "리더형", en: "Leader Type" },
    subtitle: { ko: "타고난 지도자", en: "Natural Leader" },
    description: {
      ko: "당신은 뛰어난 리더십과 통솔력으로 팀을 이끌고 목표를 달성하는 데 능숙합니다. 자신감 넘치는 태도와 명확한 비전 제시로 주변 사람들에게 영감을 주며, 어려운 상황에서도 결단력을 발휘하여 문제를 해결합니다.",
      en: "You are skilled at leading teams and achieving goals with outstanding leadership and command. You inspire those around you with a confident attitude and clear vision, and you solve problems by demonstrating decisiveness even in difficult situations."
    },
    traits: {
      ko: ["리더십", "통솔력", "결단력", "책임감", "추진력"],
      en: ["Leadership", "Command", "Decisiveness", "Responsibility", "Drive"]
    },
    color: "from-blue-500 to-cyan-500",
    emoji: "👑"
  },
  INNOVATOR: {
    title: { ko: "혁신가형", en: "Innovator Type" },
    subtitle: { ko: "창의적인 아이디어 뱅크", en: "Creative Idea Bank" },
    description: {
      ko: "당신은 틀에 얽매이지 않는 창의적인 사고방식으로 새로운 아이디어를 끊임없이 제시합니다. 뛰어난 상상력과 독창성을 바탕으로 혁신적인 변화를 주도하며, 문제 해결에 있어서도 남다른 시각을 보여줍니다.",
      en: "You constantly present new ideas with a creative mindset that is not bound by conventions. Based on excellent imagination and originality, you lead innovative changes and show a unique perspective in problem solving."
    },
    traits: {
      ko: ["창의성", "상상력", "독창성", "혁신", "아이디어"],
      en: ["Creativity", "Imagination", "Originality", "Innovation", "Ideas"]
    },
    color: "from-purple-500 to-pink-500",
    emoji: "💡"
  },
  MEDIATOR: {
    title: { ko: "중재자형", en: "Mediator Type" },
    subtitle: { ko: "평화와 균형을 추구하는 조력자", en: "Helper Seeking Peace and Balance" },
    description: {
      ko: "당신은 갈등 상황에서 타인의 의견을 경청하고 공감하며, 원만하게 문제를 해결하는 능력이 뛰어납니다. 뛰어난 공감 능력과 이해심을 바탕으로 조화로운 관계를 형성하고 유지하며, 팀워크 향상에 기여합니다.",
      en: "You are excellent at listening to and empathizing with others' opinions in conflict situations, and at resolving problems smoothly. Based on excellent empathy and understanding, you form and maintain harmonious relationships and contribute to improving teamwork."
    },
    traits: {
      ko: ["공감능력", "경청", "이해심", "조화", "협력"],
      en: ["Empathy", "Listening", "Understanding", "Harmony", "Cooperation"]
    },
    color: "from-green-500 to-teal-500",
    emoji: "🕊️"
  },
  ANALYST: {
    title: { ko: "분석가형", en: "Analyst Type" },
    subtitle: { ko: "논리적이고 체계적인 사고", en: "Logical and Systematic Thinking" },
    description: {
      ko: "당신은 논리적이고 분석적인 사고방식으로 문제의 핵심을 파악하고, 체계적인 해결 방안을 제시합니다. 뛰어난 관찰력과 비판적 사고를 바탕으로 데이터와 정보를 분석하고, 합리적인 의사 결정을 내립니다.",
      en: "You grasp the core of problems with a logical and analytical way of thinking and present systematic solutions. Based on excellent observation and critical thinking, you analyze data and information and make rational decisions."
    },
    traits: {
      ko: ["분석력", "논리력", "비판적 사고", "관찰력", "합리성"],
      en: ["Analytical Skills", "Logical Skills", "Critical Thinking", "Observation", "Rationality"]
    },
    color: "from-indigo-500 to-blue-500",
    emoji: "🔬"
  },
  SUPPORTER: {
    title: { ko: "지지자형", en: "Supporter Type" },
    subtitle: { ko: "따뜻한 마음으로 응원하는 조력자", en: "Helper Who Cheers with a Warm Heart" },
    description: {
      ko: "당신은 타인의 감정에 공감하고 지지하며, 긍정적인 에너지를 불어넣어 줍니다. 헌신적이고 협조적인 태도로 주변 사람들을 돕고, 팀워크를 향상시키는 데 기여합니다. 어려움에 처한 사람들에게 힘이 되어주는 따뜻한 마음을 지니고 있습니다.",
      en: "You empathize with and support others' emotions and inject positive energy. With a dedicated and cooperative attitude, you help those around you and contribute to improving teamwork. You have a warm heart that empowers those in need."
    },
    traits: {
      ko: ["공감", "헌신", "협력", "지지", "긍정"],
      en: ["Empathy", "Dedication", "Cooperation", "Support", "Positivity"]
    },
    color: "from-pink-500 to-red-500",
    emoji: "🤝"
  },
  OBSERVER: {
    title: { ko: "관찰자형", en: "Observer Type" },
    subtitle: { ko: "신중하고 객관적인 시각", en: "Careful and Objective View" },
    description: {
      ko: "당신은 객관적인 시각으로 상황을 관찰하고, 신중하게 판단하는 능력이 뛰어납니다. 감정적인 편향 없이 사실과 정보를 분석하고, 객관적인 근거를 바탕으로 합리적인 의사 결정을 내립니다. 세심하고 꼼꼼한 성격으로 실수를 줄이고, 정확성을 높이는 데 기여합니다.",
      en: "You have an excellent ability to observe situations from an objective perspective and make careful judgments. You analyze facts and information without emotional bias and make rational decisions based on objective evidence. Your meticulous and careful personality reduces mistakes and contributes to increasing accuracy."
    },
    traits: {
      ko: ["관찰력", "객관성", "신중함", "분석력", "정확성"],
      en: ["Observation", "Objectivity", "Carefulness", "Analytical Skills", "Accuracy"]
    },
    color: "from-gray-500 to-zinc-500",
    emoji: "🔍"
  }
};

const TestResult = ({ result, onRestart }: TestResultProps) => {
  const { language } = useLanguage();
  const data = resultData[result] || resultData.LEADER;
  const resultRef = useRef<HTMLDivElement>(null);

  const texts = {
    ko: {
      shareButton: "테스트 공유하기",
      downloadButton: "이미지로 저장",
      analysis: "당신의 성격 분석",
      traits: "주요 특성",
      shareText: "성격테스트 결과",
      shareDescription: (title: string, subtitle: string, description: string) => 
        `성격테스트 결과 - 나는 ${title}!\n\n${subtitle}\n\n${description}\n\n테스트 해보기:`
    },
    en: {
      shareButton: "Share Test",
      downloadButton: "Save as Image",
      analysis: "Your Personality Analysis",
      traits: "Key Traits",
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
      
      // Check if user is in dark mode
      const isDarkMode = document.documentElement.classList.contains('dark');
      
      const canvas = await html2canvas(resultRef.current, {
        backgroundColor: isDarkMode ? '#1f2937' : '#ffffff', // Use dark gray for dark mode, white for light mode
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
