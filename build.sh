#!/bin/bash

# Download Oracle Instant Client Basic Lite ZIP
curl -O https://download.oracle.com/otn_software/linux/instantclient/instantclient-basiclite-linux.x64-21.13.0.0.0dbru.zip

# Unzip it into a known directory
unzip instantclient-basiclite-linux.x64-21.13.0.0.0dbru.zip -d instantclient

# Export required environment variables
export LD_LIBRARY_PATH=$(pwd)/instantclient
export OCI_LIB_DIR=$(pwd)/instantclient
export OCI_INC_DIR=$(pwd)/instantclient/sdk/include

# Proceed with app setup
npm install
