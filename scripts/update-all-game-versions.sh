#!/bin/bash

# ============================================
# El Bebe Games - Force Version Update Script
# ============================================
#
# Usage: ./update-all-game-versions.sh <VERSION>
# Example: ./update-all-game-versions.sh 1.6.0
#
# This script FORCES update of ALL game files to use
# the new version for cache busting purposes.
#
# It ADDS version parameters to CSS and JS links even
# if they don't have them yet.
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
echo -e "${BLUE}El Bebe Games - FORCE Version Update${NC}"
echo -e "${BLUE}========================================${NC}"
echo -e "${GREEN}New version: ${VERSION}${NC}"
echo -e "${YELLOW}⚠️  This will ADD version parameters to ALL CSS/JS links${NC}"
echo ""

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

  # Remove existing version parameters and add new one
  sed -i 's/\.css"?v=[0-9]*\.[0-9]*\.[0-9]*/.css"/g' "$INDEX_HTML"
  sed -i 's/\.js"?v=[0-9]*\.[0-9]*\.[0-9]*/.js"/g' "$INDEX_HTML"

  # Add version to CSS files
  sed -i 's|<link rel="stylesheet" href="css/style.css">|<link rel="stylesheet" href="css/style.css?v='"$VERSION"'">|g' "$INDEX_HTML"
  sed -i 's|<link rel="stylesheet" href="css/animations.css">|<link rel="stylesheet" href="css/animations.css?v='"$VERSION"'">|g' "$INDEX_HTML"

  # Add version to JS files
  sed -i 's|<script src="js/main.js"></script>|<script src="js/main.js?v='"$VERSION"'"></script>|g' "$INDEX_HTML"
  sed -i 's|<script src="js/home.js"></script>|<script src="js/home.js?v='"$VERSION"'"></script>|g' "$INDEX_HTML"

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

    # Remove existing version parameters
    sed -i 's/\.css"?v=[0-9]*\.[0-9]*\.[0-9]*/.css"/g' "$game_index"
    sed -i 's/\.js"?v=[0-9]*\.[0-9]*\.[0-9]*/.js"/g' "$game_index"

    # Add version to game.css (both with and without path)
    sed -i 's|<link rel="stylesheet" href="game.css">|<link rel="stylesheet" href="game.css?v='"$VERSION"'">|g' "$game_index"
    sed -i 's|<link rel="stylesheet" href="js/game.css">|<link rel="stylesheet" href="js/game.css?v='"$VERSION"'">|g' "$game_index"

    # Add version to game.js (both with and without path)
    sed -i 's|<script src="game.js"></script>|<script src="game.js?v='"$VERSION"'"></script>|g' "$game_index"
    sed -i 's|<script src="js/game.js"></script>|<script src="js/game.js?v='"$VERSION"'"></script>|g' "$game_index"

    game_count=$((game_count + 1))
  done < <(find "$GAMES_DIR" -name "index.html" -type f)

  echo -e "${GREEN}✓ Updated $game_count game index.html files${NC}"
}

update_changelog() {
  echo -e "${YELLOW}ℹ  CHANGELOG.md header already updated in v1.6.0${NC}"
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
echo -e "${GREEN}✓ FORCE version update complete!${NC}"
echo -e "${BLUE}========================================${NC}"
echo ""
echo -e "${YELLOW}Next steps:${NC}"
echo -e "  1. Review changes in backup files"
echo -e "  2. Verify all CSS/JS links have ?v=$VERSION"
echo -e "  3. Test in browser (force refresh: Ctrl+Shift+R)"
echo -e "  4. Commit changes: git add . && git commit -m \"Release v${VERSION} - Cache Busting\""
echo -e "  5. Push to production: git push origin master"
echo ""
