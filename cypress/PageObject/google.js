class googlePage {
 _SearchInputSelector = '#APjFqb'

    getSearchInput(){
        return cy.get(this._Search)
    }

} export default googlePage