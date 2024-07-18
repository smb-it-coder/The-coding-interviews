Sure, let's create a high-level Data Flow Diagram (DFD) for the described project of automating document extraction and classification for lawyers. A DFD typically represents the flow of data within a system and between external entities.

### Data Flow Diagram (DFD) for Document Extraction and Classification System

#### Level 0 DFD

```
        +-----------------+       +----------------+       +-------------------+
        |    Document     |       |    OCR &       |       |    Database       |
        |    Storage      +------->    Data        +------->    (Storage)      |
        |    (S3 Bucket)  |       |    Extraction  |       |                   |
        +-----------------+       +----------------+       +-------------------+
                ^                           ^                           ^
                |                           |                           |
                |                           |                           |
                |                           |                           |
                v                           |                           |
        +-----------------+       +----------------+                   |
        |                 |       |                |                   |
        |    Cron Job     +-------+   ML/AI APIs   +-------------------+
        |    Scheduler    |       |                |
        |                 |       +----------------+
        +-----------------+
                |
                |
                v
        +-----------------+
        |   Role-based    |
        |   Dashboard     |
        |   (UI)          |
        +-----------------+
```

#### Description:

1. **Document Storage (S3 Bucket)**:
   - External entity where documents are stored.
   - Data flows into the system via scheduled cron jobs.

2. **Cron Job Scheduler**:
   - Scheduled task (cron job) pulls documents from the S3 bucket daily.
   - Outputs the documents to the OCR and Data Extraction module.

3. **OCR & Data Extraction Module**:
   - Uses ML/AI APIs (like AWS Textract) to perform OCR and extract data from documents.
   - Outputs extracted data to the database for storage.

4. **Database (RDS)**:
   - Stores extracted data and metadata from documents.
   - Accessed by the Role-based Dashboard for displaying information.

5. **Role-based Dashboard (UI)**:
   - Allows users (lawyers) to view and manage extracted data.
   - Provides functionality for manual reclassification of documents if needed.

#### Notes:
- Arrows indicate the flow of data between components.
- The Level 0 DFD provides a high-level overview of the system's major components and interactions without delving into detailed processes or data structures.
- Each component represents a distinct functional module or external entity involved in the document extraction and classification process.

This DFD captures the essential flow of data and interactions in the system, from document ingestion to data storage and user interaction via a dashboard.