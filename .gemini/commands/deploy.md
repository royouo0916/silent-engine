---
name: slash-deploy
description: 執行 Phase 4，產出最終的單檔網頁應用。
---

# 指令用途
封裝所有邏輯並交付給客戶。

# 執行邏輯
1. 整合所有 Agent 的 Prompts。
2. 生成包含 Vanilla JS 與 CSS 的 index.html。
3. 將舊的 brief 移至 `shared-memory/client/archive`。
