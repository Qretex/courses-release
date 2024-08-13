# Используем официальный Node.js образ в качестве базового
FROM node:20-alpine AS build

# Устанавливаем рабочую директорию в контейнере
WORKDIR /app

# Копируем package.json и yarn.lock в контейнер
COPY package.json yarn.lock ./

# Устанавливаем зависимости
RUN yarn install

# Копируем весь проект в контейнер
COPY . .

# Инициализирует переменные
ARG REACT_APP_BACKEND_URL
RUN --mount=type=secret,id=REACT_APP_API_TOKEN \
    cat /run/secrets/REACT_APP_API_TOKEN

# Устанавливаем переменные
ENV REACT_APP_BACKEND_URL=${REACT_APP_BACKEND_URL}

# Создаем production сборку
RUN yarn build

# Используем официальный образ сервера для статических файлов
FROM node:20-alpine

# Устанавливаем глобально `serve` через npm
RUN npm install -g serve

# Копируем production сборку из предыдущего этапа
COPY --from=build /app/build /app/build

# Устанавливаем рабочую директориювв
WORKDIR /app

# Указываем команду запуска
CMD ["serve", "-s", "build"]

# Указываем порт, который будет прослушиваться приложением
EXPOSE 3000
