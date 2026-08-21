export function downloadCV() {
  const link = document.createElement('a');
  link.href = '/CV_Do_Thanh_Danh_Frontend_Engineer.html';
  link.download = 'CV_Do_Thanh_Danh_Frontend_Engineer.html';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
