// Given an array and chunk size, divide the array into subarrays of length size

export default function Chunk (arr: number[], size: number): number[]{
        const result: any = [];
        let index = 0;
        while (index < arr.length) {
            result.push(arr.slice(index, index + size));
            index += size;
        }
        return result;
}
