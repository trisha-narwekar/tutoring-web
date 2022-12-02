

export const BinarySearch = (array, id) => {
    let start = 0;
    let end = array.length - 1;
    let mid = Math.floor((start + end) / 2);
    while (array[mid].id !== id && start < end) {
        if (id < array[mid].id) {
        end = mid - 1;
        } else {
        start = mid + 1;
        }
        mid = Math.floor((start + end) / 2);
    }
    return (array[mid].id !== id) ? -1 : mid;
}