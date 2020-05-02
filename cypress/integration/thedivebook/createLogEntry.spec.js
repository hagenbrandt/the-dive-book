describe('Create Log Entry and check for reset', () => {
    it('resets all fields after entry', () => {
        cy.visit('http://localhost:3000/LogBook')

        const getItemsToTest = [
            {get: 'input', name: 'diveNumber', type: 42},
            {get: 'input', name: 'buddy', type: 'Douglas'},
            {get: 'input', name: 'country', type: 'United Kingdom'},
            {get: 'input', name: 'city', type: 'Cambridge'},
            {get: 'input', name: 'divesite', type: 'Betelgeuse V'},
            {get: 'input', name: 'divecenter', type: 'Betelgeuse Dive Center'},
            {get: 'select', name: 'suitType', select: '3mmshort'},
            {get: 'input', name: 'weights', as: 'range', invoke: 8},
            {get: 'select', name: 'watertype', select: 'saltwater'},
            {get: 'input', name: 'visability', as: 'range', invoke: 24},
            {get: 'input', name: 'depth', as: 'range', invoke: 42},
            {get: '#', name: '#Cloudy'},
            {get: 'input', name: 'entryDateTime', type: '2020-04-01T08:15'},
            {get: 'input', name: 'entryAir', type: 220},
            {get: 'input', name: 'exitDateTime', type: '2020-04-01T08:44'},
            {get: 'input', name: 'exitAir', type: 42},
            {get: '#', name: '#Fun'},
            {get: '#', name: '#Deep'},
            {get: '#', name: '#Wreck'},
            {get: 'file'},
            {get: 'textarea', name: 'description', type: 'What a great dive through the universe.'},
            {get: 'button', name: 'openCamera'},
            {get: 'button', name: 'takeAPicture'},
            {get: 'button', name: 'uploadCamPic'},
            {get: 'button', name: 'submitButton'},

        ]

        getItemsToTest.map(entity => {
            if (entity.as) {
                cy.get(`input[name=${entity.name}]`).as('range').invoke('val', entity.invoke).trigger('change')
            } else if (entity.get === 'input') {
                cy.get(`${entity.get}[name=${entity.name}]`).type(`${entity.type}`)
            } else if (entity.get === 'select') {
                cy.get(`${entity.get}[name=${entity.name}]`).select(`${entity.select}`).should('have.value', `${entity.select}`)
            } else if (entity.get === '#') {
                cy.get(`${entity.name}`).click()
            } else if (entity.get === 'file') {
                const imgPath = './img/diving_example.jpg'
                cy.get(`input[type=${entity.get}]`).attachFile(imgPath)
            } else if (entity.get === 'textarea') {
                console.log(entity.name)
                 cy.get(`${entity.get}[name=${entity.name}]`).type(`${entity.type}`)
            } else if (entity.get === 'button') {
                cy.get(`${entity.get}[name=${entity.name}]`).click()
            }
        })

        getItemsToTest.map(entity => {
            if (!entity.as && entity.get === 'input') {
                cy.get(`${entity.get}[name=${entity.name}]`).should('be.empty')
            }  else if (entity.get === 'file') {
                cy.get(`input[type=${entity.get}]`).should('be.empty')
            } else if (entity.get === 'textarea') {
                cy.get(`${entity.get}[name=${entity.name}]`).should('be.empty')
            }
        })
    })
})