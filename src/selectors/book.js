export default (expenses, {  text,auteur,niveau,status,sortBy }) => {

    return expenses.filter((expense) => {
            const textMatch = expense.nom.toLowerCase().includes(text.toLowerCase());
            const auteurMatch = expense.auteur.toLowerCase().includes(auteur.toLowerCase());
            const niveauMatch = expense.niveau.toLowerCase().includes(niveau.toLowerCase());
            const statusMatch = expense.status.toLowerCase().includes(status.toLowerCase());
            
            return textMatch && auteurMatch && niveauMatch && statusMatch;
        });

};