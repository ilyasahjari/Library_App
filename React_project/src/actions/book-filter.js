// SET_TEXT_FILTER
export const setTitleFilter = (text = '') => ({
    type: 'SET_TITLE_FILTER',
    text
});
//SET_AUTEUR_FILTER
export const setAuteurFilter = (auteur='') => ({
    type : 'SET_AUTEUR_FILTER',
    auteur
})
// SET_NIVEAU_FILTER
export const setNiveauFilter = (niveau='') => ({
    type: "SET_NIVEAU_FILTERS",
    niveau
})
//SET_STATUS_FILTER
export const setStatusFilter = (status='') => ({
    type: "SET_STATUS_FILTER",
    status
})
// SORT_BY_DATE
export const sortByDate = () => ({
    type: 'SORT_BY_DATE'
})