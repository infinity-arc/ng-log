
export abstract class CFormatParams {
  private _formatParams(params: any[]): string {
    let ret: string = params.join(',');
    // Is there at least one object in the array?
    // tslint:disable-next-line:triple-equals
    if (params.some(p => typeof p == 'object')) {
      ret = '';
      // Build comma-delimited string
      params.forEach(item => ret += JSON.stringify(item) + ',');
    }
    return ret;
  }
  formatParams(params: any[]): string { return this._formatParams(params); }
}
