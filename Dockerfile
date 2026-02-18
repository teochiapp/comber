FROM node:22-alpine AS build

WORKDIR /app

# Accept build-time environment variables from Coolify
ARG REACT_APP_EMAILJS_PUBLIC_KEY
ARG REACT_APP_EMAILJS_SERVICE_ID
ARG REACT_APP_EMAILJS_TEMPLATE_ID
ARG REACT_APP_ENVIRONMENT
ARG REACT_APP_VERSION
ARG INLINE_RUNTIME_CHUNK
ARG NODE_ENV

# Set them as environment variables for the build
ENV REACT_APP_EMAILJS_PUBLIC_KEY=$REACT_APP_EMAILJS_PUBLIC_KEY
ENV REACT_APP_EMAILJS_SERVICE_ID=$REACT_APP_EMAILJS_SERVICE_ID
ENV REACT_APP_EMAILJS_TEMPLATE_ID=$REACT_APP_EMAILJS_TEMPLATE_ID
ENV REACT_APP_ENVIRONMENT=$REACT_APP_ENVIRONMENT
ENV REACT_APP_VERSION=$REACT_APP_VERSION
ENV INLINE_RUNTIME_CHUNK=$INLINE_RUNTIME_CHUNK

# Copy package files
COPY package.json package-lock.json ./

# Install ALL dependencies (including devDependencies needed for build)
RUN npm ci

# Copy source code
COPY . .

# Build the app
RUN npm run build

# Production stage - serve with a lightweight server
FROM node:22-alpine AS production

WORKDIR /app

# Install serve to host the static files
RUN npm install -g serve

# Copy build output from build stage
COPY --from=build /app/build ./build

EXPOSE 3000

CMD ["serve", "-s", "build", "-l", "3000"]
