import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, RotateCcw, Heart } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const CompatibilityTest = () => {
  const [myMBTI, setMyMBTI] = useState<string>('');
  const [partnerMBTI, setPartnerMBTI] = useState<string>('');
  const [result, setResult] = useState<any>(null);

  const mbtiTypes = [
    'INTJ', 'INTP', 'ENTJ', 'ENTP',
    'INFJ', 'INFP', 'ENFJ', 'ENFP',
    'ISTJ', 'ISFJ', 'ESTJ', 'ESFJ',
    'ISTP', 'ISFP', 'ESTP', 'ESFP'
  ];

  const compatibilityData: Record<string, Record<string, { score: number; description: string }>> = {
    'INTJ': {
      'ENFP': { score: 95, description: '완벽한 궁합! 서로를 완벽하게 보완하는 관계입니다.' },
      'ENTP': { score: 90, description: '매우 좋은 궁합! 지적 호기심을 자극하는 관계입니다.' },
      'INFJ': { score: 85, description: '좋은 궁합! 깊이 있는 대화를 나누는 관계입니다.' },
      'INTJ': { score: 70, description: '비슷한 성향으로 이해하기 쉽지만 갈등 가능성도 있습니다.' }
    },
    'ENFP': {
      'INTJ': { score: 95, description: '완벽한 궁합! 서로를 완벽하게 보완하는 관계입니다.' },
      'INFJ': { score: 90, description: '매우 좋은 궁합! 감정적으로 깊이 연결되는 관계입니다.' },
      'ENFP': { score: 75, description: '활발하고 즐거운 관계이지만 때로는 갈등이 있을 수 있습니다.' }
    }
  };

  const calculateCompatibility = () => {
    if (!myMBTI || !partnerMBTI) return;

    const compatibility = compatibilityData[myMBTI]?.[partnerMBTI] || 
                         compatibilityData[partnerMBTI]?.[myMBTI] || 
                         { score: Math.floor(Math.random() * 40) + 40, description: '평범한 궁합입니다. 서로 노력한다면 좋은 관계를 만들 수 있어요!' };

    setResult({
      myType: myMBTI,
      partnerType: partnerMBTI,
      score: compatibility.score,
      description: compatibility.description,
      advice: getAdvice(compatibility.score)
    });
  };

  const getAdvice = (score: number) => {
    if (score >= 85) return '환상의 커플! 서로의 차이점을 인정하고 존중하면 더욱 완벽한 관계가 될 거예요.';
    if (score >= 70) return '좋은 궁합이에요! 소통을 통해 서로를 더 잘 이해해보세요.';
    if (score >= 55) return '평범한 궁합입니다. 서로의 장점을 발견하고 인정하는 노력이 필요해요.';
    return '조금 어려운 조합이지만 불가능하지 않아요! 서로 다른 점을 장점으로 받아들여보세요.';
  };

  const handleRestart = () => {
    setMyMBTI('');
    setPartnerMBTI('');
    setResult(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-400 via-red-500 to-purple-500 p-4 dark:from-pink-900 dark:via-red-900 dark:to-purple-900">
      <Helmet>
        <title>MBTI 궁합 테스트 - SimpleTest.kr</title>
        <meta name="description" content="나와 상대방의 MBTI로 연애 궁합도를 확인해보세요! 과학적 근거를 바탕으로 한 정확한 MBTI 궁합 분석을 제공합니다." />
        <meta name="keywords" content="MBTI 궁합, 연애궁합, 성격궁합, MBTI 테스트, 커플 궁합, 연애 상성" />
        <meta property="og:title" content="MBTI 궁합 테스트 - 우리는 얼마나 잘 맞을까?" />
        <meta property="og:description" content="나와 상대방의 MBTI로 연애 궁합도를 확인해보세요! 과학적 근거를 바탕으로 한 정확한 분석을 제공합니다." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://simpletest.kr/compatibility-test" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="MBTI 궁합 테스트 - 우리는 얼마나 잘 맞을까?" />
        <meta name="twitter:description" content="나와 상대방의 MBTI로 연애 궁합도를 확인해보세요! 과학적 근거를 바탕으로 한 정확한 분석을 제공합니다." />
      </Helmet>
      <div className="max-w-4xl mx-auto">
        {!result ? (
          <div className="text-center animate-fade-in">
            <div className="mb-8 pt-12">
              <h1 className="text-6xl font-bold text-white mb-4 drop-shadow-lg">
                💕 MBTI 궁합 테스트
              </h1>
              <h2 className="text-4xl font-bold text-white/90 mb-2">
                우리는 얼마나 잘 맞을까?
              </h2>
              <p className="text-xl text-white/80 mb-8">
                나와 상대방의 MBTI로 궁합도를 확인해보세요
              </p>
            </div>

            <Card className="bg-white/95 backdrop-blur-sm shadow-2xl border-0 mb-8">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-800">
                  MBTI 선택하기
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <label className="text-lg font-semibold text-gray-700">나의 MBTI</label>
                    <Select value={myMBTI} onValueChange={setMyMBTI}>
                      <SelectTrigger className="w-full h-12">
                        <SelectValue placeholder="MBTI를 선택하세요" />
                      </SelectTrigger>
                      <SelectContent>
                        {mbtiTypes.map((type) => (
                          <SelectItem key={type} value={type}>
                            {type}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-3">
                    <label className="text-lg font-semibold text-gray-700">상대방의 MBTI</label>
                    <Select value={partnerMBTI} onValueChange={setPartnerMBTI}>
                      <SelectTrigger className="w-full h-12">
                        <SelectValue placeholder="MBTI를 선택하세요" />
                      </SelectTrigger>
                      <SelectContent>
                        {mbtiTypes.map((type) => (
                          <SelectItem key={type} value={type}>
                            {type}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <Button 
                  onClick={calculateCompatibility}
                  disabled={!myMBTI || !partnerMBTI}
                  size="lg"
                  className="w-full bg-gradient-to-r from-pink-600 to-red-600 hover:from-pink-700 hover:to-red-700 text-white font-bold py-4 px-8 rounded-full text-xl shadow-lg transition-all duration-300 hover:scale-105 disabled:opacity-50"
                >
                  <Heart className="mr-2 h-5 w-5" />
                  궁합도 확인하기
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </CardContent>
            </Card>
          </div>
        ) : (
          <div className="animate-fade-in space-y-8">
            <div className="text-center">
              <div className="text-8xl mb-4">💕</div>
              <h1 className="text-5xl font-bold text-white mb-2">궁합도 결과</h1>
              <p className="text-2xl text-white/90 mb-2">{result.myType} ❤️ {result.partnerType}</p>
            </div>

            <Card className="bg-gradient-to-br from-pink-600 to-red-600 border-0 shadow-2xl text-white">
              <CardHeader>
                <CardTitle className="text-3xl text-center">
                  궁합도: {result.score}점
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="w-full bg-white/20 rounded-full h-4">
                  <div 
                    className="bg-white rounded-full h-4 transition-all duration-1000"
                    style={{ width: `${result.score}%` }}
                  ></div>
                </div>
                
                <p className="text-lg leading-relaxed text-white/90">
                  {result.description}
                </p>
                
                <div className="bg-white/10 p-4 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2">💡 관계 조언</h3>
                  <p className="text-white/90">{result.advice}</p>
                </div>
              </CardContent>
            </Card>

            <div className="text-center">
              <Button 
                onClick={handleRestart}
                variant="outline"
                size="lg"
                className="bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30 font-bold py-3 px-6 rounded-full"
              >
                <RotateCcw className="mr-2 h-5 w-5" />
                다시 테스트하기
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CompatibilityTest;
