export const getMobileOS = () => {
  const userAgent = navigator.userAgent || navigator.vendor || window.opera;
  if (/android/i.test(userAgent)) {
    return 'android';
  }

  if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
    return 'ios';
  }

  return null;
};

export const copyToClipboard = (url: string) => {
  const t = document.createElement('textarea');
  document.body.appendChild(t);
  t.value = url;
  if (getMobileOS() === 'ios') {
    const r = document.createRange();
    r.selectNodeContents(t);
    const s = window.getSelection();
    s?.removeAllRanges();
    s?.addRange(r);
    t.setSelectionRange(0, 999999);
  } else {
    t.select();
  }
  document.execCommand('copy');
  document.body.removeChild(t);
};
