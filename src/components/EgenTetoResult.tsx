import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Share2, Download } from 'lucide-react';
import { useRef } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

interface EgenTetoResultProps {
  result: string;
  gender?: 'male' | 'female' | null;
  onRestart: () => void;
}

const resultData: Record<string, {
  title: { ko: string; en: string };
  subtitle: { ko: string; en: string };
  description: { ko: string; en: string };
  traits: { ko: string[]; en: string[] };
  ideal: { ko: string; en: string };
  color: string;
  emoji: string;
}> = {
  EGEN_MALE: {
    title: { ko: "에겐남", en: "Alpha Male" },
    subtitle: { ko: "귀엽고 다정한 남성", en: "Cute and Kind Male" },
    description: { 
      ko: "따뜻하고 순수한 마음을 가진 당신! 상대방을 배려하고 공감하는 능력이 뛰어나며, 진정성 있는 관계를 중시합니다. 조용하지만 깊은 매력으로 사람들의 마음을 사로잡아요.",
      en: "You have a warm and pure heart! You excel at caring for and empathizing with others, and value genuine relationships. You captivate people with your quiet but deep charm."
    },
    traits: { 
      ko: ["귀여움", "다정함", "순수함", "공감능력", "배려심"],
      en: ["Cuteness", "Kindness", "Purity", "Empathy", "Consideration"]
    },
    ideal: { ko: "서로를 이해하는 소울메이트", en: "Understanding soulmate" },
    color: "from-blue-500 to-purple-500",
    emoji: "🐶"
  },
  EGEN_FEMALE: {
    title: { ko: "에겐녀", en: "Alpha Female" },
    subtitle: { ko: "귀엽고 다정한 여성", en: "Cute and Kind Female" },
    description: { 
      ko: "따뜻하고 순수한 마음을 가진 당신! 상대방을 배려하고 공감하는 능력이 뛰어나며, 진정성 있는 관계를 중시합니다. 조용하지만 깊은 매력으로 사람들의 마음을 사로잡아요.",
      en: "You have a warm and pure heart! You excel at caring for and empathizing with others, and value genuine relationships. You captivate people with your quiet but deep charm."
    },
    traits: { 
      ko: ["귀여움", "다정함", "순수함", "공감능력", "배려심"],
      en: ["Cuteness", "Kindness", "Purity", "Empathy", "Consideration"]
    },
    ideal: { ko: "서로를 이해하는 소울메이트", en: "Understanding soulmate" },
    color: "from-blue-500 to-purple-500",
    emoji: "🐶"
  },
  TETO_MALE: {
    title: { ko: "테토남", en: "Strong Male" },
    subtitle: { ko: "카리스마 넘치는 남성", en: "Charismatic Male" },
    description: { 
      ko: "강한 리더십과 카리스마를 가진 당신! 자신감 넘치고 목표 지향적이며, 어려운 상황에서도 흔들리지 않는 강인함을 보여줍니다. 사람들이 자연스럽게 따르고 싶어하는 매력을 가지고 있어요.",
      en: "You have strong leadership and charisma! You're confident, goal-oriented, and show resilience even in difficult situations. You have the charm that makes people naturally want to follow you."
    },
    traits: { 
      ko: ["카리스마", "리더십", "강인함", "자신감", "결단력"],
      en: ["Charisma", "Leadership", "Strength", "Confidence", "Decisiveness"]
    },
    ideal: { ko: "강하면서도 따뜻한 파트너", en: "Strong yet warm partner" },
    color: "from-red-500 to-orange-500",
    emoji: "🦁"
  },
  TETO_FEMALE: {
    title: { ko: "테토녀", en: "Strong Female" },
    subtitle: { ko: "카리스마 넘치는 여성", en: "Charismatic Female" },
    description: { 
      ko: "강한 리더십과 카리스마를 가진 당신! 자신감 넘치고 목표 지향적이며, 어려운 상황에서도 흔들리지 않는 강인함을 보여줍니다. 사람들이 자연스럽게 따르고 싶어하는 매력을 가지고 있어요.",
      en: "You have strong leadership and charisma! You're confident, goal-oriented, and show resilience even in difficult situations. You have the charm that makes people naturally want to follow you."
    },
    traits: { 
      ko: ["카리스마", "리더십", "강인함", "자신감", "결단력"],
      en: ["Charisma", "Leadership", "Strength", "Confidence", "Decisiveness"]
    },
    ideal: { ko: "강하면서도 따뜻한 파트너", en: "Strong yet warm partner" },
    color: "from-red-500 to-orange-500",
    emoji: "🦁"
  },
  // Fallback for backward compatibility
  EGEN: {
    title: { ko: "에겐남", en: "Alpha Male" },
    subtitle: { ko: "귀엽고 다정한 남성", en: "Cute and Kind Male" },
    description: { 
      ko: "따뜻하고 순수한 마음을 가진 당신! 상대방을 배려하고 공감하는 능력이 뛰어나며, 진정성 있는 관계를 중시합니다. 조용하지만 깊은 매력으로 사람들의 마음을 사로잡아요.",
      en: "You have a warm and pure heart! You excel at caring for and empathizing with others, and value genuine relationships. You captivate people with your quiet but deep charm."
    },
    traits: { 
      ko: ["귀여움", "다정함", "순수함", "공감능력", "배려심"],
      en: ["Cuteness", "Kindness", "Purity", "Empathy", "Consideration"]
    },
    ideal: { ko: "서로를 이해하는 소울메이트", en: "Understanding soulmate" },
    color: "from-blue-500 to-purple-500",
    emoji: "🐶"
  },
  TETO: {
    title: { ko: "테토남", en: "Strong Male" },
    subtitle: { ko: "카리스마 넘치는 남성", en: "Charismatic Male" },
    description: { 
      ko: "강한 리더십과 카리스마를 가진 당신! 자신감 넘치고 목표 지향적이며, 어려운 상황에서도 흔들리지 않는 강인함을 보여줍니다. 사람들이 자연스럽게 따르고 싶어하는 매력을 가지고 있어요.",
      en: "You have strong leadership and charisma! You're confident, goal-oriented, and show resilience even in difficult situations. You have the charm that makes people naturally want to follow you."
    },
    traits: { 
      ko: ["카리스마", "리더십", "강인함", "자신감", "결단력"],
      en: ["Charisma", "Leadership", "Strength", "Confidence", "Decisiveness"]
    },
    ideal: { ko: "강하면서도 따뜻한 파트너", en: "Strong yet warm partner" },
    color: "from-red-500 to-orange-500",
    emoji: "🦁"
  }
};

const EgenTetoResult = ({ result, gender, onRestart }: EgenTetoResultProps) => {
  const { language } = useLanguage();
  
  // Create gender-specific result key
  const genderSuffix = gender === 'female' ? '_FEMALE' : '_MALE';
  const resultKey = result + genderSuffix;
  const data = resultData[resultKey] || resultData[result] || resultData.TETO;
  
  const resultRef = useRef<HTMLDivElement>(null);

  const texts = {
    ko: {
      shareButton: "테스트 공유하기",
      downloadButton: "이미지로 저장",
      analysis: "당신의 매력 분석",
      traits: "주요 특성",
      ideal: "이상적인 관계",
      shareText: "에겐남 테토남 테스트 결과",
      shareDescription: (title: string, subtitle: string, description: string) => 
        `에겐남 테토남 테스트 결과 - 나는 ${title}!\n\n${subtitle}\n\n${description}\n\n테스트 해보기:`
    },
    en: {
      shareButton: "Share Test",
      downloadButton: "Save as Image",
      analysis: "Your Charm Analysis",
      traits: "Key Traits",
      ideal: "Ideal Relationship",
      shareText: "Alpha/Soft Male Test Result",
      shareDescription: (title: string, subtitle: string, description: string) => 
        `Alpha/Soft Male Test Result - I am ${title}!\n\n${subtitle}\n\n${description}\n\nTake the test:`
    }
  };

  const t = texts[language];

  const handleShare = async () => {
    const testUrl = `${window.location.origin}/egen-teto-test`;
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
      link.download = language === 'ko' ? `에겐테토테스트_${data.title[language]}_결과.png` : `alpha_soft_test_${data.title[language]}_result.png`;
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

            <div>
              <h3 className="text-xl font-semibold mb-3 text-white">{t.ideal}</h3>
              <p className="text-white/90">{data.ideal[language]}</p>
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

export default EgenTetoResult;
