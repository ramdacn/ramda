#!/bin/bash

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
    mkdir -p "$LANG_DIR"
  fi
else
  echo "-l/--language must equals zh[-cn] or en[-us]"
  exit 1
fi

echo "Comments picking..."
for file in $SRC_DIR_FILES
do
    fname=`basename $file .js`
    if [ "$fname" != index ];then
        comment=`sed -n -e '/^\/\*\*/,/^ \* \@/{/^\/\*\*/d; /^ \* \@/d; p; }' $file`
        echo "$comment" > "$LANG_DIR/$fname.$LANG"
    fi
done

echo "Comments have picked!"
