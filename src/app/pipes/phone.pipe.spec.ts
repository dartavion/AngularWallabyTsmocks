import { PhonePipe } from './phone.pipe';

describe('PhonePipe', () => {

  let pipe: PhonePipe;
  beforeEach(() => {
    pipe = new PhonePipe();
  });
  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('transforms valid phone', () => {
    expect(pipe.transform('5858654167')).toEqual('(585) 865-4167');
  });

  it('adds number', () => {
    expect(pipe.add(2, 2)).toEqual(4);
  });
});
