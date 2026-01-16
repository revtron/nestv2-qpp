pipeline {
    agent any

    stages {
        stage('Deploy via Update Script') {
            steps {
                // This tells Jenkins to run the manager script in your home directory
                sh 'bash /home/ubuntu/update.sh'
            }
        }
    }
}
