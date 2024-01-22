#!/usr/bin/env groovy

pipeline {
    agent any

    stages {
        stage('build') {
            steps {
                echo "prepare..."
                nodejs('node 18.18.0') {                   
                    sh "npm install"
                }  
            }
        }

        stage('deploy') {
            steps {
                echo "deploy started.."
                sh "ls -l"
                sshPublisher(
                    publishers: [
                        sshPublisherDesc(
                            configName: 'dokdo-server-dev', 
                            transfers: [sshTransfer(
                                cleanRemote: true, 
                                excludes: '', 
                                execCommand: '', 
                                execTimeout: 120000, 
                                flatten: false, 
                                makeEmptyDirs: false, 
                                noDefaultExcludes: false, 
                                patternSeparator: '[, ]+', 
                                remoteDirectory: 'dokdo-backend', 
                                remoteDirectorySDF: false, 
                                removePrefix: '', 
                                sourceFiles: '**/*')], 
                            usePromotionTimestamp: false, 
                            useWorkspaceInPromotion: false, 
                            verbose: false)])
            }
        }
    }
}
