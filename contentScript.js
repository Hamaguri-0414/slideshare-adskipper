// クラス名から要素を取得
const targetDiv = document.querySelector('.DownloadButton_root__lI8ZA');

if (targetDiv) {
    // 新しいボタン要素を作成
    const button = document.createElement('button');
    button.id = 'my-custom-button';
    button.innerHTML = 'Open Embedded Link';
    button.onclick = function () {
        const scriptElement = document.querySelector('script#__NEXT_DATA__[type="application/json"]');
        const scriptContent = scriptElement.innerHTML;
        const urlRegex = /"https?:\/\/[^\s"]*embed_code[^\s"]*"/g;
        const matchedUrls = scriptContent.match(urlRegex);
        const url = matchedUrls[0].replace(/"/g, '');
        window.location.href = url;
    };

    // CSSスタイルを設定するためのclassを追加
    button.classList.add('Button_button__9_1hP');
    button.classList.add('Button_primary__RXPn3');
    button.classList.add('Button_contained__dSZeC');
    button.classList.add('Button_large__my');

    // ボタンを対象の<div>内に追加
    targetDiv.appendChild(button);
}