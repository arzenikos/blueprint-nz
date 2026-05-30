#!/bin/bash

# Directory to search in
DIR="/mnt/d/github_playground/astro-blueprint-nz/src"

# Find all files except those in assets directory
FILES=$(find "$DIR" -type f -not -path "*/assets/*" -not -path "*/node_modules/*")

# Process each file
for file in $FILES; do
  # Get the relative path from src
  rel_path=${file#"$DIR/"}
  
  # Get the filename without path
  filename=$(basename "$file")
  filename_no_ext="${filename%.*}"
  
  # Skip node_modules
  if [[ "$file" == *"node_modules"* ]]; then
    continue
  fi
  
  # Find all files that import/use/reference this file
  # Look for imports
  import_refs=$(grep -r --include="*.astro" --include="*.ts" --include="*.tsx" --include="*.js" --include="*.jsx" "import.*from.*$filename_no_ext" "$DIR" | grep -v "$file" | cut -d: -f1 | sort | uniq)
  
  # Look for other references (like components used in templates)
  other_refs=$(grep -r --include="*.astro" --include="*.ts" --include="*.tsx" --include="*.js" --include="*.jsx" "<$filename_no_ext" "$DIR" | grep -v "$file" | cut -d: -f1 | sort | uniq)
  
  # Combine references
  all_refs=$(echo -e "$import_refs\n$other_refs" | sort | uniq | grep -v "^$")
  
  # Format the references for the comment
  if [ -n "$all_refs" ]; then
    refs_list=""
    for ref in $all_refs; do
      rel_ref=${ref#"$DIR/"}
      refs_list="$refs_list, $rel_ref"
    done
    refs_list=${refs_list:2}  # Remove leading ", "
    
    # Get file extension
    ext="${file##*.}"
    
    # Add comment based on file type
    case "$ext" in
      astro|tsx|jsx)
        comment="<!-- Referenced by: $refs_list -->"
        ;;
      ts|js)
        comment="// Referenced by: $refs_list"
        ;;
      *)
        comment="# Referenced by: $refs_list"
        ;;
    esac
    
    # Check if file already has a reference comment
    if grep -q "Referenced by\|Imported by\|Not imported by\|Not referenced by" "$file"; then
      # Replace existing comment
      sed -i "1s/.*/$comment/" "$file"
      echo "Updated reference comment in $file"
    else
      # Add comment to the beginning of the file
      temp_file=$(mktemp)
      echo "$comment" > "$temp_file"
      cat "$file" >> "$temp_file"
      mv "$temp_file" "$file"
      echo "Added reference comment to $file"
    fi
  else
    # Get file extension
    ext="${file##*.}"
    
    # Add comment based on file type
    case "$ext" in
      astro|tsx|jsx)
        comment="<!-- Not referenced by any file -->"
        ;;
      ts|js)
        comment="// Not referenced by any file"
        ;;
      *)
        comment="# Not referenced by any file"
        ;;
    esac
    
    # Check if file already has a reference comment
    if grep -q "Referenced by\|Imported by\|Not imported by\|Not referenced by" "$file"; then
      # Replace existing comment
      sed -i "1s/.*/$comment/" "$file"
      echo "Updated reference comment in $file"
    else
      # Add comment to the beginning of the file
      temp_file=$(mktemp)
      echo "$comment" > "$temp_file"
      cat "$file" >> "$temp_file"
      mv "$temp_file" "$file"
      echo "Added reference comment to $file"
    fi
  fi
done
