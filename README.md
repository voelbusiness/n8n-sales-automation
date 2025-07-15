# Agentic Sales Automation with n8n

This repository contains a complete, scalable n8n automation system for agentic sales workflows. It leverages modern technologies like Groq LLM for intent processing, web scraping for market analysis, and custom JavaScript nodes for sales forecasting.

## Features

- **Chatbot Intent Processing**: Uses Groq LLM via Langchain nodes to determine user intent (e.g., Market Trend, Sales Forecast).
- **Market Trend Analysis & Reporting**: Scrapes Amazon for product data, analyzes trends using an LLM, and generates email reports.
- **Sales Data Preparation & Forecasting**: Implements a custom Gradient Descent regression model in a JavaScript node for sales forecasting.
- **Low Stock Alert System**: Triggers alerts based on chat intent and simulated inventory checks.
- **Modular Workflow**: Built with a central switch node for easy routing to sub-workflows.
- **Dockerized Deployment**: Includes a `docker-compose.yml` for easy setup.
- **CI/CD**: A GitHub Actions workflow is provided for continuous integration and deployment.
- **Monitoring**: Ready for monitoring with Prometheus and Grafana.

## Getting Started

### Prerequisites

- Docker and Docker Compose
- n8n instance
- API keys for Groq, SMTP, and Google Sheets

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/n8n-sales-automation.git
    cd n8n-sales-automation
    ```

2.  **Set up environment variables:**
    Create a `.env` file and add the following variables:
    ```
    N8N_USER=your-n8n-user
    N8N_PASSWORD=your-n8n-password
    GROQ_API_KEY=your-groq-api-key
    SMTP_USER=your-smtp-user
    SMTP_PASS=your-smtp-password
    SHEETS_CREDENTIALS=your-google-sheets-credentials
    ```

3.  **Import the n8n workflow:**
    - In your n8n instance, go to **Settings > Import > Canvas JSON**.
    - Upload the `workflow.json` file from this repository.

4.  **Start the application:**
    ```bash
    docker-compose up -d
    ```

## Project Structure

```
.
├── .github/
│   └── workflows/
│       └── cicd.yml
├── docs/
│   ├── DEPLOYMENT.md
│   └── MONITORING.md
├── scripts/
│   ├── amazon_scraper.js
│   ├── data_preprocessing.js
│   └── regression_model.js
├── docker-compose.yml
├── README.md
└── workflow.json
```

## Contributing

Contributions are welcome! Please feel free to submit a pull request.

## License

This project is licensed under the MIT License.
