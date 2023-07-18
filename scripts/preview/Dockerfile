FROM ghcr.io/puppeteer/puppeteer:latest

ENV PUBLIC_DIR=/public
COPY capture_preview_image.js ./
ENTRYPOINT [ "node", "capture_preview_image.js" ]
