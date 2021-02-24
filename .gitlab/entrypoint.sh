#!/bin/bash
# Entrypoint Script
## This script is meant to run at the start of the application container in Kubernetes
## It will change all references of BACKEND_URL_FOR_BUILD in your code to the value of env variable BACKEND_URL
## This is useful in using different backend URLs for different environments of your UI.
## TO configure this check the FAQs at https://gitlab.mtxb2b.com/commons/docs/ or simply override the env var K8S_SECRET_BACKEND_URL in your Gitlab CI/CD variables

set -euo pipefail

## Responsible to provide support to set PROD env
ensure_provider_to_set_for_prod() {
  BACKEND_URL="${BACKEND_URL:-"https://INSERT_DEFAULT_BACKEND_URL_HERE_RECOMMENDED_TO_USE_STAGING_URL_FOR_BACKEND"}"

  echo "BACKEND_URL:- ${BACKEND_URL}"

  mkdir -p /usr/share/nginx/html/fake
  cd /usr/share/nginx/html/fake/
  touch a.js
  cd ..


  # replacing URL in all relevant files
  echo "Replacing BACKEND_URL_FOR_BUILD with $BACKEND_URL in /usr/share/nginx/html/ -name \*.js"
  find /usr/share/nginx/html/ -name \*.js -type f -exec sed -i "s,BACKEND_URL_FOR_BUILD,$BACKEND_URL,g" {} \;
}

ensure_provider_to_set_for_prod
nginx -g "daemon off;"
