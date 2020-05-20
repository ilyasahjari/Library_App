//a test to show if the filter can see the elements existing in the expenses
export default  (expenses, { text,nom, classe }) => {
    
    return expenses.filter((expense) => {
          
           //for a faster search
           // return expense.prenom.toLowerCase().includes(text.toLowerCase());         
        const textfilter   = !(expense.prenom.toLowerCase().search(text.toLowerCase()));
        const nomfilter    = !(expense.nom.toLowerCase().search(nom.toLowerCase()));
        const classefilter = !(expense.classe.toLowerCase().search(classe.toLowerCase()));  

        return textfilter && classefilter && nomfilter;
        });
};
