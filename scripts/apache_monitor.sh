#!/bin/bash

echo "====================================="
echo "     APACHE SERVICE MONITOR"
echo "====================================="

echo ""
echo "Checking Apache service status..."

SERVICE="apache2"

if systemctl is-active --quiet $SERVICE
then
    echo "Apache2 service is running successfully 🟢"
else
    echo "Apache2 service is stopped ❌"
    echo "Restarting Apache2 service..."

    sudo systemctl restart $SERVICE

    if systemctl is-active --quiet $SERVICE
    then
        echo "Apache2 restarted successfully ✅"
    else
        echo "Apache2 restart failed ❌"
    fi
fi

echo ""
echo "====================================="
echo "Apache Monitoring Completed"
echo "====================================="