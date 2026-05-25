---
name: slash-start
description: 初始化專案，啟動 Phase 1 破冰與卸防。
---

# 指令用途
啟動與新客戶的對話。

# 執行邏輯
1. 讀取 `spec.md` 中的公司精神。
2. 詢問客戶：「你現在最焦慮的科目是什麼？」
3. 在 `shared-memory/client/current` 建立 initial_brief.json。
