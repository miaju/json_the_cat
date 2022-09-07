const { fetchBreedDescription } = require('../breedFetcher');
const { expect } = require('chai');

describe('fetchBreedDescription', () => {
  it('returns a string description for a valid breed, via callback', (done) => {
    fetchBreedDescription('Siberian', (err, desc) => {
      // we expect no error for this scenario
      expect(err).to.equal(null);

      const expectedDesc = "The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors.";

      // compare returned description
      expect(expectedDesc).to.equal(desc.trim());

      done();
    });
  });

  it("throws an error if the given breedName is invalid", (done) => {

    fetchBreedDescription('abc', (err, desc) => {
      // we expect no error for this scenario
      expect(err.message).to.equal(`Invalid cat breed entered`);

      // compare returned description
      expect(desc).to.equal(null);

      done();

    });
  });

});