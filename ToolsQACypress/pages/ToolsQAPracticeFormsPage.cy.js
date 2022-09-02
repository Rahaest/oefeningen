class ToolsQAPracticeFormsPage {

        

    setFirstName(firstName){
        this.firstName = firstName;
    }

    setLastName(lastName){
        this.lastName = lastName;
    }

    setUserNumber(userNumber){
        this.userNumber = userNumber;
    }

    setMale(){
        cy.contains('Male').click();
    }    
    setFemale(){
        cy.contains('Female').click();
    }
    setOther(){
        cy.contains('Other').click();
    }
    
    fillIn(){
        cy.get('#firstName').type(this.firstName);
        cy.get('#lastName').type(this.lastName);
        cy.get('#userNumber').type(this.userNumber);
    }

    submit(){
        cy.get('#submit').click();
    }
}

export default new ToolsQAPracticeFormsPage();