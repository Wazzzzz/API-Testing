const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const expect = chai.expect;
const domainUrl = 'https://reqres.in';
const pathUrl_login = '/api/login';
const pathUrl_regis = '/api/register';


describe('Create Users', function(){
    before(function() {
        body = {
            "email": "eve.holt@reqres.in",
            "password": "pistol"
        }
    })
    it('Succes register users', async function() {
        const response = await chai.request(domainUrl)
        .post(pathUrl_regis)
        .send(body);

        expect(response).to.have.status(200);
        expect(response.body).to.have.property('id');
        expect(response.body).to.have.property('token');
    })
    it('Succes login users', async function() {
        const response = await chai.request(domainUrl)
        .post(pathUrl_login)
        .send(body);

        expect(response).to.have.status(200);
        expect(response.body).to.have.property('token');
    })
})