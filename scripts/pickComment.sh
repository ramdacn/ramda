#!/bin/bash

GIT_ROOT_DIR="$(git rev-parse --show-toplevel)"
SRC_DIR="$GIT_ROOT_DIR/src"
SRC_DIR_FILES="$GIT_ROOT_DIR/src/*.js"

for file in $SRC_DIR_FILES
do
  #cat "$file"
  fname=`basename $file`
  echo $fname
  #echo $file
  comment=`sed -n -e '/^\/\*\*/,/^ \* \@/p' $file | sed '1d' | sed '$d'`
  echo "$comment"
  echo ""
done

