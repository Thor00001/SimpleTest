
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Heart, Users, Award, Target } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: <Heart className="h-8 w-8 text-red-500" />,
      title: "과학적 근거",
      description: "심리학 이론과 연구를 바탕으로 한 신뢰할 수 있는 테스트"
    },
    {
      icon: <Users className="h-8 w-8 text-blue-500" />,
      title: "사용자 중심",
      description: "직관적이고 재미있는 사용자 경험 제공"
    },
    {
      icon: <Award className="h-8 w-8 text-yellow-500" />,
      title: "정확한 분석",
      description: "개인의 특성을 정확하게 분석하고 설명"
    },
    {
      icon: <Target className="h-8 w-8 text-green-500" />,
      title: "실용적 활용",
      description: "일상생활과 관계 개선에 도움이 되는 인사이트 제공"
    }
  ];

  const stats = [
    { number: "100만+", label: "누적 테스트 참여자" },
    { number: "15종", label: "다양한 심리 테스트" },
    { number: "98%", label: "사용자 만족도" },
    { number: "24/7", label: "언제든지 이용 가능" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            SimpleTest.kr 소개
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            재미있고 정확한 심리 테스트로 자신을 더 깊이 이해하고, 
            더 나은 관계를 만들어가는 여정을 함께해요.
          </p>
        </div>

        {/* Mission Section */}
        <Card className="mb-16 shadow-xl border-0 overflow-hidden">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-8">
            <h2 className="text-3xl font-bold mb-4 text-center">우리의 미션</h2>
            <p className="text-lg text-purple-100 text-center max-w-4xl mx-auto leading-relaxed">
              심리학의 복잡한 이론을 누구나 쉽게 이해할 수 있는 재미있는 테스트로 만들어, 
              개인의 성장과 더 나은 인간관계를 돕는 것이 우리의 목표입니다.
            </p>
          </div>
        </Card>

        {/* Features */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            SimpleTest.kr의 특징
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center shadow-lg border-0 hover:shadow-xl transition-shadow hover-scale">
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Stats */}
        <Card className="mb-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0 shadow-xl">
          <CardContent className="p-8">
            <h2 className="text-3xl font-bold text-center mb-8">숫자로 보는 SimpleTest.kr</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl font-bold mb-2">{stat.number}</div>
                  <div className="text-blue-100">{stat.label}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Test Types */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            제공하는 테스트
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="shadow-lg border-0 hover:shadow-xl transition-shadow hover-scale">
              <CardHeader>
                <div className="text-4xl text-center mb-2">🧠</div>
                <CardTitle className="text-center">16가지 성격 유형</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center mb-4">
                  MBTI 기반 성격 분석으로 자신의 진짜 성격을 발견해보세요.
                </p>
                <div className="flex justify-center">
                  <Badge variant="secondary">MBTI</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-0 hover:shadow-xl transition-shadow hover-scale">
              <CardHeader>
                <div className="text-4xl text-center mb-2">💪</div>
                <CardTitle className="text-center">에겐남 vs 테토남</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center mb-4">
                  SNS에서 화제인 매력 유형 테스트로 나의 매력 포인트를 찾아보세요.
                </p>
                <div className="flex justify-center">
                  <Badge variant="secondary">트렌드</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-0 hover:shadow-xl transition-shadow hover-scale">
              <CardHeader>
                <div className="text-4xl text-center mb-2">💕</div>
                <CardTitle className="text-center">연애 스타일</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center mb-4">
                  나만의 연애 스타일과 이상형을 분석해보는 로맨틱한 테스트입니다.
                </p>
                <div className="flex justify-center">
                  <Badge variant="secondary">연애</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Team Section */}
        <Card className="shadow-xl border-0">
          <CardHeader className="bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-t-lg">
            <CardTitle className="text-3xl text-center">전문가 팀</CardTitle>
          </CardHeader>
          <CardContent className="p-8">
            <div className="text-center">
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                심리학 박사, 상담심리사, UI/UX 전문가, 데이터 분석가로 구성된 
                전문가 팀이 과학적이고 재미있는 테스트를 만들어갑니다.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <Badge className="px-4 py-2">심리학 박사</Badge>
                <Badge className="px-4 py-2">상담심리사</Badge>
                <Badge className="px-4 py-2">UI/UX 전문가</Badge>
                <Badge className="px-4 py-2">데이터 분석가</Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Contact */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">문의하기</h3>
          <p className="text-gray-600 mb-4">
            더 궁금한 것이 있으시거나 제안사항이 있으시면 언제든 연락해주세요.
          </p>
          <p className="text-purple-600 font-semibold">
            contact@simpletest.kr
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
