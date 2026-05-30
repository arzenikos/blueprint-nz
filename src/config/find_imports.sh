#!/bin/bash

# Directory to search in
DIR="/mnt/d/github_playground/astro-blueprint-nz/src"

# Find all files except those in assets directory
FILES=$(find "$DIR" -type f -not -path "*/assets/*" -not -path "*/node_modules/*")

# Create a temporary file to store results
TEMP_FILE=$(mktemp)

# For each file, find which files import it
for file in $FILES; do
  # Get the relative path from src
  rel_path=${file#"$DIR/"}
  
  # Get the filename without path
  filename=$(basename "$file")
  filename_no_ext="${filename%.*}"
  
  # Skip node_modules
  if [[ "$rel_path" == *"node_modules"* ]]; then
    continue
  fi
  
  # Find all files that import this file
  importers=$(grep -r --include="*.astro" --include="*.ts" --include="*.tsx" --include="*.js" --include="*.jsx" "import.*from.*$filename_no_ext" "$DIR" | grep -v "$file" | cut -d: -f1 | sort | uniq)
  
  if [ -n "$importers" ]; then
    echo "$file:$importers" >> "$TEMP_FILE"
  else
    echo "$file:" >> "$TEMP_FILE"
  fi
done

# Output the results
cat "$TEMP_FILE"

# Clean up
rm "$TEMP_FILE"
