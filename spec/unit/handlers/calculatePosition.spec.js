'use strict'

jasmine.getEnv().addReporter(require(process.cwd() + '/spec/support/reporter'))

const sinon = require('sinon')
const expect = require('chai').expect

let proxyquire = require('proxyquire')

const handler = '../../../handlers/calculatePosition.js'

describe('Calculate Position', function () {
  let valid, invalid

  beforeEach(() => {
    process.env.NODE_ENV = 'dev'
    valid = require('../../mocks/calculatePosition/valid')
    invalid = require('../../mocks/calculatePosition/invalid')
  })

  it('all methods should be called', async done => {
    const turn = sinon.stub().returns(true)
    const move = sinon.stub().returns(true)
    const getPosition = sinon.stub().returns('1 3 N')
    const MarsRover = function () {
      this.turn = () => turn()
      this.move = () => move()
      this.getPosition = () => getPosition()
      this.id = '67531bd1-5bcb-11ea-87f2-1f6031af5bc7'
    }

    const Handler = proxyquire(handler, {
      '../libs/MarsRover': MarsRover
    })
    
    const resp = await Handler({ body: JSON.stringify(valid) })
    expect(resp.statusCode).to.equal(200)
    expect(turn.calledTwice).to.equal(true)
    expect(move.calledTwice).to.equal(true)
    expect(getPosition.calledTwice).to.equal(true)
    done()
  })

  it('throw error if no payload is provided', async done => {
    const turn = sinon.stub().returns(true)
    const move = sinon.stub().returns(true)
    const getPosition = sinon.stub().returns('1 3 N')
    const MarsRover = function () {
      this.turn = () => turn()
      this.move = () => move()
      this.getPosition = () => getPosition()
      this.id = '67531bd1-5bcb-11ea-87f2-1f6031af5bc7'
    }

    const Handler = proxyquire(handler, {
      '../libs/MarsRover': MarsRover
    })
    
    const resp = await Handler()
    expect(resp.statusCode).to.equal(400)
    expect(turn.called).to.equal(false)
    expect(move.called).to.equal(false)
    expect(getPosition.called).to.equal(false)
    done()
  })

  it('the payload validation should fail', async done => {
    const turn = sinon.stub().returns(true)
    const move = sinon.stub().returns(true)
    const getPosition = sinon.stub().returns('1 3 N')
    const MarsRover = function () {
      this.turn = () => turn()
      this.move = () => move()
      this.getPosition = () => getPosition()
      this.id = '67531bd1-5bcb-11ea-87f2-1f6031af5bc7'
    }

    const Handler = proxyquire(handler, {
      '../libs/MarsRover': MarsRover
    })
    
    const resp = await Handler({ body: JSON.stringify(invalid) })
    expect(resp.statusCode).to.equal(400)
    expect(turn.called).to.equal(false)
    expect(move.called).to.equal(false)
    expect(getPosition.called).to.equal(false)
    done()
  })
})
