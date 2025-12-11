#!/bin/bash
IMAGE_NAME="my-playwright-tester:latest"

# Optional flag for updating screenshots
UPDATE_FLAG=""
if [[ "$1" == "--update-screenshots" ]]; then
    UPDATE_FLAG="--update-snapshots"
fi

# Ensure required result/report directories exist
mkdir -p "$(pwd)/test-results"
mkdir -p "$(pwd)/playwright-report"

# 1. Build the image
docker build -t $IMAGE_NAME .

# Check if the build was successful
if [ $? -eq 0 ]; then
    # 2. Run the container using the tagged image and mount the tests, test-results, and playwright-report directories
    docker run --rm --ipc=host --init \
        -v "$(pwd)/tests":/app/tests \
        -v "$(pwd)/test-results":/app/test-results \
        -v "$(pwd)/playwright-report":/app/playwright-report \
        $IMAGE_NAME npx playwright test $UPDATE_FLAG
else
    echo "Docker build failed. Container not run."
fi
