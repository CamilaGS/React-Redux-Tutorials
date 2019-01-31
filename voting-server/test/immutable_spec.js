import {expect} from 'chai';
import {List, Map} from 'immutable';

describe('immutability', () => {
    describe('a number', () => {
        function increment(currentState){
            return currentState + 1;
        }

        it('is immutrable', () => {
            let state =42;
            let nextState = increment(state);

            expect(nextState).to.equal(43);
            expect(state).to.equal(42);
        });
    });

    describe('A List', () => {
        let state = List.of('Trainspotting', '28 Days Latter');
        let nextState = addMovie(state, 'Sunshine');

        function addMovie(currentState, movie) {
            return currentState.push(movie);
          }
      
          it('is immutable', () => {

            expect(nextState).to.equal(List.of(
                'Trainspotting',
                '28 Days Later',
                'Sunshine'
            ));
            expect(state).to.equal(List.of(
                'Trainspotting',
                '28 Days Later'
            ));
        });
    });

    describe('a tree', () => {
        function addMovie(currentStatte, movie){
            return currentState.update('movies', movies => movies.push(movie));
            
            /*return currentState.set(
                'movies',
                currentState.get('movies').push(movie)
            );*/
        }

        it('is immutable', () => {
            let state = Map({
                movies: List.of('Trainspotting', '28 Days Later')
            });
            let nextState = addMovie(state, 'Sunshine');

            expect(nextState).to.equak(Map({
                movies: List.of(
                    'Trainspotting',
                    '28 Days Later',
                    'Sunshine'
                )
            }));
            expect(state).to.equal(Map({
                movies: List.of(
                    'Trainspotting',
                    '28 Days Later'
                )
            }));
        });
    });
});