
### Low-Level Data Flow Diagram

#### Level 0 DFD
This represents the highest level of abstraction, showing the overall system as a single process.

```
   +-------------------------+
   |    Document Handling    |
   +-------------------------+
                |
                V
   +-------------------------+
   |  Document Ingestion     |
   +-------------------------+
                |
                V
   +-------------------------+
   |   Document Processing   |
   +-------------------------+
                |
                V
   +-------------------------+
   |    Data Extraction      |
   +-------------------------+
                |
                V
   +-------------------------+
   |  Document Classification|
   +-------------------------+
                |
                V
   +-------------------------+
   |   Data Storage          |
   +-------------------------+
                |
                V
   +-------------------------+
   |  Dashboard & Reporting  |
   +-------------------------+
```

#### Detailed Components

1. **Document Ingestion:** 
   - Receives documents from storage (Azure Blob).
   - Triggered by cron job or event-driven mechanism.

2. **Document Processing:**
   - Initiates OCR and text extraction using Azure Cognitive Services.
   - Executes document classification using Azure Machine Learning.

3. **Data Storage:**
   - Stores extracted data and document metadata in Azure Cosmos DB (NoSQL).

4. **Dashboard & Reporting:**
   - Provides role-based access to users via Azure App Service.
   - Allows manual reclassification and viewing of processed documents.

### High-Level Data Flow Diagram

#### Level 1 DFD

```
   +-----------------------------+
   |       Document Handling     |
   +-----------------------------+
                |
                V
   +-----------------------------+
   |   Document Ingestion        |
   +-----------------------------+
         |                      |
   +------------------+   +------------------+
   |  Azure Blob      |   |     Cron Job     |
   |   Storage        |   |   (Trigger)      |
   +------------------+   +------------------+
                |
                V
   +-----------------------------+
   |  Document Processing        |
   +-----------------------------+
         |                      |
   +------------------+   +------------------+
   | Azure Functions  |   | Azure Cognitive  |
   |                  |   | Services (OCR,   |
   |                  |   | ML APIs)         |
   +------------------+   +------------------+
                |
                V
   +-----------------------------+
   |  Data Storage               |
   +-----------------------------+
         |                      |
   +------------------+   +------------------+
   | Azure Cosmos DB  |   |    Azure SQL     |
   | (NoSQL)          |   |    Database      |
   +------------------+   +------------------+
                |
                V
   +-----------------------------+
   |  Dashboard & Reporting     |
   +-----------------------------+
         |                      |
   +------------------+   +------------------+
   | Azure App Service |   | User Interface  |
   |                  |   | (Web App)       |
   +------------------+   +------------------+
```

#### Detailed Components

1. **Azure Blob Storage:**
   - Stores incoming documents.

2. **Cron Job:**
   - Triggers document ingestion process.

3. **Azure Functions:**
   - Executes document processing (OCR, ML).

4. **Azure Cognitive Services:**
   - Provides OCR and ML capabilities for text extraction and classification.

5. **Azure Cosmos DB:**
   - Stores extracted data and document metadata.

6. **Azure SQL Database:**
   - Optionally used for structured data storage or reporting.

7. **Azure App Service:**
   - Hosts the dashboard for user interaction and manual reclassification.


# Note - alternative way using AWS

To replace the Azure-based components with AWS services like Glue for ETL (Extract, Transform, Load) jobs and S3 for storage, we can adapt the data flow diagram accordingly. Here's how you can design the architecture using AWS services:

### High-Level Data Flow Diagram Using AWS Services

#### Level 1 DFD

```
   +-----------------------------+
   |       Document Handling     |
   +-----------------------------+
                |
                V
   +-----------------------------+
   |   Document Ingestion        |
   +-----------------------------+
         |                      |
   +------------------+   +------------------+
   |  Amazon S3       |   |     Cron Job     |
   |   (Storage)      |   |   (Trigger)      |
   +------------------+   +------------------+
                |
                V
   +-----------------------------+
   |  Document Processing        |
   +-----------------------------+
         |                      |
   +------------------+   +------------------+
   | AWS Glue ETL Job  |   | AWS Lambda      |
   |                  |   |   (Trigger)      |
   +------------------+   +------------------+
                |
                V
   +-----------------------------+
   |  Data Storage               |
   +-----------------------------+
         |                      |
   +------------------+   +------------------+
   | Amazon DynamoDB  |   | Amazon RDS      |
   | (NoSQL)          |   |   (SQL Database) |
   +------------------+   +------------------+
                |
                V
   +-----------------------------+
   |  Dashboard & Reporting     |
   +-----------------------------+
         |                      |
   +------------------+   +------------------+
   | AWS Lambda       |   | User Interface  |
   |                  |   | (Web App)       |
   +------------------+   +------------------+
```

#### Detailed Components

1. **Amazon S3:**
   - Stores incoming documents.

2. **Cron Job:**
   - Triggers document ingestion process.

3. **AWS Glue ETL Job:**
   - Performs ETL operations to extract data, transform it (e.g., OCR, classification), and load it into data stores (DynamoDB, RDS).

4. **AWS Lambda (Trigger):**
   - Executes serverless functions triggered by events like document upload or ETL job completion.

5. **Amazon DynamoDB:**
   - NoSQL database to store unstructured data or document metadata.

6. **Amazon RDS (SQL Database):**
   - Optionally used for structured data storage or reporting.

7. **AWS Lambda (User Interface):**
   - Hosts the dashboard for user interaction, allowing manual reclassification and viewing of processed documents.

### AWS Service Usage Explanation

- **Amazon S3:** Provides scalable object storage to store documents securely and reliably.
- **AWS Glue:** Offers fully managed ETL service to prepare and load data for analytics.
- **Amazon DynamoDB:** Fully managed NoSQL database service for fast and predictable performance with seamless scalability.
- **Amazon RDS:** Managed relational database service for SQL-based applications, providing cost-efficient and resizable capacity.
- **AWS Lambda:** Serverless compute service to run code in response to events, enabling functions to handle document processing triggers and user interface operations.

### Cost Considerations

- **Amazon S3:** Costs based on storage used and number of requests.
- **AWS Glue:** Pricing based on Data Processing Units (DPU) and data processed.
- **Amazon DynamoDB:** Costs based on provisioned capacity (Read/Write capacity units) and storage used.
- **Amazon RDS:** Costs vary by database instance type and storage size.
- **AWS Lambda:** Pay for compute time consumed.

