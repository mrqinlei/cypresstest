FROM cypress/base:latest

COPY ./ ./uitest

RUN npm install --save-dev
RUN npm install -g npx
RUN apt-get install libgtk2.0-0 libgtk-3-0 libgbm-dev libnotify-dev libgconf-2-4 libnss3 libxss1 libasound2 libxtst6 xauth xvfb
# RUN chmod +x ./run.sh
# RUN ./run.sh
