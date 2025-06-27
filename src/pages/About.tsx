
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import { Helmet } from 'react-helmet-async';

const About = () => {
  const { language } = useLanguage();

  const content = {
    ko: {
      title: "SimpleTest.kr 소개",
      subtitle: "재미있고 정확한 심리 테스트",
      mission: {
        title: "우리의 미션",
        description: "심리학의 복잡한 이론을 누구나 쉽게 이해할 수 있는 재미있는 테스트로 만들어, 개인의 성장과 더 나은 인간관계를 돕는 것이 우리의 목표입니다."
      },
      features: {
        title: "SimpleTest.kr의 특징",
        items: [
          "과학적 근거: 심리학 이론과 연구를 바탕으로 한 신뢰할 수 있는 테스트",
          "사용자 중심: 직관적이고 재미있는 사용자 경험 제공",
          "정확한 분석: 개인의 특성을 정확하게 분석하고 설명",
          "실용적 활용: 일상생활과 관계 개선에 도움이 되는 인사이트 제공"
        ]
      },
      stats: {
        title: "놀라운 참여 통계",
        participants: "200만+",
        participantsLabel: "누적 참여자",
        tests: "15종",
        testsLabel: "다양한 테스트",
        satisfaction: "98%",
        satisfactionLabel: "사용자 만족도"
      },
      tests: {
        title: "제공하는 테스트",
        mbti: "16가지 성격 유형: MBTI 기반 성격 분석으로 자신의 진짜 성격을 발견해보세요.",
        egen: "에겐남 vs 테토남: SNS에서 화제인 매력 유형 테스트로 나의 매력 포인트를 찾아보세요.",
        love: "연애 스타일: 나만의 연애 스타일과 이상형을 분석해보는 로맨틱한 테스트입니다.",
        compatibility: "궁합 테스트: 연인과의 궁합도를 MBTI로 확인해보세요."
      },
      contact: {
        title: "문의하기",
        description: "더 궁금한 것이 있으시거나 제안사항이 있으시면 언제든 연락해주세요.",
        email: "이메일: contact@simpletest.kr"
      }
    },
    en: {
      title: "About SimpleTest.kr",
      subtitle: "Fun and Accurate Psychological Tests",
      mission: {
        title: "Our Mission",
        description: "Our goal is to transform complex psychological theories into fun and accessible tests that anyone can understand, helping individuals grow and build better relationships."
      },
      features: {
        title: "Features of SimpleTest.kr",
        items: [
          "Scientific Foundation: Reliable tests based on psychological theories and research",
          "User-Centered: Intuitive and enjoyable user experience",
          "Accurate Analysis: Precise analysis and explanation of individual characteristics",
          "Practical Application: Insights that help improve daily life and relationships"
        ]
      },
      stats: {
        title: "Amazing Participation Statistics",
        participants: "2M+",
        participantsLabel: "Total Participants",
        tests: "15 Types",
        testsLabel: "Various Tests",
        satisfaction: "98%",
        satisfactionLabel: "User Satisfaction"
      },
      tests: {
        title: "Available Tests",
        mbti: "16 Personality Types: Discover your true personality with MBTI-based personality analysis.",
        egen: "Egen vs Teto: Find your charm points with this popular attraction type test from social media.",
        love: "Love Style: A romantic test that analyzes your unique love style and ideal type.",
        compatibility: "Compatibility Test: Check your compatibility with your partner using MBTI."
      },
      contact: {
        title: "Contact Us",
        description: "If you have any questions or suggestions, feel free to contact us anytime.",
        email: "Email: contact@simpletest.kr"
      }
    }
  };

  const currentContent = content[language];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 dark:from-gray-900 dark:via-purple-900 dark:to-gray-900 py-12">
      <Helmet>
        <title>{currentContent.title}</title>
        <meta name="description" content={currentContent.subtitle} />
        <meta name="keywords" content="SimpleTest.kr, 심리테스트, 성격테스트, 회사소개, 팀소개" />
        <meta property="og:title" content={currentContent.title} />
        <meta property="og:description" content={currentContent.subtitle} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://simpletest.kr/about" />
      </Helmet>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
            {currentContent.title}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            {currentContent.subtitle}
          </p>
        </div>

        <div className="space-y-8">
          <Card className="bg-gradient-to-r from-purple-600 to-pink-600 text-white">
            <CardHeader>
              <CardTitle className="text-2xl">{currentContent.mission.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg leading-relaxed">{currentContent.mission.description}</p>
            </CardContent>
          </Card>

          <Card className="border-2 border-purple-100 dark:border-gray-700">
            <CardHeader>
              <CardTitle className="text-2xl text-purple-600 dark:text-purple-400">
                {currentContent.features.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {currentContent.features.items.map((item, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <span className="text-purple-600 dark:text-purple-400 mt-1">•</span>
                    <span className="text-gray-700 dark:text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="border-2 border-purple-100 dark:border-gray-700">
            <CardHeader>
              <CardTitle className="text-2xl text-purple-600 dark:text-purple-400 text-center">
                {currentContent.stats.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">
                    {currentContent.stats.participants}
                  </div>
                  <div className="text-gray-600 dark:text-gray-300">
                    {currentContent.stats.participantsLabel}
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">
                    {currentContent.stats.tests}
                  </div>
                  <div className="text-gray-600 dark:text-gray-300">
                    {currentContent.stats.testsLabel}
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">
                    {currentContent.stats.satisfaction}
                  </div>
                  <div className="text-gray-600 dark:text-gray-300">
                    {currentContent.stats.satisfactionLabel}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 border-purple-100 dark:border-gray-700">
            <CardHeader>
              <CardTitle className="text-2xl text-purple-600 dark:text-purple-400">
                {currentContent.tests.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  <strong>16가지 성격 유형:</strong> {currentContent.tests.mbti}
                </p>
              </div>
              <div>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  <strong>에겐남 vs 테토남:</strong> {currentContent.tests.egen}
                </p>
              </div>
              <div>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  <strong>연애 스타일:</strong> {currentContent.tests.love}
                </p>
              </div>
              <div>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  <strong>궁합 테스트:</strong> {currentContent.tests.compatibility}
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 border-purple-100 dark:border-gray-700">
            <CardHeader>
              <CardTitle className="text-2xl text-purple-600 dark:text-purple-400">
                {currentContent.contact.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                {currentContent.contact.description}
              </p>
              <p className="text-gray-700 dark:text-gray-300 font-semibold">
                {currentContent.contact.email}
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default About;
