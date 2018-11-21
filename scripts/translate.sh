#!/usr/bin/env bash
set -e

GIT_ROOT_DIR="$(git rev-parse --show-toplevel)"
SRC_DIR="$GIT_ROOT_DIR/source"
SRC_DIR_FILES="$GIT_ROOT_DIR/source/*.js"
TRANS_DIR="$GIT_ROOT_DIR/i18n"

for i in "$@"
do
case $i in
  -l=*|--language=*)
  LANG="${i#*=}"
  shift # past argument=value
  ;;
  *)
        # unknown option
  ;;
esac
done

if [[ "$LANG" =~ ^zh(-cn)*$|^en(-us)*$ ]]; then
  LANG_DIR="$TRANS_DIR/$LANG"
  if [ ! -d "$LANG_DIR" ]; then
    echo "No relative language repository: $LANG_DIR"
    exit 1
  fi
else
  echo "-l/--language must equals zh[-cn] or en[-us]"
  exit 1
fi

echo "Tranlating to $LANG..."
for file in $SRC_DIR_FILES
do
  fname=`basename $file .js`
  trans_name="$LANG_DIR/$fname.$LANG"
  if [ -f "$trans_name" ]; then
    file_transed=`sed '/^\/\*\*/,/^ \* \@/{/^\/\*\*/!{/^ \* \@/!d;};}' $file |\
      sed "/^\/\*\*/r $trans_name"`
    echo "$file_transed" > "$file"
  else
    echo "No $fname.js related translation: $fname.$LANG, please translate it. ✏️  "
  fi
done
echo "Tranlate to $LANG done!"

echo "Scan deledted API"
TRANS_DIR_FILES="$LANG_DIR/*.$LANG"

for trans_file in $TRANS_DIR_FILES
do
  fname=`basename $trans_file ."$LANG"`
  src_name="$SRC_DIR/$fname.js"
  if [ ! -f "$src_name" ]; then
    echo "$fname.js have been deleted, please remove its translation. 🗑  "
  fi
done
echo "Scan API finished."
