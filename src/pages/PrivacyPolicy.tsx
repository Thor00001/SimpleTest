
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';

const PrivacyPolicy = () => {
  const { language } = useLanguage();

  const content = {
    ko: {
      title: "개인정보 처리방침",
      subtitle: "개인정보보호법에 따른 개인정보 처리방침",
      sections: {
        purpose: {
          title: "1. 개인정보 수집 및 이용 목적",
          description: "SimpleTest.kr은 개인정보를 수집하거나 이용하지 않습니다. 로그인, 회원가입, 결제 등 사용자 식별 기능 없이, 테스트 결과를 생성하여 화면에 출력하는 기능만 제공합니다.",
          items: []
        },
        collection: {
          title: "2. 수집하는 개인정보 항목",
          required: { title: "필수 수집 정보", items: ["없음"] },
          optional: { title: "선택 수집 정보", items: ["없음"] }
        },
        retention: {
          title: "3. 개인정보 보유 및 이용기간",
          items: ["개인정보를 수집하지 않으므로 보유 및 이용 기간은 존재하지 않습니다."]
        },
        thirdParty: {
          title: "4. 개인정보 제3자 제공",
          description: "SimpleTest.kr은 개인정보를 수집하지 않기 때문에 제3자에게 제공하지 않습니다.",
          items: []
        },
        rights: {
          title: "5. 정보주체의 권리",
          description: "개인정보를 수집하지 않으므로 정보주체의 권리 행사는 필요하지 않습니다.",
          items: []
        },
        security: {
          title: "6. 개인정보 안전성 확보조치",
          items: [
            "SimpleTest.kr은 개인정보를 수집하지 않으나, 사이트는 HTTPS 암호화 통신을 통해 안전하게 운영됩니다."
          ]
        },
        policyChange: {
          title: "7. 개인정보 처리방침 변경",
          description: "본 방침은 관련 법령 또는 서비스 내용의 변경에 따라 사전 고지 없이 수정될 수 있으며, 변경 시 본 페이지를 통해 공지됩니다.",
          items: [
            "시행일자: 2025년 6월 27일",
            "공지 방법: 사이트 내 공지"
          ]
        },
        contact: {
          title: "8. 개인정보 보호책임자",
          name: "성명: 개인정보 보호담당자",
          email: "이메일: contact@simpletest.kr",
          updated: "본 개인정보 처리방침은 2025년 6월 27일부터 적용됩니다."
        }
      },
      footer: "이 개인정보 처리방침은 「개인정보 보호법」 제30조에 따라 작성되었으며, 2025년 6월 27일부터 적용됩니다."
    },
    en: {
      title: "Privacy Policy",
      subtitle: "Privacy Policy in accordance with Personal Information Protection Act",
      sections: {
        purpose: {
          title: "1. Purpose of Personal Information Collection and Use",
          description: "SimpleTest.kr does not collect or use any personal information. The site only generates and displays test results without login, membership, or payment functions.",
          items: []
        },
        collection: {
          title: "2. Personal Information Items Collected",
          required: { title: "Required Information", items: ["None"] },
          optional: { title: "Optional Information", items: ["None"] }
        },
        retention: {
          title: "3. Personal Information Retention and Usage Period",
          items: ["Since no personal information is collected, there is no retention or usage period."]
        },
        thirdParty: {
          title: "4. Third Party Provision of Personal Information",
          description: "SimpleTest.kr does not collect personal information and therefore does not provide it to third parties.",
          items: []
        },
        rights: {
          title: "5. Rights of Data Subjects",
          description: "As no personal information is collected, there are no rights for data subjects to exercise.",
          items: []
        },
        security: {
          title: "6. Personal Information Security Measures",
          items: [
            "SimpleTest.kr does not collect personal information, but the site is securely operated through HTTPS encrypted communication."
          ]
        },
        policyChange: {
          title: "7. Privacy Policy Changes",
          description: "This policy may be modified without prior notice according to changes in laws or service content, and any changes will be announced on this page.",
          items: [
            "Effective Date: June 27, 2025",
            "Notification Method: Announcement on this page"
          ]
        },
        contact: {
          title: "8. Personal Information Protection Officer",
          name: "Name: Personal Information Protection Officer",
          email: "Email: contact@simpletest.kr",
          updated: "This privacy policy is effective from June 27, 2025."
        }
      },
      footer: "This privacy policy was prepared in accordance with Article 30 of the Personal Information Protection Act and is effective from June 27, 2025."
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
            {Object.entries(currentContent.sections).map(([key, section]) => (
              <section key={key}>
                <h2 className="text-2xl font-bold text-gray-800 mb-4 dark:text-white">{section.title}</h2>
                <div className="bg-gray-50 p-4 rounded-lg dark:bg-gray-800">
                  {section.description && (
                    <p className="text-gray-700 leading-relaxed dark:text-gray-300">{section.description}</p>
                  )}
                  {section.items && section.items.length > 0 && (
                    <ul className="list-disc list-inside mt-3 space-y-2 text-gray-700 dark:text-gray-300">
                      {section.items.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  )}
                  {section.required && (
                    <>
                      <h3 className="font-semibold text-gray-800 mt-4 dark:text-white">{section.required.title}</h3>
                      <ul className="list-disc list-inside mt-2 text-gray-700 dark:text-gray-300">
                        {section.required.items.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </>
                  )}
                  {section.optional && (
                    <>
                      <h3 className="font-semibold text-gray-800 mt-4 dark:text-white">{section.optional.title}</h3>
                      <ul className="list-disc list-inside mt-2 text-gray-700 dark:text-gray-300">
                        {section.optional.items.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </>
                  )}
                  {section.name && <p className="mt-4 text-gray-700 dark:text-gray-300">{section.name}</p>}
                  {section.email && <p className="text-gray-700 dark:text-gray-300">{section.email}</p>}
                  {section.updated && <p className="text-gray-700 dark:text-gray-300">{section.updated}</p>}
                </div>
              </section>
            ))}

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
