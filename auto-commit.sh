#!/bin/bash
cd /Users/jinsurang/Documents/GitHub/SAJU

# 변경사항 확인
if [ -n "$(git status --porcelain)" ]; then
    echo "변경사항을 발견했습니다. 커밋하고 푸시합니다..."
    git add .
    git commit -m "Update: 오늘 작업 내용 자동 커밋"
    git push origin main
    echo "완료되었습니다!"
else
    echo "변경사항이 없습니다."
fi

