export class FormfieldBase {

  controlType: string;
  controlName: string;
  label: string;
  value: string;
  required: boolean;
  order: number;
  type?: string;
  options?: { label: string; value: string; data: any[] };
  minDate?: Date;
  maxDate?: Date;

  constructor(options: {
              controlType?: string,
              controlName?: string,
              label?: string,
              value?: string,
              required?: boolean,
              order?: number,
              type?: string,
              options?: { label: string; value: string; data: any[] }
    } = {}) {
      this.controlType = options.controlType || '';
      this.controlName = options.controlName || '';
      this.label = options.label || '';
      this.value = options.value === undefined ? '' : options.value;
      this.required = !!options.required;
      this.order = options.order === undefined ? 1 : options.order;
      this.type = options.type;
      this.options = options.options;
  }

}
