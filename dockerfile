############################
# STEP 1 prepare the source
############################
FROM node:16-alpine AS source
LABEL maintainer Tanawat Hongthai <tana.h@kkumail.com>

# Set the working directory to enable the support for modules.
WORKDIR /app

# Import all source file from the context.
COPY package.json .

# install node modules
RUN yarn install

############################
# STEP 2 build the executable
############################
FROM source AS builder

# Import the code from the context.
COPY . /app

# And compile the project
RUN yarn build

# ############################
# # STEP 3 the running container
# ############################
FROM nginx:alpine AS final

# Set working directory to nginx asset directory
WORKDIR /usr/share/nginx/html

# Copy our static executable.
COPY --from=builder /app/dist .

# Expose port 80.
EXPOSE 80

# Run the binary.
CMD ["nginx", "-g", "daemon off;"]

