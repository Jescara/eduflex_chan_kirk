#!/bin/bash
set -e

# Install gdown
echo "📦 Installing gdown..."
pip install gdown

# Download Oracle Instant Client from Google Drive
echo "🔽 Downloading Oracle Instant Client ZIP with gdown..."

gdown https://drive.google.com/uc?id=1HHwxmDmFG1fZnJ2Hwxbo_eUOsNLmpYjP -O instantclient.zip

# Unzip to ./instantclient
echo "📂 Unzipping..."
unzip -q instantclient*.zip -d instantclient

echo "📁 Listing contents of ./instantclient"
ls -l ./instantclient/instantclient_23_8

# Install Node.js dependencies
echo "📦 Installing dependencies..."
npm install
