import {main} from './start';

describe('main', () => {
    it('throws an unimplimented error', () => {
        expect(() => main()).toThrowError("UNIMPLEMENTED");
    });
})

