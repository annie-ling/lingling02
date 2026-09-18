// 工程管家 V3：Supabase 雲端升級設定範本
// 1. 建立 Supabase project
// 2. 在前端載入 @supabase/supabase-js
// 3. 僅填入 Project URL 與 anon/publishable key；不要把 service_role key 放在前端。
// 4. 啟用 Auth、Database RLS、Storage policies。
// 5. 將 index.html 目前 localStorage 的 jobs/materials/photos 操作替換成 Supabase CRUD。

const SUPABASE_URL = "YOUR_SUPABASE_URL";
const SUPABASE_ANON_KEY = "YOUR_SUPABASE_ANON_OR_PUBLISHABLE_KEY";

// 建議資料表：profiles, jobs, materials
// Storage bucket：job-photos
// jobs / materials 每列都應有 user_id，並用 RLS 限制 auth.uid() = user_id。
