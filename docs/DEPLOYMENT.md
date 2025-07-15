# Deployment Guide

This guide provides instructions for deploying the Agentic Sales Automation system.

## Docker-Compose Setup

1.  **Prerequisites:**
    - Docker and Docker Compose installed.

2.  **Configuration:**
    - Create a `.env` file in the root of the project.
    - Add the following environment variables to the `.env` file:
      ```
      N8N_USER=your-n8n-user
      N8N_PASSWORD=your-n8n-password
      GROQ_API_KEY=your-groq-api-key
      SMTP_USER=your-smtp-user
      SMTP_PASS=your-smtp-password
      SHEETS_CREDENTIALS=your-google-sheets-credentials
      ```

3.  **Run the application:**
    ```bash
    docker-compose up -d
    ```

## GitHub Actions CI/CD

The CI/CD pipeline is configured to automatically deploy the application when changes are pushed to the `main` branch. The workflow is defined in `.github/workflows/cicd.yml`.

To use the CI/CD pipeline, you will need to configure a secret in your GitHub repository named `SSH_PRIVATE_KEY` that contains the private SSH key for your server. You will also need to update the `run` step in the `cicd.yml` file to use the correct username and server address.
