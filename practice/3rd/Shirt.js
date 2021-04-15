class Shirt {
    constructor (
        // Define parameters:
        size,
        color,
        sleeveLength,
        pocket
    ) {
        // Define properties:
        this.size = size;
        this.color = color;
        this.sleeveLength = sleeveLength;
        this.pocket = pocket;
    }
    // add methods like normal function
    changeSleeveLength(length) {
        this.sleeveLength = length;
    }
    togglePocket(pocketStatus) {
        this.pocket = pocketStatus;
    }
}

export default Shirt;