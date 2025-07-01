import React, { useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { AlertTriangle, Info, Shield, RefreshCw } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Disclaimer = () => {
  const { language } = useLanguage();

  useEffect(() => {
    document.title = language === 'ko' ? '면책조항 - SimpleTest.kr' : 'Disclaimer - SimpleTest.kr';
  }, [language]);

  const content = {
    ko: {
      title: "면책조항",
      subtitle: "서비스 이용 전 반드시 확인해주세요",
      purpose: {
        title: "서비스 목적",
        content: "본 웹사이트에서 제공하는 모든 심리 테스트와 성격 분석 결과는 단순히 재미와 자기 탐구를 위한 것으로, 과학적 근거나 의학적 진단을 대체할 수 없습니다. 테스트 결과는 참고용으로만 활용해주시기 바랍니다."
      },
      accuracy: {
        title: "정확성 한계",
        content: "테스트 결과의 정확성은 보장되지 않으며, 개인의 복잡하고 다면적인 성격을 완전히 반영하지 못할 수 있습니다. 결과에 대한 해석은 사용자 개인의 판단에 따라 달라질 수 있습니다."
      },
      medical: {
        title: "의료적 조언 아님",
        content: "본 서비스의 어떠한 내용도 전문적인 의료, 심리학적 상담이나 치료를 대체할 수 없습니다. 정신건강과 관련된 문제가 있으시다면 반드시 전문의와 상담하시기 바랍니다."
      },
      limitation: {
        title: "책임의 한계",
        content: "본 웹사이트는 테스트 결과로 인해 발생할 수 있는 어떠한 직간접적 손해에 대해서도 책임을 지지 않습니다. 모든 결과 활용에 대한 책임은 사용자에게 있습니다."
      },
      changes: {
        title: "면책조항 변경",
        content: "본 면책조항은 사전 고지 없이 변경될 수 있으며, 변경된 내용은 웹사이트 게시와 동시에 효력이 발생합니다. 정기적으로 면책조항을 확인해주시기 바랍니다."
      },
      updated: "최종 업데이트"
    },
    en: {
      title: "Disclaimer",
      subtitle: "Please read carefully before using our services",
      purpose: {
        title: "Service Purpose",
        content: "All psychological tests and personality analysis results provided on this website are solely for entertainment and self-exploration purposes and cannot replace scientific evidence or medical diagnosis. Test results should be used for reference only."
      },
      accuracy: {
        title: "Accuracy Limitations",
        content: "The accuracy of test results is not guaranteed and may not fully reflect an individual's complex and multifaceted personality. Interpretation of results may vary according to individual user judgment."
      },
      medical: {
        title: "Not Medical Advice",
        content: "No content on this service can replace professional medical or psychological counseling or treatment. If you have mental health-related issues, please consult with a professional."
      },
      limitation: {
        title: "Limitation of Liability",
        content: "This website assumes no responsibility for any direct or indirect damages that may arise from test results. Users are responsible for all use of results."
      },
      changes: {
        title: "Changes to Disclaimer",
        content: "This disclaimer may be changed without prior notice, and changed content takes effect upon posting on the website. Please check the disclaimer regularly."
      },
      updated: "Last Updated"
    }
  };

  const currentContent = content[language];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 dark:from-gray-900 dark:via-purple-900 dark:to-gray-900 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
            {currentContent.title}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {currentContent.subtitle}
          </p>
        </div>

        <div className="space-y-8">
          {/* Service Purpose */}
          <Card className="border-2 border-purple-100 dark:border-gray-700">
            <CardHeader>
              <CardTitle className="flex items-center space-x-3 text-xl text-purple-600 dark:text-purple-400">
                <Info className="h-6 w-6" />
                <span>{currentContent.purpose.title}</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                {currentContent.purpose.content}
              </p>
            </CardContent>
          </Card>

          {/* Accuracy */}
          <Card className="border-2 border-purple-100 dark:border-gray-700">
            <CardHeader>
              <CardTitle className="flex items-center space-x-3 text-xl text-purple-600 dark:text-purple-400">
                <AlertTriangle className="h-6 w-6" />
                <span>{currentContent.accuracy.title}</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                {currentContent.accuracy.content}
              </p>
            </CardContent>
          </Card>

          {/* Medical Advice */}
          <Card className="border-2 border-red-200 bg-red-50 dark:border-red-800 dark:bg-red-900/20">
            <CardHeader>
              <CardTitle className="flex items-center space-x-3 text-xl text-red-600 dark:text-red-400">
                <Shield className="h-6 w-6" />
                <span>{currentContent.medical.title}</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-red-700 dark:text-red-300 leading-relaxed text-lg font-medium">
                {currentContent.medical.content}
              </p>
            </CardContent>
          </Card>

          {/* Limitation of Liability */}
          <Card className="border-2 border-purple-100 dark:border-gray-700">
            <CardHeader>
              <CardTitle className="flex items-center space-x-3 text-xl text-purple-600 dark:text-purple-400">
                <AlertTriangle className="h-6 w-6" />
                <span>{currentContent.limitation.title}</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                {currentContent.limitation.content}
              </p>
            </CardContent>
          </Card>

          {/* Changes to Disclaimer */}
          <Card className="border-2 border-purple-100 dark:border-gray-700">
            <CardHeader>
              <CardTitle className="flex items-center space-x-3 text-xl text-purple-600 dark:text-purple-400">
                <RefreshCw className="h-6 w-6" />
                <span>{currentContent.changes.title}</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                {currentContent.changes.content}
              </p>
            </CardContent>
          </Card>

          {/* Last Updated */}
          <div className="text-center py-8 border-t border-gray-200 dark:border-gray-700">
            <p className="text-gray-500 dark:text-gray-400">
              ※ 본 면책조항은 SimpleTest.kr 서비스 이용 시 반드시 숙지하셔야 합니다.
            </p>
            <p className="text-gray-500 dark:text-gray-400">
              {language === 'ko' ? '본 면책조항은 2025년 6월 27일부터 시행됩니다.' : 'This disclaimer is effective from June 27, 2025.'}
              {/*{currentContent.updated}: {language === 'ko' ? '2025년 6월 27일' : 'March 1, 2024'}*/}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Disclaimer;
