/*
*
*
*       FILL IN EACH FUNCTIONAL TEST BELOW COMPLETELY
*       -----[Keep the tests in the same order!]-----
*       (if additional are added, keep them at the very end!)
*/

var chaiHttp = require('chai-http');
var chai = require('chai');

var assert = chai.assert;
var expect = chai.expect;
var server = require('../server');
var ObjectId = require('mongodb').ObjectID;
const models = require('../models/allmodels.js');

chai.use(chaiHttp);

chai.use(require('chai-as-promised'));
         
suite('Functional Tests', function() {

  suite('API ROUTING FOR /api/threads/:board', function() {
    
    suite('POST', function() {
      test('Create Thread', function(done) {
      var t = new models.Thread({ board: '5d9310f0969d1b0075322ccf', text:'POST - new thread - test thread text', delete_password:'230'});  
       chai.request(server)
        .post('/api/threads/test')
        .send(t)
        .end(function(err, res){
           expect(err).to.be.null;
           assert.equal(res.status, 200);
           
          assert.property(res.body[0], 'text');
          //assert.property(res.body.issues[0], 'issue_text');
          //assert.property(res.body.issues[0], 'created_on');
          //assert.property(res.body.issues[0], 'updated_on');
          //assert.property(res.body.issues[0], 'created_by');
          //assert.property(res.body.issues[0], 'assigned_to');
          //assert.property(res.body.issues[0], 'open');
          //assert.property(res.body.issues[0], 'status_text');
          //assert.property(res.body.issues[0], '_id');
          done();
        });
      });
      
    });
    
    suite('GET', function() {
      test('Test GET /api/threads/:board  get all threads',  function(done){
        chai.request(server)
        .get('/api/threads/test')
        .end(function(err, res){
          assert.equal(res.status, 200);
          assert.isArray(res.body, 'response should be an array');
          assert.property(res.body[0], 'text', 'Thread should contain title');
          assert.property(res.body[0], 'bumped_on', 'Thread object should contain bumped_on');
          assert.property(res.body[0], 'created_on', 'Thread object should contain created_on');
          assert.property(res.body[0], 'replycount', 'Thread object should contain replycount');
          assert.notProperty(res.body[0], 'reported', 'Thread object should not contain reported');
          assert.notProperty(res.body[0], 'delete_password', 'Thread object should not contain delete_password');          
          done();
        });
      });
      
    });
    
    suite('DELETE', function() {
      
    });
    
    suite('PUT', function() {
      
    });
    

  });
  
  suite('API ROUTING FOR /api/replies/:board', function() {
    
    suite('POST', function() {
      
    });
    
    suite('GET', function() {
      test('Test GET /api/replies/:board  get all replies',  function(done){
        chai.request(server)
        .get('/api/replies/test') 
        .query({"_id": ObjectId('5d90a2b8ae157d0d10c8ab4e')})
        .end(function(err,res){
            assert.equal(res.status, 200);
            //assert.isArray(res.body, 'response should be an array');
            //assert.property(res.body[0], 'text', 'Thread should contain title');
            //assert.property(res.body[0], 'bumped_on', 'Thread object should contain bumped_on');
           // assert.property(res.body[0], 'created_on', 'Thread object should contain created_on');
           // assert.property(res.body[0], 'replycount', 'Thread object should contain replycount');
            //assert.notProperty(res.body[0], 'reported', 'Thread object should not contain reported');
            //assert.notProperty(res.body[0], 'delete_password', 'Thread object should not contain delete_password');          
            done();
          });
      });
    });
    
    suite('PUT', function() {
      
    });
    
    suite('DELETE', function() {
      
    });
    
  });

});
