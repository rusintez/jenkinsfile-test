pipeline {
  agent { docker 'node:10-alpine' }
  environment {
    XYZ = credentials("my-pipeline-secret")
  }
  parameters {
    // https://www.youtube.com/watch?v=5_tvlaIeQUQ
    // default valuees are used during automatic triggers
    // prompt is used during manual pipline trigger
    choice(
      name: 'single', 
      choices: 'default\none\ntwo\nthree',
      description: 'Which one do you choose?'
    )
    booleanParam(
      name: 'ability',
      defaultValue: true,
      description: 'Ability enabled?'
    )
    string(
      name: 'value',
      defaultValue: 'defaultValue',
      description: 'string param with a default value'
    )
  }
  stages {
    stage('init') {
      steps {
        // http://localhost:8080/pipeline-syntax/globals#env
        echo "Running ${env.BUILD_ID} ($BUILD_NUMBER) on ${env.JENKINS_URL}"
        echo "${params.single} ${params.ability} ${params.value}"
      }
    }
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
    stage("build") {
      when { buildingTag() }
      steps {
        sh "npm install -g pkg"
        sh "apk update && apk add --no-cache libstdc++ libgcc"
        sh "/usr/local/bin/pkg -t node10-alpine-x64 . -o app.bin"
        stash includes: "app.bin", name: "app"
        // https://jenkins.io/doc/book/pipeline/jenkinsfile/#build
        // archiveArtifacts artifacts: 'app.bin', fingerprint: true 
        // need to configure github-release
        // need to push app.bin to github releases as $VERSION
        // https://github.com/aktau/github-release/releases/download/v0.7.2/linux-amd64-github-release.tar.bz2
      }
    }
    stage("release") {
      when { buildingTag() }
      sh "apk add wget"
      sh "wget https://github.com/aktau/github-release/releases/download/v0.7.2/linux-amd64-github-release.tar.bz2"
      sh "tar xvjf linux-amd64-github-release.tar.bz2"
      sh '/bin/linux/amd64/github-release --user rusintez --repo jenkinsfile-test --tag $TAG_NAME --name "$TAG_NAME" '
      unstash "app"
    }
  }
  post {
    always {
      sh "echo Done."
    }
    failure {
      sh "echo Time to send some emails."
        // mail to: env.MAIL_TO, subject: 'The Pipeline failed :('
    }
  }
}
