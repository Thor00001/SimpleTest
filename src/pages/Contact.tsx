
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, MessageCircle, Phone, MapPin, Clock, Send } from 'lucide-react';
import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useToast } from '@/hooks/use-toast';
import { useLanguage } from '@/contexts/LanguageContext';

const Contact = () => {
  const { t, language } = useLanguage();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    toast({
      title: language === 'ko' ? "메시지가 전송되었습니다!" : "Message sent successfully!",
      description: language === 'ko' ? 
        "빠른 시일 내에 답변드리겠습니다." : 
        "We'll get back to you as soon as possible."
    });
    
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 py-12">
      <Helmet>
        <title>{language === 'ko' ? '문의하기 - SimpleTest.kr' : 'Contact Us - SimpleTest.kr'}</title>
        <meta name="description" content={language === 'ko' ? 
          'SimpleTest.kr에 대한 문의사항이나 제안사항이 있으시면 언제든지 연락해주세요. 빠르고 정확한 답변을 드리겠습니다.' :
          'If you have any questions or suggestions about SimpleTest.kr, please contact us anytime. We will provide quick and accurate responses.'
        } />
        <meta name="keywords" content={language === 'ko' ? 
          '문의하기, 연락처, 고객센터, 제안사항, 피드백' :
          'contact, inquiry, customer service, suggestions, feedback'
        } />
        <meta property="og:title" content={language === 'ko' ? '문의하기 - SimpleTest.kr' : 'Contact Us - SimpleTest.kr'} />
        <meta property="og:description" content={language === 'ko' ? 
          'SimpleTest.kr에 대한 문의사항이나 제안사항이 있으시면 언제든지 연락해주세요.' :
          'If you have any questions or suggestions about SimpleTest.kr, please contact us anytime.'
        } />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://simpletest.kr/contact" />
      </Helmet>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            {language === 'ko' ? '문의하기' : 'Contact Us'}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {language === 'ko' ? 
              '궁금한 점이나 제안사항이 있으시면 언제든지 연락해주세요. 빠르고 정확한 답변을 드리겠습니다.' :
              'If you have any questions or suggestions, please contact us anytime. We will provide quick and accurate responses.'
            }
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Contact Form */}
          <Card className="shadow-xl border-0">
            <CardHeader>
              <CardTitle className="text-2xl text-purple-600 flex items-center">
                <MessageCircle className="h-6 w-6 mr-3" />
                {language === 'ko' ? '메시지 보내기' : 'Send Message'}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {language === 'ko' ? '이름' : 'Name'}
                  </label>
                  <Input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full"
                    placeholder={language === 'ko' ? '이름을 입력해주세요' : 'Enter your name'}
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {language === 'ko' ? '이메일' : 'Email'}
                  </label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full"
                    placeholder={language === 'ko' ? '이메일을 입력해주세요' : 'Enter your email'}
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {language === 'ko' ? '제목' : 'Subject'}
                  </label>
                  <Input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full"
                    placeholder={language === 'ko' ? '문의 제목을 입력해주세요' : 'Enter your subject'}
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {language === 'ko' ? '메시지' : 'Message'}
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full"
                    placeholder={language === 'ko' ? '문의 내용을 자세히 입력해주세요' : 'Please enter your message in detail'}
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-3 px-6 rounded-lg"
                >
                  <Send className="h-5 w-5 mr-2" />
                  {language === 'ko' ? '메시지 보내기' : 'Send Message'}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            
            {/* Contact Methods */}
            <Card className="shadow-xl border-0">
              <CardHeader>
                <CardTitle className="text-2xl text-purple-600">
                  {language === 'ko' ? '연락 방법' : 'Contact Information'}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-purple-100 p-3 rounded-full">
                    <Mail className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      {language === 'ko' ? '이메일' : 'Email'}
                    </h3>
                    <p className="text-gray-600">contact@simpletest.kr</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="bg-purple-100 p-3 rounded-full">
                    <Phone className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      {language === 'ko' ? '전화' : 'Phone'}
                    </h3>
                    <p className="text-gray-600">02-1234-5678</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="bg-purple-100 p-3 rounded-full">
                    <MapPin className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      {language === 'ko' ? '주소' : 'Address'}
                    </h3>
                    <p className="text-gray-600">
                      {language === 'ko' ? 
                        '서울특별시 강남구 테헤란로 123' :
                        '123 Teheran-ro, Gangnam-gu, Seoul'
                      }
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="bg-purple-100 p-3 rounded-full">
                    <Clock className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      {language === 'ko' ? '운영 시간' : 'Business Hours'}
                    </h3>
                    <p className="text-gray-600">
                      {language === 'ko' ? 
                        '월-금 09:00 - 18:00' :
                        'Mon-Fri 09:00 - 18:00'
                      }
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* FAQ */}
            <Card className="shadow-xl border-0">
              <CardHeader>
                <CardTitle className="text-2xl text-purple-600">
                  {language === 'ko' ? '자주 묻는 질문' : 'Frequently Asked Questions'}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="border-b pb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">
                    {language === 'ko' ? 
                      '테스트 결과는 얼마나 정확한가요?' :
                      'How accurate are the test results?'
                    }
                  </h4>
                  <p className="text-gray-600 text-sm">
                    {language === 'ko' ? 
                      '심리학 이론과 통계를 바탕으로 한 과학적 접근을 통해 높은 정확도를 제공합니다.' :
                      'We provide high accuracy through scientific approaches based on psychological theories and statistics.'
                    }
                  </p>
                </div>
                
                <div className="border-b pb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">
                    {language === 'ko' ? 
                      '개인정보는 안전하게 보호되나요?' :
                      'Is personal information safely protected?'
                    }
                  </h4>
                  <p className="text-gray-600 text-sm">
                    {language === 'ko' ? 
                      '네, 모든 개인정보는 암호화되어 안전하게 보호됩니다.' :
                      'Yes, all personal information is encrypted and safely protected.'
                    }
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    {language === 'ko' ? 
                      '테스트 결과를 다시 확인할 수 있나요?' :
                      'Can I check my test results again?'
                    }
                  </h4>
                  <p className="text-gray-600 text-sm">
                    {language === 'ko' ? 
                      '결과 화면을 스크린샷으로 저장하거나 SNS로 공유하실 수 있습니다.' :
                      'You can save the results as screenshots or share them on social media.'
                    }
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
