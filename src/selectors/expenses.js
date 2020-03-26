//a test to show if the filter can see the elements existing in the expenses
export default  (expenses, { text }) => {

    return expenses.filter((expense) => {
            //for a faster search
           // return expense.prenom.toLowerCase().includes(text.toLowerCase()); 

           //for a more identification
           return !(expense.prenom.toLowerCase().search(text.toLowerCase()));
        });
};
