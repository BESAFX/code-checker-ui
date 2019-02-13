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
                sh 'npm install'
            }
        }
    }
}