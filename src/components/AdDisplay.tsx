
import { useEffect } from 'react';

interface AdDisplayProps {
  adSlot: string;
  className?: string;
  style?: React.CSSProperties;
}

const AdDisplay = ({ adSlot, className = '', style }: AdDisplayProps) => {
  useEffect(() => {
    try {
      ((window as any).adsbygoogle = (window as any).adsbygoogle || []).push({});
    } catch (err) {
      console.error('AdSense error:', err);
    }
  }, []);

  return (
    <div className={`ad-display ${className}`} style={style}>
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-2129239982805567" // 실제 사용시 여기에 본인의 AdSense 클라이언트 ID 입력
        data-ad-slot={adSlot}
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  );
};

export default AdDisplay;
