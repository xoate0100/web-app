/** Angular Imports */
import { Component, OnInit, ViewChild, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, MatSortHeader } from '@angular/material/sort';
import { MatTableDataSource, MatTable, MatColumnDef, MatHeaderCellDef, MatHeaderCell, MatCellDef, MatCell, MatHeaderRowDef, MatHeaderRow, MatRowDef, MatRow } from '@angular/material/table';

/** Custom Services */
import { SystemService } from '../../system.service';

/** Data Imports */
import { appTableData } from '../app-table-data';

/** Custom Components */
import { ColumnDialogComponent } from '../column-dialog/column-dialog.component';
import { DeleteDialogComponent } from 'app/shared/delete-dialog/delete-dialog.component';
import { MatCard, MatCardContent, MatCardActions } from '@angular/material/card';
import { LayoutDirective, LayoutGapDirective, FlexDirective, LayoutAlignDirective } from '@ngbracket/ngx-layout/flex';
import { MatFormField, MatLabel, MatError } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatSelect } from '@angular/material/select';
import { NgFor, NgIf } from '@angular/common';
import { MatOption } from '@angular/material/autocomplete';
import { MatButton, MatIconButton } from '@angular/material/button';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { HasPermissionDirective } from '../../../directives/has-permission/has-permission.directive';

/**
 * Edit Data Table Component.
 */
@Component({
    selector: 'mifosx-edit-data-table',
    templateUrl: './edit-data-table.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['./edit-data-table.component.scss'],
    imports: [MatCard, ReactiveFormsModule, MatCardContent, LayoutDirective, LayoutGapDirective, MatFormField, FlexDirective, MatLabel, MatInput, MatSelect, NgFor, MatOption, NgIf, MatError, MatButton, FaIconComponent, MatTable, MatSort, MatColumnDef, MatHeaderCellDef, MatHeaderCell, MatSortHeader, MatCellDef, MatCell, MatIconButton, MatHeaderRowDef, MatHeaderRow, MatRowDef, MatRow, MatPaginator, MatCardActions, LayoutAlignDirective, RouterLink, HasPermissionDirective]
})
export class EditDataTableComponent implements OnInit {

  /** Data Table Form. */
  dataTableForm: FormGroup;
  /** Data Table Data. */
  dataTableData: any;
  /** Column Data. */
  columnData: any[];
  /** Application Table Data. */
  appTableData = appTableData;
  /** Boolean to check if form is edited or not. */
  isFormEdited = false;
  /** Data Table Changes Data. */
  dataTableChangesData: {
    apptableName: string,
    dropColumns?: { name: string }[],
    changeColumns: { name: string, newName?: string, code?: string, newCode?: string, mandatory: boolean, length?: number }[],
    addColumns: { name?: string, type?: string, code?: string, mandatory?: boolean, length?: number }[]
  } = { apptableName: '', changeColumns: [], addColumns: [], dropColumns: [] };
  /** Data passed to dialog. */
  dataForDialog: {
    columnName?: string,
    columnDisplayType?: string,
    isColumnPrimaryKey?: boolean,
    columnLength?: string,
    columnCode?: string,
    columnCodes?: any,
    type?: string
  } = {
      columnName: undefined,
      columnDisplayType: undefined,
      isColumnPrimaryKey: undefined,
      columnLength: undefined,
      columnCode: undefined,
      columnCodes: undefined,
      type: undefined
    };
  /** Columns to be displayed in columns table. */
  displayedColumns: string[] = ['name', 'type', 'mandatory', 'length', 'code', 'actions'];
  /** Data source for columns table. */
  dataSource: MatTableDataSource<any>;
  /** Paginator for columns table. */
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  /** Sorter for columns table. */
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  /**
   * Retrieves the data table and column codes data from `resolve`.
   * @param {ActivatedRoute} route Activated Route.
   * @param {SystemService} systemService System Service.
   * @param {Router} router Router for navigation.
   * @param {FormBuilder} formBuilder Form Builder.
   * @param {MatDialog} dialog Dialog Reference.
   */
  constructor(private systemService: SystemService,
              private formBuilder: FormBuilder,
              private route: ActivatedRoute,
              private router: Router,
              private dialog: MatDialog) {
    this.route.data.subscribe((data: any) => {
      this.dataTableData = data.dataTable;
      this.columnData = this.dataTableData.columnHeaderData;
      this.dataForDialog.columnCodes = data.columnCodes;
    });
  }

  /**
   * Creates and sets data table form and columns table.
   */
  ngOnInit() {
    this.initData();
    this.createDataTableForm();
    this.setColumns();
  }

  /**
   * Initializes the data source, paginator and sorter for columns table.
   */
  setColumns() {
    this.dataSource = new MatTableDataSource(this.columnData);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  /**
   * Initializes data table changes and column data.
   */
  initData() {
    this.columnData.shift();
    this.dataTableChangesData.apptableName = this.dataTableData.applicationTableName;
    for (let index = 0; index < this.columnData.length; index++) {
      this.columnData[index].columnDisplayType = this.getColumnType(this.columnData[index].columnDisplayType);
      this.columnData[index].type = 'existing';
    }
  }

  /**
   * Creates the data table form.
   */
  createDataTableForm() {
    this.dataTableForm = this.formBuilder.group({
      'datatableName': [{ value: this.dataTableData.registeredTableName, disabled: true }, Validators.required],
      'apptableName': [this.dataTableData.applicationTableName, Validators.required]
    });
  }

  /**
   * Adds a new column.
   */
  addColumn() {
    this.dataForDialog.columnName = undefined;
    this.dataForDialog.columnDisplayType = undefined;
    this.dataForDialog.isColumnPrimaryKey = false;
    this.dataForDialog.columnLength = undefined;
    this.dataForDialog.columnCode = undefined;
    this.dataForDialog.type = 'new';
    const addColumnDialogRef = this.dialog.open(ColumnDialogComponent, {
      data: this.dataForDialog
    });
    addColumnDialogRef.afterClosed().subscribe((response: any) => {
      if (response !== '') {
        this.isFormEdited = true;
        this.dataTableChangesData.addColumns.push({
          name: response.name,
          type: response.type,
          mandatory: response.mandatory,
          length: response.length,
          code: response.code
        });
        this.columnData.push({
          columnName: response.name,
          columnDisplayType: response.type,
          isColumnPrimaryKey: response.mandatory,
          columnLength: response.length,
          columnCode: response.code,
          type: 'new'
        });
        this.dataSource.connect().next(this.columnData);
      }
    });
  }

  /**
   * Edits column.
   * @param {any} column Column.
   */
  editColumn(column: any) {
    this.dataForDialog.columnName = column.columnName;
    this.dataForDialog.columnDisplayType = column.columnDisplayType;
    this.dataForDialog.isColumnPrimaryKey = column.isColumnPrimaryKey;
    this.dataForDialog.columnLength = column.columnLength;
    this.dataForDialog.columnCode = column.columnCode;
    this.dataForDialog.type = column.type;
    const editColumnDialogRef = this.dialog.open(ColumnDialogComponent, {
      data: this.dataForDialog
    });
    editColumnDialogRef.afterClosed().subscribe((response: any) => {
      if (response !== '') {
        this.isFormEdited = true;
        if (column.type === 'new') {
          this.dataTableChangesData.addColumns[this.dataTableChangesData.addColumns
            .findIndex(newColumn => newColumn.name === column.columnName
                                    && newColumn.type === column.columnDisplayType
                                    && newColumn.mandatory === column.isColumnPrimaryKey)] = {
            name: response.name,
            type: response.type,
            code: response.code,
            mandatory: response.mandatory,
            length: response.length
          };
          this.columnData[this.columnData.indexOf(column)] = {
            columnName: response.name,
            columnDisplayType: response.type,
            isColumnPrimaryKey: response.mandatory,
            columnLength: response.length,
            columnCode: response.code,
            type: 'new'
          };
        } else if (column.type === 'existing') {
          this.columnData[this.columnData.indexOf(column)] = {
            columnName: response.name,
            columnDisplayType: column.columnDisplayType,
            isColumnPrimaryKey: column.isColumnPrimaryKey,
            columnLength: column.columnLength,
            columnCode: column.columnCode,
            type: 'existing'
          };

          const index = this.dataTableChangesData.changeColumns.findIndex(newColumn => newColumn.newName === column.columnName);
          if (index === -1) {
            this.dataTableChangesData.changeColumns.push({
              name: column.columnName,
              newName: response.name,
              code: column.columnCode,
              newCode: response.code,
              mandatory: response.mandatory,
              length: response.length
            });
          } else {
            this.dataTableChangesData.changeColumns[index] = {
              name: column.columnName,
              newName: response.name,
              code: column.columnCode,
              newCode: response.code,
              mandatory: response.mandatory,
              length: response.length
            };
          }
        }
        this.dataSource.connect().next(this.columnData);
      }
    });
  }

  /**
   * Deletes the column.
   * @param {any} column Column.
   */
  deleteColumn(column: any) {
    const deleteColumnDialogRef = this.dialog.open(DeleteDialogComponent, {
      data: { deleteContext: `column ${column.columnName}` }
    });
    deleteColumnDialogRef.afterClosed().subscribe((response: any) => {
      if (response.delete) {
        this.isFormEdited = true;
        this.columnData.splice(this.columnData.indexOf(column), 1);
        this.dataSource.connect().next(this.columnData);
        if (column.type === 'existing') {
          if (!this.dataTableChangesData.dropColumns) {
            this.dataTableChangesData.dropColumns = [];
          }
          this.dataTableChangesData.dropColumns.push({
            name: column.columnName
          });
        } else if (column.type === 'new') {
          this.dataTableChangesData.addColumns!.splice(this.dataTableChangesData.addColumns!
            .findIndex(newColumn => newColumn.name === column.columnName
                                    && newColumn.type === column.columnDisplayType
                                    && newColumn.mandatory === column.isColumnPrimaryKey), 1);
        }
      }
    });
  }

  /**
   * Returns the modified Column Type.
   * @param {string} columnDisplayType Column Display Type.
   * @returns {string} Column Type.
   */
  getColumnType(columnDisplayType: string): string {
    switch (columnDisplayType) {
      case 'INTEGER': {
        return 'Number';
      }
      case 'CODELOOKUP': {
        return 'Dropdown';
      }
      default: {
        return columnDisplayType[0] + columnDisplayType.substr(1).toLowerCase();
      }
    }
  }

  /**
   * Submits the data table form and updates data table,
   * if successful redirects to view updated data table.
   */
  submit() {
    const payload: any = { ...this.dataTableChangesData };
    if (!payload.addColumns?.length) {
      delete payload.addColumns;
    }
    if (!payload.changeColumns?.length) {
      delete payload.changeColumns;
    }
    if (!payload.dropColumns?.length) {
      delete payload.dropColumns;
    }
    this.systemService.updateDataTable(payload, this.dataTableData.registeredTableName)
      .subscribe((response: any) => {
        this.router.navigate(['../'], { relativeTo: this.route });
      });
  }

}
