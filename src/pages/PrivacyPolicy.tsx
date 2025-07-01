
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import { useEffect } from 'react';

const PrivacyPolicy = () => {
  const { language, t } = useLanguage();

  useEffect(() => {
    document.title = language === 'ko' ? '개인정보 처리방침 - SimpleTest.kr' : 'Privacy Policy - SimpleTest.kr';
  }, [language]);

  const content = {
    ko: {
      title: "개인정보 처리방침",
      subtitle: "본 방침은 2025년 6월 27일부터 적용됩니다.",
      sections: {
        purpose: {
          title: "1. 개인정보 수집 및 이용 목적",
          description: "SimpleTest.kr은 개인정보를 수집하거나 이용하지 않습니다. 로그인, 회원가입, 결제 등 사용자 식별이 필요한 기능을 제공하지 않으며, 테스트 결과를 생성하고 화면에 출력하는 기능만을 제공합니다."
        },
        collection: {
          title: "2. 수집하는 개인정보 항목",
          required: {
            title: "필수 수집 정보",
            items: ["없음"]
          },
          optional: {
            title: "선택 수집 정보",
            items: ["없음"]
          },
          note: "본 사이트는 정적 HTML 기반으로 동작하며, 쿠키, 접속 로그, IP 주소 등의 정보를 자동으로 저장하거나 처리하지 않습니다."
        },
        retention: {
          title: "3. 개인정보 보유 및 이용기간",
          description: "수집하는 개인정보가 없으므로 별도의 보유 및 이용기간은 존재하지 않습니다."
        },
        thirdParty: {
          title: "4. 개인정보 제3자 제공",
          description: "SimpleTest.kr은 개인정보를 수집하지 않으므로 제3자에게 개인정보를 제공하지 않습니다."
        },
        rights: {
          title: "5. 정보주체의 권리",
          description: "개인정보를 수집하지 않기 때문에 정보주체는 열람, 정정, 삭제, 처리정지 등의 권리를 행사할 필요가 없습니다."
        },
        autoCollection: {
          title: "6. 개인정보 자동 수집 장치", 
          description: "SimpleTest.kr은 쿠키 및 기타 자동 수집 장치를 사용하지 않습니다."
        },
        security: {
          title: "7. 개인정보 안전성 확보 조치",
          items: [
            "SimpleTest.kr은 개인정보를 수집하지 않으므로 별도의 안전조치를 적용하지 않습니다.",
            "단, 본 사이트는 HTTPS 보안 프로토콜을 사용하여 접속 보안을 유지합니다."
          ]
        },
        changes: {
          title: "8. 개인정보 처리방침 변경",
          description: "본 방침은 법령 또는 서비스 운영 정책 변경에 따라 사전 고지 없이 수정될 수 있으며, 변경 시 본 페이지를 통해 공지합니다.",
          items: [
            "시행일자: 2025년 6월 27일",
            "공지 방법: 본 페이지 내 공지"
          ]
        },
        contact: {
          title: "9. 개인정보 보호책임자",
          name: "담당자: 개인정보 보호담당자",
          email: "이메일: contact@simpletest.kr"
        }
      },
      footer: "이 개인정보 처리방침은 「개인정보 보호법」 제30조에 따라 작성되었으며, 2025년 6월 27일부터 적용됩니다."
    },
    en: {
      title: "Privacy Policy",
      subtitle: "This policy is effective from June 27, 2025.",
      sections: {
        purpose: {
          title: "1. Purpose of Personal Information Collection and Use",
          description: "SimpleTest.kr does not collect or use personal information. We do not provide functions that require user identification such as login, registration, or payment, and only provide functions to generate test results and display them on screen."
        },
        collection: {
          title: "2. Personal Information Items Collected",
          required: {
            title: "Required Information",
            items: ["None"]
          },
          optional: {
            title: "Optional Information", 
            items: ["None"]
          },
          note: "This site operates based on static HTML and does not automatically store or process information such as cookies, access logs, or IP addresses."
        },
        retention: {
          title: "3. Personal Information Retention and Usage Period",
          description: "Since no personal information is collected, there is no separate retention and usage period."
        },
        thirdParty: {
          title: "4. Third Party Provision of Personal Information",
          description: "SimpleTest.kr does not provide personal information to third parties as no personal information is collected."
        },
        rights: {
          title: "5. Rights of Data Subjects",
          description: "Since no personal information is collected, data subjects do not need to exercise rights such as access, correction, deletion, or processing suspension."
        },
        autoCollection: {
          title: "6. Automatic Personal Information Collection Devices",
          description: "SimpleTest.kr does not use cookies or other automatic collection devices."
        },
        security: {
          title: "7. Personal Information Security Measures",
          items: [
            "SimpleTest.kr does not apply separate security measures as no personal information is collected.",
            "However, this site maintains access security by using HTTPS security protocol."
          ]
        },
        changes: {
          title: "8. Privacy Policy Changes",
          description: "This policy may be modified without prior notice according to changes in laws or service operation policies, and changes will be announced through this page.",
          items: [
            "Effective date: June 27, 2025",
            "Notification method: Notice on this page"
          ]
        },
        contact: {
          title: "9. Personal Information Protection Officer",
          name: "Name: Personal Information Protection Officer",
          email: "Email: contact@simpletest.kr"
        }
      },
      footer: "This privacy policy is prepared in accordance with Article 30 of the Personal Information Protection Act and is effective from June 27, 2025."
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
                  <p className="text-gray-700 dark:text-gray-300 mt-3">{currentContent.sections.collection.note}</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4 dark:text-white">{currentContent.sections.retention.title}</h2>
              <div className="bg-green-50 p-4 rounded-lg dark:bg-green-900/30">
                <p className="text-gray-700 dark:text-gray-300">{currentContent.sections.retention.description}</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4 dark:text-white">{currentContent.sections.thirdParty.title}</h2>
              <div className="bg-yellow-50 p-4 rounded-lg dark:bg-yellow-900/30">
                <div className="bg-yellow-100 dark:bg-yellow-800/50 p-3 rounded border-l-4 border-yellow-400">
                  <p className="text-gray-700 leading-relaxed dark:text-gray-300">
                    {currentContent.sections.thirdParty.description}
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4 dark:text-white">{currentContent.sections.rights.title}</h2>
              <div className="bg-purple-50 p-4 rounded-lg dark:bg-purple-900/30">
                <p className="text-gray-700 dark:text-gray-300">{currentContent.sections.rights.description}</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4 dark:text-white">{currentContent.sections.autoCollection.title}</h2>
              <div className="bg-indigo-50 p-4 rounded-lg dark:bg-indigo-900/30">
                <p className="text-gray-700 dark:text-gray-300">{currentContent.sections.autoCollection.description}</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4 dark:text-white">{currentContent.sections.security.title}</h2>
              <div className="bg-red-50 p-4 rounded-lg dark:bg-red-900/30">
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  {currentContent.sections.security.items.map((item, index) => (
                    <li key={index}>• {item}</li>
                  ))}
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4 dark:text-white">{currentContent.sections.changes.title}</h2>
              <div className="bg-teal-50 p-4 rounded-lg dark:bg-teal-900/30">
                <p className="text-gray-700 dark:text-gray-300 mb-3">{currentContent.sections.changes.description}</p>
                <ul className="space-y-1 text-gray-700 dark:text-gray-300">
                  {currentContent.sections.changes.items.map((item, index) => (
                    <li key={index}>• {item}</li>
                  ))}
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4 dark:text-white">{currentContent.sections.contact.title}</h2>
              <div className="bg-gray-100 p-4 rounded-lg dark:bg-gray-800">
                <div className="bg-blue-50 dark:bg-blue-900/50 p-3 rounded border-l-4 border-blue-400">
                  <div className="text-gray-700 dark:text-gray-300">
                    <p><strong>{currentContent.sections.contact.name}</strong></p>
                    <p><strong>{currentContent.sections.contact.email}</strong></p>
                  </div>
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
