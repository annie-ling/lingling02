工程管家 V5｜多人雲端準備版

已加入：
- 老闆／行政／師傅三角色
- 師傅只看分派給自己的工程
- 師傅隱藏財務欄位
- 團隊管理
- Supabase 設定頁
- Supabase SQL schema 範本
- 案件、今日流程、施工紀錄的角色化基礎

目前 ZIP 可直接放 GitHub Pages 測試，但資料層仍是 localStorage。
真正跨手機多人同步需要接：
Supabase Auth + Database + RLS + private Storage。

安全：
前端只能放 publishable/anon key，絕對不要放 service_role key。
正式商用前一定要完成 RLS，避免不同公司的資料互相可見。
