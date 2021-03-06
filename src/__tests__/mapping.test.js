// @flow

import { mapping } from '../mapping';
import { object } from '../object';
import { string } from '../string';

describe('mappings', () => {
    const decoder = mapping(object({ name: string }));

    it('valid', () => {
        const input = { '18': { name: 'foo' }, '23': { name: 'bar' }, key: { name: 'value' } };
        const output = new Map([['18', { name: 'foo' }], ['23', { name: 'bar' }], ['key', { name: 'value' }]]);
        expect(decoder(input).unwrap()).toEqual(output);
    });

    it('invalid', () => {
        expect(() => decoder('foo').unwrap()).toThrow('Must be an object');
        expect(() => decoder({ foo: 1 }).unwrap()).toThrow('Unexpected value');
    });
});
