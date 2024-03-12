pipeline {
    agent {
        node {
            label 'agent1'
            }
      }
    triggers {
        pollSCM '*/5 * * * *'
    }
    stages {
        stage('Dependencies') {
            steps {
                echo "Building.."
                bat """
                npm install
                """
            }
        }
        stage('Test') {
            steps {
                echo "Testing.."
                bat """
                """
            }
        }
        stage('Stop Server') {
            steps {
                echo 'Stopping server....'
                bat """
                   @echo off

                   REM Check if the service is running on port 3920
                   netstat -ano | findstr ":3920.*LISTENING" >nul
                   if %errorlevel% equ 0 (
                       REM If service is running, find its PID and kill the process
                       for /f "tokens=5" %%a in ('netstat -ano ^| findstr ":3920.*LISTENING"') do (
                           echo Service running on port 3920 with PID: %%a
                           taskkill /F /PID %%a >nul
                           echo Service on port 3920 has been stopped.
                       )
                   ) else (
                       echo No service found running on port 3920.
                   )

                    REM Exit with success code 0
                    exit /b 0
                """
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deliver....'
                bat """
                echo "doing delivery stuff.."
                xcopy *.* "C:\\Sites\\metatags_api" /s /e /y
                """
            }
        }
    }
    post {
        success {
          echo "running.."
        }
      }
}
