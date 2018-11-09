pipeline {
  agent any
  stages {
    stage('Custom Stage') {
      environment {
        DEBUG = '*'
      }
      steps {
        echo 'Starting Custom Stage'
        sleep 5
        echo 'Done with Custom Stage'
      }
    }
  }
}