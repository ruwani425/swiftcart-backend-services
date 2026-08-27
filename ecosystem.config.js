module.exports = {
  apps: [
    {
      name: "user-service",
      script: "java",
      args: "-Dspring.classformat.ignore=true -Deureka.client.serviceUrl.defaultZone=http://10.0.1.8:8761/eureka/ -Deureka.instance.prefer-ip-address=true -jar user-service/target/user-service-1.0.0-SNAPSHOT.jar",
      autorestart: true,
      watch: false,
      max_memory_restart: "768M",
      env: {
        NODE_ENV: "production",
        EUREKA_SERVER_URL: "http://10.0.1.8:8761/eureka/"
      }
    },
    {
      name: "product-service",
      script: "java",
      args: "-Dspring.classformat.ignore=true -Deureka.client.serviceUrl.defaultZone=http://10.0.1.8:8761/eureka/ -Deureka.instance.prefer-ip-address=true -jar product-service/target/product-service-1.0.0-SNAPSHOT.jar",
      autorestart: true,
      watch: false,
      max_memory_restart: "768M",
      env: {
        NODE_ENV: "production",
        EUREKA_SERVER_URL: "http://10.0.1.8:8761/eureka/"
      }
    },
    {
      name: "order-service",
      script: "java",
      args: "-Dspring.classformat.ignore=true -Deureka.client.serviceUrl.defaultZone=http://10.0.1.8:8761/eureka/ -Deureka.instance.prefer-ip-address=true -jar order-service/target/order-service-1.0.0-SNAPSHOT.jar",
      autorestart: true,
      watch: false,
      max_memory_restart: "768M",
      env: {
        NODE_ENV: "production",
        EUREKA_SERVER_URL: "http://10.0.1.8:8761/eureka/"
      }
    }
  ]
};
