/** Angular Imports */
import { Component, ViewChild, OnInit, AfterViewInit, ChangeDetectionStrategy } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, MatSortHeader } from '@angular/material/sort';
import { MatTableDataSource, MatTable, MatColumnDef, MatHeaderCellDef, MatHeaderCell, MatCellDef, MatCell, MatHeaderRowDef, MatHeaderRow, MatRowDef, MatRow } from '@angular/material/table';
import { MatTreeNestedDataSource, MatTree, MatTreeNodeDef, MatTreeNode, MatTreeNodeToggle, MatNestedTreeNode, MatTreeNodeOutlet } from '@angular/material/tree';
import { NestedTreeControl } from '@angular/cdk/tree';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, RouterLink } from '@angular/router';

/** rxjs Imports */
import { of } from 'rxjs';

/** Custom Models */
import { GLAccountNode } from './gl-account-node.model';

/** Custom Services */
import { GlAccountTreeService } from './gl-account-tree.service';
import { LayoutDirective, LayoutAlignDirective, LayoutGapDirective, FlexDirective } from '@ngbracket/ngx-layout/flex';
import { MatButtonToggleGroup, MatButtonToggle } from '@angular/material/button-toggle';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { HasPermissionDirective } from '../../directives/has-permission/has-permission.directive';
import { MatButton, MatIconButton } from '@angular/material/button';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatTooltip } from '@angular/material/tooltip';
import { NgIf } from '@angular/common';
import { MatCard, MatCardContent } from '@angular/material/card';

/**
 * Chart of accounts component.
 */
@Component({
    selector: 'mifosx-chart-of-accounts',
    templateUrl: './chart-of-accounts.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['./chart-of-accounts.component.scss'],
    imports: [LayoutDirective, LayoutAlignDirective, LayoutGapDirective, MatButtonToggleGroup, ReactiveFormsModule, MatButtonToggle, FaIconComponent, HasPermissionDirective, MatButton, RouterLink, MatFormField, FlexDirective, MatLabel, MatInput, MatTable, MatSort, MatColumnDef, MatHeaderCellDef, MatHeaderCell, MatSortHeader, MatCellDef, MatCell, MatTooltip, NgIf, MatHeaderRowDef, MatHeaderRow, MatRowDef, MatRow, MatPaginator, MatCard, MatCardContent, MatTree, MatTreeNodeDef, MatTreeNode, MatTreeNodeToggle, MatIconButton, MatNestedTreeNode, MatTreeNodeOutlet]
})
export class ChartOfAccountsComponent implements AfterViewInit, OnInit {

  /** Button toggle group form control for type of view. (list/tree) */
  viewGroup = new FormControl('listView');
  /** GL Account data. */
  glAccountData: any;
  /** Columns to be displayed in chart of accounts table. */
  displayedColumns: string[] = ['name', 'glCode', 'glAccountType', 'disabled', 'manualEntriesAllowed', 'usedAs'];
  /** Data source for chart of accounts table. */
  tableDataSource: MatTableDataSource<any>;
  /** Nested tree control for chart of accounts tree. */
  nestedTreeControl: NestedTreeControl<GLAccountNode>;
  /** Nested tree data source for chart of accounts tree. */
  nestedTreeDataSource: MatTreeNestedDataSource<GLAccountNode>;
  /** Selected GL Account. */
  glAccount: GLAccountNode;

  /** Paginator for chart of accounts table. */
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  /** Sorter for chart of accounts table. */
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  /**
   * Retrieves the gl accounts data from `resolve` and initializes(generates) gl accounts tree.
   * @param {GlAccountTreeService} glAccountTreeService GL Account tree service.
   * @param {ActivatedRoute} route Activated Route.
   */
  constructor(private glAccountTreeService: GlAccountTreeService,
              private route: ActivatedRoute) {
    this.route.data.subscribe((data: any) => {
      this.glAccountData = data.chartOfAccounts;
      glAccountTreeService.initialize(this.glAccountData);
    });
    this.nestedTreeControl = new NestedTreeControl<GLAccountNode>(this._getChildren);
    this.nestedTreeDataSource = new MatTreeNestedDataSource<GLAccountNode>();
  }

  /**
   * Initializes the data source for chart of accounts table and tree.
   */
  ngOnInit() {
    this.tableDataSource = new MatTableDataSource(this.glAccountData);
    this.glAccountTreeService.treeDataChange.subscribe((glAccountTreeData: GLAccountNode[]) => {
      this.nestedTreeDataSource.data = glAccountTreeData;
      this.nestedTreeControl.expand(this.nestedTreeDataSource.data[0]);
      this.nestedTreeControl.dataNodes = glAccountTreeData;
    });
  }

  /**
   * Initializes the paginator and sorter for chart of accounts table.
   */
  ngAfterViewInit() {
    this.tableDataSource.paginator = this.paginator;
    this.tableDataSource.sortingDataAccessor = (glAccount: any, property: any) => {
      switch (property) {
        case 'glAccountType': return glAccount.type.value;
        case 'usedAs': return glAccount.usage.value;
        default: return glAccount[property];
      }
    };
    this.tableDataSource.sort = this.sort;
  }

  /**
   * Filters data in chart of accounts table based on passed value.
   * @param {string} filterValue Value to filter data.
   */
  applyFilter(filterValue: string) {
    this.tableDataSource.filter = filterValue.trim().toLowerCase();
  }

  /**
   * View selected gl account.
   * @param {GLAccountNode} glAccount GL Account to be viewed.
   */
  viewGLAccountNode(glAccount: GLAccountNode) {
    if (glAccount.glCode) {
      this.glAccount = glAccount;
    } else {
      delete (this as any).glAccount;
    }
  }

  /**
   * Checks if selected node in tree has children.
   */
  hasNestedChild = (_: number, node: GLAccountNode) => node.children.length;

  /**
   * Gets the children of selected node in tree.
   */
  private _getChildren = (node: GLAccountNode) => of(node.children);

}
