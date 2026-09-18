工程管家 V3
==============

可直接測試的功能
- 本機帳號登入（每個帳號分開資料）
- 工作台：進行中、待收款、本月已收、預估毛利
- 工程案件新增／編輯／刪除／搜尋
- 材料成本、材料報價、工資、其他費用
- 收款與保固
- 施工照片
- 材料庫與庫存成本
- 正式報價頁、複製報價文字、列印／存 PDF
- 手機版介面

重要說明
此 ZIP 是可直接部署到 GitHub Pages 的 V3 測試版。
因為真正的 Supabase 雲端登入、資料庫與 Storage 必須使用「你自己的 Supabase 專案 URL / publishable 或 anon key」，
不能安全地替你虛構憑證，所以下載版預設仍使用 localStorage，並已附 supabase-config.example.js 作為接雲端的設定範本。

安全提醒
- 不要把 Supabase service_role key 放進 GitHub Pages 或任何前端程式。
- 正式商用請使用 Supabase Auth + Row Level Security (RLS)。
- 照片正式版應存 Storage，不應長期塞在 localStorage。
- 本機登入只是介面/流程測試，不等同正式安全驗證。
