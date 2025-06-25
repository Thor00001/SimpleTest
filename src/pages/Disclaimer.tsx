
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { AlertTriangle, Info, Shield, RefreshCw } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Disclaimer = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 dark:from-gray-900 dark:via-purple-900 dark:to-gray-900 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
            {t('disclaimer.title')}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {t('disclaimer.subtitle')}
          </p>
        </div>

        <div className="space-y-8">
          {/* Service Purpose */}
          <Card className="border-2 border-purple-100 dark:border-gray-700">
            <CardHeader>
              <CardTitle className="flex items-center space-x-3 text-xl text-purple-600 dark:text-purple-400">
                <Info className="h-6 w-6" />
                <span>{t('disclaimer.purpose.title')}</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                {t('disclaimer.purpose.content')}
              </p>
            </CardContent>
          </Card>

          {/* Accuracy */}
          <Card className="border-2 border-purple-100 dark:border-gray-700">
            <CardHeader>
              <CardTitle className="flex items-center space-x-3 text-xl text-purple-600 dark:text-purple-400">
                <AlertTriangle className="h-6 w-6" />
                <span>{t('disclaimer.accuracy.title')}</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                {t('disclaimer.accuracy.content')}
              </p>
            </CardContent>
          </Card>

          {/* Medical Advice */}
          <Card className="border-2 border-red-200 bg-red-50 dark:border-red-800 dark:bg-red-900/20">
            <CardHeader>
              <CardTitle className="flex items-center space-x-3 text-xl text-red-600 dark:text-red-400">
                <Shield className="h-6 w-6" />
                <span>{t('disclaimer.medical.title')}</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-red-700 dark:text-red-300 leading-relaxed text-lg font-medium">
                {t('disclaimer.medical.content')}
              </p>
            </CardContent>
          </Card>

          {/* Limitation of Liability */}
          <Card className="border-2 border-purple-100 dark:border-gray-700">
            <CardHeader>
              <CardTitle className="flex items-center space-x-3 text-xl text-purple-600 dark:text-purple-400">
                <AlertTriangle className="h-6 w-6" />
                <span>{t('disclaimer.limitation.title')}</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                {t('disclaimer.limitation.content')}
              </p>
            </CardContent>
          </Card>

          {/* Changes to Disclaimer */}
          <Card className="border-2 border-purple-100 dark:border-gray-700">
            <CardHeader>
              <CardTitle className="flex items-center space-x-3 text-xl text-purple-600 dark:text-purple-400">
                <RefreshCw className="h-6 w-6" />
                <span>{t('disclaimer.changes.title')}</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                {t('disclaimer.changes.content')}
              </p>
            </CardContent>
          </Card>

          {/* Last Updated */}
          <div className="text-center py-8 border-t border-gray-200 dark:border-gray-700">
            <p className="text-gray-500 dark:text-gray-400">
              {t('disclaimer.updated')}: 2024년 3월 1일 (March 1, 2024)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Disclaimer;
