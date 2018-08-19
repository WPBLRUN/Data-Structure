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

function swap (arr, index1, index2) {
    let temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
}