#!/bin/bash

echo "====================================="
echo "       WEBSITE BACKUP SCRIPT"
echo "====================================="

# Website directory
WEBSITE_DIR="/var/www/html"

# Backup directory
BACKUP_DIR="/home/ubuntu/Backup"

# Create Backup folder if not exists
mkdir -p $BACKUP_DIR

# Create timestamp
TIMESTAMP=$(date +"%Y-%m-%d_%H-%M-%S")

# Backup file name
BACKUP_FILE="website_backup_$TIMESTAMP.tar.gz"

echo ""
echo "Creating website backup..."

# Compress website files
tar -czf $BACKUP_DIR/$BACKUP_FILE $WEBSITE_DIR

echo ""
echo "Website backup completed successfully ✅"

echo ""
echo "Backup stored at:"
echo "$BACKUP_DIR/$BACKUP_FILE"

echo ""
echo "====================================="
echo "Backup Process Completed"
echo "====================================="