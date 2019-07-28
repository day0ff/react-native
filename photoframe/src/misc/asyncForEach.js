export const asyncForEach = async (array, callback) => {
    const newArray = [];
    for (let index = 0; index < array.length; index++) {
        newArray[index] = await callback(array[index], index, array);
    }
    return newArray;
};
