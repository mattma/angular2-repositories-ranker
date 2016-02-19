import {
  it,
  inject,
  describe,
  beforeEachProviders
} from 'angular2/testing';

import {provide} from 'angular2/core';
import {BaseRequestOptions, Http} from 'angular2/http';
import {MockBackend} from 'angular2/http/testing';

import {AppStore} from '../../common/stores/main-store';
import {RankerComponent} from './ranker';

describe('Ranker Component', () => {
  // provide our implementations or mocks to the dependency injector
  beforeEachProviders(() => [
    BaseRequestOptions,
    MockBackend,
    provide(Http, {
      useFactory: function(backend, defaultOptions) {
        return new Http(backend, defaultOptions);
      },
      deps: [MockBackend, BaseRequestOptions]
    }),
    AppStore,
    RankerComponent
  ]);

  it('should not show recent commits panel by default', inject([ RankerComponent ],
    (ranker) => {
      ranker.ngOnInit();

      expect(ranker.showCommits).toEqual(false);
  }));
});

