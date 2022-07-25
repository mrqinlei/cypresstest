cd cypress/e2e/repo/java-demo
git remote rm origin
git init
git remote add origin http://ezone-test.work/test321/uicreatecodedir/uicreatecoderepo.git
git remote -v
git add .
git commit -m "init"
git push -u origin master