---
id: doc cdkdkd
title: A doc with tags
tags:
  - Demo
  - Getting started
---

id 是網址最後的 path，不設定則會自動用檔名生成
title 是文件標題，不設定則會自動用檔名生成
tags 也可以用這種方式定義 `tags: [Demo, Getting started]`

_category_.json 代表類別的下拉選單也會生成一個 category/{name} 的路徑，非必要
label 代表頁面顯示的類別標題，如果 link 裡面不設定 slug，網址就會跟著 label 而不是跟著檔案名稱 (所以 label 是中文就會是中文)，所以如果只想要 label 中文，網址和檔名英文，那就明確設定 slug
