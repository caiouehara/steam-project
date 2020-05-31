let Company = require('../models/company.models');

exports.get = (req, res) => {
    Company.find()
        .then(companies => res.json(companies))
        .catch(err => res.status(400).json('Error: ' + err))
}

exports.post = (req, res) => {
    const name = req.body.name;
    const badge = req.body.badge;
    const newCompany = new Company({name, badge})
    newCompany.save()
        .then(() => res.json(`Company added! -> ${name, badge}`))
        .catch(err => res.status(400).json('Error: ' + err))
}