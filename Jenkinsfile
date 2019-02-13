pipeline {
    agent none
    stages {
        stage('Build Angaular') {
            agent { 
                docker {
                    image 'node:latest'
                    args '-u root:root'
                }
            }
            steps {
                echo 'Fetch dependencies'
                sh 'npm -version'
                sh 'npm install -g @angular/cli && npm install && npm audit fix'
            }
        }
        stage('Running Servcer') {
            agent { 
                docker {
                    image 'node:latest'
                    args '-u root:root'
                }
            }
            steps {
                echo 'Start Server on Port 4200'
                sh 'npm start'
            }
        }
    }
}