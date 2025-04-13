import { describe, test, it, expect } from 'vitest'
import { fizzBuzz, max } from '../src/intro';

describe(' max ', () => {
    it('should return the first argument if it is greater than the second', () => {
        expect(max(5, 3)).toBe(5);
    })
    it('should return the second argument if it is greater than the first', () => {
        expect(max(3, 5)).toBe(5);
    })

    it('should return the first argument if it is argument are equal', () => {
        expect(max(5, 5)).toBe(5);
    })
})

describe(' fizzBuzz ', () => {
    it('should return FizzBuzz if number is divisble by 3 and 5 ', () => {
        expect(fizzBuzz(15)).toBe('FizzBuzz');
    })
    it('should return Fizz if number is divisble by 3 ', () => {
        expect(fizzBuzz(9)).toBe('Fizz');
    })
    it('should return Buzz if number is divisble by 5 ', () => {
        expect(fizzBuzz(10)).toBe('Buzz');
    })

    it('if not divisible by any of these it should return string', () => {
        expect(fizzBuzz(17)).toBe(17..toString());
    })
})