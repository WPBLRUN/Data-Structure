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

function insertionSort(arr) {
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

function swap (arr, index1, index2) {
    let temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
}
