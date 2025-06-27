
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Star, Users, Clock, Heart, Brain, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '@/contexts/LanguageContext';

const Index = () => {
  const { t, language } = useLanguage();

  const popularTests = [
    {
      title: t('test.egen-teto.title'),
      description: t('test.egen-teto.description'),
      emoji: "💪",
      color: "from-blue-500 to-purple-500",
      path: "/egen-teto-test",
      participants: language === 'ko' ? "50만+" : "500K+"
    },
    {
      title: t('test.personality.title'),
      description: t('test.personality.description'),
      emoji: "🧠",
      color: "from-purple-500 to-pink-500",
      path: "/personality-test",
      participants: language === 'ko' ? "100만+" : "1M+"
    },
    {
      title: t('test.compatibility.title'),
      description: t('test.compatibility.description'),
      emoji: "💕",
      color: "from-pink-500 to-red-500",
      path: "/compatibility-test",
      participants: language === 'ko' ? "30만+" : "300K+"
    },
    {
      title: t('test.love-style.title'),
      description: t('test.love-style.description'),
      emoji: "💖",
      color: "from-red-500 to-orange-500",
      path: "/love-style-test",
      participants: language === 'ko' ? "25만+" : "250K+"
    }
  ];

  const features = [
    {
      icon: <Brain className="h-8 w-8" />,
      title: t('common.scientific'),
      description: language === 'ko' ? 
        "심리학 이론과 연구를 바탕으로 한 신뢰할 수 있는 테스트" :
        "Reliable tests based on psychological theories and research"
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: t('common.fun'),
      description: language === 'ko' ? 
        "지루하지 않고 몰입할 수 있는 인터랙티브한 테스트 경험" :
        "Interactive test experience that is engaging and not boring"
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: t('common.practical'),
      description: language === 'ko' ? 
        "일상생활과 관계 개선에 도움이 되는 구체적인 분석" :
        "Specific analysis that helps improve daily life and relationships"
    }
  ];

  const statsLabels = language === 'ko' ? 
    ["총 참여자", "테스트 종류", "만족도", "언제나 이용"] :
    ["Total Participants", "Test Types", "Satisfaction", "Always Available"];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 dark:from-purple-900 dark:via-pink-900 dark:to-red-900">
      <Helmet>
        <title>{language === 'ko' ? 'SimpleTest.kr - 재미있고 정확한 심리 테스트' : 'SimpleTest.kr - Fun and Accurate Psychology Tests'}</title>
        <meta name="description" content={language === 'ko' ? 
          '재미있고 정확한 심리 테스트로 자신을 더 잘 알아가세요. MBTI, 에겐테토, 연애스타일, 궁합테스트 등 다양한 성격분석 테스트를 무료로 제공합니다.' :
          'Discover yourself better with fun and accurate psychology tests. Free personality analysis tests including MBTI, Egenteto, love style, and compatibility tests.'
        } />
        <meta name="keywords" content={language === 'ko' ? 
          '심리테스트, MBTI, 성격테스트, 에겐테토, 연애스타일, 궁합테스트, 성격분석, 무료테스트' :
          'psychology test, MBTI, personality test, egenteto, love style, compatibility test, personality analysis, free test'
        } />
        <meta property="og:title" content={language === 'ko' ? 'SimpleTest.kr - 재미있고 정확한 심리 테스트' : 'SimpleTest.kr - Fun and Accurate Psychology Tests'} />
        <meta property="og:description" content={language === 'ko' ? 
          '재미있고 정확한 심리 테스트로 자신을 더 잘 알아가세요. MBTI, 에겐테토, 연애스타일 등 다양한 성격분석 테스트를 무료로 제공합니다.' :
          'Discover yourself better with fun and accurate psychology tests. Free personality analysis tests including MBTI, Egenteto, and love style tests.'
        } />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://simpletest.kr/" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={language === 'ko' ? 'SimpleTest.kr - 재미있고 정확한 심리 테스트' : 'SimpleTest.kr - Fun and Accurate Psychology Tests'} />
        <meta name="twitter:description" content={language === 'ko' ? 
          '재미있고 정확한 심리 테스트로 자신을 더 잘 알아가세요. MBTI, 에겐테토, 연애스타일 등 다양한 성격분석 테스트를 무료로 제공합니다.' :
          'Discover yourself better with fun and accurate psychology tests. Free personality analysis tests including MBTI, Egenteto, and love style tests.'
        } />
      </Helmet>
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <div className="mb-8">
            <h1 className="text-6xl font-bold text-white mb-4 drop-shadow-lg">
              {t('home.title')}
            </h1>
            <h2 className="text-4xl font-bold text-white/90 mb-2">
              {t('home.subtitle')}
            </h2>
            <p className="text-xl text-white/80 mb-8">
              {t('home.description')}
            </p>
          </div>

          <Card className="bg-white/90 backdrop-blur-sm shadow-2xl border-0 mb-8 hover-scale dark:bg-gray-800/90">
            <CardHeader>
              <CardTitle className="text-2xl text-gray-800 dark:text-white">
                ✨ {t('home.popular.title')}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-600 text-lg leading-relaxed dark:text-gray-300 whitespace-pre-line">
                {t('home.popular.description')}
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-500 dark:text-gray-400">
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4" />
                  <span>{language === 'ko' ? '2-5분 소요' : '2-5 minutes'}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Star className="h-4 w-4" />
                  <span>{language === 'ko' ? '정확한 분석' : 'Accurate Analysis'}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="h-4 w-4" />
                  <span>{language === 'ko' ? '200만+ 참여' : '2M+ Participants'}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span>📱</span>
                  <span>{language === 'ko' ? '결과 공유' : 'Share Result'}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Popular Tests Section */}
      <section className="py-16 px-4 bg-white/10 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            {t('home.tests.title')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularTests.map((test, index) => (
              <Link key={index} to={test.path}>
                <Card className="bg-white/90 backdrop-blur-sm shadow-xl border-0 hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer dark:bg-gray-800/90">
                  <CardHeader>
                    <div className="text-4xl text-center mb-3">{test.emoji}</div>
                    <CardTitle className="text-lg text-center text-gray-800 dark:text-white">
                      {test.title}
                    </CardTitle>
                    <p className="text-sm text-center text-gray-500 dark:text-gray-400">
                      {test.participants} {t('common.participants')}
                    </p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-center mb-4 dark:text-gray-300">
                      {test.description}
                    </p>
                    <Button 
                      className={`w-full bg-gradient-to-r ${test.color} text-white font-bold hover:opacity-90`}
                    >
                      {t('common.test-now')}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            {t('home.features.title')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="bg-white/90 backdrop-blur-sm shadow-xl border-0 text-center dark:bg-gray-800/90">
                <CardContent className="p-6">
                  <div className="text-purple-600 mb-4 flex justify-center dark:text-purple-400">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3 dark:text-white">{feature.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-white/10 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            {t('home.stats.title')}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-white mb-2">{language === 'ko' ? '200만+' : '2M+'}</div>
              <div className="text-white/80">{statsLabels[0]}</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">4</div>
              <div className="text-white/80">{statsLabels[1]}</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">98%</div>
              <div className="text-white/80">{statsLabels[2]}</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">24/7</div>
              <div className="text-white/80">{statsLabels[3]}</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            {t('home.cta.title')}
          </h2>
          <p className="text-xl text-white/80 mb-8">
            {t('home.cta.description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/egen-teto-test">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-3 px-6 rounded-full"
              >
                {language === 'ko' ? '에겐/테토 테스트 하기' : 'Take Egen/Teto Test'}
              </Button>
            </Link>
            <Link to="/personality-test">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-3 px-6 rounded-full"
              >
                {language === 'ko' ? '성격 테스트 하기' : 'Take Personality Test'}
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
