
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, User, Clock, ArrowLeft } from 'lucide-react';

interface BlogPostProps {
  post: {
    id: number;
    title: string;
    excerpt: string;
    content: string;
    author: string;
    date: string;
    readTime: number;
    category: string;
    tags: string[];
  };
  onBack: () => void;
}

const BlogPost = ({ post, onBack }: BlogPostProps) => {
  const formatContent = (content: string) => {
    return content.split('\n\n').map((paragraph, index) => {
      if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
        return (
          <h3 key={index} className="text-xl font-bold text-gray-800 mb-4 mt-6 dark:text-white">
            {paragraph.replace(/\*\*/g, '')}
          </h3>
        );
      }
      
      if (paragraph.includes('**')) {
        const parts = paragraph.split(/\*\*(.*?)\*\*/g);
        return (
          <p key={index} className="text-gray-700 mb-4 leading-relaxed dark:text-gray-300">
            {parts.map((part, partIndex) => 
              partIndex % 2 === 1 ? (
                <strong key={partIndex} className="font-bold text-gray-800 dark:text-white">
                  {part}
                </strong>
              ) : (
                part
              )
            )}
          </p>
        );
      }
      
      if (paragraph.startsWith('- ')) {
        const items = paragraph.split('\n').filter(item => item.startsWith('- '));
        return (
          <ul key={index} className="list-disc list-inside text-gray-700 mb-4 space-y-2 dark:text-gray-300">
            {items.map((item, itemIndex) => (
              <li key={itemIndex}>{item.replace('- ', '')}</li>
            ))}
          </ul>
        );
      }
      
      return (
        <p key={index} className="text-gray-700 mb-4 leading-relaxed dark:text-gray-300">
          {paragraph}
        </p>
      );
    });
  };

  return (
    <div className="max-w-4xl mx-auto">
      <Button
        onClick={onBack}
        variant="outline"
        className="mb-6 bg-white/80 backdrop-blur-sm border-gray-300 text-gray-800 hover:bg-white/90 hover:text-gray-900 dark:bg-gray-800/80 dark:border-gray-600 dark:text-gray-200 dark:hover:bg-gray-700/90 dark:hover:text-white shadow-lg"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        블로그 목록으로 돌아가기
      </Button>

      <Card className="bg-white/95 backdrop-blur-sm shadow-2xl border-0 dark:bg-gray-800/95">
        <CardHeader>
          <div className="flex items-center justify-between mb-4">
            <Badge variant="outline" className="border-gray-300 text-gray-700 dark:border-gray-600 dark:text-gray-300">
              {post.category}
            </Badge>
            <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
              <Clock className="h-4 w-4 mr-1" />
              {post.readTime}분 읽기
            </div>
          </div>
          
          <CardTitle className="text-3xl font-bold text-gray-800 mb-4 dark:text-white">
            {post.title}
          </CardTitle>
          
          <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
            <div className="flex items-center">
              <User className="h-4 w-4 mr-1" />
              {post.author}
            </div>
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-1" />
              {post.date}
            </div>
          </div>
        </CardHeader>
        
        <CardContent>
          <p className="text-lg text-gray-600 mb-6 italic border-l-4 border-blue-500 pl-4 dark:text-gray-300 dark:border-blue-400">
            {post.excerpt}
          </p>
          
          <div className="prose prose-lg max-w-none dark:prose-invert">
            {formatContent(post.content)}
          </div>
          
          <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
            <h4 className="text-lg font-semibold mb-3 text-gray-800 dark:text-white">태그</h4>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag, index) => (
                <Badge key={index} variant="secondary" className="bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300">
                  #{tag}
                </Badge>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default BlogPost;
