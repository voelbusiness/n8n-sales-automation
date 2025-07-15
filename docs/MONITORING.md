# Monitoring Plan

This document outlines the monitoring plan for the Agentic Sales Automation system.

## Healthchecks

A healthcheck endpoint is available at `/healthz`. This endpoint can be used to monitor the health of the n8n instance. A simple way to implement this is to create a webhook-triggered workflow that responds with a 200 status code.

## Error Handling

The system includes an error trigger workflow that can be used to send notifications when errors occur. This workflow can be configured to send notifications to Slack, email, or other services.

## Monitoring with Prometheus and Grafana

The n8n instance can be monitored with Prometheus and Grafana. To do this, you will need to configure the Prometheus Exporter node in your n8n workflow. This node will expose metrics that can be scraped by Prometheus. You can then use Grafana to create dashboards to visualize the metrics.

### Key Metrics to Monitor

- CPU and memory usage
- Workflow execution times
- Number of successful and failed workflow executions
- Number of errors
