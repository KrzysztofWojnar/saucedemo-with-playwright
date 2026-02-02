import { BaseController } from './base';
import type { LimitingResouresOptionParams } from '../utils/dummyJsonLimitingResources';

export class ProductsController extends BaseController {
  readonly endpoint = '/products';
  getProducts(options?: LimitingResouresOptionParams | 'all') {
    const params = options == 'all' ? { limit: 0 } : options || {};
    return this.apiRequestContext.get(this.endpoint, { params });
  }
}
