/** Fixed Deposits Account Buttons Configuration */
export class FixedDepositsButtonsConfiguration {

  optionArray: {
    name: string
  }[];

  buttonsArray: {
    name: string,
    icon: string,
  }[];

  constructor(status: string) {
    this.setOptions(status);
    this.setButtons(status);
  }

  get singleButtons() {
    return this.buttonsArray;
  }

  get options() {
    return this.optionArray;
  }

  setButtons(status: string) {
    switch (status) {
      case 'Active':
        this.buttonsArray = [
          {
            name: 'Premature Close',
            icon: 'arrow-left'
          },
          {
            name: 'Calculate Interest',
            icon: 'table'
          }
        ];
        break;
      case 'Matured':
        this.buttonsArray = [
          {
            name: 'Close',
            icon: 'arrow-right'
          },
          {
            name: 'Calculate Interest',
            icon: 'table'
          }
        ];
      break;
      case 'Submitted and pending approval':
        this.buttonsArray = [
          {
            name: 'Modify Application',
            icon: 'pencil'
          },
          {
            name: 'Approve',
            icon: 'check'
          }
        ];
        break;
      case 'Approved':
        this.buttonsArray = [
          {
            name: 'Undo Approval',
            icon: 'undo'
          },
          {
            name: 'Activate',
            icon: 'check'
          }
        ];
      break;
      default:
        this.buttonsArray = [];
    }
  }

  setOptions(status: string) {
    switch (status) {
      case 'Active':
      case 'Matured':
        this.optionArray = [
          {
            name: 'Post Interest'
          },
          {
            name: 'Add Charge'
          }
        ];
        break;
      case 'Submitted and pending approval':
        this.optionArray = [
          {
            name: 'Reject'
          },
          {
            name: 'Withdraw By Client'
          },
          {
            name: 'Add Charge'
          },
          {
            name: 'Delete'
          }
        ];
        break;
      case 'Approved':
      default:
        this.optionArray = [];
    }
  }

  addOption(option: {name: string}) {
    this.optionArray.push(option);
  }

}
