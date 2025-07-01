
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const TermsOfService = () => {
  const { language, t } = useLanguage();

  useEffect(() => {
    document.title = language === 'ko' ? '이용약관 - SimpleTest.kr' : 'Terms of Service - SimpleTest.kr';
  }, [language]);

  if (language === 'ko') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="shadow-xl border-0 dark:bg-gray-800">
            <CardHeader className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-t-lg">
              <CardTitle className="text-3xl text-center">이용약관</CardTitle>
              <p className="text-center text-blue-100 mt-2">SimpleTest.kr 서비스 이용약관</p>
            </CardHeader>
            <CardContent className="p-8 space-y-8 dark:text-gray-100">
              <section>
                <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">제1조 (목적)</h2>
                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border-l-4 border-blue-500">
                  <p className="text-gray-700 dark:text-gray-200 leading-relaxed">
                    이 약관은 SimpleTest.kr(이하 "회사")이 제공하는 심리테스트 서비스의 이용조건 및 절차, 
                    회사와 이용자 간의 권리, 의무, 책임사항을 규정함을 목적으로 합니다.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">제2조 (정의)</h2>
                <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg">
                  <ul className="space-y-2 text-gray-700 dark:text-gray-200">
                    <li><strong>"서비스"</strong>란 회사가 제공하는 모든 심리테스트 및 관련 서비스를 의미합니다.</li>
                    <li><strong>"이용자"</strong>란 이 약관에 따라 회사가 제공하는 서비스를 받는 자를 의미합니다.</li>
                    <li><strong>"콘텐츠"</strong>란 서비스에서 제공되는 텍스트, 이미지, 동영상, 음성 등 모든 정보를 의미합니다.</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">제3조 (약관의 효력 및 변경)</h2>
                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border-l-4 border-blue-500">
                  <div className="text-gray-700 dark:text-gray-200 space-y-2">
                    <p>① 이 약관은 서비스를 이용하고자 하는 모든 이용자에게 그 효력이 발생합니다.</p>
                    <p>② 회사는 필요한 경우 이 약관을 변경할 수 있으며, 변경된 약관은 서비스 내 공지사항을 통해 공시합니다.</p>
                    <p>③ 이용자가 변경된 약관에 동의하지 않는 경우, 서비스 이용을 중단하고 탈퇴할 수 있습니다.</p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">제4조 (서비스의 제공)</h2>
                <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg border-l-4 border-yellow-500">
                  <div className="text-gray-700 dark:text-gray-200 space-y-2">
                    <p>① 회사는 다음과 같은 서비스를 제공합니다:</p>
                    <ul className="list-disc list-inside ml-4 space-y-1">
                      <li>성격 유형 테스트 (MBTI 등)</li>
                      <li>에겐남/테토남 테스트</li>
                      <li>연애 스타일 테스트</li>
                      <li>MBTI 궁합 테스트</li>
                      <li>기타 심리 분석 테스트</li>
                    </ul>
                    <p>② 서비스는 연중무휴, 1일 24시간 제공함을 원칙으로 합니다.</p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">제5조 (이용자의 의무)</h2>
                <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg border-l-4 border-red-500">
                  <div className="text-gray-700 dark:text-gray-200 space-y-2">
                    <p>이용자는 다음 각 호의 행위를 해서는 안 됩니다:</p>
                    <ul className="list-disc list-inside ml-4 space-y-1">
                      <li>타인의 개인정보를 도용하는 행위</li>
                      <li>서비스의 안정적 운영에 지장을 주는 행위</li>
                      <li>공공질서 및 미풍양속에 반하는 행위</li>
                      <li>타인의 명예를 손상시키거나 불이익을 주는 행위</li>
                      <li>서비스의 정보를 이용하여 영리목적의 활동을 하는 행위</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">제6조 (저작권 및 지적재산권)</h2>
                <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg border-l-4 border-orange-500">
                  <div className="text-gray-700 dark:text-gray-200 space-y-2">
                    <p>① 서비스에 게시된 모든 콘텐츠에 대한 저작권은 회사에 귀속됩니다.</p>
                    <p>② 이용자는 서비스를 이용함으로써 얻은 정보를 회사의 사전 동의 없이 복제, 전송, 출판, 배포, 방송 기타 방법에 의하여 영리목적으로 이용할 수 없습니다.</p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">제7조 (면책조항)</h2>
                <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg border-l-4 border-red-500">
                  <div className="text-gray-700 dark:text-gray-200 space-y-2">
                    <p>① 회사는 천재지변 또는 이에 준하는 불가항력으로 인하여 서비스를 제공할 수 없는 경우에는 서비스 제공에 관한 책임이 면제됩니다.</p>
                    <p>② 테스트 결과는 재미와 자기이해를 위한 참고자료일 뿐이며, 전문적인 심리상담이나 의학적 진단을 대체할 수 없습니다.</p>
                    <p>③ 회사는 이용자 간 또는 이용자와 제3자 간의 분쟁에 대해 개입할 의무가 없으며, 이로 인한 손해를 배상할 책임이 없습니다.</p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">제8조 (준거법 및 관할법원)</h2>
                <div className="bg-gray-100 dark:bg-gray-700/50 p-4 rounded-lg border-l-4 border-gray-500">
                  <div className="text-gray-700 dark:text-gray-200 space-y-2">
                    <p>① 이 약관에 명시되지 않은 사항은 대한민국의 관련 법령에 따릅니다.</p>
                    <p>② 서비스 이용으로 발생한 분쟁에 대해 소송이 제기될 경우, 회사의 본사 소재지를 관할하는 법원을 관할법원으로 합니다.</p>
                  </div>
                </div>
              </section>

              <div className="text-center text-gray-500 dark:text-gray-400 text-sm mt-8 pt-8 border-t border-gray-200 dark:border-gray-600">
                <p>본 약관은 2025년 6월 27일부터 적용되며, 별도의 공지 없이 변경될 수 있습니다.</p>
                <p>문의사항: contact@simpletest.kr</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  // English version
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="shadow-xl border-0 dark:bg-gray-800">
          <CardHeader className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-t-lg">
            <CardTitle className="text-3xl text-center">Terms of Service</CardTitle>
            <p className="text-center text-blue-100 mt-2">SimpleTest.kr Service Terms of Use</p>
          </CardHeader>
          <CardContent className="p-8 space-y-8 dark:text-gray-100">
            <section>
              <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">Article 1 (Purpose)</h2>
              <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border-l-4 border-blue-500">
                <p className="text-gray-700 dark:text-gray-200 leading-relaxed">
                  These terms aim to regulate the conditions and procedures for using psychological test services provided by SimpleTest.kr (hereinafter "Company"), and the rights, obligations, and responsibilities between the Company and users.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">Article 2 (Definitions)</h2>
              <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg">
                <ul className="space-y-2 text-gray-700 dark:text-gray-200">
                  <li><strong>"Service"</strong> means all psychological tests and related services provided by the Company.</li>
                  <li><strong>"User"</strong> means a person who receives services provided by the Company according to these terms.</li>
                  <li><strong>"Content"</strong> means all information provided by the service, including text, images, videos, and audio.</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">Article 3 (Effectiveness and Changes to Terms)</h2>
              <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border-l-4 border-blue-500">
                <div className="text-gray-700 dark:text-gray-200 space-y-2">
                  <p>① These terms become effective for all users who wish to use the service.</p>
                  <p>② The Company may change these terms when necessary, and changed terms will be announced through service notifications.</p>
                  <p>③ If users do not agree to the changed terms, they may discontinue service use and withdraw.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">Article 4 (Service Provision)</h2>
              <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg border-l-4 border-yellow-500">
                <div className="text-gray-700 dark:text-gray-200 space-y-2">
                  <p>① The Company provides the following services:</p>
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>Personality type tests (MBTI, etc.)</li>
                    <li>Egen/Teto tests</li>
                    <li>Love style tests</li>
                    <li>MBTI compatibility tests</li>
                    <li>Other psychological analysis tests</li>
                  </ul>
                  <p>② Services are provided 24 hours a day, 365 days a year in principle.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">Article 5 (User Obligations)</h2>
              <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg border-l-4 border-red-500">
                <div className="text-gray-700 dark:text-gray-200 space-y-2">
                  <p>Users must not engage in the following acts:</p>
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>Misappropriating others' personal information</li>
                    <li>Interfering with stable service operation</li>
                    <li>Acts contrary to public order and morals</li>
                    <li>Damaging others' reputation or causing disadvantage</li>
                    <li>Using service information for commercial purposes</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">Article 6 (Copyright and Intellectual Property)</h2>
              <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg border-l-4 border-orange-500">
                <div className="text-gray-700 dark:text-gray-200 space-y-2">
                  <p>① Copyright for all content posted on the service belongs to the Company.</p>
                  <p>② Users cannot use information obtained through service use for commercial purposes through reproduction, transmission, publication, distribution, broadcasting, or other methods without prior consent from the Company.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">Article 7 (Disclaimer)</h2>
              <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg border-l-4 border-red-500">
                <div className="text-gray-700 dark:text-gray-200 space-y-2">
                  <p>① The Company is exempted from liability for service provision when services cannot be provided due to natural disasters or equivalent force majeure.</p>
                  <p>② Test results are reference materials for entertainment and self-understanding only and cannot replace professional psychological counseling or medical diagnosis.</p>
                  <p>③ The Company has no obligation to intervene in disputes between users or between users and third parties and is not liable for damages resulting therefrom.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">Article 8 (Governing Law and Jurisdiction)</h2>
              <div className="bg-gray-100 dark:bg-gray-700/50 p-4 rounded-lg border-l-4 border-gray-500">
                <div className="text-gray-700 dark:text-gray-200 space-y-2">
                  <p>① Matters not specified in these terms shall be governed by relevant laws of the Republic of Korea.</p>
                  <p>② When litigation is filed regarding disputes arising from service use, the court with jurisdiction over the Company's headquarters location shall be the competent court.</p>
                </div>
              </div>
            </section>

            <div className="text-center text-gray-500 dark:text-gray-400 text-sm mt-8 pt-8 border-t border-gray-200 dark:border-gray-600">
              <p>These Terms of Service are effective from June 27, 2025.</p>
              <p>Contact: contact@simpletest.kr</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default TermsOfService;
