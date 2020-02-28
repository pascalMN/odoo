FROM node:latest as build_elements
WORKDIR static
COPY academy/static .
RUN npm install
RUN npm run build:elements:prod

FROM odoo:latest
COPY . /my-modules
COPY --from=build_elements /static/elements/elements.js /my-modules/academy/static/elements

CMD ["odoo", "-u", "academy", "-d", "docker-test"]
