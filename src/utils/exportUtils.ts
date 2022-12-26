import html2Canvas from "html2canvas";
import JsPDF from "jspdf";

/**
 * 导出PDF文件
 * @param {*} dom 要导出的 PDF 元素
 * @param {*} outFileName 导出的文件名
 * @abstract 滚动条设置在上一级 不改变height高度 就可以全部导出
 * @abstract 背景图标和样式需要设置在导出的文件内容部分
 */
const exportPdf = (dom: string, outFileName: string) => {
  // 这个dom元素是要导出pdf的div容器
  const element: HTMLElement = document.querySelector(dom) as HTMLElement;
  html2Canvas(element).then((canvas) => {
    const contentWidth = canvas.width;
    const contentHeight = canvas.height;
    // 一页pdf显示html页面生成的canvas高度;
    const pageHeight = (contentWidth / 592.28) * 841.89;
    // 未生成pdf的html页面高度
    let leftHeight = contentHeight;
    // 页面偏移
    let position = 0;
    // a4纸的尺寸[595.28,841.89]，html页面生成的canvas在pdf中图片的宽高
    const imgWidth = 595.28;
    const imgHeight = (592.28 / contentWidth) * contentHeight;
    const pageData = canvas.toDataURL("image/jpeg", 1.0);
    const pdf = new JsPDF("p", "pt", "a4");
    // 有两个高度需要区分，一个是html页面的实际高度，和生成pdf的页面高度(841.89)
    // 当内容未超过pdf一页显示的范围，无需分页
    if (leftHeight < pageHeight) {
      pdf.addImage(pageData, "JPEG", 0, 0, imgWidth, imgHeight);
    } else {
      while (leftHeight > 0) {
        pdf.addImage(pageData, "JPEG", 0, position, imgWidth, imgHeight);
        leftHeight -= pageHeight;
        position -= 841.89;
        // 避免添加空白页
        if (leftHeight > 0) {
          pdf.addPage();
        }
      }
    }
    pdf.save(outFileName + ".pdf");
  });
};

export default exportPdf;
