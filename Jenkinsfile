pipeline {
  agent {
    docker { image 'node:10-alpine' }
  }
  node {
    stages {
      stage("checkout") { 
        steps {
          checkout scm 
        }
      }
      stage("assemble") { 
        steps {
          sh "npm install" 
        }
      }
      stage("test") { 
        steps { 
          sh "npm test" 
        }
      }
    }
  }
}
