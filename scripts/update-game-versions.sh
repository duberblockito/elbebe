#!/bin/bash

# ============================================
# El Bebe Games - Version Update Script
# ============================================
#
# Usage: ./update-game-versions.sh <VERSION>
# Example: ./update-game-versions.sh 1.6.0
#
# This script updates all game files to use the new version
# for cache busting purposes.
#
# Files updated:
# - public/js/main.js (APP_VERSION)
# - public/index.html (CSS/JS links)
# - public/games/*/index.html (CSS/JS links)
# - CHANGELOG.md (header updated)
#
# ============================================

set -e  # Exit on error

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# ============================================
# Validation
# ============================================

# Check if version argument is provided
if [ -z "$1" ]; then
  echo -e "${RED}Error: No version provided${NC}"
  echo -e "${YELLOW}Usage: $0 <VERSION>${NC}"
  echo -e "${YELLOW}Example: $0 1.6.0${NC}"
  exit 1
fi

VERSION="$1"

# Validate version format (MAJOR.MINOR.PATCH)
if ! [[ $VERSION =~ ^[0-9]+\.[0-9]+\.[0-9]+$ ]]; then
  echo -e "${RED}Error: Invalid version format${NC}"
  echo -e "${YELLOW}Expected format: MAJOR.MINOR.PATCH (e.g., 1.6.0)${NC}"
  exit 1
fi

# ============================================
# Paths
# ============================================

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(dirname "$SCRIPT_DIR")"
MAIN_JS="$PROJECT_ROOT/public/js/main.js"
INDEX_HTML="$PROJECT_ROOT/public/index.html"
GAMES_DIR="$PROJECT_ROOT/public/games"
CHANGELOG="$PROJECT_ROOT/CHANGELOG.md"

echo -e "${BLUE}========================================${NC}"
echo -e "${BLUE}El Bebe Games - Version Update${NC}"
echo -e "${BLUE}========================================${NC}"
echo -e "${GREEN}New version: ${VERSION}${NC}"
echo -e ""

# ============================================
# Backup Function
# ============================================

backup_file() {
  local file="$1"
  local backup_file="${file}.backup.$(date +%Y%m%d-%H%M%S)"

  if [ -f "$file" ]; then
    cp "$file" "$backup_file"
    echo -e "${YELLOW}✓ Backed up: $(basename "$file")${NC}"
  fi
}

# ============================================
# Update Functions
# ============================================

update_main_js() {
  if [ ! -f "$MAIN_JS" ]; then
    echo -e "${RED}✗ Error: main.js not found${NC}"
    exit 1
  fi

  backup_file "$MAIN_JS"

  # Update SITE_VERSION
  sed -i "s/const SITE_VERSION = '[0-9]*\.[0-9]*\.[0-9]*'/const SITE_VERSION = '$VERSION'/g" "$MAIN_JS"

  echo -e "${GREEN}✓ Updated main.js: SITE_VERSION = $VERSION${NC}"
}

update_index_html() {
  if [ ! -f "$INDEX_HTML" ]; then
    echo -e "${RED}✗ Error: index.html not found${NC}"
    exit 1
  fi

  backup_file "$INDEX_HTML"

  # Update CSS and JS links with version parameter
  sed -i "s/\?v=[0-9]*\.[0-9]*\.[0-9]*/?v=$VERSION/g" "$INDEX_HTML"

  echo -e "${GREEN}✓ Updated index.html with version $VERSION${NC}"
}

update_games() {
  if [ ! -d "$GAMES_DIR" ]; then
    echo -e "${RED}✗ Error: games directory not found${NC}"
    exit 1
  fi

  local game_count=0

  # Find all index.html files in games directory
  while IFS= read -r game_index; do
    backup_file "$game_index"

    # Update CSS and JS links with version parameter
    sed -i "s/\?v=[0-9]*\.[0-9]*\.[0-9]*/?v=$VERSION/g" "$game_index"

    game_count=$((game_count + 1))
  done < <(find "$GAMES_DIR" -name "index.html" -type f)

  echo -e "${GREEN}✓ Updated $game_count game index.html files${NC}"
}

update_changelog() {
  if [ ! -f "$CHANGELOG" ]; then
    echo -e "${RED}✗ Error: CHANGELOG.md not found${NC}"
    exit 1
  fi

  echo -e "${YELLOW}ℹ  CHANGELOG.md header should be updated manually${NC}"
  echo -e "${YELLOW}ℹ  Add new entry: ## [v${VERSION}] - YYYY-MM-DD HH:MM UTC${NC}"
}

# ============================================
# Execute Updates
# ============================================

echo -e "${BLUE}Updating files...${NC}"
echo ""

update_main_js
update_index_html
update_games
update_changelog

echo ""
echo -e "${BLUE}========================================${NC}"
echo -e "${GREEN}✓ Version update complete!${NC}"
echo -e "${BLUE}========================================${NC}"
echo ""
echo -e "${YELLOW}Next steps:${NC}"
echo -e "  1. Review changes in backup files"
echo -e "  2. Update CHANGELOG.md with release notes"
echo -e "  3. Commit changes: git add . && git commit -m \"Release v${VERSION}\""
echo -e "  4. Push to production: git push origin master"
echo ""
