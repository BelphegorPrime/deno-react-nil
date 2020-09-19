FROM debian:stretch-slim

RUN apt update && apt install -y curl zip

RUN curl -fsSL https://deno.land/x/install/install.sh | sh

ENV DENO_INSTALL="/root/.deno"
ENV PATH="/root/.deno/bin:$PATH"
