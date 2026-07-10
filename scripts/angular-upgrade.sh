#!/bin/bash
# Incremental Angular upgrade script (9 → 22)
set -euo pipefail
cd "$(dirname "$0")/.."

# Use nvm Node 22.22.3+ required by Angular CLI 22
export NVM_DIR="$HOME/.nvm"
# shellcheck source=/dev/null
[ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"
nvm use 22.22.3 2>/dev/null || nvm install 22.22.3
export PATH="$NVM_DIR/versions/node/v22.22.3/bin:$PATH"

log() { echo "[$(date +%H:%M:%S)] $*"; }

# Version-specific companion package versions
get_cdk_version() {
  case $1 in
    10) echo "10.2.7" ;; 11) echo "11.2.13" ;; 12) echo "12.2.13" ;;
    13) echo "13.3.9" ;; 14) echo "14.2.7" ;; 15) echo "15.2.9" ;;
    16) echo "16.2.14" ;; 17) echo "17.3.10" ;; 18) echo "18.2.13" ;;
    19) echo "19.2.8" ;; 20) echo "20.3.1" ;; 21) echo "21.0.3" ;; 22) echo "22.0.3" ;;
  esac
}

get_ts_version() {
  case $1 in
    10|11) echo "4.0.8" ;; 12) echo "4.2.4" ;; 13) echo "4.4.4" ;;
    14) echo "4.6.4" ;; 15) echo "4.9.5" ;; 16) echo "5.0.4" ;;
    17) echo "5.2.2" ;; 18|19|20|21|22) echo "5.8.3" ;;
  esac
}

get_zone_version() {
  case $1 in
    10|11|12) echo "0.11.8" ;; 13|14) echo "0.12.0" ;;
    15|16|17) echo "0.14.10" ;; 18|19|20|21|22) echo "0.15.0" ;;
  esac
}

get_rxjs_version() {
  case $1 in
    10|11|12|13) echo "6.6.7" ;; 14|15|16|17|18|19|20|21|22) echo "7.8.2" ;;
  esac
}

get_build_angular() {
  case $1 in
    10) echo "0.1002.4" ;; 11) echo "0.1102.19" ;; 12) echo "12.2.18" ;;
    13) echo "13.3.11" ;; 14) echo "14.2.13" ;; 15) echo "15.2.11" ;;
    16) echo "16.2.16" ;; 17) echo "17.3.10" ;; 18) echo "18.2.13" ;;
    19) echo "19.2.8" ;; 20) echo "20.3.1" ;; 21) echo "21.0.3" ;; 22) echo "22.0.3" ;;
  esac
}

upgrade_to() {
  local v=$1
  local prev=$((v - 1))
  local patch="${v}.2.5"
  if [ "$v" -ge 12 ]; then patch="${v}.2.13"; fi
  if [ "$v" -ge 15 ]; then patch="${v}.2.11"; fi
  if [ "$v" -ge 17 ]; then patch="${v}.3.10"; fi
  if [ "$v" -ge 19 ]; then patch="${v}.2.8"; fi
  if [ "$v" -ge 20 ]; then patch="${v}.3.1"; fi
  if [ "$v" -ge 21 ]; then patch="${v}.0.3"; fi
  if [ "$v" -ge 22 ]; then patch="${v}.0.3"; fi

  local cdk=$(get_cdk_version $v)
  local ts=$(get_ts_version $v)
  local zone=$(get_zone_version $v)
  local rxjs=$(get_rxjs_version $v)
  local build=$(get_build_angular $v)

  log "=== Upgrading Angular $prev → $v ==="

  npm install \
    @angular/animations@${patch} \
    @angular/cdk@${cdk} \
    @angular/common@${patch} \
    @angular/compiler@${patch} \
    @angular/core@${patch} \
    @angular/forms@${patch} \
    @angular/localize@${patch} \
    @angular/platform-browser@${patch} \
    @angular/platform-browser-dynamic@${patch} \
    @angular/router@${patch} \
    @angular/service-worker@${patch} \
    @angular/material@${cdk} \
    @angular-devkit/build-angular@${build} \
    @angular/cli@${patch} \
    @angular/compiler-cli@${patch} \
    @angular/language-service@${patch} \
    typescript@${ts} \
    zone.js@${zone} \
    rxjs@${rxjs} \
    tslib@^2.8.1 \
    --legacy-peer-deps --no-audit 2>&1 | tail -3

  # Run migration schematics
  npx -y @angular/cli@${patch} ng update @angular/core --migrate-only --from=${prev} --to=${v} --force --allow-dirty 2>&1 | tail -15 || true
  npx -y @angular/cli@${patch} ng update @angular/cli --migrate-only --from=${prev} --to=${v} --force --allow-dirty 2>&1 | tail -10 || true

  log "=== Angular $v install complete ==="
}

# Start from 11 since 10 is already installed
for v in 11 12 13 14 15 16 17 18 19 20 21 22; do
  upgrade_to $v || { log "FAILED at Angular $v"; exit 1; }
done

log "All upgrades complete!"
