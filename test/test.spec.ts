import { name } from '../src/second';
import { expect } from 'chai';

describe('server tests', () => {

  // after(done => {
    
  // });

  describe('..', () => {

    it('should..1', () => {
      expect(name(1)).to.equal(2);
    });
    it('should..2', () => {
      expect(name('hi')).to.equal('hi1');
    });
    it('should..3', () => {
      expect(name(['hi', 'bye'])).to.deep.equal(['hi1', 'bye1']);
    });
  });

  
});
