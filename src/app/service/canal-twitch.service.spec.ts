import { TestBed } from '@angular/core/testing';

import { CanalTwitchService } from './canal-twitch.service';

describe('CanalTwitchService', () => {
  let service: CanalTwitchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CanalTwitchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
