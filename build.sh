#!/bin/bash
set -e

# Install gdown
echo "📦 Installing gdown..."
pip install gdown

# Download Oracle Instant Client from Google Drive
echo "🔽 Downloading Oracle Instant Client ZIP with gdown..."

gdown https://drive.google.com/uc?id=1mtfhy8S5jR_UEQIREAphAgyt9l74bA2u -O instantclient.zip

# Unzip to ./instantclient
echo "📂 Unzipping..."
unzip -q instantclient*.zip -d instantclient

echo "📁 Listing contents of ./instantclient"
ls -l instantclient/

# Install Node.js dependencies
echo "📦 Installing dependencies..."
npm install
