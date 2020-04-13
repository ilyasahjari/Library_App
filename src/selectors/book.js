export default (books, {  text,auteur,niveau,status }) => {

    return books.filter((book) => {
            const textMatch = book.titre.toLowerCase().includes(text.toLowerCase());
            return textMatch ;
        });

};