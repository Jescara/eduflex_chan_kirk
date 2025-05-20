#!/bin/bash
set -e

echo "🔽 Downloading Oracle Instant Client..."
curl -L -o instantclient.zip "https://drive.google.com/uc?export=download&id=1KtPH16pTEPE6j0mV2x2tjgrKAXxHLnWw"

echo "📦 Unzipping Instant Client..."
unzip -q instantclient.zip -d instantclient

echo "📦 Installing Node.js dependencies..."
npm install

echo "✅ Build script finished."
