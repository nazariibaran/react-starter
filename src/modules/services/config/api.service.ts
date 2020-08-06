import { HttpService } from './http.service';
import { GeneralService } from '../general.service';

class ApiService {
  /**
   * Init
   */
  public constructor(private http: HttpService) {}

  /**
   * Services
   */
  public general = new GeneralService(this.http);
}

export { ApiService };
