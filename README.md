# @yourgithubusername/n8n-nodes-postamt

![n8n logo](n8n.png)

n8n node package to integrate with PostAmt API for sending templated messages via different channels.

![screenshot](./images/screenshot.png)

<!-- toc -->

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Credentials](#credentials)
- [Resources](#resources)
- [Development](#development)
  * [Setting up development environment](#setting-up-development-environment)
  * [Publishing to npm](#publishing-to-npm)

<!-- tocstop -->

## Features

This node allows you to interact with the PostAmt API to send templated messages through different channels:

- Send email or Slack messages using templates
- Use predefined templates: basic_link, confirmation
- Customize messages with dynamic payload data
- Handle various recipient formats

## Installation

To install this node in your n8n instance:

```bash
npm install @yourgithubusername/n8n-nodes-postamt
```

For a local installation in your n8n instance:

```bash
cd ~/.n8n
npm install @yourgithubusername/n8n-nodes-postamt
```

## Usage

1. Add the PostAmt node to your workflow
2. Configure the API credentials (API Key and URL)
3. Select the operation (Send Templated Message)
4. Configure the message parameters:
   - Channel (email or slack)
   - Recipient information
   - From address
   - Template ID
   - Custom payload data

## Credentials

The node requires the following credentials:

- **API Key**: Your PostAmt API key
- **API URL**: The base URL for the PostAmt API

## Resources

- [PostAmt API Documentation](https://docs.yourapiwebsite.com)
- [n8n Community Node Documentation](https://docs.n8n.io/integrations/creating-nodes/build/declarative-style-node/)

## Development

### Setting up development environment

```bash
# Install dependencies
npm install

# Build the node
npm run build

# Run tests
npm run test

# Link for local development
npm link
```

Add node to n8n:
```bash
cd ~/.n8n
mkdir -p custom
cd custom
npm init # press Enter for all questions
npm link @yourgithubusername/n8n-nodes-postamt
```

Start n8n:
```bash
n8n start
```

### Publishing to npm

1. Update version in package.json
2. Create a GitHub release
3. The GitHub Action will automatically publish to npm

```bash
# Manual publishing if needed
npm run build
npm publish
```
