---
name: slash-status
description: 顯示當前讀書進度、焦慮值與戰棋陣容。
---

# 指令用途
讓客戶隨時掌握當前「寧靜引擎」的運作狀態。

# 執行邏輯
1. 從 `shared-memory/client/current` 讀取狀態。
2. 輸出格式化報告：任務清單、當前焦慮趨勢、戰棋羈絆。
