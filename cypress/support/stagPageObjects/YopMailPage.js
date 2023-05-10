class YopMailPage
{
    getYopmailInboxField()
    {
        return cy.get('#login')
    }

    getYopmailInboxArrowBtn()
    {
        return cy.xpath("//i[@class= 'material-icons-outlined f36']")
    }
    
    getYopmailInbox()
    {
        return cy.get('#ifmail')
    }

}

export default YopMailPage;
