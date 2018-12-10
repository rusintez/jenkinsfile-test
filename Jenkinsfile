pipeline {
  agent any
  stages {
    stage('Custom Stage') {
      steps {
        echo 'Starting Custom Stage'
        sleep 5
        echo 'Done with Custom Stage'
        sh '''date
echo "Yo!" '''
      }
    }
  }
}