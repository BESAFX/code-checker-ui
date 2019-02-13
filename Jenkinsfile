pipeline {
    agent none
    stages {
        stage('Build Angaular') {
            agent { docker 'node:latest'}
            steps {
                echo 'Fetch dependencies'
                sh 'npm -version'
                sh 'npm install'
            }
        }
    }
}