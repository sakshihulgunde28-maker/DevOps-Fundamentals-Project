# 🚀 Cloud-Based Linux Server Deployment with GitHub Version Control and Automation

## 📌 Project Overview

This project demonstrates a complete DevOps workflow by deploying a cloud-based Linux web server using AWS EC2, configuring an Ubuntu server, deploying a web application using Apache, implementing GitHub version control, automating administrative tasks using Bash scripting, and performing system monitoring and troubleshooting.

The project was developed as part of the **ITVedant DevOps Fundamentals Mini Project**.

---

## 🎯 Project Objective

The objective of this project is to gain practical hands-on experience with:

- AWS Cloud Infrastructure
- Linux Server Administration
- Apache Web Server Deployment
- Git & GitHub Version Control
- Bash Automation
- Process Management
- Log Monitoring
- Troubleshooting

---

# 🏗️ Architecture Overview

The project follows this deployment architecture:
User Browser
|
|
AWS EC2 Public IP
|
|
Ubuntu Linux Server
|
|
Apache Web Server
|
|
HTML/CSS/JavaScript Website


---

# 🛠️ Technologies Used

| Technology | Purpose |
|---|---|
| AWS EC2 | Cloud Server Hosting |
| Ubuntu Linux | Server Operating System |
| Apache2 | Web Server |
| Git | Version Control |
| GitHub | Source Code Management |
| Bash Script | Automation |
| HTML5 | Web Interface |
| CSS3 | Styling |
| JavaScript | Website Interaction |

---

# ☁️ AWS Infrastructure

The following AWS resources were configured:

- Custom VPC
- Public Subnet
- Internet Gateway
- Route Table
- Security Group
- Ubuntu EC2 Instance

EC2 Security Group Configuration:

| Port | Service |
|---|---|
| 22 | SSH |
| 80 | HTTP |

---

# 🌐 Live Website

The website is deployed on AWS EC2 Ubuntu Server.

Live URL:


---

# 📂 Project Structure

DevOps-Fundamentals-Project/

│── index.html
│── README.md

├── css/
│ └── style.css

├── js/
│ └── script.js

├── images/

├── scripts/
│
│ ├── server_health_check.sh
│ ├── apache_monitor.sh
│ └── website_backup.sh

├── documentation/

└── screenshots/


---

# ⚙️ Server Configuration

## Update Ubuntu Server

```bash
sudo apt update
sudo apt upgrade

Install Required Packages
sudo apt install apache2
sudo apt install git
sudo apt install curl
sudo apt install vim

Verify Apache Status
sudo systemctl status apache2
🚀 Website Deployment

Website files were deployed to:

/var/www/html

Apache was restarted using:

sudo systemctl restart apache2

The website was verified using the EC2 Public IP address.

🤖 Bash Automation Scripts
1. Server Health Check

File:

server_health_check.sh

Functions:

CPU Usage
Memory Usage
Disk Usage
Logged-in Users
Running Processes
Server Uptime
2. Apache Service Monitor

File:

apache_monitor.sh

Functions:

Checks Apache service status
Automatically restarts Apache if stopped
Displays service status
3. Website Backup Automation

File:

website_backup.sh

Functions:

Compresses website files
Creates timestamp-based backup
Stores backups in Backup folder
📊 Monitoring & Troubleshooting

Linux logs were analyzed using:

cat /var/log/auth.log
journalctl -p err
journalctl -p warning

The log report was generated:

log-report.txt
🔄 GitHub Version Control

Git workflow used:

git init

git add .

git commit -m "Initial project setup"

git branch feature-monitoring

git merge feature-monitoring

git push origin main

📸 Screenshots

Screenshots include:

AWS EC2 Instance
Security Group Configuration
SSH Connection
Apache Status
Live Website
GitHub Repository
Bash Script Execution
Monitoring Output
🧩 Challenges Faced

During implementation, the following challenges were resolved:

EC2 SSH key authentication issues
Apache deployment configuration
Linux file permissions
Website file deployment
Git branch management
Server troubleshooting
🎓 Learning Outcomes

Through this project, I gained practical experience in:

✅ AWS Cloud Infrastructure
✅ Linux Administration
✅ Apache Web Server Management
✅ Git & GitHub Workflow
✅ Bash Automation
✅ Server Monitoring
✅ Troubleshooting

🔮 Future Improvements

Future enhancements:

Configure Domain Name
Add HTTPS using SSL Certificate
Add CI/CD Pipeline using Jenkins
Add Docker Containerization
Add Monitoring using CloudWatch
👩‍💻 Author

Sakshi Hulgunde

DevOps Learner
ITVedant - Batch DRA-501


---

## After updating README:

Run:

```bash
git add README.md

Commit:

git commit -m "Created professional project README"

Push:

git push origin main