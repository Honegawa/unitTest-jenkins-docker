pipeline {
    agent any
    
    tools {
        nodejs 'NodeJS-22.4.0'
    }

    stages {
        stage('Git Checkout') {
            
            steps {
                git branch: 'main', url: 'https://github.com/Honegawa/unitTest-jenkins-docker.git'
            }
        }
        
        stage('Install Dependencies') {
            
            steps {
                bat 'npm install'
            }
        }
        
        stage('Run Tests') {
            
            steps {
                bat 'npm test'
            }
        }
    }
}
