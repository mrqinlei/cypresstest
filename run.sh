rm -rf ./cypress/results/*
rm -rf ./cypress/screenshots/*
rm -rf ./cypress/videos/*
npm run cypress:run
npx mochawesome-merge cypress/results/*.json > merge-report.json
npx mochawesome-report-generator merge-report.json



