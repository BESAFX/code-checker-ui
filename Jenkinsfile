pipeline {
  agent {
    node {
      label 'ng'
    }

  }
  stages {
    stage('start') {
      steps {
        sh 'ng s -o'
      }
    }
  }
}