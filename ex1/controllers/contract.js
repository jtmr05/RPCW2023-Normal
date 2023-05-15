const Contract = require('../models/contract');

/*
GET /contracts: devolve uma lista com todos os contratos;
GET /contracts/:id: devolve o contrato com identificador id;
GET /contracts?year=YYYY: devolve a lista dos contratos realizados durante o ano YYYY;
GET /contracts?inst=AAA: devolve a lista dos contratos realizados pela instituição contratante AAA;
GET /contracts/courses: devolve a lista dos cursos dos contratados (sem repetições);
GET /contracts/institutions: devolve a lista das instituições contratantes (sem repetições);
POST /contracts: acrescenta um contrato novo à BD;
DELETE /contracts/:id: elimina da BD o contrato com o identificador id.
*/


module.exports.list = () => {
    return Contract.find().then(resp => resp).catch(err => err);
};

module.exports.getOne = id => {
    return Contract.findOne({ _id: id }).then(resp => resp).catch(err => err);
};

module.exports.getByYear = y => {
    return Contract.find({ DataInicioContrato: { $regex: `${y}$` } }).then(resp => resp).catch(err => err);;
};

module.exports.getByInst = i => {
    return Contract.find({ NIPCInstituicao: i }).then(resp => resp).catch(err => err);;
};

module.exports.getCourses = () => {
    return Contract.distinct('Curso').then(resp => resp).catch(err => err);;
};

module.exports.getInsts = () => {
    return Contract.distinct('NomeInstituicao').then(resp => resp).catch(err => err);;
};

module.exports.addOne = c => {
    return Contract.create(c).then(resp => resp).catch(err => err);;
};

module.exports.deleteOne = id => {
    return Contract.deleteOne({ _id: id }).then(resp => resp).catch(err => err);
};
