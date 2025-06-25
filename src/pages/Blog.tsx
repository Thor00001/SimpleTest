import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Clock, User, ArrowRight, Calendar, Eye } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '@/contexts/LanguageContext';
import { useState } from 'react';

const Blog = () => {
  const { t, language } = useLanguage();

  const blogPosts = [
    {
      id: 1,
      title: language === 'ko' ? 'MBTI 16가지 성격유형 완벽 가이드' : 'Complete Guide to 16 MBTI Personality Types',
      excerpt: language === 'ko' ? 
        'MBTI의 16가지 성격유형을 자세히 알아보고, 각 유형의 특징과 장단점, 적합한 직업과 연애 스타일까지 완벽하게 정리했습니다.' :
        'Learn about the 16 MBTI personality types in detail, including characteristics, strengths and weaknesses, suitable careers and relationship styles.',
      content: language === 'ko' ? 
        `MBTI(Myers-Briggs Type Indicator)는 세계에서 가장 널리 사용되는 성격 분류 도구 중 하나입니다. 칼 융의 심리학적 유형론을 바탕으로 개발된 이 도구는 사람들의 성격을 16가지 유형으로 분류합니다.

**MBTI의 4가지 차원**

1. **외향(E) vs 내향(I)**: 에너지를 얻는 방식
   - 외향형: 외부 세계에서 에너지를 얻음
   - 내향형: 내부 세계에서 에너지를 얻음

2. **감각(S) vs 직관(N)**: 정보를 받아들이는 방식
   - 감각형: 구체적이고 실제적인 정보 선호
   - 직관형: 추상적이고 미래지향적인 정보 선호

3. **사고(T) vs 감정(F)**: 의사결정하는 방식
   - 사고형: 논리와 분석을 중시
   - 감정형: 가치와 조화를 중시

4. **판단(J) vs 인식(P)**: 외부세계를 대하는 방식
   - 판단형: 체계적이고 계획적
   - 인식형: 유연하고 적응적

**16가지 성격유형 간단 정리**

**분석가(NT) 그룹**
- INTJ: 건축가 - 독립적이고 전략적인 사고가
- INTP: 논리술사 - 혁신적이고 호기심 많은 사상가
- ENTJ: 통솔자 - 대담하고 상상력이 풍부한 지도자
- ENTP: 변론가 - 영리하고 호기심이 많은 사상가

**외교관(NF) 그룹**
- INFJ: 옹호자 - 조용하고 신비로운 영감을 주는 이상주의자
- INFP: 중재자 - 시적이고 친절하며 이타적인 성격
- ENFJ: 선도자 - 카리스마 있고 영감을 주는 지도자
- ENFP: 활동가 - 열정적이고 창의적인 자유로운 정신

이런 식으로 각 유형은 고유한 특징과 강점을 가지고 있습니다. 자신의 MBTI 유형을 알면 자신을 더 잘 이해하고, 다른 사람들과의 관계에서도 더 효과적으로 소통할 수 있습니다.` :
        `MBTI (Myers-Briggs Type Indicator) is one of the most widely used personality classification tools in the world. Developed based on Carl Jung's psychological type theory, this tool classifies personalities into 16 types.

**Four Dimensions of MBTI**

1. **Extraversion (E) vs Introversion (I)**: How you gain energy
   - Extraverts: Gain energy from the external world
   - Introverts: Gain energy from the internal world

2. **Sensing (S) vs Intuition (N)**: How you take in information
   - Sensors: Prefer concrete and practical information
   - Intuitives: Prefer abstract and future-oriented information

3. **Thinking (T) vs Feeling (F)**: How you make decisions
   - Thinkers: Value logic and analysis
   - Feelers: Value harmony and personal values

4. **Judging (J) vs Perceiving (P)**: How you deal with the outer world
   - Judgers: Systematic and planned
   - Perceivers: Flexible and adaptable

**16 Personality Types Summary**

**Analysts (NT) Group**
- INTJ: Architect - Independent and strategic thinker
- INTP: Logician - Innovative and curious thinker
- ENTJ: Commander - Bold and imaginative leader
- ENTP: Debater - Smart and curious thinker

**Diplomats (NF) Group**
- INFJ: Advocate - Quiet and mystical inspiring idealist
- INFP: Mediator - Poetic, kind and altruistic
- ENFJ: Protagonist - Charismatic and inspiring leader
- ENFP: Campaigner - Enthusiastic, creative and free spirit

Each type has unique characteristics and strengths. Knowing your MBTI type helps you understand yourself better and communicate more effectively with others.`,
      author: language === 'ko' ? '심리학 전문가 김지현' : 'Psychology Expert Kim Jihyun', 
      date: '2024-06-20',
      readTime: language === 'ko' ? '8분' : '8 min',
      views: 15420,
      category: 'MBTI',
      tags: ['MBTI', language === 'ko' ? '성격유형' : 'Personality', language === 'ko' ? '심리학' : 'Psychology']
    },
    {
      id: 2,
      title: language === 'ko' ? '에겐남 vs 테토남, 진짜 차이점은?' : 'Egen vs Teto Male: Real Differences?',
      excerpt: language === 'ko' ? 
        'SNS에서 화제가 된 에겐남과 테토남의 실제 차이점과 각각의 매력 포인트를 심리학적 관점에서 분석해보았습니다.' :
        'We analyzed the real differences between Egen and Teto males from a psychological perspective, including their charm points.',
      content: language === 'ko' ? 
        `최근 SNS에서 큰 화제가 된 '에겐남'과 '테토남' 구분법. 단순한 인터넷 밈을 넘어서 실제로 남성의 매력과 성격을 분류하는 새로운 기준이 되고 있습니다.

**에겐남(Egen)의 특징**

에겐남은 '에너지틱하고 젠틀한 남자'의 줄임말로, 다음과 같은 특징을 보입니다:

- **카리스마**: 자연스럽게 주목받는 존재감
- **리더십**: 그룹에서 자연스럽게 리더 역할을 담당
- **적극성**: 원하는 것을 얻기 위해 적극적으로 행동
- **독립성**: 혼자서도 잘 해내는 능력
- **결단력**: 빠른 의사결정과 실행력

**테토남(Teto)의 특징**

테토남은 '텐더하고 토탈케어하는 남자'의 줄임말로, 다음과 같은 특징을 보입니다:

- **다정함**: 상대방을 세심하게 배려하는 성격
- **순수함**: 때묻지 않은 순수한 마음
- **안정감**: 함께 있으면 편안하고 안정적인 느낌
- **충성심**: 한 사람을 오래 좋아하는 일관성
- **감수성**: 예술이나 감정적인 부분에 민감함

**심리학적 분석**

이 두 유형은 심리학의 '애착 이론'과 '성격 5요인 모델'과 연관지어 볼 수 있습니다:

- 에겐남은 높은 외향성과 개방성을 보이는 반면
- 테토남은 높은 친화성과 성실성을 보입니다

결론적으로, 에겐남과 테토남은 각각 다른 매력을 가진 유형으로, 어느 쪽이 더 좋다고 할 수는 없습니다. 중요한 것은 자신의 성향을 이해하고 그에 맞는 매력을 발산하는 것입니다.` :
        `The recent SNS trend of categorizing males into 'Egen' and 'Teto' types has become more than just an internet meme - it's a new standard for classifying male charm and personality.

**Characteristics of Egen Males**

Egen males are 'Energetic and Gentle' men with these traits:

- **Charisma**: Natural commanding presence
- **Leadership**: Naturally takes leader roles in groups
- **Proactivity**: Acts decisively to achieve goals
- **Independence**: Capable of handling things alone
- **Decisiveness**: Quick decision-making and execution

**Characteristics of Teto Males**

Teto males are 'Tender and Total-care' men with these traits:

- **Kindness**: Thoughtful consideration for others
- **Innocence**: Pure and untainted heart
- **Stability**: Provides comfort and stability
- **Loyalty**: Consistent in long-term relationships
- **Sensitivity**: Sensitive to art and emotions

**Psychological Analysis**

These two types can be related to psychology's 'Attachment Theory' and 'Big Five Personality Model':

- Egen males show high extraversion and openness
- Teto males show high agreeableness and conscientiousness

In conclusion, both Egen and Teto males have different charms, and neither is superior. The key is understanding your own tendencies and expressing your unique charm accordingly.`,
      author: language === 'ko' ? '연애 심리 전문가 박수진' : 'Relationship Psychology Expert Park Sujin',
      date: '2024-06-18',
      readTime: language === 'ko' ? '6분' : '6 min',
      views: 23150,
      category: language === 'ko' ? '성격분석' : 'Personality',
      tags: [language === 'ko' ? '에겐남' : 'Egen', language === 'ko' ? '테토남' : 'Teto', language === 'ko' ? '매력' : 'Charm']
    },
    {
      id: 3,
      title: language === 'ko' ? '연애할 때 나타나는 성격 변화의 심리학' : 'Psychology of Personality Changes in Relationships',
      excerpt: language === 'ko' ? 
        '연애를 시작하면 왜 성격이 달라질까요? 사랑에 빠졌을 때 나타나는 심리적 변화와 그 이유를 과학적으로 분석해보았습니다.' :
        'Why does personality change when you start dating? We scientifically analyze the psychological changes that occur when falling in love.',
      content: language === 'ko' ? 
        `"연애하면 사람이 달라진다"는 말, 정말 과학적인 근거가 있을까요? 심리학 연구에 따르면, 사랑에 빠지면 실제로 뇌의 화학적 변화가 일어납니다.

**사랑에 빠졌을 때의 뇌 변화**

1. **도파민 증가**: 보상 시스템 활성화로 행복감 증가
2. **세로토닌 감소**: 강박적 사고 패턴 증가
3. **옥시토신 증가**: 애착과 유대감 강화
4. **코르티솔 변화**: 스트레스 반응의 변화

**연애 중 나타나는 성격 변화**

**긍정적 변화:**
- 더 관대하고 이해심이 깊어짐
- 자신감 향상
- 사회적 활동 증가
- 미래에 대한 긍정적 전망

**주의해야 할 변화:**
- 과도한 의존성
- 자아 정체성의 혼란
- 기존 인간관계 소홀
- 현실 감각 저하

**건강한 연애를 위한 조언**

1. **자아 정체성 유지**: 연애 중에도 자신만의 시간과 공간 확보
2. **균형잡힌 관계**: 상대방과의 관계와 다른 인간관계의 균형
3. **현실적 기대**: 완벽한 사랑은 없다는 현실 인식
4. **성장 지향**: 서로를 더 나은 사람으로 만드는 관계 추구

연애는 분명히 우리를 변화시킵니다. 하지만 그 변화가 긍정적인 성장이 되도록 하는 것이 중요합니다.` :
        `Is there scientific evidence for the saying "people change when they're in love"? According to psychological research, falling in love actually causes chemical changes in the brain.

**Brain Changes When Falling in Love**

1. **Increased Dopamine**: Activation of reward system increases happiness
2. **Decreased Serotonin**: Increased obsessive thought patterns
3. **Increased Oxytocin**: Strengthened attachment and bonding
4. **Cortisol Changes**: Altered stress response

**Personality Changes During Relationships**

**Positive Changes:**
- Become more tolerant and understanding
- Increased self-confidence
- Increased social activities
- Positive outlook on the future

**Changes to Be Careful Of:**
- Excessive dependency
- Confusion of self-identity
- Neglect of existing relationships
- Decreased sense of reality

**Advice for Healthy Relationships**

1. **Maintain Self-Identity**: Secure personal time and space even while dating
2. **Balanced Relationships**: Balance between romantic relationship and other relationships
3. **Realistic Expectations**: Recognize that perfect love doesn't exist
4. **Growth-Oriented**: Pursue relationships that make each other better people

Love certainly changes us. But it's important to ensure that change becomes positive growth.`,
      author: language === 'ko' ? '사랑의 과학 연구소 이민수' : 'Love Science Institute Lee Minsu',
      date: '2024-06-15',
      readTime: language === 'ko' ? '7분' : '7 min',
      views: 18900,
      category: language === 'ko' ? '연애심리' : 'Love Psychology',
      tags: [language === 'ko' ? '연애' : 'Dating', language === 'ko' ? '심리변화' : 'Psychology', language === 'ko' ? '뇌과학' : 'Neuroscience']
    }
  ];

  const [selectedPost, setSelectedPost] = useState<typeof blogPosts[0] | null>(null);

  const handlePostClick = (post: typeof blogPosts[0]) => {
    setSelectedPost(post);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToList = () => {
    setSelectedPost(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 py-12">
      <Helmet>
        <title>{language === 'ko' ? '심리학 블로그 - SimpleTest.kr' : 'Psychology Blog - SimpleTest.kr'}</title>
        <meta name="description" content={language === 'ko' ? 
          '심리학 전문가들이 들려주는 흥미로운 심리학 이야기. MBTI, 연애심리, 성격분석 등 다양한 주제의 심리학 콘텐츠를 만나보세요.' :
          'Interesting psychology stories from psychology experts. Discover various psychology content including MBTI, relationship psychology, and personality analysis.'
        } />
        <meta name="keywords" content={language === 'ko' ? 
          '심리학 블로그, MBTI, 연애심리, 성격분석, 심리테스트, 에겐남, 테토남' :
          'psychology blog, MBTI, relationship psychology, personality analysis, psychology test, egen, teto'
        } />
        <meta property="og:title" content={language === 'ko' ? '심리학 블로그 - SimpleTest.kr' : 'Psychology Blog - SimpleTest.kr'} />
        <meta property="og:description" content={language === 'ko' ? 
          '심리학 전문가들이 들려주는 흥미로운 심리학 이야기. MBTI, 연애심리, 성격분석 등 다양한 주제의 심리학 콘텐츠를 만나보세요.' :
          'Interesting psychology stories from psychology experts. Discover various psychology content including MBTI, relationship psychology, and personality analysis.'
        } />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://simpletest.kr/blog" />
      </Helmet>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {!selectedPost ? (
          <>
            {/* Header */}
            <div className="text-center mb-16">
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                {t('blog.title')}
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {t('blog.subtitle')}
              </p>
            </div>

            {/* Blog Posts Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <Card 
                  key={post.id} 
                  className="shadow-lg border-0 hover:shadow-xl transition-all duration-300 cursor-pointer hover-scale overflow-hidden"
                  onClick={() => handlePostClick(post)}
                >
                  <div className="h-48 bg-gradient-to-br from-purple-400 to-pink-400 relative overflow-hidden group">
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-all duration-300" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <Badge className="mb-3 bg-white/20 text-white border-white/30">
                        {post.category}
                      </Badge>
                      <h3 className="text-white font-bold text-lg leading-tight line-clamp-2">
                        {post.title}
                      </h3>
                    </div>
                  </div>
                  
                  <CardContent className="p-6">
                    <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-1">
                          <User className="h-4 w-4" />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-4 w-4" />
                          <span>{post.date}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <div className="flex items-center space-x-1">
                          <Clock className="h-4 w-4" />
                          <span>{post.readTime}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Eye className="h-4 w-4" />
                          <span>{post.views.toLocaleString()}</span>
                        </div>
                      </div>
                      <ArrowRight className="h-5 w-5 text-purple-600 group-hover:translate-x-1 transition-transform" />
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mt-4">
                      {post.tags.map((tag, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </>
        ) : (
          /* Selected Post View */
          <div className="max-w-4xl mx-auto">
            <button
              onClick={handleBackToList}
              className="mb-8 inline-flex items-center text-purple-600 hover:text-purple-800 transition-colors"
            >
              <ArrowRight className="h-5 w-5 mr-2 rotate-180" />
              {language === 'ko' ? '목록으로 돌아가기' : 'Back to List'}
            </button>
            
            <Card className="shadow-xl border-0 overflow-hidden">
              <div className="h-64 bg-gradient-to-br from-purple-400 to-pink-400 relative">
                <div className="absolute inset-0 bg-black/30" />
                <div className="absolute bottom-8 left-8 right-8 text-white">
                  <Badge className="mb-4 bg-white/20 text-white border-white/30">
                    {selectedPost.category}
                  </Badge>
                  <h1 className="text-4xl font-bold mb-4">{selectedPost.title}</h1>
                  <div className="flex items-center space-x-6 text-white/90">
                    <div className="flex items-center space-x-2">
                      <User className="h-5 w-5" />
                      <span>{selectedPost.author}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-5 w-5" />
                      <span>{selectedPost.date}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="h-5 w-5" />
                      <span>{selectedPost.readTime}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Eye className="h-5 w-5" />
                      <span>{selectedPost.views.toLocaleString()}</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <CardContent className="p-8">
                <div className="prose prose-lg max-w-none">
                  <div className="text-gray-700 leading-relaxed whitespace-pre-line">
                    {selectedPost.content}
                  </div>
                </div>
                
                <div className="mt-8 pt-8 border-t">
                  <div className="flex flex-wrap gap-2">
                    {selectedPost.tags.map((tag, index) => (
                      <Badge key={index} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
};

export default Blog;
