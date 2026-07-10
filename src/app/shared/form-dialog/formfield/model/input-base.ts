import { FormfieldBase } from './formfield-base';

export class InputBase extends FormfieldBase {

  controlType = 'input';
  type: string;

  constructor(options: Record<string, any> = {}) {
    super(options);
    this.type = options['type'] || 'text';
  }

}
