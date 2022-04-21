# 測試專案

本專案以 [Create React App](https://github.com/facebook/create-react-app) 建立
目的是建立一個可以在瀏覽器上對元件進行單元測試的環境
`npx create-react-app test_cra_ts --template typescript`

相關參考文件如下:
- [CHANGELOG][]
-

[CHANGELOG]: <./docs/CHANGELOG.md> "改動日誌"
[CRA]: <https://github.com/facebook/create-react-app> "Create React App"

## 開始使用

1. 將本專案複製到您的本地端
2. 執行`npm install`指令安裝所需套件
  腳本另會自動藉由husky安裝githook與commitlint相關設定
3. 將本地專案連結到您的遠端儲存庫並設定GitHub Action

## 主要架構

>src 原始碼目錄
>>components 元件
>>>Dashboard.tsx
>>
>>pages 頁面
>>>Homepage.tsx 首頁
>>>Test0.tsx
>>>Test1.tsx
>>
>>routes 子路由
>>
>>app.tsx 負責安排路由
>>App.test.tsx 測試app的運作
>>index.tsx 負責render到root

***

## 腳本

在本專案資料夾，你可以執行:

### `npm start`

以開發模式開啟app，具有熱重載及程式碼檢查功能\
開啟 [http://localhost:3000](http://localhost:3000) 在瀏覽器上觀看


### `npm test`

執行測試，並且會在程式碼有變動存檔時自動重新執行測試(interactive watch mode)\
詳見 <https://facebook.github.io/create-react-app/docs/running-tests>

### `npm run build`

將程式碼編譯打包成生產環境所需的靜態檔案\
經過壓縮, 檔名加上hash值，放置於`build`資料夾\
詳見 <https://facebook.github.io/create-react-app/docs/deployment>

### prepare": "husky install"

***

## 小抄
### Markdown

#### 特殊字元自動轉換 \&lt; &amp

<table>
    <tr>
        <td>AT&T</td>
        <td>2<5</td>
    </tr>
</table>

#### 簡單搭建表格 |-|-|-|

|A|B|C|
|---|---|---|

#### <span>強調 *em* 及 **strong**</span>
- 可在\<span>等區段標籤使用
- 無法在\<div>等區塊標籤內使用

#### 引言 >
> 這是一段引言

#### 區塊程式碼 3+個斜撇 首行標語言類別
```typescript
const i:number = 100;
```

#### 角括號呈現連結
<http://example.com/>

#### 插入圖片: ![標題] 網址
![例圖標題](http://fakeimg.pl/300x150/3f3bb5/8cf9ff/?text=renrenren)
