import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'ko' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  ko: {
    // Navigation
    'nav.home': '홈',
    'nav.home.desc': '메인 페이지로 이동',
    'nav.egen-teto-test': '에건테토 테스트',
    'nav.egen-teto-test.desc': '에건테토 성격 테스트',
    'nav.personality-test': '성격 테스트',
    'nav.personality-test.desc': 'MBTI 성격 테스트',
    'nav.compatibility-test': '궁합 테스트',
    'nav.compatibility-test.desc': '연애 궁합 테스트',
    'nav.love-style-test': '연애 스타일 테스트',
    'nav.love-style-test.desc': '나의 연애 스타일 알아보기',
    'nav.blog': '블로그',
    'nav.blog.desc': '심리학 블로그',

    // Home page
    'home.title': '나를 알아가는 재미있는 심리테스트',
    'home.subtitle': '과학적 근거를 바탕으로 한 신뢰할 수 있는 테스트',
    'home.description': '2분만에 완료하는 간단하고 정확한 성격 분석으로 나를 더 잘 이해해보세요',
    'home.popular.title': '가장 인기 있는 테스트',
    'home.popular.description': '지금까지 200만 명이 참여한 검증된 심리테스트입니다.\n재미있고 정확한 결과로 자신을 더 잘 알아갈 수 있어요.\n\n친구들과 함께 테스트하고 결과를 공유해보세요!\nSNS로 간편하게 공유할 수 있습니다.',
    'home.tests.title': '인기 테스트 모음',
    'home.features.title': '한 번쯤 해볼 만한 이유 3가지!',
    'home.stats.title': '놀라운 참여 통계',
    'home.cta.title': '지금 바로 시작해보세요!',
    'home.cta.description': '2분만 투자해서 새로운 나를 발견해보세요',
    'home.hero.title': '재미있고 정확한 심리 테스트',
    'home.hero.subtitle': '과학적 근거를 바탕으로 한 다양한 성격 및 심리 테스트로 자신을 더 잘 알아가세요',
    'home.hero.cta': '테스트 시작하기',
    'home.tests.subtitle': '가장 많이 진행되는 테스트들을 확인해보세요',

    // Common terms
    'common.participants': '참여자',
    'common.test-now': '지금 테스트하기',
    'common.scientific': '과학적 근거',
    'common.fun': '재미있고 쉬운',
    'common.practical': '실용적 활용',

    // Test descriptions
    'test.egen-teto.title': '에건테토 테스트',
    'test.egen-teto.description': '나의 진짜 성격 유형을 알아보는 테스트',
    'test.personality.title': '성격 테스트',
    'test.personality.description': 'MBTI 기반 성격 유형 분석',
    'test.compatibility.title': '궁합 테스트',
    'test.compatibility.description': '연인과의 궁합도를 확인해보세요',
    'test.love-style.title': '연애 스타일 테스트',
    'test.love-style.description': '나만의 독특한 연애 패턴 분석',

    // Blog
    'blog.title': '심리학 블로그',
    'blog.subtitle': '심리학과 성격에 대한 깊이 있는 정보와 인사이트를 제공합니다',
    'blog.search.placeholder': '블로그 검색...',
    'blog.readmore': '더 읽기',

    // Blog posts
    'blog.posts.mbti-guide.title': 'MBTI 성격 유형 완벽 가이드: 16가지 성격 유형의 특징과 장단점',
    'blog.posts.mbti-guide.excerpt': 'MBTI 16가지 성격 유형의 상세한 특징과 각 유형별 장단점, 그리고 일상생활에서의 활용법을 알아보세요.',
    'blog.posts.mbti-guide.content': 'MBTI(Myers-Briggs Type Indicator)는 개인의 선호도를 바탕으로 16가지 성격 유형으로 분류하는 성격 검사입니다. 1940년대 캐서린 쿡 브릭스와 그녀의 딸 이자벨 브릭스 마이어스가 칼 융의 심리학적 유형론을 바탕으로 개발했습니다.\n\nMBTI는 네 가지 차원으로 구성되어 있습니다:\n1. 외향성(E) vs 내향성(I): 에너지의 방향\n2. 감각(S) vs 직관(N): 정보 수집 방식\n3. 사고(T) vs 감정(F): 의사결정 방식\n4. 판단(J) vs 인식(P): 생활 양식\n\n각 차원의 조합으로 16가지 성격 유형이 만들어집니다. ISTJ(검사관형), ISFJ(수호자형), INFJ(예언자형), INTJ(건축가형) 등이 있으며, 각 유형은 고유한 특징과 강점을 가지고 있습니다.\n\nMBTI를 활용하면 자신의 성격을 더 잘 이해하고, 타인과의 관계를 개선하며, 적합한 직업을 찾는 데 도움이 됩니다. 하지만 MBTI는 완벽한 도구가 아니며, 개인의 복잡성을 완전히 설명할 수는 없습니다.',

    'blog.posts.psychology-test-history.title': '심리 테스트의 역사와 발전: 고대부터 현대까지',
    'blog.posts.psychology-test-history.excerpt': '심리 테스트가 어떻게 시작되어 현재까지 발전해 왔는지, 그 역사적 배경과 주요 이정표들을 살펴봅니다.',
    'blog.posts.psychology-test-history.content': '심리 테스트의 역사는 인간이 자신과 타인을 이해하려는 노력의 산물입니다. 고대 그리스 시대부터 인간의 성격과 기질을 분류하려는 시도가 있었으며, 히포크라테스의 4체액설이 그 시초라 할 수 있습니다.\n\n19세기 말 프란시스 갈턴이 개인차 연구의 아버지로 불리며 최초의 정신 측정 실험실을 설립했습니다. 20세기 초 알프레드 비네가 지능 검사를 개발하면서 현대적 심리 검사의 기틀을 마련했습니다.\n\n1차 대전 중에는 대규모 집단 검사가 실시되었고, 이후 성격 검사 분야가 급속히 발전했습니다. 1940년대 MMPI, 1960년대 16PF, 1970년대 MBTI 등이 개발되면서 심리 테스트는 더욱 정교해졌습니다.\n\n현재는 컴퓨터와 인터넷 기술의 발달로 온라인 심리 테스트가 보편화되었으며, 빅데이터와 AI 기술을 활용한 새로운 형태의 심리 평가도 등장하고 있습니다.',

    'blog.posts.personality-development.title': '성격은 변할 수 있을까? 성격 발달과 변화의 심리학',
    'blog.posts.personality-development.excerpt': '성격이 고정불변인지, 아니면 시간이 지나면서 변화할 수 있는지에 대한 심리학적 관점을 탐구합니다.',
    'blog.posts.personality-development.content': '성격의 변화 가능성은 심리학의 오래된 주제 중 하나입니다. 전통적으로는 성격이 30세 이후에는 거의 변하지 않는다고 여겨졌지만, 최근 연구들은 다른 결과를 보여주고 있습니다.\n\n성격의 5요인 모델(Big Five)에 따르면, 개방성, 성실성, 외향성, 친화성, 신경성이라는 다섯 가지 주요 성격 차원이 있습니다. 이 중 일부는 나이가 들면서 변화하는 경향을 보입니다.\n\n연구에 따르면 대부분의 사람들은 나이가 들면서 더 성실해지고, 친화적이 되며, 감정적으로 안정됩니다. 이를 "성격의 성숙"이라고 부릅니다. 또한 의도적인 노력을 통해서도 성격을 어느 정도 변화시킬 수 있다는 증거들이 발견되고 있습니다.\n\n성격 변화에 영향을 미치는 요인들로는 생활 경험, 중요한 사건, 치료나 상담, 의식적인 노력 등이 있습니다. 완전히 다른 사람이 되는 것은 어렵지만, 원하는 방향으로 점진적인 변화는 가능합니다.',

    'blog.posts.relationship-psychology.title': '연애 심리학: 사랑과 애착의 과학적 이해',
    'blog.posts.relationship-psychology.excerpt': '사랑과 연애에 숨겨진 심리학적 원리들과 건강한 관계를 위한 과학적 조언을 제공합니다.',
    'blog.posts.relationship-psychology.content': '사랑은 인간의 가장 복잡하고 강력한 감정 중 하나입니다. 심리학자들은 사랑을 이해하기 위해 다양한 이론과 연구를 진행해 왔습니다.\n\n스턴버그의 사랑의 삼각형 이론에 따르면, 사랑은 친밀감, 열정, 헌신이라는 세 가지 요소로 구성됩니다. 이 세 요소의 조합에 따라 다양한 형태의 사랑이 나타납니다.\n\n애착 이론도 연애 관계를 이해하는 중요한 틀입니다. 안전 애착, 불안 애착, 회피 애착 스타일에 따라 연애 패턴이 달라집니다. 어린 시절의 양육 경험이 성인기 연애 관계에 큰 영향을 미칩니다.\n\n건강한 연애 관계를 위해서는 효과적인 의사소통, 상호 존중, 개인적 성장 등이 중요합니다. 또한 자신의 애착 스타일을 이해하고 필요시 변화시키려는 노력도 도움이 됩니다. 과학적 연구 결과들을 활용하면 더 만족스러운 연애 관계를 만들어갈 수 있습니다.',

    'blog.posts.stress-management.title': '스트레스 관리의 심리학: 효과적인 대처 전략과 기법',
    'blog.posts.stress-management.excerpt': '현대인의 필수 과제인 스트레스 관리를 위한 과학적으로 검증된 방법들을 소개합니다.',
    'blog.posts.stress-management.content': '스트레스는 현대인들이 피할 수 없는 일상의 일부가 되었습니다. 하지만 스트레스 자체가 나쁜 것은 아닙니다. 적절한 스트레스는 동기부여와 성장의 원동력이 될 수 있습니다.\n\n스트레스 반응은 크게 급성 스트레스와 만성 스트레스로 나뉩니다. 급성 스트레스는 단기간의 위기 상황에서 나타나며, 만성 스트레스는 지속적인 압박감으로 인해 발생합니다. 만성 스트레스는 신체와 정신 건강에 심각한 악영향을 미칠 수 있습니다.\n\n효과적인 스트레스 관리 방법들로는 인지적 재구성, 문제 중심 대처, 감정 중심 대처 등이 있습니다. 또한 규칙적인 운동, 충분한 수면, 명상과 요가, 사회적 지지 등도 스트레스 감소에 도움이 됩니다.\n\n개인차를 고려한 맞춤형 스트레스 관리 전략을 개발하는 것이 중요하며, 필요시 전문가의 도움을 받는 것도 좋은 방법입니다.',

    'blog.posts.personality-workplace.title': '직장에서의 성격: 업무 성과와 인간관계에 미치는 영향',
    'blog.posts.personality-workplace.excerpt': '직장 생활에서 성격이 어떤 역할을 하는지, 그리고 성격을 활용한 효과적인 업무 수행 방법을 알아봅니다.',
    'blog.posts.personality-workplace.content': '직장에서의 성공은 단순히 업무 능력만으로 결정되지 않습니다. 성격은 업무 성과, 리더십, 팀워크, 직업 만족도 등 다양한 측면에서 중요한 역할을 합니다.\n\nBig Five 성격 모델을 직장 상황에 적용해보면, 성실성이 거의 모든 직업에서 성과와 가장 강한 상관관계를 보입니다. 외향성은 영업이나 관리직에서, 개방성은 창의적 업무에서 특히 중요합니다.\n\n성격과 직업 적합성도 중요한 고려사항입니다. 내향적인 사람은 분석적이고 독립적인 업무를, 외향적인 사람은 사람들과 상호작용하는 업무를 선호하는 경향이 있습니다.\n\n팀워크에서는 성격의 다양성이 오히려 도움이 될 수 있습니다. 서로 다른 성격의 팀원들이 상호보완적 역할을 할 때 더 좋은 결과를 얻을 수 있습니다. 중요한 것은 자신과 동료들의 성격을 이해하고 존중하는 것입니다.',

    'blog.posts.modern-psychology.title': '현대 심리학의 새로운 동향: 디지털 시대의 정신건강',
    'blog.posts.modern-psychology.excerpt': '디지털 기술의 발달이 심리학 분야에 가져온 변화와 새로운 연구 동향들을 살펴봅니다.',
    'blog.posts.modern-psychology.content': '21세기 심리학은 기술의 발달과 함께 급속한 변화를 겪고 있습니다. 뇌과학, 빅데이터, 인공지능 등의 발달로 인간의 마음을 이해하는 새로운 방법들이 등장하고 있습니다.\n\n신경심리학 분야에서는 fMRI, EEG 등의 뇌영상 기술을 통해 실시간으로 뇌 활동을 관찰할 수 있게 되었습니다. 이를 통해 감정, 인지, 의사결정 과정에 대한 이해가 크게 발전했습니다.\n\n디지털 치료(Digital Therapeutics)도 주목받는 분야입니다. 스마트폰 앱을 통한 인지행동치료, VR을 활용한 공포증 치료, AI 챗봇을 이용한 상담 등이 실제 임상에서 활용되고 있습니다.\n\n하지만 기술 발달은 새로운 문제들도 가져왔습니다. 소셜미디어 중독, 디지털 피로, 사이버 괴롭힘 등이 현대인의 정신건강을 위협하는 새로운 요소가 되었습니다. 현대 심리학은 이러한 문제들에 대한 해결책을 모색하고 있습니다.',

    'blog.posts.self-development.title': '자기계발의 심리학: 과학적 근거가 있는 성장 방법들',
    'blog.posts.self-development.excerpt': '심리학 연구를 바탕으로 한 효과적인 자기계발 방법들과 지속가능한 변화를 위한 전략을 제시합니다.',
    'blog.posts.self-development.content': '자기계발은 현대인들의 큰 관심사 중 하나입니다. 하지만 많은 자기계발서들이 과학적 근거 없이 개인적 경험에만 의존하는 경우가 많습니다. 심리학 연구를 바탕으로 한 효과적인 자기계발 방법들을 알아보겠습니다.\n\n목표 설정 이론에 따르면, 구체적이고 도전적인 목표가 성과 향상에 가장 효과적입니다. SMART(구체적, 측정가능, 달성가능, 현실적, 시한부) 목표 설정법이 대표적인 예입니다.\n\n습관 형성의 과학도 중요합니다. 새로운 습관이 자동화되기까지는 평균 66일이 걸리며, 작은 변화부터 시작하는 것이 성공 확률을 높입니다. 환경 설계와 보상 시스템 활용도 도움이 됩니다.\n\n성장 마인드셋(Growth Mindset)을 기르는 것도 중요합니다. 능력이 노력을 통해 개발될 수 있다고 믿는 사람들이 더 큰 성취를 이룹니다. 실패를 학습의 기회로 보는 관점의 전환이 핵심입니다.\n\n마지막으로 자기 성찰과 피드백의 중요성을 강조합니다. 정기적인 자기 평가와 타인의 피드백을 통해 지속적인 개선이 가능합니다.',

    // Footer
    'footer.description': '재미있고 정확한 심리 테스트로 자신을 더 잘 알아가세요. 과학적 근거를 바탕으로 한 다양한 성격 및 심리 테스트를 제공합니다.',
    'footer.tests': '테스트',
    'footer.information': '정보',
    'footer.about': '서비스 소개',
    'footer.contact': '문의하기',
    'footer.privacy': '개인정보처리방침',
    'footer.terms': '이용약관',
    'footer.disclaimer': '면책조항',
    'footer.copyright': '© 2025 SimpleTest.kr. All rights reserved.',
    'footer.notice': '본 사이트의 테스트 결과는 재미와 자기 이해를 위한 것이며, 전문적인 심리 상담을 대체할 수 없습니다.',

    // Disclaimer page
    'disclaimer.title': '면책조항',
    'disclaimer.subtitle': 'SimpleTest.kr 서비스 이용 시 주의사항을 안내드립니다',
    'disclaimer.purpose.title': '서비스 목적',
    'disclaimer.purpose.content': 'SimpleTest.kr에서 제공하는 모든 심리테스트는 오락과 자기 이해를 위한 목적으로 제작되었습니다. 본 테스트들은 과학적 연구를 바탕으로 하지만, 전문적인 심리학적 진단이나 치료를 대체하지 않습니다.',
    'disclaimer.accuracy.title': '결과의 정확성',
    'disclaimer.accuracy.content': '테스트 결과는 참고용일 뿐이며, 개인의 복잡한 심리상태를 완전히 반영하지 못할 수 있습니다. 결과에 대한 해석은 개인의 판단에 따라 달라질 수 있으며, 절대적인 기준으로 받아들이지 않기를 권장합니다.',
    'disclaimer.medical.title': '의료적 조언 아님',
    'disclaimer.medical.content': '본 사이트의 모든 내용은 의료적 조언, 진단, 또는 치료를 위한 목적이 아닙니다. 정신건강과 관련된 심각한 문제가 있다면 반드시 전문의와 상담하시기 바랍니다.',
    'disclaimer.limitation.title': '책임의 한계',
    'disclaimer.limitation.content': 'SimpleTest.kr은 테스트 결과로 인해 발생할 수 있는 어떠한 직간접적 손해에 대해서도 법적 책임을 지지 않습니다. 사용자는 자신의 판단과 책임 하에 서비스를 이용해야 합니다.',
    'disclaimer.changes.title': '면책조항 변경',
    'disclaimer.changes.content': '본 면책조항은 필요에 따라 수정될 수 있으며, 변경사항은 웹사이트에 게시됩니다. 지속적인 서비스 이용은 변경된 조건에 대한 동의로 간주됩니다.',
    'disclaimer.updated': '최종 업데이트',

    // Contact page
    'contact.title': '문의하기',
    'contact.subtitle': '궁금한 점이나 제안사항이 있으시면 언제든 연락주세요',
    'contact.info.title': '연락처 정보',
    'contact.info.email': '이메일',
    'contact.info.response': '응답 시간',
    'contact.info.response.time': '영업일 기준 24-48시간 내',
    'contact.form.title': '메시지 보내기',
    'contact.form.name': '이름',
    'contact.form.name.placeholder': '성함을 입력해주세요',
    'contact.form.email': '이메일',
    'contact.form.email.placeholder': '이메일 주소를 입력해주세요',
    'contact.form.subject': '제목',
    'contact.form.subject.placeholder': '문의 제목을 입력해주세요',
    'contact.form.message': '메시지',
    'contact.form.message.placeholder': '문의 내용을 자세히 입력해주세요',
    'contact.form.submit': '메시지 전송',
    'contact.types.title': '문의 유형',
    'contact.types.general': '일반 문의',
    'contact.types.general.desc': '서비스에 대한 일반적인 질문',
    'contact.types.technical': '기술 지원',
    'contact.types.technical.desc': '웹사이트 이용 중 발생한 문제',
    'contact.types.business': '사업 제휴',
    'contact.types.business.desc': '비즈니스 협력 관련 문의',

    'language': 'ko'
  },
  
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.home.desc': 'Go to main page',
    'nav.egen-teto-test': 'Egenteto Test',
    'nav.egen-teto-test.desc': 'Egenteto personality test',
    'nav.personality-test': 'Personality Test',
    'nav.personality-test.desc': 'MBTI personality test',
    'nav.compatibility-test': 'Compatibility Test',
    'nav.compatibility-test.desc': 'Love compatibility test',
    'nav.love-style-test': 'Love Style Test',
    'nav.love-style-test.desc': 'Discover your love style',
    'nav.blog': 'Blog',
    'nav.blog.desc': 'Psychology blog',

    // Home page
    'home.title': 'Fun Psychology Tests to Discover Yourself',
    'home.subtitle': 'Reliable tests based on scientific evidence',
    'home.description': 'Complete simple and accurate personality analysis in just 2 minutes to better understand yourself',
    'home.popular.title': 'Most Popular Test',
    'home.popular.description': 'A verified psychology test that 2 million people have participated in so far.\nDiscover yourself better with fun and accurate results.\n\nTake the test with your friends and share the results!\nEasily share on social media.',
    'home.tests.title': 'Popular Test Collection',
    'home.features.title': 'Why Not Try? Here Are 3 Good Reasons!',
    'home.stats.title': 'Amazing Participation Statistics',
    'home.cta.title': 'Start Right Now!',
    'home.cta.description': 'Invest just 2 minutes to discover a new you',
    'home.hero.title': 'Fun and Accurate Psychology Tests',
    'home.hero.subtitle': 'Discover yourself better with various personality and psychology tests based on scientific evidence',
    'home.hero.cta': 'Start Testing',
    'home.tests.subtitle': 'Check out the most popular psychology tests',

    // Common terms
    'common.participants': 'participants',
    'common.test-now': 'Test Now',
    'common.scientific': 'Scientific Evidence',
    'common.fun': 'Fun & Easy',
    'common.practical': 'Practical Use',

    // Test descriptions
    'test.egen-teto.title': 'Egenteto Test',
    'test.egen-teto.description': 'Discover your true personality type',
    'test.personality.title': 'Personality Test',
    'test.personality.description': 'MBTI-based personality type analysis',
    'test.compatibility.title': 'Compatibility Test',
    'test.compatibility.description': 'Check compatibility with your partner',
    'test.love-style.title': 'Love Style Test',
    'test.love-style.description': 'Analyze your unique dating patterns',

    // Blog
    'blog.title': 'Psychology Blog',
    'blog.subtitle': 'Providing in-depth information and insights about psychology and personality',
    'blog.search.placeholder': 'Search blog...',
    'blog.readmore': 'Read More',

    // Blog posts
    'blog.posts.mbti-guide.title': 'Complete MBTI Guide: Characteristics and Pros & Cons of 16 Personality Types',
    'blog.posts.mbti-guide.excerpt': 'Learn about the detailed characteristics of all 16 MBTI personality types, their strengths and weaknesses, and how to apply them in daily life.',
    'blog.posts.mbti-guide.content': 'The MBTI (Myers-Briggs Type Indicator) is a personality assessment that classifies individuals into 16 personality types based on their preferences. It was developed in the 1940s by Katharine Cook Briggs and her daughter Isabel Briggs Myers, based on Carl Jung\'s psychological type theory.\n\nMBTI consists of four dimensions:\n1. Extraversion (E) vs Introversion (I): Direction of energy\n2. Sensing (S) vs Intuition (N): Information gathering\n3. Thinking (T) vs Feeling (F): Decision making\n4. Judging (J) vs Perceiving (P): Lifestyle approach\n\nThe combination of these dimensions creates 16 personality types. These include ISTJ (The Inspector), ISFJ (The Protector), INFJ (The Advocate), INTJ (The Architect), and others, each with unique characteristics and strengths.\n\nUsing MBTI can help you better understand your personality, improve relationships with others, and find suitable careers. However, MBTI is not a perfect tool and cannot fully explain the complexity of individuals.',

    'blog.posts.psychology-test-history.title': 'History and Development of Psychology Tests: From Ancient Times to Modern Era',
    'blog.posts.psychology-test-history.excerpt': 'Explore how psychology tests began and developed to the present day, examining their historical background and major milestones.',
    'blog.posts.psychology-test-history.content': 'The history of psychological testing is a product of humanity\'s effort to understand themselves and others. Since ancient Greece, there have been attempts to classify human personality and temperament, with Hippocrates\' four humors theory being considered the beginning.\n\nIn the late 19th century, Francis Galton, known as the father of individual differences research, established the first mental measurement laboratory. In the early 20th century, Alfred Binet developed intelligence tests, laying the foundation for modern psychological testing.\n\nDuring World War I, large-scale group testing was conducted, and subsequently, the field of personality testing developed rapidly. The 1940s saw the development of MMPI, the 1960s brought 16PF, and the 1970s introduced MBTI, making psychological tests more sophisticated.\n\nCurrently, with the development of computer and internet technology, online psychological tests have become common, and new forms of psychological assessment using big data and AI technology are emerging.',

    'blog.posts.personality-development.title': 'Can Personality Change? Psychology of Personality Development and Change',
    'blog.posts.personality-development.excerpt': 'Explore psychological perspectives on whether personality is fixed or can change over time.',
    'blog.posts.personality-development.content': 'The possibility of personality change is one of psychology\'s long-standing topics. Traditionally, it was believed that personality hardly changes after age 30, but recent research shows different results.\n\nAccording to the Big Five model of personality, there are five major personality dimensions: openness, conscientiousness, extraversion, agreeableness, and neuroticism. Some of these tend to change as people age.\n\nResearch shows that most people become more conscientious, agreeable, and emotionally stable as they age. This is called "personality maturation." Evidence is also emerging that personality can be changed to some extent through intentional effort.\n\nFactors influencing personality change include life experiences, significant events, therapy or counseling, and conscious effort. While becoming a completely different person is difficult, gradual change in desired directions is possible.',

    'blog.posts.relationship-psychology.title': 'Psychology of Love: Scientific Understanding of Love and Attachment',
    'blog.posts.relationship-psychology.excerpt': 'Discover the psychological principles behind love and relationships, with scientific advice for healthy relationships.',
    'blog.posts.relationship-psychology.content': 'Love is one of humanity\'s most complex and powerful emotions. Psychologists have conducted various theories and research to understand love.\n\nAccording to Sternberg\'s Triangular Theory of Love, love consists of three components: intimacy, passion, and commitment. Different combinations of these three elements create various forms of love.\n\nAttachment theory is also an important framework for understanding romantic relationships. Love patterns differ according to secure, anxious, and avoidant attachment styles. Childhood caregiving experiences greatly influence adult romantic relationships.\n\nFor healthy romantic relationships, effective communication, mutual respect, and personal growth are important. Understanding your attachment style and making efforts to change it when necessary is also helpful. Using scientific research results can help create more satisfying romantic relationships.',

    'blog.posts.stress-management.title': 'Psychology of Stress Management: Effective Coping Strategies and Techniques',
    'blog.posts.stress-management.excerpt': 'Introduction to scientifically validated methods for stress management, an essential task for modern people.',
    'blog.posts.stress-management.content': 'Stress has become an unavoidable part of daily life for modern people. However, stress itself is not necessarily bad. Appropriate stress can be a driving force for motivation and growth.\n\nStress responses are largely divided into acute stress and chronic stress. Acute stress occurs in short-term crisis situations, while chronic stress results from continuous pressure. Chronic stress can seriously harm physical and mental health.\n\nEffective stress management methods include cognitive restructuring, problem-focused coping, and emotion-focused coping. Regular exercise, adequate sleep, meditation and yoga, and social support also help reduce stress.\n\nDeveloping personalized stress management strategies considering individual differences is important, and seeking professional help when necessary is also a good approach.',

    'blog.posts.personality-workplace.title': 'Personality in the Workplace: Impact on Work Performance and Relationships',
    'blog.posts.personality-workplace.excerpt': 'Learn about the role personality plays in work life and effective work methods using personality.',
    'blog.posts.personality-workplace.content': 'Success in the workplace is not determined solely by work ability. Personality plays an important role in various aspects such as work performance, leadership, teamwork, and job satisfaction.\n\nApplying the Big Five personality model to workplace situations, conscientiousness shows the strongest correlation with performance in almost all jobs. Extraversion is particularly important in sales or management positions, while openness is crucial for creative work.\n\nPersonality-job fit is also an important consideration. Introverted people tend to prefer analytical and independent work, while extraverted people prefer work involving interaction with people.\n\nIn teamwork, personality diversity can actually be helpful. When team members with different personalities play complementary roles, better results can be achieved. The important thing is understanding and respecting your own and colleagues\' personalities.',

    'blog.posts.modern-psychology.title': 'New Trends in Modern Psychology: Mental Health in the Digital Age',
    'blog.posts.modern-psychology.excerpt': 'Examine the changes that technological development has brought to psychology and new research trends.',
    'blog.posts.modern-psychology.content': '21st-century psychology is undergoing rapid changes alongside technological development. The advancement of neuroscience, big data, and artificial intelligence has brought new methods for understanding the human mind.\n\nIn neuropsychology, brain imaging technologies like fMRI and EEG have made it possible to observe brain activity in real-time. This has greatly advanced our understanding of emotions, cognition, and decision-making processes.\n\nDigital Therapeutics is also a notable field. Cognitive behavioral therapy through smartphone apps, phobia treatment using VR, and counseling using AI chatbots are being used in actual clinical settings.\n\nHowever, technological development has also brought new problems. Social media addiction, digital fatigue, and cyberbullying have become new factors threatening modern people\'s mental health. Modern psychology is seeking solutions to these problems.',

    'blog.posts.self-development.title': 'Psychology of Self-Development: Evidence-Based Growth Methods',
    'blog.posts.self-development.excerpt': 'Present effective self-development methods based on psychological research and strategies for sustainable change.',
    'blog.posts.self-development.content': 'Self-development is one of modern people\'s major interests. However, many self-help books rely only on personal experience without scientific evidence. Let\'s explore effective self-development methods based on psychological research.\n\nAccording to goal-setting theory, specific and challenging goals are most effective for performance improvement. The SMART (Specific, Measurable, Achievable, Realistic, Time-bound) goal-setting method is a representative example.\n\nThe science of habit formation is also important. It takes an average of 66 days for new habits to become automatic, and starting with small changes increases the probability of success. Environmental design and reward system utilization are also helpful.\n\nDeveloping a growth mindset is also important. People who believe that abilities can be developed through effort achieve greater accomplishments. The key is shifting perspective to view failure as learning opportunities.\n\nFinally, we emphasize the importance of self-reflection and feedback. Continuous improvement is possible through regular self-evaluation and feedback from others.',

    // Footer
    'footer.description': 'Discover yourself better with fun and accurate psychological tests. We provide various personality and psychological tests based on scientific evidence.',
    'footer.tests': 'Tests',
    'footer.information': 'Information',
    'footer.about': 'About',
    'footer.contact': 'Contact',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Service',
    'footer.disclaimer': 'Disclaimer',
    'footer.copyright': '© 2025 SimpleTest.kr. All rights reserved.',
    'footer.notice': 'The test results on this site are for entertainment and self-understanding purposes and cannot replace professional psychological counseling.',

    // Disclaimer page
    'disclaimer.title': 'Disclaimer',
    'disclaimer.subtitle': 'Important information regarding the use of SimpleTest.kr services',
    'disclaimer.purpose.title': 'Service Purpose',
    'disclaimer.purpose.content': 'All psychological tests provided by SimpleTest.kr are created for entertainment and self-understanding purposes. While these tests are based on scientific research, they do not replace professional psychological diagnosis or treatment.',
    'disclaimer.accuracy.title': 'Accuracy of Results',
    'disclaimer.accuracy.content': 'Test results are for reference only and may not fully reflect an individual\'s complex psychological state. Interpretation of results may vary according to personal judgment, and we recommend not accepting them as absolute standards.',
    'disclaimer.medical.title': 'Not Medical Advice',
    'disclaimer.medical.content': 'All content on this site is not intended for medical advice, diagnosis, or treatment purposes. If you have serious mental health issues, please consult with a professional.',
    'disclaimer.limitation.title': 'Limitation of Liability',
    'disclaimer.limitation.content': 'SimpleTest.kr does not take legal responsibility for any direct or indirect damages that may arise from test results. Users must use the service under their own judgment and responsibility.',
    'disclaimer.changes.title': 'Changes to Disclaimer',
    'disclaimer.changes.content': 'This disclaimer may be modified as necessary, and changes will be posted on the website. Continued use of the service is considered consent to the changed terms.',
    'disclaimer.updated': 'Last Updated',

    // Contact page
    'contact.title': 'Contact Us',
    'contact.subtitle': 'Please feel free to contact us if you have any questions or suggestions',
    'contact.info.title': 'Contact Information',
    'contact.info.email': 'Email',
    'contact.info.response': 'Response Time',
    'contact.info.response.time': 'Within 24-48 hours on business days',
    'contact.form.title': 'Send Message',
    'contact.form.name': 'Name',
    'contact.form.name.placeholder': 'Please enter your name',
    'contact.form.email': 'Email',
    'contact.form.email.placeholder': 'Please enter your email address',
    'contact.form.subject': 'Subject',
    'contact.form.subject.placeholder': 'Please enter inquiry subject',
    'contact.form.message': 'Message',
    'contact.form.message.placeholder': 'Please enter your inquiry in detail',
    'contact.form.submit': 'Send Message',
    'contact.types.title': 'Inquiry Types',
    'contact.types.general': 'General Inquiry',
    'contact.types.general.desc': 'General questions about our services',
    'contact.types.technical': 'Technical Support',
    'contact.types.technical.desc': 'Issues encountered while using the website',
    'contact.types.business': 'Business Partnership',
    'contact.types.business.desc': 'Business cooperation related inquiries',

    'language': 'en'
  }
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('ko');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
