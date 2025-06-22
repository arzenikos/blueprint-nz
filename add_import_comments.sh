#!/bin/bash

# Directory to search in
DIR="/mnt/d/github_playground/astro-blueprint-nz/src"

# Find all files except those in assets directory
FILES=$(find "$DIR" -type f -not -path "*/assets/*" -not -path "*/node_modules/*")

# Process each file
for file in $FILES; do
  # Get the filename without path
  filename=$(basename "$file")
  filename_no_ext="${filename%.*}"
  
  # Skip node_modules
  if [[ "$file" == *"node_modules"* ]]; then
    continue
  fi
  
  # Find all files that import this file
  importers=$(grep -r --include="*.astro" --include="*.ts" --include="*.tsx" --include="*.js" --include="*.jsx" "import.*from.*$filename_no_ext" "$DIR" | grep -v "$file" | cut -d: -f1 | sort | uniq)
  
  # Format the importers for the comment
  if [ -n "$importers" ]; then
    importers_list=""
    for importer in $importers; do
      rel_importer=${importer#"$DIR/"}
      importers_list="$importers_list, $rel_importer"
    done
    importers_list=${importers_list:2}  # Remove leading ", "
    
    # Get file extension
    ext="${file##*.}"
    
    # Add comment based on file type
    case "$ext" in
      astro|tsx|jsx)
        comment="<!-- Imported by: $importers_list -->"
        ;;
      ts|js)
        comment="// Imported by: $importers_list"
        ;;
      *)
        comment="# Imported by: $importers_list"
        ;;
    esac
    
    # Check if file already has the comment
    if ! grep -q "Imported by:" "$file"; then
      # Add comment to the beginning of the file
      temp_file=$(mktemp)
      echo "$comment" > "$temp_file"
      cat "$file" >> "$temp_file"
      mv "$temp_file" "$file"
      echo "Added import comment to $file"
    fi
  else
    # Get file extension
    ext="${file##*.}"
    
    # Add comment based on file type
    case "$ext" in
      astro|tsx|jsx)
        comment="<!-- Not imported by any file -->"
        ;;
      ts|js)
        comment="// Not imported by any file"
        ;;
      *)
        comment="# Not imported by any file"
        ;;
    esac
    
    # Check if file already has the comment
    if ! grep -q "Not imported by" "$file"; then
      # Add comment to the beginning of the file
      temp_file=$(mktemp)
      echo "$comment" > "$temp_file"
      cat "$file" >> "$temp_file"
      mv "$temp_file" "$file"
      echo "Added import comment to $file"
    fi
  fi
done
