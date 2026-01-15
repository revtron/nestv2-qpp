pipeline {
    agent any

    stages {
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }

        stage('Deploy') {
            steps {
                // This ensures the app restarts with the new code
                sh 'sudo pm2 restart nest-app || sudo pm2 start dist/main.js --name nest-app'
            }
        }
    }
}
