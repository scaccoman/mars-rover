'use strict'

jasmine.getEnv().addReporter(require(process.cwd() + '/spec/support/reporter'))

const expect = require('chai').expect

const MarsRover = require('../../../libs/MarsRover')

describe('Mars Rover', function () {
  let marsRover

  beforeEach(() => {
    marsRover = new MarsRover({ position: '1 2 N' }, '5 5')
  })

  it('the properties should be set correctly', async done => {
    expect(marsRover.x).to.equal(1)
    expect(marsRover.y).to.equal(2)
    expect(marsRover.direction).to.equal('N')
    expect(marsRover.grid[0]).to.equal('5')
    expect(marsRover.grid[1]).to.equal('5')
    done()
  })

  it('turning should work', async done => {
    marsRover.turn('L')
    marsRover.turn('L')
    marsRover.turn('L')
    marsRover.turn('L')
    marsRover.turn('R')
    marsRover.turn('R')
    marsRover.turn('R')
    marsRover.turn('R')
    expect(marsRover.x).to.equal(1)
    expect(marsRover.y).to.equal(2)
    expect(marsRover.direction).to.equal('N')
    done()
  })

  it('moving should work', async done => {
    marsRover.move()
    expect(marsRover.x).to.equal(1)
    expect(marsRover.y).to.equal(3)
    expect(marsRover.direction).to.equal('N')
    done()
  })

  it('moving out of boundary should throw an error', async done => {
    marsRover.move()
    marsRover.move()
    marsRover.move()
    try {
      marsRover.move()
    } catch(err) {
      expect(err.message).to.equal('Move instruction out of area boundary')
    }
    expect(marsRover.x).to.equal(1)
    expect(marsRover.y).to.equal(6)
    expect(marsRover.direction).to.equal('N')
    done()
  })

  it('getPosition should work', async done => {
    const position = marsRover.getPosition()
    expect(position).to.equal('1 2 N')
    done()
  })
})
