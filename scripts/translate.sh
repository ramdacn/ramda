#!/usr/bin/env bash
set -e

GIT_ROOT_DIR="$(git rev-parse --show-toplevel)"
SRC_DIR="$GIT_ROOT_DIR/src"
SRC_DIR_FILES="$GIT_ROOT_DIR/src/*.js"
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
  trans=`cat "$LANG_DIR/$fname.$LANG"`
  echo $fname
  echo $file
  echo "$trans"
  #comment=`sed '/^\/\*\*/,/^ \* \@/{/^\/\*\*/!{/^ \* \@/!d;};}' $file`
  #comment=`sed '/^\/\*\*/r $trans_name' $file`
  comment=`sed '/^\/\*\*/ {
           h
           r $trans_name
           g
           N
       }' $file`
  echo "$comment"
  echo ""
done

echo "Tranlate to $LANG done!"

