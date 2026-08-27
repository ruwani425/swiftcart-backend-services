# SwiftCart Enterprise Cloud Architecture - Backend Services Repository

> **Module**: ITS 2130 - Enterprise Cloud Architecture  
> **Institution**: Institute of Software Engineering (IJSE)  
> **Student Name**: E. V. Ruwani Ranthika  
> **Student ID**: 241722021  
> **GCP Project ID**: `swiftcart-eca-project`  

---

## 📌 Project Description

This repository acts as the **Super-Repository (Parent Repository)** for the **Stateless Backend Microservices Layer** of the SwiftCart Enterprise E-Commerce Platform. It manages all core business domains, data persistence across Relational and Non-Relational databases, and cloud media storage.

### Managed Submodule Repositories:
- **`user-service`**: User account management & GCP Cloud Storage (GCS Bucket) avatar file uploads operating on Port `8081`.
- **`product-service`**: Product catalog & inventory management microservice operating on Port `8082` with Relational Persistence.
- **`order-service`**: High-performance Mongo Document-based order processing microservice operating on Port `8083` with resilient in-memory fallback.

---

## 🚀 Technology Stack

- **Java Version**: JDK 25 (`<java.version>25</java.version>`)
- **Framework**: Spring Boot 3.4.x, Spring Cloud 2024.0.0, Spring Data JPA, Spring Data MongoDB
- **Databases**:
  - Relational Database: H2 / MySQL (`user-service`, `product-service`)
  - Non-Relational Database: MongoDB (`order-service`)
- **Cloud Media Storage**: Google Cloud Storage Bucket (`eca-user-avatars-bucket`)
- **Process Manager**: PM2 (`ecosystem.config.js`)
- **Cloud Infrastructure**: Google Cloud Platform (GCP)
  - Managed Instance Groups (MIG): `mig-services` (Auto-scaling stateless instances)
  - VM Instance Templates: `template-services`
  - Disk Images: `img-services-golden`

---

## ⚙️ Setup & Getting Started Instructions

### 1. Clone with Submodules
To clone this super-repository along with all child submodules:
```bash
git clone --recurse-submodules https://github.com/ruwani425/swiftcart-backend-services.git
cd swiftcart-backend-services
```

### 2. Multi-Module Maven Build (JDK 25)
Build all backend microservice `.jar` files with a single command:
```bash
mvn clean package -DskipTests
```

### 3. Production Process Management via PM2
Start all 3 backend microservices using PM2:
```bash
pm2 start ecosystem.config.js
pm2 save
pm2 startup
```

### 4. Service Verification
Check process execution:
```bash
pm2 status
```
Test direct REST endpoints:
- User Service: `curl http://localhost:8081/api/v1/users`
- Product Service: `curl http://localhost:8082/api/v1/products`
- Order Service: `curl http://localhost:8083/api/v1/orders`
