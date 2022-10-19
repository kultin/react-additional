import { CounterSchema } from '../types/counterSchema';
import { counterActions, counterReducer } from './counterSlice';

describe('counterSlice.test', () => {
    test('increment', () => {
        const state: CounterSchema = { value: 10 };
        expect(counterReducer(state as CounterSchema, counterActions.increment)).toEqual({ value: 11 });
    });
    test('decrement', () => {
        const state: CounterSchema = { value: 10 };
        expect(counterReducer(state as CounterSchema, counterActions.decrement)).toEqual({ value: 9 });
    });
    test('work with empty state', () => {
        expect(counterReducer(undefined, counterActions.decrement)).toEqual({ value: -1 });
    });
});
