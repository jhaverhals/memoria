# Memoria

My extended memory

## Local setup

```bash
# Initialize and install dependencies
npm i

# Run continuous builds
npm run build:watch

# Run continuous tests (in parallel terminal)
npm run test:watch

# RUN - Start web server (in parallel terminal) at port 8080  
npm run start

# DEV - Start web server (in parallel terminal) at port 8080  
npm run dev
```

## Configure mysql database connection properties

1. Create new file: `src/config/mysql.config.ts`
2. Put below content in it, replace the <..> placeholders with your values
    ```bash
    export default {
        mysql_host: "<host>",
        mysql_port: <port>,
        mysql_user: "<username>",
        mysql_pwd: "<password>",
        mysql_database: "<database>"
    }
    ```
3. The .gitignore will take care that this file won't be committed.