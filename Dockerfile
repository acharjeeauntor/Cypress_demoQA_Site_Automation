FROM cypress/included:9.4.1
RUN mkdir /cypress-docker
WORKDIR /cypress-docker
COPY ./package.json .
COPY ./cypress.config.js .
COPY ./package-lock.json .
COPY ./cypress ./cypress
RUN npm install
ENTRYPOINT ["npm", "run"]