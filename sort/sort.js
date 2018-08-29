//TODO: Compare different sort functions.
function bubbleSort (arr) {
    let len = arr.length;
    for (let i = len; i > 1; i--) {
        for (let j = 0; j < len - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                swap(arr, j, j + 1);
            }
        }
    }
}

function selectionSort (arr) {
    let len = arr.length;
    let min;
    for (let i = 0; i < len - 1; i++) {
        min = i;
        for (let j = i + 1; j < len - 1; j++) {
            if (arr[j] < arr[min]) {
                min = j;
            }
            swap(arr, i, min);
        }
    }
}

function insertionSort (arr) {
    let temp, j;
    for (let i = 1; i < arr.length; i++) {
        temp = arr[i];
        j = i;
        while (j > 0 && arr[j - 1] >= temp) {
            arr[j] = arr[j - 1];
            j--;
        }
        arr[j] = temp;
    }
}

function shellSort (arr) {
    let len = arr.length;
    let gaps = [5, 3, 1];
    let gLen = gaps.length;
    for (let g = 0; g < gLen; g++) {
        for (let i = gaps[g]; i < len; i++) {
            let temp = arr[i];
            let j = i;
            while (j >= gaps[g] && arr[j - gaps[g]] > temp) {
                arr[j] = arr[j - gaps[g]];
                j -= gaps[g]
            }
            arr[j] = temp;
        }
    }
}

function mergeSort (arr) {
    if (arr.length < 2) {
        return;
    }

    let step = 1;
    let left, right;
    while (step < arr.length) {
        left = 0;
        right = step;
        while (step < arr.length) {
            mergeArrays(arr, left, left + step, right, right + step);
            left += step;
            right += step;
        }
        if (right < arr.length) {
            mergeArrays(arr, left, left + step, right, arr.length);
        }
        step *= 2;
    }
}

function mergeArrays (arr, startLeft, stopLeft, startRight, stopRight) {
    let rightArr = new Array(stopRight - startRight + 1);
    let leftArr = new Array(stopLeft - startLeft + 1);
    let k = startRight;
    for (let i = 0; i < (rightArr.length - 1); i++) {
        rightArr[i] = arr[k];
        k++;
    }
    k = startLeft;
    for (let i = 0; i < (leftArr.length - 1); i++) {
        leftArr[i] = arr[k];
        k++;
    }
    rightArr[rightArr.length - 1] = Infinity;
    leftArr[leftArr.length - 1] = Infinity;
    let m = 0;
    let n = 0;
    for (let i = startLeft; i < stopRight; i++) {
        if (leftArr[m] <= rightArr[n]) {
            arr[i] = leftArr[m];
            m++;
        } else {
            arr[i] = leftArr[n];
            n++
        }
    }
    console.log("left array: ", leftArr);
    console.log("right array: ", rightArr);
}

function qSort (arr) {
    if (arr.length < 2) {
        return;
    }

    let lesser = [];
    let greater = [];
    let pivot = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < pivot) {
            lesser.push(arr[i]);
        } else {
            greater.push(arr[i]);
        }
    }

    //TODO: Fix this make quick sort more effective.
    return qSort(lesser).concat(pivot, qSort(greater));
}

//TODO: Real quick sort.
//TODO: Three way quick sort and what for.

// Base quick sort, in-place sort.
function partition (arr, left, right) {
    let pivot = arr[left];
    while (left < right) {
        while (left < right && arr[right] >= pivot) {
            right--;
        }
        arr[left] = arr[right];
        while (left < right && arr[left] <= pivot) {
            left++;
        }
        arr[right] = arr[left];
    }
    arr[left] = pivot;
    return left;
}

function quickSort (arr, start, end) {
    if (start < end) {
        let index = partition(arr, start, end);
        quickSort(arr, start, index - 1);
        quickSort(arr, index + 1, end);
    }
}

function arrayGenerator (size, limitation, floatOrInt) {
    let array = [];
    let length = size || Math.ceil(Math.random() * 5 + 5);
    for (let i = 0; i < length; i++) {
        array[i] = Math.random() * (limitation || 10);
        if (!floatOrInt) array[i] = Math.floor(array[i]);
    }
    return array;
}

function swap (arr, index1, index2) {
    let temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
}
