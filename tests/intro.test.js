import { describe, test, it, expect } from 'vitest'
import { max } from '../src/intro';

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