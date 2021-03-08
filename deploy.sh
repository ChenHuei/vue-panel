# 當發生錯誤時終止腳本運行
set -e

# 打包
npm run build

# 移動至到打包後的 dist 目錄 
cd dist
git init
git add -A
git commit -m 'deploy'

# 部署到 https://github.com/ChenHuei/vue-panel.git 分支為 gh-pages
git push -f https://github.com/ChenHuei/vue-panel.git master:gh-pages

cd -