#!/bin/bash

echo "====================================="
echo "     SERVER HEALTH CHECK REPORT"
echo "====================================="

echo ""
echo "CPU Usage:"
top -bn1 | grep "Cpu(s)"

echo ""
echo "Memory Usage:"
free -h

echo ""
echo "Disk Usage:"
df -h /

echo ""
echo "Logged-in Users:"
who

echo ""
echo "Running Processes:"
ps aux --sort=-%cpu | head -10

echo ""
echo "Server Uptime:"
uptime

echo ""
echo "====================================="
echo "Health Check Completed"
echo "====================================="