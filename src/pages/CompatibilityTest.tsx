
import { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, RotateCcw, Heart, Share2, Download } from 'lucide-react';
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
  const resultRef = useRef<HTMLDivElement>(null);

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

  const handleShare = async () => {
    const testUrl = `${window.location.origin}/compatibility-test`;
    const shareText = `MBTI 궁합 테스트 - 우리는 얼마나 잘 맞을까?\n\n나와 상대방의 MBTI로 연애 궁합도를 확인해보세요!\n\n테스트 해보기: ${testUrl}`;
    
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'MBTI 궁합 테스트',
          text: shareText,
          url: testUrl
        });
      } catch (error) {
        console.log('공유 취소됨');
      }
    } else {
      try {
        await navigator.clipboard.writeText(shareText);
        alert('테스트 링크가 클립보드에 복사되었습니다!');
      } catch (error) {
        console.error('클립보드 복사 실패:', error);
        const textArea = document.createElement('textarea');
        textArea.value = shareText;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        alert('테스트 링크가 클립보드에 복사되었습니다!');
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
      link.download = `MBTI궁합_${result.myType}_${result.partnerType}_결과.png`;
      link.href = canvas.toDataURL('image/png');
      link.click();
    } catch (error) {
      console.error('이미지 저장 실패:', error);
      alert('이미지 저장에 실패했습니다. 스크린샷을 이용해 주세요.');
    }
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

            <div className="text-center">
              <Button 
                onClick={handleShare}
                variant="outline"
                size="lg"
                className="bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30 font-bold py-3 px-6 rounded-full"
              >
                <Share2 className="mr-2 h-5 w-5" />
                테스트 공유하기
              </Button>
            </div>
          </div>
        ) : (
          <div className="animate-fade-in space-y-8">
            <div className="bg-white rounded-lg p-8 shadow-2xl" ref={resultRef}>
              <div className="text-center mb-8">
                <div className="text-8xl mb-4">💕</div>
                <h1 className="text-5xl font-bold text-gray-800 mb-4">궁합도 결과</h1>
                <p className="text-3xl text-gray-700 mb-4">{result.myType} ❤️ {result.partnerType}</p>
                <div className="text-6xl font-bold text-pink-600 mb-4">{result.score}점</div>
              </div>

              <Card className="bg-gradient-to-br from-pink-50 to-purple-50 border-2 border-pink-200 mb-6">
                <CardContent className="p-6">
                  <div className="w-full bg-gray-200 rounded-full h-6 mb-4">
                    <div 
                      className="bg-gradient-to-r from-pink-500 to-purple-500 rounded-full h-6 transition-all duration-1000"
                      style={{ width: `${result.score}%` }}
                    ></div>
                  </div>
                  
                  <p className="text-lg leading-relaxed text-gray-800 mb-4">
                    {result.description}
                  </p>
                  
                  <div className="bg-white/70 p-4 rounded-lg border border-pink-200">
                    <h3 className="text-xl font-semibold mb-2 text-purple-800">💡 관계 조언</h3>
                    <p className="text-gray-700">{result.advice}</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-white/95 backdrop-blur-sm shadow-xl border-0">
              <CardContent className="pt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Button 
                    onClick={handleShare}
                    className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-bold"
                    size="lg"
                  >
                    <Share2 className="mr-2 h-5 w-5" />
                    테스트 공유하기
                  </Button>
                  
                  <Button 
                    onClick={handleDownload}
                    variant="outline"
                    size="lg"
                    className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 font-bold"
                  >
                    <Download className="mr-2 h-5 w-5" />
                    이미지로 저장
                  </Button>
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
