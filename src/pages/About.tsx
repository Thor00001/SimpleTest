
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Brain, Users, Heart, Target, Sparkles, BarChart3, Clock, Shield } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const About = () => {
  const { language } = useLanguage();

  const content = {
    ko: {
      title: "서비스 소개",
      subtitle: "심리 테스트의 새로운 차원을 경험해보세요",
      description: "SimpleTest.kr은 과학적 근거와 재미를 동시에 제공하는 심리 테스트 플랫폼입니다. 다양한 테스트를 통해 자신을 더 깊이 이해하고, 타인과의 관계를 개선해보세요.",
      features: {
        title: "주요 특징",
        items: [
          {
            icon: Brain,
            title: "과학적 접근",
            description: "심리학 이론을 바탕으로 한 정확한 분석"
          },
          {
            icon: Users,
            title: "다양한 테스트",
            description: "성격, 연애, 궁합 등 다양한 분야의 테스트"
          },
          {
            icon: Heart,
            title: "재미있는 경험",
            description: "흥미롭고 몰입도 높은 테스트 경험"
          },
          {
            icon: Target,
            title: "개인 맞춤",
            description: "개인별 특성에 맞는 맞춤형 결과"
          }
        ]
      },
      tests: {
        title: "제공하는 테스트",
        items: [
          {
            title: "성격 테스트",
            description: "MBTI 기반 성격 유형 분석",
            badge: "인기"
          },
          {
            title: "에겐테토 테스트",
            description: "남성 매력 유형 분석",
            badge: "신규"
          },
          {
            title: "연애 스타일 테스트",
            description: "연애 성향과 스타일 분석",
            badge: "추천"
          },
          {
            title: "궁합 테스트",
            description: "MBTI 기반 궁합 분석",
            badge: "특별"
          }
        ]
      },
      stats: {
        title: "놀라운 참여 통계",
        items: [
          {
            icon: Users,
            number: "10,000+",
            label: "누적 참여자"
          },
          {
            icon: BarChart3,
            number: "4",
            label: "테스트 종류"
          },
          {
            icon: Clock,
            number: "5분",
            label: "평균 소요시간"
          },
          {
            icon: Shield,
            number: "100%",
            label: "개인정보 보호"
          }
        ]
      },
      mission: {
        title: "우리의 목표",
        description: "SimpleTest.kr은 사람들이 자신을 더 잘 이해하고, 더 나은 인간관계를 형성할 수 있도록 돕는 것을 목표로 합니다. 과학적 근거를 바탕으로 한 정확한 분석과 재미있는 경험을 통해 자기 발견의 여정을 함께합니다."
      }
    },
    en: {
      title: "Service Introduction",
      subtitle: "Experience a new dimension of psychological testing",
      description: "SimpleTest.kr is a psychological testing platform that provides both scientific foundation and entertainment. Understand yourself more deeply and improve your relationships with others through various tests.",
      features: {
        title: "Key Features",
        items: [
          {
            icon: Brain,
            title: "Scientific Approach",
            description: "Accurate analysis based on psychological theories"
          },
          {
            icon: Users,
            title: "Various Tests",
            description: "Tests in various fields including personality, love, and compatibility"
          },
          {
            icon: Heart,
            title: "Fun Experience",
            description: "Interesting and highly engaging test experience"
          },
          {
            icon: Target,
            title: "Personalized",
            description: "Customized results tailored to individual characteristics"
          }
        ]
      },
      tests: {
        title: "Available Tests",
        items: [
          {
            title: "Personality Test",
            description: "MBTI-based personality type analysis",
            badge: "Popular"
          },
          {
            title: "Alpha/Soft Test",
            description: "Male charm type analysis",
            badge: "New"
          },
          {
            title: "Love Style Test",
            description: "Dating tendencies and style analysis",
            badge: "Recommended"
          },
          {
            title: "Compatibility Test",
            description: "MBTI-based compatibility analysis",
            badge: "Special"
          }
        ]
      },
      stats: {
        title: "Amazing Participation Statistics",
        items: [
          {
            icon: Users,
            number: "10,000+",
            label: "Total Participants"
          },
          {
            icon: BarChart3,
            number: "4",
            label: "Test Types"
          },
          {
            icon: Clock,
            number: "5min",
            label: "Average Duration"
          },
          {
            icon: Shield,
            number: "100%",
            label: "Privacy Protection"
          }
        ]
      },
      mission: {
        title: "Our Mission",
        description: "SimpleTest.kr aims to help people understand themselves better and form better human relationships. We accompany you on your journey of self-discovery through accurate analysis based on scientific evidence and fun experiences."
      }
    }
  };

  const currentContent = content[language];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 dark:from-gray-900 dark:via-purple-900 dark:to-gray-900">
      {/* Hero Section */}
      <div className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-6">
            {currentContent.title}
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
            {currentContent.subtitle}
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
            {currentContent.description}
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        {/* Features Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">
            {currentContent.features.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {currentContent.features.items.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300 border-2 border-purple-100 dark:border-gray-700">
                <CardContent className="p-6">
                  <feature.icon className="h-12 w-12 mx-auto mb-4 text-purple-600 dark:text-purple-400" />
                  <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">{feature.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Tests Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">
            {currentContent.tests.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {currentContent.tests.items.map((test, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-2 border-purple-100 dark:border-gray-700">
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <CardTitle className="text-xl text-gray-800 dark:text-white">{test.title}</CardTitle>
                    <Badge variant="secondary" className="bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200">
                      {test.badge}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300">{test.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Stats Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">
            {currentContent.stats.title}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {currentContent.stats.items.map((stat, index) => (
              <Card key={index} className="text-center bg-gradient-to-br from-purple-500 to-pink-500 text-white border-0">
                <CardContent className="p-6">
                  <stat.icon className="h-12 w-12 mx-auto mb-4" />
                  <div className="text-3xl font-bold mb-2">{stat.number}</div>
                  <div className="text-purple-100">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Mission Section */}
        <section>
          <Card className="bg-gradient-to-r from-purple-600 to-pink-600 text-white border-0">
            <CardHeader>
              <CardTitle className="text-3xl text-center text-white">
                <Sparkles className="h-8 w-8 inline-block mr-3" />
                {currentContent.mission.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-center leading-relaxed text-purple-100 max-w-4xl mx-auto">
                {currentContent.mission.description}
              </p>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default About;
