// Self-Organizing Data.
function seqSearch (arr, data) {
    let len = arr.length;
    for (let i = 0; i < len; i++) {
        if (arr[i] === data) {
            if (i > 0 && i > len * 0.2) {
                swap(arr, i, i - 1);
            }
            return true;
        }
    }
    return false;
}

// Binary search
function binSearch (arr, data) {
    let upperBound = arr.length - 1;
    let lowerBound = 0;
    while (lowerBound <= upperBound) {
        let mid = Math.floor((upperBound - lowerBound) / 2);
        if (arr[mid] > data) {
            upperBound = mid - 1;
        } else if (arr[mid] < data) {
            lowerBound = mid + 1;
        } else {
            return mid;
        }
    }
    return -1;
}
// Count duplicate data in binary search
function count (arr, data) {
    let count = 0;
    let pos = binSearch(arr, data);
    if (pos === -1) {
        return count;
    }

    count++;
    for (let i = pos - 1; i > 0; i--) {
        if (arr[i] === data){
            count++;
        } else {
            break;
        }
    }

    for (let i = pos + 1; i < data.length; i++) {
        if (arr[i] === data){
            count++;
        } else {
            break;
        }
    }
    return count;
}

function swap (arr, index1, index2) {
    let temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
}
