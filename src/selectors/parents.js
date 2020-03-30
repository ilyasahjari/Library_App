export default  (parents, { text,sexe }) => {

    return parents.filter((parent) => {
            //for a faster search
           // return expense.prenom.toLowerCase().includes(text.toLowerCase()); 
           

           //for a more identification
           const textParentFilter=!(parent.prenom.toLowerCase().search(text.toLowerCase()));
           const sexeParentFilter=!(parent.sexe.toLowerCase().search(sexe.toLowerCase()));
           return textParentFilter && sexeParentFilter;       
        });
};
