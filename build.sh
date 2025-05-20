#!/bin/bash
set -e

# Install gdown
echo "📦 Installing gdown..."
pip install gdown

# Download Oracle Instant Client from Google Drive
echo "🔽 Downloading Oracle Instant Client ZIP with gdown..."
gdown "https://drive.google.com/uc?id=1KtPH16pTEPE6j0mV2x2tjgrKAXxHLnWw"

# Unzip to ./instantclient
echo "📂 Unzipping..."
unzip -q instantclient*.zip -d instantclient

# Install Node.js dependencies
echo "📦 Installing dependencies..."
npm install
