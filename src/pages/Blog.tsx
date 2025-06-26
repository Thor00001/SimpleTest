import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, User, Clock } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import BlogPost from '@/components/BlogPost';

const Blog = () => {
  const [selectedPost, setSelectedPost] = useState<any>(null);

  const blogPosts = [
    {
      id: 1,
      title: "MBTI 성격유형별 연애 스타일 완전 분석",
      excerpt: "16가지 MBTI 유형별 연애 특성과 궁합을 자세히 알아보세요. 각 유형의 사랑 언어와 연애 패턴을 심리학적 관점에서 분석합니다.",
      content: `MBTI는 칼 융의 심리유형론을 바탕으로 한 성격 분류 도구로, 연애에서도 중요한 지표가 됩니다.

**외향형(E) vs 내향형(I)의 연애 스타일**

외향형은 활발한 데이트와 많은 사람들과의 만남을 선호하는 반면, 내향형은 조용하고 깊이 있는 시간을 중시합니다. 서로 다른 에너지 충전 방식을 이해하는 것이 중요합니다.

**감각형(S) vs 직관형(N)의 차이점**

감각형은 현실적이고 구체적인 표현을 좋아하며, 직관형은 상상력과 가능성에 중점을 둡니다. 감각형은 "지금 이 순간"을, 직관형은 "미래의 가능성"을 중시합니다.

**사고형(T) vs 감정형(F)의 갈등 해결**

사고형은 논리적 분석을 통해 문제를 해결하려 하고, 감정형은 감정과 가치를 우선시합니다. 서로의 접근 방식을 존중하는 것이 건강한 관계의 핵심입니다.

**판단형(J) vs 인식형(P)의 라이프스타일**

판단형은 계획적이고 안정적인 관계를 선호하며, 인식형은 자유롭고 유연한 관계를 추구합니다. 서로의 스타일을 이해하고 조율하는 노력이 필요합니다.`,
      author: "김심리",
      date: "2024-01-15",
      readTime: 8,
      category: "연애 심리",
      tags: ["MBTI", "연애", "성격분석", "궁합"]
    },
    {
      id: 2,
      title: "에겐남 테토남 현상의 심리학적 배경",
      excerpt: "최근 SNS에서 화제가 된 에겐남/테토남 분류의 심리학적 근거와 사회문화적 의미를 분석합니다.",
      content: `에겐남/테토남 현상은 현대 사회의 남성성에 대한 새로운 관점을 제시합니다.

**전통적 남성성의 변화**

과거 남성성은 강인함, 리더십, 책임감으로 정의되었습니다. 하지만 현대에는 감성적이고 배려깊은 남성상도 매력적으로 여겨집니다.

**에겐남의 특징과 매력**

- 카리스마와 리더십
- 강인한 정신력
- 책임감과 신뢰성
- 결정력과 추진력

에겐남은 전통적 남성성을 현대적으로 재해석한 유형입니다.

**테토남의 특징과 매력**

- 순수하고 다정한 성격
- 높은 공감 능력
- 유머감각과 친근함
- 감정 표현의 자유로움

테토남은 새로운 남성성의 대표적 유형으로, 감정적 지능이 높은 특징을 보입니다.

**사회적 의미와 시사점**

이러한 분류는 성별 고정관념을 깨고 다양한 매력을 인정하는 사회적 변화를 반영합니다.`,
      author: "박사회",
      date: "2024-01-10",
      readTime: 6,
      category: "사회 트렌드",
      tags: ["에겐남", "테토남", "남성성", "사회심리"]
    },
    {
      id: 3,
      title: "성공적인 연애를 위한 5가지 심리학 팁",
      excerpt: "심리학 연구를 바탕으로 한 건강하고 지속가능한 연애 관계를 만드는 실용적인 조언들을 소개합니다.",
      content: `심리학 연구에 기반한 성공적인 연애의 비밀을 알아보겠습니다.

**1. 애착 유형 이해하기**

존 볼비의 애착 이론에 따르면, 우리의 연애 패턴은 어린 시절 경험에 영향을 받습니다.

- 안정형: 건강한 관계 형성
- 회피형: 친밀감에 대한 두려움
- 불안형: 관계에 대한 과도한 걱정
- 혼란형: 일관성 없는 연애 패턴

**2. 효과적인 소통 방법**

- 'I' 메시지 사용하기
- 적극적 경청 실천하기
- 비폭력적 대화법 적용하기
- 감정 표현의 중요성

**3. 갈등 해결 전략**

고트만 박사의 연구에 따르면, 성공적인 커플들은 특별한 갈등 해결 패턴을 보입니다.

- 비판보다는 구체적 요청
- 방어적 태도 피하기
- 경멸적 표현 금지
- 담쌓기 현상 극복

**4. 친밀감 증진 방법**

- 일상적 관심 표현하기
- 공통 관심사 만들기
- 신체적 접촉의 중요성
- 감정적 지지 제공하기

**5. 개인 성장과 관계 발전**

건강한 관계는 개인의 성장을 바탕으로 합니다. 서로의 꿈과 목표를 지지하며 함께 발전해나가는 것이 중요합니다.`,
      author: "이연애",
      date: "2024-01-08",
      readTime: 10,
      category: "연애 가이드",
      tags: ["연애팁", "관계심리", "소통", "갈등해결"]
    },
    {
      id: 4,
      title: "현대인의 스트레스와 성격변화 패턴",
      excerpt: "디지털 시대의 스트레스가 우리의 성격에 미치는 영향과 대처 방안을 심층 분석합니다.",
      content: `현대 사회의 스트레스는 우리의 성격 형성에 큰 영향을 미칩니다.

**디지털 스트레스의 특징**

- SNS 비교 심리
- 정보 과부하
- 즉시성에 대한 압박
- 온라인 관계의 피상성

**스트레스가 성격에 미치는 영향**

**1. 외향성의 변화**
코로나19와 디지털 소통 증가로 많은 사람들이 내향적 성향을 보이게 되었습니다.

**2. 신경성의 증가**
불확실한 미래와 경쟁 사회는 불안감과 예민함을 증가시킵니다.

**3. 개방성의 감소**
안전을 추구하려는 경향이 새로운 경험에 대한 개방성을 줄입니다.

**건강한 성격 유지 방법**

**마음챙김 실천**
- 명상과 요가
- 자연과의 교감
- 디지털 디톡스

**사회적 연결 강화**
- 오프라인 만남 늘리기
- 깊이 있는 대화 나누기
- 공동체 활동 참여

**자기계발과 성장**
- 새로운 취미 개발
- 학습과 도전
- 목표 설정과 달성

**스트레스 관리의 중요성**

적절한 스트레스 관리는 성격의 긍정적 변화를 도모하고 전반적인 삶의 질을 향상시킵니다.`,
      author: "정스트레스",
      date: "2024-01-05",
      readTime: 7,
      category: "현대 심리",
      tags: ["스트레스", "성격변화", "디지털", "현대사회"]
    },
    {
      id: 5,
      title: "빅파이브 성격이론으로 본 직업 적성",
      excerpt: "빅파이브 성격 모델을 활용하여 자신에게 맞는 직업과 진로를 찾는 방법을 알아봅시다.",
      content: `빅파이브 성격 이론은 직업 선택과 진로 설계에 중요한 지침을 제공합니다.

**빅파이브 성격 요인**

**1. 개방성 (Openness)**
- 높음: 예술가, 연구원, 컨설턴트
- 낮음: 회계사, 은행원, 관리직

**2. 성실성 (Conscientiousness)**
- 높음: 의사, 변호사, 관리자
- 낮음: 예술가, 기업가, 언론인

**3. 외향성 (Extraversion)**
- 높음: 영업직, 교사, 정치인
- 낮음: 프로그래머, 연구원, 작가

**4. 친화성 (Agreeableness)**
- 높음: 상담사, 간호사, 사회복지사
- 낮음: 경영자, 판사, 군인

**5. 신경성 (Neuroticism)**
- 높음: 창작 분야, 상담 분야
- 낮음: 응급의학, 조종사, 소방관

**성격과 직업 만족도**

연구에 따르면 자신의 성격과 맞는 직업을 선택한 사람들이 높은 직업 만족도와 성과를 보입니다.

**진로 선택 시 고려사항**

- 개인의 가치관과 목표
- 성격적 강점과 약점
- 환경적 요인과 기회
- 장기적 비전과 계획

**성격 개발과 적응**

성격은 어느 정도 변화 가능하므로, 원하는 직업에 맞게 자신을 발전시키는 노력도 중요합니다.`,
      author: "최진로",
      date: "2024-01-03",
      readTime: 9,
      category: "진로 상담",
      tags: ["빅파이브", "직업적성", "진로선택", "성격이론"]
    },
    {
      id: 6,
      title: "Z세대의 연애관과 가치관 변화",
      excerpt: "MZ세대의 연애 문화와 가치관 변화를 분석하고, 이들의 특징적인 성격 특성을 살펴봅니다.",
      content: `Z세대(1997-2012년생)는 이전 세대와 다른 독특한 연애관과 가치관을 보입니다.

**Z세대 연애의 특징**

**1. 개인주의적 성향**
- 자아실현을 우선시
- 독립적인 관계 추구
- 개인의 성장과 발전 중시

**2. 디지털 네이티브**
- SNS를 통한 만남과 소통
- 온라인 데이팅 앱 활용
- 디지털 표현의 익숙함

**3. 다양성과 포용성**
- 성별, 성향의 다양성 인정
- 전통적 역할 구분 거부
- 열린 관계 형태 수용

**연애에서 중시하는 가치**

**솔직한 소통**
Z세대는 감정과 생각의 솔직한 표현을 중요하게 여깁니다.

**상호 존중**
서로의 개성과 독립성을 인정하고 존중하는 관계를 추구합니다.

**공동 성장**
함께 성장하고 발전할 수 있는 파트너를 원합니다.

**유연한 관계**
전통적인 틀에 얽매이지 않는 자유로운 관계를 선호합니다.

**기성세대와의 차이점**

- 결혼에 대한 인식 변화
- 경제적 안정보다 개인의 행복 우선
- 장기적 계획보다 현재의 만족 추구

**Z세대 연애의 도전과제**

- 깊이 있는 관계 형성의 어려움
- 즉석 만족 문화의 부작용
- 현실과 이상의 괴리

**건강한 관계를 위한 조언**

Z세대에게는 온라인과 오프라인의 균형, 진정성 있는 소통, 인내심 있는 관계 구축이 중요합니다.`,
      author: "김젠지",
      date: "2024-01-01",
      readTime: 8,
      category: "세대 문화",
      tags: ["Z세대", "MZ세대", "연애문화", "가치관변화"]
    },
    {
      id: 7,
      title: "심리학으로 본 첫인상의 과학",
      excerpt: "첫 만남에서 형성되는 인상이 관계에 미치는 영향과 긍정적인 첫인상을 만드는 심리학적 방법들을 소개합니다.",
      content: `첫인상은 7초 안에 결정되며, 이후 관계에 지속적인 영향을 미칩니다.

**첫인상 형성의 메커니즘**

**1. 헤일로 효과 (Halo Effect)**
한 가지 긍정적 특성이 전체적인 평가에 영향을 미치는 현상입니다.

**2. 확증 편향 (Confirmation Bias)**
첫인상이 형성되면 이를 뒷받침하는 정보만 선택적으로 받아들입니다.

**3. 기초 귀인 오류**
상황적 요인보다 성격적 요인으로 행동을 해석하려는 경향입니다.

**첫인상에 영향을 미치는 요소**

**외모와 복장**
- 깔끔한 외모와 적절한 복장
- 바디랭귀지와 자세
- 미소와 눈맞춤

**음성과 말투**
- 목소리의 톤과 속도
- 발음과 억양
- 대화의 내용과 방식

**행동과 태도**
- 예의와 매너
- 자신감과 진정성
- 상대방에 대한 관심

**긍정적 첫인상 만들기**

**1. SOLER 기법**
- S(Square): 어깨를 곧게 펴기
- O(Open): 열린 자세 취하기
- L(Lean): 상대방 쪽으로 약간 기울이기
- E(Eye contact): 적절한 눈맞춤
- R(Relax): 편안한 분위기 만들기

**2. 미러링 효과**
상대방의 행동이나 말투를 자연스럽게 따라하여 친밀감을 높입니다.

**3. 공감적 경청**
상대방의 말에 진심으로 관심을 보이고 적절한 반응을 합니다.

**첫인상의 한계와 극복**

첫인상이 항상 정확하지는 않으므로, 시간을 두고 상대방을 더 깊이 알아가는 것이 중요합니다.

**관계 발전을 위한 팁**

- 선입견 없이 상대방 이해하기
- 지속적인 관심과 소통
- 진정성 있는 태도 유지`,
      author: "박첫인상",
      date: "2023-12-28",
      readTime: 6,
      category: "인간관계",
      tags: ["첫인상", "인상관리", "인간관계", "사회심리"]
    },
    {
      id: 8,
      title: "감정지능(EQ)을 높이는 실전 가이드",
      excerpt: "감정지능의 중요성과 일상생활에서 EQ를 향상시킬 수 있는 구체적인 방법들을 제시합니다.",
      content: `감정지능(EQ)은 성공과 행복의 핵심 요소로 주목받고 있습니다.

**감정지능의 4가지 구성요소**

**1. 자기인식 (Self-Awareness)**
- 자신의 감정 상태 파악
- 감정의 원인 이해
- 장점과 단점 인식

**2. 자기관리 (Self-Management)**
- 감정 조절 능력
- 스트레스 관리
- 충동 억제력

**3. 사회적 인식 (Social Awareness)**
- 타인의 감정 이해
- 공감 능력
- 비언어적 신호 해석

**4. 관계관리 (Relationship Management)**
- 효과적인 소통
- 갈등 해결
- 협력과 리더십

**EQ 향상을 위한 실전 방법**

**자기인식 높이기**
- 감정 일기 쓰기
- 명상과 자기 성찰
- 피드백 적극 수용하기

**감정 조절 연습**
- 심호흡과 이완 기법
- 인지적 재평가
- 긍정적 자기 대화

**공감 능력 개발**
- 적극적 경청 실천
- 상대방 입장에서 생각하기
- 비판단적 태도 유지

**소통 기술 향상**
- 'I' 메시지 사용
- 감정 표현 연습
- 건설적 피드백 제공

**EQ가 높은 사람의 특징**

- 스트레스 상황에서도 침착함
- 타인과의 관계가 원만함
- 변화에 유연하게 적응
- 자신감과 낙관성 보유

**일상생활에서의 적용**

**직장에서**
- 동료와의 협력 강화
- 고객 서비스 개선
- 리더십 발휘

**연애와 결혼에서**
- 파트너와의 소통 개선
- 갈등 상황 해결
- 친밀감 증진

**자녀교육에서**
- 감정 코칭
- 공감적 소통
- 건강한 관계 모델링

감정지능은 타고나는 것이 아니라 후천적으로 개발 가능한 능력입니다.`,
      author: "한감정",
      date: "2023-12-25",
      readTime: 9,
      category: "감정 관리",
      tags: ["감정지능", "EQ", "감정관리", "인간관계"]
    }
  ];

  if (selectedPost) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4 dark:from-gray-900 dark:to-gray-800">
        <BlogPost post={selectedPost} onBack={() => setSelectedPost(null)} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4 dark:from-gray-900 dark:to-gray-800">
      <Helmet>
        <title>심리테스트 블로그 - SimpleTest.kr</title>
        <meta name="description" content="성격분석, 연애심리, MBTI, 심리학 이론 등 다양한 심리테스트와 관련된 전문 콘텐츠를 제공하는 블로그입니다." />
        <meta name="keywords" content="심리테스트 블로그, 성격분석, 연애심리, MBTI, 심리학, 성격유형, 인간관계" />
        <meta property="og:title" content="심리테스트 블로그 - 성격과 심리에 대한 모든 것" />
        <meta property="og:description" content="성격분석, 연애심리, MBTI 등 심리학 전문 콘텐츠를 만나보세요. 전문가가 작성한 양질의 심리학 정보를 제공합니다." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://simpletest.kr/blog" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="심리테스트 블로그 - 성격과 심리에 대한 모든 것" />
        <meta name="twitter:description" content="성격분석, 연애심리, MBTI 등 심리학 전문 콘텐츠를 만나보세요." />
      </Helmet>
      
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 pt-8">
          <h1 className="text-5xl font-bold text-gray-800 mb-4 dark:text-white">
            📚 심리테스트 블로그
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            성격분석과 심리학에 대한 전문적이고 유용한 정보를 제공합니다
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Card 
              key={post.id} 
              className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 dark:bg-gray-800 dark:border-gray-700 cursor-pointer"
              onClick={() => setSelectedPost(post)}
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="outline" className="text-xs dark:border-gray-600">
                    {post.category}
                  </Badge>
                  <div className="flex items-center text-xs text-gray-500 dark:text-gray-400">
                    <Clock className="h-3 w-3 mr-1" />
                    {post.readTime}분
                  </div>
                </div>
                <CardTitle className="text-xl leading-tight hover:text-blue-600 transition-colors dark:text-white dark:hover:text-blue-400">
                  {post.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3 dark:text-gray-300">
                  {post.excerpt}
                </p>
                
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-1">
                    {post.tags.map((tag, index) => (
                      <Badge key={index} variant="secondary" className="text-xs dark:bg-gray-700 dark:text-gray-300">
                        #{tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
                    <div className="flex items-center">
                      <User className="h-3 w-3 mr-1" />
                      {post.author}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-3 w-3 mr-1" />
                      {post.date}
                    </div>
                  </div>
                </div>

                <Button className="w-full mt-4" variant="outline">
                  전체 글 읽기
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 dark:text-gray-300">
            더 많은 심리학 콘텐츠가 곧 업데이트됩니다!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
