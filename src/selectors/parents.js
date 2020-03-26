export default  (parents, { text }) => {

    return parents.filter((parent) => {
            //for a faster search
           // return expense.prenom.toLowerCase().includes(text.toLowerCase()); 

           //for a more identification
           return !(parent.prenom.toLowerCase().search(text.toLowerCase()));
        });
};
