

// Function that avoid repeated values in an array
export function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
}  