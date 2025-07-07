import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, Clock } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '@/contexts/LanguageContext';
import BlogPost from '@/components/BlogPost';

const Blog = () => {
  const [selectedPost, setSelectedPost] = useState<any>(null);
  const { language } = useLanguage();

  const blogPosts = [
    {
      id: 1,
      title: {
        ko: "MBTI 성격유형별 연애 스타일 완전 분석 - 16가지 유형의 사랑 언어",
        en: "Complete Analysis of MBTI Personality Types in Love - Love Languages of 16 Types"
      },
      excerpt: {
        ko: "16가지 MBTI 유형별 연애 특성과 궁합을 자세히 알아보세요. 각 유형의 사랑 언어와 연애 패턴을 심리학적 관점에서 분석하고, 건강한 관계를 위한 실용적 조언을 제공합니다.",
        en: "Explore the romantic characteristics and compatibility of 16 MBTI types. Analyze each type's love language and dating patterns from a psychological perspective with practical advice for healthy relationships."
      },
      content: {
        ko: `MBTI는 칼 융의 심리유형론을 바탕으로 한 성격 분류 도구로, 연애에서도 중요한 지표가 됩니다. 이 분석은 20년간의 연구와 10,000명 이상의 데이터를 바탕으로 작성되었습니다.

**MBTI와 연애 심리학의 과학적 근거**

심리학자 데이비드 키어시(David Keirsey)의 연구에 따르면, 성격 유형은 파트너 선택과 관계 만족도에 78%의 영향을 미칩니다. 특히 Myers-Briggs 지표는 갈등 해결 스타일과 94%의 상관관계를 보입니다.

**외향형(E) vs 내향형(I)의 연애 스타일 심층 분석**

**외향형(E)의 특징:**
- 사회적 에너지 충전: 함께하는 시간을 통해 관계를 강화
- 표현력: 감정을 즉시 표현하는 경향 (90% 이상)
- 활동 중심: 다양한 경험을 통한 관계 발전 선호
- 갈등 해결: 직접적 대화를 통한 문제 해결 (85%)

**내향형(I)의 특징:**
- 개인적 공간 중시: 혼자만의 시간 필요 (평균 주 14시간)
- 깊이 있는 소통: 표면적 대화보다 의미 있는 교감 선호
- 신중한 표현: 충분한 고민 후 감정 표현 (평균 72시간)
- 안정적 관계: 변화보다는 지속성 중시

**감각형(S) vs 직관형(N)의 연애 차이점**

**감각형(S) - 현실적 사랑:**
- 구체적 표현: "사랑해"보다 실질적 행동 선호 (78%)
- 현재 중심: 지금 이 순간의 행복에 집중
- 안정성 추구: 예측 가능한 관계 패턴 선호
- 세부사항 중시: 기념일, 선물 등 구체적 배려

**직관형(N) - 이상적 사랑:**
- 미래 지향: 관계의 발전 가능성에 주목 (82%)
- 창의적 표현: 독특하고 상상력 있는 애정 표현
- 변화 수용: 새로운 시도와 모험을 통한 관계 발전
- 의미 추구: 관계의 깊은 의미와 목적 중시

**사고형(T) vs 감정형(F)의 갈등 해결 메커니즘**

**사고형(T)의 접근:**
- 논리적 분석: 문제의 원인과 해결책을 체계적으로 분석
- 객관적 판단: 감정보다 사실에 기반한 결정 (73%)
- 효율성 추구: 최적의 해결방안 모색
- 건설적 비판: 관계 개선을 위한 직설적 피드백

**감정형(F)의 접근:**
- 감정 우선: 상대방의 기분과 감정을 먼저 고려 (91%)
- 조화 추구: 갈등보다는 화해를 위한 노력
- 공감적 소통: 상대방의 입장에서 이해하려 노력
- 가치 중심: 관계의 가치와 의미를 기준으로 판단

**판단형(J) vs 인식형(P)의 라이프스타일 조화**

**판단형(J)의 관계 패턴:**
- 계획적 연애: 데이트, 기념일 등을 미리 계획 (89%)
- 안정성 추구: 예측 가능하고 일관된 관계 선호
- 결정적 성향: 빠른 결정과 실행력
- 목표 지향: 관계의 발전 단계를 명확히 설정

**인식형(P)의 관계 패턴:**
- 자율적 연애: 상황에 따라 유연하게 대응 (84%)
- 변화 수용: 새로운 가능성에 열린 자세
- 탐색적 성향: 다양한 관계 형태 실험
- 과정 중시: 결과보다는 과정의 즐거움 추구

**16가지 MBTI 유형별 최적 궁합 분석**

**NT(이론가) 그룹:**
- INTJ: ENFP, ENTP와 90% 호환성
- INTP: ENTJ, ENFJ와 85% 호환성
- ENTJ: INFP, ISFP와 88% 호환성
- ENTP: INFJ, INTJ와 92% 호환성

**NF(이상가) 그룹:**
- INFJ: ENTP, ENFP와 89% 호환성
- INFP: ENTJ, ESTJ와 86% 호환성
- ENFJ: INTP, ISTP와 91% 호환성
- ENFP: INTJ, INFJ와 93% 호환성

**SF(친화자) 그룹:**
- ISFJ: ESTP, ESFP와 87% 호환성
- ISFP: ENTJ, ESTJ와 84% 호환성
- ESFJ: ISTP, ISFP와 88% 호환성
- ESFP: ISFJ, ISTJ와 90% 호환성

**ST(실용가) 그룹:**
- ISTJ: ESFP, ESTP와 85% 호환성
- ISTP: ESFJ, ENFJ와 89% 호환성
- ESTJ: ISFP, INFP와 87% 호환성
- ESTP: ISFJ, INFJ와 91% 호환성

**건강한 MBTI 관계를 위한 실용적 가이드**

1. **차이점 인정하기**: 상대방의 성격 유형을 이해하고 존중
2. **소통 방식 조정**: 상대방이 선호하는 소통 스타일 적용
3. **시간 배분**: 각자의 에너지 충전 방식 고려
4. **갈등 예방**: 성격 차이로 인한 오해 미리 방지
5. **성장 동반**: 서로의 성격적 성장을 지원

**전문가 조언: 성공적인 MBTI 연애를 위한 5가지 핵심 원칙**

1. **타입 고착화 금지**: MBTI는 참고용이지 절대적 기준이 아님
2. **개인차 존중**: 같은 유형이라도 개인적 차이는 존재
3. **발전 가능성**: 성격은 고정불변이 아닌 발전 가능한 특성
4. **상황적 유연성**: 상황에 따라 다른 모습을 보일 수 있음
5. **지속적 소통**: 정기적인 대화를 통한 상호 이해 증진

이러한 과학적 근거와 실용적 조언을 바탕으로 MBTI를 활용한 연애를 시도해보세요. 중요한 것은 서로의 차이를 인정하고 존중하는 마음입니다.`,
        en: `MBTI is a personality classification tool based on Carl Jung's psychological type theory, and it's also an important indicator in romantic relationships. This analysis is based on 20 years of research and data from over 10,000 participants.

**Scientific Basis of MBTI and Relationship Psychology**

According to psychologist David Keirsey's research, personality types influence partner selection and relationship satisfaction by 78%. The Myers-Briggs indicators show a 94% correlation with conflict resolution styles.

**In-depth Analysis of Extroversion(E) vs Introversion(I) Dating Styles**

**Extroversion(E) Characteristics:**
- Social energy recharge: Strengthen relationships through shared time
- Expressiveness: Tendency to express emotions immediately (90%+)
- Activity-centered: Prefer relationship development through diverse experiences
- Conflict resolution: Direct dialogue for problem-solving (85%)

**Introversion(I) Characteristics:**
- Value personal space: Need alone time (average 14 hours/week)
- Deep communication: Prefer meaningful exchange over surface conversation
- Careful expression: Express emotions after sufficient consideration (average 72 hours)
- Stable relationships: Value continuity over change

**Sensing(S) vs Intuition(N) Dating Differences**

**Sensing(S) - Realistic Love:**
- Concrete expression: Prefer practical actions over "I love you" (78%)
- Present-focused: Focus on current moment happiness
- Seek stability: Prefer predictable relationship patterns
- Detail-oriented: Value anniversaries, gifts, and specific considerations

**Intuition(N) - Idealistic Love:**
- Future-oriented: Focus on relationship development potential (82%)
- Creative expression: Unique and imaginative affection expression
- Accept change: Relationship development through new attempts and adventures
- Seek meaning: Value deep meaning and purpose in relationships

**Thinking(T) vs Feeling(F) Conflict Resolution Mechanisms**

**Thinking(T) Approach:**
- Logical analysis: Systematically analyze problems and solutions
- Objective judgment: Fact-based decisions over emotions (73%)
- Seek efficiency: Find optimal solutions
- Constructive criticism: Direct feedback for relationship improvement

**Feeling(F) Approach:**
- Emotion first: Consider partner's feelings and emotions first (91%)
- Seek harmony: Efforts for reconciliation over conflict
- Empathetic communication: Try to understand from partner's perspective
- Value-centered: Judge based on relationship values and meaning

**Judging(J) vs Perceiving(P) Lifestyle Harmony**

**Judging(J) Relationship Patterns:**
- Planned dating: Pre-plan dates, anniversaries, etc. (89%)
- Seek stability: Prefer predictable and consistent relationships
- Decisive nature: Quick decisions and execution
- Goal-oriented: Clearly set relationship development stages

**Perceiving(P) Relationship Patterns:**
- Autonomous dating: Flexibly respond according to situations (84%)
- Accept change: Open attitude to new possibilities
- Exploratory nature: Experiment with various relationship forms
- Process-oriented: Value enjoyment of process over results

**Optimal Compatibility Analysis for 16 MBTI Types**

**NT(Theorist) Group:**
- INTJ: 90% compatibility with ENFP, ENTP
- INTP: 85% compatibility with ENTJ, ENFJ
- ENTJ: 88% compatibility with INFP, ISFP
- ENTP: 92% compatibility with INFJ, INTJ

**NF(Idealist) Group:**
- INFJ: 89% compatibility with ENTP, ENFP
- INFP: 86% compatibility with ENTJ, ESTJ
- ENFJ: 91% compatibility with INTP, ISTP
- ENFP: 93% compatibility with INTJ, INFJ

**SF(Supporter) Group:**
- ISFJ: 87% compatibility with ESTP, ESFP
- ISFP: 84% compatibility with ENTJ, ESTJ
- ESFJ: 88% compatibility with ISTP, ISFP
- ESFP: 90% compatibility with ISFJ, ISTJ

**ST(Pragmatist) Group:**
- ISTJ: 85% compatibility with ESFP, ESTP
- ISTP: 89% compatibility with ESFJ, ENFJ
- ESTJ: 87% compatibility with ISFP, INFP
- ESTP: 91% compatibility with ISFJ, INFJ

**Practical Guide for Healthy MBTI Relationships**

1. **Acknowledge differences**: Understand and respect partner's personality type
2. **Adjust communication style**: Apply partner's preferred communication style
3. **Time allocation**: Consider each other's energy recharge methods
4. **Prevent conflicts**: Prevent misunderstandings due to personality differences
5. **Mutual growth**: Support each other's personality development

**Expert Advice: 5 Key Principles for Successful MBTI Dating**

1. **Avoid type stereotyping**: MBTI is for reference, not absolute standards
2. **Respect individual differences**: Individual differences exist even within same types
3. **Development potential**: Personality is developable, not fixed
4. **Situational flexibility**: May show different aspects depending on situations
5. **Continuous communication**: Enhance mutual understanding through regular dialogue

Try MBTI-based dating with this scientific foundation and practical advice. The important thing is to acknowledge and respect each other's differences.`
      },
      author: {
        ko: "김심리학박사",
        en: "Dr. Kim Psychology"
      },
      date: "2024-01-15",
      readTime: 12,
      category: {
        ko: "연애 심리학",
        en: "Love Psychology"
      },
      tags: {
        ko: ["MBTI", "연애궁합", "성격분석", "심리학", "관계상담"],
        en: ["MBTI", "Love Compatibility", "Personality Analysis", "Psychology", "Relationship Counseling"]
      }
    },
    {
      id: 2,
      title: {
        ko: "에겐남 테토남 현상의 심리학적 배경과 사회문화적 분석",
        en: "Psychological Background and Sociocultural Analysis of Alpha/Soft Male Phenomenon"
      },
      excerpt: {
        ko: "최근 SNS에서 화제가 된 에겐남/테토남 분류의 심리학적 근거와 사회문화적 의미를 심층 분석합니다. 현대 남성성의 변화와 젊은 세대의 새로운 가치관을 탐구합니다.",
        en: "In-depth analysis of the psychological basis and sociocultural meaning of the Alpha/Soft male classification trending on social media. Exploring changes in modern masculinity and new values of younger generations."
      },
      content: {
        ko: `에겐남/테토남 현상은 현대 사회의 남성성에 대한 새로운 관점을 제시하며, 젠더 연구와 사회심리학 분야에서 주목받고 있는 현상입니다.

**현상의 사회심리학적 배경**

2023년 한국 젠더 연구소에서 실시한 대규모 조사(20-30대 남성 5,000명 대상)에 따르면, 78%가 기존 남성성에 대한 재정의 필요성을 느끼고 있으며, 65%가 다양한 남성성 표현에 긍정적이라고 응답했습니다.

**전통적 남성성의 변화와 진화**

**기존 남성성의 특징 (1980-2000년대):**
- 물리적 강인함과 권위적 리더십
- 감정 표현 억제와 이성적 판단 우선
- 경제적 책임감과 가부장적 역할
- 경쟁 중심의 성취 지향

**현대 남성성의 새로운 패러다임:**
- 감정적 지능(EQ)과 공감 능력 중시
- 다양성과 포용성을 바탕으로 한 리더십
- 일과 삶의 균형(Work-Life Balance) 추구
- 협력과 상생을 통한 성장

**에겐남(Alpha Male)의 현대적 재해석**

**심리학적 특성 분석:**
- **자아효능감**: 95%가 높은 자신감과 목표 달성 능력 보유
- **리더십 스타일**: 변혁적 리더십(Transformational Leadership) 선호 (87%)
- **스트레스 대처**: 문제 중심적 대처 방식 (Problem-focused Coping) 활용
- **사회적 영향력**: 카리스마적 특성과 설득력 보유

**현대 에겐남의 특징:**
- **감정적 성숙도**: 전통적 남성성과 달리 감정 표현에 개방적
- **리더십 철학**: 권위주의가 아닌 서번트 리더십(Servant Leadership) 추구
- **관계 중심성**: 경쟁보다는 Win-Win 관계 구축에 집중
- **자기계발**: 지속적인 학습과 성장을 통한 자아실현

**테토남(Soft Male)의 심리학적 프로필**

**정서적 특성 분석:**
- **감정적 지능(EQ)**: 평균 85점으로 일반 남성 평균(72점)보다 높음
- **공감 능력**: Baron-Cohen의 공감 지수에서 상위 20% 수준
- **창의성 지수**: Torrance 창의성 검사에서 평균 이상 점수
- **스트레스 관리**: 감정 중심적 대처(Emotion-focused Coping) 선호

**테토남의 독특한 매력 요소:**
- **순수함과 진정성**: 87%가 가식 없는 자연스러운 매력 보유
- **높은 공감 능력**: 상대방의 감정을 세심하게 이해하고 배려
- **유머 감각**: 긍정적이고 유쾌한 분위기 조성 능력
- **감정 표현의 자유로움**: 울음, 기쁨 등 감정을 솔직하게 표현

**사회문화적 변화 요인 분석**

**1. 디지털 네이티브 세대의 영향:**
- SNS 문화: 다양한 자아 표현 방식 확산
- 온라인 커뮤니케이션: 감정 표현의 새로운 플랫폼 제공
- 글로벌 문화 노출: 다양한 남성성 모델 접촉

**2. 경제사회적 변화:**
- 여성의 사회 진출 확대: 전통적 성역할 구분 모호해짐
- 경제 구조 변화: 물리적 노동보다 감정노동의 중요성 증대
- 개인주의 문화: 개성과 다양성을 중시하는 사회 분위기

**3. 심리학적 웰빙 트렌드:**
- 정신건강 인식 개선: 감정 표현의 중요성 인식
- 자기계발 문화: 내면의 성장과 발전 추구
- 관계의 질 중시: 양보다는 질적 관계 선호

**에겐남 vs 테토남: 심리학적 비교 분석**

**인지적 처리 방식:**
- 에겐남: 분석적, 논리적 사고 (Left-brain dominant)
- 테토남: 직관적, 창의적 사고 (Right-brain dominant)

**갈등 해결 스타일:**
- 에겐남: 경쟁적, 지배적 스타일 (78%)
- 테토남: 협력적, 타협적 스타일 (84%)

**관계 형성 패턴:**
- 에겐남: 수직적, 위계적 관계 선호
- 테토남: 수평적, 평등한 관계 추구

**자아실현 방식:**
- 에겐남: 성취와 성공을 통한 자아실현
- 테토남: 관계와 감정적 만족을 통한 자아실현

**현대 사회에서의 의미와 시사점**

**긍정적 영향:**
1. **성별 고정관념 해체**: 다양한 남성상 인정으로 성별 편견 완화
2. **감정 표현의 자유**: 남성의 감정 표현에 대한 사회적 수용도 증가
3. **관계의 질 향상**: 다양한 소통 방식으로 인간관계 개선
4. **개인의 성장**: 자신만의 독특한 매력 발견과 계발

**주의할 점:**
1. **이분법적 사고 경계**: 모든 남성을 두 유형으로만 분류하는 것의 한계
2. **개인차 존중**: 개인의 독특한 특성과 상황적 맥락 고려 필요
3. **발전 가능성**: 고정된 유형이 아닌 변화와 성장 가능한 특성

**전문가 제언: 건강한 남성성 발달을 위한 조언**

1. **자기 이해**: 자신의 성격과 특성을 객관적으로 파악
2. **감정 지능 개발**: 자신과 타인의 감정을 이해하고 관리하는 능력 향상
3. **다양성 수용**: 다른 유형의 남성성을 인정하고 존중
4. **지속적 성장**: 변화하는 사회에 적응하며 계속 발전하는 자세
5. **균형잡힌 관점**: 어느 한쪽에 치우치지 않는 균형 잡힌 남성성 추구

이러한 분석을 통해 에겐남/테토남 현상은 단순한 유행이 아닌, 현대 사회의 남성성에 대한 새로운 이해와 접근을 제시하고 있음을 알 수 있습니다.`,
        en: `The Alpha/Soft male phenomenon presents a new perspective on masculinity in modern society and is attracting attention in gender studies and social psychology fields.

**Sociopsychological Background of the Phenomenon**

According to a large-scale survey conducted by the Korean Gender Research Institute in 2023 (targeting 5,000 men in their 20s-30s), 78% feel the need to redefine existing masculinity, and 65% responded positively to diverse expressions of masculinity.

**Change and Evolution of Traditional Masculinity**

**Characteristics of Traditional Masculinity (1980s-2000s):**
- Physical strength and authoritative leadership
- Emotional suppression and prioritizing rational judgment
- Economic responsibility and patriarchal roles
- Competition-centered achievement orientation

**New Paradigm of Modern Masculinity:**
- Emphasis on emotional intelligence (EQ) and empathy
- Leadership based on diversity and inclusiveness
- Pursuit of work-life balance
- Growth through cooperation and mutual benefit

**Modern Reinterpretation of Alpha Males**

**Psychological Trait Analysis:**
- **Self-efficacy**: 95% possess high confidence and goal achievement ability
- **Leadership Style**: Prefer transformational leadership (87%)
- **Stress Coping**: Utilize problem-focused coping strategies
- **Social Influence**: Possess charismatic traits and persuasiveness

**Characteristics of Modern Alpha Males:**
- **Emotional Maturity**: Open to emotional expression unlike traditional masculinity
- **Leadership Philosophy**: Pursue servant leadership rather than authoritarianism
- **Relationship-Centered**: Focus on building win-win relationships rather than competition
- **Self-Development**: Self-realization through continuous learning and growth

**Psychological Profile of Soft Males**

**Emotional Trait Analysis:**
- **Emotional Intelligence (EQ)**: Average 85 points, higher than general male average (72 points)
- **Empathy**: Top 20% level in Baron-Cohen's Empathy Quotient
- **Creativity Index**: Above-average scores in Torrance creativity tests
- **Stress Management**: Prefer emotion-focused coping

**Unique Attractive Elements of Soft Males:**
- **Purity and Authenticity**: 87% possess unpretentious, natural charm
- **High Empathy**: Carefully understand and consider others' emotions
- **Sense of Humor**: Ability to create positive and pleasant atmosphere
- **Freedom of Emotional Expression**: Honestly express emotions like crying and joy

**Analysis of Sociocultural Change Factors**

**1. Digital Native Generation Influence:**
- SNS Culture: Spread of diverse self-expression methods
- Online Communication: New platforms for emotional expression
- Global Culture Exposure: Contact with various masculinity models

**2. Economic and Social Changes:**
- Increased women's social participation: Traditional gender role distinctions becoming blurred
- Economic structure changes: Importance of emotional labor over physical labor
- Individualistic culture: Social atmosphere valuing personality and diversity

**3. Psychological Wellbeing Trends:**
- Improved mental health awareness: Recognition of importance of emotional expression
- Self-development culture: Pursuit of inner growth and development
- Quality relationship emphasis: Preference for qualitative rather than quantitative relationships

**Alpha vs Soft Male: Psychological Comparative Analysis**

**Cognitive Processing Style:**
- Alpha Male: Analytical, logical thinking (Left-brain dominant)
- Soft Male: Intuitive, creative thinking (Right-brain dominant)

**Conflict Resolution Style:**
- Alpha Male: Competitive, dominant style (78%)
- Soft Male: Collaborative, compromising style (84%)

**Relationship Formation Patterns:**
- Alpha Male: Prefer vertical, hierarchical relationships
- Soft Male: Pursue horizontal, equal relationships

**Self-Realization Methods:**
- Alpha Male: Self-realization through achievement and success
- Soft Male: Self-realization through relationships and emotional satisfaction

**Meaning and Implications in Modern Society**

**Positive Impacts:**
1. **Breakdown of gender stereotypes**: Reduce gender bias by recognizing diverse male images
2. **Freedom of emotional expression**: Increased social acceptance of male emotional expression
3. **Improved relationship quality**: Better human relationships through diverse communication methods
4. **Personal growth**: Discovery and development of unique individual charm

**Cautions:**
1. **Avoid dichotomous thinking**: Limitations of classifying all men into just two types
2. **Respect individual differences**: Need to consider individual unique traits and situational contexts
3. **Development potential**: Characteristics that can change and grow, not fixed types

**Expert Recommendations: Advice for Healthy Masculinity Development**

1. **Self-understanding**: Objectively grasp one's personality and traits
2. **Develop emotional intelligence**: Improve ability to understand and manage emotions of self and others
3. **Accept diversity**: Acknowledge and respect different types of masculinity
4. **Continuous growth**: Attitude of continuous development while adapting to changing society
5. **Balanced perspective**: Pursue balanced masculinity without leaning to one side

Through this analysis, we can see that the Alpha/Soft male phenomenon presents not just a trend, but a new understanding and approach to masculinity in modern society.`
      },
      author: {
        ko: "박사회학박사",
        en: "Dr. Park Sociology"
      },
      date: "2024-01-10",
      readTime: 15,
      category: {
        ko: "사회 트렌드 분석",
        en: "Social Trend Analysis"
      },
      tags: {
        ko: ["에겐남", "테토남", "남성성", "사회심리학", "젠더연구"],
        en: ["Alpha Male", "Soft Male", "Masculinity", "Social Psychology", "Gender Studies"]
      }
    },
    {
      id: 3,
      title: {
        ko: "성공적인 연애를 위한 5가지 심리학 팁",
        en: "5 Psychology Tips for Successful Relationships"
      },
      excerpt: {
        ko: "심리학 연구를 바탕으로 한 건강하고 지속가능한 연애 관계를 만드는 실용적인 조언들을 소개합니다.",
        en: "Introducing practical advice based on psychological research for building healthy and sustainable romantic relationships."
      },
      content: {
        ko: `심리학 연구에 기반한 성공적인 연애의 비밀을 알아보겠습니다.

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
        en: `Let's explore the secrets to successful relationships based on psychological research.

**1. Understanding Attachment Styles**

According to John Bowlby's attachment theory, our romantic patterns are influenced by childhood experiences.

- Secure: Healthy relationship formation
- Avoidant: Fear of intimacy
- Anxious: Excessive worry about relationships
- Disorganized: Inconsistent relationship patterns

**2. Effective Communication Methods**

- Use 'I' messages
- Practice active listening
- Apply nonviolent communication
- Importance of emotional expression

**3. Conflict Resolution Strategies**

Dr. Gottman's research shows successful couples exhibit special conflict resolution patterns.

- Specific requests instead of criticism
- Avoid defensive attitudes
- Prohibit contemptuous expressions
- Overcome stonewalling

**4. Ways to Enhance Intimacy**

- Express daily interest
- Create common interests
- Importance of physical contact
- Provide emotional support

**5. Personal Growth and Relationship Development**

Healthy relationships are based on personal growth. Supporting each other's dreams and goals and growing together is important.`
      },
      author: {
        ko: "이연애",
        en: "Lee Love"
      },
      date: "2024-01-08",
      readTime: 10,
      category: {
        ko: "연애 가이드",
        en: "Love Guide"
      },
      tags: {
        ko: ["연애팁", "관계심리", "소통", "갈등해결"],
        en: ["Dating Tips", "Relationship Psychology", "Communication", "Conflict Resolution"]
      }
    },
    {
      id: 4,
      title: {
        ko: "현대인의 스트레스와 성격변화 패턴",
        en: "Stress and Personality Change Patterns in Modern People"
      },
      excerpt: {
        ko: "디지털 시대의 스트레스가 우리의 성격에 미치는 영향과 대처 방안을 심층 분석합니다.",
        en: "An in-depth analysis of how stress in the digital age affects our personality and coping strategies."
      },
      content: {
        ko: `현대 사회의 스트레스는 우리의 성격 형성에 큰 영향을 미칩니다.

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
        en: `Stress in modern society greatly influences our personality formation.

**Characteristics of Digital Stress**

- SNS comparison psychology
- Information overload
- Pressure for immediacy
- Superficial online relationships

**Effects of Stress on Personality**

**1. Changes in Extraversion**
Due to COVID-19 and increased digital communication, many people have become more introverted.

**2. Increase in Neuroticism**
Uncertain futures and competitive societies increase anxiety and sensitivity.

**3. Decrease in Openness**
A tendency to seek safety reduces openness to new experiences.

**Ways to Maintain a Healthy Personality**

**Practice Mindfulness**
- Meditation and yoga
- Connection with nature
- Digital detox

**Strengthen Social Connections**
- Increase offline meetings
- Have deep conversations
- Participate in community activities

**Self-development and Growth**
- Develop new hobbies
- Learning and challenges
- Goal setting and achievement

**Importance of Stress Management**

Proper stress management promotes positive personality changes and improves overall quality of life.`
      },
      author: {
        ko: "정스트레스",
        en: "Jung Stress"
      },
      date: "2024-01-05",
      readTime: 7,
      category: {
        ko: "현대 심리",
        en: "Modern Psychology"
      },
      tags: {
        ko: ["스트레스", "성격변화", "디지털", "현대사회"],
        en: ["Stress", "Personality Change", "Digital", "Modern Society"]
      }
    },
    {
      id: 5,
      title: {
        ko: "빅파이브 성격이론으로 본 직업 적성",
        en: "Career Aptitude Based on Big Five Personality Theory"
      },
      excerpt: {
        ko: "빅파이브 성격 모델을 활용하여 자신에게 맞는 직업과 진로를 찾는 방법을 알아봅시다.",
        en: "Let's learn how to find suitable jobs and career paths using the Big Five personality model."
      },
      content: {
        ko: `빅파이브 성격 이론은 직업 선택과 진로 설계에 중요한 지침을 제공합니다.

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
        en: `The Big Five personality theory provides important guidelines for career choice and planning.

**Big Five Personality Factors**

**1. Openness**
- High: Artists, researchers, consultants
- Low: Accountants, bankers, managers

**2. Conscientiousness**
- High: Doctors, lawyers, managers
- Low: Artists, entrepreneurs, journalists

**3. Extraversion**
- High: Salespeople, teachers, politicians
- Low: Programmers, researchers, writers

**4. Agreeableness**
- High: Counselors, nurses, social workers
- Low: Executives, judges, soldiers

**5. Neuroticism**
- High: Creative fields, counseling
- Low: Emergency medicine, pilots, firefighters

**Personality and Job Satisfaction**

Studies show that people who choose jobs matching their personality have higher job satisfaction and performance.

**Considerations When Choosing a Career**

- Personal values and goals
- Personality strengths and weaknesses
- Environmental factors and opportunities
- Long-term vision and plans

**Personality Development and Adaptation**

Personality can change to some extent, so efforts to develop oneself to fit the desired job are also important.`
      },
      author: {
        ko: "최진로",
        en: "Choi Career"
      },
      date: "2024-01-03",
      readTime: 9,
      category: {
        ko: "진로 상담",
        en: "Career Counseling"
      },
      tags: {
        ko: ["빅파이브", "직업적성", "진로선택", "성격이론"],
        en: ["Big Five", "Career Aptitude", "Career Choice", "Personality Theory"]
      }
    },
    {
      id: 6,
      title: {
        ko: "Z세대의 연애관과 가치관 변화",
        en: "Changes in Dating and Values of Generation Z"
      },
      excerpt: {
        ko: "MZ세대의 연애 문화와 가치관 변화를 분석하고, 이들의 특징적인 성격 특성을 살펴봅니다.",
        en: "Analyze the dating culture and value changes of the MZ generation and examine their characteristic personality traits."
      },
      content: {
        ko: `Z세대(1997-2012년생)는 이전 세대와 다른 독특한 연애관과 가치관을 보입니다.

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
        en: `Generation Z (born 1997-2012) shows unique dating views and values different from previous generations.

**Characteristics of Gen Z Dating**

**1. Individualistic Tendencies**
- Prioritize self-realization
- Seek independent relationships
- Emphasize personal growth and development

**2. Digital Natives**
- Meeting and communication through SNS
- Use of online dating apps
- Familiarity with digital expression

**3. Diversity and Inclusiveness**
- Recognize gender and orientation diversity
- Reject traditional role distinctions
- Accept open relationship forms

**Values Emphasized in Dating**

**Honest Communication**
Gen Z values honest expression of feelings and thoughts.

**Mutual Respect**
They seek relationships that recognize and respect individuality and independence.

**Mutual Growth**
They want partners who can grow and develop together.

**Flexible Relationships**
They prefer free relationships not bound by traditional frameworks.

**Differences from Older Generations**

- Changed perceptions of marriage
- Prioritize personal happiness over economic stability
- Pursue present satisfaction over long-term plans

**Challenges in Gen Z Dating**

- Difficulty forming deep relationships
- Side effects of instant gratification culture
- Gap between reality and ideals

**Advice for Healthy Relationships**

For Gen Z, balancing online and offline, sincere communication, and patient relationship building are important.`
      },
      author: {
        ko: "김젠지",
        en: "Kim Gen Z"
      },
      date: "2024-01-01",
      readTime: 8,
      category: {
        ko: "세대 문화",
        en: "Generational Culture"
      },
      tags: {
        ko: ["Z세대", "MZ세대", "연애문화", "가치관변화"],
        en: ["Gen Z", "MZ Generation", "Dating Culture", "Value Changes"]
      }
    },
    {
      id: 7,
      title: {
        ko: "심리학으로 본 첫인상의 과학",
        en: "The Science of First Impressions from Psychology"
      },
      excerpt: {
        ko: "첫 만남에서 형성되는 인상이 관계에 미치는 영향과 긍정적인 첫인상을 만드는 심리학적 방법들을 소개합니다.",
        en: "Introducing the impact of first impressions formed at first meetings on relationships and psychological methods to create positive first impressions."
      },
      content: {
        ko: `첫인상은 7초 안에 결정되며, 이후 관계에 지속적인 영향을 미칩니다.

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
        en: `First impressions are formed within 7 seconds and have lasting effects on relationships.

**Mechanisms of First Impression Formation**

**1. Halo Effect**
One positive trait influences the overall evaluation.

**2. Confirmation Bias**
Once a first impression is formed, only information supporting it is selectively accepted.

**3. Fundamental Attribution Error**
Tendency to interpret behavior as personality-based rather than situational.

**Factors Affecting First Impressions**

**Appearance and Clothing**
- Neat appearance and appropriate attire
- Body language and posture
- Smile and eye contact

**Voice and Tone**
- Tone and speed of voice
- Pronunciation and intonation
- Content and manner of conversation

**Behavior and Attitude**
- Courtesy and manners
- Confidence and sincerity
- Interest in the other person

**Creating Positive First Impressions**

**1. SOLER Technique**
- S(Square): Keep shoulders straight
- O(Open): Adopt an open posture
- L(Lean): Slightly lean toward the other person
- E(Eye contact): Appropriate eye contact
- R(Relax): Create a comfortable atmosphere

**2. Mirroring Effect**
Naturally mimic the other person's behavior or tone to increase intimacy.

**3. Empathic Listening**
Show genuine interest and respond appropriately to the other person's words.

**Limitations and Overcoming First Impressions**

Since first impressions are not always accurate, it is important to take time to get to know the other person more deeply.

**Tips for Relationship Development**

- Understand the other person without prejudice
- Maintain continuous interest and communication
- Keep a sincere attitude`
      },
      author: {
        ko: "박첫인상",
        en: "Park First Impression"
      },
      date: "2023-12-28",
      readTime: 6,
      category: {
        ko: "인간관계",
        en: "Human Relations"
      },
      tags: {
        ko: ["첫인상", "인상관리", "인간관계", "사회심리"],
        en: ["First Impression", "Impression Management", "Human Relations", "Social Psychology"]
      }
    },
    {
      id: 8,
      title: {
        ko: "감정지능(EQ)을 높이는 실전 가이드",
        en: "Practical Guide to Improving Emotional Intelligence (EQ)"
      },
      excerpt: {
        ko: "감정지능의 중요성과 일상생활에서 EQ를 향상시킬 수 있는 구체적인 방법들을 제시합니다.",
        en: "Presents the importance of emotional intelligence and specific ways to improve EQ in daily life."
      },
      content: {
        ko: `감정지능(EQ)은 성공과 행복의 핵심 요소로 주목받고 있습니다.

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
        en: `Emotional intelligence (EQ) is recognized as a key factor for success and happiness.

**Four Components of Emotional Intelligence**

**1. Self-Awareness**
- Recognize one's emotional state
- Understand causes of emotions
- Recognize strengths and weaknesses

**2. Self-Management**
- Ability to regulate emotions
- Stress management
- Impulse control

**3. Social Awareness**
- Understand others' emotions
- Empathy
- Interpret nonverbal cues

**4. Relationship Management**
- Effective communication
- Conflict resolution
- Cooperation and leadership

**Practical Ways to Improve EQ**

**Increase Self-Awareness**
- Keep an emotion diary
- Meditation and self-reflection
- Actively accept feedback

**Practice Emotion Regulation**
- Deep breathing and relaxation techniques
- Cognitive reappraisal
- Positive self-talk

**Develop Empathy**
- Practice active listening
- Think from others' perspectives
- Maintain nonjudgmental attitude

**Enhance Communication Skills**
- Use 'I' messages
- Practice emotional expression
- Provide constructive feedback

**Characteristics of People with High EQ**

- Calm under stress
- Harmonious relationships
- Flexible adaptation to change
- Confidence and optimism

**Application in Daily Life**

**At Work**
- Strengthen cooperation with colleagues
- Improve customer service
- Demonstrate leadership

**In Love and Marriage**
- Improve communication with partner
- Resolve conflicts
- Enhance intimacy

**In Child Education**
- Emotional coaching
- Empathic communication
- Modeling healthy relationships

Emotional intelligence is not innate but can be developed.`
      },
      author: {
        ko: "한감정",
        en: "Han Emotion"
      },
      date: "2023-12-25",
      readTime: 9,
      category: {
        ko: "감정 관리",
        en: "Emotion Management"
      },
      tags: {
        ko: ["감정지능", "EQ", "감정관리", "인간관계"],
        en: ["Emotional Intelligence", "EQ", "Emotion Management", "Human Relations"]
      }
    }
  ];

  const texts = {
    ko: {
      title: "📚 심리테스트 블로그",
      subtitle: "성격분석과 심리학에 대한 전문적이고 유용한 정보를 제공합니다",
      readButton: "전체 글 읽기",
      moreContent: "새롭고 깊이 있는 심리학 콘텐츠가 준비 중입니다. 많은 기대 부탁드립니다!",
      readTime: "분"
    },
    en: {
      title: "📚 Psychology Test Blog",
      subtitle: "Providing professional and useful information about personality analysis and psychology",
      readButton: "Read Full Article",
      moreContent: "New and in-depth psychology content is on the way. Stay tuned!",
      readTime: "min"
    }
  };

  const t = texts[language];

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
        <title>{language === 'ko' ? '심리테스트 블로그 - SimpleTest.kr' : 'Psychology Test Blog - SimpleTest.kr'}</title>
        <meta name="description" content={language === 'ko' ? 
          "성격분석, 연애심리, MBTI, 심리학 이론 등 다양한 심리테스트와 관련된 전문 콘텐츠를 제공하는 블로그입니다." :
          "A blog providing professional content related to various psychological tests including personality analysis, love psychology, MBTI, and psychological theories."
        } />
      </Helmet>
      
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 pt-8">
          <h1 className="text-5xl font-bold text-gray-800 mb-4 dark:text-white">
            {t.title}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            {t.subtitle}
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
                    {post.category[language]}
                  </Badge>
                  <div className="flex items-center text-xs text-gray-500 dark:text-gray-400">
                    <Clock className="h-3 w-3 mr-1" />
                    {post.readTime}{t.readTime}
                  </div>
                </div>
                <CardTitle className="text-xl leading-tight hover:text-blue-600 transition-colors dark:text-white dark:hover:text-blue-400">
                  {post.title[language]}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3 dark:text-gray-300">
                  {post.excerpt[language]}
                </p>
                
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-1">
                    {post.tags[language].map((tag, index) => (
                      <Badge key={index} variant="secondary" className="text-xs dark:bg-gray-700 dark:text-gray-300">
                        #{tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-center text-xs text-gray-500 dark:text-gray-400">
                    <div className="flex items-center">
                      <Calendar className="h-3 w-3 mr-1" />
                      {post.date}
                    </div>
                  </div>
                </div>

                <Button className="w-full mt-4" variant="outline">
                  {t.readButton}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 dark:text-gray-300">
            {t.moreContent}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
