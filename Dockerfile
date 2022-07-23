FROM cypress/base:latest

COPY ./ ./

RUN npm install --save-dev
# RUN chmod +x ./run.sh
# RUN ./run.sh
