pipeline {
  agent {
    docker { image 'node:10-alpine' }
  }
  node {
    stages {
      stage("checkout") { checkout scm }
      stage("assemble") { sh "npm install" }
      stage("test") { sh "npm test" }
    }
  }
}
