import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, MessageSquare } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '@/contexts/LanguageContext';
import AdBanner from '@/components/AdBanner';

const Contact = () => {
  const { language } = useLanguage();

  const content = {
    ko: {
      title: "문의하기",
      subtitle: "궁금한 점이나 제안사항이 있으시면 언제든지 연락해주세요",
      contactInfo: {
        title: "연락처 정보",
        email: "이메일: contact@simpletest.kr",
        description: "문의사항이나 제안사항이 있으시면 위 이메일로 연락해주세요. 빠른 시일 내에 답변드리겠습니다."
      },
      faq: {
        title: "자주 묻는 질문",
        items: [
          {
            question: "Q. 테스트 결과가 정확한가요?",
            answer: "저희 테스트는 심리학 이론을 바탕으로 제작되었지만, 재미와 자기 이해를 위한 도구입니다. 정확한 심리 진단은 전문가와 상담하시기 바랍니다."
          },
          {
            question: "Q. 개인정보는 안전한가요?",
            answer: "저희는 개인정보를 수집하지 않으며, 모든 테스트는 익명으로 진행됩니다. 결과도 브라우저에 저장되지 않습니다."
          },
          {
            question: "Q. 새로운 테스트는 언제 추가되나요?",
            answer: "정기적으로 새로운 테스트를 추가하고 있습니다. 원하시는 테스트가 있으시면 문의해주세요!"
          }
        ]
      },
      feedback: {
        title: "피드백 및 제안",
        description: "더 나은 서비스를 위해 여러분의 의견을 기다립니다:",
        suggestions: [
          "새로운 테스트 아이디어",
          "웹사이트 개선 사항",
          "기능 추가 요청",
          "버그 신고",
          "기타 제안사항"
        ]
      }
    },
    en: {
      title: "Contact Us",
      subtitle: "If you have any questions or suggestions, feel free to contact us anytime",
      contactInfo: {
        title: "Contact Information",
        email: "Email: contact@simpletest.kr",
        description: "If you have any inquiries or suggestions, please contact us at the email above. We will respond as soon as possible."
      },
      faq: {
        title: "Frequently Asked Questions",
        items: [
          {
            question: "Q. Are the test results accurate?",
            answer: "Our tests are based on psychological theories, but they are tools for fun and self-understanding. For accurate psychological diagnosis, please consult with a professional."
          },
          {
            question: "Q. Is personal information safe?",
            answer: "We do not collect personal information, and all tests are conducted anonymously. Results are not stored in your browser either."
          },
          {
            question: "Q. When will new tests be added?",
            answer: "We regularly add new tests. If you have a test you'd like to see, please let us know!"
          }
        ]
      },
      feedback: {
        title: "Feedback & Suggestions",
        description: "We welcome your opinions to provide better service:",
        suggestions: [
          "New test ideas",
          "Website improvements",
          "Feature requests",
          "Bug reports",
          "Other suggestions"
        ]
      }
    }
  };

  const currentContent = content[language];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4 dark:from-gray-900 dark:to-gray-800">
      <Helmet>
        <title>{currentContent.title} - SimpleTest.kr</title>
        <meta name="description" content={currentContent.subtitle} />
        <meta name="keywords" content="문의하기, 고객지원, 연락처, 피드백, 제안사항" />
        <meta property="og:title" content={`${currentContent.title} - SimpleTest.kr`} />
        <meta property="og:description" content={currentContent.subtitle} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.simpletest.kr/contact" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={`${currentContent.title} - SimpleTest.kr`} />
        <meta name="twitter:description" content={currentContent.subtitle} />
      </Helmet>
      
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12 pt-8">
          <h1 className="text-5xl font-bold text-gray-800 mb-4 dark:text-white">
            📞 {currentContent.title}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            {currentContent.subtitle}
          </p>
        </div>

        {/* 상단 광고 */}
        <div className="mb-8">
          <AdBanner 
            adSlot="5566778899" 
            adFormat="horizontal"
            className="bg-white/50 rounded-lg p-4 dark:bg-gray-800/50"
          />
        </div>

        <div className="space-y-8">
          <Card className="shadow-xl dark:bg-gray-800 dark:border-gray-700">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl text-gray-800 dark:text-white">
                <Mail className="mr-3 h-6 w-6" />
                {currentContent.contactInfo.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-lg font-semibold text-gray-700 dark:text-gray-300">
                  {currentContent.contactInfo.email}
                </p>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {currentContent.contactInfo.description}
                </p>
              </div>
            </CardContent>
          </Card>

          {/* 중간 광고 */}
          <div className="my-8">
            <AdBanner 
              adSlot="6677889900" 
              adFormat="rectangle"
              className="bg-white/50 rounded-lg p-4 dark:bg-gray-800/50"
            />
          </div>

          <Card className="shadow-xl dark:bg-gray-800 dark:border-gray-700">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl text-gray-800 dark:text-white">
                <MessageSquare className="mr-3 h-6 w-6" />
                {currentContent.faq.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {currentContent.faq.items.map((item, index) => (
                <div key={index} className="border-b border-gray-200 dark:border-gray-600 pb-4 last:border-b-0 last:pb-0">
                  <h3 className="font-semibold text-gray-800 mb-3 dark:text-white">
                    {item.question}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="shadow-xl dark:bg-gray-800 dark:border-gray-700">
            <CardHeader>
              <CardTitle className="text-2xl text-gray-800 dark:text-white">
                💡 {currentContent.feedback.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                {currentContent.feedback.description}
              </p>
              <ul className="space-y-3">
                {currentContent.feedback.suggestions.map((suggestion, index) => (
                  <li key={index} className="text-gray-600 dark:text-gray-300 flex items-start">
                    <span className="text-blue-500 dark:text-blue-400 mr-2">•</span>
                    {suggestion}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Contact;
