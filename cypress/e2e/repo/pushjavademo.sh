cd cypress/e2e/repo/java-demo
git config --global user.name "afei"
git config --global user.email "373912677@qq.com"
git remote rm origin
git init
git remote add origin http://ezone-test.work/ABC/uicreatecodedir/uicreatecoderepo.git
git add .
git commit -m "Initial commit"
git push -u origin master