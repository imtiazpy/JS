class Book {
    constructor (
        // params
        title,
        author,
        ISBN,
        pubYear,
        pageNumber,
        currentPage,
        readStatus
    ) {
        // properties
        this.title = title;
        this.author = author;
        this.ISBL = ISBN;
        this.pubYear = pubYear;
        this.pageNumber = pageNumber;
        this.currentPage = currentPage;
        this.readStatus = readStatus;
        this.updateStatus = function (status) {
            console.info(status);
        }
    }
    // methods
    
    updateCurrentPage (newCurrentPage) {
        this.currentPage = newCurrentPage;
        this.updateStatus('Page updated');
    }
    updateReadStatus (newReadStatus) {
        this.readStatus = newReadStatus;
        this.updateStatus('Read status changed');
    }
}

export default Book;

