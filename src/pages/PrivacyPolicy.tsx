
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';

const PrivacyPolicy = () => {
  const { language, t } = useLanguage();

  const content = {
    ko: {
      title: "개인정보 처리방침",
      subtitle: "개인정보보호법에 따른 개인정보 처리방침",
      sections: {
        purpose: {
          title: "1. 개인정보 수집 및 이용 목적",
          description: "SimpleTest.kr은 다음의 목적을 위하여 개인정보를 처리합니다:",
          items: [
            "심리 테스트 서비스 제공 및 결과 분석",
            "서비스 이용에 따른 본인확인, 개인식별",
            "부정이용 방지 및 서비스 개선",
            "통계작성, 학술연구, 시장조사",
            "고객센터 운영 및 고객상담"
          ]
        },
        collection: {
          title: "2. 수집하는 개인정보 항목",
          required: {
            title: "필수 수집 정보",
            items: [
              "테스트 응답 데이터 (익명화)",
              "서비스 이용 기록, 접속 로그, 쿠키",
              "접속 IP정보, 브라우저 정보"
            ]
          },
          optional: {
            title: "선택 수집 정보",
            items: [
              "이메일 주소 (결과 저장 시)",
              "성별, 연령대 (통계 분석용)"
            ]
          }
        },
        retention: {
          title: "3. 개인정보 보유 및 이용기간",
          items: [
            "테스트 결과 데이터: 1년 (통계 분석 후 파기)",
            "서비스 이용 기록: 3개월",
            "쿠키: 브라우저 종료 시 또는 1년",
            "선택 제공 정보: 회원 탈퇴 또는 동의 철회 시까지"
          ]
        },
        thirdParty: {
          title: "4. 개인정보 제3자 제공",
          description: "SimpleTest.kr은 원칙적으로 개인정보를 제3자에게 제공하지 않습니다. 다만, 다음의 경우에는 예외로 합니다:",
          items: [
            "정보주체가 사전에 동의한 경우",
            "법령의 규정에 의거하거나 수사목적으로 법령에 정해진 절차와 방법에 따라 수사기관의 요구가 있는 경우"
          ]
        },
        rights: {
          title: "5. 정보주체의 권리",
          description: "정보주체는 다음과 같은 권리를 행사할 수 있습니다:",
          items: [
            "개인정보 처리정지 요구권",
            "개인정보 열람요구권",
            "개인정보 정정·삭제요구권",
            "개인정보 손해배상청구권"
          ]
        },
        security: {
          title: "6. 개인정보 안전성 확보조치",
          items: [
            "관리적 보호조치: 개인정보 취급직원의 최소화 및 교육",
            "기술적 보호조치: 개인정보처리시스템 등의 접근권한 관리",
            "물리적 보호조치: 전산실, 자료보관실 등의 접근통제"
          ]
        },
        contact: {
          title: "7. 개인정보보호책임자",
          name: "성명: 개인정보보호책임자",
          email: "연락처: privacy@simpletest.kr",
          updated: "처리방침 변경일자: 2024년 6월 24일"
        }
      },
      footer: "본 개인정보 처리방침은 2024년 6월 24일부터 적용됩니다."
    },
    en: {
      title: "Privacy Policy",
      subtitle: "Privacy Policy in accordance with Personal Information Protection Act",
      sections: {
        purpose: {
          title: "1. Purpose of Personal Information Collection and Use",
          description: "SimpleTest.kr processes personal information for the following purposes:",
          items: [
            "Providing psychological test services and result analysis",
            "User identification and verification for service use",
            "Prevention of fraudulent use and service improvement",
            "Statistical compilation, academic research, market research",
            "Customer service operation and consultation"
          ]
        },
        collection: {
          title: "2. Personal Information Items Collected",
          required: {
            title: "Required Information",
            items: [
              "Test response data (anonymized)",
              "Service usage records, access logs, cookies",
              "Access IP information, browser information"
            ]
          },
          optional: {
            title: "Optional Information",
            items: [
              "Email address (when saving results)",
              "Gender, age group (for statistical analysis)"
            ]
          }
        },
        retention: {
          title: "3. Personal Information Retention and Usage Period",
          items: [
            "Test result data: 1 year (destroyed after statistical analysis)",
            "Service usage records: 3 months",
            "Cookies: Browser closure or 1 year",
            "Optional information: Until membership withdrawal or consent withdrawal"
          ]
        },
        thirdParty: {
          title: "4. Third Party Provision of Personal Information",
          description: "SimpleTest.kr does not provide personal information to third parties in principle. However, exceptions are made in the following cases:",
          items: [
            "When the data subject has given prior consent",
            "When required by law enforcement agencies according to procedures and methods set by law for investigation purposes"
          ]
        },
        rights: {
          title: "5. Rights of Data Subjects",
          description: "Data subjects can exercise the following rights:",
          items: [
            "Right to request suspension of personal information processing",
            "Right to request access to personal information",
            "Right to request correction and deletion of personal information",
            "Right to claim compensation for personal information damages"
          ]
        },
        security: {
          title: "6. Personal Information Security Measures",
          items: [
            "Administrative protection measures: Minimization and training of personal information handling staff",
            "Technical protection measures: Access control to personal information processing systems",
            "Physical protection measures: Access control to computer rooms and data storage rooms"
          ]
        },
        contact: {
          title: "7. Personal Information Protection Officer",
          name: "Name: Personal Information Protection Officer",
          email: "Contact: privacy@simpletest.kr",
          updated: "Policy change date: June 24, 2024"
        }
      },
      footer: "This privacy policy is effective from June 24, 2024."
    }
  };

  const currentContent = content[language];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 py-12 dark:from-gray-900 dark:to-purple-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="shadow-xl border-0">
          <CardHeader className="bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-t-lg">
            <CardTitle className="text-3xl text-center">{currentContent.title}</CardTitle>
            <p className="text-center text-purple-100 mt-2">{currentContent.subtitle}</p>
          </CardHeader>
          <CardContent className="p-8 space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4 dark:text-white">{currentContent.sections.purpose.title}</h2>
              <div className="bg-gray-50 p-4 rounded-lg dark:bg-gray-800">
                <p className="text-gray-700 leading-relaxed dark:text-gray-300">
                  {currentContent.sections.purpose.description}
                </p>
                <ul className="list-disc list-inside mt-3 space-y-2 text-gray-700 dark:text-gray-300">
                  {currentContent.sections.purpose.items.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4 dark:text-white">{currentContent.sections.collection.title}</h2>
              <div className="bg-blue-50 p-4 rounded-lg dark:bg-blue-900/30">
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-gray-800 dark:text-white">{currentContent.sections.collection.required.title}</h3>
                    <ul className="list-disc list-inside mt-2 text-gray-700 dark:text-gray-300">
                      {currentContent.sections.collection.required.items.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 dark:text-white">{currentContent.sections.collection.optional.title}</h3>
                    <ul className="list-disc list-inside mt-2 text-gray-700 dark:text-gray-300">
                      {currentContent.sections.collection.optional.items.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4 dark:text-white">{currentContent.sections.retention.title}</h2>
              <div className="bg-green-50 p-4 rounded-lg dark:bg-green-900/30">
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  {currentContent.sections.retention.items.map((item, index) => (
                    <li key={index}><strong>{item.split(':')[0]}:</strong> {item.split(':')[1]}</li>
                  ))}
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4 dark:text-white">{currentContent.sections.thirdParty.title}</h2>
              <div className="bg-yellow-50 p-4 rounded-lg dark:bg-yellow-900/30">
                <p className="text-gray-700 leading-relaxed dark:text-gray-300">
                  {currentContent.sections.thirdParty.description}
                </p>
                <ul className="list-disc list-inside mt-3 space-y-1 text-gray-700 dark:text-gray-300">
                  {currentContent.sections.thirdParty.items.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4 dark:text-white">{currentContent.sections.rights.title}</h2>
              <div className="bg-purple-50 p-4 rounded-lg dark:bg-purple-900/30">
                <p className="text-gray-700 mb-3 dark:text-gray-300">{currentContent.sections.rights.description}</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
                  {currentContent.sections.rights.items.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4 dark:text-white">{currentContent.sections.security.title}</h2>
              <div className="bg-red-50 p-4 rounded-lg dark:bg-red-900/30">
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  {currentContent.sections.security.items.map((item, index) => (
                    <li key={index}><strong>{item.split(':')[0]}:</strong> {item.split(':')[1]}</li>
                  ))}
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4 dark:text-white">{currentContent.sections.contact.title}</h2>
              <div className="bg-gray-100 p-4 rounded-lg dark:bg-gray-800">
                <div className="text-gray-700 dark:text-gray-300">
                  <p>{currentContent.sections.contact.name}</p>
                  <p>{currentContent.sections.contact.email}</p>
                  <p>{currentContent.sections.contact.updated}</p>
                </div>
              </div>
            </section>

            <div className="text-center text-gray-500 text-sm mt-8 pt-8 border-t dark:text-gray-400 dark:border-gray-700">
              <p>{currentContent.footer}</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
