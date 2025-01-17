const config: any = {
  projectConfig: {
      database_url: null,
      database_type: "postgres",
      store_cors: "",
      admin_cors: "",
  },
  databaseConfig: {
      connection: {
          host: process.env.MEDUSA_DB_HOST || "127.0.0.1",
          port: parseInt(process.env.MEDUSA_DB_PORT || "5432"),
          user: process.env.MEDUSA_DB_USERNAME || "postgres",
          password: process.env.MEDUSA_DB_PASSWORD || "abhi123",
          database: process.env.MEDUSA_DB_NAME || "medusa_db",
          ssl: false,
      },
  },
};

