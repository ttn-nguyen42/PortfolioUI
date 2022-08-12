FROM node:16-alpine as builder
ENV NODE_ENV production
WORKDIR /app
COPY package.json ./
RUN npm install --omit=dev
COPY . .
RUN npm run build

FROM nginx:1.21.0-alpine as production
ENV NODE_ENV production
# Copy built assets from builder
COPY --from=builder /app/build /usr/share/nginx/html
# Add nginx.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf
# Expose port
EXPOSE 200
# Start nginx
CMD ["nginx", "-g", "daemon off;"]
