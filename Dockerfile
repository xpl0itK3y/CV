# Многоступенчатая сборка для оптимизации размера образа

# Этап 1: Сборка приложения
FROM node:20-alpine AS builder

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем package.json и package-lock.json
COPY package*.json ./

# Устанавливаем зависимости
# Используем npm install как более надежный вариант
RUN npm install --legacy-peer-deps

# Копируем весь проект
COPY . .

# Собираем production build
RUN npm run build

# Этап 2: Production образ с Nginx
FROM nginx:alpine

# Устанавливаем wget для healthcheck
RUN apk add --no-cache wget

# Копируем собранное приложение из builder
COPY --from=builder /app/dist /usr/share/nginx/html

# Копируем кастомную конфигурацию nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Открываем порт 80
EXPOSE 80

# Healthcheck
HEALTHCHECK --interval=30s --timeout=10s --start-period=5s --retries=3 \
  CMD wget --quiet --tries=1 --spider http://localhost:80 || exit 1

# Запускаем nginx
CMD ["nginx", "-g", "daemon off;"]