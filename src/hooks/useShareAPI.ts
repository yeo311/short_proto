import { copyToClipboard } from '../utils/utils';

const useShareAPI = () => {
  const share = (url: string) => {
    // Web Share API 를 사용 가능한 브라우저는 사용
    // 사용가능한 브라우저 https://caniuse.com/web-share
    if (!!navigator.share) {
      navigator.share({
        title: 'musinsa',
        url,
      });
    } else {
      copyToClipboard(url);
      alert('복사 되었습니다.');
    }
  };

  return { share };
};

export default useShareAPI;
