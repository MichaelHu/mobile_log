#!/bin/bash

fis release -d output -c

pushd output

cp -r release/* test ../release

popd

if [ -e output ]; then
    rm -rf output
fi

