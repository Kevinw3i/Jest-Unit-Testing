---
title: javascript 單元測試
tags: js, unit test
---

# 那些關於單元測試的事

## 單元測試
單元測試（Unit Testing）又稱模組測試，針對程式模組（軟體設計的最小單位）來進行正確性檢驗的測試工作，程式單元是應用的最小可測試部件。

## 本篇使用的是 Jest
[Jest 官網](https://jestjs.io/)

## 建立專案
```
npm init -y

```
## 下載套件
```
npm install jest --save-dev
```
## 設定測試指令
```
scripts: {
    "test": "jest"
}
```

設定好後，終端機中使用以下方式輸入，便能執行設定好的對應指令：
```
npm run test //對應指令
```

