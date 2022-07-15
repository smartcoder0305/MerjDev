/**
	Jenkinsfile: TradeDesk
	This file is for CI pipeline mode
*/
@NonCPS
def getChanges() {
	def changeLogSets = currentBuild.changeSets
	def versionChanges = "<h4>Release Notes</h4>"
	for (int i = 0; i < changeLogSets.size(); i++) {
		def entries = changeLogSets[i].items
		for (int j = 0; j < entries.length; j++) {
			def entry = entries[j]
			versionChanges += "<p>${entry.msg}<br>"
			versionChanges += "<em>By ${entry.author}</em> on ${new Date(entry.timestamp)}</p>"
		}
	}
	return versionChanges
}

pipeline {
	agent {
		node {
			/**
			Jenkins has a tendancy to build in a rather long path
			We're using this to make it shorter as there are build issues when using long paths
			*/

			label 'jenkins.vtfs.cloud'
			customWorkspace 'f:\\Jenkins-Builds\\vt.node.merj'
		}
	}
	options {
	    disableConcurrentBuilds()
	}
	triggers { 
		/**
		TODO: probably best to use a hook here
		*/
		pollSCM('*/5 * * * *') 
	}
	stages {
		stage('Slack Notification') {
			steps {
				slackSend (color: '#FFFF00', message: "STARTED: Job '${env.JOB_NAME} [${env.BUILD_NUMBER}]' (${env.BUILD_URL})")
			}
		}

		stage("Git Version") {
			steps {
				script {
					bat """
						gitversion /output json > gitversion.json
					"""
				}
			}
		}
		stage('Code Artifact Login') {
			steps {
				script {
					withCredentials([usernamePassword(credentialsId: 'AWS', usernameVariable: 'AWS_ACCESS_KEY_ID', passwordVariable: 'AWS_SECRET_ACCESS_KEY')]){
						env.AWS_DEFAULT_REGION = "eu-west-1"
						bat """
							aws codeartifact login --tool npm --domain vt --domain-owner 123296566209 --repository npm
							"""
						
					}
					
				}
			}
		}
		stage("Yarn Version") {
			steps {
				script {
                	bat """
						yarn -v
                    """
                }
			}
		}
		stage("Clean Cache") {
			steps {
				script {
                	bat """
						yarn cache clean 
                    """
                }
			}
		}
		stage("Install Dependencies") {
			steps {
				script {
					bat """
						yarn install
					"""
				}
				
			}
		}
		
		stage('Build and push zip to Octo') {
			steps {
				script {
					bat """
						yarn run build
					"""
				}
				script {
					bat """
						yarn run export
					"""
				}
				script {
					def gitVersion = readJSON( file: 'gitversion.json' )
					env.version = gitVersion["LegacySemVerPadded"]
					env.versionAppend = ""
					if(env.BRANCH_NAME == 'master') {
						env.channel = "Master"
						env.versionAppend = "." + env.BUILD_NUMBER
					}
					if(env.BRANCH_NAME.startsWith("feature/")) {
						env.channel = "Feature"
						env.versionAppend = "." + env.BUILD_NUMBER
					}
					if(env.BRANCH_NAME == 'develop') {
						env.channel = "Develop"
						env.versionAppend = "." + env.BUILD_NUMBER
					}
					if(env.BRANCH_NAME.startsWith("hotfix/")) {
						env.channel = "Hotfix"
						env.versionAppend = "." + env.BUILD_NUMBER
					}
					if(env.BRANCH_NAME.startsWith("release/")) {
						env.channel = "Release"
						env.versionAppend = "." + env.BUILD_NUMBER
					}
                   if(env.BRANCH_NAME.startsWith("direct/")) {
						env.channel = "Master"
						env.versionAppend = "." + env.BUILD_NUMBER
					}
					env.zipFile = "VT.Node.Merj.${env.version}${env.versionAppend}.zip"
					zip(dir: 'out', glob: '', zipFile: env.zipFile)
					withCredentials([string(credentialsId: 'OctopusApiKey', variable: 'APIKey')]) {
							bat """
								echo Creating a release of ${env.JOB_NAME} on octopus in channel ${env.channel} with version ${env.version}
								"E:\\Octopus\\CommandLine\\Octo.exe" push --package ${env.zipFile} --replace-existing --enableServiceMessages --server https://octopus.vtfs.cloud/  --apiKey ${APIKey}
							"""
						}
					slackSend (color: '#44DF0A', message: "Version '${env.version}${env.versionAppend}' of '${env.JOB_NAME}'  is now available in the octopus.vtfs.cloud library")
				}
				
			}
		}
		
		stage ('Create a Release on Octopus') {
			steps {
				script {
					def gitVersion = readJSON( file: 'gitversion.json' )
					env.version = gitVersion["LegacySemVerPadded"]
					
					if(env.BRANCH_NAME == 'master') {
					   env.channel = "Master"
					   env.versionAppend = "." + env.BUILD_NUMBER
					}
					if(env.BRANCH_NAME.startsWith("feature/")) {
						env.channel = "Feature"
						env.versionAppend = "." + env.BUILD_NUMBER
					}
					if(env.BRANCH_NAME == 'develop') {
						env.channel = "Develop"
						env.versionAppend = "." + env.BUILD_NUMBER
					}
					if(env.BRANCH_NAME.startsWith("hotfix/")) {
					   env.channel = "Hotfix"
					   env.versionAppend = "." + env.BUILD_NUMBER
					}
					if(env.BRANCH_NAME.startsWith("release/")) {
					   env.channel = "Release"
					   env.versionAppend = "." + env.BUILD_NUMBER
					}
                    if(env.BRANCH_NAME.startsWith("direct/")) {
						env.channel = "Master"
						env.versionAppend = "." + env.BUILD_NUMBER
					}
					if(env.channel) {
						withCredentials([string(credentialsId: 'OctopusApiKey', variable: 'APIKey')]) {
							bat """
								echo Creating a release of ${env.JOB_NAME} on octopus in channel ${env.channel} with version ${env.version}
								"E:\\Octopus\\CommandLine\\Octo.exe" create-release --ignoreexisting --project "Merj - Public" --packageVersion ${env.version}${env.versionAppend} --version ${env.version}${env.versionAppend} --server https://octopus.vtfs.cloud/ --channel ${env.channel} --apiKey ${APIKey}
							"""
						}
						slackSend (color: '#44DF0A', message: "Created release '${env.version}${env.versionAppend}' on octopus in channel ${env.channel}")
					}
					else {
						slackSend (color: '#EBEE00', message: "Not creating a release on octo for this version (${env.version}) as there is no channel (probably a feature branch)")
						bat """
							echo Not creating a release on octo for this version (${env.version}) as there is no channel (probably a feature branch)							
						"""
					}
				}
			}
		}
	}
	post {
		always { 
			// this cleans up, if you want to test a build
			// on the build server comment this and jump into the customWorkspace defined above..
			cleanWs()
        }
		success {
			slackSend (color: '#16CD00', message: "Success: '${env.JOB_NAME} [${env.BUILD_NUMBER}]'")
		}
        failure {
			slackSend (color: '#FE031A', message: "Error building: Job '${env.JOB_NAME} [${env.BUILD_NUMBER}]' please check the console at (${env.BUILD_URL})")
		}
		unstable {
			slackSend (color: '#FEBD03', message: "Build success but there were some warnings: Job '${env.JOB_NAME} [${env.BUILD_NUMBER}]' please check the console at (${env.BUILD_URL})")
		}
	}
}
