
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="shadow-xl border-0">
          <CardHeader className="bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-t-lg">
            <CardTitle className="text-3xl text-center">개인정보 처리방침</CardTitle>
            <p className="text-center text-purple-100 mt-2">개인정보보호법에 따른 개인정보 처리방침</p>
          </CardHeader>
          <CardContent className="p-8 space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">1. 개인정보 수집 및 이용 목적</h2>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-700 leading-relaxed">
                  SimpleTest.kr은 다음의 목적을 위하여 개인정보를 처리합니다:
                </p>
                <ul className="list-disc list-inside mt-3 space-y-2 text-gray-700">
                  <li>심리 테스트 서비스 제공 및 결과 분석</li>
                  <li>서비스 이용에 따른 본인확인, 개인식별</li>
                  <li>부정이용 방지 및 서비스 개선</li>
                  <li>통계작성, 학술연구, 시장조사</li>
                  <li>고객센터 운영 및 고객상담</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">2. 수집하는 개인정보 항목</h2>
              <div className="bg-blue-50 p-4 rounded-lg">
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-gray-800">필수 수집 정보</h3>
                    <ul className="list-disc list-inside mt-2 text-gray-700">
                      <li>테스트 응답 데이터 (익명화)</li>
                      <li>서비스 이용 기록, 접속 로그, 쿠키</li>
                      <li>접속 IP정보, 브라우저 정보</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">선택 수집 정보</h3>
                    <ul className="list-disc list-inside mt-2 text-gray-700">
                      <li>이메일 주소 (결과 저장 시)</li>
                      <li>성별, 연령대 (통계 분석용)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">3. 개인정보 보유 및 이용기간</h2>
              <div className="bg-green-50 p-4 rounded-lg">
                <ul className="space-y-2 text-gray-700">
                  <li><strong>테스트 결과 데이터:</strong> 1년 (통계 분석 후 파기)</li>
                  <li><strong>서비스 이용 기록:</strong> 3개월</li>
                  <li><strong>쿠키:</strong> 브라우저 종료 시 또는 1년</li>
                  <li><strong>선택 제공 정보:</strong> 회원 탈퇴 또는 동의 철회 시까지</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">4. 개인정보 제3자 제공</h2>
              <div className="bg-yellow-50 p-4 rounded-lg">
                <p className="text-gray-700 leading-relaxed">
                  SimpleTest.kr은 원칙적으로 개인정보를 제3자에게 제공하지 않습니다. 
                  다만, 다음의 경우에는 예외로 합니다:
                </p>
                <ul className="list-disc list-inside mt-3 space-y-1 text-gray-700">
                  <li>정보주체가 사전에 동의한 경우</li>
                  <li>법령의 규정에 의거하거나 수사목적으로 법령에 정해진 절차와 방법에 따라 수사기관의 요구가 있는 경우</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">5. 정보주체의 권리</h2>
              <div className="bg-purple-50 p-4 rounded-lg">
                <p className="text-gray-700 mb-3">정보주체는 다음과 같은 권리를 행사할 수 있습니다:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>개인정보 처리정지 요구권</li>
                  <li>개인정보 열람요구권</li>
                  <li>개인정보 정정·삭제요구권</li>
                  <li>개인정보 손해배상청구권</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">6. 개인정보 안전성 확보조치</h2>
              <div className="bg-red-50 p-4 rounded-lg">
                <ul className="space-y-2 text-gray-700">
                  <li><strong>관리적 보호조치:</strong> 개인정보 취급직원의 최소화 및 교육</li>
                  <li><strong>기술적 보호조치:</strong> 개인정보처리시스템 등의 접근권한 관리</li>
                  <li><strong>물리적 보호조치:</strong> 전산실, 자료보관실 등의 접근통제</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">7. 개인정보보호책임자</h2>
              <div className="bg-gray-100 p-4 rounded-lg">
                <div className="text-gray-700">
                  <p><strong>성명:</strong> 개인정보보호책임자</p>
                  <p><strong>연락처:</strong> privacy@simpletest.kr</p>
                  <p><strong>처리방침 변경일자:</strong> 2024년 6월 24일</p>
                </div>
              </div>
            </section>

            <div className="text-center text-gray-500 text-sm mt-8 pt-8 border-t">
              <p>본 개인정보 처리방침은 2024년 6월 24일부터 적용됩니다.</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
