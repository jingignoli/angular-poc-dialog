import { PocModule } from './poc.module';

describe('PocModule', () => {
  let pocModule: PocModule;

  beforeEach(() => {
    pocModule = new PocModule();
  });

  it('should create an instance', () => {
    expect(pocModule).toBeTruthy();
  });
});
