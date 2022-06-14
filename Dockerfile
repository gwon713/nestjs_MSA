FROM node:14-bullseye

WORKDIR /app

COPY ./apps ./apps
COPY ./libs ./libs
COPY ./nest-cli.json .
COPY ./package.json .
COPY ./tsconfig.build.json .
COPY ./tsconfig.json .

RUN nest build common \
&& nest build database \
&& nest build gateway \
&& nest build auth \
&& rm -rf apps libsx