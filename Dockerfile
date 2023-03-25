FROM cypress/included:9.4.1
RUN mkdir /cypress-docker
WORKDIR /cypress-docker
COPY ./package.json .
COPY ./cypress.config.js .
COPY ./package-lock.json .
COPY ./cypress ./cypress
RUN apt-get install libgtk2.0-0 libgtk-3-0 libgbm-dev libnotify-dev libgconf-2-4 libnss3 libxss1 libasound2 libxtst6 xauth xvfb
RUN npm install
RUN node -v
ENTRYPOINT ["npm", "run"]
RUN npm run cy:runwithdashboard