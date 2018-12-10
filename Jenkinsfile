pipeline {
  agent any
  stages {
    stage('Custom Stage') {
      steps {
        withCredentials([string(credentialsId: 'username', variable: 'UN')]) {
          sh '''
            set +x
            echo $UN
          '''
        }
        echo 'Starting Custom Stage'
        sleep 5
        echo 'Done with Custom Stage'
        sh '''date
echo "Yo!" '''
      }
    }
  }
}
