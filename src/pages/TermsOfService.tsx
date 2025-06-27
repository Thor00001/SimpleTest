
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="shadow-xl border-0">
          <CardHeader className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-t-lg">
            <CardTitle className="text-3xl text-center">이용약관</CardTitle>
            <p className="text-center text-blue-100 mt-2">SimpleTest.kr 서비스 이용약관</p>
          </CardHeader>
          <CardContent className="p-8 space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">제1조 (목적)</h2>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-700 leading-relaxed">
                  이 약관은 SimpleTest.kr(이하 "회사")이 제공하는 심리테스트 서비스의 이용조건 및 절차, 
                  회사와 이용자 간의 권리, 의무, 책임사항을 규정함을 목적으로 합니다.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">제2조 (정의)</h2>
              <div className="bg-blue-50 p-4 rounded-lg">
                <ul className="space-y-2 text-gray-700">
                  <li><strong>"서비스"</strong>란 회사가 제공하는 모든 심리테스트 및 관련 서비스를 의미합니다.</li>
                  <li><strong>"이용자"</strong>란 이 약관에 따라 회사가 제공하는 서비스를 받는 자를 의미합니다.</li>
                  <li><strong>"콘텐츠"</strong>란 서비스에서 제공되는 텍스트, 이미지, 동영상, 음성 등 모든 정보를 의미합니다.</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">제3조 (약관의 효력 및 변경)</h2>
              <div className="bg-green-50 p-4 rounded-lg">
                <div className="text-gray-700 space-y-2">
                  <p>① 이 약관은 서비스를 이용하고자 하는 모든 이용자에게 그 효력이 발생합니다.</p>
                  <p>② 회사는 필요한 경우 이 약관을 변경할 수 있으며, 변경된 약관은 서비스 내 공지사항을 통해 공시합니다.</p>
                  <p>③ 이용자가 변경된 약관에 동의하지 않는 경우, 서비스 이용을 중단하고 탈퇴할 수 있습니다.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">제4조 (서비스의 제공)</h2>
              <div className="bg-yellow-50 p-4 rounded-lg">
                <div className="text-gray-700 space-y-2">
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
              <h2 className="text-2xl font-bold text-gray-800 mb-4">제5조 (이용자의 의무)</h2>
              <div className="bg-purple-50 p-4 rounded-lg">
                <div className="text-gray-700 space-y-2">
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
              <h2 className="text-2xl font-bold text-gray-800 mb-4">제6조 (저작권 및 지적재산권)</h2>
              <div className="bg-red-50 p-4 rounded-lg">
                <div className="text-gray-700 space-y-2">
                  <p>① 서비스에 게시된 모든 콘텐츠에 대한 저작권은 회사에 귀속됩니다.</p>
                  <p>② 이용자는 서비스를 이용함으로써 얻은 정보를 회사의 사전 동의 없이 복제, 전송, 출판, 배포, 방송 기타 방법에 의하여 영리목적으로 이용할 수 없습니다.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">제7조 (면책조항)</h2>
              <div className="bg-orange-50 p-4 rounded-lg">
                <div className="text-gray-700 space-y-2">
                  <p>① 회사는 천재지변 또는 이에 준하는 불가항력으로 인하여 서비스를 제공할 수 없는 경우에는 서비스 제공에 관한 책임이 면제됩니다.</p>
                  <p>② 테스트 결과는 재미와 자기이해를 위한 참고자료일 뿐이며, 전문적인 심리상담이나 의학적 진단을 대체할 수 없습니다.</p>
                  <p>③ 회사는 이용자 간 또는 이용자와 제3자 간의 분쟁에 대해 개입할 의무가 없으며, 이로 인한 손해를 배상할 책임이 없습니다.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">제8조 (준거법 및 관할법원)</h2>
              <div className="bg-gray-100 p-4 rounded-lg">
                <div className="text-gray-700 space-y-2">
                  <p>① 이 약관에 명시되지 않은 사항은 대한민국의 관련 법령에 따릅니다.</p>
                  <p>② 서비스 이용으로 발생한 분쟁에 대해 소송이 제기될 경우, 회사의 본사 소재지를 관할하는 법원을 관할법원으로 합니다.</p>
                </div>
              </div>
            </section>

            <div className="text-center text-gray-500 text-sm mt-8 pt-8 border-t">
              <p>본 이용약관은 2024년 6월 24일부터 적용됩니다.</p>
              <p>문의사항: contact@simpletest.kr</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default TermsOfService;
