pipeline {
  agent any
  stages {
    stage('Custom Stage') {
      parallel {
        stage('Custom Stage') {
          steps {
            echo 'Starting Custom Stage'
            sleep 5
            echo 'Done with Custom Stage'
            sh '''date
echo "Yo!" '''
          }
        }
        stage('Second Custom Stage') {
          steps {
            waitUntil() {
              waitUntil() {
                echo 'Hello world'
              }

            }

          }
        }
      }
    }
  }
}