
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, MessageSquare, Send } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 실제 구현시에는 이메일 발송 로직을 추가해야 합니다
    alert('문의사항이 접수되었습니다. 빠른 시일 내에 답변드리겠습니다.');
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4 dark:from-gray-900 dark:to-gray-800">
      <Helmet>
        <title>문의하기 - SimpleTest.kr</title>
        <meta name="description" content="SimpleTest.kr에 대한 문의사항이나 제안사항이 있으시면 언제든지 연락해주세요. 빠른 시일 내에 답변드리겠습니다." />
        <meta name="keywords" content="문의하기, 고객지원, 연락처, 피드백, 제안사항" />
        <meta property="og:title" content="문의하기 - SimpleTest.kr" />
        <meta property="og:description" content="SimpleTest.kr에 대한 문의사항이나 제안사항이 있으시면 언제든지 연락해주세요." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://simpletest.kr/contact" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="문의하기 - SimpleTest.kr" />
        <meta name="twitter:description" content="SimpleTest.kr에 대한 문의사항이나 제안사항이 있으시면 언제든지 연락해주세요." />
      </Helmet>
      
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12 pt-8">
          <h1 className="text-5xl font-bold text-gray-800 mb-4 dark:text-white">
            📞 문의하기
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            궁금한 점이나 제안사항이 있으시면 언제든지 연락해주세요
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="shadow-xl dark:bg-gray-800 dark:border-gray-700">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl text-gray-800 dark:text-white">
                <MessageSquare className="mr-3 h-6 w-6" />
                문의 양식
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2 dark:text-gray-300">
                    이름 *
                  </label>
                  <Input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="이름을 입력해주세요"
                    required
                    className="dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2 dark:text-gray-300">
                    이메일 *
                  </label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="이메일을 입력해주세요"
                    required
                    className="dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2 dark:text-gray-300">
                    제목 *
                  </label>
                  <Input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="문의 제목을 입력해주세요"
                    required
                    className="dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2 dark:text-gray-300">
                    문의 내용 *
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="문의하실 내용을 자세히 적어주세요"
                    rows={6}
                    required
                    className="dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  />
                </div>

                <Button 
                  type="submit"
                  size="lg"
                  className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold"
                >
                  <Send className="mr-2 h-5 w-5" />
                  문의하기
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card className="shadow-xl dark:bg-gray-800 dark:border-gray-700">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl text-gray-800 dark:text-white">
                  <Mail className="mr-3 h-6 w-6" />
                  자주 묻는 질문
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2 dark:text-white">Q. 테스트 결과가 정확한가요?</h3>
                  <p className="text-gray-600 text-sm dark:text-gray-300">
                    저희 테스트는 심리학 이론을 바탕으로 제작되었지만, 재미와 자기 이해를 위한 도구입니다. 
                    정확한 심리 진단은 전문가와 상담하시기 바랍니다.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2 dark:text-white">Q. 개인정보는 안전한가요?</h3>
                  <p className="text-gray-600 text-sm dark:text-gray-300">
                    저희는 개인정보를 수집하지 않으며, 모든 테스트는 익명으로 진행됩니다. 
                    결과도 브라우저에 저장되지 않습니다.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2 dark:text-white">Q. 새로운 테스트는 언제 추가되나요?</h3>
                  <p className="text-gray-600 text-sm dark:text-gray-300">
                    정기적으로 새로운 테스트를 추가하고 있습니다. 
                    원하시는 테스트가 있으시면 문의해주세요!
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-xl dark:bg-gray-800 dark:border-gray-700">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-800 dark:text-white">
                  💡 피드백 및 제안
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300">
                  더 나은 서비스를 위해 여러분의 의견을 기다립니다:
                </p>
                <ul className="mt-4 space-y-2 text-sm text-gray-600 dark:text-gray-300">
                  <li>• 새로운 테스트 아이디어</li>
                  <li>• 웹사이트 개선 사항</li>
                  <li>• 기능 추가 요청</li>
                  <li>• 버그 신고</li>
                  <li>• 기타 제안사항</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
