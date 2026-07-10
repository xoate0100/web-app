import {$,U,y as yQe,n as nXe,N as NQe,_ as _te,O as O0e,i as ie,d as de,a as O,R as Re,T,z as zs$1,G as Gr$1,b as yF,c as N,e as zB,Q as Qi$1,m as mi$1,w as ws$1,f as $$1,A as AI,r,g as m,h as _Ne,j as zOe,C as CNe,I as Iv,H as Hn,k as mV,l as fi$1,E as En,o as rr$1,p as r$1,s,q as g,t as In,B as Be,u as B,v as bc$1,x as i3,D as ii,Y as Yo$1,F as go$1,J as wc$1,S as SBe,K as Sn$1,L as Sje,M as Aje,P as Lje,V as Tje,W as zje,X as Eje,Z as kje,a0 as Pc$1,a1 as l1$1,a2 as Vh,a3 as zfe,a4 as Nfe,a5 as ia$1,a6 as ty,a7 as bp$1,a8 as T0e,a9 as XQe,aa as yte,ab as rV,ac as x,ad as b,ae as fe,af as w,ag as nee,ah as Ie,ai as Nt,aj as D,ak as z,al as y9,am as ree,an as Y0$1,ao as $o$1,ap as Mc,aq as R2,ar as uqe,as as mqe,at as bqe,au as pqe,av as fqe,aw as xqe,ax as gqe,ay as vqe,az as Cqe,aA as Mqe,aB as Dt,aC as vk,aD as it,aE as bk,aF as Oc$1,aG as eA,aH as Ri$1,aI as C2e,aJ as Ac$1,aK as wUe,aL as MUe,aM as DI,aN as Cc$1,aO as Na$1,aP as k2,aQ as uo$1,aR as _3,aS as re,aT as ki$1,aU as Li$1,aV as ze,aW as j,aX as H,aY as hqe,aZ as yqe,a_ as _qe,a$ as wqe,b0 as Rl$1,b1 as zl$1,b2 as uv,b3 as Pl$1,b4 as Iue,b5 as yWe,b6 as P4e,b7 as Pe,b8 as Th,b9 as Ti$1,ba as zT,bb as dh,bc as Mv,bd as Br$1,be as O3,bf as sv,bg as ja$1,bh as Wne,bi as S6,bj as Fi$1,bk as ci$1,bl as Oi$1,bm as li$1,bn as oV,bo as fAe,bp as coe,bq as YWe,br as KWe,bs as Z,bt as gc$1,bu as A6,bv as yo$1,bw as Kt,bx as cV,by as see,bz as sfe,bA as Ky,bB as cfe,bC as ofe,bD as YNe,bE as iTe,bF as K,bG as aee,bH as C9,bI as kt,bJ as ot,bK as at,bL as eE,bM as tE}from'./main.js';import {I}from'./chunk-BsVxc90l.js';var E=(()=>{class e{http;constructor(a){this.http=a;}getLoanChargeTemplateResource(a){return this.http.get(`/loans/${a}/charges/template`)}getLoanActionTemplate(a,l){let r=new fi$1().set("command",l);return this.http.get(`/loans/${a}/transactions/template`,{params:r})}getLoanAccountResource(a,l){let r=new fi$1().set("associations",l);return this.http.get(`/loans/${a}`,{params:r})}getGuarantorTemplate(a){return this.http.get(`/loans/${a}/guarantors/template`)}createNewGuarantor(a,l){return this.http.post(`/loans/${a}/guarantors`,l)}deleteGuarantor(a,l){return this.http.delete(`/loans/${a}/guarantors/${l}`)}deleteLoanAccount(a){return this.http.delete(`/loans/${a}`)}getLoanTemplate(a){let l=new fi$1().set("fields","id,loanOfficerId,loanOfficerOptions").set("staffInSelectedOfficeOnly","true").set("template","true");return this.http.get(`/loans/${a}`,{params:l})}createLoanCharge(a,l,r){return this.http.post(`/loans/${a}/${l}`,r)}getLoanAccountDetails(a){return this.http.get(`/loans/${a}`)}getLoanCollateralTemplate(a){return this.http.get(`/loans/${a}/collaterals/template`)}createLoanCollateral(a,l){return this.http.post(`/loans/${a}/collaterals`,l)}getLoanAccountAssociationDetails(a){let l=new fi$1().set("associations","all").set("exclude","guarantors,futureSchedule");return this.http.get(`/loans/${a}`,{params:l})}getApproveAssociationsDetails(a){let l=new fi$1().set("associations","multiDisburseDetails");return this.http.get(`/loans/${a}`,{params:l})}getLoanNotes(a){return this.http.get(`/loans/${a}/notes`)}createLoanNote(a,l){return this.http.post(`/loans/${a}/notes`,l)}editLoanNote(a,l,r){return this.http.put(`/loans/${a}/notes/${l}`,r)}deleteLoanNote(a,l){return this.http.delete(`/loans/${a}/notes/${l}`)}submitLoanActionButton(a,l,r){let d=new fi$1().set("command",r);return this.http.post(`/loans/${a}/transactions`,l,{params:d})}getLoanScreenReportsData(){let a=new fi$1().set("entityId","1").set("typeId","0");return this.http.get("/templates",{params:a})}getLoanDataTables(){let a=new fi$1().set("apptable","m_loan");return this.http.get("/datatables",{params:a})}getLoanDatatable(a,l){let r=new fi$1().set("genericResultSet","true");return this.http.get(`/datatables/${l}/${a}`,{params:r})}addLoanDatatableEntry(a,l,r){let d=new fi$1().set("genericResultSet","true");return this.http.post(`/datatables/${l}/${a}`,r,{params:d})}editLoanDatatableEntry(a,l,r){let d=new fi$1().set("genericResultSet","true");return this.http.put(`/datatables/${l}/${a}`,r,{params:d})}deleteDatatableContent(a,l){let r=new fi$1().set("genericResultSet","true");return this.http.delete(`/datatables/${l}/${a}`,{params:r})}loanActionButtons(a,l,r){let d=new fi$1().set("command",l);return this.http.post(`/loans/${a}`,r,{params:d})}getForeclosureData(a,l){let r=new fi$1().set("command",l.command).set("dateFormat",l.dateFormat).set("locale",l.locale).set("transactionDate",l.transactionDate);return this.http.get(`/loans/${a}/transactions/template`,{params:r})}loanForclosureData(a,l){let r=new fi$1().set("command","foreclosure");return this.http.post(`/loans/${a}/transactions`,l,{params:r})}rescheduleLoanTemplate(){return this.http.get("/rescheduleloans/template")}submitRescheduleData(a){let l=new fi$1().set("command","reschedule");return this.http.post("/rescheduleloans",a,{params:l})}getLoansAccountTemplateResource(a,l){let r=new fi$1().set("activeOnly","true").set("clientId",a).set("staffInSelectedOfficeOnly","true").set("templateType","individual");return r=l?r.set("productId",l):r,this.http.get("/loans/template",{params:r})}getLoansAccountAndTemplateResource(a){let l=new fi$1().set("associations","charges,collateral,meeting,multiDisburseDetails").set("staffInSelectedOfficeOnly","true").set("template","true");return this.http.get(`/loans/${a}`,{params:l})}getLoansCollateralTemplateResource(a){let l=new fi$1().set("fields","id, loanCollateralOptions").set("productId",a).set("templateType","collateral");return this.http.get("/loans/template",{params:l})}createLoansAccount(a){return this.http.post("/loans",a)}getLoanDocuments(a){return this.http.get(`/loans/${a}/documents`)}deleteLoanDocument(a,l){return this.http.delete(`/loans/${a}/documents/${l}`)}loadLoanDocument(a,l){return this.http.post(`/loans/${a}/documents`,l)}getStandingInstructions(a,l,r,d,h){let I=new fi$1().set("clientId",a).set("clientName",l).set("fromAccountId",r).set("fromAccountType","1").set("locale",d).set("dateFormat",h).set("limit","14").set("offset","0");return this.http.get("/standinginstructions",{params:I})}updateLoansAccount(a,l){return this.http.put(`/loans/${a}`,l)}getTemplateData(a,l){let r=new fi$1().set("loanId",l);return this.http.post(`/templates/${a}`,{},{params:r,responseType:"text"})}getLoanApprovalTemplate(a){let l=new fi$1().set("templateType","approval");return this.http.get(`/loans/${a}/template`,{params:l})}guarantorAccountResource(a,l){let r=new fi$1().set("clientId",l);return this.http.get(`/loans/${a}/guarantors/accounts/template`,{params:r})}getLoansAccountCharge(a,l){return this.http.get(`/loans/${a}/charges/${l}`)}executeLoansAccountChargesCommand(a,l,r,d){let h=new fi$1().set("command",l);return this.http.post(`/loans/${a}/charges/${d}`,r,{params:h})}editLoansAccountCharge(a,l,r){return this.http.put(`/loans/${a}/charges/${r}`,l)}deleteLoansAccountCharge(a,l){return this.http.delete(`/loans/${a}/charges/${l}`)}getLoansAccountTransaction(a,l){return this.http.get(`/loans/${a}/transactions/${l}`)}getLoansAccountTransactionTemplate(a,l){let r=new fi$1().set("template","true");return this.http.get(`/loans/${a}/transactions/${l}`,{params:r})}executeLoansAccountTransactionsCommand(a,l,r,d){let h=new fi$1().set("command",l);return d?this.http.post(`/loans/${a}/transactions/${d}`,r,{params:h}):this.http.post(`/loans/${a}/transactions`,r,{params:h})}static \u0275fac=function(l){return new(l||e)(ie(bc$1))};static \u0275prov=de({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();var on=class{optionArray;buttonsArray;constructor(m){this.setOptions(m),this.setButtons(m);}get singleButtons(){return this.buttonsArray}get options(){return this.optionArray}setButtons(m){switch(m){case "Active":this.buttonsArray=[{name:"Add Loan Charge",icon:"fa fa-plus",taskPermissionName:"CREATE_LOANCHARGE"},{name:"Foreclosure",icon:"icon-dollar",taskPermissionName:"FORECLOSURE_LOAN"},{name:"Make Repayment",icon:"fa fa-dollar",taskPermissionName:"REPAYMENT_LOAN"},{name:"Undo Disbursal",icon:"fa fa-undo",taskPermissionName:"DISBURSALUNDO_LOAN"}];break;case "Submitted and pending approval":this.buttonsArray=[{name:"Add Loan Charge",icon:"fa fa-plus",taskPermissionName:"CREATE_LOANCHARGE"},{name:"Approve",icon:"fa fa-check",taskPermissionName:"APPROVE_LOAN"},{name:"Modify Application",icon:"fa fa-pincel-square-o",taskPermissionName:"UPDATE_LOAN"},{name:"Reject",icon:"fa fa-times",taskPermissionName:"REJECT_LOAN"}];break;case "Approved":this.buttonsArray=[{name:"Disburse",icon:"fa fa-flag",taskPermissionName:"DISBURSE_LOAN"},{name:"Disburse to Savings",icon:"fa fa-flag",taskPermissionName:"DISBURSETOSAVINGS_LOAN"},{name:"Undo Approval",icon:"fa fa-undo",taskPermissionName:"APPROVALUNDO_LOAN"}];break;case "Overpaid":this.buttonsArray=[{name:"Transfer Funds",icon:"fa fa-exchange",taskPermissionName:"CREATE_ACCOUNTTRANSFER"}];break;case "Closed (written off)":this.buttonsArray=[{name:"Recovery Payment",icon:"fa fa-briefcase",taskPermissionName:"RECOVERYPAYMENT_LOAN"}];break;default:this.buttonsArray=[];}}setOptions(m){switch(m){case "Active":this.optionArray=[{name:"Waive Interest",taskPermissionName:"WAIVEINTERESTPORTION_LOAN"},{name:"Reschedule",taskPermissionName:"CREATE_RESCHEDULELOAN"},{name:"Write Off",taskPermissionName:"WRITEOFF_LOAN"},{name:"Close (as Rescheduled)",taskPermissionName:"CLOSEASRESCHEDULED_LOAN"},{name:"Close",taskPermissionName:"CLOSE_LOAN"},{name:"Loan Screen Report",taskPermissionName:"READ_LOAN"},{name:"View Guarantors",taskPermissionName:"READ_GUARANTOR"},{name:"Create Guarantor",taskPermissionName:"CREATE_GUARANTOR"},{name:"Recover From Guarantor",taskPermissionName:"RECOVERGUARANTEES_LOAN"}];break;case "Submitted and pending approval":this.optionArray=[{name:"Withdrawn by client",taskPermissionName:"WITHDRAW_LOAN"},{name:"Delete",taskPermissionName:"DELETE_LOAN"},{name:"Add Collateral",taskPermissionName:"CREATE_COLLATERAL"},{name:"View Guarantors",taskPermissionName:"READ_GUARANTOR"},{name:"Create Guarantor",taskPermissionName:"CREATE_GUARANTOR"},{name:"Loan Screen Reports",taskPermissionName:"READ_LOAN"}];break;case "Approved":this.optionArray=[{name:"Add Loan Charge",taskPermissionName:"CREATE_LOANCHARGE"},{name:"View Guarantors",taskPermissionName:"READ_GUARANTOR"},{name:"Create Guarantor",taskPermissionName:"CREATE_GUARANTOR"},{name:"Loan Screen Report",taskPermissionName:"READ_LOAN"}];break;default:this.optionArray=[];}}addOption(m){this.optionArray.push(m);}addButton(m){this.buttonsArray.push(m);}};var ca=()=>["./general"],sa=()=>["./accountdetail"],pa=()=>["./repayment-schedule"],da=()=>["./loan-documents"],ua=()=>["./original-schedule"],fa=()=>["./transactions"],xa=()=>["./loan-collateral"],_a=()=>["./loan-tranche-details"],Ca=()=>["./overdue-charges"],va=()=>["./floating-interest-rates"],ga=()=>["./charges"],ha=()=>["./notes"],Sa=()=>["./standing-instruction"],ya=e=>["./datatables",e];function Da(e,m){if(e&1&&(x(0,"span"),b(1),w()),e&2){let a=K();D(),it(" Client Name: ",a.loanDetailsData.clientName," ");}}function ba(e,m){if(e&1&&(x(0,"span"),b(1),w()),e&2){let a=K();D(),it(" Group Name: ",a.loanDetailsData.group.name," ");}}function Ta(e,m){e&1&&(x(0,"span"),b(1,"Not Provided"),w());}function Ea(e,m){if(e&1&&(x(0,"div",33),b(1,`
			  `),x(2,"h3"),b(3," Loan Account OverView "),w(),b(4,`
				`),x(5,"span"),b(6),nee(7,"number"),w(),fe(8,"br"),b(9,`
				  `),x(10,"span"),b(11),nee(12,"number"),Ie(13,Ta,2,0,"span",24),b(14,`
				`),w(),fe(15,"br"),b(16,`
			`),w()),e&2){let a=K();D(6),Y0$1("Current Balance: ",a.loanDetailsData.currency.displaySymbol," ",ree(7,4,a.loanDetailsData.summary.totalOutstanding)),D(5),it("Arrears By: ",ree(12,6,a.loanDetailsData.summary.totalOverdue),`
				  `),D(2),z("ngIf",!(a.loanDetailsData.summary.totalOverdue>=0));}}function Aa(e,m){if(e&1){let a=Kt();x(0,"button",36),re("click",function(){ot(a);let r=K().$implicit,d=K();return at(d.loanAction(r.name))}),b(1,`
		  `),fe(2,"i"),b(3),w();}if(e&2){let a=K().$implicit;D(2),kt(a.icon),D(),it(" ",a.name," ");}}function Ia(e,m){if(e&1&&(Rl$1(0,34),b(1,`
		`),Ie(2,Aa,4,3,"button",35),b(3,`
	  `),zl$1()),e&2){let a=m.$implicit;D(2),z("mifosxHasPermission",a.taskPermissionName);}}function La(e,m){if(e&1){let a=Kt();x(0,"button",39),re("click",function(){ot(a);let r=K().$implicit,d=K(2);return at(d.loanAction(r.name))}),b(1),w();}if(e&2){let a=K().$implicit;D(),Dt(a.name);}}function Fa(e,m){if(e&1&&(x(0,"span"),b(1,`
			  `),Ie(2,La,2,1,"button",38),b(3,`
			`),w()),e&2){let a=m.$implicit;D(2),z("mifosxHasPermission",a.taskPermissionName);}}function wa(e,m){if(e&1&&(Rl$1(0,34),b(1,`
		`),x(2,"button",37),b(3,"More"),w(),b(4,`
		  `),x(5,"mat-menu",null,4),b(7,`
			`),Ie(8,Fa,4,1,"span",32),b(9,`
		  `),w(),b(10,`
	  `),zl$1()),e&2){let a=Nt(6),l=K();D(2),z("matMenuTriggerFor",a),D(6),z("ngForOf",l.buttonConfig.options);}}function Pa(e,m){if(e&1&&(Rl$1(0),b(1,`
		`),x(2,"a",30,5),b(4,`
		  Original Schedule
		`),w(),b(5,`
	  `),zl$1()),e&2){let a=Nt(3);D(2),z("routerLink",$o$1(2,ua))("active",a.isActive);}}function Ra(e,m){if(e&1&&(Rl$1(0),b(1,`
		`),x(2,"a",30,6),b(4,`
		  Transactions
		`),w(),b(5,`
	  `),zl$1()),e&2){let a=Nt(3);D(2),z("routerLink",$o$1(2,fa))("active",a.isActive);}}function Oa(e,m){if(e&1&&(Rl$1(0),b(1,`
		`),x(2,"a",30,7),b(4,`
	      Loan Collateral Details
		`),w(),b(5,`
	  `),zl$1()),e&2){let a=Nt(3);D(2),z("routerLink",$o$1(2,xa))("active",a.isActive);}}function Ma(e,m){if(e&1&&(Rl$1(0),b(1,`
		`),x(2,"a",30,8),b(4,`
		  Loan Tranche Details
		`),w(),b(5,`
      `),zl$1()),e&2){let a=Nt(3);D(2),z("routerLink",$o$1(2,_a))("active",a.isActive);}}function Na(e,m){if(e&1&&(Rl$1(0),b(1,`
		`),x(2,"a",30,9),b(4,`
			Overdue Charges
		`),w(),b(5,`
	  `),zl$1()),e&2){let a=Nt(3);D(2),z("routerLink",$o$1(2,Ca))("active",a.isActive);}}function ka(e,m){if(e&1&&(Rl$1(0),b(1,`
		`),x(2,"a",30,10),b(4,`
			Floating Interest Rates
		`),w(),b(5,`
	  `),zl$1()),e&2){let a=Nt(3);D(2),z("routerLink",$o$1(2,va))("active",a.isActive);}}function Ga(e,m){if(e&1&&(Rl$1(0),b(1,`
		`),x(2,"a",30,11),b(4,`
		  Charges
		`),w(),b(5,`
	  `),zl$1()),e&2){let a=Nt(3);D(2),z("routerLink",$o$1(2,ga))("active",a.isActive);}}function Ba(e,m){if(e&1&&(x(0,"a",30,12),b(2,`
		Notes
	  `),w()),e&2){let a=Nt(1);z("routerLink",$o$1(2,ha))("active",a.isActive);}}function ja(e,m){if(e&1&&(Rl$1(0),b(1,`
		`),x(2,"a",30,13),b(4,`
			Standing Instruction
		`),w(),b(5,`
	`),zl$1()),e&2){let a=Nt(3);D(2),z("routerLink",$o$1(2,Sa))("active",a.isActive);}}function Va(e,m){if(e&1&&(x(0,"a",30,14),b(2),w()),e&2){let a=Nt(1),l=K().$implicit;z("routerLink",gc$1(3,ya,l.registeredTableName))("active",a.isActive),D(2),it(`
          `,l.registeredTableName,`
        `);}}function qa(e,m){if(e&1&&(Rl$1(0),b(1,`
        `),Ie(2,Va,3,5,"a",31),b(3,`
      `),zl$1()),e&2){let a=m.$implicit;D(2),z("mifosxHasPermission","READ_"+a.registeredTableName);}}var oi=(()=>{class e{route;router;loansService;dialog;loanDetailsData;loanDatatables;recalculateInterest;status;loanId;clientId;buttonConfig;constructor(a,l,r,d){this.route=a,this.router=l,this.loansService=r,this.dialog=d,this.route.data.subscribe(h=>{this.loanDetailsData=h.loanDetailsData,this.loanDatatables=h.loanDatatables;}),this.loanId=this.route.snapshot.params.loanId,this.clientId=this.loanDetailsData.clientId;}ngOnInit(){this.recalculateInterest=this.loanDetailsData.recalculateInterest||true,this.status=this.loanDetailsData.status.value,this.setConditionalButtons();}setConditionalButtons(){this.buttonConfig=new on(this.status),this.status==="Submitted and pending approval"?(this.buttonConfig.addOption({name:this.loanDetailsData.loanOfficerName?"Change Loan Officer":"Assign Loan Officer",taskPermissionName:"DISBURSE_LOAN"}),this.loanDetailsData.isVariableInstallmentsAllowed&&this.buttonConfig.addOption({name:"Edit Repayment Schedule",taskPermissionName:"ADJUST_REPAYMENT_SCHEDULE"})):this.status==="Approved"?this.buttonConfig.addButton({name:this.loanDetailsData.loanOfficerName?"Change Loan Officer":"Assign Loan Officer",icon:"fa fa-user",taskPermissionName:"DISBURSE_LOAN"}):this.status==="Active"&&(this.loanDetailsData.canDisburse&&(this.buttonConfig.addButton({name:"Disburse",icon:"fa fa-flag",taskPermissionName:"DISBURSE_LOAN"}),this.buttonConfig.addButton({name:"Disburse To Savings",icon:"fa fa-flag",taskPermissionName:"DISBURSETOSAVINGS_LOAN"})),this.loanDetailsData.loanOfficerName||this.buttonConfig.addButton({name:"Assign Loan Officer",icon:"fa fa-user",taskPermissionName:"UPDATELOANOFFICER_LOAN"}),this.recalculateInterest&&this.buttonConfig.addButton({name:"Prepay Loan",icon:"fa fa-money",taskPermissionName:"REPAYMENT_LOAN"}));}loanAction(a){switch(a){case "Recover From Guarantor":this.recoverFromGuarantor();break;case "Delete":this.deleteLoanAccount();break;case "Modify Application":this.router.navigate(["edit-loans-account"],{relativeTo:this.route});break;case "Transfer Funds":let l={loanId:this.loanId,accountType:"fromloans"};this.router.navigate(["transfer-funds/make-account-transfer"],{relativeTo:this.route,queryParams:l});break;default:this.router.navigate(["actions",a],{relativeTo:this.route});break}}recoverFromGuarantor(){this.dialog.open(zOe,{data:{heading:"Recover from Guarantor",dialogContext:"Are you sure you want recover from Guarantor",type:"Mild"}}).afterClosed().subscribe(l=>{l.confirm&&this.loansService.loanActionButtons(this.loanId,"recoverGuarantees").subscribe(()=>{this.reload();});});}deleteLoanAccount(){this.dialog.open(CNe,{data:{deleteContext:`with loan id: ${this.loanId}`}}).afterClosed().subscribe(l=>{l.delete&&this.loansService.deleteLoanAccount(this.loanId).subscribe(()=>{this.router.navigate(["../../"],{relativeTo:this.route});});});}reload(){let a=this.clientId,l=this.router.url;this.router.navigateByUrl(`/clients/${a}/loans-accounts`,{skipLocationChange:true}).then(()=>this.router.navigate([l]));}static \u0275fac=function(l){return new(l||e)(T(zs$1),T(Gr$1),T(E),T(Iv))};static \u0275cmp=N({type:e,selectors:[["mifosx-loans-view"]],standalone:false,decls:96,vars:35,consts:[["general","routerLinkActive"],["accountdetail","routerLinkActive"],["repaymentSchedule","routerLinkActive"],["loanDocuments","routerLinkActive"],["More","matMenu"],["originalSchedule","routerLinkActive"],["transactions","routerLinkActive"],["loanCollateralDetails","routerLinkActive"],["loanTrancheDetails","routerLinkActive"],["overduecharges","routerLinkActive"],["floatingInterestRates","routerLinkActive"],["charges","routerLinkActive"],["notes","routerLinkActive"],["standingInstruction","routerLinkActive"],["datatable","routerLinkActive"],[1,"loan-card"],["fxLayout","column",1,"header"],[1,"header-title-group"],[1,"profile-image-container"],["mat-card-md-image","","matTooltip","Loans Account",1,"profile-image",3,"src"],[1,"mat-typography","loan-card-title"],["fxLayout","row","fxLayout.lt-md","column"],["fxFlex","50%"],[1,"fa","fa-stop",3,"matTooltip","ngClass"],[4,"ngIf"],["class","loansOverview mat-typography","fxFlex","50%",4,"ngIf"],[1,"loan-actions"],["class","loan-span",4,"ngFor","ngForOf"],["class","loan-span",4,"ngIf"],["mat-tab-nav-bar","",1,"navigation-tabs"],["mat-tab-link","","routerLinkActive","",3,"routerLink","active"],["mat-tab-link","","routerLinkActive","",3,"routerLink","active",4,"mifosxHasPermission"],[4,"ngFor","ngForOf"],["fxFlex","50%",1,"loansOverview","mat-typography"],[1,"loan-span"],["mat-raised-button","",3,"click",4,"mifosxHasPermission"],["mat-raised-button","",3,"click"],["mat-raised-button","",3,"matMenuTriggerFor"],["mat-menu-item","",3,"click",4,"mifosxHasPermission"],["mat-menu-item","",3,"click"]],template:function(l,r){if(l&1&&(x(0,"mat-card",15),b(1,`

  `),x(2,"mat-card-header",16),b(3,`

	`),x(4,"mat-card-title-group",17),b(5,`

	`),x(6,"div",18),b(7,`
		`),x(8,"div"),b(9,`
			`),fe(10,"img",19),b(11,`
		`),w(),b(12,`
	`),w(),b(13,`

	  `),x(14,"div",20),b(15,`
	    `),x(16,"mat-card-title"),b(17,`
		  `),x(18,"div",21),b(19,`

			`),x(20,"div",22),b(21,`
				`),x(22,"h3"),b(23,`
				  `),fe(24,"i",23),nee(25,"statusLookup"),b(26),fe(27,"br"),b(28,`
				  `),Ie(29,Da,2,1,"span",24),b(30," "),fe(31,"br"),b(32,`
				  `),Ie(33,ba,2,1,"span",24),b(34,`
				`),w(),b(35,`
			`),w(),b(36,`

			`),Ie(37,Ea,17,8,"div",25),b(38,`

		  `),w(),b(39,`
		`),w(),b(40,`
	  `),w(),b(41,`
	`),w(),b(42,`

	`),x(43,"mat-card-actions",26),b(44,`

	  `),Ie(45,Ia,4,1,"ng-container",27),b(46,`

	  `),Ie(47,wa,11,2,"ng-container",28),b(48,`

	`),w(),b(49,`

  `),w(),b(50,`

  `),x(51,"mat-card-content"),b(52,`
    `),x(53,"nav",29),b(54,`
  	  `),x(55,"a",30,0),b(57,`
		General
	  `),w(),b(58,`
	  `),x(59,"a",30,1),b(61,`
		Account Details
	  `),w(),b(62,`
	  `),Ie(63,Pa,6,3,"ng-container",24),b(64,`
	  `),x(65,"a",30,2),b(67,`
		Repayment Schedule
	  `),w(),b(68,`
	  `),Ie(69,Ra,6,3,"ng-container",24),b(70,`
	  `),Ie(71,Oa,6,3,"ng-container",24),b(72,`
	  `),Ie(73,Ma,6,3,"ng-container",24),b(74,`
	  `),Ie(75,Na,6,3,"ng-container",24),b(76,`
	  `),Ie(77,ka,6,3,"ng-container",24),b(78,`
	  `),Ie(79,Ga,6,3,"ng-container",24),b(80,`
		`),x(81,"a",30,3),b(83,`
			Loan Documents
		`),w(),b(84,`
	  `),Ie(85,Ba,3,3,"a",31),b(86,`
	`),Ie(87,ja,6,3,"ng-container",24),b(88,`
	  `),Ie(89,qa,4,1,"ng-container",32),b(90,`
    `),w(),b(91,`
    `),fe(92,"router-outlet"),b(93,`
  `),w(),b(94,`

`),w(),b(95,`
`)),l&2){let d=Nt(56),h=Nt(60),I=Nt(66),R=Nt(82);D(10),z("src","assets/images/loans_account_placeholder.png",eE),D(14),z("matTooltip",y9(r.loanDetailsData.status.value))("ngClass",r.loanDetailsData.inArrears?"status-active-overdue":ree(25,29,r.loanDetailsData.status.code)),D(2),Y0$1(`
				  Loan Product: `,r.loanDetailsData.loanProductName,"(#",r.loanDetailsData.accountNo,`)
				  `),D(3),z("ngIf",r.loanDetailsData.clientName),D(4),z("ngIf",r.loanDetailsData.group),D(4),z("ngIf",r.loanDetailsData.summary),D(8),z("ngForOf",r.buttonConfig.singleButtons),D(2),z("ngIf",r.buttonConfig.options.length),D(8),z("routerLink",$o$1(31,ca))("active",d.isActive),D(4),z("routerLink",$o$1(32,sa))("active",h.isActive),D(4),z("ngIf",r.loanDetailsData.originalSchedule),D(2),z("routerLink",$o$1(33,pa))("active",I.isActive),D(4),z("ngIf",r.loanDetailsData.transactions),D(2),z("ngIf",r.loanDetailsData.collateral),D(2),z("ngIf",r.loanDetailsData.multiDisburseLoan),D(2),z("ngIf",r.loanDetailsData.overdueCharges.length>0),D(2),z("ngIf",r.loanDetailsData.isLoanProductLinkedToFloatingRate),D(2),z("ngIf",r.loanDetailsData.charges),D(2),z("routerLink",$o$1(34,da))("active",R.isActive),D(4),z("mifosxHasPermission","READ_LOANNOTE"),D(2),z("ngIf",r.loanDetailsData.clientId),D(2),z("ngForOf",r.loanDatatables);}},dependencies:[i3,ii,Yo$1,go$1,wc$1,SBe,Sn$1,Sje,Aje,Lje,Tje,zje,Eje,kje,Pc$1,l1$1,Vh,zfe,Nfe,ia$1,ty,bp$1,T0e,XQe,yte,rV],styles:[".loan-card[_ngcontent-%COMP%]{margin:0 auto;max-width:80rem;width:90%;padding:0}.loan-card[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]{padding:1%}.loan-card[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .header-title-group[_ngcontent-%COMP%]   .loan-card-title[_ngcontent-%COMP%]{color:#fff;width:90%}.loan-card[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .header-title-group[_ngcontent-%COMP%]   .loan-card-title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#fff}.loan-card[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .profile-image-container[_ngcontent-%COMP%]{margin:1%}.loan-card[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .profile-image-container[_ngcontent-%COMP%]   .profile-image[_ngcontent-%COMP%]{object-fit:cover;border-radius:20px}.loan-card[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .loan-actions[_ngcontent-%COMP%]{align-self:flex-end;margin:0 1%}.loan-card[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .loan-span[_ngcontent-%COMP%]{margin:0 .5%}.loan-card[_ngcontent-%COMP%]   .navigation-tabs[_ngcontent-%COMP%]{overflow:auto}.loansOverview[_ngcontent-%COMP%]{font-size:14px}"],changeDetection:1})}return e})();function Ha(e,m){if(e&1&&(Rl$1(0),b(1,`
    `),x(2,"h3"),b(3,"Performance History"),w(),b(4,`
    `),x(5,"div",2),b(6,`
      `),x(7,"p"),b(8),w(),x(9,"p"),b(10),nee(11,"date"),w(),b(12,`
    `),w(),b(13,`
  `),zl$1()),e&2){let a=K();D(8),it(`
        # of Repayments :`,a.loanDetails?.numberOfRepayments,`
      `),D(2),it(`
        Maturity Date :`,ree(11,2,a.loanDetails==null?null:a.loanDetails.timeline.expectedMaturityDate),`
      `);}}function $a(e,m){e&1&&(x(0,"th",15),b(1,"  "),w());}function Wa(e,m){if(e&1&&(x(0,"td",16),b(1),w()),e&2){let a=m.$implicit;D(),it(" ",a.property," ");}}function Ua(e,m){e&1&&(x(0,"th",15),b(1," Original "),w());}function za(e,m){if(e&1&&(x(0,"td",16),b(1),nee(2,"number"),w()),e&2){let a=m.$implicit;D(),it(" ",ree(2,1,a.original)," ");}}function Qa(e,m){e&1&&(x(0,"th",15),b(1," Paid "),w());}function Ya(e,m){if(e&1&&(x(0,"td",16),b(1),nee(2,"number"),w()),e&2){let a=m.$implicit;D(),it(" ",ree(2,1,a.paid)," ");}}function Ja(e,m){e&1&&(x(0,"th",15),b(1," Waived "),w());}function Ka(e,m){if(e&1&&(x(0,"td",16),b(1),nee(2,"number"),w()),e&2){let a=m.$implicit;D(),it(" ",ree(2,1,a.waived)," ");}}function Xa(e,m){e&1&&(x(0,"th",15),b(1," Written Off "),w());}function Za(e,m){if(e&1&&(x(0,"td",16),b(1),nee(2,"number"),w()),e&2){let a=m.$implicit;D(),it(" ",ree(2,1,a.writtenOff)," ");}}function to(e,m){e&1&&(x(0,"th",15),b(1," Outstanding "),w());}function eo(e,m){if(e&1&&(x(0,"td",16),b(1),nee(2,"number"),w()),e&2){let a=m.$implicit;D(),it(" ",ree(2,1,a.outstanding)," ");}}function no(e,m){e&1&&(x(0,"th",15),b(1," Over Due "),w());}function io(e,m){if(e&1&&(x(0,"td",16),b(1),nee(2,"number"),w()),e&2){let a=m.$implicit;D(),it(" ",ree(2,1,a.overdue)," ");}}function ao(e,m){e&1&&fe(0,"tr",17);}function oo(e,m){e&1&&fe(0,"tr",18);}function ro(e,m){if(e&1&&(x(0,"div"),b(1,`

    `),x(2,"h3"),b(3," Loan Summary "),w(),b(4,`

    `),x(5,"table",3),b(6,`
      `),Rl$1(7,4),b(8,`
        `),Ie(9,$a,2,0,"th",5),b(10,`
        `),Ie(11,Wa,2,1,"td",6),b(12,`
      `),zl$1(),b(13,`

      `),Rl$1(14,7),b(15,`
        `),Ie(16,Ua,2,0,"th",5),b(17,`
        `),Ie(18,za,3,3,"td",6),b(19,`
      `),zl$1(),b(20,`

      `),Rl$1(21,8),b(22,`
        `),Ie(23,Qa,2,0,"th",5),b(24,`
        `),Ie(25,Ya,3,3,"td",6),b(26,`
      `),zl$1(),b(27,`

      `),Rl$1(28,9),b(29,`
        `),Ie(30,Ja,2,0,"th",5),b(31,`
        `),Ie(32,Ka,3,3,"td",6),b(33,`
      `),zl$1(),b(34,`

      `),Rl$1(35,10),b(36,`
        `),Ie(37,Xa,2,0,"th",5),b(38,`
        `),Ie(39,Za,3,3,"td",6),b(40,`
      `),zl$1(),b(41,`

      `),Rl$1(42,11),b(43,`
        `),Ie(44,to,2,0,"th",5),b(45,`
        `),Ie(46,eo,3,3,"td",6),b(47,`
      `),zl$1(),b(48,`

      `),Rl$1(49,12),b(50,`
        `),Ie(51,no,2,0,"th",5),b(52,`
        `),Ie(53,io,3,3,"td",6),b(54,`
      `),zl$1(),b(55,`

      `),Ie(56,ao,1,0,"tr",13),b(57,`
      `),Ie(58,oo,1,0,"tr",14),b(59,`
    `),w(),b(60,`

  `),w()),e&2){let a=K();D(5),z("dataSource",a.dataSource),D(51),z("matHeaderRowDef",a.loanSummaryColumns),D(2),z("matRowDefColumns",a.loanSummaryColumns);}}function mo(e,m){e&1&&(x(0,"th",15),b(1," Key "),w());}function lo(e,m){if(e&1&&(x(0,"td",16),b(1),w()),e&2){let a=m.$implicit;D(),it(" ",a.key," ");}}function co(e,m){e&1&&(x(0,"th",15),b(1," Value "),w());}function so(e,m){if(e&1&&(x(0,"span"),b(1),nee(2,"date"),w()),e&2){let a=K(4);D(),it(" ",ree(2,1,a.loanDetails.timeline.actualDisbursementDate)," ");}}function po(e,m){e&1&&(x(0,"span"),b(1," Not Available "),w());}function uo(e,m){if(e&1&&(Rl$1(0),b(1,`
            `),Ie(2,so,3,3,"span",1),b(3,`
            `),Ie(4,po,2,0,"span",1),b(5,`
          `),zl$1()),e&2){let a=K(3);D(2),z("ngIf",a.loanDetails.timeline.actualDisbursementDate),D(2),z("ngIf",!a.loanDetails.timeline.actualDisbursementDate);}}function fo(e,m){if(e&1&&(x(0,"span"),b(1),w()),e&2){let a=K(4);D(),it(" ",a.loanDetails.loanPurchaseName," ");}}function xo(e,m){e&1&&(x(0,"span"),b(1," Not Available "),w());}function _o(e,m){if(e&1&&(Rl$1(0),b(1,`
            `),Ie(2,fo,2,1,"span",1),b(3,`
            `),Ie(4,xo,2,0,"span",1),b(5,`
          `),zl$1()),e&2){let a=K(3);D(2),z("ngIf",a.loanDetails.loanPurchaseName),D(2),z("ngIf",!a.loanDetails.loanPurchaseName);}}function Co(e,m){e&1&&(x(0,"span"),b(1," Unassigned "),w());}function vo(e,m){e&1&&(x(0,"span"),b(1,`
                    `),b(2,`
              `),w());}function go(e,m){if(e&1&&(x(0,"span"),b(1),Ie(2,vo,3,0,"span",1),b(3,`
            `),w()),e&2){let a=K(4);D(),it(" ",a.loanDetails.loanOfficerName,` \xA0
              `),D(),z("ngIf",a.loanDetails.loanOfficerName);}}function ho(e,m){if(e&1&&(Rl$1(0),b(1,`
            `),Ie(2,Co,2,0,"span",1),b(3,`
            `),Ie(4,go,4,2,"span",1),b(5,`
          `),zl$1()),e&2){let a=K(3);D(2),z("ngIf",!a.loanDetails.loanOfficerName),D(2),z("ngIf",a.loanDetails.loanOfficerName);}}function So(e,m){if(e&1&&(Rl$1(0),b(1,`
            `),x(2,"span"),b(3),w(),b(4,`
          `),zl$1()),e&2){let a=K(3);D(3),Y0$1(" ",a.loanDetails.currency.name," ",a.loanDetails.currency.code," ");}}function yo(e,m){if(e&1&&(x(0,"span"),b(1),w()),e&2){let a=K(4);D(),it(" ",a.loanDetails.externalId," ");}}function Do(e,m){e&1&&(x(0,"span"),b(1," Not Available "),w());}function bo(e,m){if(e&1&&(Rl$1(0),b(1,`
            `),Ie(2,yo,2,1,"span",1),b(3,`
            `),Ie(4,Do,2,0,"span",1),b(5,`
          `),zl$1()),e&2){let a=K(3);D(2),z("ngIf",a.loanDetails.externalId),D(2),z("ngIf",!a.loanDetails.externalId);}}function To(e,m){if(e&1&&(Rl$1(0),b(1),zl$1()),e&2){let a=K().$implicit;D(),it(`
            `,a.value,`
          `);}}function Eo(e,m){if(e&1&&(x(0,"td",16),b(1,`
          `),Ie(2,uo,6,2,"ng-container",1),b(3,`

          `),Ie(4,_o,6,2,"ng-container",1),b(5,`

          `),Ie(6,ho,6,2,"ng-container",1),b(7,`

          `),Ie(8,So,5,2,"ng-container",1),b(9,`

          `),Ie(10,bo,6,2,"ng-container",1),b(11,`

          `),Ie(12,To,2,1,"ng-container",1),b(13,`
        `),w()),e&2){let a=m.$implicit;D(2),z("ngIf",a.key==="Disbursement Date"),D(2),z("ngIf",a.key==="Loan Purpose"),D(2),z("ngIf",a.key==="Loan Officer"),D(2),z("ngIf",a.key==="Currency"),D(2),z("ngIf",a.key==="External Id"),D(2),z("ngIf",a.key==="Proposed Amount"||a.key==="Approved Amount"||a.key==="Disburse Amount");}}function Ao(e,m){e&1&&fe(0,"tr",17);}function Io(e,m){e&1&&fe(0,"tr",18);}function Lo(e,m){if(e&1&&(x(0,"div"),b(1,`

    `),x(2,"h3"),b(3," Loan Details"),w(),b(4,`
    `),x(5,"table",3),b(6,`

      `),Rl$1(7,19),b(8,`
        `),Ie(9,mo,2,0,"th",5),b(10,`
        `),Ie(11,lo,2,1,"td",6),b(12,`
      `),zl$1(),b(13,`

      `),Rl$1(14,20),b(15,`
        `),Ie(16,co,2,0,"th",5),b(17,`
        `),Ie(18,Eo,14,6,"td",6),b(19,`
      `),zl$1(),b(20,`

      `),Ie(21,Ao,1,0,"tr",13),b(22,`
      `),Ie(23,Io,1,0,"tr",14),b(24,`

    `),w(),b(25,`

  `),w()),e&2){let a=K();D(5),z("dataSource",a.detailsDataSource),D(16),z("matHeaderRowDef",a.loanDetailsColumns),D(2),z("matRowDefColumns",a.loanDetailsColumns);}}function Fo(e,m){e&1&&(x(0,"th",15),b(1," Key "),w());}function wo(e,m){if(e&1&&(x(0,"td",16),b(1),w()),e&2){let a=m.$implicit;D(),it(" ",a.key," ");}}function Po(e,m){e&1&&(x(0,"th",15),b(1," Value "),w());}function Ro(e,m){if(e&1&&(x(0,"span"),b(1),nee(2,"date"),w()),e&2){let a=K(4);D(),it(" ",ree(2,1,a.loanDetails.timeline.actualDisbursementDate)," ");}}function Oo(e,m){e&1&&(x(0,"span"),b(1," Not Available "),w());}function Mo(e,m){if(e&1&&(Rl$1(0),b(1,`
            `),Ie(2,Ro,3,3,"span",1),b(3,`
            `),Ie(4,Oo,2,0,"span",1),b(5,`
          `),zl$1()),e&2){let a=K(3);D(2),z("ngIf",a.loanDetails.timeline.actualDisbursementDate),D(2),z("ngIf",!a.loanDetails.timeline.actualDisbursementDate);}}function No(e,m){e&1&&(x(0,"span"),b(1," Unassigned "),w());}function ko(e,m){e&1&&(x(0,"span"),b(1,`
                    `),b(2,`
              `),w());}function Go(e,m){if(e&1&&(x(0,"span"),b(1),Ie(2,ko,3,0,"span",1),b(3,`
            `),w()),e&2){let a=K(4);D(),it(" ",a.loanDetails.loanOfficerName,` \xA0
              `),D(),z("ngIf",a.loanDetails.loanOfficerName);}}function Bo(e,m){if(e&1&&(Rl$1(0),b(1,`
            `),Ie(2,No,2,0,"span",1),b(3,`
            `),Ie(4,Go,4,2,"span",1),b(5,`
          `),zl$1()),e&2){let a=K(3);D(2),z("ngIf",!a.loanDetails.loanOfficerName),D(2),z("ngIf",a.loanDetails.loanOfficerName);}}function jo(e,m){if(e&1&&(Rl$1(0),b(1,`
            `),x(2,"span"),b(3),w(),b(4,`
          `),zl$1()),e&2){let a=K(3);D(3),it(" ",a.loanDetails.currency.name," ");}}function Vo(e,m){if(e&1&&(x(0,"span"),b(1),w()),e&2){let a=K(4);D(),it(" ",a.loanDetails.externalId," ");}}function qo(e,m){e&1&&(x(0,"span"),b(1," Not Available "),w());}function Ho(e,m){if(e&1&&(Rl$1(0),b(1,`
            `),Ie(2,Vo,2,1,"span",1),b(3,`
            `),Ie(4,qo,2,0,"span",1),b(5,`
          `),zl$1()),e&2){let a=K(3);D(2),z("ngIf",a.loanDetails.externalId),D(2),z("ngIf",!a.loanDetails.externalId);}}function $o(e,m){if(e&1&&(x(0,"td",16),b(1,`
          `),Ie(2,Mo,6,2,"ng-container",1),b(3,`

          `),Ie(4,Bo,6,2,"ng-container",1),b(5,`

          `),Ie(6,jo,5,1,"ng-container",1),b(7,`

          `),Ie(8,Ho,6,2,"ng-container",1),b(9,`

        `),w()),e&2){let a=m.$implicit;D(2),z("ngIf",a.key==="Disbursement Date"),D(2),z("ngIf",a.key==="Loan Officer"),D(2),z("ngIf",a.key==="Currency"),D(2),z("ngIf",a.key==="External Id");}}function Wo(e,m){e&1&&fe(0,"tr",17);}function Uo(e,m){e&1&&fe(0,"tr",18);}function zo(e,m){if(e&1&&(x(0,"div"),b(1,`

    `),x(2,"h3"),b(3," Loan Details "),w(),b(4,`
    `),x(5,"table",3),b(6,`

      `),Rl$1(7,19),b(8,`
        `),Ie(9,Fo,2,0,"th",5),b(10,`
        `),Ie(11,wo,2,1,"td",6),b(12,`
      `),zl$1(),b(13,`

      `),Rl$1(14,20),b(15,`
        `),Ie(16,Po,2,0,"th",5),b(17,`
        `),Ie(18,$o,10,4,"td",6),b(19,`
      `),zl$1(),b(20,`

      `),Ie(21,Wo,1,0,"tr",13),b(22,`
      `),Ie(23,Uo,1,0,"tr",14),b(24,`

    `),w(),b(25,`
  `),w()),e&2){let a=K();D(5),z("dataSource",a.detailsDataSource),D(16),z("matHeaderRowDef",a.loanDetailsColumns),D(2),z("matRowDefColumns",a.loanDetailsColumns);}}function Qo(e,m){if(e&1&&(x(0,"span",24),b(1),w()),e&2){let a=K(2);D(),it(`
              `,a.loanDetails.loanPurposeName,`
            `);}}function Yo(e,m){e&1&&(x(0,"span",24),b(1,`
              Not Provided
            `),w());}function Jo(e,m){if(e&1&&(x(0,"div",23),b(1,`
          `),x(2,"span",24),b(3,"Approved Amount:"),w(),b(4,`
          `),x(5,"span",24),b(6),nee(7,"number"),w(),b(8,`
        `),w()),e&2){let a=K(2);D(6),Dt(ree(7,1,a.loanDetails.approvedPrincipal));}}function Ko(e,m){if(e&1&&(x(0,"div",23),b(1,`
          `),x(2,"span",24),b(3,"Disburse Amount:"),w(),b(4,`
          `),x(5,"span",24),b(6),nee(7,"number"),w(),b(8,`
        `),w()),e&2){let a=K(2);D(6),Dt(ree(7,1,a.loanDetails.principal));}}function Xo(e,m){if(e&1&&(x(0,"div"),b(1,`
    `),x(2,"h3"),b(3," Loan Purpose "),w(),b(4,`
    `),x(5,"div",21),b(6,`
      `),x(7,"div",22),b(8,`

        `),x(9,"div",23),b(10,`
            `),x(11,"span",24),b(12,"Loan Purpose:"),w(),b(13,`
            `),Ie(14,Qo,2,1,"span",25),b(15,`
            `),Ie(16,Yo,2,0,"span",25),b(17,`
        `),w(),b(18,`

        `),x(19,"div",23),b(20,`
          `),x(21,"span",24),b(22,"Proposed Amount:"),w(),b(23,`
          `),x(24,"span",24),b(25),nee(26,"number"),w(),b(27,`
        `),w(),b(28,`

        `),Ie(29,Jo,9,3,"div",26),b(30,`

        `),Ie(31,Ko,9,3,"div",26),b(32,`

        `),x(33,"div",23),b(34,`
          `),x(35,"span",24),b(36,"Arrears By:"),w(),b(37,`
          `),x(38,"span",24),b(39," Not Provided"),w(),b(40,`
        `),w(),b(41,`

      `),w(),b(42,`
    `),w(),b(43,`
  `),w()),e&2){let a=K();D(14),z("ngIf",a.loanDetails.loanPurposeName),D(2),z("ngIf",!a.loanDetails.loanPurposeName),D(9),Dt(ree(26,5,a.loanDetails.proposedPrincipal)),D(4),z("ngIf",a.showApprovedAmountBasedOnStatus()),D(2),z("ngIf",a.showDisbursedAmountBasedOnStatus());}}var ri=(()=>{class e{route;loanDetails;status;loanSummaryColumns=["Empty","Original","Paid","Waived","Written Off","Outstanding","Over Due"];loanDetailsColumns=["Key","Value"];loanSummaryTableData;loanDetailsTableData;dataSource;detailsDataSource;constructor(a){this.route=a,this.route.parent.data.subscribe(l=>{this.loanDetails=l.loanDetailsData;});}ngOnInit(){this.status=this.loanDetails.value,this.loanDetails.summary?(this.setloanSummaryTableData(),this.setloanDetailsTableData()):this.setloanNonDetailsTableData();}setloanSummaryTableData(){this.loanSummaryTableData=[{property:"Principal",original:this.loanDetails.summary.principalDisbursed,paid:this.loanDetails.summary.principalPaid,waived:this.loanDetails.summary.principalWrittenOff,writtenOff:this.loanDetails.summary.principalOutstanding,outstanding:this.loanDetails.summary.principalOutstanding,overdue:this.loanDetails.summary.principalOverdue},{property:"Interest",original:this.loanDetails.summary.interestCharged,paid:this.loanDetails.summary.interestPaid,waived:this.loanDetails.summary.interestWaived,writtenOff:this.loanDetails.summary.interestWrittenOff,outstanding:this.loanDetails.summary.interestOutstanding,overdue:this.loanDetails.summary.interestOverdue},{property:"Fees",original:this.loanDetails.summary.feeChargesCharged,paid:this.loanDetails.summary.feeChargesPaid,waived:this.loanDetails.summary.feeChargesWaived,writtenOff:this.loanDetails.summary.feeChargesWrittenOff,outstanding:this.loanDetails.summary.feeChargesOutstanding,overdue:this.loanDetails.summary.feeChargesOverdue},{property:"Penalties",original:this.loanDetails.summary.penaltyChargesCharged,paid:this.loanDetails.summary.penaltyChargesPaid,waived:this.loanDetails.summary.penaltyChargesWaived,writtenOff:this.loanDetails.summary.penaltyChargesWrittenOff,outstanding:this.loanDetails.summary.penaltyChargesOutstanding,overdue:this.loanDetails.summary.penaltyChargesOverdue},{property:"Total",original:this.loanDetails.summary.totalExpectedRepayment,paid:this.loanDetails.summary.totalRepayment,waived:this.loanDetails.summary.totalWaived,writtenOff:this.loanDetails.summary.totalWrittenOff,outstanding:this.loanDetails.summary.totalOutstanding,overdue:this.loanDetails.summary.totalOverdue}],this.dataSource=new zB(this.loanSummaryTableData);}setloanDetailsTableData(){this.loanDetailsTableData=[{key:"Disbursement Date"},{key:"Loan Purpose"},{key:"Loan Officer"},{key:"Currency"},{key:"External Id"},{key:"Proposed Amount",value:this.loanDetails.proposedPrincipal},{key:"Approved Amount",value:this.loanDetails.approvedPrincipal},{key:"Disburse Amount",value:this.loanDetails.principal}],this.detailsDataSource=new zB(this.loanDetailsTableData);}setloanNonDetailsTableData(){this.loanDetailsTableData=[{key:"Disbursement Date"},{key:"Currency"},{key:"Loan Officer"},{key:"External Id"}],this.detailsDataSource=new zB(this.loanDetailsTableData);}showApprovedAmountBasedOnStatus(){return !(this.status==="Submitted and pending approval"||this.status==="Withdrawn by applicant"||this.status==="Rejected")}showDisbursedAmountBasedOnStatus=function(){return !(this.status==="Submitted and pending approval"||this.status==="Withdrawn by applicant"||this.status==="Rejected"||this.status==="Approved")};static \u0275fac=function(l){return new(l||e)(T(zs$1))};static \u0275cmp=N({type:e,selectors:[["mifosx-general-tab"]],standalone:false,decls:13,vars:5,consts:[[1,"tab-container","mat-typography"],[4,"ngIf"],["fxLayout","row","fxLayoutGap","32px",1,"performance-history-container"],["mat-table","",3,"dataSource"],["matColumnDef","Empty"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","Original"],["matColumnDef","Paid"],["matColumnDef","Waived"],["matColumnDef","Written Off"],["matColumnDef","Outstanding"],["matColumnDef","Over Due"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["mat-header-cell",""],["mat-cell",""],["mat-header-row",""],["mat-row",""],["matColumnDef","Key"],["matColumnDef","Value"],[1,"container"],["fxLayout","row wrap","fxLayout.lt-md","column"],["fxFlexFill",""],["fxFlex","50%"],["fxFlex","50%",4,"ngIf"],["fxFlexFill","",4,"ngIf"]],template:function(l,r){l&1&&(x(0,"div",0),b(1,`

  `),Ie(2,Ha,14,4,"ng-container",1),b(3,`

  `),Ie(4,ro,61,3,"div",1),b(5,`

  `),Ie(6,Lo,26,3,"div",1),b(7,`

  `),Ie(8,zo,26,3,"div",1),b(9,`

  `),Ie(10,Xo,44,7,"div",1),b(11,`

`),w(),b(12,`
`)),l&2&&(D(2),z("ngIf",r.loanDetails.summary),D(2),z("ngIf",r.loanDetails.summary),D(2),z("ngIf",r.loanDetails.summary),D(2),z("ngIf",!r.loanDetails.summary),D(2),z("ngIf",!r.loanDetails.summary));},dependencies:[Yo$1,go$1,Mc,R2,wc$1,uqe,mqe,bqe,pqe,fqe,xqe,gqe,vqe,Cqe,Mqe,yte,_te],styles:[".tab-container[_ngcontent-%COMP%]{padding:1%;margin:1%}.tab-container[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin:1% auto}.tab-container[_ngcontent-%COMP%]   .performance-history-container[_ngcontent-%COMP%]{border:1px solid;padding:1%;margin-bottom:20px}.tab-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]{width:100%;margin-bottom:20px}span[_ngcontent-%COMP%]{margin:.5em 0}"],changeDetection:1})}return e})();function Zo(e,m){if(e&1&&(x(0,"span"),b(1),w()),e&2){let a=K();D(),Y0$1(`
              \xA0on\xA0`,a.loanDetails.repaymentFrequencyNthDayType?.value,"\xA0",a.loanDetails.repaymentFrequencyDayOfWeekType?.value,`
            `);}}function tr(e,m){if(e&1&&(x(0,"div",2),b(1,`
            `),x(2,"span",3),b(3," Fixed EMI amount"),w(),b(4,`
            `),x(5,"span",3),b(6),nee(7,"number"),w(),b(8,`
        `),w()),e&2){let a=K();D(6),it(" ",ree(7,1,a.loanDetails.fixedEmiAmount)," ");}}function er(e,m){if(e&1&&(x(0,"div",2),b(1,`
            `),x(2,"span",3),b(3," Is Topup Loan?"),w(),b(4,`
            `),x(5,"span",3),b(6),w(),b(7,`
        `),w()),e&2){let a=K();D(6),it(" ",a.loanDetails.isTopup," ");}}function nr(e,m){if(e&1&&(x(0,"div",2),b(1,`
            `),x(2,"span",3),b(3," Loan closed with Topup "),w(),b(4,`
            `),x(5,"span",3),b(6," "),x(7,"a",6),b(8),w(),b(9," "),w(),b(10,`
        `),w()),e&2){let a=K();D(8),Dt(a.loanDetails.closureLoanAccountNo);}}function ir(e,m){if(e&1&&(x(0,"div",2),b(1,`
            `),x(2,"span",3),b(3," Topup closure amount"),w(),b(4,`
            `),x(5,"span",3),b(6),nee(7,"number"),w(),b(8,`
        `),w()),e&2){let a=K();D(6),it(" ",ree(7,1,a.loanDetails.topupAmount)," ");}}function ar(e,m){if(e&1&&(x(0,"div",2),b(1,`
            `),x(2,"span",3),b(3," Interest recalculation compounding on"),w(),b(4,`
            `),x(5,"span",3),b(6),w(),b(7,`
        `),w()),e&2){let a=K();D(6),it(" ",a.loanDetails.interestRecalculationData.interestRecalculationCompoundingType.value," ");}}function or(e,m){if(e&1&&(x(0,"div",2),b(1,`
            `),x(2,"span",3),b(3," Advance payments adjustment type"),w(),b(4,`
            `),x(5,"span",3),b(6),w(),b(7,`
        `),w()),e&2){let a=K();D(6),it(" ",a.loanDetails.interestRecalculationData.rescheduleStrategyType.value," ");}}function rr(e,m){if(e&1&&(x(0,"div",2),b(1,`
            `),x(2,"span",3),b(3," Frequency for recalculate Outstanding Principal"),w(),b(4,`
            `),x(5,"span",3),b(6),w(),b(7,`
        `),w()),e&2){let a=K();D(6),it(" ",a.loanDetails.interestRecalculationData.calendarData.humanReadable," ");}}function mr(e,m){if(e&1&&(x(0,"div",2),b(1,`
            `),x(2,"span",3),b(3," Frequency for compounding"),w(),b(4,`
            `),x(5,"span",3),b(6),w(),b(7,`
        `),w()),e&2){let a=K();D(6),it(" ",a.loanDetails.interestRecalculationData.compoundingCalendarData.humanReadable," ");}}function lr(e,m){if(e&1&&(x(0,"div",2),b(1,`
            `),x(2,"span",3),b(3," Variable Installments Allowed"),w(),b(4,`
            `),x(5,"span",3),b(6),w(),b(7,`
        `),w()),e&2){let a=K();D(6),it(" ",a.loanDetails.isVariableInstallmentsAllowed," ");}}function cr(e,m){if(e&1&&(x(0,"div",2),b(1,`
            `),x(2,"span",3),b(3," Gap between Installments:(Min"),w(),b(4,`
            `),x(5,"span",3),b(6),w(),b(7,`
        `),w()),e&2){let a=K();D(6),Y0$1(" ",a.loanDetails.minimumGap,"\xA0Days\xA0, Max:",a.loanDetails.maximumGap,"\xA0Days) ");}}var mi=(()=>{class e{route;loanDetails;dataObject;constructor(a){this.route=a,this.route.parent.data.subscribe(l=>{this.loanDetails=l.loanDetailsData;});}ngOnInit(){}static \u0275fac=function(l){return new(l||e)(T(zs$1))};static \u0275cmp=N({type:e,selectors:[["mifosx-account-details"]],standalone:false,decls:212,vars:44,consts:[[1,"container"],["fxLayout","row wrap","fxLayout.lt-md","column"],["fxFlexFill",""],["fxFlex","50%"],[4,"ngIf"],["fxFlexFill","",4,"ngIf"],["href","#"]],template:function(l,r){l&1&&(x(0,"div",0),b(1,`

    `),x(2,"div",1),b(3,`

        `),x(4,"div",2),b(5,`
            `),x(6,"span",3),b(7,"Repayment Strategy:"),w(),b(8,`
            `),x(9,"span",3),b(10),w(),b(11,`
        `),w(),b(12,`

        `),x(13,"div",2),b(14,`
            `),x(15,"span",3),b(16,"Repayments:"),w(),b(17,`
            `),x(18,"span",3),b(19),Ie(20,Zo,2,2,"span",4),b(21,`
            `),w(),b(22,`
        `),w(),b(23,`

        `),x(24,"div",2),b(25,`
            `),x(26,"span",3),b(27," Amortization "),w(),b(28,`
            `),x(29,"span",3),b(30),w(),b(31,`
        `),w(),b(32,`

        `),x(33,"div",2),b(34,`
            `),x(35,"span",3),b(36," Equal Amortization "),w(),b(37,`
            `),x(38,"span",3),b(39),w(),b(40,`
        `),w(),b(41,`

        `),x(42,"div",2),b(43,`
            `),x(44,"span",3),b(45," Interest "),w(),b(46,`
            `),x(47,"span",3),b(48),w(),b(49,`
        `),w(),b(50,`

        `),x(51,"div",2),b(52,`
            `),x(53,"span",3),b(54," Grace: On Principal Payment"),w(),b(55,`
            `),x(56,"span",3),b(57),w(),b(58,`
        `),w(),b(59,`

        `),x(60,"div",2),b(61,`
            `),x(62,"span",3),b(63," Grace: On Interest Payment"),w(),b(64,`
            `),x(65,"span",3),b(66),w(),b(67,`
        `),w(),b(68,`

        `),x(69,"div",2),b(70,`
            `),x(71,"span",3),b(72," Grace on Arrears Ageing"),w(),b(73,`
            `),x(74,"span",3),b(75),w(),b(76,`
        `),w(),b(77,`

        `),x(78,"div",2),b(79,`
            `),x(80,"span",3),b(81," Fund Source"),w(),b(82,`
            `),x(83,"span",3),b(84),w(),b(85,`
        `),w(),b(86,`

        `),x(87,"div",2),b(88,`
            `),x(89,"span",3),b(90," Interest Free Period"),w(),b(91,`
            `),x(92,"span",3),b(93),w(),b(94,`
        `),w(),b(95,`

        `),x(96,"div",2),b(97,`
            `),x(98,"span",3),b(99," Interest Calculation Period"),w(),b(100,`
            `),x(101,"span",3),b(102),w(),b(103,`
        `),w(),b(104,`

        `),x(105,"div",2),b(106,`
            `),x(107,"span",3),b(108," Allow Partial Interest Calculation with same as repayment"),w(),b(109,`
            `),x(110,"span",3),b(111),w(),b(112,`
        `),w(),b(113,`

        `),x(114,"div",2),b(115,`
            `),x(116,"span",3),b(117," Interest Type"),w(),b(118,`
            `),x(119,"span",3),b(120),w(),b(121,`
        `),w(),b(122,`

        `),x(123,"div",2),b(124,`
            `),x(125,"span",3),b(126," Submitted on"),w(),b(127,`
            `),x(128,"span",3),b(129),nee(130,"date"),w(),b(131,`
        `),w(),b(132,`

        `),x(133,"div",2),b(134,`
            `),x(135,"span",3),b(136," Approved on"),w(),b(137,`
            `),x(138,"span",3),b(139),nee(140,"date"),w(),b(141,`
        `),w(),b(142,`

        `),x(143,"div",2),b(144,`
            `),x(145,"span",3),b(146," Disbursed on"),w(),b(147,`
            `),x(148,"span",3),b(149),nee(150,"date"),w(),b(151,`
        `),w(),b(152,`

        `),x(153,"div",2),b(154,`
            `),x(155,"span",3),b(156," Matures on"),w(),b(157,`
            `),x(158,"span",3),b(159),nee(160,"date"),w(),b(161,`
        `),w(),b(162,`

        `),Ie(163,tr,9,3,"div",5),b(164,`

        `),Ie(165,er,8,1,"div",5),b(166,`

        `),Ie(167,nr,11,1,"div",5),b(168,`

        `),Ie(169,ir,9,3,"div",5),b(170,`

        `),x(171,"div",2),b(172,`
            `),x(173,"span",3),b(174," Recalculate Interest based on new terms"),w(),b(175,`
            `),x(176,"span",3),b(177),w(),b(178,`
        `),w(),b(179,`

        `),x(180,"div",2),b(181,`
            `),x(182,"span",3),b(183," Days in year"),w(),b(184,`
            `),x(185,"span",3),b(186),w(),b(187,`
        `),w(),b(188,`

        `),x(189,"div",2),b(190,`
            `),x(191,"span",3),b(192," Days in month"),w(),b(193,`
            `),x(194,"span",3),b(195),w(),b(196,`
        `),w(),b(197,`

        `),Ie(198,ar,8,1,"div",5),b(199,`

        `),Ie(200,or,8,1,"div",5),b(201,`

        `),Ie(202,rr,8,1,"div",5),b(203,`

        `),Ie(204,mr,8,1,"div",5),b(205,`

        `),Ie(206,lr,8,1,"div",5),b(207,`

        `),Ie(208,cr,8,2,"div",5),b(209,`

    `),w(),b(210,`

`),w(),b(211,`
`)),l&2&&(D(10),Dt(r.loanDetails.transactionProcessingStrategyName),D(9),vk("",r.loanDetails.numberOfRepayments," every ",r.loanDetails.repaymentEvery,"\xA0",r.loanDetails.repaymentFrequencyType.value,`
            `),D(),z("ngIf",r.loanDetails.repaymentFrequencyType?.id==2&&r.loanDetails.repaymentFrequencyNthDayType?.id!=0&&r.loanDetails.repaymentFrequencyDayOfWeekType?.id!=0),D(10),it(" ",r.loanDetails.amortizationType.value," "),D(9),it(" ",r.loanDetails.isEqualAmortization," "),D(9),bk(" ",r.loanDetails.annualInterestRate," per annum (",r.loanDetails.interestRatePerPeriod,"%\xA0 ",r.loanDetails.interestRateFrequencyType.value,") - ",r.loanDetails.interestType.value," "),D(9),it(" ",r.loanDetails.graceOnPrincipalPayment," "),D(9),it(" ",r.loanDetails.graceOnInterestPayment," "),D(9),it(" ",r.loanDetails.graceOnArrearsAgeing," "),D(9),it(" ",r.loanDetails.fundName," "),D(9),it(" ",r.loanDetails.graceOnInterestCharged," "),D(9),it(" ",r.loanDetails.interestCalculationPeriodType.value," "),D(9),it(" ",r.loanDetails.allowPartialPeriodInterestCalcualtion," "),D(9),it(" ",r.loanDetails.interestType.value," "),D(9),it(" ",ree(130,36,r.loanDetails.timeline.submittedOnDate)," "),D(10),it(" ",ree(140,38,r.loanDetails.timeline.approvedOnDate)," "),D(10),it(" ",ree(150,40,r.loanDetails.timeline.actualDisbursementDate)," "),D(10),it(" ",ree(160,42,r.loanDetails.timeline.expectedMaturityDate)," "),D(4),z("ngIf",r.loanDetails.canDefineInstallmentAmount),D(2),z("ngIf",r.loanDetails.isTopup),D(2),z("ngIf",r.loanDetails.isTopup),D(2),z("ngIf",r.loanDetails.isTopup),D(8),it("  ",r.loanDetails.isInterestRecalculationEnabled?"Yes":"No"," "),D(9),it(" ",r.loanDetails.daysInYearType.value," "),D(9),it(" ",r.loanDetails.daysInMonthType.value," "),D(3),z("ngIf",r.loanDetails.isInterestRecalculationEnabled),D(2),z("ngIf",r.loanDetails.isInterestRecalculationEnabled),D(2),z("ngIf",r.loanDetails.isInterestRecalculationEnabled),D(2),z("ngIf",r.loanDetails.isInterestRecalculationEnabled&&r.loanDetails.interestRecalculationData.interestRecalculationCompoundingType.id!=0),D(2),z("ngIf",r.loanDetails.isVariableInstallmentsAllowed),D(2),z("ngIf",r.loanDetails.isVariableInstallmentsAllowed));},dependencies:[Yo$1,go$1,R2,wc$1,yte,_te],styles:["table[_ngcontent-%COMP%]{width:100%}span[_ngcontent-%COMP%]{margin:.5em 0}"],changeDetection:1})}return e})();var pr=["formRef"];function dr(e,m){if(e&1){let a=Kt();x(0,"mat-list-item"),b(1,`
      `),fe(2,"fa-icon",8),b(3,`
      `),x(4,"h3",9),b(5),w(),b(6,`
      `),x(7,"p",9),b(8,`
        `),x(9,"span"),b(10),w(),fe(11,"br"),b(12,`
        `),x(13,"span"),b(14),nee(15,"date"),w(),b(16,`
      `),w(),b(17,`
      `),x(18,"div",10),b(19,`
        `),x(20,"button",11),re("click",function(){let r=ot(a),d=r.$implicit,h=r.index,I=K();return at(I.editNote(d.id,d.note,h))}),b(21,`
          `),fe(22,"fa-icon",12),b(23,`
        `),w(),b(24,`
        `),x(25,"button",13),re("click",function(){let r=ot(a),d=r.$implicit,h=r.index,I=K();return at(I.deleteNote(d.id,h))}),b(26,`
          `),fe(27,"fa-icon",14),b(28,`
        `),w(),b(29,`
      `),w(),b(30,`
    `),w();}if(e&2){let a=m.$implicit;D(5),it("",a.note," "),D(5),it("Created by: ",a.createdByUsername),D(4),it("Date: ",ree(15,3,a.createdOn));}}var li=(()=>{class e{route;formBuilder;loansService;authenticationService;dialog;loanId;username;loanNotes;noteForm;formRef;constructor(a,l,r,d,h){this.route=a,this.formBuilder=l,this.loansService=r,this.authenticationService=d,this.dialog=h;let I=this.authenticationService.getCredentials();this.username=I.username,this.loanId=this.route.parent.snapshot.params.loanId,this.route.data.subscribe(R=>{this.loanNotes=R.loanNotes;});}ngOnInit(){this.createNoteForm();}createNoteForm(){this.noteForm=this.formBuilder.group({note:["",mi$1.required]});}submit(){this.loansService.createLoanNote(this.loanId,this.noteForm.value).subscribe(a=>{this.loanNotes.push({id:a.resourceId,createdByUsername:this.username,createdOn:new Date,note:this.noteForm.value.note}),this.formRef.resetForm();});}editNote(a,l,r){this.dialog.open(_Ne,{data:{formfields:[{controlName:"note",required:true,value:l,controlType:"input",label:"Note"}],layout:{columns:1,addButtonText:"Confirm"},title:"Edit Note"}}).afterClosed().subscribe(h=>{h.data&&this.loansService.editLoanNote(this.loanId,a,h.data.value).subscribe(()=>{this.loanNotes[r].note=h.data.value.note;});});}deleteNote(a,l){this.dialog.open(CNe,{data:{deleteContext:`Note id:${a}`}}).afterClosed().subscribe(d=>{d.delete&&this.loansService.deleteLoanNote(this.loanId,a).subscribe(()=>{this.loanNotes.splice(l,1);});});}static \u0275fac=function(l){return new(l||e)(T(zs$1),T(AI),T(E),T(mV),T(Iv))};static \u0275cmp=N({type:e,selectors:[["mifosx-notes-tab"]],viewQuery:function(l,r){if(l&1&&ze(pr,7),l&2){let d;j(d=H())&&(r.formRef=d.first);}},standalone:false,decls:28,vars:3,consts:[["formRef","ngForm"],[1,"tab-container","mat-typography"],["fxLayout","row","fxLayoutAlign","start baseline","fxLayoutGap","20px",3,"ngSubmit","formGroup"],["fxFlex","calc(90%-20px)"],["formControlName","note","matInput","","placeholder","Write a note ...."],["mat-raised-button","","fxFlex","","color","primary",3,"disabled"],["icon","plus"],[4,"ngFor","ngForOf"],["icon","sticky-note","matListIcon",""],["matLine",""],["fxLayout","row","fxLayoutAlign","flex-start"],["mat-button","","color","primary",3,"click"],["icon","edit"],["mat-button","","color","warn",3,"click"],["icon","trash"]],template:function(l,r){l&1&&(x(0,"div",1),b(1,`
  `),x(2,"h3"),b(3,"Notes"),w(),b(4,`
  `),x(5,"div"),b(6,`
    `),x(7,"form",2,0),re("ngSubmit",function(){return r.submit()}),b(9,`
      `),x(10,"mat-form-field",3),b(11,`
        `),fe(12,"textarea",4),ki$1(),b(13,`
      `),w(),b(14,`
      `),x(15,"button",5),b(16,`
        `),fe(17,"fa-icon",6),b(18,`\xA0\xA0 Add
      `),w(),b(19,`
    `),w(),b(20,`
  `),w(),b(21,`
  `),x(22,"mat-list"),b(23,`
    `),Ie(24,dr,31,5,"mat-list-item",7),b(25,`
  `),w(),b(26,`
`),w(),b(27,`
`)),l&2&&(D(7),z("formGroup",r.noteForm),D(5),Li$1(),D(3),z("disabled",!r.noteForm.valid),D(9),z("ngForOf",r.loanNotes));},dependencies:[ii,Oc$1,go$1,Mc,eA,wc$1,Sn$1,Ri$1,C2e,Ac$1,wUe,MUe,DI,Cc$1,Na$1,k2,uo$1,_3,_te],styles:[".tab-container[_ngcontent-%COMP%]{padding:1%;margin:1%}"],changeDetection:1})}return e})();var ur=()=>["header","header-amount","header-total-cost","header-installment-totals"];function fr(e,m){e&1&&(x(0,"th",30),b(1," # "),w());}function xr(e,m){if(e&1&&(x(0,"td",31),b(1),w()),e&2){let a=m.$implicit;D(),it(" ",a.period," ");}}function _r(e,m){e&1&&(x(0,"td",32),b(1," \xA0 "),w());}function Cr(e,m){e&1&&(x(0,"th",30),b(1," Days "),w());}function vr(e,m){if(e&1&&(x(0,"td",31),b(1),w()),e&2){let a=m.$implicit;D(),it(" ",a.daysInPeriod," ");}}function gr(e,m){e&1&&(x(0,"td",32),b(1," "),x(2,"b"),b(3," Total"),w(),b(4," "),w());}function hr(e,m){e&1&&(x(0,"th",30),b(1," Date "),w());}function Sr(e,m){if(e&1&&(x(0,"td",31),b(1),nee(2,"date"),w()),e&2){let a=m.$implicit;D(),it(" ",ree(2,1,a.dueDate)," ");}}function yr(e,m){e&1&&(x(0,"td",32),b(1,"  "),w());}function Dr(e,m){e&1&&(x(0,"th",30),b(1," Paid Date "),w());}function br(e,m){if(e&1&&(x(0,"td",31),b(1),nee(2,"date"),w()),e&2){let a=m.$implicit;D(),it(" ",ree(2,1,a.obligationsMetOnDate)," ");}}function Tr(e,m){e&1&&(x(0,"td",32),b(1,"  "),w());}function Er(e,m){e&1&&(x(0,"th",30),b(1," \xA0 "),w());}function Ar(e,m){e&1&&(x(0,"span"),b(1," "),fe(2,"i",33),b(3," "),w());}function Ir(e,m){if(e&1&&(x(0,"td",31),b(1,`
        `),Ie(2,Ar,4,0,"span",21),b(3,`
      `),w()),e&2){let a=m.$implicit;D(2),z("ngIf",a.obligationsMetOnDate);}}function Lr(e,m){e&1&&(x(0,"td",32),b(1," "),w());}function Fr(e,m){e&1&&(x(0,"th",30),b(1," Principal Due "),w());}function wr(e,m){if(e&1&&(x(0,"td",34),b(1),nee(2,"number"),w()),e&2){let a=m.$implicit;D(),it(" ",ree(2,1,a.principalDue)," ");}}function Pr(e,m){if(e&1&&(x(0,"td",35),b(1," "),x(2,"b"),b(3),nee(4,"number"),w(),b(5,"  "),w()),e&2){let a=K();D(3),it(" ",ree(4,1,a.repaymentScheduleDetails.totalPrincipalExpected));}}function Rr(e,m){e&1&&(x(0,"th",30),b(1," Balance Of Loan "),w());}function Or(e,m){if(e&1&&(x(0,"td",31),b(1),nee(2,"number"),w()),e&2){let a=m.$implicit;D(),it(" ",ree(2,1,a.principalLoanBalanceOutstanding)," ");}}function Mr(e,m){e&1&&(x(0,"td",32),b(1," \xA0 "),w());}function Nr(e,m){e&1&&(x(0,"th",30),b(1," Interest "),w());}function kr(e,m){if(e&1&&(x(0,"td",31),b(1),nee(2,"number"),w()),e&2){let a=m.$implicit;D(),it(" ",ree(2,1,a.interestOriginalDue)," ");}}function Gr(e,m){if(e&1&&(x(0,"td",32),b(1," "),x(2,"b"),b(3),nee(4,"number"),w(),b(5," "),w()),e&2){let a=K();D(3),it(" ",ree(4,1,a.repaymentScheduleDetails.totalInterestCharged)," ");}}function Br(e,m){e&1&&(x(0,"th",30),b(1," Fees "),w());}function jr(e,m){if(e&1&&(x(0,"td",31),b(1),nee(2,"number"),w()),e&2){let a=m.$implicit;D(),it(" ",ree(2,1,a.feeChargesDue)," ");}}function Vr(e,m){if(e&1&&(x(0,"td",32),b(1," "),x(2,"b"),b(3),nee(4,"number"),w(),b(5," "),w()),e&2){let a=K();D(3),it(" ",ree(4,1,a.repaymentScheduleDetails.totalFeeChargesCharged)," ");}}function qr(e,m){e&1&&(x(0,"th",30),b(1," Penalties "),w());}function Hr(e,m){if(e&1&&(x(0,"td",31),b(1),nee(2,"number"),w()),e&2){let a=m.$implicit;D(),it(" ",ree(2,1,a.penaltyChargesDue)," ");}}function $r(e,m){if(e&1&&(x(0,"td",32),b(1," "),x(2,"b"),b(3),nee(4,"number"),w(),b(5," "),w()),e&2){let a=K();D(3),it(" ",ree(4,1,a.repaymentScheduleDetails.totalPenaltyChargesCharged)," ");}}function Wr(e,m){e&1&&(x(0,"th",30),b(1," Due "),w());}function Ur(e,m){if(e&1&&(x(0,"td",31),b(1),nee(2,"number"),w()),e&2){let a=m.$implicit;D(),it(" ",ree(2,1,a.totalDueForPeriod)," ");}}function zr(e,m){if(e&1&&(x(0,"td",32),b(1," "),x(2,"b"),b(3),nee(4,"number"),w(),b(5," "),w()),e&2){let a=K();D(3),it(" ",ree(4,1,a.repaymentScheduleDetails.totalRepaymentExpected)," ");}}function Qr(e,m){e&1&&(x(0,"th",30),b(1," Paid "),w());}function Yr(e,m){if(e&1&&(x(0,"td",31),b(1),nee(2,"number"),w()),e&2){let a=m.$implicit;D(),it(" ",ree(2,1,a.totalPaidForPeriod)," ");}}function Jr(e,m){if(e&1&&(x(0,"td",32),b(1," "),x(2,"b"),b(3),nee(4,"number"),w(),b(5," "),w()),e&2){let a=K();D(3),it(" ",ree(4,1,a.repaymentScheduleDetails.totalRepayment)," ");}}function Kr(e,m){e&1&&(x(0,"th",30),b(1," In advance "),w());}function Xr(e,m){if(e&1&&(x(0,"td",31),b(1),nee(2,"number"),w()),e&2){let a=m.$implicit;D(),it(" ",ree(2,1,a.totalPaidInAdvanceForPeriod)," ");}}function Zr(e,m){if(e&1&&(x(0,"td",32),b(1," "),x(2,"b"),b(3),nee(4,"number"),w(),b(5," "),w()),e&2){let a=K();D(3),it(" ",ree(4,1,a.repaymentScheduleDetails.totalPaidInAdvance)," ");}}function tm(e,m){e&1&&(x(0,"th",30),b(1," Late "),w());}function em(e,m){if(e&1&&(x(0,"td",31),b(1),nee(2,"number"),w()),e&2){let a=m.$implicit;D(),it(" ",ree(2,1,a.totalPaidLateForPeriod)," ");}}function nm(e,m){if(e&1&&(x(0,"td",32),b(1," "),x(2,"b"),b(3),nee(4,"number"),w(),b(5," "),w()),e&2){let a=K();D(3),it(" ",ree(4,1,a.repaymentScheduleDetails.totalPaidLate)," ");}}function im(e,m){e&1&&(x(0,"th",30),b(1," Waived "),w());}function am(e,m){if(e&1&&(x(0,"td",31),b(1),nee(2,"number"),w()),e&2){let a=m.$implicit;D(),it(" ",ree(2,1,a.totalWaivedForPeriod)," ");}}function om(e,m){if(e&1&&(x(0,"td",32),b(1," "),x(2,"b"),b(3),nee(4,"number"),w(),b(5," "),w()),e&2){let a=K(2);D(3),it(" ",ree(4,1,a.repaymentScheduleDetails.totalWaived)," ");}}function rm(e,m){e&1&&(Rl$1(0),b(1,`
      `),Rl$1(2,36),b(3,`
        `),Ie(4,im,2,0,"th",3),b(5,`
        `),Ie(6,am,3,3,"td",4),b(7,`
        `),Ie(8,om,6,3,"td",5),b(9,`
      `),zl$1(),b(10,`
    `),zl$1());}function mm(e,m){e&1&&(x(0,"th",30),b(1," "),w());}function lm(e,m){e&1&&(x(0,"td",31),b(1," "),w());}function cm(e,m){e&1&&(x(0,"td",32),b(1," "),x(2,"b"),b(3," "),w(),b(4," "),w());}function sm(e,m){e&1&&(Rl$1(0),b(1,`
      `),Rl$1(2,36),b(3,`
        `),Ie(4,mm,2,0,"th",3),b(5,`
        `),Ie(6,lm,2,0,"td",4),b(7,`
        `),Ie(8,cm,5,0,"td",5),b(9,`
      `),zl$1(),b(10,`
    `),zl$1());}function pm(e,m){e&1&&(x(0,"th",30),b(1," Outstanding "),w());}function dm(e,m){if(e&1&&(x(0,"td",31),b(1),nee(2,"number"),w()),e&2){let a=m.$implicit;D(),it(" ",ree(2,1,a.totalOutstandingForPeriod)," ");}}function um(e,m){if(e&1&&(x(0,"td",32),b(1," "),x(2,"b"),b(3),nee(4,"number"),w(),b(5," "),w()),e&2){let a=K();D(3),it(" ",ree(4,1,a.repaymentScheduleDetails.totalOutstanding)," ");}}function fm(e,m){e&1&&(x(0,"th",30),b(1," "),w()),e&2&&Z("colspan",5);}function xm(e,m){e&1&&(x(0,"th",30),b(1," Loan Amount and Balance "),w()),e&2&&Z("colspan",2);}function _m(e,m){e&1&&(x(0,"th",30),b(1," Total Cost of Loan "),w()),e&2&&Z("colspan",3);}function Cm(e,m){e&1&&(x(0,"th",30),b(1," Installment Totals "),w()),e&2&&Z("colspan",6);}function vm(e,m){e&1&&fe(0,"tr",37);}function gm(e,m){e&1&&fe(0,"tr",37);}function hm(e,m){e&1&&fe(0,"tr",38);}function Sm(e,m){e&1&&fe(0,"tr",39);}var ci=(()=>{class e{route;repaymentScheduleDetails;isWaived;displayedColumns=["number","days","date","paiddate","check","principalDue","balanceOfLoan","interest","fees","penalties","due","paid","inadvance","late","waived","outstanding"];constructor(a){this.route=a,this.route.parent.data.subscribe(l=>{this.repaymentScheduleDetails=l.loanDetailsData.repaymentSchedule;});}ngOnInit(){this.isWaived=this.repaymentScheduleDetails.totalWaived>0;}static \u0275fac=function(l){return new(l||e)(T(zs$1))};static \u0275cmp=N({type:e,selectors:[["mifosx-repayment-schedule-tab"]],standalone:false,decls:174,vars:8,consts:[[1,"container"],["mat-table","",3,"dataSource"],["matColumnDef","number"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["mat-footer-cell","",4,"matFooterCellDef"],["matColumnDef","days"],["matColumnDef","date"],["matColumnDef","paiddate"],["matColumnDef","check"],["matColumnDef","principalDue"],["mat-cell","","class","check",4,"matCellDef"],["mat-footer-cell","","class","check",4,"matFooterCellDef"],["matColumnDef","balanceOfLoan"],["matColumnDef","interest"],["matColumnDef","fees"],["matColumnDef","penalties"],["matColumnDef","due"],["matColumnDef","paid"],["matColumnDef","inadvance"],["matColumnDef","late"],[4,"ngIf"],["matColumnDef","outstanding"],["matColumnDef","header"],["matColumnDef","header-amount"],["matColumnDef","header-total-cost"],["matColumnDef","header-installment-totals"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["mat-footer-row","",4,"matFooterRowDef"],["mat-header-cell",""],["mat-cell",""],["mat-footer-cell",""],[1,"fa","fa-check"],["mat-cell","",1,"check"],["mat-footer-cell","",1,"check"],["matColumnDef","waived"],["mat-header-row",""],["mat-row",""],["mat-footer-row",""]],template:function(l,r){l&1&&(x(0,"div",0),b(1,`

  `),x(2,"table",1),b(3,`

    `),Rl$1(4,2),b(5,`
      `),Ie(6,fr,2,0,"th",3),b(7,`
      `),Ie(8,xr,2,1,"td",4),b(9,`
      `),Ie(10,_r,2,0,"td",5),b(11,`
    `),zl$1(),b(12,`

    `),Rl$1(13,6),b(14,`
      `),Ie(15,Cr,2,0,"th",3),b(16,`
      `),Ie(17,vr,2,1,"td",4),b(18,`
      `),Ie(19,gr,5,0,"td",5),b(20,`
    `),zl$1(),b(21,`

    `),Rl$1(22,7),b(23,`
      `),Ie(24,hr,2,0,"th",3),b(25,`
      `),Ie(26,Sr,3,3,"td",4),b(27,`
      `),Ie(28,yr,2,0,"td",5),b(29,`
    `),zl$1(),b(30,`

    `),Rl$1(31,8),b(32,`
      `),Ie(33,Dr,2,0,"th",3),b(34,`
      `),Ie(35,br,3,3,"td",4),b(36,`
      `),Ie(37,Tr,2,0,"td",5),b(38,`
    `),zl$1(),b(39,`

    `),Rl$1(40,9),b(41,`
      `),Ie(42,Er,2,0,"th",3),b(43,`
      `),Ie(44,Ir,4,1,"td",4),b(45,`
      `),Ie(46,Lr,2,0,"td",5),b(47,`
    `),zl$1(),b(48,`

    `),Rl$1(49,10),b(50,`
      `),Ie(51,Fr,2,0,"th",3),b(52,`
      `),Ie(53,wr,3,3,"td",11),b(54,`
      `),Ie(55,Pr,6,3,"td",12),b(56,`
    `),zl$1(),b(57,`

    `),Rl$1(58,13),b(59,`
      `),Ie(60,Rr,2,0,"th",3),b(61,`
      `),Ie(62,Or,3,3,"td",4),b(63,`
      `),Ie(64,Mr,2,0,"td",5),b(65,`
    `),zl$1(),b(66,`

    `),Rl$1(67,14),b(68,`
      `),Ie(69,Nr,2,0,"th",3),b(70,`
      `),Ie(71,kr,3,3,"td",4),b(72,`
      `),Ie(73,Gr,6,3,"td",5),b(74,`
    `),zl$1(),b(75,`

    `),Rl$1(76,15),b(77,`
      `),Ie(78,Br,2,0,"th",3),b(79,`
      `),Ie(80,jr,3,3,"td",4),b(81,`
      `),Ie(82,Vr,6,3,"td",5),b(83,`
    `),zl$1(),b(84,`

    `),Rl$1(85,16),b(86,`
      `),Ie(87,qr,2,0,"th",3),b(88,`
      `),Ie(89,Hr,3,3,"td",4),b(90,`
      `),Ie(91,$r,6,3,"td",5),b(92,`
    `),zl$1(),b(93,`

    `),Rl$1(94,17),b(95,`
      `),Ie(96,Wr,2,0,"th",3),b(97,`
      `),Ie(98,Ur,3,3,"td",4),b(99,`
      `),Ie(100,zr,6,3,"td",5),b(101,`
    `),zl$1(),b(102,`

    `),Rl$1(103,18),b(104,`
      `),Ie(105,Qr,2,0,"th",3),b(106,`
      `),Ie(107,Yr,3,3,"td",4),b(108,`
      `),Ie(109,Jr,6,3,"td",5),b(110,`
    `),zl$1(),b(111,`

    `),Rl$1(112,19),b(113,`
      `),Ie(114,Kr,2,0,"th",3),b(115,`
      `),Ie(116,Xr,3,3,"td",4),b(117,`
      `),Ie(118,Zr,6,3,"td",5),b(119,`
    `),zl$1(),b(120,`

    `),Rl$1(121,20),b(122,`
      `),Ie(123,tm,2,0,"th",3),b(124,`
      `),Ie(125,em,3,3,"td",4),b(126,`
      `),Ie(127,nm,6,3,"td",5),b(128,`
    `),zl$1(),b(129,`

    `),Ie(130,rm,11,0,"ng-container",21),b(131,`

    `),Ie(132,sm,11,0,"ng-container",21),b(133,`

    `),Rl$1(134,22),b(135,`
      `),Ie(136,pm,2,0,"th",3),b(137,`
      `),Ie(138,dm,3,3,"td",4),b(139,`
      `),Ie(140,um,6,3,"td",5),b(141,`
    `),zl$1(),b(142,`

    `),Rl$1(143,23),b(144,`
      `),Ie(145,fm,2,1,"th",3),b(146,`
    `),zl$1(),b(147,`

    `),Rl$1(148,24),b(149,`
      `),Ie(150,xm,2,1,"th",3),b(151,`
    `),zl$1(),b(152,`

    `),Rl$1(153,25),b(154,`
      `),Ie(155,_m,2,1,"th",3),b(156,`
    `),zl$1(),b(157,`

    `),Rl$1(158,26),b(159,`
      `),Ie(160,Cm,2,1,"th",3),b(161,`
    `),zl$1(),b(162,`

    `),Ie(163,vm,1,0,"tr",27),b(164,`
    `),Ie(165,gm,1,0,"tr",27),b(166,`
    `),Ie(167,hm,1,0,"tr",28),b(168,`
    `),Ie(169,Sm,1,0,"tr",29),b(170,`

  `),w(),b(171,`

`),w(),b(172,`

`),b(173,`
`)),l&2&&(D(2),z("dataSource",r.repaymentScheduleDetails.periods),D(128),z("ngIf",r.isWaived),D(2),z("ngIf",!r.isWaived),D(31),z("matHeaderRowDef",$o$1(7,ur)),D(2),z("matHeaderRowDef",r.displayedColumns),D(2),z("matRowDefColumns",r.displayedColumns),D(2),z("matFooterRowDef",r.displayedColumns));},dependencies:[Yo$1,uqe,mqe,bqe,pqe,fqe,xqe,hqe,yqe,gqe,vqe,_qe,Cqe,Mqe,wqe,yte,_te],styles:["table[_ngcontent-%COMP%]{width:100%;margin:3% 0%}.container[_ngcontent-%COMP%]{padding-bottom:2%}.check[_ngcontent-%COMP%]{padding-left:15px}"],changeDetection:1})}return e})();var ym=()=>["header","header-principal","header-interest","header-fees","header-penalties","header-action"],Dm=()=>["export"],xe=e=>({strike:e}),bm=e=>[e,"reciept"];function Tm(e,m){if(e&1){let a=Kt();x(0,"div",24),b(1,`
    `),x(2,"mat-checkbox",25),re("click",function(){ot(a);let r=K();return at(r.hideAccruals())}),b(3,"Hide Accruals"),w(),ki$1(),b(4,`
    `),x(5,"button",26),b(6,`
      Export
    `),w(),b(7,`
    `),x(8,"button",27),b(9,`
      View Journal Entries
    `),w(),b(10,`
  `),w();}if(e&2){let a=K();D(2),z("formControl",a.hideAccrualsParam),Li$1(),D(3),z("routerLink",$o$1(2,Dm));}}function Em(e,m){e&1&&(x(0,"th",28),b(1," Date "),w());}function Am(e,m){if(e&1&&(x(0,"td",29),b(1),w()),e&2){let a=m.$implicit;z("ngClass",gc$1(2,xe,a.manuallyReversed)),D(),it(" ",a.id," ");}}function Im(e,m){e&1&&(x(0,"th",28),b(1," Office "),w());}function Lm(e,m){if(e&1&&(x(0,"td",29),b(1),w()),e&2){let a=m.$implicit;z("ngClass",gc$1(2,xe,a.manuallyReversed)),D(),it(" ",a.officeName," ");}}function Fm(e,m){e&1&&(x(0,"th",28),b(1," Transaction Date "),w());}function wm(e,m){if(e&1&&(x(0,"td",29),b(1),nee(2,"date"),w()),e&2){let a=m.$implicit;z("ngClass",gc$1(4,xe,a.manuallyReversed)),D(),it(" ",ree(2,2,a.date)," ");}}function Pm(e,m){e&1&&(x(0,"th",28),b(1," Transaction Type "),w());}function Rm(e,m){if(e&1&&(x(0,"td",29),b(1),w()),e&2){let a=m.$implicit;z("ngClass",gc$1(2,xe,a.manuallyReversed)),D(),it(" ",a.type.value," ");}}function Om(e,m){e&1&&(x(0,"th",28),b(1," Amount "),w());}function Mm(e,m){if(e&1&&(x(0,"td",29),b(1),nee(2,"number"),w()),e&2){let a=m.$implicit;z("ngClass",gc$1(4,xe,a.manuallyReversed)),D(),it(" ",ree(2,2,a.amount)," ");}}function Nm(e,m){e&1&&(x(0,"th",28),b(1," Breakdown "),w());}function km(e,m){if(e&1&&(x(0,"td",29),b(1),nee(2,"number"),w()),e&2){let a=m.$implicit;z("ngClass",gc$1(4,xe,a.manuallyReversed)),D(),it(" ",ree(2,2,a.principalPortion)," ");}}function Gm(e,m){e&1&&(x(0,"th",28),b(1," "),w());}function Bm(e,m){if(e&1&&(x(0,"td",29),b(1),nee(2,"number"),w()),e&2){let a=m.$implicit;z("ngClass",gc$1(4,xe,a.manuallyReversed)),D(),it(" ",ree(2,2,a.interestPortion)," ");}}function jm(e,m){e&1&&(x(0,"th",28),b(1,"  "),w());}function Vm(e,m){if(e&1&&(x(0,"td",29),b(1),nee(2,"number"),w()),e&2){let a=m.$implicit;z("ngClass",gc$1(4,xe,a.manuallyReversed)),D(),it(" ",ree(2,2,a.feeChargesPortion)," ");}}function qm(e,m){e&1&&(x(0,"th",28),b(1,"  "),w());}function Hm(e,m){if(e&1&&(x(0,"td",29),b(1),nee(2,"number"),w()),e&2){let a=m.$implicit;z("ngClass",gc$1(4,xe,a.manuallyReversed)),D(),it(" ",ree(2,2,a.penaltyChargesPortion)," ");}}function $m(e,m){e&1&&(x(0,"th",28),b(1," Loan Balance "),w());}function Wm(e,m){if(e&1&&(x(0,"td",29),b(1),nee(2,"number"),w()),e&2){let a=m.$implicit;z("ngClass",gc$1(4,xe,a.manuallyReversed)),D(),it(" ",ree(2,2,a.outstandingLoanBalance)," ");}}function Um(e,m){e&1&&(x(0,"th",28),b(1," Actions "),w());}function zm(e,m){if(e&1){let a=Kt();x(0,"button",33),re("click",function(r){ot(a);let d=K(2);return at(d.routeEdit(r))}),b(1,`
            `),fe(2,"i",34),b(3,`
          `),w();}if(e&2){let a=K().$implicit;z("routerLink",gc$1(1,bm,a.id));}}function Qm(e,m){if(e&1){let a=Kt();x(0,"td",29),b(1,`
          `),Ie(2,zm,4,3,"button",30),b(3,`
          `),x(4,"button",31),re("click",function(r){ot(a);let d=K();return at(d.routeEdit(r))}),b(5,`
            `),fe(6,"i",32),b(7,`
          `),w(),b(8,`
        `),w();}if(e&2){let a=m.$implicit;z("ngClass",gc$1(2,xe,a.manuallyReversed)),D(2),z("ngIf",!a.manuallyReversed);}}function Ym(e,m){e&1&&(x(0,"th",28),b(1," "),w()),e&2&&Z("colspan",5);}function Jm(e,m){e&1&&(x(0,"th",28),b(1," Principal "),w()),e&2&&Z("colspan",1);}function Km(e,m){e&1&&(x(0,"th",28),b(1," Interest "),w()),e&2&&Z("colspan",1);}function Xm(e,m){e&1&&(x(0,"th",28),b(1," Fees "),w()),e&2&&Z("colspan",1);}function Zm(e,m){e&1&&(x(0,"th",28),b(1," Penalties "),w()),e&2&&Z("colspan",1);}function tl(e,m){e&1&&(x(0,"th",28),b(1,"  "),w()),e&2&&Z("colspan",2);}function el(e,m){e&1&&fe(0,"tr",35);}function nl(e,m){e&1&&fe(0,"tr",35);}function il(e,m){if(e&1){let a=Kt();x(0,"tr",36),re("click",function(){let r=ot(a).$implicit,d=K();return at(d.showTransactions(r))}),w();}}var si=(()=>{class e{route;router;transactions;showTransactionsData;tempTransaction;hideAccrualsParam;status;displayedColumns=["id","office","transactionDate","transactionType","amount","principal","interest","fee","penalties","loanBalance","actions"];constructor(a,l){this.route=a,this.router=l,this.route.parent.parent.data.subscribe(r=>{this.transactions=r.loanDetailsData.transactions,this.tempTransaction=r.loanDetailsData.transactions,this.status=r.loanDetailsData.status.value;});}ngOnInit(){this.hideAccrualsParam=new Qi$1(false),this.tempTransaction.forEach(a=>{a.type.accrual&&(this.tempTransaction=this.removeItem(this.tempTransaction,a));}),this.showTransactionsData=this.transactions;}checkStatus(){return this.status==="Active"||this.status==="Closed (obligations met)"||this.status==="Overpaid"||this.status==="Closed (rescheduled)"||this.status==="Closed (written off)"}hideAccruals(){this.hideAccrualsParam.value?this.showTransactionsData=this.transactions:this.showTransactionsData=this.tempTransaction;}removeItem(a,l){return a.filter(r=>r!==l)}showTransactions(a){(a.type.id===2||a.type.id===4||a.type.id===1)&&this.router.navigate([a.id],{relativeTo:this.route});}routeEdit(a){a.stopPropagation();}static \u0275fac=function(l){return new(l||e)(T(zs$1),T(Gr$1))};static \u0275cmp=N({type:e,selectors:[["mifosx-transactions-tab"]],standalone:false,decls:122,vars:6,consts:[[1,"container"],["fxLayout","row","fxLayoutAlign","end","fxLayoutGap","20px","class","transaction-buttons",4,"ngIf"],["mat-table","",3,"dataSource"],["matColumnDef","id"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",3,"ngClass",4,"matCellDef"],["matColumnDef","office"],["matColumnDef","transactionDate"],["matColumnDef","transactionType"],["matColumnDef","amount"],["matColumnDef","principal"],["matColumnDef","interest"],["matColumnDef","fee"],["matColumnDef","penalties"],["matColumnDef","loanBalance"],["matColumnDef","actions"],["matColumnDef","header"],["matColumnDef","header-principal"],["matColumnDef","header-interest"],["matColumnDef","header-fees"],["matColumnDef","header-penalties"],["matColumnDef","header-action"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","","class","select-row",3,"click",4,"matRowDef","matRowDefColumns"],["fxLayout","row","fxLayoutAlign","end","fxLayoutGap","20px",1,"transaction-buttons"],[1,"accruals",3,"click","formControl"],["mat-raised-button","","color","primary",3,"routerLink"],["mat-raised-button","","color","primary"],["mat-header-cell",""],["mat-cell","",3,"ngClass"],["class","account-action-button","mat-raised-button","","color","primary","matTooltip","View Receipts",3,"routerLink","click",4,"ngIf"],["mat-raised-button","","color","primary","matTooltip","View Journal Entries","matTooltipPosition","left",1,"account-action-button",3,"click"],[1,"fa","fa-arrow-circle-right"],["mat-raised-button","","color","primary","matTooltip","View Receipts",1,"account-action-button",3,"click","routerLink"],[1,"fa","fa-file-text"],["mat-header-row",""],["mat-row","",1,"select-row",3,"click"]],template:function(l,r){l&1&&(x(0,"div",0),b(1,`

  `),Ie(2,Tm,11,3,"div",1),b(3,`

  `),x(4,"table",2),b(5,`

      `),Rl$1(6,3),b(7,`
        `),Ie(8,Em,2,0,"th",4),b(9,`
        `),Ie(10,Am,2,4,"td",5),b(11,`
      `),zl$1(),b(12,`

      `),Rl$1(13,6),b(14,`
        `),Ie(15,Im,2,0,"th",4),b(16,`
        `),Ie(17,Lm,2,4,"td",5),b(18,`
      `),zl$1(),b(19,`

      `),Rl$1(20,7),b(21,`
        `),Ie(22,Fm,2,0,"th",4),b(23,`
        `),Ie(24,wm,3,6,"td",5),b(25,`
      `),zl$1(),b(26,`

      `),Rl$1(27,8),b(28,`
        `),Ie(29,Pm,2,0,"th",4),b(30,`
        `),Ie(31,Rm,2,4,"td",5),b(32,`
      `),zl$1(),b(33,`

      `),Rl$1(34,9),b(35,`
        `),Ie(36,Om,2,0,"th",4),b(37,`
        `),Ie(38,Mm,3,6,"td",5),b(39,`
      `),zl$1(),b(40,`

      `),Rl$1(41,10),b(42,`
        `),Ie(43,Nm,2,0,"th",4),b(44,`
        `),Ie(45,km,3,6,"td",5),b(46,`
      `),zl$1(),b(47,`

      `),Rl$1(48,11),b(49,`
        `),Ie(50,Gm,2,0,"th",4),b(51,`
        `),Ie(52,Bm,3,6,"td",5),b(53,`
      `),zl$1(),b(54,`

      `),Rl$1(55,12),b(56,`
        `),Ie(57,jm,2,0,"th",4),b(58,`
        `),Ie(59,Vm,3,6,"td",5),b(60,`
      `),zl$1(),b(61,`

      `),Rl$1(62,13),b(63,`
        `),Ie(64,qm,2,0,"th",4),b(65,`
        `),Ie(66,Hm,3,6,"td",5),b(67,`
      `),zl$1(),b(68,`

      `),Rl$1(69,14),b(70,`
        `),Ie(71,$m,2,0,"th",4),b(72,`
        `),Ie(73,Wm,3,6,"td",5),b(74,`
      `),zl$1(),b(75,`

      `),Rl$1(76,15),b(77,`
        `),Ie(78,Um,2,0,"th",4),b(79,`
        `),Ie(80,Qm,9,4,"td",5),b(81,`
      `),zl$1(),b(82,`

    `),b(83,`
    `),Rl$1(84,16),b(85,`
      `),Ie(86,Ym,2,1,"th",4),b(87,`
    `),zl$1(),b(88,`

    `),Rl$1(89,17),b(90,`
      `),Ie(91,Jm,2,1,"th",4),b(92,`
    `),zl$1(),b(93,`

    `),Rl$1(94,18),b(95,`
      `),Ie(96,Km,2,1,"th",4),b(97,`
    `),zl$1(),b(98,`

    `),Rl$1(99,19),b(100,`
      `),Ie(101,Xm,2,1,"th",4),b(102,`
    `),zl$1(),b(103,`

    `),Rl$1(104,20),b(105,`
      `),Ie(106,Zm,2,1,"th",4),b(107,`
    `),zl$1(),b(108,`

    `),Rl$1(109,21),b(110,`
      `),Ie(111,tl,2,1,"th",4),b(112,`
    `),zl$1(),b(113,`

    `),Ie(114,el,1,0,"tr",22),b(115,`
    `),Ie(116,nl,1,0,"tr",22),b(117,`
    `),Ie(118,il,1,0,"tr",23),b(119,`

  `),w(),b(120,`

`),w(),b(121,`
`)),l&2&&(D(2),z("ngIf",r.checkStatus()),D(2),z("dataSource",r.showTransactionsData),D(110),z("matHeaderRowDef",r.displayedColumns),D(2),z("matHeaderRowDef",$o$1(5,ym)),D(2),z("matRowDefColumns",r.displayedColumns));},dependencies:[i3,Yo$1,go$1,Mc,eA,SBe,Sn$1,uv,uqe,mqe,bqe,pqe,fqe,xqe,gqe,vqe,Cqe,Mqe,ia$1,Na$1,Pl$1,bp$1,yte,_te],styles:[".container[_ngcontent-%COMP%]{padding-bottom:2%}.container[_ngcontent-%COMP%]   .transaction-buttons[_ngcontent-%COMP%]{padding-bottom:1rem;padding-top:1rem}.container[_ngcontent-%COMP%]   .transaction-buttons[_ngcontent-%COMP%]   .accruals[_ngcontent-%COMP%]{padding-top:1%}.container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]{width:100%}.container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   .account-action-button[_ngcontent-%COMP%]{min-width:26px;padding:0 0 3px;margin:0 10%;line-height:25px}.container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   .select-row[_ngcontent-%COMP%]:hover{cursor:pointer}.container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   .strike[_ngcontent-%COMP%]{text-decoration:line-through;color:red}"],changeDetection:1})}return e})();var al=()=>["header","header-amount","header-total-cost","header-installment-totals"];function ol(e,m){e&1&&(x(0,"th",20),b(1," Date "),w());}function rl(e,m){if(e&1&&(x(0,"td",21),b(1),nee(2,"date"),w()),e&2){let a=m.$implicit;D(),it(" ",ree(2,1,a.dueDate)," ");}}function ml(e,m){e&1&&(x(0,"td",22),b(1," "),x(2,"b"),b(3," Total"),w(),b(4," "),w());}function ll(e,m){e&1&&(x(0,"th",20),b(1," Principal Due "),w());}function cl(e,m){if(e&1&&(x(0,"td",21),b(1),nee(2,"number"),w()),e&2){let a=m.$implicit;D(),it(" ",ree(2,1,a.principalDue)," ");}}function sl(e,m){if(e&1&&(x(0,"td",22),b(1," "),x(2,"b"),b(3),nee(4,"number"),w(),b(5," "),w()),e&2){let a=K();D(3),it(" ",ree(4,1,a.originalScheduleDetails.totalPrincipalExpected)," ");}}function pl(e,m){e&1&&(x(0,"th",20),b(1," Balance Of Loan "),w());}function dl(e,m){if(e&1&&(x(0,"td",21),b(1),nee(2,"number"),w()),e&2){let a=m.$implicit;D(),it(" ",ree(2,1,a.principalLoanBalanceOutstanding)," ");}}function ul(e,m){e&1&&(x(0,"td",22),b(1," \xA0 "),w());}function fl(e,m){e&1&&(x(0,"th",20),b(1," Interest "),w());}function xl(e,m){if(e&1&&(x(0,"td",21),b(1),nee(2,"number"),w()),e&2){let a=m.$implicit;D(),it(" ",ree(2,1,a.interestOriginalDue)," ");}}function _l(e,m){if(e&1&&(x(0,"td",22),b(1," "),x(2,"b"),b(3),nee(4,"number"),w(),b(5," "),w()),e&2){let a=K();D(3),it(" ",ree(4,1,a.originalScheduleDetails.totalInterestCharged)," ");}}function Cl(e,m){e&1&&(x(0,"th",20),b(1," Fees "),w());}function vl(e,m){if(e&1&&(x(0,"td",21),b(1),nee(2,"number"),w()),e&2){let a=m.$implicit;D(),it(" ",ree(2,1,a.feeChargesDue)," ");}}function gl(e,m){if(e&1&&(x(0,"td",22),b(1," "),x(2,"b"),b(3),nee(4,"number"),w(),b(5," "),w()),e&2){let a=K();D(3),it(" ",ree(4,1,a.originalScheduleDetails.totalFeeChargesCharged)," ");}}function hl(e,m){e&1&&(x(0,"th",20),b(1," Penalties "),w());}function Sl(e,m){if(e&1&&(x(0,"td",21),b(1),nee(2,"number"),w()),e&2){let a=m.$implicit;D(),it(" ",ree(2,1,a.penaltyChargesDue)," ");}}function yl(e,m){if(e&1&&(x(0,"td",22),b(1," "),x(2,"b"),b(3),nee(4,"number"),w(),b(5," "),w()),e&2){let a=K();D(3),it(" ",ree(4,1,a.originalScheduleDetails.totalPenaltyChargesCharged)," ");}}function Dl(e,m){e&1&&(x(0,"th",20),b(1," Outstanding "),w());}function bl(e,m){if(e&1&&(x(0,"td",21),b(1),nee(2,"number"),w()),e&2){let a=m.$implicit;D(),it(" ",ree(2,1,a.totalOutstandingForPeriod)," ");}}function Tl(e,m){if(e&1&&(x(0,"td",22),b(1," "),x(2,"b"),b(3),nee(4,"number"),w(),b(5," "),w()),e&2){let a=K();D(3),it(" ",ree(4,1,a.originalScheduleDetails.totalRepaymentExpected)," ");}}function El(e,m){e&1&&(x(0,"th",23),b(1," "),w()),e&2&&Z("colspan",1);}function Al(e,m){e&1&&(x(0,"th",23),b(1," Loan Amount and Balance "),w()),e&2&&Z("colspan",2);}function Il(e,m){e&1&&(x(0,"th",23),b(1," Total Cost of Loan "),w()),e&2&&Z("colspan",3);}function Ll(e,m){e&1&&(x(0,"th",23),b(1," Installment Totals "),w()),e&2&&Z("colspan",1);}function Fl(e,m){e&1&&fe(0,"tr",24);}function wl(e,m){e&1&&fe(0,"tr",24);}function Pl(e,m){e&1&&fe(0,"tr",25);}function Rl(e,m){e&1&&fe(0,"tr",26);}var pi=(()=>{class e{route;originalScheduleDetails;displayedColumns=["date","principalDue","balanceOfLoan","interest","fees","penalties","outstanding"];constructor(a){this.route=a,this.route.parent.data.subscribe(l=>{this.originalScheduleDetails=l.loanDetailsData.originalSchedule;});}ngOnInit(){}static \u0275fac=function(l){return new(l||e)(T(zs$1))};static \u0275cmp=N({type:e,selectors:[["mifosx-original-schedule-tab"]],standalone:false,decls:99,vars:6,consts:[[1,"container"],["mat-table","","matSort","",3,"dataSource"],["matColumnDef","date"],["mat-header-cell","","mat-sort-header","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["mat-footer-cell","",4,"matFooterCellDef"],["matColumnDef","principalDue"],["matColumnDef","balanceOfLoan"],["matColumnDef","interest"],["matColumnDef","fees"],["matColumnDef","penalties"],["matColumnDef","outstanding"],["matColumnDef","header"],["mat-header-cell","",4,"matHeaderCellDef"],["matColumnDef","header-amount"],["matColumnDef","header-total-cost"],["matColumnDef","header-installment-totals"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["mat-footer-row","",4,"matFooterRowDef"],["mat-header-cell","","mat-sort-header",""],["mat-cell",""],["mat-footer-cell",""],["mat-header-cell",""],["mat-header-row",""],["mat-row",""],["mat-footer-row",""]],template:function(l,r){l&1&&(x(0,"div",0),b(1,`

  `),x(2,"table",1),b(3,`

    `),Rl$1(4,2),b(5,`
      `),Ie(6,ol,2,0,"th",3),b(7,`
      `),Ie(8,rl,3,3,"td",4),b(9,`
      `),Ie(10,ml,5,0,"td",5),b(11,`
    `),zl$1(),b(12,`

    `),Rl$1(13,6),b(14,`
      `),Ie(15,ll,2,0,"th",3),b(16,`
      `),Ie(17,cl,3,3,"td",4),b(18,`
      `),Ie(19,sl,6,3,"td",5),b(20,`
    `),zl$1(),b(21,`

    `),Rl$1(22,7),b(23,`
      `),Ie(24,pl,2,0,"th",3),b(25,`
      `),Ie(26,dl,3,3,"td",4),b(27,`
      `),Ie(28,ul,2,0,"td",5),b(29,`
    `),zl$1(),b(30,`

    `),Rl$1(31,8),b(32,`
      `),Ie(33,fl,2,0,"th",3),b(34,`
      `),Ie(35,xl,3,3,"td",4),b(36,`
      `),Ie(37,_l,6,3,"td",5),b(38,`
    `),zl$1(),b(39,`

    `),Rl$1(40,9),b(41,`
      `),Ie(42,Cl,2,0,"th",3),b(43,`
      `),Ie(44,vl,3,3,"td",4),b(45,`
      `),Ie(46,gl,6,3,"td",5),b(47,`
    `),zl$1(),b(48,`

    `),Rl$1(49,10),b(50,`
      `),Ie(51,hl,2,0,"th",3),b(52,`
      `),Ie(53,Sl,3,3,"td",4),b(54,`
      `),Ie(55,yl,6,3,"td",5),b(56,`
    `),zl$1(),b(57,`

    `),Rl$1(58,11),b(59,`
      `),Ie(60,Dl,2,0,"th",3),b(61,`
      `),Ie(62,bl,3,3,"td",4),b(63,`
      `),Ie(64,Tl,6,3,"td",5),b(65,`
    `),zl$1(),b(66,`

    `),b(67,`
    `),Rl$1(68,12),b(69,`
      `),Ie(70,El,2,1,"th",13),b(71,`
    `),zl$1(),b(72,`

    `),b(73,`
    `),Rl$1(74,14),b(75,`
      `),Ie(76,Al,2,1,"th",13),b(77,`
    `),zl$1(),b(78,`

    `),Rl$1(79,15),b(80,`
      `),Ie(81,Il,2,1,"th",13),b(82,`
    `),zl$1(),b(83,`

    `),Rl$1(84,16),b(85,`
      `),Ie(86,Ll,2,1,"th",13),b(87,`
    `),zl$1(),b(88,`

    `),Ie(89,Fl,1,0,"tr",17),b(90,`
    `),Ie(91,wl,1,0,"tr",17),b(92,`
    `),Ie(93,Pl,1,0,"tr",18),b(94,`
    `),Ie(95,Rl,1,0,"tr",19),b(96,`

  `),w(),b(97,`

`),w(),b(98,`
`)),l&2&&(D(2),z("dataSource",r.originalScheduleDetails.periods),D(87),z("matHeaderRowDef",$o$1(5,al)),D(2),z("matHeaderRowDef",r.displayedColumns),D(2),z("matRowDefColumns",r.displayedColumns),D(2),z("matFooterRowDef",r.displayedColumns));},dependencies:[Iue,yWe,uqe,mqe,bqe,pqe,fqe,xqe,hqe,yqe,gqe,vqe,_qe,Cqe,Mqe,wqe,yte,_te],styles:["table[_ngcontent-%COMP%]{width:100%;margin:3% 0%}.container[_ngcontent-%COMP%]{padding-bottom:2%}"],changeDetection:1})}return e})();var Ol=()=>[10,25,50,100];function Ml(e,m){e&1&&(x(0,"th",11),b(1," Name "),w());}function Nl(e,m){if(e&1&&(x(0,"td",12),b(1),w()),e&2){let a=m.$implicit;D(),Y0$1(" ",a.name,",",a.currency.displaySymbol," ");}}function kl(e,m){e&1&&(x(0,"th",11),b(1," Type "),w());}function Gl(e,m){if(e&1&&(x(0,"td",12),b(1),w()),e&2){let a=m.$implicit;D(),it(" ",a.chargeCalculationType.value," ");}}function Bl(e,m){e&1&&(x(0,"th",11),b(1," Amount "),w());}function jl(e,m){if(e&1&&(x(0,"td",12),b(1),nee(2,"number"),w()),e&2){let a=m.$implicit;D(),it(" ",ree(2,1,a.amount)," ");}}function Vl(e,m){e&1&&(x(0,"th",11),b(1," Collected On "),w());}function ql(e,m){if(e&1&&(x(0,"td",12),b(1),w()),e&2){let a=m.$implicit;D(),it(" ",a.chargeTimeType.value," ");}}function Hl(e,m){e&1&&fe(0,"tr",13);}function $l(e,m){e&1&&fe(0,"tr",14);}var ui=(()=>{class e{route;loanDetails;overdueCharges;displayedColumns=["name","type","amount","collectedon"];dataSource;paginator;sort;constructor(a){this.route=a,this.route.parent.data.subscribe(l=>{this.loanDetails=l.loanDetailsData;});}ngOnInit(){this.overdueCharges=this.loanDetails.overdueCharges,this.dataSource=new zB(this.overdueCharges),this.dataSource.paginator=this.paginator,this.dataSource.sort=this.sort;}static \u0275fac=function(l){return new(l||e)(T(zs$1))};static \u0275cmp=N({type:e,selectors:[["mifosx-overdue-charges-tab"]],viewQuery:function(l,r){if(l&1&&ze(P4e,7)(Iue,7),l&2){let d;j(d=H())&&(r.paginator=d.first),j(d=H())&&(r.sort=d.first);}},standalone:false,decls:40,vars:5,consts:[[1,"container"],["mat-table","","matSort","",3,"dataSource"],["matColumnDef","name"],["mat-header-cell","","mat-sort-header","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","type"],["matColumnDef","amount"],["matColumnDef","collectedon"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["showFirstLastButtons","",3,"pageSizeOptions"],["mat-header-cell","","mat-sort-header",""],["mat-cell",""],["mat-header-row",""],["mat-row",""]],template:function(l,r){l&1&&(x(0,"div",0),b(1,`

  `),x(2,"table",1),b(3,`

    `),Rl$1(4,2),b(5,`
      `),Ie(6,Ml,2,0,"th",3),b(7,`
      `),Ie(8,Nl,2,2,"td",4),b(9,`
    `),zl$1(),b(10,`

    `),Rl$1(11,5),b(12,`
      `),Ie(13,kl,2,0,"th",3),b(14,`
      `),Ie(15,Gl,2,1,"td",4),b(16,`
    `),zl$1(),b(17,`

    `),Rl$1(18,6),b(19,`
      `),Ie(20,Bl,2,0,"th",3),b(21,`
      `),Ie(22,jl,3,3,"td",4),b(23,`
    `),zl$1(),b(24,`

    `),Rl$1(25,7),b(26,`
      `),Ie(27,Vl,2,0,"th",3),b(28,`
      `),Ie(29,ql,2,1,"td",4),b(30,`
    `),zl$1(),b(31,`

    `),Ie(32,Hl,1,0,"tr",8),b(33,`
    `),Ie(34,$l,1,0,"tr",9),b(35,`
  `),w(),b(36,`

  `),fe(37,"mat-paginator",10),b(38,`

`),w(),b(39,`
`)),l&2&&(D(2),z("dataSource",r.dataSource),D(30),z("matHeaderRowDef",r.displayedColumns),D(2),z("matRowDefColumns",r.displayedColumns),D(3),z("pageSizeOptions",$o$1(4,Ol)));},dependencies:[P4e,Iue,yWe,uqe,mqe,bqe,pqe,fqe,xqe,gqe,vqe,Cqe,Mqe,yte],styles:["table[_ngcontent-%COMP%]{width:100%;margin-top:3%}"],changeDetection:1})}return e})();var Wl=()=>[10,25,50,100],Ul=e=>[e];function zl(e,m){e&1&&(x(0,"th",17),b(1," Name "),w());}function Ql(e,m){if(e&1&&(x(0,"td",18),b(1),w()),e&2){let a=m.$implicit;D(),it(" ",a.name," ");}}function Yl(e,m){e&1&&(x(0,"th",17),b(1," Fee/Penalty "),w());}function Jl(e,m){e&1&&(x(0,"span"),b(1,"Penalty"),w());}function Kl(e,m){e&1&&(x(0,"span"),b(1,"Fee"),w());}function Xl(e,m){if(e&1&&(x(0,"td",18),b(1,`
          `),Ie(2,Jl,2,0,"span",19),b(3,`
          `),Ie(4,Kl,2,0,"span",19),b(5,`
        `),w()),e&2){let a=m.$implicit;D(2),z("ngIf",a.penalty),D(2),z("ngIf",!a.penalty);}}function Zl(e,m){e&1&&(x(0,"th",17),b(1," Payment due at "),w());}function t0(e,m){if(e&1&&(x(0,"td",18),b(1),w()),e&2){let a=m.$implicit;D(),it(" ",a.chargeTimeType.value," ");}}function e0(e,m){e&1&&(x(0,"th",17),b(1," Due as of "),w());}function n0(e,m){if(e&1&&(x(0,"td",18),b(1),nee(2,"date"),w()),e&2){let a=m.$implicit;D(),it(" ",ree(2,1,a.dueDate)," ");}}function i0(e,m){e&1&&(x(0,"th",17),b(1," Calculation Type "),w());}function a0(e,m){if(e&1&&(x(0,"td",18),b(1),w()),e&2){let a=m.$implicit;D(),it(" ",a.chargeCalculationType.value," ");}}function o0(e,m){e&1&&(x(0,"th",17),b(1," Due "),w());}function r0(e,m){if(e&1&&(x(0,"td",18),b(1),nee(2,"number"),w()),e&2){let a=m.$implicit;D(),Y0$1(" ",a.currency.displaySymbol,"",ree(2,2,a.amount)," ");}}function m0(e,m){e&1&&(x(0,"th",17),b(1," Paid "),w());}function l0(e,m){if(e&1&&(x(0,"td",18),b(1),nee(2,"number"),w()),e&2){let a=m.$implicit;D(),Y0$1(" ",a.currency.displaySymbol,"",ree(2,2,a.amountPaid)," ");}}function c0(e,m){e&1&&(x(0,"th",17),b(1," Waived "),w());}function s0(e,m){if(e&1&&(x(0,"td",18),b(1),nee(2,"number"),w()),e&2){let a=m.$implicit;D(),Y0$1(" ",a.currency.displaySymbol,"",ree(2,2,a.amountWaived)," ");}}function p0(e,m){e&1&&(x(0,"th",17),b(1," Outstanding "),w());}function d0(e,m){if(e&1&&(x(0,"td",18),b(1),nee(2,"number"),w()),e&2){let a=m.$implicit;D(),Y0$1(" ",a.currency.displaySymbol,"",ree(2,2,a.amountOutstanding)," ");}}function u0(e,m){e&1&&(x(0,"th",17),b(1," Actions "),w());}function f0(e,m){if(e&1){let a=Kt();x(0,"span"),b(1,`
            `),x(2,"button",22),re("click",function(r){ot(a);let d=K().$implicit,h=K();return h.routeEdit(r),at(h.editCharge(d))}),b(3,`
              `),fe(4,"i",23),b(5,`
            `),w(),b(6,`
            `),x(7,"button",24),re("click",function(r){ot(a);let d=K().$implicit,h=K();return h.routeEdit(r),at(h.deleteCharge(d.id))}),b(8,`
              `),fe(9,"i",25),b(10,`
            `),w(),b(11,`
          `),w();}}function x0(e,m){if(e&1){let a=Kt();x(0,"button",26),re("click",function(r){ot(a);let d=K().$implicit,h=K();return h.routeEdit(r),at(h.payCharge(d.id))}),b(1,`
              `),fe(2,"i",27),b(3,`
            `),w();}}function _0(e,m){if(e&1){let a=Kt();x(0,"button",28),re("click",function(r){ot(a);let d=K().$implicit,h=K();return h.routeEdit(r),at(h.waiveCharge(d.id))}),b(1,`
              `),fe(2,"i",29),b(3,`
            `),w();}}function C0(e,m){if(e&1&&(x(0,"td",18),b(1,`
          `),Ie(2,f0,12,0,"span",19),b(3,`
            `),Ie(4,x0,4,0,"button",20),b(5,`
            `),Ie(6,_0,4,0,"button",21),b(7,`
        `),w()),e&2){let a=m.$implicit,l=K();D(2),z("ngIf",l.status==="Submitted and pending approval"),D(2),z("ngIf",a.chargePayable&&l.status=="Active"),D(2),z("ngIf",!a.actionFlag);}}function v0(e,m){e&1&&fe(0,"tr",30);}function g0(e,m){if(e&1&&fe(0,"tr",31),e&2){let a=m.$implicit;z("routerLink",gc$1(1,Ul,a.id));}}var fi=(()=>{class e{loansService;route;datePipe;router;dialog;settingsService;loanDetails;chargesData;status;displayedColumns=["name","feepenalty","paymentdueat","dueasof","calculationtype","due","paid","waived","outstanding","actions"];dataSource;paginator;sort;constructor(a,l,r,d,h,I){this.loansService=a,this.route=l,this.datePipe=r,this.router=d,this.dialog=h,this.settingsService=I,this.route.parent.data.subscribe(R=>{this.loanDetails=R.loanDetailsData;});}ngOnInit(){this.chargesData=this.loanDetails.charges,this.status=this.loanDetails.status.value;let a;this.chargesData.forEach(l=>{l.paid||l.waived||l.chargeTimeType.value==="Disbursement"||this.loanDetails.status.value!=="Active"?a=true:a=false,l.actionFlag=a;}),this.dataSource=new zB(this.chargesData),this.dataSource.paginator=this.paginator,this.dataSource.sort=this.sort;}payCharge(a){let l=[new r({controlName:"amount",label:"Amount",value:"",type:"number",required:true}),new m({controlName:"dueDate",label:"Payment Date",value:"",type:"date",required:true})],r$1={title:`Pay Charge ${a}`,layout:{addButtonText:"Confirm"},formfields:l};this.dialog.open(_Ne,{data:r$1}).afterClosed().subscribe(h=>{if(h.data){let R=this.settingsService.dateFormat,Ut=Re(O({},h.data.value),{dueDate:this.datePipe.transform(h.data.value.dueDate,R),dateFormat:R,locale:"en"});this.loansService.executeLoansAccountChargesCommand(this.loanDetails.id,"paycharge",Ut,a).subscribe(()=>{this.reload();});}});}waiveCharge(a){this.dialog.open(zOe,{data:{heading:"Waive Charge",dialogContext:`Are you sure you want to waive charge with id: ${a}`,type:"Basic"}}).afterClosed().subscribe(r=>{r.confirm&&this.loansService.executeLoansAccountChargesCommand(this.loanDetails.id,"waive",{},a).subscribe(()=>{this.reload();});});}editCharge(a){let l=[new r({controlName:"amount",label:"Amount",value:a.amount||a.amountOrPercentage,type:"number",required:true})],r$1={title:`Edit Charge ${a.id}`,layout:{addButtonText:"Confirm"},formfields:l};this.dialog.open(_Ne,{data:r$1}).afterClosed().subscribe(h=>{if(h.data){let I=this.settingsService.language.code,R=this.settingsService.dateFormat,Ut=Re(O({},h.data.value),{dateFormat:R,locale:I});this.loansService.editLoansAccountCharge(this.loanDetails.id,Ut,a.id).subscribe(()=>{this.reload();});}});}deleteCharge(a){this.dialog.open(CNe,{data:{deleteContext:`charge id:${a}`}}).afterClosed().subscribe(r=>{r.delete&&this.loansService.deleteLoansAccountCharge(this.loanDetails.id,a).subscribe(()=>{this.reload();});});}routeEdit(a){a.stopPropagation();}reload(){let a=this.loanDetails.clientId,l=this.router.url;this.router.navigateByUrl(`/clients/${a}/loans-accounts`,{skipLocationChange:true}).then(()=>this.router.navigate([l]));}static \u0275fac=function(l){return new(l||e)(T(E),T(zs$1),T(_te),T(Gr$1),T(Iv),T(yF))};static \u0275cmp=N({type:e,selectors:[["mifosx-charges-tab"]],viewQuery:function(l,r){if(l&1&&ze(P4e,7)(Iue,7),l&2){let d;j(d=H())&&(r.paginator=d.first),j(d=H())&&(r.sort=d.first);}},standalone:false,decls:82,vars:5,consts:[[1,"tab-container"],["mat-table","","matSort","",3,"dataSource"],["matColumnDef","name"],["mat-header-cell","","mat-sort-header","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","feepenalty"],["matColumnDef","paymentdueat"],["matColumnDef","dueasof"],["matColumnDef","calculationtype"],["matColumnDef","due"],["matColumnDef","paid"],["matColumnDef","waived"],["matColumnDef","outstanding"],["matColumnDef","actions"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","","class","select-row",3,"routerLink",4,"matRowDef","matRowDefColumns"],["showFirstLastButtons","",3,"pageSizeOptions"],["mat-header-cell","","mat-sort-header",""],["mat-cell",""],[4,"ngIf"],["class","account-action-button","mat-raised-button","","color","primary","matTooltip","Pay Charge",3,"click",4,"ngIf"],["class","account-action-button","mat-raised-button","","color","primary","matTooltip","Waive Charge",3,"click",4,"ngIf"],["mat-raised-button","","color","primary","matTooltip","Edit Charge",1,"account-action-button",3,"click"],[1,"fa","fa-pencil"],["mat-raised-button","","color","warn","matTooltip","Delete Charge",1,"account-action-button",3,"click"],[1,"fa","fa-trash"],["mat-raised-button","","color","primary","matTooltip","Pay Charge",1,"account-action-button",3,"click"],[1,"fa","fa-dollar"],["mat-raised-button","","color","primary","matTooltip","Waive Charge",1,"account-action-button",3,"click"],[1,"fa","fa-flag"],["mat-header-row",""],["mat-row","",1,"select-row",3,"routerLink"]],template:function(l,r){l&1&&(x(0,"div",0),b(1,`

    `),x(2,"table",1),b(3,`

      `),Rl$1(4,2),b(5,`
        `),Ie(6,zl,2,0,"th",3),b(7,`
        `),Ie(8,Ql,2,1,"td",4),b(9,`
      `),zl$1(),b(10,`

      `),Rl$1(11,5),b(12,`
        `),Ie(13,Yl,2,0,"th",3),b(14,`
        `),Ie(15,Xl,6,2,"td",4),b(16,`
      `),zl$1(),b(17,`

      `),Rl$1(18,6),b(19,`
        `),Ie(20,Zl,2,0,"th",3),b(21,`
        `),Ie(22,t0,2,1,"td",4),b(23,`
      `),zl$1(),b(24,`

      `),Rl$1(25,7),b(26,`
        `),Ie(27,e0,2,0,"th",3),b(28,`
        `),Ie(29,n0,3,3,"td",4),b(30,`
      `),zl$1(),b(31,`

      `),Rl$1(32,8),b(33,`
        `),Ie(34,i0,2,0,"th",3),b(35,`
        `),Ie(36,a0,2,1,"td",4),b(37,`
      `),zl$1(),b(38,`

      `),Rl$1(39,9),b(40,`
        `),Ie(41,o0,2,0,"th",3),b(42,`
        `),Ie(43,r0,3,4,"td",4),b(44,`
      `),zl$1(),b(45,`

      `),Rl$1(46,10),b(47,`
        `),Ie(48,m0,2,0,"th",3),b(49,`
        `),Ie(50,l0,3,4,"td",4),b(51,`
      `),zl$1(),b(52,`

      `),Rl$1(53,11),b(54,`
        `),Ie(55,c0,2,0,"th",3),b(56,`
        `),Ie(57,s0,3,4,"td",4),b(58,`
      `),zl$1(),b(59,`

      `),Rl$1(60,12),b(61,`
        `),Ie(62,p0,2,0,"th",3),b(63,`
        `),Ie(64,d0,3,4,"td",4),b(65,`
      `),zl$1(),b(66,`

      `),Rl$1(67,13),b(68,`
        `),Ie(69,u0,2,0,"th",3),b(70,`
        `),Ie(71,C0,8,3,"td",4),b(72,`
      `),zl$1(),b(73,`

      `),Ie(74,v0,1,0,"tr",14),b(75,`
      `),Ie(76,g0,1,3,"tr",15),b(77,`
    `),w(),b(78,`

    `),fe(79,"mat-paginator",16),b(80,`

`),w(),b(81,`
`)),l&2&&(D(2),z("dataSource",r.dataSource),D(72),z("matHeaderRowDef",r.displayedColumns),D(2),z("matRowDefColumns",r.displayedColumns),D(3),z("pageSizeOptions",$o$1(4,Wl)));},dependencies:[Yo$1,Sn$1,P4e,Iue,yWe,uqe,mqe,bqe,pqe,fqe,xqe,gqe,vqe,Cqe,Mqe,ia$1,bp$1,yte,_te],styles:[".tab-container[_ngcontent-%COMP%]{padding:1%;margin:1%}.tab-container[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin:1% auto}.tab-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]{width:100%;margin-top:3%}.tab-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   .account-action-button[_ngcontent-%COMP%]{min-width:26px;padding:0 6px;margin:4px;line-height:25px}.tab-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   .select-row[_ngcontent-%COMP%]:hover{cursor:pointer}"],changeDetection:1})}return e})();var h0=["dataTable"];function S0(e,m){if(e&1){let a=Kt();x(0,"span"),b(1,`
        `),x(2,"button",10),re("click",function(){ot(a);let r=K();return at(r.add())}),b(3,`
          `),fe(4,"fa-icon",11),b(5,`\xA0\xA0Add
        `),w(),b(6,`
      `),w();}}function y0(e,m){if(e&1){let a=Kt();x(0,"button",13),re("click",function(){ot(a);let r=K(2);return at(r.delete())}),b(1,`
          `),fe(2,"fa-icon",14),b(3,`\xA0\xA0Delete All
        `),w();}}function D0(e,m){if(e&1&&(x(0,"span"),b(1,`
        `),Ie(2,y0,4,0,"button",12),b(3,`
      `),w()),e&2){let a=K();D(2),z("ngIf",a.showDeleteBotton);}}function b0(e,m){if(e&1&&(x(0,"th",18),b(1),w()),e&2){let a=K().$implicit;D(),it(" ",a," ");}}function T0(e,m){if(e&1&&(x(0,"td",19),b(1),w()),e&2){let a=m.$implicit,l=K().index;D(),it(" ",a.row[l]," ");}}function E0(e,m){if(e&1&&(Rl$1(0,15),b(1,`
      `),Ie(2,b0,2,1,"th",16),b(3,`
      `),Ie(4,T0,2,1,"td",17),b(5,`
    `),zl$1()),e&2){let a=m.$implicit;z("matColumnDef",a);}}function A0(e,m){e&1&&fe(0,"tr",20);}function I0(e,m){e&1&&fe(0,"tr",21);}var xi=(()=>{class e{route;datePipe;loansService;dialog;settingsService;dataObject;datatableName;datatableColumns=[];datatableData;loanId;showDeleteBotton;dataTableRef;constructor(a,l,r,d,h){this.route=a,this.datePipe=l,this.loansService=r,this.dialog=d,this.settingsService=h,this.loanId=this.route.parent.parent.snapshot.paramMap.get("loanId");}ngOnChanges(){this.datatableColumns=this.dataObject.columnHeaders.map(a=>a.columnName),this.datatableData=this.dataObject.data,this.showDeleteBotton=!!this.datatableData[0];}ngOnInit(){this.route.params.subscribe(a=>{this.datatableName=a.datatableName;});}add(){let a={locale:"en"},l=[],d=this.dataObject.columnHeaders.filter(R=>R.columnName!=="id"&&R.columnName!=="loan_id").map(R=>{switch(R.columnDisplayType){case "INTEGER":case "STRING":case "DECIMAL":case "TEXT":return new r({controlName:R.columnName,label:R.columnName,value:"",type:R.columnDisplayType==="INTEGER"||R.columnDisplayType==="DECIMAL"?"number":"text",required:!R.isColumnNullable});case "BOOLEAN":return new s({controlName:R.columnName,label:R.columnName,value:"",type:"checkbox",required:!R.isColumnNullable});case "CODELOOKUP":return new r$1({controlName:R.columnName,label:R.columnName,value:"",options:{label:"value",value:"id",data:R.columnValues},required:!R.isColumnNullable});case "DATE":return l.push(R.columnName),a.dateFormat=this.settingsService.dateFormat,new m({controlName:R.columnName,label:R.columnName,value:"",type:"date",required:!R.isColumnNullable});case "DATETIME":return l.push(R.columnName),a.dateFormat=this.settingsService.dateFormat,new m({controlName:R.columnName,label:R.columnName,value:"",type:"datetime-local",required:!R.isColumnNullable})}}),h={title:"Add "+this.datatableName,formfields:d};this.dialog.open(_Ne,{data:h}).afterClosed().subscribe(R=>{R.data&&(l.forEach(Ut=>{R.data.value[Ut]=this.datePipe.transform(R.data.value[Ut],a.dateFormat);}),a=O(O({},R.data.value),a),this.loansService.addLoanDatatableEntry(this.loanId,this.datatableName,a).subscribe(()=>{this.loansService.getLoanDatatable(this.loanId,this.datatableName).subscribe(Ut=>{this.datatableData=Ut.data,this.dataTableRef.renderRows();});}));});}delete(){this.dialog.open(CNe,{data:{deleteContext:`the contents of ${this.datatableName}`}}).afterClosed().subscribe(l=>{l.delete&&this.loansService.deleteDatatableContent(this.loanId,this.datatableName).subscribe(()=>{this.loansService.getLoanDatatable(this.loanId,this.datatableName).subscribe(r=>{this.datatableData=r.data,this.showDeleteBotton=false,this.dataTableRef.renderRows();});});});}static \u0275fac=function(l){return new(l||e)(T(zs$1),T(_te),T(E),T(Iv),T(yF))};static \u0275cmp=N({type:e,selectors:[["mifosx-multi-row"]],viewQuery:function(l,r){if(l&1&&ze(h0,7),l&2){let d;j(d=H())&&(r.dataTableRef=d.first);}},inputs:{dataObject:"dataObject"},standalone:false,features:[Pe],decls:29,vars:8,consts:[["dataTable",""],[1,"tab-container","mat-typography"],["fxLayout","row","fxLayoutAlign","start"],[1,"m-b-10"],["fxLayoutGap","10px",1,"action-button","m-b-5"],[4,"mifosxHasPermission"],["mat-table","",1,"mat-elevation-z1","m-b-25",3,"hidden","dataSource"],[3,"matColumnDef",4,"ngFor","ngForOf"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["mat-raised-button","","color","primary",3,"click"],["icon","plus"],["class","delete-button","mat-raised-button","","color","warn",3,"click",4,"ngIf"],["mat-raised-button","","color","warn",1,"delete-button",3,"click"],["icon","trash"],[3,"matColumnDef"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["mat-header-cell",""],["mat-cell",""],["mat-header-row",""],["mat-row",""]],template:function(l,r){l&1&&(x(0,"div",1),b(1,`

  `),x(2,"div",2),b(3,`
    `),x(4,"div",3),b(5,`
      `),x(6,"h3"),b(7),w(),b(8,`
    `),w(),b(9,`
    `),x(10,"div",4),b(11,`
      `),Ie(12,S0,7,0,"span",5),b(13,`
      `),Ie(14,D0,4,1,"span",5),b(15,`
    `),w(),b(16,`
  `),w(),b(17,`


  `),x(18,"table",6,0),b(20,`

    `),Ie(21,E0,6,1,"ng-container",7),b(22,`

    `),Ie(23,A0,1,0,"tr",8),b(24,`
    `),Ie(25,I0,1,0,"tr",9),b(26,`

  `),w(),b(27,`

`),w(),b(28,`
`)),l&2&&(D(7),Dt(r.datatableName),D(5),z("mifosxHasPermission","CREATE_"+r.datatableName),D(2),z("mifosxHasPermission","DELETE_"+r.datatableName),D(4),z("hidden",!r.datatableData[0])("dataSource",r.datatableData),D(3),z("ngForOf",r.datatableColumns),D(2),z("matHeaderRowDef",r.datatableColumns),D(2),z("matRowDefColumns",r.datatableColumns));},dependencies:[ii,Yo$1,Oc$1,go$1,Mc,eA,Sn$1,uqe,mqe,bqe,pqe,fqe,xqe,gqe,vqe,Cqe,Mqe,XQe],styles:[".tab-container[_ngcontent-%COMP%]{padding:1%;margin:1%}.tab-container[_ngcontent-%COMP%]   .action-button[_ngcontent-%COMP%]{margin-left:auto}.tab-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]{width:100%}"],changeDetection:1})}return e})();function F0(e,m){if(e&1){let a=Kt();x(0,"button",8),re("click",function(){ot(a);let r=K(2);return at(r.add())}),b(1,`
            `),fe(2,"fa-icon",9),b(3,`\xA0\xA0Add
          `),w();}}function w0(e,m){if(e&1&&(x(0,"span"),b(1,`
          `),Ie(2,F0,4,0,"button",7),b(3,`
        `),w()),e&2){let a=K();D(2),z("ngIf",!a.dataObject.data[0]);}}function P0(e,m){if(e&1){let a=Kt();x(0,"button",8),re("click",function(){ot(a);let r=K(2);return at(r.edit())}),b(1,`
            `),fe(2,"fa-icon",10),b(3,`\xA0\xA0Edit
          `),w();}}function R0(e,m){if(e&1&&(x(0,"span"),b(1,`
          `),Ie(2,P0,4,0,"button",7),b(3,`
        `),w()),e&2){let a=K();D(2),z("ngIf",a.dataObject.data[0]);}}function O0(e,m){if(e&1){let a=Kt();x(0,"button",13),re("click",function(){ot(a);let r=K(2);return at(r.delete())}),b(1,`
            `),fe(2,"fa-icon",14),b(3,`\xA0\xA0Delete
          `),w();}}function M0(e,m){if(e&1&&(x(0,"span",11),b(1,`
          `),Ie(2,O0,4,0,"button",12),b(3,`
        `),w()),e&2){let a=K();D(2),z("ngIf",a.dataObject.data[0]);}}function N0(e,m){if(e&1&&(x(0,"mat-list-item",17),b(1),w()),e&2){let a=m.$implicit,l=m.index,r=K(2);D(),Y0$1(`
        `,a.columnName," : ",r.dataObject.data[0].row[l],`
      `);}}function k0(e,m){if(e&1&&(x(0,"mat-list",15),b(1,`
      `),Ie(2,N0,2,2,"mat-list-item",16),b(3,`
    `),w()),e&2){let a=K();D(2),z("ngForOf",a.dataObject.columnHeaders);}}var _i=(()=>{class e{route;datePipe;dialog;loansService;settingsService;dataObject;datatableName;loanId;constructor(a,l,r,d,h){this.route=a,this.datePipe=l,this.dialog=r,this.loansService=d,this.settingsService=h,this.loanId=this.route.parent.parent.snapshot.paramMap.get("loanId");}ngOnInit(){this.route.params.subscribe(a=>{this.datatableName=a.datatableName;});}add(){let a={locale:this.settingsService.language.code},l=[],r=this.dataObject.columnHeaders.filter(R=>R.columnName!=="id"&&R.columnName!=="loan_id"),d=this.getFormfields(r,l,a),h={title:"Add "+this.datatableName,formfields:d};this.dialog.open(_Ne,{data:h}).afterClosed().subscribe(R=>{R.data&&(l.forEach(Ut=>{R.data.value[Ut]=this.datePipe.transform(R.data.value[Ut],a.dateFormat);}),a=O(O({},R.data.value),a),this.loansService.addLoanDatatableEntry(this.loanId,this.datatableName,a).subscribe(()=>{this.loansService.getLoanDatatable(this.loanId,this.datatableName).subscribe(Ut=>{this.dataObject=Ut;});}));});}edit(){let a={locale:this.settingsService.language.code},l=[],r=this.dataObject.columnHeaders.filter(R=>R.columnName!=="id"&&R.columnName!=="loan_id"),d=this.getFormfields(r,l,a);d=d.map((R,Ut)=>(R.value=this.dataObject.data[0].row[Ut+1]?this.dataObject.data[0].row[Ut+1]:"",R));let h={title:"Edit "+this.datatableName,layout:{addButtonText:"Confirm"},formfields:d};this.dialog.open(_Ne,{data:h}).afterClosed().subscribe(R=>{R.data&&(l.forEach(Ut=>{R.data.value[Ut]=this.datePipe.transform(R.data.value[Ut],a.dateFormat);}),a=O(O({},R.data.value),a),this.loansService.editLoanDatatableEntry(this.loanId,this.datatableName,a).subscribe(()=>{this.loansService.getLoanDatatable(this.loanId,this.datatableName).subscribe(Ut=>{this.dataObject=Ut;});}));});}delete(){this.dialog.open(CNe,{data:{deleteContext:`the contents of ${this.datatableName}`}}).afterClosed().subscribe(l=>{l.delete&&this.loansService.deleteDatatableContent(this.loanId,this.datatableName).subscribe(()=>{this.loansService.getLoanDatatable(this.loanId,this.datatableName).subscribe(r=>{this.dataObject=r;});});});}getFormfields(a,l,r$2){return a.map(d=>{switch(d.columnDisplayType){case "INTEGER":case "STRING":case "DECIMAL":case "TEXT":return new r({controlName:d.columnName,label:d.columnName,value:"",type:d.columnDisplayType==="INTEGER"||d.columnDisplayType==="DECIMAL"?"number":"text",required:!d.isColumnNullable});case "BOOLEAN":return new s({controlName:d.columnName,label:d.columnName,value:"",type:"checkbox",required:!d.isColumnNullable});case "CODELOOKUP":return new r$1({controlName:d.columnName,label:d.columnName,value:"",options:{label:"value",value:"id",data:d.columnValues},required:!d.isColumnNullable});case "DATE":return l.push(d.columnName),r$2.dateFormat=this.settingsService.dateFormat,new m({controlName:d.columnName,label:d.columnName,value:"",type:"date",required:!d.isColumnNullable});case "DATETIME":return l.push(d.columnName),r$2.dateFormat="yyyy-MM-dd HH:mm",new m({controlName:d.columnName,label:d.columnName,value:"",type:"datetime-local",required:!d.isColumnNullable})}})}static \u0275fac=function(l){return new(l||e)(T(zs$1),T(_te),T(Iv),T(E),T(yF))};static \u0275cmp=N({type:e,selectors:[["mifosx-single-row"]],inputs:{dataObject:"dataObject"},standalone:false,decls:31,vars:5,consts:[[1,"tab-container","mat-typography"],["fxLayout","column","fxFlex","50%",1,"tableName"],["fxLayout","column","fxFlex","50%"],["fxLayout","row","fxLayoutAlign","flex-end"],[4,"mifosxHasPermission"],["class","delete-button",4,"mifosxHasPermission"],["role","list",4,"ngIf"],["mat-raised-button","","color","primary",3,"click",4,"ngIf"],["mat-raised-button","","color","primary",3,"click"],["icon","plus"],["icon","edit"],[1,"delete-button"],["mat-raised-button","","color","warn",3,"click",4,"ngIf"],["mat-raised-button","","color","warn",3,"click"],["icon","trash"],["role","list"],["role","listitem",4,"ngFor","ngForOf"],["role","listitem"]],template:function(l,r){l&1&&(x(0,"div",0),b(1,`

  `),x(2,"div"),b(3,`

    `),x(4,"div",1),b(5,`
      `),x(6,"h3"),b(7),w(),b(8,`
    `),w(),b(9,`

    `),x(10,"div",2),b(11,`
      `),x(12,"div",3),b(13,`
        `),Ie(14,w0,4,1,"span",4),b(15,`
        `),Ie(16,R0,4,1,"span",4),b(17,`
        `),Ie(18,M0,4,1,"span",5),b(19,`
      `),w(),b(20,`
    `),w(),b(21,`

  `),w(),b(22,`

  `),fe(23,"mat-divider"),b(24,`

  `),x(25,"div"),b(26,`
    `),Ie(27,k0,4,1,"mat-list",6),b(28,`
  `),w(),b(29,`

`),w(),b(30,`
`)),l&2&&(D(7),Dt(r.datatableName),D(7),z("mifosxHasPermission","CREATE_"+r.datatableName),D(2),z("mifosxHasPermission","UPDATE_"+r.datatableName),D(2),z("mifosxHasPermission","DELETE_"+r.datatableName),D(9),z("ngIf",r.dataObject.data[0]));},dependencies:[ii,Yo$1,Oc$1,go$1,eA,wc$1,Sn$1,Th,wUe,MUe,XQe],styles:[".tab-container[_ngcontent-%COMP%]{padding:1%;margin:1%}.tab-container[_ngcontent-%COMP%]   .delete-button[_ngcontent-%COMP%]{margin-left:1%}.tableName[_ngcontent-%COMP%]{padding-left:2%}"],changeDetection:1})}return e})();function B0(e,m){if(e&1&&fe(0,"mifosx-multi-row",1),e&2){let a=K();z("dataObject",a.loanDatatable);}}function j0(e,m){if(e&1&&fe(0,"mifosx-single-row",1),e&2){let a=K();z("dataObject",a.loanDatatable);}}var Ci=(()=>{class e{route;loanDatatable;multiRowDatatableFlag;constructor(a){this.route=a,this.route.data.subscribe(l=>{this.loanDatatable=l.loanDatatable,this.multiRowDatatableFlag=this.loanDatatable.columnHeaders[0].columnName==="id";});}static \u0275fac=function(l){return new(l||e)(T(zs$1))};static \u0275cmp=N({type:e,selectors:[["mifosx-datatable-tab"]],standalone:false,decls:7,vars:2,consts:[[3,"dataObject",4,"ngIf"],[3,"dataObject"]],template:function(l,r){l&1&&(x(0,"div"),b(1,`
  `),Ie(2,B0,1,1,"mifosx-multi-row",0),b(3,`
  `),Ie(4,j0,1,1,"mifosx-single-row",0),b(5,`
`),w(),b(6,`
`)),l&2&&(D(2),z("ngIf",r.multiRowDatatableFlag),D(2),z("ngIf",!r.multiRowDatatableFlag));},dependencies:[Yo$1,xi,_i],encapsulation:2,changeDetection:1})}return e})();var V0=()=>["../../general"];function q0(e,m){if(e&1&&(x(0,"mat-option",13),b(1),w()),e&2){let a=m.$implicit;z("value",a.id),D(),it(`
                `,a.name+" ("+a?.currency.name+")",`
              `);}}function H0(e,m){e&1&&(x(0,"mat-error"),b(1,`
              Charge is `),x(2,"strong"),b(3,"required"),w(),b(4,`
            `),w());}function $0(e,m){e&1&&(x(0,"mat-error"),b(1,`
              Amount is `),x(2,"strong"),b(3,"required"),w(),b(4,`
            `),w());}function W0(e,m){e&1&&(x(0,"mat-error"),b(1,`
              Due Date is `),x(2,"strong"),b(3,"required"),w(),b(4,`
            `),w());}function U0(e,m){if(e&1&&(x(0,"mat-form-field"),b(1,`
            `),x(2,"mat-label"),b(3,"Due On"),w(),b(4,`
            `),fe(5,"input",14),ki$1(),b(6,`
            `),fe(7,"mat-datepicker-toggle",15),b(8,`
            `),fe(9,"mat-datepicker",null,0),b(11,`
            `),Ie(12,W0,5,0,"mat-error",6),b(13,`
          `),w()),e&2){let a=Nt(10),l=K();D(5),z("min",l.minDate)("max",l.maxDate)("matDatepicker",a),Li$1(),D(2),z("for",a),D(5),z("ngIf",l.loanChargeForm.controls.dueDate.hasError("required"));}}function z0(e,m){if(e&1&&(x(0,"button",16),b(1,"Submit"),w()),e&2){let a=K();z("disabled",!a.loanChargeForm.valid);}}var vi=(()=>{class e{formBuilder;route;router;datePipe;loansService;settingsService;minDate=new Date(2e3,0,1);maxDate=new Date;loanChargeForm;loanChargeOptions;loanId;constructor(a,l,r,d,h,I){this.formBuilder=a,this.route=l,this.router=r,this.datePipe=d,this.loansService=h,this.settingsService=I,this.route.data.subscribe(R=>{this.loanChargeOptions=R.actionButtonData.chargeOptions;}),this.loanId=this.route.parent.snapshot.params.loanId;}ngOnInit(){this.createLoanChargeForm(),this.loanChargeForm.controls.chargeId.valueChanges.subscribe(a=>{let l=this.loanChargeOptions.find(r=>r.id===a);l.chargeTimeType.id===2?this.loanChargeForm.addControl("dueDate",new Qi$1("",mi$1.required)):this.loanChargeForm.removeControl("dueDate"),this.loanChargeForm.patchValue({amount:l.amount,chargeCalculation:l.chargeCalculationType.value,chargeTime:l.chargeTimeType.value});});}createLoanChargeForm(){this.loanChargeForm=this.formBuilder.group({chargeId:["",mi$1.required],amount:["",mi$1.required],chargeCalculation:[{value:"",disabled:true}],chargeTime:[{value:"",disabled:true}]});}submit(){let a=this.loanChargeForm.value.dueDate,l=this.settingsService.dateFormat;this.loanChargeForm.patchValue({dueDate:this.datePipe.transform(a,l)});let r=this.loanChargeForm.value;r.locale=this.settingsService.language.code,r.dateFormat=l,this.loansService.createLoanCharge(this.loanId,"charges",r).subscribe(d=>{this.router.navigate(["../../general"],{relativeTo:this.route});});}static \u0275fac=function(l){return new(l||e)(T(AI),T(zs$1),T(Gr$1),T(_te),T(E),T(yF))};static \u0275cmp=N({type:e,selectors:[["mifosx-add-loan-charge"]],standalone:false,decls:64,vars:8,consts:[["dueDatePicker",""],[1,"container"],[3,"ngSubmit","formGroup"],["fxLayout","column"],["required","","formControlName","chargeId"],[3,"value",4,"ngFor","ngForOf"],[4,"ngIf"],["type","number","required","","matInput","","formControlName","amount"],["matInput","","formControlName","chargeCalculation"],["matInput","","formControlName","chargeTime"],["fxLayoutGap","5px","fxLayout","row","fxLayout.xs","column","fxLayoutAlign","center"],["type","button","mat-raised-button","",3,"routerLink"],["mat-raised-button","","color","primary",3,"disabled",4,"mifosxHasPermission"],[3,"value"],["matInput","","required","","formControlName","dueDate",3,"min","max","matDatepicker"],["matSuffix","",3,"for"],["mat-raised-button","","color","primary",3,"disabled"]],template:function(l,r){l&1&&(x(0,"div",1),b(1,`

  `),x(2,"mat-card"),b(3,`

    `),x(4,"form",2),re("ngSubmit",function(){return r.submit()}),b(5,`

      `),x(6,"mat-card-content"),b(7,`

        `),x(8,"div",3),b(9,`
          `),x(10,"mat-form-field"),b(11,`
            `),x(12,"mat-label"),b(13,"Charge"),w(),b(14,`
            `),x(15,"mat-select",4),b(16,`
              `),Ie(17,q0,2,2,"mat-option",5),b(18,`
            `),w(),ki$1(),b(19,`
            `),Ie(20,H0,5,0,"mat-error",6),b(21,`
          `),w(),b(22,`

          `),x(23,"mat-form-field"),b(24,`
            `),x(25,"mat-label"),b(26,"Amount"),w(),b(27,`
            `),fe(28,"input",7),ki$1(),b(29,`
            `),Ie(30,$0,5,0,"mat-error",6),b(31,`
          `),w(),b(32,`

          `),x(33,"mat-form-field"),b(34,`
            `),x(35,"mat-label"),b(36,"Charge Calculation"),w(),b(37,`
            `),fe(38,"input",8),ki$1(),b(39,`
          `),w(),b(40,`

          `),x(41,"mat-form-field"),b(42,`
            `),x(43,"mat-label"),b(44,"Charge Time"),w(),b(45,`
            `),fe(46,"input",9),ki$1(),b(47,`
          `),w(),b(48,`

          `),Ie(49,U0,14,5,"mat-form-field",6),b(50,`

        `),w(),b(51,`

        `),x(52,"mat-card-actions",10),b(53,`
          `),x(54,"button",11),b(55,"Cancel"),w(),b(56,`
          `),Ie(57,z0,2,1,"button",12),b(58,`
        `),w(),b(59,`

      `),w(),b(60,`

    `),w(),b(61,`

  `),w(),b(62,`

`),w(),b(63,`
`)),l&2&&(D(4),z("formGroup",r.loanChargeForm),D(11),Li$1(),D(2),z("ngForOf",r.loanChargeOptions),D(3),z("ngIf",r.loanChargeForm.controls.chargeId.hasError("required")),D(8),Li$1(),D(2),z("ngIf",r.loanChargeForm.controls.amount.hasError("required")),D(8),Li$1(),D(8),Li$1(),D(3),z("ngIf",r.loanChargeForm.controls.dueDate),D(5),z("routerLink",$o$1(7,V0)),D(3),z("mifosxHasPermission","CREATE_LOANCHARGE"));},dependencies:[ii,Yo$1,go$1,Mc,eA,Ti$1,Sn$1,Sje,Aje,Lje,zT,dh,Mv,Ri$1,Br$1,O3,sv,Ac$1,ja$1,DI,Cc$1,Wne,Na$1,k2,S6,uo$1,_3,bp$1,XQe],styles:[".container[_ngcontent-%COMP%]{max-width:37rem}"],changeDetection:1})}return e})();var Y0=()=>["../../general"];function J0(e,m){e&1&&(x(0,"mat-error"),b(1,`
              Closed Date `),x(2,"strong"),b(3,"is required"),w(),b(4,`
            `),w());}function K0(e,m){if(e&1&&(x(0,"button",11),b(1,"Submit"),w()),e&2){let a=K();z("disabled",!a.closeLoanForm.valid);}}var gi=(()=>{class e{formBuilder;loanService;route;router;datePipe;settingsService;dataObject;closeLoanForm;loanId;minDate=new Date(2e3,0,1);maxDate=new Date;constructor(a,l,r,d,h,I){this.formBuilder=a,this.loanService=l,this.route=r,this.router=d,this.datePipe=h,this.settingsService=I,this.loanId=this.route.parent.snapshot.params.loanId;}ngOnInit(){this.createCloseForm();}createCloseForm(){this.closeLoanForm=this.formBuilder.group({transactionDate:[new Date(this.dataObject.date)||new Date,mi$1.required],note:[]});}submit(){let a=this.closeLoanForm.value.transactionDate,l=this.settingsService.dateFormat;this.closeLoanForm.patchValue({transactionDate:this.datePipe.transform(a,l)});let r=this.closeLoanForm.value;r.locale=this.settingsService.language.code,r.dateFormat=l,this.loanService.submitLoanActionButton(this.loanId,r,"close").subscribe(d=>{this.router.navigate(["../../general"],{relativeTo:this.route});});}static \u0275fac=function(l){return new(l||e)(T(AI),T(E),T(zs$1),T(Gr$1),T(_te),T(yF))};static \u0275cmp=N({type:e,selectors:[["mifosx-loans-account-close"]],inputs:{dataObject:"dataObject"},standalone:false,decls:46,vars:9,consts:[["closedDatePicker",""],[1,"container"],[3,"ngSubmit","formGroup"],["fxLayout","column"],["matInput","","required","","formControlName","transactionDate",3,"min","max","matDatepicker"],["matSuffix","",3,"for"],[4,"ngIf"],["matInput","","formControlName","note"],["fxLayout","row","fxLayout.xs","column","fxLayoutAlign","center","fxLayoutGap","5px"],["type","button","mat-raised-button","",3,"routerLink"],["mat-raised-button","","color","primary",3,"disabled",4,"mifosxHasPermission"],["mat-raised-button","","color","primary",3,"disabled"]],template:function(l,r){if(l&1&&(x(0,"div",1),b(1,`

  `),x(2,"mat-card"),b(3,`

    `),x(4,"form",2),re("ngSubmit",function(){return r.submit()}),b(5,`

      `),x(6,"mat-card-content"),b(7,`

        `),x(8,"div",3),b(9,`

          `),x(10,"mat-form-field"),b(11,`
            `),x(12,"mat-label"),b(13,"Closed On"),w(),b(14,`
            `),fe(15,"input",4),ki$1(),b(16,`
            `),fe(17,"mat-datepicker-toggle",5),b(18,`
            `),fe(19,"mat-datepicker",null,0),b(21,`
            `),Ie(22,J0,5,0,"mat-error",6),b(23,`
          `),w(),b(24,`

          `),x(25,"mat-form-field"),b(26,`
            `),x(27,"mat-label"),b(28,"Note"),w(),b(29,`
            `),fe(30,"textarea",7),ki$1(),b(31,`
          `),w(),b(32,`

        `),w(),b(33,`

        `),x(34,"mat-card-actions",8),b(35,`
          `),x(36,"button",9),b(37,"Cancel"),w(),b(38,`
          `),Ie(39,K0,2,1,"button",10),b(40,`
        `),w(),b(41,`

      `),w(),b(42,`

    `),w(),b(43,`

  `),w(),b(44,`

`),w(),b(45,`
`)),l&2){let d=Nt(20);D(4),z("formGroup",r.closeLoanForm),D(11),z("min",r.minDate)("max",r.maxDate)("matDatepicker",d),Li$1(),D(2),z("for",d),D(5),z("ngIf",r.closeLoanForm.controls.transactionDate.hasError("required")),D(8),Li$1(),D(6),z("routerLink",$o$1(8,Y0)),D(3),z("mifosxHasPermission","CLOSE_LOAN");}},dependencies:[Yo$1,go$1,Mc,eA,Sn$1,Sje,Aje,Lje,zT,dh,Mv,Ri$1,Br$1,O3,sv,Ac$1,DI,Cc$1,Na$1,k2,S6,uo$1,_3,bp$1,XQe],styles:[".container[_ngcontent-%COMP%]{max-width:37rem}"],changeDetection:1})}return e})();var Z0=()=>["../../general"];function tc(e,m){if(e&1){let a=Kt();x(0,"button",6),re("click",function(){ot(a);let r=K();return at(r.submit())}),b(1,"Submit"),w();}}var hi=(()=>{class e{loanService;formBuilder;route;router;note;constructor(a,l,r,d){this.loanService=a,this.formBuilder=l,this.route=r,this.router=d;}ngOnInit(){this.note=this.formBuilder.control("");}submit(){let a=this.route.parent.snapshot.params.loanId;this.loanService.loanActionButtons(a,"undoapproval",{note:this.note.value}).subscribe(l=>{this.router.navigate(["../../general"],{relativeTo:this.route});});}static \u0275fac=function(l){return new(l||e)(T(E),T(AI),T(zs$1),T(Gr$1))};static \u0275cmp=N({type:e,selectors:[["mifosx-undo-approval"]],standalone:false,decls:25,vars:4,consts:[[1,"container"],["fxFlex",""],["matInput","",3,"formControl"],["fxLayout","row","fxLayout.xs","column","fxLayoutAlign","center","fxLayoutGap","5px"],["type","button","mat-raised-button","",3,"routerLink"],["mat-raised-button","","color","primary",3,"click",4,"mifosxHasPermission"],["mat-raised-button","","color","primary",3,"click"]],template:function(l,r){l&1&&(x(0,"div",0),b(1,`

  `),x(2,"mat-card"),b(3,`

    `),x(4,"mat-card-content"),b(5,`

      `),x(6,"mat-form-field",1),b(7,`
        `),x(8,"mat-label"),b(9,"Note"),w(),b(10,`
        `),fe(11,"textarea",2),ki$1(),b(12,`
      `),w(),b(13,`

    `),w(),b(14,`

    `),x(15,"mat-card-actions",3),b(16,`
      `),x(17,"button",4),b(18,"Cancel"),w(),b(19,`
      `),Ie(20,tc,2,0,"button",5),b(21,`
    `),w(),b(22,`

  `),w(),b(23,`

`),w(),b(24,`
`)),l&2&&(D(11),z("formControl",r.note),Li$1(),D(6),z("routerLink",$o$1(3,Z0)),D(3),z("mifosxHasPermission","APPROVALUNDO_LOAN"));},dependencies:[go$1,Mc,eA,wc$1,Sn$1,Sje,Aje,Lje,Ri$1,Br$1,Ac$1,Cc$1,Na$1,Pl$1,bp$1,XQe],styles:[".container[_ngcontent-%COMP%]{max-width:37rem}"],changeDetection:1})}return e})();var nc=()=>["../../general"];function ic(e,m){if(e&1&&(x(0,"mat-option",12),b(1),w()),e&2){let a=m.$implicit;z("value",a.id),D(),it(`
                `,a.displayName,`
              `);}}function ac(e,m){e&1&&(x(0,"mat-error"),b(1,`
              Loan Officer is `),x(2,"strong"),b(3,"required"),w(),b(4,`
            `),w());}function oc(e,m){e&1&&(x(0,"mat-error"),b(1,`
              Assignment Date `),x(2,"strong"),b(3,"is required"),w(),b(4,`
            `),w());}function rc(e,m){if(e&1&&(x(0,"button",13),b(1,"Submit"),w()),e&2){let a=K();z("disabled",!a.assignOfficerForm.valid);}}var Si=(()=>{class e{formBuilder;loanService;route;router;datePipe;settingsService;dataObject;loanId;loanOfficers;minDate=new Date(2e3,0,1);maxDate=new Date;assignOfficerForm;constructor(a,l,r,d,h,I){this.formBuilder=a,this.loanService=l,this.route=r,this.router=d,this.datePipe=h,this.settingsService=I,this.loanId=this.route.parent.snapshot.params.loanId;}ngOnInit(){this.createassignOfficerForm(),this.loanOfficers=this.dataObject.loanOfficerOptions;}createassignOfficerForm(){this.assignOfficerForm=this.formBuilder.group({toLoanOfficerId:["",mi$1.required],assignmentDate:[new Date,mi$1.required]});}submit(){let a=this.assignOfficerForm.value.assignmentDate,l=this.settingsService.dateFormat;this.assignOfficerForm.patchValue({assignmentDate:this.datePipe.transform(a,l)});let r=this.assignOfficerForm.value;r.locale=this.settingsService.language.code,r.dateFormat=l,r.fromLoanOfficerId=this.dataObject.loanOfficerId||"",this.loanService.loanActionButtons(this.loanId,"assignLoanOfficer",r).subscribe(d=>{this.router.navigate(["../../general"],{relativeTo:this.route});});}static \u0275fac=function(l){return new(l||e)(T(AI),T(E),T(zs$1),T(Gr$1),T(_te),T(yF))};static \u0275cmp=N({type:e,selectors:[["mifosx-assign-loan-officer"]],inputs:{dataObject:"dataObject"},standalone:false,decls:51,vars:11,consts:[["assignOnDatePicker",""],[1,"container"],[3,"ngSubmit","formGroup"],["fxLayout","column"],["required","","formControlName","toLoanOfficerId"],[3,"value",4,"ngFor","ngForOf"],[4,"ngIf"],["matInput","","required","","formControlName","assignmentDate",3,"min","max","matDatepicker"],["matSuffix","",3,"for"],["fxLayout","row","fxLayout.xs","column","fxLayoutAlign","center","fxLayoutGap","5px"],["type","button","mat-raised-button","",3,"routerLink"],["mat-raised-button","","color","primary",3,"disabled",4,"mifosxHasPermission"],[3,"value"],["mat-raised-button","","color","primary",3,"disabled"]],template:function(l,r){if(l&1&&(x(0,"div",1),b(1,`

  `),x(2,"mat-card"),b(3,`

    `),x(4,"form",2),re("ngSubmit",function(){return r.submit()}),b(5,`

      `),x(6,"mat-card-content"),b(7,`

        `),x(8,"div",3),b(9,`

          `),x(10,"mat-form-field"),b(11,`
            `),x(12,"mat-label"),b(13," To Loan Officer"),w(),b(14,`
            `),x(15,"mat-select",4),b(16,`
              `),Ie(17,ic,2,2,"mat-option",5),b(18,`
            `),w(),ki$1(),b(19,`
            `),Ie(20,ac,5,0,"mat-error",6),b(21,`
          `),w(),b(22,`

          `),x(23,"mat-form-field"),b(24,`
            `),x(25,"mat-label"),b(26,"Assignment Date"),w(),b(27,`
            `),fe(28,"input",7),ki$1(),b(29,`
            `),fe(30,"mat-datepicker-toggle",8),b(31,`
            `),fe(32,"mat-datepicker",null,0),b(34,`
            `),Ie(35,oc,5,0,"mat-error",6),b(36,`
          `),w(),b(37,`

        `),w(),b(38,`

        `),x(39,"mat-card-actions",9),b(40,`
          `),x(41,"button",10),b(42,"Cancel"),w(),b(43,`
          `),Ie(44,rc,2,1,"button",11),b(45,`
        `),w(),b(46,`

      `),w(),b(47,`

    `),w(),b(48,`

  `),w(),b(49,`

`),w(),b(50,`
`)),l&2){let d=Nt(33);D(4),z("formGroup",r.assignOfficerForm),D(11),Li$1(),D(2),z("ngForOf",r.loanOfficers),D(3),z("ngIf",r.assignOfficerForm.controls.toLoanOfficerId.hasError("required")),D(8),z("min",r.minDate)("max",r.maxDate)("matDatepicker",d),Li$1(),D(2),z("for",d),D(5),z("ngIf",r.assignOfficerForm.controls.assignmentDate.hasError("required")),D(6),z("routerLink",$o$1(10,nc)),D(3),z("mifosxHasPermission","BULKREASSIGN_LOAN");}},dependencies:[ii,Yo$1,go$1,Mc,eA,Ti$1,Sn$1,Sje,Aje,Lje,zT,dh,Mv,Ri$1,Br$1,O3,sv,Ac$1,ja$1,DI,Cc$1,Na$1,k2,S6,uo$1,_3,bp$1,XQe],styles:[".container[_ngcontent-%COMP%]{max-width:37rem}"],changeDetection:1})}return e})();var lc=()=>["../../general"];function cc(e,m){e&1&&(x(0,"mat-error"),b(1,`
              Transaction Date `),x(2,"strong"),b(3,"is required"),w(),b(4,`
            `),w());}function sc(e,m){if(e&1&&(x(0,"button",16),b(1,"Foreclosure"),w()),e&2){let a=K();z("disabled",!a.foreclosureForm.valid);}}var yi=(()=>{class e{formBuilder;loanService;route;router;datePipe;settingsService;loanId;foreclosureForm;minDate=new Date(2e3,0,1);maxDate=new Date;foreclosuredata;paymentTypes;constructor(a,l,r,d,h,I){this.formBuilder=a,this.loanService=l,this.route=r,this.router=d,this.datePipe=h,this.settingsService=I,this.loanId=this.route.parent.snapshot.params.loanId;}ngOnInit(){this.createforeclosureForm(),this.onChanges();}createforeclosureForm(){this.foreclosureForm=this.formBuilder.group({transactionDate:[new Date,mi$1.required],outstandingPrincipalPortion:[{value:"",disabled:true}],outstandingInterestPortion:[{value:"",disabled:true}],outstandingFeeChargesPortion:[{value:"",disabled:true}],outstandingPenaltyChargesPortion:[{value:"",disabled:true}],transactionAmount:[{value:"",disabled:true}],interestAccruedAfterDeath:"",note:""});}onChanges(){this.foreclosureForm.get("transactionDate").valueChanges.subscribe(a=>{this.retrieveLoanForeclosureTemplate(a);});}retrieveLoanForeclosureTemplate(a){let l=this.settingsService.dateFormat,r=this.datePipe.transform(a,l),d={command:"foreclosure",dateFormat:this.settingsService.dateFormat,locale:this.settingsService.language.code,transactionDate:r};this.loanService.getForeclosureData(this.loanId,d).subscribe(h=>{this.foreclosuredata=h,this.foreclosureForm.patchValue({outstandingPrincipalPortion:this.foreclosuredata.principalPortion,outstandingInterestPortion:this.foreclosuredata.interestPortion,outstandingFeeChargesPortion:this.foreclosuredata.feeChargesPortion,outstandingPenaltyChargesPortion:this.foreclosuredata.penaltyChargesPortion,foreClosureChargesPortion:this.foreclosuredata.foreClosureChargesPortion}),this.foreclosuredata.unrecognizedIncomePortion&&this.foreclosureForm.patchValue({interestAccruedAfterDeath:this.foreclosuredata.unrecognizedIncomePortion}),this.calculateTransactionAmount(),this.paymentTypes=this.foreclosuredata.paymentTypeOptions;});}calculateTransactionAmount(){let a=0;a+=parseFloat(this.foreclosuredata.principalPortion),a+=parseFloat(this.foreclosuredata.interestPortion),a+=parseFloat(this.foreclosuredata.feeChargesPortion),a+=parseFloat(this.foreclosuredata.penaltyChargesPortion),this.foreclosureForm.patchValue({transactionAmount:a});}submit(){let a=this.foreclosureForm.value.transactionDate,l=this.settingsService.dateFormat;this.foreclosureForm.patchValue({transactionDate:this.datePipe.transform(a,l)});let r={transactionDate:this.foreclosureForm.value.transactionDate,locale:this.settingsService.language.code,dateFormat:l,note:this.foreclosureForm.value.note};this.loanService.loanForclosureData(this.loanId,r).subscribe(d=>{this.router.navigate(["../../general"],{relativeTo:this.route});});}static \u0275fac=function(l){return new(l||e)(T(AI),T(E),T(zs$1),T(Gr$1),T(_te),T(yF))};static \u0275cmp=N({type:e,selectors:[["mifosx-foreclosure"]],standalone:false,decls:86,vars:9,consts:[["transactionsDatePicker",""],[1,"container"],[3,"ngSubmit","formGroup"],["fxLayout","column"],["matInput","","required","","formControlName","transactionDate",3,"min","max","matDatepicker"],["matSuffix","",3,"for"],[4,"ngIf"],["matInput","","required","","formControlName","outstandingPrincipalPortion"],["matInput","","required","","formControlName","outstandingInterestPortion"],["matInput","","required","","formControlName","outstandingFeeChargesPortion"],["matInput","","required","","formControlName","outstandingPenaltyChargesPortion"],["matInput","","required","","formControlName","transactionAmount"],["matInput","","formControlName","note"],["fxLayout","row","fxLayout.xs","column","fxLayoutAlign","center","fxLayoutGap","5px"],["type","button","mat-raised-button","",3,"routerLink"],["mat-raised-button","","color","primary",3,"disabled",4,"mifosxHasPermission"],["mat-raised-button","","color","primary",3,"disabled"]],template:function(l,r){if(l&1&&(x(0,"div",1),b(1,`

  `),x(2,"mat-card"),b(3,`

    `),x(4,"form",2),re("ngSubmit",function(){return r.submit()}),b(5,`

      `),x(6,"mat-card-content"),b(7,`

        `),x(8,"div",3),b(9,`

          `),x(10,"mat-form-field"),b(11,`
            `),x(12,"mat-label"),b(13,"Transaction Date"),w(),b(14,`
            `),fe(15,"input",4),ki$1(),b(16,`
            `),fe(17,"mat-datepicker-toggle",5),b(18,`
            `),fe(19,"mat-datepicker",null,0),b(21,`
            `),Ie(22,cc,5,0,"mat-error",6),b(23,`
          `),w(),b(24,`

          `),x(25,"mat-form-field"),b(26,`
            `),x(27,"mat-label"),b(28,"Principal"),w(),b(29,`
            `),fe(30,"input",7),ki$1(),b(31,`
          `),w(),b(32,`

          `),x(33,"mat-form-field"),b(34,`
            `),x(35,"mat-label"),b(36,"Interest"),w(),b(37,`
            `),fe(38,"input",8),ki$1(),b(39,`
          `),w(),b(40,`

          `),x(41,"mat-form-field"),b(42,`
            `),x(43,"mat-label"),b(44,"Fee Amount"),w(),b(45,`
            `),fe(46,"input",9),ki$1(),b(47,`
          `),w(),b(48,`

          `),x(49,"mat-form-field"),b(50,`
            `),x(51,"mat-label"),b(52,"Penalty Amount"),w(),b(53,`
            `),fe(54,"input",10),ki$1(),b(55,`
          `),w(),b(56,`

          `),x(57,"mat-form-field"),b(58,`
            `),x(59,"mat-label"),b(60,"Transaction Amount"),w(),b(61,`
            `),fe(62,"input",11),ki$1(),b(63,`
          `),w(),b(64,`

          `),x(65,"mat-form-field"),b(66,`
            `),x(67,"mat-label"),b(68,"Note"),w(),b(69,`
            `),fe(70,"textarea",12),ki$1(),b(71,`
          `),w(),b(72,`

        `),w(),b(73,`

        `),x(74,"mat-card-actions",13),b(75,`
          `),x(76,"button",14),b(77,"Cancel"),w(),b(78,`
          `),Ie(79,sc,2,1,"button",15),b(80,`
        `),w(),b(81,`

      `),w(),b(82,`

    `),w(),b(83,`

  `),w(),b(84,`

`),w(),b(85,`
`)),l&2){let d=Nt(20);D(4),z("formGroup",r.foreclosureForm),D(11),z("min",r.minDate)("max",r.maxDate)("matDatepicker",d),Li$1(),D(2),z("for",d),D(5),z("ngIf",r.foreclosureForm.controls.transactionDate.hasError("required")),D(8),Li$1(),D(8),Li$1(),D(8),Li$1(),D(8),Li$1(),D(8),Li$1(),D(8),Li$1(),D(6),z("routerLink",$o$1(8,lc)),D(3),z("mifosxHasPermission","FORECLOSURE_LOAN");}},dependencies:[Yo$1,go$1,Mc,eA,Sn$1,Sje,Aje,Lje,zT,dh,Mv,Ri$1,Br$1,O3,sv,Ac$1,DI,Cc$1,Na$1,k2,S6,uo$1,_3,bp$1,XQe],styles:[".container[_ngcontent-%COMP%]{max-width:37rem}"],changeDetection:1})}return e})();var dc=()=>["../../general"];function uc(e,m){e&1&&(x(0,"mat-error"),b(1,`
              Transaction Date `),x(2,"strong"),b(3,"is required"),w(),b(4,`
            `),w());}function fc(e,m){e&1&&(x(0,"mat-error"),b(1,`
              Transaction Amount `),x(2,"strong"),b(3,"is required"),w(),b(4,`
            `),w());}function xc(e,m){e&1&&(x(0,"mat-error"),b(1,`
              Interest Amount `),x(2,"strong"),b(3,"is required"),w(),b(4,`
            `),w());}function _c(e,m){if(e&1&&(x(0,"mat-option",20),b(1),w()),e&2){let a=m.$implicit;z("value",a.id),D(),it(`
                `,a.name,`
              `);}}function Cc(e,m){e&1&&(x(0,"button",21),b(1,`
                `),fe(2,"i",22),b(3,`
              `),w());}function vc(e,m){e&1&&(x(0,"button",21),b(1,`
                `),fe(2,"i",23),b(3,`
              `),w());}function gc(e,m){e&1&&(Rl$1(0),b(1,`
            `),x(2,"mat-form-field"),b(3,`
              `),x(4,"mat-label"),b(5," Account #"),w(),b(6,`
              `),fe(7,"input",24),ki$1(),b(8,`
            `),w(),b(9,`

            `),x(10,"mat-form-field"),b(11,`
              `),x(12,"mat-label"),b(13,"Cheque #"),w(),b(14,`
              `),fe(15,"input",25),ki$1(),b(16,`
            `),w(),b(17,`

            `),x(18,"mat-form-field"),b(19,`
              `),x(20,"mat-label"),b(21,"Routing Code"),w(),b(22,`
              `),fe(23,"input",26),ki$1(),b(24,`
            `),w(),b(25,`

            `),x(26,"mat-form-field"),b(27,`
              `),x(28,"mat-label"),b(29,"Reciept #"),w(),b(30,`
              `),fe(31,"input",27),ki$1(),b(32,`
            `),w(),b(33,`

            `),x(34,"mat-form-field"),b(35,`
              `),x(36,"mat-label"),b(37,"Bank #"),w(),b(38,`
              `),fe(39,"input",28),ki$1(),b(40,`
            `),w(),b(41,`
          `),zl$1()),e&2&&(D(7),Li$1(),D(8),Li$1(),D(8),Li$1(),D(8),Li$1(),D(8),Li$1());}function hc(e,m){if(e&1&&(x(0,"button",29),b(1,"Submit"),w()),e&2){let a=K();z("disabled",!a.prepayLoanForm.valid);}}var Di=(()=>{class e{formBuilder;loanService;route;router;datePipe;settingsService;dataObject;loanId;paymentTypes;principalPortion;interestPortion;showPaymentDetails=false;minDate=new Date(2e3,0,1);maxDate=new Date;prepayLoanForm;constructor(a,l,r,d,h,I){this.formBuilder=a,this.loanService=l,this.route=r,this.router=d,this.datePipe=h,this.settingsService=I,this.loanId=this.route.parent.snapshot.params.loanId;}ngOnInit(){this.createprepayLoanForm(),this.setPrepayLoanDetails();}createprepayLoanForm(){this.prepayLoanForm=this.formBuilder.group({transactionDate:[new Date,mi$1.required],transactionAmount:["",mi$1.required],principal:[{value:"",disabled:true}],interestAmount:[{value:"",disabled:true},mi$1.required],paymentTypeId:[""],note:[""]});}setPrepayLoanDetails(){this.paymentTypes=this.dataObject.paymentTypeOptions,this.prepayLoanForm.patchValue({transactionAmount:this.dataObject.amount,principal:this.dataObject.principalPortion,interestAmount:this.dataObject.interestPortion});}addPaymentDetails(){this.showPaymentDetails=!this.showPaymentDetails,this.showPaymentDetails?(this.prepayLoanForm.addControl("accountNumber",new Qi$1("")),this.prepayLoanForm.addControl("checkNumber",new Qi$1("")),this.prepayLoanForm.addControl("routingCode",new Qi$1("")),this.prepayLoanForm.addControl("receiptNumber",new Qi$1("")),this.prepayLoanForm.addControl("bankNumber",new Qi$1(""))):(this.prepayLoanForm.removeControl("accountNumber"),this.prepayLoanForm.removeControl("checkNumber"),this.prepayLoanForm.removeControl("routingCode"),this.prepayLoanForm.removeControl("receiptNumber"),this.prepayLoanForm.removeControl("bankNumber"));}submit(){let a=this.prepayLoanForm.value.transactionDate,l=this.settingsService.dateFormat;this.prepayLoanForm.patchValue({transactionDate:this.datePipe.transform(a,l)});let r=this.prepayLoanForm.value;r.locale=this.settingsService.language.code,r.dateFormat=l,this.loanService.submitLoanActionButton(this.loanId,r,"repayment").subscribe(d=>{this.router.navigate(["../../general"],{relativeTo:this.route});});}static \u0275fac=function(l){return new(l||e)(T(AI),T(E),T(zs$1),T(Gr$1),T(_te),T(yF))};static \u0275cmp=N({type:e,selectors:[["mifosx-prepay-loan"]],inputs:{dataObject:"dataObject"},standalone:false,decls:100,vars:15,consts:[["transactionDatePicker",""],[1,"container"],[3,"ngSubmit","formGroup"],["fxLayout","column"],["matInput","","required","","formControlName","transactionDate",3,"min","max","matDatepicker"],["matSuffix","",3,"for"],[4,"ngIf"],["matInput","","required","","formControlName","transactionAmount"],["matInput","","formControlName","principal"],["matInput","","required","","formControlName","interestAmount"],["formControlName","paymentTypeId"],[3,"value",4,"ngFor","ngForOf"],["fxFlexFill",""],["fxFlex","25%"],["fxFlex","75%",1,"expandCollapsebutton",3,"click"],["mat-raised-button","","color","primary",4,"ngIf"],["matInput","","formControlName","note"],["fxLayout","row","fxLayout.xs","column","fxLayoutAlign","center","fxLayoutGap","5px"],["type","button","mat-raised-button","",3,"routerLink"],["mat-raised-button","","color","primary",3,"disabled",4,"mifosxHasPermission"],[3,"value"],["mat-raised-button","","color","primary"],[1,"fa","fa-minus"],[1,"fa","fa-plus"],["matInput","","formControlName","accountNumber"],["matInput","","formControlName","checkNumber"],["matInput","","formControlName","routingCode"],["matInput","","formControlName","receiptNumber"],["matInput","","formControlName","bankNumber"],["mat-raised-button","","color","primary",3,"disabled"]],template:function(l,r){if(l&1&&(x(0,"div",1),b(1,`

  `),x(2,"mat-card"),b(3,`

    `),x(4,"form",2),re("ngSubmit",function(){return r.submit()}),b(5,`

      `),x(6,"mat-card-content"),b(7,`

        `),x(8,"div",3),b(9,`

          `),x(10,"mat-form-field"),b(11,`
            `),x(12,"mat-label"),b(13,"Transaction Date"),w(),b(14,`
            `),fe(15,"input",4),ki$1(),b(16,`
            `),fe(17,"mat-datepicker-toggle",5),b(18,`
            `),fe(19,"mat-datepicker",null,0),b(21,`
            `),Ie(22,uc,5,0,"mat-error",6),b(23,`
          `),w(),b(24,`

          `),x(25,"mat-form-field"),b(26,`
            `),x(27,"mat-label"),b(28,"Transaction Amount"),w(),b(29,`
            `),fe(30,"input",7),ki$1(),b(31,`
            `),Ie(32,fc,5,0,"mat-error",6),b(33,`
          `),w(),b(34,`

          `),x(35,"mat-form-field"),b(36,`
            `),x(37,"mat-label"),b(38,"Principal"),w(),b(39,`
            `),fe(40,"input",8),ki$1(),b(41,`
          `),w(),b(42,`

          `),x(43,"mat-form-field"),b(44,`
            `),x(45,"mat-label"),b(46,"Interest Amount"),w(),b(47,`
            `),fe(48,"input",9),ki$1(),b(49,`
            `),Ie(50,xc,5,0,"mat-error",6),b(51,`
          `),w(),b(52,`

          `),x(53,"mat-form-field"),b(54,`
            `),x(55,"mat-label"),b(56,"Payment Type"),w(),b(57,`
            `),x(58,"mat-select",10),b(59,`
              `),Ie(60,_c,2,2,"mat-option",11),b(61,`
            `),w(),ki$1(),b(62,`
          `),w(),b(63,`

          `),x(64,"div",12),b(65,`
            `),x(66,"span",13),b(67,"Show Payment Details"),w(),b(68,`
            `),x(69,"span",14),re("click",function(){return r.addPaymentDetails()}),b(70,`
              `),Ie(71,Cc,4,0,"button",15),b(72,`
              `),Ie(73,vc,4,0,"button",15),b(74,`
            `),w(),b(75,`
          `),w(),b(76,`

          `),Ie(77,gc,42,0,"ng-container",6),b(78,`

          `),x(79,"mat-form-field"),b(80,`
            `),x(81,"mat-label"),b(82,"Note"),w(),b(83,`
            `),fe(84,"textarea",16),ki$1(),b(85,`
          `),w(),b(86,`

        `),w(),b(87,`

        `),x(88,"mat-card-actions",17),b(89,`
          `),x(90,"button",18),b(91,"Cancel"),w(),b(92,`
          `),Ie(93,hc,2,1,"button",19),b(94,`
        `),w(),b(95,`

      `),w(),b(96,`

    `),w(),b(97,`

  `),w(),b(98,`

`),w(),b(99,`
`)),l&2){let d=Nt(20);D(4),z("formGroup",r.prepayLoanForm),D(11),z("min",r.minDate)("max",r.maxDate)("matDatepicker",d),Li$1(),D(2),z("for",d),D(5),z("ngIf",r.prepayLoanForm.controls.transactionDate.hasError("required")),D(8),Li$1(),D(2),z("ngIf",r.prepayLoanForm.controls.transactionAmount.hasError("required")),D(8),Li$1(),D(8),Li$1(),D(2),z("ngIf",r.prepayLoanForm.controls.interestAmount.hasError("required")),D(8),Li$1(),D(2),z("ngForOf",r.paymentTypes),D(11),z("ngIf",r.showPaymentDetails),D(2),z("ngIf",!r.showPaymentDetails),D(4),z("ngIf",r.showPaymentDetails),D(7),Li$1(),D(6),z("routerLink",$o$1(14,dc)),D(3),z("mifosxHasPermission","REPAYMENT_LOAN");}},dependencies:[ii,Yo$1,go$1,Mc,eA,R2,wc$1,Ti$1,Sn$1,Sje,Aje,Lje,zT,dh,Mv,Ri$1,Br$1,O3,sv,Ac$1,ja$1,DI,Cc$1,Na$1,k2,S6,uo$1,_3,bp$1,XQe],styles:[".expandCollapsebutton[_ngcontent-%COMP%]{margin-top:-7px}.container[_ngcontent-%COMP%]{max-width:37rem}"],changeDetection:1})}return e})();var yc=()=>["../../../general"];function Dc(e,m){e&1&&(x(0,"mat-error"),b(1,`
              Transaction Date `),x(2,"strong"),b(3,"is required"),w(),b(4,`
            `),w());}function bc(e,m){e&1&&(x(0,"mat-error"),b(1,`
              Transaction Amount `),x(2,"strong"),b(3,"is required"),w(),b(4,`
            `),w());}function Tc(e,m){if(e&1&&(x(0,"mat-option",18),b(1),w()),e&2){let a=m.$implicit;z("value",a.id),D(),it(`
                `,a.name,`
              `);}}function Ec(e,m){e&1&&(x(0,"button",19),b(1,`
                `),fe(2,"i",20),b(3,`
              `),w());}function Ac(e,m){e&1&&(x(0,"button",19),b(1,`
                `),fe(2,"i",21),b(3,`
              `),w());}function Ic(e,m){e&1&&(Rl$1(0),b(1,`
            `),x(2,"mat-form-field"),b(3,`
              `),x(4,"mat-label"),b(5," Account #"),w(),b(6,`
              `),fe(7,"input",22),ki$1(),b(8,`
            `),w(),b(9,`

            `),x(10,"mat-form-field"),b(11,`
              `),x(12,"mat-label"),b(13,"Cheque #"),w(),b(14,`
              `),fe(15,"input",23),ki$1(),b(16,`
            `),w(),b(17,`

            `),x(18,"mat-form-field"),b(19,`
              `),x(20,"mat-label"),b(21,"Routing Code"),w(),b(22,`
              `),fe(23,"input",24),ki$1(),b(24,`
            `),w(),b(25,`

            `),x(26,"mat-form-field"),b(27,`
              `),x(28,"mat-label"),b(29,"Reciept #"),w(),b(30,`
              `),fe(31,"input",25),ki$1(),b(32,`
            `),w(),b(33,`

            `),x(34,"mat-form-field"),b(35,`
              `),x(36,"mat-label"),b(37,"Bank #"),w(),b(38,`
              `),fe(39,"input",26),ki$1(),b(40,`
            `),w(),b(41,`
          `),zl$1()),e&2&&(D(7),Li$1(),D(8),Li$1(),D(8),Li$1(),D(8),Li$1(),D(8),Li$1());}function Lc(e,m){if(e&1&&(x(0,"button",27),b(1,"Submit"),w()),e&2){let a=K();z("disabled",!a.repaymentLoanForm.valid);}}var bi=(()=>{class e{formBuilder;loanService;route;router;datePipe;settingsService;dataObject;loanId;paymentTypes;showPaymentDetails=false;minDate=new Date(2e3,0,1);maxDate=new Date;repaymentLoanForm;constructor(a,l,r,d,h,I){this.formBuilder=a,this.loanService=l,this.route=r,this.router=d,this.datePipe=h,this.settingsService=I,this.loanId=this.route.parent.snapshot.params.loanId;}ngOnInit(){this.createRepaymentLoanForm();}createRepaymentLoanForm(){this.repaymentLoanForm=this.formBuilder.group({transactionDate:[new Date,mi$1.required],transactionAmount:["",mi$1.required],paymentTypeId:"",note:""});}setRepaymentLoanDetails(){this.paymentTypes=this.dataObject.paymentTypeOptions,this.repaymentLoanForm.patchValue({transactionAmount:this.dataObject.amount,transactionDate:new Date(this.dataObject.date)});}addPaymentDetails(){this.showPaymentDetails=!this.showPaymentDetails,this.showPaymentDetails?(this.repaymentLoanForm.addControl("accountNumber",new Qi$1("")),this.repaymentLoanForm.addControl("checkNumber",new Qi$1("")),this.repaymentLoanForm.addControl("routingCode",new Qi$1("")),this.repaymentLoanForm.addControl("receiptNumber",new Qi$1("")),this.repaymentLoanForm.addControl("bankNumber",new Qi$1(""))):(this.repaymentLoanForm.removeControl("accountNumber"),this.repaymentLoanForm.removeControl("checkNumber"),this.repaymentLoanForm.removeControl("routingCode"),this.repaymentLoanForm.removeControl("receiptNumber"),this.repaymentLoanForm.removeControl("bankNumber"));}submit(){let a=this.repaymentLoanForm.value.transactionDate,l=this.settingsService.dateFormat;this.repaymentLoanForm.patchValue({transactionDate:this.datePipe.transform(a,l)});let r=this.repaymentLoanForm.value;r.locale=this.settingsService.language.code,r.dateFormat=l,this.loanService.submitLoanActionButton(this.loanId,r,"repayment").subscribe(d=>{this.router.navigate(["../../../general"],{relativeTo:this.route});});}static \u0275fac=function(l){return new(l||e)(T(AI),T(E),T(zs$1),T(Gr$1),T(_te),T(yF))};static \u0275cmp=N({type:e,selectors:[["mifosx-make-repayment"]],inputs:{dataObject:"dataObject"},standalone:false,decls:82,vars:14,consts:[["transactionDatePicker",""],[1,"container"],[3,"ngSubmit","formGroup"],["fxLayout","column"],["matInput","","required","","formControlName","transactionDate",3,"min","max","matDatepicker"],["matSuffix","",3,"for"],[4,"ngIf"],["matInput","","required","","formControlName","transactionAmount"],["formControlName","paymentTypeId"],[3,"value",4,"ngFor","ngForOf"],["fxFlexFill",""],["fxFlex","25%"],["fxFlex","75%",1,"expandCollapsebutton",3,"click"],["mat-raised-button","","color","primary",4,"ngIf"],["matInput","","formControlName","note"],["fxLayout","row","fxLayout.xs","column","fxLayoutAlign","center","fxLayoutGap","5px"],["type","button","mat-raised-button","",3,"routerLink"],["mat-raised-button","","color","primary",3,"disabled",4,"mifosxHasPermission"],[3,"value"],["mat-raised-button","","color","primary"],[1,"fa","fa-minus"],[1,"fa","fa-plus"],["matInput","","formControlName","accountNumber"],["matInput","","formControlName","checkNumber"],["matInput","","formControlName","routingCode"],["matInput","","formControlName","receiptNumber"],["matInput","","formControlName","bankNumber"],["mat-raised-button","","color","primary",3,"disabled"]],template:function(l,r){if(l&1&&(x(0,"div",1),b(1,`

  `),x(2,"mat-card"),b(3,`

    `),x(4,"form",2),re("ngSubmit",function(){return r.submit()}),b(5,`

      `),x(6,"mat-card-content"),b(7,`

        `),x(8,"div",3),b(9,`

          `),x(10,"mat-form-field"),b(11,`
            `),x(12,"mat-label"),b(13,"Transaction Date"),w(),b(14,`
            `),fe(15,"input",4),ki$1(),b(16,`
            `),fe(17,"mat-datepicker-toggle",5),b(18,`
            `),fe(19,"mat-datepicker",null,0),b(21,`
            `),Ie(22,Dc,5,0,"mat-error",6),b(23,`
          `),w(),b(24,`

          `),x(25,"mat-form-field"),b(26,`
            `),x(27,"mat-label"),b(28,"Transaction Amount"),w(),b(29,`
            `),fe(30,"input",7),ki$1(),b(31,`
            `),Ie(32,bc,5,0,"mat-error",6),b(33,`
          `),w(),b(34,`

          `),x(35,"mat-form-field"),b(36,`
            `),x(37,"mat-label"),b(38,"Payment Type"),w(),b(39,`
            `),x(40,"mat-select",8),b(41,`
              `),Ie(42,Tc,2,2,"mat-option",9),b(43,`
            `),w(),ki$1(),b(44,`
          `),w(),b(45,`

          `),x(46,"div",10),b(47,`
            `),x(48,"span",11),b(49,"Show Payment Details"),w(),b(50,`
            `),x(51,"span",12),re("click",function(){return r.addPaymentDetails()}),b(52,`
              `),Ie(53,Ec,4,0,"button",13),b(54,`
              `),Ie(55,Ac,4,0,"button",13),b(56,`
            `),w(),b(57,`
          `),w(),b(58,`

          `),Ie(59,Ic,42,0,"ng-container",6),b(60,`

          `),x(61,"mat-form-field"),b(62,`
            `),x(63,"mat-label"),b(64,"Note"),w(),b(65,`
            `),fe(66,"textarea",14),ki$1(),b(67,`
          `),w(),b(68,`

        `),w(),b(69,`

        `),x(70,"mat-card-actions",15),b(71,`
          `),x(72,"button",16),b(73,"Cancel"),w(),b(74,`
          `),Ie(75,Lc,2,1,"button",17),b(76,`
        `),w(),b(77,`

      `),w(),b(78,`

    `),w(),b(79,`

  `),w(),b(80,`

`),w(),b(81,`
`)),l&2){let d=Nt(20);D(4),z("formGroup",r.repaymentLoanForm),D(11),z("min",r.minDate)("max",r.maxDate)("matDatepicker",d),Li$1(),D(2),z("for",d),D(5),z("ngIf",r.repaymentLoanForm.controls.transactionDate.hasError("required")),D(8),Li$1(),D(2),z("ngIf",r.repaymentLoanForm.controls.transactionAmount.hasError("required")),D(8),Li$1(),D(2),z("ngForOf",r.paymentTypes),D(11),z("ngIf",r.showPaymentDetails),D(2),z("ngIf",!r.showPaymentDetails),D(4),z("ngIf",r.showPaymentDetails),D(7),Li$1(),D(6),z("routerLink",$o$1(13,yc)),D(3),z("mifosxHasPermission","REPAYMENT_LOAN");}},dependencies:[ii,Yo$1,go$1,Mc,eA,R2,wc$1,Ti$1,Sn$1,Sje,Aje,Lje,zT,dh,Mv,Ri$1,Br$1,O3,sv,Ac$1,ja$1,DI,Cc$1,Na$1,k2,S6,uo$1,_3,bp$1,XQe],styles:[".expandCollapsebutton[_ngcontent-%COMP%]{margin-top:-7px}.container[_ngcontent-%COMP%]{max-width:37rem}"],changeDetection:1})}return e})();var wc=()=>["../../general"];function Pc(e,m){e&1&&(x(0,"mat-error"),b(1,`
              Interest Date is `),x(2,"strong"),b(3,"required"),w(),b(4,`
            `),w());}function Rc(e,m){e&1&&(x(0,"mat-error"),b(1,`
              Transaction Amount is `),x(2,"strong"),b(3,"required"),w(),b(4,`
            `),w());}function Oc(e,m){if(e&1&&(x(0,"button",12),b(1,"Submit"),w()),e&2){let a=K();z("disabled",!a.loanInterestForm.valid);}}var Ti=(()=>{class e{formBuilder;router;datePipe;loanService;route;dataObject;loanInterestForm;minDate=new Date(2e3,0,1);maxDate=new Date;constructor(a,l,r,d,h){this.formBuilder=a,this.router=l,this.datePipe=r,this.loanService=d,this.route=h;}ngOnInit(){this.setLoanInterestForm();}setLoanInterestForm(){this.loanInterestForm=this.formBuilder.group({transactionAmount:[this.dataObject.amount,mi$1.required],transactionDate:[this.dataObject.date&&new Date(this.dataObject.date),mi$1.required],note:[""]});}submit(){let a=this.loanInterestForm.value.transactionDate,l=this.loanInterestForm.value.transactionAmount,r="dd MMMM yyyy";this.loanInterestForm.patchValue({transactionDate:this.datePipe.transform(a,r),transactionAmount:parseInt(l,10)});let d=this.route.parent.snapshot.params.loanId,h=this.loanInterestForm.value;h.locale="en",h.dateFormat=r,this.loanService.submitLoanActionButton(d,h,"waiveinterest").subscribe(I=>{this.router.navigate(["../../general"],{relativeTo:this.route});});}static \u0275fac=function(l){return new(l||e)(T(AI),T(Gr$1),T(_te),T(E),T(zs$1))};static \u0275cmp=N({type:e,selectors:[["mifosx-waive-interest"]],inputs:{dataObject:"dataObject"},standalone:false,decls:56,vars:10,consts:[["interestDatePicker",""],[1,"container"],[3,"ngSubmit","formGroup"],["fxLayout","column"],["matInput","","required","","formControlName","transactionDate",3,"min","max","matDatepicker"],["matSuffix","",3,"for"],[4,"ngIf"],["matInput","","required","","formControlName","transactionAmount"],["matInput","","formControlName","note"],["fxLayout","row","fxLayout.xs","column","fxLayoutAlign","center","fxLayoutGap","5px"],["type","button","mat-raised-button","",3,"routerLink"],["mat-raised-button","","color","primary",3,"disabled",4,"mifosxHasPermission"],["mat-raised-button","","color","primary",3,"disabled"]],template:function(l,r){if(l&1&&(x(0,"div",1),b(1,`

  `),x(2,"mat-card"),b(3,`

    `),x(4,"form",2),re("ngSubmit",function(){return r.submit()}),b(5,`

      `),x(6,"mat-card-content"),b(7,`

        `),x(8,"div",3),b(9,`

          `),x(10,"mat-form-field"),b(11,`
            `),x(12,"mat-label"),b(13,"Interest waived on"),w(),b(14,`
            `),fe(15,"input",4),ki$1(),b(16,`
            `),fe(17,"mat-datepicker-toggle",5),b(18,`
            `),fe(19,"mat-datepicker",null,0),b(21,`
            `),Ie(22,Pc,5,0,"mat-error",6),b(23,`
          `),w(),b(24,`

          `),x(25,"mat-form-field"),b(26,`
            `),x(27,"mat-label"),b(28,"Transaction amount"),w(),b(29,`
            `),fe(30,"input",7),ki$1(),b(31,`
            `),Ie(32,Rc,5,0,"mat-error",6),b(33,`
          `),w(),b(34,`

          `),x(35,"mat-form-field"),b(36,`
            `),x(37,"mat-label"),b(38,"Note"),w(),b(39,`
            `),fe(40,"textarea",8),ki$1(),b(41,`
          `),w(),b(42,`

        `),w(),b(43,`

        `),x(44,"mat-card-actions",9),b(45,`
          `),x(46,"button",10),b(47,"Cancel"),w(),b(48,`
          `),Ie(49,Oc,2,1,"button",11),b(50,`
        `),w(),b(51,`

      `),w(),b(52,`

    `),w(),b(53,`

  `),w(),b(54,`

`),w(),b(55,`
`)),l&2){let d=Nt(20);D(4),z("formGroup",r.loanInterestForm),D(11),z("min",r.minDate)("max",r.maxDate)("matDatepicker",d),Li$1(),D(2),z("for",d),D(5),z("ngIf",r.loanInterestForm.controls.transactionDate.hasError("required")),D(8),Li$1(),D(2),z("ngIf",r.loanInterestForm.controls.transactionAmount.hasError("required")),D(8),Li$1(),D(6),z("routerLink",$o$1(9,wc)),D(3),z("mifosxHasPermission","WAIVEINTERESTPORTION_LOAN");}},dependencies:[Yo$1,go$1,Mc,eA,Sn$1,Sje,Aje,Lje,zT,dh,Mv,Ri$1,Br$1,O3,sv,Ac$1,DI,Cc$1,Na$1,k2,S6,uo$1,_3,bp$1,XQe],styles:[".container[_ngcontent-%COMP%]{max-width:37rem}"],changeDetection:1})}return e})();var Nc=()=>["../../general"];function kc(e,m){e&1&&(x(0,"mat-error"),b(1,`
              Write Off Date `),x(2,"strong"),b(3,"is required"),w(),b(4,`
            `),w());}function Gc(e,m){if(e&1){let a=Kt();x(0,"button",12),re("click",function(){ot(a);let r=K();return at(r.submit())}),b(1,"Submit"),w();}}var Ei=(()=>{class e{formBuilder;route;loanService;datePipe;router;settingsService;dataObject;minDate=new Date(2e3,0,1);maxDate=new Date;writeOffForm;constructor(a,l,r,d,h,I){this.formBuilder=a,this.route=l,this.loanService=r,this.datePipe=d,this.router=h,this.settingsService=I;}ngOnInit(){this.setWriteOffForm();}setWriteOffForm(){this.writeOffForm=this.formBuilder.group({transactionDate:[this.dataObject.date&&new Date(this.dataObject.date),mi$1.required],amount:[{value:this.dataObject.amount,disabled:true}],note:[""]});}submit(){let a=this.writeOffForm.value.transactionDate,l=this.settingsService.dateFormat;this.writeOffForm.patchValue({transactionDate:this.datePipe.transform(a,l)});let r=this.route.parent.snapshot.params.loanId,d=this.writeOffForm.value;delete d.amount,d.locale=this.settingsService.language.code,d.dateFormat=l,this.loanService.submitLoanActionButton(r,d,"writeoff").subscribe(h=>{this.router.navigate(["../../../general"],{relativeTo:this.route});});}static \u0275fac=function(l){return new(l||e)(T(AI),T(zs$1),T(E),T(_te),T(Gr$1),T(yF))};static \u0275cmp=N({type:e,selectors:[["mifosx-write-off-page"]],inputs:{dataObject:"dataObject"},standalone:false,decls:54,vars:9,consts:[["writeOffDatePicker",""],[1,"container"],[3,"ngSubmit","formGroup"],["fxLayout","column"],["matInput","","required","","formControlName","transactionDate",3,"min","max","matDatepicker"],["matSuffix","",3,"for"],[4,"ngIf"],["matInput","","formControlName","amount"],["matInput","","formControlName","note"],["fxLayout","row","fxLayout.xs","column","fxLayoutAlign","center","fxLayoutGap","5px"],["type","button","mat-raised-button","",3,"routerLink"],["mat-raised-button","","color","primary",3,"click",4,"mifosxHasPermission"],["mat-raised-button","","color","primary",3,"click"]],template:function(l,r){if(l&1&&(x(0,"div",1),b(1,`

  `),x(2,"mat-card"),b(3,`

    `),x(4,"mat-card-content"),b(5,`

      `),x(6,"form",2),re("ngSubmit",function(){return r.submit()}),b(7,`

        `),x(8,"div",3),b(9,`

          `),x(10,"mat-form-field"),b(11,`
            `),x(12,"mat-label"),b(13,"Write off on"),w(),b(14,`
            `),fe(15,"input",4),ki$1(),b(16,`
            `),fe(17,"mat-datepicker-toggle",5),b(18,`
            `),fe(19,"mat-datepicker",null,0),b(21,`
            `),Ie(22,kc,5,0,"mat-error",6),b(23,`
          `),w(),b(24,`

          `),x(25,"mat-form-field"),b(26,`
            `),x(27,"mat-label"),b(28,"Amount"),w(),b(29,`
            `),fe(30,"input",7),ki$1(),b(31,`
          `),w(),b(32,`

          `),x(33,"mat-form-field"),b(34,`
            `),x(35,"mat-label"),b(36,"Note"),w(),b(37,`
            `),fe(38,"textarea",8),ki$1(),b(39,`
          `),w(),b(40,`

        `),w(),b(41,`

      `),w(),b(42,`

      `),x(43,"mat-card-actions",9),b(44,`
        `),x(45,"button",10),b(46,"Cancel"),w(),b(47,`
        `),Ie(48,Gc,2,0,"button",11),b(49,`
      `),w(),b(50,`

    `),w(),b(51,`

  `),w(),b(52,`

`),w(),b(53,`
`)),l&2){let d=Nt(20);D(6),z("formGroup",r.writeOffForm),D(9),z("min",r.minDate)("max",r.maxDate)("matDatepicker",d),Li$1(),D(2),z("for",d),D(5),z("ngIf",r.writeOffForm.controls.transactionDate.hasError("required")),D(8),Li$1(),D(8),Li$1(),D(7),z("routerLink",$o$1(8,Nc)),D(3),z("mifosxHasPermission","WRITEOFF_LOAN");}},dependencies:[Yo$1,go$1,Mc,eA,Sn$1,Sje,Aje,Lje,zT,dh,Mv,Ri$1,Br$1,O3,sv,Ac$1,DI,Cc$1,Na$1,k2,S6,uo$1,_3,bp$1,XQe],styles:[".container[_ngcontent-%COMP%]{max-width:37rem}"],changeDetection:1})}return e})();var jc=()=>["../../general"];function Vc(e,m){e&1&&(x(0,"mat-error"),b(1,`
              Closed Date `),x(2,"strong"),b(3,"is required"),w(),b(4,`
            `),w());}function qc(e,m){if(e&1&&(x(0,"button",11),b(1,"Submit"),w()),e&2){let a=K();z("disabled",!a.closeLoanForm.valid);}}var Ai=(()=>{class e{formBuilder;loanService;route;router;datePipe;settingsService;dataObject;closeLoanForm;loanId;minDate=new Date(2e3,0,1);maxDate=new Date;constructor(a,l,r,d,h,I){this.formBuilder=a,this.loanService=l,this.route=r,this.router=d,this.datePipe=h,this.settingsService=I,this.loanId=this.route.parent.snapshot.params.loanId;}ngOnInit(){this.createCloseForm();}createCloseForm(){this.closeLoanForm=this.formBuilder.group({transactionDate:[new Date(this.dataObject.date)||new Date,mi$1.required],note:[]});}submit(){let a=this.closeLoanForm.value.transactionDate,l=this.settingsService.dateFormat;this.closeLoanForm.patchValue({transactionDate:this.datePipe.transform(a,l)});let r=this.closeLoanForm.value;r.locale=this.settingsService.language.code,r.dateFormat=l,this.loanService.submitLoanActionButton(this.loanId,r,"close-rescheduled").subscribe(d=>{this.router.navigate(["../../general"],{relativeTo:this.route});});}static \u0275fac=function(l){return new(l||e)(T(AI),T(E),T(zs$1),T(Gr$1),T(_te),T(yF))};static \u0275cmp=N({type:e,selectors:[["mifosx-close-as-rescheduled"]],inputs:{dataObject:"dataObject"},standalone:false,decls:46,vars:9,consts:[["closedDatePicker",""],[1,"container"],[3,"ngSubmit","formGroup"],["fxLayout","column"],["matInput","","required","","formControlName","transactionDate",3,"min","max","matDatepicker"],["matSuffix","",3,"for"],[4,"ngIf"],["matInput","","formControlName","note"],["fxLayout","row","fxLayout.xs","column","fxLayoutAlign","center","fxLayoutGap","5px"],["type","button","mat-raised-button","",3,"routerLink"],["mat-raised-button","","color","primary",3,"disabled",4,"mifosxHasPermission"],["mat-raised-button","","color","primary",3,"disabled"]],template:function(l,r){if(l&1&&(x(0,"div",1),b(1,`

  `),x(2,"mat-card"),b(3,`

    `),x(4,"form",2),re("ngSubmit",function(){return r.submit()}),b(5,`

      `),x(6,"mat-card-content"),b(7,`

        `),x(8,"div",3),b(9,`

          `),x(10,"mat-form-field"),b(11,`
            `),x(12,"mat-label"),b(13,"Closed On"),w(),b(14,`
            `),fe(15,"input",4),ki$1(),b(16,`
            `),fe(17,"mat-datepicker-toggle",5),b(18,`
            `),fe(19,"mat-datepicker",null,0),b(21,`
            `),Ie(22,Vc,5,0,"mat-error",6),b(23,`
          `),w(),b(24,`

          `),x(25,"mat-form-field"),b(26,`
            `),x(27,"mat-label"),b(28,"Note"),w(),b(29,`
            `),fe(30,"textarea",7),ki$1(),b(31,`
          `),w(),b(32,`

        `),w(),b(33,`

        `),x(34,"mat-card-actions",8),b(35,`
          `),x(36,"button",9),b(37,"Cancel"),w(),b(38,`
          `),Ie(39,qc,2,1,"button",10),b(40,`
        `),w(),b(41,`

      `),w(),b(42,`

    `),w(),b(43,`

  `),w(),b(44,`

`),w(),b(45,`
`)),l&2){let d=Nt(20);D(4),z("formGroup",r.closeLoanForm),D(11),z("min",r.minDate)("max",r.maxDate)("matDatepicker",d),Li$1(),D(2),z("for",d),D(5),z("ngIf",r.closeLoanForm.controls.transactionDate.hasError("required")),D(8),Li$1(),D(6),z("routerLink",$o$1(8,jc)),D(3),z("mifosxHasPermission","CLOSEASRESCHEDULED_LOAN");}},dependencies:[Yo$1,go$1,Mc,eA,Sn$1,Sje,Aje,Lje,zT,dh,Mv,Ri$1,Br$1,O3,sv,Ac$1,DI,Cc$1,Na$1,k2,S6,uo$1,_3,bp$1,XQe],styles:[".container[_ngcontent-%COMP%]{max-width:37rem}"],changeDetection:1})}return e})();var $c=()=>["../../general"];function Wc(e,m){e&1&&(x(0,"mat-error"),b(1,`
              Reschedule Date `),x(2,"strong"),b(3,"is required"),w(),b(4,`
            `),w());}function Uc(e,m){if(e&1&&(x(0,"mat-option",17),b(1),w()),e&2){let a=m.$implicit;z("value",a.id),D(),it(`
                `,a.name,`
              `);}}function zc(e,m){e&1&&(x(0,"mat-error"),b(1,`
              Reason for Rescheduling `),x(2,"strong"),b(3,"is required"),w(),b(4,`
            `),w());}function Qc(e,m){e&1&&(x(0,"mat-error"),b(1,`
              Submitted On Date `),x(2,"strong"),b(3,"is required"),w(),b(4,`
            `),w());}function Yc(e,m){if(e&1&&(Rl$1(0),b(1,`
            `),x(2,"mat-form-field"),b(3,`
              `),x(4,"mat-label"),b(5,"Installment Rescheduled to"),w(),b(6,`
              `),fe(7,"input",18),ki$1(),b(8,`
              `),fe(9,"mat-datepicker-toggle",7),b(10,`
              `),fe(11,"mat-datepicker",null,2),b(13,`
            `),w(),b(14,`
          `),zl$1()),e&2){let a=Nt(12),l=K();D(7),z("min",l.minDate)("max",l.maxDate)("matDatepicker",a),Li$1(),D(2),z("for",a);}}function Jc(e,m){e&1&&(Rl$1(0),b(1,`
            `),x(2,"mat-form-field"),b(3,`
              `),x(4,"mat-label"),b(5,"Principal Grace Periods "),w(),b(6,`
              `),fe(7,"input",19),ki$1(),b(8,`
            `),w(),b(9,`

            `),x(10,"mat-form-field"),b(11,`
              `),x(12,"mat-label"),b(13,"Interest Grace Periods "),w(),b(14,`
              `),fe(15,"input",20),ki$1(),b(16,`
            `),w(),b(17,`
          `),zl$1()),e&2&&(D(7),Li$1(),D(8),Li$1());}function Kc(e,m){e&1&&(Rl$1(0),b(1,`
            `),x(2,"mat-form-field"),b(3,`
              `),x(4,"mat-label"),b(5,"Number Of new Repayments"),w(),b(6,`
              `),fe(7,"input",21),ki$1(),b(8,`
            `),w(),b(9,`
          `),zl$1()),e&2&&(D(7),Li$1());}function Xc(e,m){e&1&&(Rl$1(0),b(1,`
            `),x(2,"mat-form-field"),b(3,`
              `),x(4,"mat-label"),b(5,"New Interest Rate"),w(),b(6,`
              `),fe(7,"input",22),ki$1(),b(8,`
            `),w(),b(9,`
          `),zl$1()),e&2&&(D(7),Li$1());}function Zc(e,m){if(e&1&&(x(0,"button",23),b(1,"Submit"),w()),e&2){let a=K();z("disabled",!a.rescheduleLoanForm.valid);}}var Ii=(()=>{class e{formBuilder;loanService;route;router;datePipe;settingsService;dataObject;loanId;rescheduleLoanForm;minDate=new Date(2e3,0,1);maxDate=new Date;codes;changeRepaymentDate=new Qi$1(false);introduceGracePeriods=new Qi$1(false);extendRepaymentPeriod=new Qi$1(false);adjustinterestrates=new Qi$1(false);constructor(a,l,r,d,h,I){this.formBuilder=a,this.loanService=l,this.route=r,this.router=d,this.datePipe=h,this.settingsService=I,this.loanId=this.route.parent.snapshot.params.loanId;}ngOnInit(){this.codes=this.dataObject.rescheduleReasons,this.setRescheduleLoanForm();}setRescheduleLoanForm(){this.rescheduleLoanForm=this.formBuilder.group({rescheduleFromDate:[new Date,mi$1.required],rescheduleReasonId:["",mi$1.required],submittedOnDate:[new Date,mi$1.required],rescheduleReasonComment:[""],adjustedDueDate:[""],graceOnPrincipal:[""],graceOnInterest:[""],extraTerms:[""],newInterestRate:[""]});}submit(){let a=this.rescheduleLoanForm.value.rescheduleFromDate,l=this.rescheduleLoanForm.value.adjustedDueDate,r=this.rescheduleLoanForm.value.submittedOnDate,d=this.settingsService.dateFormat;this.rescheduleLoanForm.patchValue({rescheduleFromDate:this.datePipe.transform(a,d),adjustedDueDate:this.datePipe.transform(l,d),submittedOnDate:this.datePipe.transform(r,d)});let h=this.rescheduleLoanForm.value;h.locale=this.settingsService.language.code,h.dateFormat=d,h.loanId=this.loanId,this.loanService.submitRescheduleData(h).subscribe(I=>{this.router.navigate(["../../general"],{relativeTo:this.route});});}static \u0275fac=function(l){return new(l||e)(T(AI),T(E),T(zs$1),T(Gr$1),T(_te),T(yF))};static \u0275cmp=N({type:e,selectors:[["mifosx-loan-reschedule"]],inputs:{dataObject:"dataObject"},standalone:false,decls:94,vars:23,consts:[["rescheduleDatePicker",""],["submittedDatePicker",""],["installmentrescheduledDatePicker",""],[1,"container"],[3,"ngSubmit","formGroup"],["fxLayout","column"],["matInput","","required","","formControlName","rescheduleFromDate",3,"min","max","matDatepicker"],["matSuffix","",3,"for"],[4,"ngIf"],["formControlName","rescheduleReasonId"],[3,"value",4,"ngFor","ngForOf"],["matInput","","required","","formControlName","submittedOnDate",3,"min","matDatepicker"],["matInput","","formControlName","rescheduleReasonComment"],[3,"formControl"],["fxLayout","row","fxLayout.xs","column","fxLayoutAlign","center","fxLayoutGap","5px"],["type","button","mat-raised-button","",3,"routerLink"],["mat-raised-button","","color","primary",3,"disabled",4,"mifosxHasPermission"],[3,"value"],["matInput","","formControlName","adjustedDueDate",3,"min","max","matDatepicker"],["matInput","","formControlName","graceOnPrincipal"],["matInput","","formControlName","graceOnInterest"],["matInput","","formControlName","extraTerms"],["matInput","","formControlName","newInterestRate"],["mat-raised-button","","color","primary",3,"disabled"]],template:function(l,r){if(l&1&&(x(0,"div",3),b(1,`

  `),x(2,"mat-card"),b(3,`

    `),x(4,"form",4),re("ngSubmit",function(){return r.submit()}),b(5,`

      `),x(6,"mat-card-content"),b(7,`

        `),x(8,"div",5),b(9,`

          `),x(10,"mat-form-field"),b(11,`
            `),x(12,"mat-label"),b(13,"Reschedule from Installment On"),w(),b(14,`
            `),fe(15,"input",6),ki$1(),b(16,`
            `),fe(17,"mat-datepicker-toggle",7),b(18,`
            `),fe(19,"mat-datepicker",null,0),b(21,`
            `),Ie(22,Wc,5,0,"mat-error",8),b(23,`
          `),w(),b(24,`

          `),x(25,"mat-form-field"),b(26,`
            `),x(27,"mat-label"),b(28,"Reason for Rescheduling"),w(),b(29,`
            `),x(30,"mat-select",9),b(31,`
              `),Ie(32,Uc,2,2,"mat-option",10),b(33,`
            `),w(),ki$1(),b(34,`
            `),Ie(35,zc,5,0,"mat-error",8),b(36,`
          `),w(),b(37,`

          `),x(38,"mat-form-field"),b(39,`
            `),x(40,"mat-label"),b(41,"Submitted On"),w(),b(42,`
            `),fe(43,"input",11),ki$1(),b(44,`
            `),fe(45,"mat-datepicker-toggle",7),b(46,`
            `),fe(47,"mat-datepicker",null,1),b(49,`
            `),Ie(50,Qc,5,0,"mat-error",8),b(51,`
          `),w(),b(52,`

          `),x(53,"mat-form-field"),b(54,`
            `),x(55,"mat-label"),b(56,"Comments"),w(),b(57,`
            `),fe(58,"textarea",12),ki$1(),b(59,`
          `),w(),b(60,`

          `),x(61,"mat-checkbox",13),b(62," Change Repayment Date "),w(),ki$1(),b(63,`

          `),Ie(64,Yc,15,4,"ng-container",8),b(65,`

          `),x(66,"mat-checkbox",13),b(67," Introduce Mid-term grace periods "),w(),ki$1(),b(68,`

          `),Ie(69,Jc,18,0,"ng-container",8),b(70,`

          `),x(71,"mat-checkbox",13),b(72," Extend Repayment Period "),w(),ki$1(),b(73,`

          `),Ie(74,Kc,10,0,"ng-container",8),b(75,`

          `),x(76,"mat-checkbox",13),b(77," Adjust interest rates for remainder of loan "),w(),ki$1(),b(78,`
          `),Ie(79,Xc,10,0,"ng-container",8),b(80,`

        `),w(),b(81,`

        `),x(82,"mat-card-actions",14),b(83,`
          `),x(84,"button",15),b(85,"Cancel"),w(),b(86,`
          `),Ie(87,Zc,2,1,"button",16),b(88,`
        `),w(),b(89,`

      `),w(),b(90,`

    `),w(),b(91,`

  `),w(),b(92,`

`),w(),b(93,`
`)),l&2){let d=Nt(20),h=Nt(48);D(4),z("formGroup",r.rescheduleLoanForm),D(11),z("min",r.minDate)("max",r.maxDate)("matDatepicker",d),Li$1(),D(2),z("for",d),D(5),z("ngIf",r.rescheduleLoanForm.controls.rescheduleFromDate.hasError("required")),D(8),Li$1(),D(2),z("ngForOf",r.codes),D(3),z("ngIf",r.rescheduleLoanForm.controls.rescheduleReasonId.hasError("required")),D(8),z("min",r.minDate)("matDatepicker",h),Li$1(),D(2),z("for",h),D(5),z("ngIf",r.rescheduleLoanForm.controls.submittedOnDate.hasError("required")),D(8),Li$1(),D(3),z("formControl",r.changeRepaymentDate),Li$1(),D(3),z("ngIf",r.changeRepaymentDate.value),D(2),z("formControl",r.introduceGracePeriods),Li$1(),D(3),z("ngIf",r.introduceGracePeriods.value),D(2),z("formControl",r.extendRepaymentPeriod),Li$1(),D(3),z("ngIf",r.extendRepaymentPeriod.value),D(2),z("formControl",r.adjustinterestrates),Li$1(),D(3),z("ngIf",r.adjustinterestrates.value),D(5),z("routerLink",$o$1(22,$c)),D(3),z("mifosxHasPermission","APPROVE_RESCHEDULELOAN");}},dependencies:[ii,Yo$1,go$1,Mc,eA,Ti$1,Sn$1,Sje,Aje,Lje,uv,zT,dh,Mv,Ri$1,Br$1,O3,sv,Ac$1,ja$1,DI,Cc$1,Na$1,k2,S6,Pl$1,uo$1,_3,bp$1,XQe],styles:[".container[_ngcontent-%COMP%]{max-width:37rem}"],changeDetection:1})}return e})();var es=()=>["../../general"];function ns(e,m){e&1&&(x(0,"mat-error"),b(1,`
              Transaction Date `),x(2,"strong"),b(3,"is required"),w(),b(4,`
            `),w());}function is(e,m){e&1&&(x(0,"mat-error"),b(1,`
              Transaction Amount `),x(2,"strong"),b(3,"is required"),w(),b(4,`
            `),w());}function as(e,m){if(e&1&&(x(0,"mat-option",18),b(1),w()),e&2){let a=m.$implicit;z("value",a.id),D(),it(`
                `,a.name,`
              `);}}function os(e,m){e&1&&(x(0,"button",19),b(1,`
                `),fe(2,"i",20),b(3,`
              `),w());}function rs(e,m){e&1&&(x(0,"button",19),b(1,`
                `),fe(2,"i",21),b(3,`
              `),w());}function ms(e,m){e&1&&(Rl$1(0),b(1,`
            `),x(2,"mat-form-field"),b(3,`
              `),x(4,"mat-label"),b(5," Account #"),w(),b(6,`
              `),fe(7,"input",22),ki$1(),b(8,`
            `),w(),b(9,`

            `),x(10,"mat-form-field"),b(11,`
              `),x(12,"mat-label"),b(13,"Cheque #"),w(),b(14,`
              `),fe(15,"input",23),ki$1(),b(16,`
            `),w(),b(17,`

            `),x(18,"mat-form-field"),b(19,`
              `),x(20,"mat-label"),b(21,"Routing Code"),w(),b(22,`
              `),fe(23,"input",24),ki$1(),b(24,`
            `),w(),b(25,`

            `),x(26,"mat-form-field"),b(27,`
              `),x(28,"mat-label"),b(29,"Reciept #"),w(),b(30,`
              `),fe(31,"input",25),ki$1(),b(32,`
            `),w(),b(33,`

            `),x(34,"mat-form-field"),b(35,`
              `),x(36,"mat-label"),b(37,"Bank #"),w(),b(38,`
              `),fe(39,"input",26),ki$1(),b(40,`
            `),w(),b(41,`
          `),zl$1()),e&2&&(D(7),Li$1(),D(8),Li$1(),D(8),Li$1(),D(8),Li$1(),D(8),Li$1());}function ls(e,m){if(e&1&&(x(0,"button",27),b(1,"Submit"),w()),e&2){let a=K();z("disabled",!a.recoveryRepaymentLoanForm.valid);}}var Li=(()=>{class e{formBuilder;loanService;route;router;datePipe;settingsService;dataObject;loanId;paymentTypes;showPaymentDetails=false;minDate=new Date(2e3,0,1);maxDate=new Date;recoveryRepaymentLoanForm;constructor(a,l,r,d,h,I){this.formBuilder=a,this.loanService=l,this.route=r,this.router=d,this.datePipe=h,this.settingsService=I,this.loanId=this.route.parent.snapshot.params.loanId;}ngOnInit(){this.createRecoveryRepaymentLoanForm(),this.setRecoveryRepaymentLoanDetails();}createRecoveryRepaymentLoanForm(){this.recoveryRepaymentLoanForm=this.formBuilder.group({transactionDate:[new Date,mi$1.required],transactionAmount:["",mi$1.required],paymentTypeId:[""],note:[""]});}setRecoveryRepaymentLoanDetails(){this.paymentTypes=this.dataObject.paymentTypeOptions,this.recoveryRepaymentLoanForm.patchValue({transactionAmount:this.dataObject.amount,transactionDate:new Date(this.dataObject.date)});}addPaymentDetails(){this.showPaymentDetails=!this.showPaymentDetails,this.showPaymentDetails?(this.recoveryRepaymentLoanForm.addControl("accountNumber",new Qi$1("")),this.recoveryRepaymentLoanForm.addControl("checkNumber",new Qi$1("")),this.recoveryRepaymentLoanForm.addControl("routingCode",new Qi$1("")),this.recoveryRepaymentLoanForm.addControl("receiptNumber",new Qi$1("")),this.recoveryRepaymentLoanForm.addControl("bankNumber",new Qi$1(""))):(this.recoveryRepaymentLoanForm.removeControl("accountNumber"),this.recoveryRepaymentLoanForm.removeControl("checkNumber"),this.recoveryRepaymentLoanForm.removeControl("routingCode"),this.recoveryRepaymentLoanForm.removeControl("receiptNumber"),this.recoveryRepaymentLoanForm.removeControl("bankNumber"));}submit(){let a=this.recoveryRepaymentLoanForm.value.transactionDate,l=this.settingsService.dateFormat;this.recoveryRepaymentLoanForm.patchValue({transactionDate:this.datePipe.transform(a,l)});let r=this.recoveryRepaymentLoanForm.value;r.locale=this.settingsService.language.code,r.dateFormat=l,this.loanService.submitLoanActionButton(this.loanId,r,"recoverypayment").subscribe(d=>{this.router.navigate(["../../general"],{relativeTo:this.route});});}static \u0275fac=function(l){return new(l||e)(T(AI),T(E),T(zs$1),T(Gr$1),T(_te),T(yF))};static \u0275cmp=N({type:e,selectors:[["mifosx-recovery-repayment"]],inputs:{dataObject:"dataObject"},standalone:false,decls:82,vars:14,consts:[["transactionDatePicker",""],[1,"container"],[3,"ngSubmit","formGroup"],["fxLayout","column"],["matInput","","required","","formControlName","transactionDate",3,"min","max","matDatepicker"],["matSuffix","",3,"for"],[4,"ngIf"],["matInput","","required","","formControlName","transactionAmount"],["formControlName","paymentTypeId"],[3,"value",4,"ngFor","ngForOf"],["fxFlexFill",""],["fxFlex","25%"],["fxFlex","75%",1,"expandCollapsebutton",3,"click"],["mat-raised-button","","color","primary",4,"ngIf"],["matInput","","formControlName","note"],["fxLayout","row","fxLayout.xs","column","fxLayoutAlign","center","fxLayoutGap","5px"],["type","button","mat-raised-button","",3,"routerLink"],["mat-raised-button","","color","primary",3,"disabled",4,"mifosxHasPermission"],[3,"value"],["mat-raised-button","","color","primary"],[1,"fa","fa-minus"],[1,"fa","fa-plus"],["matInput","","formControlName","accountNumber"],["matInput","","formControlName","checkNumber"],["matInput","","formControlName","routingCode"],["matInput","","formControlName","receiptNumber"],["matInput","","formControlName","bankNumber"],["mat-raised-button","","color","primary",3,"disabled"]],template:function(l,r){if(l&1&&(x(0,"div",1),b(1,`

  `),x(2,"mat-card"),b(3,`

    `),x(4,"form",2),re("ngSubmit",function(){return r.submit()}),b(5,`

      `),x(6,"mat-card-content"),b(7,`

        `),x(8,"div",3),b(9,`

          `),x(10,"mat-form-field"),b(11,`
            `),x(12,"mat-label"),b(13,"Transaction Date"),w(),b(14,`
            `),fe(15,"input",4),ki$1(),b(16,`
            `),fe(17,"mat-datepicker-toggle",5),b(18,`
            `),fe(19,"mat-datepicker",null,0),b(21,`
            `),Ie(22,ns,5,0,"mat-error",6),b(23,`
          `),w(),b(24,`

          `),x(25,"mat-form-field"),b(26,`
            `),x(27,"mat-label"),b(28,"Transaction Amount"),w(),b(29,`
            `),fe(30,"input",7),ki$1(),b(31,`
            `),Ie(32,is,5,0,"mat-error",6),b(33,`
          `),w(),b(34,`

          `),x(35,"mat-form-field"),b(36,`
            `),x(37,"mat-label"),b(38,"Payment Type"),w(),b(39,`
            `),x(40,"mat-select",8),b(41,`
              `),Ie(42,as,2,2,"mat-option",9),b(43,`
            `),w(),ki$1(),b(44,`
          `),w(),b(45,`

          `),x(46,"div",10),b(47,`
            `),x(48,"span",11),b(49,"Show Payment Details"),w(),b(50,`
            `),x(51,"span",12),re("click",function(){return r.addPaymentDetails()}),b(52,`
              `),Ie(53,os,4,0,"button",13),b(54,`
              `),Ie(55,rs,4,0,"button",13),b(56,`
            `),w(),b(57,`
          `),w(),b(58,`

          `),Ie(59,ms,42,0,"ng-container",6),b(60,`

          `),x(61,"mat-form-field"),b(62,`
            `),x(63,"mat-label"),b(64,"Note"),w(),b(65,`
            `),fe(66,"textarea",14),ki$1(),b(67,`
          `),w(),b(68,`

        `),w(),b(69,`

        `),x(70,"mat-card-actions",15),b(71,`
          `),x(72,"button",16),b(73,"Cancel"),w(),b(74,`
          `),Ie(75,ls,2,1,"button",17),b(76,`
        `),w(),b(77,`

      `),w(),b(78,`

    `),w(),b(79,`

  `),w(),b(80,`

`),w(),b(81,`
`)),l&2){let d=Nt(20);D(4),z("formGroup",r.recoveryRepaymentLoanForm),D(11),z("min",r.minDate)("max",r.maxDate)("matDatepicker",d),Li$1(),D(2),z("for",d),D(5),z("ngIf",r.recoveryRepaymentLoanForm.controls.transactionDate.hasError("required")),D(8),Li$1(),D(2),z("ngIf",r.recoveryRepaymentLoanForm.controls.transactionAmount.hasError("required")),D(8),Li$1(),D(2),z("ngForOf",r.paymentTypes),D(11),z("ngIf",r.showPaymentDetails),D(2),z("ngIf",!r.showPaymentDetails),D(4),z("ngIf",r.showPaymentDetails),D(7),Li$1(),D(6),z("routerLink",$o$1(13,es)),D(3),z("mifosxHasPermission","REPAYMENT_LOAN");}},dependencies:[ii,Yo$1,go$1,Mc,eA,R2,wc$1,Ti$1,Sn$1,Sje,Aje,Lje,zT,dh,Mv,Ri$1,Br$1,O3,sv,Ac$1,ja$1,DI,Cc$1,Na$1,k2,S6,uo$1,_3,bp$1,XQe],styles:[".expandCollapsebutton[_ngcontent-%COMP%]{margin-top:-7px}.container[_ngcontent-%COMP%]{max-width:37rem}"],changeDetection:1})}return e})();function ss(e,m){e&1&&(x(0,"span"),b(1,`
          Active
        `),w());}function ps(e,m){e&1&&(x(0,"span"),b(1,`
          Deleted
        `),w());}var Fi=(()=>{class e{dialogRef;data;constructor(a,l){this.dialogRef=a,this.data=l;}ngOnInit(){this.dialogRef.updateSize("400px");}static \u0275fac=function(l){return new(l||e)(T(En),T(rr$1))};static \u0275cmp=N({type:e,selectors:[["mifosx-loans-account-view-guarantor-details-dialog"]],standalone:false,decls:63,vars:6,consts:[["mat-dialog-title",""],["mat-dialog-content","","fxLayout","column"],["fxLayout","row wrap","fxLayout.lt-md","column"],["fxFlexFill",""],["fxFlex","50%"],[4,"ngIf"],["fxLayout","row","fxLayout.xs","column","fxLayoutAlign","center","fxLayoutGap","2%"],["mat-raised-button","","mat-dialog-close",""]],template:function(l,r){l&1&&(x(0,"h1",0),b(1,"Guarantor Detail"),w(),b(2,`

`),x(3,"div",1),b(4,`

  `),x(5,"div",2),b(6,`

    `),x(7,"div",3),b(8,`
      `),x(9,"span",4),b(10,"First Name:"),w(),b(11,`
      `),x(12,"span",4),b(13),w(),b(14,`
    `),w(),b(15,`

    `),x(16,"div",3),b(17,`
      `),x(18,"span",4),b(19,"Last Name:"),w(),b(20,`
      `),x(21,"span",4),b(22),w(),b(23,`
    `),w(),b(24,`

    `),x(25,"div",3),b(26,`
      `),x(27,"span",4),b(28,"Relationship:"),w(),b(29,`
      `),x(30,"span",4),b(31),w(),b(32,`
    `),w(),b(33,`

    `),x(34,"div",3),b(35,`
      `),x(36,"span",4),b(37,"Guarantor Type:"),w(),b(38,`
      `),x(39,"span",4),b(40),w(),b(41,`
    `),w(),b(42,`

    `),x(43,"div",3),b(44,`
      `),x(45,"span",4),b(46,"Status:"),w(),b(47,`
      `),x(48,"span",4),b(49,`
        `),Ie(50,ss,2,0,"span",5),b(51,`
        `),Ie(52,ps,2,0,"span",5),w(),b(53,`
    `),w(),b(54,`

  `),w(),b(55,`

`),w(),b(56,`

`),x(57,"mat-dialog-actions",6),b(58,`
  `),x(59,"button",7),b(60," Cancel "),w(),b(61,`
`),w(),b(62,`
`)),l&2&&(D(13),Dt(r.data.guarantorData.firstname),D(9),Dt(r.data.guarantorData.lastname),D(9),Dt(r.data.guarantorData.clientRelationshipType.name),D(9),Dt(r.data.guarantorData.guarantorType.value),D(10),z("ngIf",r.data.guarantorData.status),D(2),z("ngIf",!r.data.guarantorData.status));},dependencies:[Yo$1,go$1,Mc,eA,R2,wc$1,Sn$1,Fi$1,ci$1,Oi$1,li$1],encapsulation:2,changeDetection:1})}return e})();function ds(e,m){e&1&&(x(0,"span"),b(1,"Not Available"),w());}function us(e,m){e&1&&(x(0,"span"),b(1,"Unassigned"),w());}function fs(e,m){e&1&&(x(0,"span"),b(1,`
                  `),fe(2,"fa-icon",5),b(3,`
                `),w());}function xs(e,m){e&1&&(x(0,"span"),b(1," Not Provided "),w());}function _s(e,m){e&1&&(x(0,"span"),b(1,"Not Provided"),w());}function Cs(e,m){e&1&&(x(0,"th",25),b(1," Name "),w());}function vs(e,m){if(e&1&&(x(0,"span"),b(1),w()),e&2){let a=K().$implicit;D(),Y0$1(`
              `,a.firstname," \xA0 ",a.lastname,`
            `);}}function gs(e,m){if(e&1&&(x(0,"td",26),b(1,`
            `),Ie(2,vs,2,2,"span",3),b(3,`
          `),w()),e&2){let a=m.$implicit;D(2),z("ngIf",!a.guarantorFundingDetails);}}function hs(e,m){e&1&&(x(0,"th",25),b(1," Relationship "),w());}function Ss(e,m){if(e&1&&(x(0,"span"),b(1),w()),e&2){let a=K().$implicit;D(),it(`
              `,a.clientRelationshipType.name,`
            `);}}function ys(e,m){if(e&1&&(x(0,"td",26),b(1,`
            `),Ie(2,Ss,2,1,"span",3),b(3,`
          `),w()),e&2){let a=m.$implicit;D(2),z("ngIf",!a.guarantorFundingDetails);}}function Ds(e,m){e&1&&(x(0,"th",25),b(1," Guarantor Type "),w());}function bs(e,m){if(e&1&&(x(0,"span"),b(1),w()),e&2){let a=K().$implicit;D(),it(`
              `,a.guarantorType.value,`
            `);}}function Ts(e,m){if(e&1&&(x(0,"td",26),b(1,`
            `),Ie(2,bs,2,1,"span",3),b(3,`
          `),w()),e&2){let a=m.$implicit;D(2),z("ngIf",!a.guarantorFundingDetails);}}function Es(e,m){e&1&&(x(0,"th",25),b(1," Deposit Account "),w());}function As(e,m){e&1&&(x(0,"span"),b(1,`

            `),w());}function Is(e,m){if(e&1&&(x(0,"td",26),b(1,`
            `),Ie(2,As,2,0,"span",3),b(3,`
          `),w()),e&2){let a=m.$implicit;D(2),z("ngIf",!a.guarantorFundingDetails);}}function Ls(e,m){e&1&&(x(0,"th",25),b(1," Amount "),w());}function Fs(e,m){e&1&&(x(0,"span"),b(1,`

            `),w());}function ws(e,m){if(e&1&&(x(0,"td",26),b(1,`
            `),Ie(2,Fs,2,0,"span",3),b(3,`
          `),w()),e&2){let a=m.$implicit;D(2),z("ngIf",!a.guarantorFundingDetails);}}function Ps(e,m){e&1&&(x(0,"th",25),b(1," Remaining Amount "),w());}function Rs(e,m){e&1&&(x(0,"span"),b(1,`

            `),w());}function Os(e,m){if(e&1&&(x(0,"td",26),b(1,`
            `),Ie(2,Rs,2,0,"span",3),b(3,`
          `),w()),e&2){let a=m.$implicit;D(2),z("ngIf",!a.guarantorFundingDetails);}}function Ms(e,m){e&1&&(x(0,"th",25),b(1," Status "),w());}function Ns(e,m){e&1&&(x(0,"span"),b(1,`
                Active
              `),w());}function ks(e,m){e&1&&(x(0,"span"),b(1,`
                Deleted
              `),w());}function Gs(e,m){if(e&1&&(x(0,"span"),b(1,`
              `),Ie(2,Ns,2,0,"span",3),b(3,`
              `),Ie(4,ks,2,0,"span",3),b(5,`
            `),w()),e&2){let a=K().$implicit;D(2),z("ngIf",a.status),D(2),z("ngIf",!a.status);}}function Bs(e,m){if(e&1&&(x(0,"td",26),b(1,`
            `),Ie(2,Gs,6,2,"span",3),b(3,`
          `),w()),e&2){let a=m.$implicit;D(2),z("ngIf",!a.guarantorFundingDetails);}}function js(e,m){e&1&&(x(0,"th",25),b(1," Action "),w());}function Vs(e,m){if(e&1){let a=Kt();x(0,"button",29),re("click",function(){ot(a);let r=K(2).$implicit,d=K(2);return at(d.viewGuarantorDetails(r))}),b(1,`
                `),fe(2,"fa-icon",30),b(3,`\xA0\xA0
              `),w();}}function qs(e,m){e&1&&(x(0,"button",31),b(1,`
                `),fe(2,"fa-icon",32),b(3,`\xA0\xA0
              `),w());}function Hs(e,m){if(e&1){let a=Kt();x(0,"button",34),re("click",function(){ot(a);let r=K(3).$implicit,d=K(2);return at(d.deleteGuarantor(r.id))}),b(1,`
                  `),fe(2,"fa-icon",35),b(3,`\xA0\xA0
                `),w();}}function $s(e,m){e&1&&(x(0,"span"),b(1,`
                `),Ie(2,Hs,4,0,"button",33),b(3,`
              `),w()),e&2&&(D(2),z("mifosxHasPermission","DELETE_GUARANTOR"));}function Ws(e,m){if(e&1&&(x(0,"span"),b(1,`
              `),Ie(2,Vs,4,0,"button",27),b(3,`
              `),Ie(4,qs,4,0,"button",28),b(5,`
              `),Ie(6,$s,4,1,"span",3),b(7,`
            `),w()),e&2){let a=K().$implicit;D(2),z("mifosxHasPermission","READ_SAVINGSACCOUNT"),D(2),z("ngIf",a.status&&a.guarantorType.id==3&&a.id),D(2),z("ngIf",a.status);}}function Us(e,m){if(e&1&&(x(0,"td",26),b(1,`
            `),Ie(2,Ws,8,3,"span",3),b(3,`
          `),w()),e&2){let a=m.$implicit;D(2),z("ngIf",!a.guarantorFundingDetails);}}function zs(e,m){e&1&&fe(0,"tr",36);}function Qs(e,m){e&1&&fe(0,"tr",37);}function Ys(e,m){if(e&1){let a=Kt();x(0,"div",6),b(1,`

      `),b(2,`
      `),x(3,"div",7),b(4,`
        `),x(5,"div",8),b(6,`
          `),x(7,"div",9),b(8,`
            `),x(9,"h3"),b(10,"Guarantors Details"),w(),b(11,`
          `),w(),b(12,`
        `),w(),b(13,`
        `),x(14,"div",8),b(15,`
          `),x(16,"div",10),b(17,`
            `),x(18,"button",11),re("click",function(){ot(a);let r=K();return at(r.toggleGuarantorsDetailsOverview())}),b(19),w(),b(20,`
          `),w(),b(21,`
        `),w(),b(22,`
      `),w(),b(23,`

      `),x(24,"table",12),nee(25,"accountsFilter"),b(26,`
        `),b(27,`
        `),Rl$1(28,13),b(29,`
          `),Ie(30,Cs,2,0,"th",14),b(31,`
          `),Ie(32,gs,4,1,"td",15),b(33,`
        `),zl$1(),b(34,`

        `),Rl$1(35,16),b(36,`
          `),Ie(37,hs,2,0,"th",14),b(38,`
          `),Ie(39,ys,4,1,"td",15),b(40,`
        `),zl$1(),b(41,`

        `),Rl$1(42,17),b(43,`
          `),Ie(44,Ds,2,0,"th",14),b(45,`
          `),Ie(46,Ts,4,1,"td",15),b(47,`
        `),zl$1(),b(48,`

        `),Rl$1(49,18),b(50,`
          `),Ie(51,Es,2,0,"th",14),b(52,`
          `),Ie(53,Is,4,1,"td",15),b(54,`
        `),zl$1(),b(55,`

        `),Rl$1(56,19),b(57,`
          `),Ie(58,Ls,2,0,"th",14),b(59,`
          `),Ie(60,ws,4,1,"td",15),b(61,`
        `),zl$1(),b(62,`

        `),Rl$1(63,20),b(64,`
          `),Ie(65,Ps,2,0,"th",14),b(66,`
          `),Ie(67,Os,4,1,"td",15),b(68,`
        `),zl$1(),b(69,`

        `),Rl$1(70,21),b(71,`
          `),Ie(72,Ms,2,0,"th",14),b(73,`
          `),Ie(74,Bs,4,1,"td",15),b(75,`
        `),zl$1(),b(76,`

        `),Rl$1(77,22),b(78,`
          `),Ie(79,js,2,0,"th",14),b(80,`
          `),Ie(81,Us,4,1,"td",15),b(82,`
        `),zl$1(),b(83,`
        `),b(84,`


        `),Ie(85,zs,1,0,"tr",23),b(86,`
        `),Ie(87,Qs,1,0,"tr",24),b(88,`

      `),w(),b(89,`
    `),w();}if(e&2){let a=K();D(19),Dt(a.showDeletedGuarantorsAccounts?"Hide Deleted Guarantors":"Show Deleted Guarantors"),D(5),z("dataSource",aee(25,4,a.guarantorDetails,"guarantor",a.showDeletedGuarantorsAccounts)),D(61),z("matHeaderRowDef",a.guarantorsDisplayedColumns),D(2),z("matRowDefColumns",a.guarantorsDisplayedColumns);}}var wi=(()=>{class e{dialog;loansService;route;router;dataObject;guarantorDetails;showDeletedGuarantorsAccounts=false;loanId;guarantorsDisplayedColumns=["fullname","relationship","guarantortype","depositAccount","amount","remainingAmount","status","action"];constructor(a,l,r,d){this.dialog=a,this.loansService=l,this.route=r,this.router=d,this.loanId=this.route.parent.snapshot.params.loanId;}ngOnInit(){this.guarantorDetails=this.dataObject.guarantors;}toggleGuarantorsDetailsOverview(){this.showDeletedGuarantorsAccounts=!this.showDeletedGuarantorsAccounts;}deleteGuarantor(a){this.dialog.open(CNe,{data:{deleteContext:`the guarantor id: ${a}`}}).afterClosed().subscribe(r=>{r.delete&&this.loansService.deleteGuarantor(this.loanId,a).subscribe(()=>{this.reload();});});}viewGuarantorDetails(a){this.dialog.open(Fi,{data:{guarantorData:a}}).afterClosed().subscribe(()=>{});}reload(){let a=this.dataObject.clientId,l=this.router.url;this.router.navigateByUrl(`/clients/${a}/loans-accounts`,{skipLocationChange:true}).then(()=>this.router.navigate([l]));}static \u0275fac=function(l){return new(l||e)(T(Iv),T(E),T(zs$1),T(Gr$1))};static \u0275cmp=N({type:e,selectors:[["mifosx-view-guarantors"]],inputs:{dataObject:"dataObject"},standalone:false,decls:118,vars:20,consts:[[1,"container"],["fxLayout","row","fxLayoutGap","2%",1,"viewGuarantors-account-tables"],["fxFlex","49%"],[4,"ngIf"],["fxFlexFill","","fxLayout","row wrap","fxLayout.lt-md","column",4,"ngIf"],["icon","times"],["fxFlexFill","","fxLayout","row wrap","fxLayout.lt-md","column"],[1,"headingContent"],["fxLayout","column","fxFlex","50%"],[1,"headingName"],["fxLayout","row","fxLayoutAlign","flex-end"],["mat-raised-button","","color","primary",1,"f-right",3,"click"],["fxFlexFill","","mat-table","",3,"dataSource"],["matColumnDef","fullname"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","relationship"],["matColumnDef","guarantortype"],["matColumnDef","depositAccount"],["matColumnDef","amount"],["matColumnDef","remainingAmount"],["matColumnDef","status"],["matColumnDef","action"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["mat-header-cell",""],["mat-cell",""],["mat-raised-button","","class","account-action-button","color","primary",3,"click",4,"mifosxHasPermission"],["mat-raised-button","","class","account-action-button","color","primary",4,"ngIf"],["mat-raised-button","","color","primary",1,"account-action-button",3,"click"],["icon","eye"],["mat-raised-button","","color","primary",1,"account-action-button"],["icon","edit"],["mat-raised-button","","class","account-action-button","color","warn",3,"click",4,"mifosxHasPermission"],["mat-raised-button","","color","warn",1,"account-action-button",3,"click"],["icon","trash"],["mat-header-row",""],["mat-row",""]],template:function(l,r){l&1&&(x(0,"div",0),b(1,`

  `),x(2,"mat-card"),b(3,`

    `),x(4,"div",1),b(5,`

      `),x(6,"div",2),b(7,`
        `),x(8,"table"),b(9,`
          `),x(10,"tbody"),b(11,`
            `),x(12,"tr"),b(13,`
              `),x(14,"td"),b(15,"Disbursement Date"),w(),b(16,`
              `),x(17,"td"),b(18),Ie(19,ds,2,0,"span",3),w(),b(20,`
            `),w(),b(21,`
            `),x(22,"tr"),b(23,`
              `),x(24,"td"),b(25,"Currency"),w(),b(26,`
              `),x(27,"td"),b(28),w(),b(29,`
            `),w(),b(30,`
            `),x(31,"tr"),b(32,`
              `),x(33,"td"),b(34,"Loan Officer"),w(),b(35,`
              `),x(36,"td"),b(37),Ie(38,us,2,0,"span",3),b(39,`
                `),Ie(40,fs,4,0,"span",3),w(),b(41,`
            `),w(),b(42,`
            `),x(43,"tr"),b(44,`
              `),x(45,"td"),b(46,"External Id"),w(),b(47,`
              `),x(48,"td"),b(49),w(),b(50,`
            `),w(),b(51,`
          `),w(),b(52,`
        `),w(),b(53,`
      `),w(),b(54,`

      `),x(55,"div",2),b(56,`
        `),x(57,"table"),b(58,`
          `),x(59,"tbody"),b(60,`
            `),x(61,"tr"),b(62,`
              `),x(63,"td"),b(64,"Loan Purpose"),w(),b(65,`
              `),x(66,"td"),b(67),Ie(68,xs,2,0,"span",3),b(69,`
              `),w(),b(70,`
            `),w(),b(71,`
            `),x(72,"tr"),b(73,`
              `),x(74,"td"),b(75,"Approved Amount"),w(),b(76,`
              `),x(77,"td"),b(78,`
                `),x(79,"span"),b(80),nee(81,"number"),w(),b(82,`
              `),w(),b(83,`
            `),w(),b(84,`
            `),x(85,"tr"),b(86,`
              `),x(87,"td"),b(88,"Disburse Amount"),w(),b(89,`
              `),x(90,"td"),b(91,`
                `),x(92,"span"),b(93),nee(94,"number"),w(),b(95,`
              `),w(),b(96,`
            `),w(),b(97,`
            `),x(98,"tr"),b(99,`
              `),x(100,"td"),b(101,"Arrears By"),w(),b(102,`
              `),x(103,"td"),b(104),nee(105,"number"),Ie(106,_s,2,0,"span",3),b(107,`
              `),w(),b(108,`
            `),w(),b(109,`
          `),w(),b(110,`
        `),w(),b(111,`
      `),w(),b(112,`
    `),w(),b(113,`

    `),Ie(114,Ys,90,8,"div",4),b(115,`

  `),w(),b(116,`

`),w(),b(117,`
`)),l&2&&(D(18),Dt(r.dataObject.timeline.actualDisbursementDate),D(),z("ngIf",!r.dataObject.timeline.actualDisbursementDate),D(9),Dt(r.dataObject.currency.name),D(9),it("",r.dataObject.loanOfficerName," "),D(),z("ngIf",!r.dataObject.loanOfficerName),D(2),z("ngIf",r.dataObject.loanOfficerName),D(9),Dt(r.dataObject.externalId),D(18),it(`
                `,r.dataObject.loanPurposeName," "),D(),z("ngIf",!r.dataObject.loanPurposeName),D(12),Dt(ree(81,14,r.dataObject.approvedPrincipal)),D(13),Dt(ree(94,16,r.dataObject.principal)),D(11),it("",ree(105,18,r.dataObject.summary.totalOverdue),`
                `),D(2),z("ngIf",r.dataObject.summary.totalOverdue<0),D(8),z("ngIf",r.guarantorDetails));},dependencies:[Yo$1,Oc$1,go$1,Mc,eA,R2,wc$1,Sn$1,Sje,uqe,mqe,bqe,pqe,fqe,xqe,gqe,vqe,Cqe,Mqe,XQe,yte,oV],styles:[".viewGuarantors-account-tables[_ngcontent-%COMP%]{padding:1%;margin:1%}.viewGuarantors-account-tables[_ngcontent-%COMP%]   .table-headers[_ngcontent-%COMP%]{margin:0;padding:6px}.viewGuarantors-account-tables[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{padding:3px}table[_ngcontent-%COMP%]{width:100%}table[_ngcontent-%COMP%]   .account-action-button[_ngcontent-%COMP%]{min-width:26px;padding:0 6px;margin:4px;line-height:25px}.headingContent[_ngcontent-%COMP%]{margin-bottom:1%;margin-top:1%;width:100%}.headingName[_ngcontent-%COMP%]{display:block}.container[_ngcontent-%COMP%]{max-width:73rem}"],changeDetection:1})}return e})();var Ks=()=>["../../general"];function Xs(e,m){e&1&&(x(0,"mat-error"),b(1,`
                Name `),x(2,"strong"),b(3,"is required"),w(),b(4,`
              `),w());}function Zs(e,m){if(e&1&&(x(0,"mat-option",15),b(1),w()),e&2){let a=m.$implicit;z("value",a),D(),it(`
                `,a.displayName,`
              `);}}function tp(e,m){if(e&1&&(x(0,"mat-option",15),b(1),w()),e&2){let a=m.$implicit;z("value",a.id),D(),it(`
                  `,a.name,`
                `);}}function ep(e,m){if(e&1&&(x(0,"mat-option",15),b(1),w()),e&2){let a=m.$implicit;z("value",a.id),D(),Y0$1(`
                    `,a.productName," - ",a.accountNo,`
                  `);}}function np(e,m){if(e&1&&(Rl$1(0),b(1,`

              `),x(2,"mat-form-field"),b(3,`
                `),x(4,"mat-label"),b(5,"Account"),w(),b(6,`
                `),x(7,"mat-select",16),b(8,`
                  `),Ie(9,ep,2,3,"mat-option",13),b(10,`
                `),w(),ki$1(),b(11,`
              `),w(),b(12,`

              `),x(13,"mat-form-field"),b(14,`
                `),x(15,"mat-label"),b(16,"Amount"),w(),b(17,`
                `),fe(18,"input",17),ki$1(),b(19,`
              `),w(),b(20,`

            `),zl$1()),e&2){let a=K(2);D(7),Li$1(),D(2),z("ngForOf",a.accountOptions),D(9),Li$1();}}function ip(e,m){if(e&1){let a=Kt();Rl$1(0),b(1,`

            `),x(2,"mat-form-field",10),b(3,`
              `),x(4,"mat-label"),b(5,"Name"),w(),b(6,`
              `),fe(7,"input",11),ki$1(),b(8,`
              `),Ie(9,Xs,5,0,"mat-error",6),b(10,`
            `),w(),b(11,`

            `),x(12,"mat-autocomplete",12,0),re("optionSelected",function(r){ot(a);let d=K();return at(d.clientSelected(r.option.value))}),b(14,`
              `),Ie(15,Zs,2,2,"mat-option",13),b(16,`
            `),w(),b(17,`

            `),x(18,"mat-form-field"),b(19,`
              `),x(20,"mat-label"),b(21,"Relationship"),w(),b(22,`
              `),x(23,"mat-select",14),b(24,`
                `),Ie(25,tp,2,2,"mat-option",13),b(26,`
              `),w(),ki$1(),b(27,`
            `),w(),b(28,`

            `),Ie(29,np,21,1,"ng-container",6),b(30,`

          `),zl$1();}if(e&2){let a=Nt(13),l=K();D(7),z("matAutocomplete",a),Li$1(),D(2),z("ngIf",l.newGuarantorForm.controls.name.hasError("required")),D(3),z("displayWith",l.displayClient),D(3),z("ngForOf",l.clientsData),D(8),Li$1(),D(2),z("ngForOf",l.relationTypes),D(4),z("ngIf",l.accountOptions.length>0);}}function ap(e,m){if(e&1&&(x(0,"mat-option",15),b(1),w()),e&2){let a=m.$implicit;z("value",a.id),D(),it(`
                  `,a.name,`
                `);}}function op(e,m){e&1&&(x(0,"mat-error"),b(1,`
                First Name `),x(2,"strong"),b(3,"is required"),w(),b(4,`
              `),w());}function rp(e,m){e&1&&(x(0,"mat-error"),b(1,`
                Last Name `),x(2,"strong"),b(3,"is required"),w(),b(4,`
              `),w());}function mp(e,m){if(e&1&&(Rl$1(0),b(1,`

            `),x(2,"mat-form-field"),b(3,`
              `),x(4,"mat-label"),b(5,"Relationship"),w(),b(6,`
              `),x(7,"mat-select",14),b(8,`
                `),Ie(9,ap,2,2,"mat-option",13),b(10,`
              `),w(),ki$1(),b(11,`
            `),w(),b(12,`

            `),x(13,"mat-form-field"),b(14,`
              `),x(15,"mat-label"),b(16,"First Name"),w(),b(17,`
              `),fe(18,"input",18),ki$1(),b(19,`
              `),Ie(20,op,5,0,"mat-error",6),b(21,`
            `),w(),b(22,`

            `),x(23,"mat-form-field"),b(24,`
              `),x(25,"mat-label"),b(26,"Last Name"),w(),b(27,`
              `),fe(28,"input",19),ki$1(),b(29,`
              `),Ie(30,rp,5,0,"mat-error",6),b(31,`
            `),w(),b(32,`

            `),x(33,"mat-form-field"),b(34,`
              `),x(35,"mat-label"),b(36,"Date Of Birth"),w(),b(37,`
              `),fe(38,"input",20),ki$1(),b(39,`
              `),fe(40,"mat-datepicker-toggle",21),b(41,`
              `),fe(42,"mat-datepicker",null,1),b(44,`
            `),w(),b(45,`

            `),x(46,"mat-form-field"),b(47,`
              `),x(48,"mat-label"),b(49,"Address Line 1"),w(),b(50,`
              `),fe(51,"input",22),ki$1(),b(52,`
            `),w(),b(53,`

            `),x(54,"mat-form-field"),b(55,`
              `),x(56,"mat-label"),b(57,"Address Line 2"),w(),b(58,`
              `),fe(59,"input",23),ki$1(),b(60,`
            `),w(),b(61,`

            `),x(62,"mat-form-field"),b(63,`
              `),x(64,"mat-label"),b(65,"City"),w(),b(66,`
              `),fe(67,"input",24),ki$1(),b(68,`
            `),w(),b(69,`

            `),x(70,"mat-form-field"),b(71,`
              `),x(72,"mat-label"),b(73,"Zip"),w(),b(74,`
              `),fe(75,"input",25),ki$1(),b(76,`
            `),w(),b(77,`

            `),x(78,"mat-form-field"),b(79,`
              `),x(80,"mat-label"),b(81,"Mobile"),w(),b(82,`
              `),fe(83,"input",26),ki$1(),b(84,`
            `),w(),b(85,`

            `),x(86,"mat-form-field"),b(87,`
              `),x(88,"mat-label"),b(89,"Residence Phone #"),w(),b(90,`
              `),fe(91,"input",27),ki$1(),b(92,`
            `),w(),b(93,`

          `),zl$1()),e&2){let a=Nt(43),l=K();D(7),Li$1(),D(2),z("ngForOf",l.relationTypes),D(9),Li$1(),D(2),z("ngIf",l.newGuarantorForm.controls.firstname.hasError("required")),D(8),Li$1(),D(2),z("ngIf",l.newGuarantorForm.controls.lastname.hasError("required")),D(8),z("min",l.minDate)("max",l.maxDate)("matDatepicker",a),Li$1(),D(2),z("for",a),D(11),Li$1(),D(8),Li$1(),D(8),Li$1(),D(8),Li$1(),D(8),Li$1(),D(8),Li$1();}}function lp(e,m){if(e&1&&(x(0,"button",28),b(1,"Submit"),w()),e&2){let a=K();z("disabled",!a.newGuarantorForm.valid);}}function cp(e,m){if(e&1&&(Rl$1(0),b(1,`
      `),x(2,"div",29),b(3,`
        `),x(4,"div",30),b(5,`
          `),x(6,"div",31),b(7,"Client Details"),w(),b(8,`
        `),w(),b(9,`
        `),x(10,"div",32),b(11,`
          `),x(12,"div",33),b(13,"Name"),w(),b(14,`
          `),x(15,"div",33),b(16),w(),b(17,`
        `),w(),b(18,`
        `),x(19,"div",32),b(20,`
          `),x(21,"div",33),b(22,"Id"),w(),b(23,`
          `),x(24,"div",33),b(25),w(),b(26,`
        `),w(),b(27,`
        `),x(28,"div",32),b(29,`
          `),x(30,"div",33),b(31,"Office"),w(),b(32,`
          `),x(33,"div",33),b(34),w(),b(35,`
        `),w(),b(36,`
      `),w(),b(37,`
    `),zl$1()),e&2){let a=K();D(16),Dt(a.newGuarantorForm.controls.name.value.displayName),D(9),Dt(a.newGuarantorForm.controls.name.value.id),D(9),Dt(a.newGuarantorForm.controls.name.value.officeName);}}var Pi=(()=>{class e{formBuilder;loanService;route;router;datePipe;clientsService;settingsService;dataObject;newGuarantorForm;loanId;relationTypes;showClientDetailsForm=false;minDate=new Date(2e3,0,1);maxDate=new Date;clientsData=[];accountOptions=[];constructor(a,l,r,d,h,I,R){this.formBuilder=a,this.loanService=l,this.route=r,this.router=d,this.datePipe=h,this.clientsService=I,this.settingsService=R,this.loanId=this.route.parent.snapshot.params.loanId;}ngOnInit(){this.createNewGuarantorForm(),this.setNewGuarantorDetailsForm(),this.buildDependencies();}createNewGuarantorForm(){this.newGuarantorForm=this.formBuilder.group({existingClient:[""],name:["",mi$1.required],clientRelationshipTypeId:[""],savingsId:[""],amount:[""]});}setNewGuarantorDetailsForm(){this.relationTypes=this.dataObject.allowedClientRelationshipTypes,this.newGuarantorForm.patchValue({existingClient:true});}buildDependencies(){this.newGuarantorForm.get("existingClient").valueChanges.subscribe(()=>{this.showClientDetailsForm=!this.showClientDetailsForm,this.showClientDetailsForm?(this.newGuarantorForm.addControl("firstname",new Qi$1("")),this.newGuarantorForm.addControl("lastname",new Qi$1("")),this.newGuarantorForm.addControl("dob",new Qi$1("")),this.newGuarantorForm.addControl("addressLine1",new Qi$1("")),this.newGuarantorForm.addControl("addressLine2",new Qi$1("")),this.newGuarantorForm.addControl("city",new Qi$1("")),this.newGuarantorForm.addControl("zip",new Qi$1("")),this.newGuarantorForm.addControl("mobileNumber",new Qi$1("")),this.newGuarantorForm.addControl("housePhoneNumber",new Qi$1("")),this.newGuarantorForm.removeControl("name"),this.newGuarantorForm.removeControl("savingsId"),this.newGuarantorForm.removeControl("amount")):(this.newGuarantorForm.addControl("name",new Qi$1("")),this.newGuarantorForm.addControl("savingsId",new Qi$1("")),this.newGuarantorForm.addControl("amount",new Qi$1("")),this.newGuarantorForm.removeControl("firstname"),this.newGuarantorForm.removeControl("lastname"),this.newGuarantorForm.removeControl("dob"),this.newGuarantorForm.removeControl("addressLine1"),this.newGuarantorForm.removeControl("addressLine2"),this.newGuarantorForm.removeControl("city"),this.newGuarantorForm.removeControl("zip"),this.newGuarantorForm.removeControl("mobileNumber"),this.newGuarantorForm.removeControl("housePhoneNumber"));});}ngAfterViewInit(){this.newGuarantorForm.value.existingClient&&this.newGuarantorForm.get("name").valueChanges.subscribe(a=>{a.length>=2&&this.clientsService.getFilteredClients("displayName","ASC",true,a).subscribe(l=>{this.clientsData=l.pageItems;});});}clientSelected(a){this.accountOptions=[],this.loanService.guarantorAccountResource(this.loanId,a.id).subscribe(l=>{this.accountOptions=l.accountLinkingOptions;});}displayClient(a){return a?a.displayName:void 0}submit(){let a=this.newGuarantorForm.value.dob,l=this.newGuarantorForm.value.existingClient?this.dataObject.guarantorTypeOptions[0].id:this.dataObject.guarantorTypeOptions[2].id,r=this.settingsService.language.code,d=this.settingsService.dateFormat,h=Re(O({},this.newGuarantorForm.value),{locale:r,guarantorTypeId:l});this.newGuarantorForm.value.existingClient?h.entityId=this.newGuarantorForm.controls.name.value.id:(h.dob=this.datePipe.transform(a,d),h.dateFormat=d),delete h.existingClient,delete h.name,this.loanService.createNewGuarantor(this.loanId,h).subscribe(I=>{this.router.navigate(["../../general"],{relativeTo:this.route});});}static \u0275fac=function(l){return new(l||e)(T(AI),T(E),T(zs$1),T(Gr$1),T(_te),T(g),T(yF))};static \u0275cmp=N({type:e,selectors:[["mifosx-create-guarantor"]],inputs:{dataObject:"dataObject"},standalone:false,decls:32,vars:7,consts:[["clientsAutocomplete","matAutocomplete"],["dobDatePicker",""],[1,"container"],[3,"ngSubmit","formGroup"],["fxLayout","column"],["labelPosition","before","formControlName","existingClient"],[4,"ngIf"],["fxLayout","row","fxLayout.xs","column","fxLayoutAlign","center","fxLayoutGap","5px"],["type","button","mat-raised-button","",3,"routerLink"],["mat-raised-button","","color","primary",3,"disabled",4,"mifosxHasPermission"],["fxFlex","30%"],["matInput","","formControlName","name",3,"matAutocomplete"],["autoActiveFirstOption","",3,"optionSelected","displayWith"],[3,"value",4,"ngFor","ngForOf"],["formControlName","clientRelationshipTypeId"],[3,"value"],["formControlName","savingsId"],["type","number","matInput","","required","","formControlName","amount","required",""],["matInput","","required","","formControlName","firstname","required",""],["matInput","","required","","formControlName","lastname","required",""],["matInput","","formControlName","dob",3,"min","max","matDatepicker"],["matSuffix","",3,"for"],["matInput","","formControlName","addressLine1"],["matInput","","formControlName","addressLine2"],["matInput","","formControlName","city"],["matInput","","formControlName","zip"],["type","number","matInput","","formControlName","mobileNumber"],["type","number","matInput","","formControlName","housePhoneNumber"],["mat-raised-button","","color","primary",3,"disabled"],[1,"mat-table"],[1,"mat-header-row"],[1,"mat-header-cell"],[1,"mat-row"],[1,"mat-cell"]],template:function(l,r){l&1&&(x(0,"div",2),b(1,`

  `),x(2,"mat-card"),b(3,`

    `),x(4,"form",3),re("ngSubmit",function(){return r.submit()}),b(5,`

      `),x(6,"mat-card-content"),b(7,`

        `),x(8,"div",4),b(9,`

          `),x(10,"mat-checkbox",5),b(11,`
            Existing Client
          `),w(),ki$1(),b(12,`

          `),Ie(13,ip,31,6,"ng-container",6),b(14,`

          `),Ie(15,mp,94,7,"ng-container",6),b(16,`

        `),w(),b(17,`

        `),x(18,"mat-card-actions",7),b(19,`
          `),x(20,"button",8),b(21,"Cancel"),w(),b(22,`
          `),Ie(23,lp,2,1,"button",9),b(24,`
        `),w(),b(25,`

      `),w(),b(26,`

    `),w(),b(27,`

    `),Ie(28,cp,38,3,"ng-container",6),b(29,`

  `),w(),b(30,`

`),w(),b(31,`
`)),l&2&&(D(4),z("formGroup",r.newGuarantorForm),D(6),Li$1(),D(3),z("ngIf",!r.showClientDetailsForm),D(2),z("ngIf",r.showClientDetailsForm),D(5),z("routerLink",$o$1(6,Ks)),D(3),z("mifosxHasPermission","CREATE_GUARANTOR"),D(5),z("ngIf",r.newGuarantorForm.controls.name!==void 0));},dependencies:[ii,Yo$1,go$1,Mc,eA,wc$1,fAe,Ti$1,coe,Sn$1,Sje,Aje,Lje,uv,zT,dh,Mv,Ri$1,Br$1,O3,sv,Ac$1,ja$1,DI,Cc$1,Wne,Na$1,k2,S6,uo$1,_3,bp$1,XQe],styles:[".container[_ngcontent-%COMP%]   .mat-table[_ngcontent-%COMP%]{display:block;font-family:Tahoma,Verdana;width:100%}.container[_ngcontent-%COMP%]   .mat-row[_ngcontent-%COMP%], .container[_ngcontent-%COMP%]   .mat-header-row[_ngcontent-%COMP%]{display:flex;border-bottom-width:1px;border-bottom-style:solid;align-items:center;min-height:48px;padding:0 24px}.container[_ngcontent-%COMP%]   .mat-cell[_ngcontent-%COMP%], .container[_ngcontent-%COMP%]   .mat-header-cell[_ngcontent-%COMP%]{flex:1;overflow:hidden;word-wrap:break-word}.container[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{padding-left:0;margin-bottom:0}"],changeDetection:1})}return e})();var pp=()=>["../../general"];function dp(e,m){e&1&&(x(0,"mat-error"),b(1,`
              Disbursement Date is `),x(2,"strong"),b(3,"required"),w(),b(4,`
            `),w());}function up(e,m){e&1&&(x(0,"mat-error"),b(1,`
              Transaction Amount is `),x(2,"strong"),b(3,"required"),w(),b(4,`
            `),w());}function fp(e,m){e&1&&(x(0,"mat-error"),b(1,`
              Fixed EMI Amount is `),x(2,"strong"),b(3,"required"),w(),b(4,`
            `),w());}function xp(e,m){if(e&1&&(x(0,"mat-form-field"),b(1,`
            `),x(2,"mat-label"),b(3,"Fixed EMI amount"),w(),b(4,`
            `),fe(5,"input",12),ki$1(),b(6,`
            `),Ie(7,fp,5,0,"mat-error",6),b(8,`
          `),w()),e&2){let a=K();D(5),Li$1(),D(2),z("ngIf",a.disbursementForm.controls.fixedEmiAmount.hasError("required"));}}function _p(e,m){if(e&1&&(x(0,"button",13),b(1,"Submit"),w()),e&2){let a=K();z("disabled",!a.disbursementForm.valid);}}var Ri=(()=>{class e{formBuilder;route;router;datePipe;loanService;settingsService;dataObject;minDate=new Date(2e3,0,1);maxDate=new Date;disbursementForm;constructor(a,l,r,d,h,I){this.formBuilder=a,this.route=l,this.router=r,this.datePipe=d,this.loanService=h,this.settingsService=I;}ngOnInit(){this.setDisbursementToSavingsForm();}setDisbursementToSavingsForm(){this.disbursementForm=this.formBuilder.group({actualDisbursementDate:[new Date,mi$1.required],transactionAmount:[this.dataObject.amount,mi$1.required],note:["",mi$1.required]}),(this.dataObject.fixedEmiAmount!==null||this.dataObject.fixedEmiAmount!==void 0)&&this.disbursementForm.addControl("fixedEmiAmount",new Qi$1(this.dataObject.fixedEmiAmount,[mi$1.required]));}submit(){let a=this.disbursementForm.value.actualDisbursementDate,l=this.settingsService.dateFormat;this.disbursementForm.patchValue({actualDisbursementDate:this.datePipe.transform(a,l)});let r=this.route.parent.snapshot.params.loanId,d=this.disbursementForm.value;d.locale=this.settingsService.language.code,d.dateFormat=l,this.loanService.loanActionButtons(r,"disbursetosavings",d).subscribe(h=>{this.router.navigate(["../../general"],{relativeTo:this.route});});}static \u0275fac=function(l){return new(l||e)(T(AI),T(zs$1),T(Gr$1),T(_te),T(E),T(yF))};static \u0275cmp=N({type:e,selectors:[["mifosx-disburse-loan-account"]],inputs:{dataObject:"dataObject"},standalone:false,decls:58,vars:11,consts:[["disbursementDatePicker",""],[1,"container"],[3,"ngSubmit","formGroup"],["fxLayout","column"],["matInput","","required","","formControlName","actualDisbursementDate",3,"min","max","matDatepicker"],["matSuffix","",3,"for"],[4,"ngIf"],["matInput","","required","","formControlName","transactionAmount"],["matInput","","formControlName","note"],["fxLayout","row","fxLayout.xs","column","fxLayoutAlign","center","fxLayoutGap","5px"],["type","button","mat-raised-button","",3,"routerLink"],["mat-raised-button","","color","primary",3,"disabled",4,"mifosxHasPermission"],["matInput","","required","","formControlName","fixedEmiAmount"],["mat-raised-button","","color","primary",3,"disabled"]],template:function(l,r){if(l&1&&(x(0,"div",1),b(1,`

  `),x(2,"mat-card"),b(3,`

    `),x(4,"form",2),re("ngSubmit",function(){return r.submit()}),b(5,`

      `),x(6,"mat-card-content"),b(7,`

        `),x(8,"div",3),b(9,`

          `),x(10,"mat-form-field"),b(11,`
            `),x(12,"mat-label"),b(13,"Disbursement On"),w(),b(14,`
            `),fe(15,"input",4),ki$1(),b(16,`
            `),fe(17,"mat-datepicker-toggle",5),b(18,`
            `),fe(19,"mat-datepicker",null,0),b(21,`
            `),Ie(22,dp,5,0,"mat-error",6),b(23,`
          `),w(),b(24,`

          `),x(25,"mat-form-field"),b(26,`
            `),x(27,"mat-label"),b(28,"Transaction amount"),w(),b(29,`
            `),fe(30,"input",7),ki$1(),b(31,`
            `),Ie(32,up,5,0,"mat-error",6),b(33,`
          `),w(),b(34,`

          `),Ie(35,xp,9,1,"mat-form-field",6),b(36,`

          `),x(37,"mat-form-field"),b(38,`
            `),x(39,"mat-label"),b(40,"Note"),w(),b(41,`
            `),fe(42,"textarea",8),ki$1(),b(43,`
          `),w(),b(44,`

        `),w(),b(45,`

        `),x(46,"mat-card-actions",9),b(47,`
          `),x(48,"button",10),b(49,"Cancel"),w(),b(50,`
          `),Ie(51,_p,2,1,"button",11),b(52,`
        `),w(),b(53,`

      `),w(),b(54,`

    `),w(),b(55,`

  `),w(),b(56,`

`),w(),b(57,`
`)),l&2){let d=Nt(20);D(4),z("formGroup",r.disbursementForm),D(11),z("min",r.minDate)("max",r.maxDate)("matDatepicker",d),Li$1(),D(2),z("for",d),D(5),z("ngIf",r.disbursementForm.controls.actualDisbursementDate.hasError("required")),D(8),Li$1(),D(2),z("ngIf",r.disbursementForm.controls.transactionAmount.hasError("required")),D(3),z("ngIf",r.dataObject.fixedEmiAmount!==null||r.dataObject.fixedEmiAmount!==void 0),D(7),Li$1(),D(6),z("routerLink",$o$1(10,pp)),D(3),z("mifosxHasPermission","DISBURSETOSAVINGS_LOAN");}},dependencies:[Yo$1,go$1,Mc,eA,Sn$1,Sje,Aje,Lje,zT,dh,Mv,Ri$1,Br$1,O3,sv,Ac$1,DI,Cc$1,Na$1,k2,S6,uo$1,_3,bp$1,XQe],styles:[".container[_ngcontent-%COMP%]{max-width:37rem}"],changeDetection:1})}return e})();var vp=()=>["../../general"];function gp(e,m){e&1&&(x(0,"mat-error"),b(1,`
              Rejected Date `),x(2,"strong"),b(3,"is required"),w(),b(4,`
            `),w());}function hp(e,m){if(e&1&&(x(0,"button",11),b(1,"Submit"),w()),e&2){let a=K();z("disabled",!a.rejectLoanForm.valid);}}var Oi=(()=>{class e{formBuilder;router;route;loanService;datePipe;settingsService;loanId;rejectLoanForm;minDate=new Date(2e3,0,1);maxDate=new Date;constructor(a,l,r,d,h,I){this.formBuilder=a,this.router=l,this.route=r,this.loanService=d,this.datePipe=h,this.settingsService=I,this.loanId=this.route.parent.snapshot.params.loanId;}ngOnInit(){this.setRejectLoanForm();}setRejectLoanForm(){this.rejectLoanForm=this.formBuilder.group({rejectedOnDate:[new Date,mi$1.required],note:[""]});}submit(){let a=this.rejectLoanForm.value.rejectedOnDate,l=this.settingsService.dateFormat;this.rejectLoanForm.patchValue({rejectedOnDate:this.datePipe.transform(a,l)});let r=this.rejectLoanForm.value;r.locale=this.settingsService.language.code,r.dateFormat=l,this.loanService.loanActionButtons(this.loanId,"reject",r).subscribe(d=>{this.router.navigate(["../../general"],{relativeTo:this.route});});}static \u0275fac=function(l){return new(l||e)(T(AI),T(Gr$1),T(zs$1),T(E),T(_te),T(yF))};static \u0275cmp=N({type:e,selectors:[["mifosx-reject-loan"]],standalone:false,decls:46,vars:9,consts:[["rejectedDatePicker",""],[1,"container"],[3,"ngSubmit","formGroup"],["fxLayout","column"],["matInput","","required","","formControlName","rejectedOnDate",3,"min","max","matDatepicker"],["matSuffix","",3,"for"],[4,"ngIf"],["matInput","","formControlName","note"],["fxLayout","row","fxLayout.xs","column","fxLayoutAlign","center","fxLayoutGap","5px"],["type","button","mat-raised-button","",3,"routerLink"],["mat-raised-button","","color","primary",3,"disabled",4,"mifosxHasPermission"],["mat-raised-button","","color","primary",3,"disabled"]],template:function(l,r){if(l&1&&(x(0,"div",1),b(1,`

  `),x(2,"mat-card"),b(3,`

    `),x(4,"form",2),re("ngSubmit",function(){return r.submit()}),b(5,`

      `),x(6,"mat-card-content"),b(7,`

        `),x(8,"div",3),b(9,`

          `),x(10,"mat-form-field"),b(11,`
            `),x(12,"mat-label"),b(13,"Rejected On"),w(),b(14,`
            `),fe(15,"input",4),ki$1(),b(16,`
            `),fe(17,"mat-datepicker-toggle",5),b(18,`
            `),fe(19,"mat-datepicker",null,0),b(21,`
            `),Ie(22,gp,5,0,"mat-error",6),b(23,`
          `),w(),b(24,`

          `),x(25,"mat-form-field"),b(26,`
            `),x(27,"mat-label"),b(28,"Note"),w(),b(29,`
            `),fe(30,"textarea",7),ki$1(),b(31,`
          `),w(),b(32,`

        `),w(),b(33,`

        `),x(34,"mat-card-actions",8),b(35,`
          `),x(36,"button",9),b(37,"Cancel"),w(),b(38,`
          `),Ie(39,hp,2,1,"button",10),b(40,`
        `),w(),b(41,`

      `),w(),b(42,`

    `),w(),b(43,`

  `),w(),b(44,`

`),w(),b(45,`
`)),l&2){let d=Nt(20);D(4),z("formGroup",r.rejectLoanForm),D(11),z("min",r.minDate)("max",r.maxDate)("matDatepicker",d),Li$1(),D(2),z("for",d),D(5),z("ngIf",r.rejectLoanForm.controls.rejectedOnDate.hasError("required")),D(8),Li$1(),D(6),z("routerLink",$o$1(8,vp)),D(3),z("mifosxHasPermission","REJECT_LOAN");}},dependencies:[Yo$1,go$1,Mc,eA,Sn$1,Sje,Aje,Lje,zT,dh,Mv,Ri$1,Br$1,O3,sv,Ac$1,DI,Cc$1,Na$1,k2,S6,uo$1,_3,bp$1,XQe],styles:[".container[_ngcontent-%COMP%]{max-width:37rem}"],changeDetection:1})}return e})();var yp=()=>["../../general"];function Dp(e,m){e&1&&(x(0,"mat-error"),b(1,`
              Disbursed On Date`),x(2,"strong"),b(3,"is required"),w(),b(4,`
            `),w());}function bp(e,m){e&1&&(x(0,"mat-error"),b(1,`
              Transaction Amount `),x(2,"strong"),b(3,"is required"),w(),b(4,`
            `),w());}function Tp(e,m){if(e&1&&(x(0,"mat-option",18),b(1),w()),e&2){let a=m.$implicit;z("value",a.id),D(),it(`
                `,a.name,`
              `);}}function Ep(e,m){e&1&&(x(0,"button",19),b(1,`
                `),fe(2,"i",20),b(3,`
              `),w());}function Ap(e,m){e&1&&(x(0,"button",19),b(1,`
                `),fe(2,"i",21),b(3,`
              `),w());}function Ip(e,m){e&1&&(Rl$1(0),b(1,`
            `),x(2,"mat-form-field"),b(3,`
              `),x(4,"mat-label"),b(5," Account #"),w(),b(6,`
              `),fe(7,"input",22),ki$1(),b(8,`
            `),w(),b(9,`

            `),x(10,"mat-form-field"),b(11,`
              `),x(12,"mat-label"),b(13,"Cheque #"),w(),b(14,`
              `),fe(15,"input",23),ki$1(),b(16,`
            `),w(),b(17,`

            `),x(18,"mat-form-field"),b(19,`
              `),x(20,"mat-label"),b(21,"Routing Code"),w(),b(22,`
              `),fe(23,"input",24),ki$1(),b(24,`
            `),w(),b(25,`

            `),x(26,"mat-form-field"),b(27,`
              `),x(28,"mat-label"),b(29,"Reciept #"),w(),b(30,`
              `),fe(31,"input",25),ki$1(),b(32,`
            `),w(),b(33,`

            `),x(34,"mat-form-field"),b(35,`
              `),x(36,"mat-label"),b(37,"Bank #"),w(),b(38,`
              `),fe(39,"input",26),ki$1(),b(40,`
            `),w(),b(41,`
          `),zl$1()),e&2&&(D(7),Li$1(),D(8),Li$1(),D(8),Li$1(),D(8),Li$1(),D(8),Li$1());}function Lp(e,m){if(e&1&&(x(0,"button",27),b(1,"Submit"),w()),e&2){let a=K();z("disabled",!a.disbursementLoanForm.valid);}}var Mi=(()=>{class e{formBuilder;loanService;route;router;datePipe;settingsService;dataObject;loanId;paymentTypes;showPaymentDetails=false;minDate=new Date(2e3,0,1);maxDate=new Date;disbursementLoanForm;constructor(a,l,r,d,h,I){this.formBuilder=a,this.loanService=l,this.route=r,this.router=d,this.datePipe=h,this.settingsService=I,this.loanId=this.route.parent.snapshot.params.loanId;}ngOnInit(){this.createDisbursementLoanForm(),this.setDisbursementLoanDetails();}createDisbursementLoanForm(){this.disbursementLoanForm=this.formBuilder.group({actualDisbursementDate:[new Date,mi$1.required],transactionAmount:["",mi$1.required],paymentTypeId:"",note:""});}setDisbursementLoanDetails(){this.paymentTypes=this.dataObject.paymentTypeOptions,this.disbursementLoanForm.patchValue({transactionAmount:this.dataObject.amount});}addPaymentDetails(){this.showPaymentDetails=!this.showPaymentDetails,this.showPaymentDetails?(this.disbursementLoanForm.addControl("accountNumber",new Qi$1("")),this.disbursementLoanForm.addControl("checkNumber",new Qi$1("")),this.disbursementLoanForm.addControl("routingCode",new Qi$1("")),this.disbursementLoanForm.addControl("receiptNumber",new Qi$1("")),this.disbursementLoanForm.addControl("bankNumber",new Qi$1(""))):(this.disbursementLoanForm.removeControl("accountNumber"),this.disbursementLoanForm.removeControl("checkNumber"),this.disbursementLoanForm.removeControl("routingCode"),this.disbursementLoanForm.removeControl("receiptNumber"),this.disbursementLoanForm.removeControl("bankNumber"));}submit(){let a=this.disbursementLoanForm.value.actualDisbursementDate,l=this.settingsService.dateFormat;this.disbursementLoanForm.patchValue({actualDisbursementDate:this.datePipe.transform(a,l)});let r=this.disbursementLoanForm.value;r.locale=this.settingsService.language.code,r.dateFormat=l,this.loanService.loanActionButtons(this.loanId,"disburse",r).subscribe(d=>{this.router.navigate(["../../general"],{relativeTo:this.route});});}static \u0275fac=function(l){return new(l||e)(T(AI),T(E),T(zs$1),T(Gr$1),T(_te),T(yF))};static \u0275cmp=N({type:e,selectors:[["mifosx-disburse"]],inputs:{dataObject:"dataObject"},standalone:false,decls:82,vars:14,consts:[["actualDisbursementDatePicker",""],[1,"container"],[3,"ngSubmit","formGroup"],["fxLayout","column"],["matInput","","required","","formControlName","actualDisbursementDate",3,"min","max","matDatepicker"],["matSuffix","",3,"for"],[4,"ngIf"],["matInput","","required","","formControlName","transactionAmount"],["formControlName","paymentTypeId"],[3,"value",4,"ngFor","ngForOf"],["fxFlexFill",""],["fxFlex","25%"],["fxFlex","75%",1,"expandCollapsebutton",3,"click"],["mat-raised-button","","color","primary",4,"ngIf"],["matInput","","formControlName","note"],["fxLayout","row","fxLayout.xs","column","fxLayoutAlign","center","fxLayoutGap","5px"],["type","button","mat-raised-button","",3,"routerLink"],["mat-raised-button","","color","primary",3,"disabled",4,"mifosxHasPermission"],[3,"value"],["mat-raised-button","","color","primary"],[1,"fa","fa-minus"],[1,"fa","fa-plus"],["matInput","","formControlName","accountNumber"],["matInput","","formControlName","checkNumber"],["matInput","","formControlName","routingCode"],["matInput","","formControlName","receiptNumber"],["matInput","","formControlName","bankNumber"],["mat-raised-button","","color","primary",3,"disabled"]],template:function(l,r){if(l&1&&(x(0,"div",1),b(1,`

  `),x(2,"mat-card"),b(3,`

    `),x(4,"form",2),re("ngSubmit",function(){return r.submit()}),b(5,`

      `),x(6,"mat-card-content"),b(7,`

        `),x(8,"div",3),b(9,`

          `),x(10,"mat-form-field"),b(11,`
            `),x(12,"mat-label"),b(13,"Disbursed On"),w(),b(14,`
            `),fe(15,"input",4),ki$1(),b(16,`
            `),fe(17,"mat-datepicker-toggle",5),b(18,`
            `),fe(19,"mat-datepicker",null,0),b(21,`
            `),Ie(22,Dp,5,0,"mat-error",6),b(23,`
          `),w(),b(24,`

          `),x(25,"mat-form-field"),b(26,`
            `),x(27,"mat-label"),b(28,"Transaction Amount"),w(),b(29,`
            `),fe(30,"input",7),ki$1(),b(31,`
            `),Ie(32,bp,5,0,"mat-error",6),b(33,`
          `),w(),b(34,`

          `),x(35,"mat-form-field"),b(36,`
            `),x(37,"mat-label"),b(38,"Payment Type"),w(),b(39,`
            `),x(40,"mat-select",8),b(41,`
              `),Ie(42,Tp,2,2,"mat-option",9),b(43,`
            `),w(),ki$1(),b(44,`
          `),w(),b(45,`

          `),x(46,"div",10),b(47,`
            `),x(48,"span",11),b(49,"Show Payment Details"),w(),b(50,`
            `),x(51,"span",12),re("click",function(){return r.addPaymentDetails()}),b(52,`
              `),Ie(53,Ep,4,0,"button",13),b(54,`
              `),Ie(55,Ap,4,0,"button",13),b(56,`
            `),w(),b(57,`
          `),w(),b(58,`

          `),Ie(59,Ip,42,0,"ng-container",6),b(60,`

          `),x(61,"mat-form-field"),b(62,`
            `),x(63,"mat-label"),b(64,"Note"),w(),b(65,`
            `),fe(66,"textarea",14),ki$1(),b(67,`
          `),w(),b(68,`

        `),w(),b(69,`

        `),x(70,"mat-card-actions",15),b(71,`
          `),x(72,"button",16),b(73,"Cancel"),w(),b(74,`
          `),Ie(75,Lp,2,1,"button",17),b(76,`
        `),w(),b(77,`

      `),w(),b(78,`

    `),w(),b(79,`

  `),w(),b(80,`

`),w(),b(81,`
`)),l&2){let d=Nt(20);D(4),z("formGroup",r.disbursementLoanForm),D(11),z("min",r.minDate)("max",r.maxDate)("matDatepicker",d),Li$1(),D(2),z("for",d),D(5),z("ngIf",r.disbursementLoanForm.controls.actualDisbursementDate.hasError("required")),D(8),Li$1(),D(2),z("ngIf",r.disbursementLoanForm.controls.transactionAmount.hasError("required")),D(8),Li$1(),D(2),z("ngForOf",r.paymentTypes),D(11),z("ngIf",r.showPaymentDetails),D(2),z("ngIf",!r.showPaymentDetails),D(4),z("ngIf",r.showPaymentDetails),D(7),Li$1(),D(6),z("routerLink",$o$1(13,yp)),D(3),z("mifosxHasPermission","DISBURSE_LOAN");}},dependencies:[ii,Yo$1,go$1,Mc,eA,R2,wc$1,Ti$1,Sn$1,Sje,Aje,Lje,zT,dh,Mv,Ri$1,Br$1,O3,sv,Ac$1,ja$1,DI,Cc$1,Na$1,k2,S6,uo$1,_3,bp$1,XQe],styles:[".expandCollapsebutton[_ngcontent-%COMP%]{margin-top:-7px}.container[_ngcontent-%COMP%]{max-width:37rem}"],changeDetection:1})}return e})();var wp=()=>["../../../general"];function Pp(e,m){e&1&&(x(0,"mat-error"),b(1,`
              Withdrawn On Date `),x(2,"strong"),b(3,"is required"),w(),b(4,`
            `),w());}function Rp(e,m){if(e&1&&(x(0,"button",11),b(1,"Submit"),w()),e&2){let a=K();z("disabled",!a.withdrawnByClientLoanForm.valid);}}var Ni=(()=>{class e{formBuilder;loanService;route;router;datePipe;settingsService;dataObject;loanId;minDate=new Date(2e3,0,1);maxDate=new Date;withdrawnByClientLoanForm;constructor(a,l,r,d,h,I){this.formBuilder=a,this.loanService=l,this.route=r,this.router=d,this.datePipe=h,this.settingsService=I,this.loanId=this.route.parent.snapshot.params.loanId;}ngOnInit(){this.createWithdrawnByClientLoanForm();}createWithdrawnByClientLoanForm(){this.withdrawnByClientLoanForm=this.formBuilder.group({withdrawnOnDate:[new Date,mi$1.required],note:""});}submit(){let a=this.withdrawnByClientLoanForm.value.withdrawnOnDate,l=this.settingsService.dateFormat;this.withdrawnByClientLoanForm.patchValue({withdrawnOnDate:this.datePipe.transform(a,l)});let r=this.withdrawnByClientLoanForm.value;r.locale=this.settingsService.language.code,r.dateFormat=l,this.loanService.loanActionButtons(this.loanId,"withdrawnByApplicant",r).subscribe(d=>{this.router.navigate(["../../../general"],{relativeTo:this.route});});}static \u0275fac=function(l){return new(l||e)(T(AI),T(E),T(zs$1),T(Gr$1),T(_te),T(yF))};static \u0275cmp=N({type:e,selectors:[["mifosx-withdrawn-by-client"]],inputs:{dataObject:"dataObject"},standalone:false,decls:46,vars:9,consts:[["withdrawnOnDatePicker",""],[1,"container"],[3,"ngSubmit","formGroup"],["fxLayout","column"],["matInput","","required","","formControlName","withdrawnOnDate",3,"min","max","matDatepicker"],["matSuffix","",3,"for"],[4,"ngIf"],["matInput","","formControlName","note"],["fxLayout","row","fxLayout.xs","column","fxLayoutAlign","center","fxLayoutGap","5px"],["type","button","mat-raised-button","",3,"routerLink"],["mat-raised-button","","color","primary",3,"disabled",4,"mifosxHasPermission"],["mat-raised-button","","color","primary",3,"disabled"]],template:function(l,r){if(l&1&&(x(0,"div",1),b(1,`

  `),x(2,"mat-card"),b(3,`

    `),x(4,"form",2),re("ngSubmit",function(){return r.submit()}),b(5,`

      `),x(6,"mat-card-content"),b(7,`

        `),x(8,"div",3),b(9,`

          `),x(10,"mat-form-field"),b(11,`
            `),x(12,"mat-label"),b(13,"Withdrawn On"),w(),b(14,`
            `),fe(15,"input",4),ki$1(),b(16,`
            `),fe(17,"mat-datepicker-toggle",5),b(18,`
            `),fe(19,"mat-datepicker",null,0),b(21,`
            `),Ie(22,Pp,5,0,"mat-error",6),b(23,`
          `),w(),b(24,`

          `),x(25,"mat-form-field"),b(26,`
            `),x(27,"mat-label"),b(28,"Note"),w(),b(29,`
            `),fe(30,"textarea",7),ki$1(),b(31,`
          `),w(),b(32,`

        `),w(),b(33,`

        `),x(34,"mat-card-actions",8),b(35,`
          `),x(36,"button",9),b(37,"Cancel"),w(),b(38,`
          `),Ie(39,Rp,2,1,"button",10),b(40,`
        `),w(),b(41,`

      `),w(),b(42,`

    `),w(),b(43,`

  `),w(),b(44,`

`),w(),b(45,`
`)),l&2){let d=Nt(20);D(4),z("formGroup",r.withdrawnByClientLoanForm),D(11),z("min",r.minDate)("max",r.maxDate)("matDatepicker",d),Li$1(),D(2),z("for",d),D(5),z("ngIf",r.withdrawnByClientLoanForm.controls.withdrawnOnDate.hasError("required")),D(8),Li$1(),D(6),z("routerLink",$o$1(8,wp)),D(3),z("mifosxHasPermission","WITHDRAW_LOAN");}},dependencies:[Yo$1,go$1,Mc,eA,Sn$1,Sje,Aje,Lje,zT,dh,Mv,Ri$1,Br$1,O3,sv,Ac$1,DI,Cc$1,Na$1,k2,S6,uo$1,_3,bp$1,XQe],styles:[".container[_ngcontent-%COMP%]{max-width:37rem}"],changeDetection:1})}return e})();var Mp=()=>["../../general"];function Np(e,m){if(e&1&&(x(0,"mat-option",11),b(1),w()),e&2){let a=m.$implicit;z("value",a.id),D(),it(`
                `,a.name);}}function kp(e,m){e&1&&(x(0,"mat-error"),b(1,`
              Collateral type `),x(2,"strong"),b(3,"required"),w(),b(4,`
            `),w());}function Gp(e,m){e&1&&(x(0,"mat-error"),b(1,`
              Value is `),x(2,"strong"),b(3,"required"),w(),b(4,`
            `),w());}function Bp(e,m){if(e&1&&(x(0,"button",12),b(1,"Submit"),w()),e&2){let a=K();z("disabled",!a.collateralForm.valid);}}var ki=(()=>{class e{formBuilder;router;route;loanService;dataObject;collateralForm;loanId;constructor(a,l,r,d){this.formBuilder=a,this.router=l,this.route=r,this.loanService=d;}ngOnInit(){this.createAddCollateralForm();}createAddCollateralForm(){this.collateralForm=this.formBuilder.group({collateralTypeId:["",mi$1.required],value:["",mi$1.required],description:[""]});}submit(){let a=this.collateralForm.value.collateralTypeId;this.collateralForm.patchValue({collateralTypeId:a});let l=this.route.parent.snapshot.params.loanId,r=this.collateralForm.value;r.locale="en",this.loanService.createLoanCollateral(l,r).subscribe(d=>{this.router.navigate(["../../general"],{relativeTo:this.route});});}static \u0275fac=function(l){return new(l||e)(T(AI),T(Gr$1),T(zs$1),T(E))};static \u0275cmp=N({type:e,selectors:[["mifosx-add-collateral"]],inputs:{dataObject:"dataObject"},standalone:false,decls:54,vars:7,consts:[[1,"container"],[3,"ngSubmit","formGroup"],["fxLayout","column"],["required","","formControlName","collateralTypeId"],[3,"value",4,"ngFor","ngForOf"],[4,"ngIf"],["matInput","","required","","formControlName","value"],["matInput","","formControlName","description"],["fxLayout","row","fxLayout.xs","column","fxLayoutAlign","center","fxLayoutGap","5px"],["type","button","mat-raised-button","",3,"routerLink"],["mat-raised-button","","color","primary",3,"disabled",4,"mifosxHasPermission"],[3,"value"],["mat-raised-button","","color","primary",3,"disabled"]],template:function(l,r){l&1&&(x(0,"div",0),b(1,`

  `),x(2,"mat-card"),b(3,`

    `),x(4,"form",1),re("ngSubmit",function(){return r.submit()}),b(5,`

      `),x(6,"mat-card-content"),b(7,`

        `),x(8,"div",2),b(9,`

          `),x(10,"mat-form-field"),b(11,`
            `),x(12,"mat-label"),b(13,"Collateral Type"),w(),b(14,`
            `),x(15,"mat-select",3),b(16,`
              `),Ie(17,Np,2,2,"mat-option",4),b(18,`
            `),w(),ki$1(),b(19,`
            `),Ie(20,kp,5,0,"mat-error",5),b(21,`
          `),w(),b(22,`

          `),x(23,"mat-form-field"),b(24,`
            `),x(25,"mat-label"),b(26,"Value"),w(),b(27,`
            `),fe(28,"input",6),ki$1(),b(29,`
            `),Ie(30,Gp,5,0,"mat-error",5),b(31,`
          `),w(),b(32,`

          `),x(33,"mat-form-field"),b(34,`
            `),x(35,"mat-label"),b(36,"Description"),w(),b(37,`
            `),fe(38,"textarea",7),ki$1(),b(39,`
          `),w(),b(40,`


        `),w(),b(41,`

        `),x(42,"mat-card-actions",8),b(43,`
          `),x(44,"button",9),b(45,"Cancel"),w(),b(46,`
          `),Ie(47,Bp,2,1,"button",10),b(48,`
        `),w(),b(49,`

      `),w(),b(50,`

    `),w(),b(51,`

  `),w(),b(52,`

`),w(),b(53,`
`)),l&2&&(D(4),z("formGroup",r.collateralForm),D(11),Li$1(),D(2),z("ngForOf",r.dataObject.allowedCollateralTypes),D(3),z("ngIf",r.collateralForm.controls.collateralTypeId.hasError("required")),D(8),Li$1(),D(2),z("ngIf",r.collateralForm.controls.value.hasError("required")),D(8),Li$1(),D(6),z("routerLink",$o$1(6,Mp)),D(3),z("mifosxHasPermission","CREATE_COLLATERAL"));},dependencies:[ii,Yo$1,go$1,Mc,eA,Ti$1,Sn$1,Sje,Aje,Lje,Ri$1,Br$1,O3,Ac$1,ja$1,DI,Cc$1,Na$1,k2,S6,uo$1,_3,bp$1,XQe],styles:[".container[_ngcontent-%COMP%]{max-width:37rem}"],changeDetection:1})}return e})();var Vp=()=>["../../general"];function qp(e,m){if(e&1){let a=Kt();x(0,"button",6),re("click",function(){ot(a);let r=K();return at(r.submit())}),b(1,"Submit"),w();}}var Gi=(()=>{class e{formBuilder;loansService;router;route;loanId;note;constructor(a,l,r,d){this.formBuilder=a,this.loansService=l,this.router=r,this.route=d,this.loanId=this.route.parent.snapshot.params.loanId;}ngOnInit(){this.note=this.formBuilder.control("");}submit(){this.loansService.loanActionButtons(this.loanId,"undodisbursal",{note:this.note.value}).subscribe(a=>{this.router.navigate(["../../general"],{relativeTo:this.route});});}static \u0275fac=function(l){return new(l||e)(T(AI),T(E),T(Gr$1),T(zs$1))};static \u0275cmp=N({type:e,selectors:[["mifosx-undo-disbursal"]],standalone:false,decls:25,vars:4,consts:[[1,"container"],["fxFlex",""],["matInput","",3,"formControl"],["fxLayout","row","fxLayout.xs","column","fxLayoutAlign","center","fxLayoutGap","5px"],["type","button","mat-raised-button","",3,"routerLink"],["mat-raised-button","","color","primary",3,"click",4,"mifosxHasPermission"],["mat-raised-button","","color","primary",3,"click"]],template:function(l,r){l&1&&(x(0,"div",0),b(1,`

  `),x(2,"mat-card"),b(3,`

    `),x(4,"mat-card-content"),b(5,`

      `),x(6,"mat-form-field",1),b(7,`
        `),x(8,"mat-label"),b(9,"Note"),w(),b(10,`
        `),fe(11,"textarea",2),ki$1(),b(12,`
      `),w(),b(13,`

    `),w(),b(14,`

    `),x(15,"mat-card-actions",3),b(16,`
      `),x(17,"button",4),b(18,"Cancel"),w(),b(19,`
      `),Ie(20,qp,2,0,"button",5),b(21,`
    `),w(),b(22,`

  `),w(),b(23,`

`),w(),b(24,`
`)),l&2&&(D(11),z("formControl",r.note),Li$1(),D(6),z("routerLink",$o$1(3,Vp)),D(3),z("mifosxHasPermission","DISBURSALUNDO_LOAN"));},dependencies:[go$1,Mc,eA,wc$1,Sn$1,Sje,Aje,Lje,Ri$1,Br$1,Ac$1,Cc$1,Na$1,Pl$1,bp$1,XQe],styles:[".container[_ngcontent-%COMP%]{max-width:37rem}"],changeDetection:1})}return e})();var $p=["screenReport"],Wp=()=>["../../general"];function Up(e,m){if(e&1&&(x(0,"mat-option",18),b(1),w()),e&2){let a=m.$implicit;z("value",a.id),D(),it(`
                                `,a.name,`
                            `);}}function zp(e,m){e&1&&(x(0,"mat-error"),b(1,`
                            Screen Report is `),x(2,"strong"),b(3,"required"),w(),b(4,`
                        `),w());}var ji=(()=>{class e{formBuilder;loansService;route;sanitizer;renderer;dataObject;loanScreenReportForm;templatesData;loanId;template;screenReportRef;constructor(a,l,r,d,h){this.formBuilder=a,this.loansService=l,this.route=r,this.sanitizer=d,this.renderer=h,this.loanId=this.route.parent.snapshot.params.loanId;}ngOnInit(){this.templatesData=this.dataObject,this.createLoanScreenReportForm();}createLoanScreenReportForm(){this.loanScreenReportForm=this.formBuilder.group({templateId:[""]});}print(){let a=window.open("","Screen Report","height=400,width=600");a.document.write("<html><head>"),a.document.write("</head><body>"),a.document.write(this.template),a.document.write("</body></html>"),a.print(),a.close();}generate(){let a=this.loanScreenReportForm.get("templateId").value;this.loansService.getTemplateData(a,this.loanId).subscribe(l=>{this.template=this.sanitizer.sanitize(In.HTML,l),this.renderer.setProperty(this.screenReportRef.nativeElement,"innerHTML",this.template);});}static \u0275fac=function(l){return new(l||e)(T(AI),T(E),T(zs$1),T(ws$1),T(Be))};static \u0275cmp=N({type:e,selectors:[["mifosx-loan-screen-reports"]],viewQuery:function(l,r){if(l&1&&ze($p,7),l&2){let d;j(d=H())&&(r.screenReportRef=d.first);}},inputs:{dataObject:"dataObject"},standalone:false,decls:61,vars:7,consts:[["output",""],["screenReport",""],[1,"container","m-b-20"],[3,"ngSubmit","formGroup"],["fxFlex",""],["formControlName","templateId"],[3,"value",4,"ngFor","ngForOf"],[4,"ngIf"],["fxLayout","row","fxLayout.xs","column","fxLayoutAlign","center","fxLayoutGap","5px"],["type","button","mat-raised-button","",3,"routerLink"],["mat-raised-button","","color","primary",3,"disabled"],["icon","cogs","size","sm"],[1,"container"],["fxLayout","column","fxLayoutGap","3%"],["fxLayoutAlign","end"],["mat-stroked-button","","color","primary",3,"click","disabled"],["icon","file"],[1,"screen-report"],[3,"value"]],template:function(l,r){l&1&&(x(0,"div",2),b(1,`

    `),x(2,"mat-card"),b(3,`

        `),x(4,"form",3),re("ngSubmit",function(){return r.generate()}),b(5,`

            `),x(6,"mat-card-content"),b(7,`

                `),x(8,"div"),b(9,`

                    `),x(10,"mat-form-field",4),b(11,`
                        `),x(12,"mat-label"),b(13,"Loan Screen Reports"),w(),b(14,`
                        `),x(15,"mat-select",5),b(16,`
                            `),Ie(17,Up,2,2,"mat-option",6),b(18,`
                        `),w(),ki$1(),b(19,`
                        `),Ie(20,zp,5,0,"mat-error",7),b(21,`
                    `),w(),b(22,`

                `),w(),b(23,`

            `),w(),b(24,`

            `),x(25,"mat-card-actions",8),b(26,`
                `),x(27,"button",9),b(28,"Cancel"),w(),b(29,`
                `),x(30,"button",10),b(31,`
                    `),fe(32,"fa-icon",11),b(33,`\xA0\xA0Generate Report
                `),w(),b(34,`
            `),w(),b(35,`

        `),w(),b(36,`

    `),w(),b(37,`

`),w(),b(38,`

`),x(39,"div",12,0),b(41,`

    `),x(42,"mat-card",13),b(43,`

        `),x(44,"div",14),b(45,`
            `),x(46,"button",15),re("click",function(){return r.print()}),b(47,`
                `),fe(48,"fa-icon",16),b(49,`\xA0\xA0
                Print
            `),w(),b(50,`
        `),w(),b(51,`

        `),x(52,"div",17,1),b(54,`
            `),x(55,"p"),b(56,"Please select a screen report."),w(),b(57,`
        `),w(),b(58,`

    `),w(),b(59,`

`),w(),b(60,`
`)),l&2&&(D(4),z("formGroup",r.loanScreenReportForm),D(11),Li$1(),D(2),z("ngForOf",r.templatesData),D(3),z("ngIf",r.loanScreenReportForm.controls.templateId.hasError("required")),D(7),z("routerLink",$o$1(6,Wp)),D(3),z("disabled",!r.loanScreenReportForm.valid),D(16),z("disabled",!r.template));},dependencies:[ii,Yo$1,Oc$1,go$1,Mc,eA,wc$1,Ti$1,Sn$1,Sje,Aje,Lje,Ri$1,Br$1,O3,ja$1,DI,Na$1,k2,uo$1,_3,bp$1],styles:[".container[_ngcontent-%COMP%]{max-width:37rem}.container[_ngcontent-%COMP%]   .print[_ngcontent-%COMP%]{align-self:flex-end}.container[_ngcontent-%COMP%]   .screen-report[_ngcontent-%COMP%]{text-align:center}"],changeDetection:1})}return e})();var Yp=()=>["../../general"];function Jp(e,m){e&1&&(x(0,"mat-error"),b(1,`
              Approved Date `),x(2,"strong"),b(3,"is required"),w(),b(4,`
            `),w());}function Kp(e,m){e&1&&(x(0,"mat-error"),b(1,`
              Transaction Amount is `),x(2,"strong"),b(3,"required"),w(),b(4,`
            `),w());}function Xp(e,m){if(e&1&&(x(0,"button",15),b(1,"Submit"),w()),e&2){let a=K();z("disabled",!a.approveLoanForm.valid);}}var Vi=(()=>{class e{formBuilder;route;datePipe;loanService;router;settingsService;approveLoanForm;loanData=new Object;associationData;minDate=new Date(2e3,0,1);loanId;constructor(a,l,r,d,h,I){this.formBuilder=a,this.route=l,this.datePipe=r,this.loanService=d,this.router=h,this.settingsService=I,this.route.data.subscribe(R=>{this.loanData=R.actionButtonData;}),this.loanId=this.route.parent.snapshot.params.loanId;}ngOnInit(){this.setApproveLoanForm(),this.loanService.getApproveAssociationsDetails(this.loanId).subscribe(a=>{this.associationData=a,this.approveLoanForm.patchValue({expectedDisbursementDate:new Date(a.timeline.expectedDisbursementDate)});});}setApproveLoanForm(){this.approveLoanForm=this.formBuilder.group({approvedOnDate:[this.loanData.approvalDate&&new Date(this.loanData.approvalDate),mi$1.required],expectedDisbursementDate:[""],approvedLoanAmount:[this.loanData.approvalAmount,mi$1.required],note:[""]});}submit(){let a=this.settingsService.language.code,l=this.settingsService.dateFormat,r=this.approveLoanForm.value.approvedOnDate,d=this.approveLoanForm.value.expectedDisbursementDate;this.approveLoanForm.patchValue({approvedOnDate:this.datePipe.transform(r,l),expectedDisbursementDate:this.datePipe.transform(d,l)});let h=Re(O({},this.approveLoanForm.value),{dateFormat:l,local:a});this.loanService.loanActionButtons(this.loanId,"approve",h).subscribe(I=>{this.router.navigate(["../../general"],{relativeTo:this.route});});}static \u0275fac=function(l){return new(l||e)(T(AI),T(zs$1),T(_te),T(E),T(Gr$1),T(yF))};static \u0275cmp=N({type:e,selectors:[["mifosx-approve-loan"]],standalone:false,decls:77,vars:12,consts:[["approvedDatePicker",""],["disbursementDatePicker",""],[1,"container"],[3,"ngSubmit","formGroup"],["fxLayout","column"],["matInput","","required","","formControlName","approvedOnDate",3,"min","matDatepicker"],["matSuffix","",3,"for"],[4,"ngIf"],["matInput","","formControlName","expectedDisbursementDate",3,"min","matDatepicker"],["matInput","","type","number","formControlName","approvedLoanAmount"],["matInput","","type","number","required","","formControlName","approvedLoanAmount","required",""],["matInput","","formControlName","note"],["fxLayout","row","fxLayout.xs","column","fxLayoutAlign","center","fxLayoutGap","5px"],["type","button","mat-raised-button","",3,"routerLink"],["mat-raised-button","","color","primary",3,"disabled",4,"mifosxHasPermission"],["mat-raised-button","","color","primary",3,"disabled"]],template:function(l,r){if(l&1&&(x(0,"div",2),b(1,`

  `),x(2,"mat-card"),b(3,`

    `),x(4,"form",3),re("ngSubmit",function(){return r.submit()}),b(5,`

      `),x(6,"mat-card-content"),b(7,`

        `),x(8,"div",4),b(9,`

          `),x(10,"mat-form-field"),b(11,`
            `),x(12,"mat-label"),b(13,"Approved On"),w(),b(14,`
            `),fe(15,"input",5),ki$1(),b(16,`
            `),fe(17,"mat-datepicker-toggle",6),b(18,`
            `),fe(19,"mat-datepicker",null,0),b(21,`
            `),Ie(22,Jp,5,0,"mat-error",7),b(23,`
          `),w(),b(24,`

          `),x(25,"mat-form-field"),b(26,`
            `),x(27,"mat-label"),b(28,"Expected disbursement on"),w(),b(29,`
            `),fe(30,"input",8),ki$1(),b(31,`
            `),fe(32,"mat-datepicker-toggle",6),b(33,`
            `),fe(34,"mat-datepicker",null,1),b(36,`
          `),w(),b(37,`

          `),x(38,"mat-form-field"),b(39,`
            `),x(40,"mat-label"),b(41,"Approved Amount"),w(),b(42,`
            `),fe(43,"input",9),ki$1(),b(44,`
          `),w(),b(45,`

          `),x(46,"mat-form-field"),b(47,`
            `),x(48,"mat-label"),b(49,"Transaction Amount"),w(),b(50,`
            `),fe(51,"input",10),ki$1(),b(52,`
            `),Ie(53,Kp,5,0,"mat-error",7),b(54,`
          `),w(),b(55,`

          `),x(56,"mat-form-field"),b(57,`
            `),x(58,"mat-label"),b(59,"Note"),w(),b(60,`
            `),fe(61,"textarea",11),ki$1(),b(62,`
          `),w(),b(63,`

        `),w(),b(64,`

        `),x(65,"mat-card-actions",12),b(66,`
          `),x(67,"button",13),b(68,"Cancel"),w(),b(69,`
          `),Ie(70,Xp,2,1,"button",14),b(71,`
        `),w(),b(72,`

      `),w(),b(73,`

    `),w(),b(74,`

  `),w(),b(75,`

`),w(),b(76,`
`)),l&2){let d=Nt(20),h=Nt(35);D(4),z("formGroup",r.approveLoanForm),D(11),z("min",r.minDate)("matDatepicker",d),Li$1(),D(2),z("for",d),D(5),z("ngIf",r.approveLoanForm.controls.approvedOnDate.hasError("required")),D(8),z("min",r.minDate)("matDatepicker",h),Li$1(),D(2),z("for",h),D(11),Li$1(),D(8),Li$1(),D(2),z("ngIf",r.approveLoanForm.controls.approvedLoanAmount.hasError("required")),D(8),Li$1(),D(6),z("routerLink",$o$1(11,Yp)),D(3),z("mifosxHasPermission","APPROVE_LOAN");}},dependencies:[Yo$1,go$1,Mc,eA,Sn$1,Sje,Aje,Lje,zT,dh,Mv,Ri$1,Br$1,O3,sv,Ac$1,DI,Cc$1,Wne,Na$1,k2,S6,uo$1,_3,bp$1,XQe],styles:[".container[_ngcontent-%COMP%]{max-width:37rem}"],changeDetection:1})}return e})();function td(e,m){if(e&1&&fe(0,"mifosx-loans-account-close",2),e&2){let a=K();z("dataObject",a.actionButtonData);}}function ed(e,m){e&1&&fe(0,"mifosx-undo-approval");}function nd(e,m){if(e&1&&fe(0,"mifosx-assign-loan-officer",2),e&2){let a=K();z("dataObject",a.actionButtonData);}}function id(e,m){e&1&&fe(0,"mifosx-foreclosure");}function ad(e,m){if(e&1&&fe(0,"mifosx-prepay-loan",2),e&2){let a=K();z("dataObject",a.actionButtonData);}}function od(e,m){if(e&1&&fe(0,"mifosx-make-repayment",2),e&2){let a=K();z("dataObject",a.actionButtonData);}}function rd(e,m){if(e&1&&fe(0,"mifosx-waive-interest",2),e&2){let a=K();z("dataObject",a.actionButtonData);}}function md(e,m){if(e&1&&fe(0,"mifosx-write-off-page",2),e&2){let a=K();z("dataObject",a.actionButtonData);}}function ld(e,m){if(e&1&&fe(0,"mifosx-close-as-rescheduled",2),e&2){let a=K();z("dataObject",a.actionButtonData);}}function cd(e,m){if(e&1&&fe(0,"mifosx-loan-reschedule",2),e&2){let a=K();z("dataObject",a.actionButtonData);}}function sd(e,m){if(e&1&&fe(0,"mifosx-recovery-repayment",2),e&2){let a=K();z("dataObject",a.actionButtonData);}}function pd(e,m){if(e&1&&fe(0,"mifosx-view-guarantors",2),e&2){let a=K();z("dataObject",a.actionButtonData);}}function dd(e,m){if(e&1&&fe(0,"mifosx-create-guarantor",2),e&2){let a=K();z("dataObject",a.actionButtonData);}}function ud(e,m){if(e&1&&fe(0,"mifosx-disburse-loan-account",2),e&2){let a=K();z("dataObject",a.actionButtonData);}}function fd(e,m){e&1&&fe(0,"mifosx-reject-loan");}function xd(e,m){if(e&1&&fe(0,"mifosx-disburse",2),e&2){let a=K();z("dataObject",a.actionButtonData);}}function _d(e,m){e&1&&fe(0,"mifosx-withdrawn-by-client");}function Cd(e,m){if(e&1&&fe(0,"mifosx-add-collateral",2),e&2){let a=K();z("dataObject",a.actionButtonData);}}function vd(e,m){e&1&&fe(0,"mifosx-undo-disbursal");}function gd(e,m){if(e&1&&fe(0,"mifosx-loan-screen-reports",2),e&2){let a=K();z("dataObject",a.actionButtonData);}}function hd(e,m){e&1&&fe(0,"mifosx-approve-loan");}function Sd(e,m){e&1&&fe(0,"mifosx-add-loan-charge");}var qi=(()=>{class e{router;route;actions={Close:false,"Undo Approval":false,"Write Off":false,"Add Collateral":false,"Assign Loan Officer":false,Foreclosure:false,"Prepay Loan":false,Reject:false,"Disburse To Savings":false,"Make Repayment":false,"Waive Interest":false,"Close (as Rescheduled)":false,Reschedule:false,"Recovery Payment":false,"View Guarantors":false,"Create Guarantor":false,Disburse:false,"Withdrawn by Client":false,"Undo Disbursal":false,"Loan Screen Reports":false,Approve:false,"Add Loan Charge":false};actionButtonData;actionName;constructor(a,l){this.router=a,this.route=l,this.route.data.subscribe(r=>{this.actionButtonData=r.actionButtonData;}),this.route.params.subscribe(r=>{this.actionName=r.action,this.actionName==="Change Loan Officer"&&(this.actionName="Assign Loan Officer");for(let d of Object.keys(this.actions))this.actions[d]=false;this.actions[this.actionName]=true;});}static \u0275fac=function(l){return new(l||e)(T(Gr$1),T(zs$1))};static \u0275cmp=N({type:e,selectors:[["mifosx-loan-account-actions"]],standalone:false,decls:44,vars:22,consts:[[3,"dataObject",4,"ngIf"],[4,"ngIf"],[3,"dataObject"]],template:function(l,r){l&1&&(Ie(0,td,1,1,"mifosx-loans-account-close",0),b(1,`
`),Ie(2,ed,1,0,"mifosx-undo-approval",1),b(3,`
`),Ie(4,nd,1,1,"mifosx-assign-loan-officer",0),b(5,`
`),Ie(6,id,1,0,"mifosx-foreclosure",1),b(7,`
`),Ie(8,ad,1,1,"mifosx-prepay-loan",0),b(9,`
`),Ie(10,od,1,1,"mifosx-make-repayment",0),b(11,`
`),Ie(12,rd,1,1,"mifosx-waive-interest",0),b(13,`
`),Ie(14,md,1,1,"mifosx-write-off-page",0),b(15,`
`),Ie(16,ld,1,1,"mifosx-close-as-rescheduled",0),b(17,`
`),Ie(18,cd,1,1,"mifosx-loan-reschedule",0),b(19,`
`),Ie(20,sd,1,1,"mifosx-recovery-repayment",0),b(21,`
`),Ie(22,pd,1,1,"mifosx-view-guarantors",0),b(23,`
`),Ie(24,dd,1,1,"mifosx-create-guarantor",0),b(25,`
`),Ie(26,ud,1,1,"mifosx-disburse-loan-account",0),b(27,`
`),Ie(28,fd,1,0,"mifosx-reject-loan",1),b(29,`
`),Ie(30,xd,1,1,"mifosx-disburse",0),b(31,`
`),Ie(32,_d,1,0,"mifosx-withdrawn-by-client",1),b(33,`
`),Ie(34,Cd,1,1,"mifosx-add-collateral",0),b(35,`
`),Ie(36,vd,1,0,"mifosx-undo-disbursal",1),b(37,`
`),Ie(38,gd,1,1,"mifosx-loan-screen-reports",0),b(39,`
`),Ie(40,hd,1,0,"mifosx-approve-loan",1),b(41,`
`),Ie(42,Sd,1,0,"mifosx-add-loan-charge",1),b(43,`
`)),l&2&&(z("ngIf",r.actions.Close),D(2),z("ngIf",r.actions["Undo Approval"]),D(2),z("ngIf",r.actions["Assign Loan Officer"]),D(2),z("ngIf",r.actions.Foreclosure),D(2),z("ngIf",r.actions["Prepay Loan"]),D(2),z("ngIf",r.actions["Make Repayment"]),D(2),z("ngIf",r.actions["Waive Interest"]),D(2),z("ngIf",r.actions["Write Off"]),D(2),z("ngIf",r.actions["Close (as Rescheduled)"]),D(2),z("ngIf",r.actions.Reschedule),D(2),z("ngIf",r.actions["Recovery Payment"]),D(2),z("ngIf",r.actions["View Guarantors"]),D(2),z("ngIf",r.actions["Create Guarantor"]),D(2),z("ngIf",r.actions["Disburse To Savings"]),D(2),z("ngIf",r.actions.Reject),D(2),z("ngIf",r.actions.Disburse),D(2),z("ngIf",r.actions["Withdrawn by Client"]),D(2),z("ngIf",r.actions["Add Collateral"]),D(2),z("ngIf",r.actions["Undo Disbursal"]),D(2),z("ngIf",r.actions["Loan Screen Reports"]),D(2),z("ngIf",r.actions.Approve),D(2),z("ngIf",r.actions["Add Loan Charge"]));},dependencies:[Yo$1,vi,gi,hi,Si,yi,Di,bi,Ti,Ei,Ai,Ii,Li,wi,Pi,Ri,Oi,Mi,Ni,ki,Gi,ji,Vi],encapsulation:2,changeDetection:1})}return e})();function yd(e,m){e&1&&(x(0,"th",8),b(1," From Date "),w());}function Dd(e,m){if(e&1&&(x(0,"td",9),b(1),nee(2,"date"),w()),e&2){let a=m.$implicit;D(),it(" ",ree(2,1,a.fromDate)," ");}}function bd(e,m){e&1&&(x(0,"th",8),b(1," Interest Rate "),w());}function Td(e,m){if(e&1&&(x(0,"td",9),b(1),w()),e&2){let a=m.$implicit;D(),it(" ",a.effectiveInterestRate," ");}}function Ed(e,m){e&1&&fe(0,"tr",10);}function Ad(e,m){e&1&&fe(0,"tr",11);}var Hi=(()=>{class e{route;loanDetails;interestRateData;displayedColumns=["fromDate","interestRate"];constructor(a){this.route=a,this.route.parent.data.subscribe(l=>{this.loanDetails=l.loanDetailsData;});}ngOnInit(){this.interestRateData=this.loanDetails.interestRatesPeriods;}static \u0275fac=function(l){return new(l||e)(T(zs$1))};static \u0275cmp=N({type:e,selectors:[["mifosx-floating-interest-rates"]],standalone:false,decls:24,vars:3,consts:[[1,"container"],["mat-table","",3,"dataSource"],["matColumnDef","fromDate"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","interestRate"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["mat-header-cell",""],["mat-cell",""],["mat-header-row",""],["mat-row",""]],template:function(l,r){l&1&&(x(0,"div",0),b(1,`

  `),x(2,"table",1),b(3,`

    `),Rl$1(4,2),b(5,`
      `),Ie(6,yd,2,0,"th",3),b(7,`
      `),Ie(8,Dd,3,3,"td",4),b(9,`
    `),zl$1(),b(10,`

    `),Rl$1(11,5),b(12,`
      `),Ie(13,bd,2,0,"th",3),b(14,`
      `),Ie(15,Td,2,1,"td",4),b(16,`
    `),zl$1(),b(17,`

    `),Ie(18,Ed,1,0,"tr",6),b(19,`
    `),Ie(20,Ad,1,0,"tr",7),b(21,`
  `),w(),b(22,`

`),w(),b(23,`
`)),l&2&&(D(2),z("dataSource",r.interestRateData),D(16),z("matHeaderRowDef",r.displayedColumns),D(2),z("matRowDefColumns",r.displayedColumns));},dependencies:[uqe,mqe,bqe,pqe,fqe,xqe,gqe,vqe,Cqe,Mqe,_te],styles:["table[_ngcontent-%COMP%]{width:100%;margin:3% 0%}.container[_ngcontent-%COMP%]{padding-bottom:2%}"],changeDetection:1})}return e})();function Id(e,m){e&1&&(x(0,"button",10),b(1,`
        `),fe(2,"fa-icon",11),b(3,`\xA0\xA0Add
      `),w());}function Ld(e,m){if(e&1){let a=Kt();x(0,"button",12),re("click",function(){ot(a);let r=K();return at(r.delete())}),b(1,`
          `),fe(2,"fa-icon",13),b(3,`\xA0\xA0Delete
        `),w();}}function Fd(e,m){e&1&&(x(0,"th",23),b(1," Expected Disbursement On "),w());}function wd(e,m){if(e&1&&(x(0,"td",24),b(1),nee(2,"date"),w()),e&2){let a=m.$implicit;D(),it(" ",ree(2,1,a.expectedDisbursementDate)," ");}}function Pd(e,m){e&1&&(x(0,"th",23),b(1," Disbursed On "),w());}function Rd(e,m){if(e&1&&(x(0,"span"),b(1),nee(2,"date"),w()),e&2){let a=K().$implicit;D(),it(`
          `,ree(2,1,a.actualDisbursementDate),`
        `);}}function Od(e,m){if(e&1&&(x(0,"td",24),b(1,`
        `),Ie(2,Rd,3,3,"span",9),b(3,`
      `),w()),e&2){let a=m.$implicit;D(2),z("ngIf",a.actualDisbursementDate);}}function Md(e,m){e&1&&(x(0,"th",23),b(1," Principal "),w());}function Nd(e,m){if(e&1&&(x(0,"td",24),b(1),w()),e&2){let a=m.$implicit;D(),it(" ",a.principal," ");}}function kd(e,m){e&1&&(x(0,"th",23),b(1," Actions "),w());}function Gd(e,m){e&1&&(x(0,"span"),b(1,`
          `),fe(2,"i",25),b(3,`
        `),w());}function Bd(e,m){e&1&&(x(0,"button",10),b(1,`
          `),fe(2,"i",26),b(3,`
        `),w());}function jd(e,m){if(e&1&&(x(0,"td",24),b(1,`
        `),Ie(2,Gd,4,0,"span",9),b(3,`
        `),Ie(4,Bd,4,0,"button",5),b(5,`
      `),w()),e&2){let a=m.$implicit,l=K(2);D(2),z("ngIf",a.actualDisbursementDate),D(2),z("ngIf",l.showEdit(a));}}function Vd(e,m){e&1&&fe(0,"tr",27);}function qd(e,m){e&1&&fe(0,"tr",28);}function Hd(e,m){if(e&1&&(x(0,"table",14),b(1,`

    `),Rl$1(2,15),b(3,`
      `),Ie(4,Fd,2,0,"th",16),b(5,`
      `),Ie(6,wd,3,3,"td",17),b(7,`
    `),zl$1(),b(8,`

    `),Rl$1(9,18),b(10,`
      `),Ie(11,Pd,2,0,"th",16),b(12,`
      `),Ie(13,Od,4,1,"td",17),b(14,`
    `),zl$1(),b(15,`

    `),Rl$1(16,19),b(17,`
      `),Ie(18,Md,2,0,"th",16),b(19,`
      `),Ie(20,Nd,2,1,"td",17),b(21,`
    `),zl$1(),b(22,`

    `),Rl$1(23,20),b(24,`
      `),Ie(25,kd,2,0,"th",16),b(26,`
      `),Ie(27,jd,6,2,"td",17),b(28,`
    `),zl$1(),b(29,`

    `),Ie(30,Vd,1,0,"tr",21),b(31,`
    `),Ie(32,qd,1,0,"tr",22),b(33,`
  `),w()),e&2){let a=K();z("dataSource",a.loanDetails.disbursementDetails),D(30),z("matHeaderRowDef",a.expectedDisbursementColumns),D(2),z("matRowDefColumns",a.expectedDisbursementColumns);}}function $d(e,m){e&1&&(x(0,"th",23),b(1," Applicable From Date "),w());}function Wd(e,m){if(e&1&&(x(0,"td",24),b(1),nee(2,"date"),w()),e&2){let a=m.$implicit;D(),it(" ",ree(2,1,a.termVariationApplicableFrom)," ");}}function Ud(e,m){e&1&&(x(0,"th",23),b(1," Installment Amount "),w());}function zd(e,m){if(e&1&&(x(0,"td",24),b(1),w()),e&2){let a=m.$implicit;D(),it(" ",a.termValue," ");}}function Qd(e,m){e&1&&fe(0,"tr",27);}function Yd(e,m){e&1&&fe(0,"tr",28);}function Jd(e,m){if(e&1&&(x(0,"div"),b(1,`

    `),x(2,"h3"),b(3,"Installment Amount Variations: "),w(),b(4,`

    `),x(5,"table",14),b(6,`

      `),Rl$1(7,29),b(8,`
        `),Ie(9,$d,2,0,"th",16),b(10,`
        `),Ie(11,Wd,3,3,"td",17),b(12,`
      `),zl$1(),b(13,`

      `),Rl$1(14,30),b(15,`
        `),Ie(16,Ud,2,0,"th",16),b(17,`
        `),Ie(18,zd,2,1,"td",17),b(19,`
      `),zl$1(),b(20,`

      `),Ie(21,Qd,1,0,"tr",21),b(22,`
      `),Ie(23,Yd,1,0,"tr",22),b(24,`
    `),w(),b(25,`
  `),w()),e&2){let a=K();D(5),z("dataSource",a.loanDetails.emiAmountVariations),D(16),z("matHeaderRowDef",a.emivariationColumns),D(2),z("matRowDefColumns",a.emivariationColumns);}}var $i=(()=>{class e{route;loanDetails;return;status;totalDisbursedAmount;count;expectedDisbursementColumns=["expected disbursement on","disbursed on","principal","action"];emivariationColumns=["emi amount variation from","fixed emi amount"];constructor(a){this.route=a,this.route.parent.data.subscribe(l=>{this.loanDetails=l.loanDetailsData;});}ngOnInit(){this.status=this.loanDetails.status.value;}showAddDeleteTrancheButtons(a){return this.return=true,(this.status==="Closed (obligations met)"||this.status==="Overpaid"||this.status==="Closed (rescheduled)"||this.status==="Closed (written off)"||this.status==="Submitted and pending approval")&&(this.return=false),this.totalDisbursedAmount=0,this.count=0,this.loanDetails.disbursementDetails.forEach(l=>{l.actualDisbursementDate?this.totalDisbursedAmount+=l.principal:this.count+=1;}),!(this.totalDisbursedAmount===this.loanDetails.approvedPrincipal||this.return===false||this.count===0&&a==="deletedisbursedetails")}showEdit(a){return (!a.actualDisbursementDate||a.actualDisbursementDate===null)&&this.status==="Approved"}static \u0275fac=function(l){return new(l||e)(T(zs$1))};static \u0275cmp=N({type:e,selectors:[["mifosx-loan-tranche-details"]],standalone:false,decls:30,vars:7,consts:[[1,"container"],["fxFlexFill",""],["fxFlex","40%"],["fxFlex","60%"],["fxLayout","row","fxLayoutAlign","flex-end"],["mat-raised-button","","color","primary",4,"ngIf"],[1,"delete-button"],["mat-raised-button","","color","warn",3,"click",4,"ngIf"],["mat-table","",3,"dataSource",4,"ngIf"],[4,"ngIf"],["mat-raised-button","","color","primary"],["icon","plus"],["mat-raised-button","","color","warn",3,"click"],["icon","trash"],["mat-table","",3,"dataSource"],["matColumnDef","expected disbursement on"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","disbursed on"],["matColumnDef","principal"],["matColumnDef","action"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["mat-header-cell",""],["mat-cell",""],[1,"fa","fa-check"],[1,"fa","fa-pencil"],["mat-header-row",""],["mat-row",""],["matColumnDef","emi amount variation from"],["matColumnDef","fixed emi amount"]],template:function(l,r){l&1&&(x(0,"div",0),b(1,`

  `),x(2,"div",1),b(3,`
    `),x(4,"span",2),b(5,"Maximum allowed outstanding balance:"),w(),b(6,`
    `),x(7,"span",3),b(8),nee(9,"number"),w(),b(10,`
  `),w(),b(11,`

  `),x(12,"h3"),b(13," Loan Tranche Details"),w(),b(14,`

  `),x(15,"div",4),b(16,`
      `),Ie(17,Id,4,0,"button",5),b(18,`
      `),x(19,"span",6),b(20,`
        `),Ie(21,Ld,4,0,"button",7),b(22,`
      `),w(),b(23,`
  `),w(),b(24,`

  `),Ie(25,Hd,34,3,"table",8),b(26,`

  `),Ie(27,Jd,26,3,"div",9),b(28,`


`),w(),b(29,`
`)),l&2&&(D(8),Dt(ree(9,5,r.loanDetails.maxOutstandingLoanBalance)),D(9),z("ngIf",r.showAddDeleteTrancheButtons("adddisbursedetails")),D(4),z("ngIf",r.showAddDeleteTrancheButtons("deletedisbursedetails")),D(4),z("ngIf",r.loanDetails.disbursementDetails.length>0),D(2),z("ngIf",r.loanDetails.emiAmountVariations.length>0));},dependencies:[Yo$1,Oc$1,go$1,eA,R2,wc$1,Sn$1,uqe,mqe,bqe,pqe,fqe,xqe,gqe,vqe,Cqe,Mqe,yte,_te],styles:["table[_ngcontent-%COMP%]{width:100%}.container[_ngcontent-%COMP%]{padding-top:1%;padding-bottom:2%}.container[_ngcontent-%COMP%]   .delete-button[_ngcontent-%COMP%]{margin-left:1%}"],changeDetection:1})}return e})();function Kd(e,m){e&1&&(x(0,"th",9),b(1," Type "),w());}function Xd(e,m){if(e&1&&(x(0,"td",10),b(1),w()),e&2){let a=m.$implicit;D(),it(" ",a.type.name," ");}}function Zd(e,m){e&1&&(x(0,"th",9),b(1," Value "),w());}function tu(e,m){if(e&1&&(x(0,"td",10),b(1),w()),e&2){let a=m.$implicit;D(),it(" ",a.value," ");}}function eu(e,m){e&1&&(x(0,"th",9),b(1," Description "),w());}function nu(e,m){if(e&1&&(x(0,"td",10),b(1),w()),e&2){let a=m.$implicit;D(),it(" ",a.description," ");}}function iu(e,m){e&1&&fe(0,"tr",11);}function au(e,m){e&1&&fe(0,"tr",12);}var Wi=(()=>{class e{route;loanDetails;displayedColumns=["type","value","description"];constructor(a){this.route=a,this.route.parent.data.subscribe(l=>{this.loanDetails=l.loanDetailsData;});}ngOnInit(){}static \u0275fac=function(l){return new(l||e)(T(zs$1))};static \u0275cmp=N({type:e,selectors:[["mifosx-loan-collateral-tab"]],standalone:false,decls:31,vars:3,consts:[[1,"container"],["mat-table","",3,"dataSource"],["matColumnDef","type"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","value"],["matColumnDef","description"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["mat-header-cell",""],["mat-cell",""],["mat-header-row",""],["mat-row",""]],template:function(l,r){l&1&&(x(0,"div",0),b(1,`

  `),x(2,"table",1),b(3,`

    `),Rl$1(4,2),b(5,`
      `),Ie(6,Kd,2,0,"th",3),b(7,`
      `),Ie(8,Xd,2,1,"td",4),b(9,`
    `),zl$1(),b(10,`

    `),Rl$1(11,5),b(12,`
      `),Ie(13,Zd,2,0,"th",3),b(14,`
      `),Ie(15,tu,2,1,"td",4),b(16,`
    `),zl$1(),b(17,`

    `),Rl$1(18,6),b(19,`
      `),Ie(20,eu,2,0,"th",3),b(21,`
      `),Ie(22,nu,2,1,"td",4),b(23,`
    `),zl$1(),b(24,`

    `),Ie(25,iu,1,0,"tr",7),b(26,`
    `),Ie(27,au,1,0,"tr",8),b(28,`
  `),w(),b(29,`

`),w(),b(30,`
`)),l&2&&(D(2),z("dataSource",r.loanDetails.collateral),D(23),z("matHeaderRowDef",r.displayedColumns),D(2),z("matRowDefColumns",r.displayedColumns));},dependencies:[uqe,mqe,bqe,pqe,fqe,xqe,gqe,vqe,Cqe,Mqe],styles:["table[_ngcontent-%COMP%]{width:100%;margin:3% 0%}.container[_ngcontent-%COMP%]{padding-bottom:2%}"],changeDetection:1})}return e})();function ou(e,m){if(e&1&&(x(0,"mat-option",24),b(1),w()),e&2){let a=m.$implicit;z("value",a.id),D(),it(`
          `,a.name,`
        `);}}function ru(e,m){if(e&1&&(x(0,"mat-option",24),b(1),w()),e&2){let a=m.$implicit;z("value",a.id),D(),it(`
          `,a.displayName,`
        `);}}function mu(e,m){if(e&1&&(x(0,"mat-option",24),b(1),w()),e&2){let a=m.$implicit;z("value",a.id),D(),it(`
          `,a.name,`
        `);}}function lu(e,m){if(e&1&&(x(0,"mat-option",24),b(1),w()),e&2){let a=m.$implicit;z("value",a.id),D(),it(`
          `,a.name,`
        `);}}function cu(e,m){e&1&&(x(0,"mat-error"),b(1,`
        Submitted on is `),x(2,"strong"),b(3,"required"),w(),b(4,`
      `),w());}function su(e,m){e&1&&(x(0,"mat-error"),b(1,`
        Disbursement on is `),x(2,"strong"),b(3,"required"),w(),b(4,`
      `),w());}function pu(e,m){if(e&1&&(x(0,"mat-option",24),b(1),w()),e&2){let a=m.$implicit;z("value",a.id),D(),it(`
          `,a.productName,`
        `);}}var De=(()=>{class e{formBuilder;loansService;datePipe;loansAccountTemplate;minDate=new Date(2e3,0,1);maxDate=new Date;productData;loanOfficerOptions;loanPurposeOptions;fundOptions;accountLinkingOptions;isFieldOfficerPatched=false;loansAccountDetailsForm;loansAccountProductTemplate=new B;constructor(a,l,r){this.formBuilder=a,this.loansService=l,this.datePipe=r,this.createLoansAccountDetailsForm();}ngOnInit(){this.buildDependencies(),this.loansAccountTemplate&&(this.productData=this.loansAccountTemplate.productOptions,this.loansAccountTemplate.loanProductId&&this.loansAccountDetailsForm.patchValue({productId:this.loansAccountTemplate.loanProductId,submittedOnDate:this.loansAccountTemplate.timeline.submittedOnDate&&new Date(this.loansAccountTemplate.timeline.submittedOnDate),loanOfficerId:this.loansAccountTemplate.loanOfficerId,loanPurposeId:this.loansAccountTemplate.loanPurposeId,fundId:this.loansAccountTemplate.fundId,expectedDisbursementDate:this.loansAccountTemplate.timeline.expectedDisbursementDate&&new Date(this.loansAccountTemplate.timeline.expectedDisbursementDate),externalId:this.loansAccountTemplate.externalId}));}createLoansAccountDetailsForm(){this.loansAccountDetailsForm=this.formBuilder.group({productId:["",mi$1.required],loanOfficerId:[""],loanPurposeId:[""],fundId:[""],submittedOnDate:["",mi$1.required],expectedDisbursementDate:["",mi$1.required],externalId:[""],linkAccountId:[""],createStandingInstructionAtDisbursement:[""]});}buildDependencies(){let a=this.loansAccountTemplate.clientId;this.loansAccountDetailsForm.get("productId").valueChanges.subscribe(l=>{this.loansService.getLoansAccountTemplateResource(a,l).subscribe(r=>{this.loansAccountProductTemplate.emit(r),this.loanOfficerOptions=r.loanOfficerOptions,this.loanPurposeOptions=r.loanPurposeOptions,this.fundOptions=r.fundOptions,this.accountLinkingOptions=r.accountLinkingOptions,r.createStandingInstructionAtDisbursement&&this.loansAccountDetailsForm.get("createStandingInstructionAtDisbursement").patchValue(r.createStandingInstructionAtDisbursement);});});}get loansAccountDetails(){return this.loansAccountDetailsForm.value}static \u0275fac=function(l){return new(l||e)(T(AI),T(E),T(_te))};static \u0275cmp=N({type:e,selectors:[["mifosx-loans-account-details-step"]],inputs:{loansAccountTemplate:"loansAccountTemplate"},outputs:{loansAccountProductTemplate:"loansAccountProductTemplate"},standalone:false,decls:129,vars:16,consts:[["submitPicker",""],["disbursementPicker",""],[3,"formGroup"],["fxLayout","row wrap","fxLayoutGap","2%","fxLayout.lt-md","column"],["fxFlex","48%"],["formControlName","productId","required",""],[3,"value",4,"ngFor","ngForOf"],["formControlName","loanOfficerId"],["formControlName","loanPurposeId"],["formControlName","fundId"],["matInput","","required","","formControlName","submittedOnDate",3,"min","max","matDatepicker"],["matSuffix","",3,"for"],[4,"ngIf"],["matInput","","required","","formControlName","expectedDisbursementDate",3,"min","max","matDatepicker"],["matInput","","formControlName","externalId"],["fxFlex","98%"],["fxFlexFill","",1,"mat-h3"],["formControlName","linkAccountId"],["fxFlex","48%","formControlName","createStandingInstructionAtDisbursement"],["fxLayout","row","fxLayout.xs","column","fxLayoutAlign","center","fxLayoutGap","2%",1,"margin-t"],["mat-raised-button","","matStepperPrevious","","disabled",""],["icon","arrow-left"],["mat-raised-button","","matStepperNext",""],["icon","arrow-right"],[3,"value"]],template:function(l,r){if(l&1&&(x(0,"form",2),b(1,`

  `),x(2,"div",3),b(3,`

    `),x(4,"mat-form-field",4),b(5,`
      `),x(6,"mat-label"),b(7,"Product Name"),w(),b(8,`
      `),x(9,"mat-select",5),b(10,`
        `),Ie(11,ou,2,2,"mat-option",6),b(12,`
      `),w(),ki$1(),b(13,`
      `),x(14,"mat-error"),b(15,`
        Product Name is `),x(16,"strong"),b(17,"required"),w(),b(18,`
      `),w(),b(19,`
    `),w(),b(20,`

    `),x(21,"mat-form-field",4),b(22,`
      `),x(23,"mat-label"),b(24,"Loan officer"),w(),b(25,`
      `),x(26,"mat-select",7),b(27,`
        `),Ie(28,ru,2,2,"mat-option",6),b(29,`
      `),w(),ki$1(),b(30,`
    `),w(),b(31,`

    `),x(32,"mat-form-field",4),b(33,`
      `),x(34,"mat-label"),b(35,"Loan purpose"),w(),b(36,`
      `),x(37,"mat-select",8),b(38,`
        `),Ie(39,mu,2,2,"mat-option",6),b(40,`
      `),w(),ki$1(),b(41,`
    `),w(),b(42,`

    `),x(43,"mat-form-field",4),b(44,`
      `),x(45,"mat-label"),b(46,"Fund"),w(),b(47,`
      `),x(48,"mat-select",9),b(49,`
        `),Ie(50,lu,2,2,"mat-option",6),b(51,`
      `),w(),ki$1(),b(52,`
    `),w(),b(53,`

    `),x(54,"mat-form-field",4),b(55,`
      `),x(56,"mat-label"),b(57,"Submitted on"),w(),b(58,`
      `),fe(59,"input",10),ki$1(),b(60,`
      `),fe(61,"mat-datepicker-toggle",11),b(62,`
      `),fe(63,"mat-datepicker",null,0),b(65,`
      `),Ie(66,cu,5,0,"mat-error",12),b(67,`
    `),w(),b(68,`

    `),x(69,"mat-form-field",4),b(70,`
      `),x(71,"mat-label"),b(72,"Disbursement on"),w(),b(73,`
      `),fe(74,"input",13),ki$1(),b(75,`
      `),fe(76,"mat-datepicker-toggle",11),b(77,`
      `),fe(78,"mat-datepicker",null,1),b(80,`
      `),Ie(81,su,5,0,"mat-error",12),b(82,`
    `),w(),b(83,`

    `),x(84,"mat-form-field",4),b(85,`
      `),x(86,"mat-label"),b(87,"External id"),w(),b(88,`
      `),fe(89,"input",14),ki$1(),b(90,`
    `),w(),b(91,`

    `),fe(92,"mat-divider",15),b(93,`

    `),x(94,"h3",16),b(95,"Savings Linkage"),w(),b(96,`

    `),x(97,"mat-form-field",4),b(98,`
      `),x(99,"mat-label"),b(100,"Link savings"),w(),b(101,`
      `),x(102,"mat-select",17),b(103,`
        `),Ie(104,pu,2,2,"mat-option",6),b(105,`
      `),w(),ki$1(),b(106,`
    `),w(),b(107,`

    `),x(108,"mat-checkbox",18),b(109,`
      `),x(110,"p"),b(111,"Create standing instructions at disbursement"),w(),b(112,`
    `),w(),ki$1(),b(113,`

  `),w(),b(114,`

  `),x(115,"div",19),b(116,`
    `),x(117,"button",20),b(118,`
      `),fe(119,"fa-icon",21),b(120,`\xA0\xA0
      Previous
    `),w(),b(121,`
    `),x(122,"button",22),b(123,`
      Next\xA0\xA0
      `),fe(124,"fa-icon",23),b(125,`
    `),w(),b(126,`
  `),w(),b(127,`

`),w(),b(128,`
`)),l&2){let d=Nt(64),h=Nt(79);z("formGroup",r.loansAccountDetailsForm),D(9),Li$1(),D(2),z("ngForOf",r.productData),D(15),Li$1(),D(2),z("ngForOf",r.loanOfficerOptions),D(9),Li$1(),D(2),z("ngForOf",r.loanPurposeOptions),D(9),Li$1(),D(2),z("ngForOf",r.fundOptions),D(9),z("min",r.minDate)("max",r.maxDate)("matDatepicker",d),Li$1(),D(2),z("for",d),D(5),z("ngIf",r.loansAccountDetailsForm.controls.submittedOnDate?.hasError("required")),D(8),z("min",r.minDate)("max",r.maxDate)("matDatepicker",h),Li$1(),D(2),z("for",h),D(5),z("ngIf",r.loansAccountDetailsForm.controls.submittedOnDate?.hasError("required")),D(8),Li$1(),D(13),Li$1(),D(2),z("ngForOf",r.accountLinkingOptions),D(4),Li$1();}},dependencies:[ii,Yo$1,Oc$1,go$1,Mc,eA,R2,wc$1,Ti$1,Sn$1,uv,zT,dh,Mv,Th,Ri$1,Br$1,O3,sv,Ac$1,ja$1,YWe,KWe,DI,Cc$1,Na$1,k2,S6,uo$1,_3],styles:["h4[_ngcontent-%COMP%]{font-weight:500;margin:1em 0}h3[_ngcontent-%COMP%]{font-weight:500}mat-divider[_ngcontent-%COMP%]{margin:1em 0 2em}.margin-v[_ngcontent-%COMP%]{margin:1em 0}.margin-b[_ngcontent-%COMP%]{margin:0 0 1em}.margin-t[_ngcontent-%COMP%]{margin-top:1em}"],changeDetection:1})}return e})();function du(e,m){e&1&&(x(0,"mat-error"),b(1,`
          Principal is `),x(2,"strong"),b(3,"required"),w(),b(4,`
        `),w());}function uu(e,m){e&1&&(x(0,"mat-error"),b(1,`
          Loan Term is `),x(2,"strong"),b(3,"required"),w(),b(4,`
        `),w());}function fu(e,m){if(e&1&&(x(0,"mat-option",38),b(1),w()),e&2){let a=m.$implicit;z("value",a.id),D(),it(`
            `,a.value,`
          `);}}function xu(e,m){e&1&&(x(0,"mat-error"),b(1,`
          Frequency is `),x(2,"strong"),b(3,"required"),w(),b(4,`
        `),w());}function _u(e,m){e&1&&(x(0,"mat-error"),b(1,`
          Number of repayments is `),x(2,"strong"),b(3,"required"),w(),b(4,`
        `),w());}function Cu(e,m){e&1&&(x(0,"mat-error"),b(1,`
          Repaid every is `),x(2,"strong"),b(3,"required"),w(),b(4,`
        `),w());}function vu(e,m){if(e&1&&(x(0,"mat-option",38),b(1),w()),e&2){let a=m.$implicit;z("value",a.id),D(),it(`
            `,a.value,`
          `);}}function gu(e,m){if(e&1&&(x(0,"mat-option",38),b(1),w()),e&2){let a=m.$implicit;z("value",a.id),D(),it(`
            `,a.value,`
          `);}}function hu(e,m){if(e&1&&(x(0,"mat-form-field",5),b(1,`
        `),x(2,"mat-label"),b(3,"Select On"),w(),b(4,`
        `),x(5,"mat-select",39),b(6,`
          `),Ie(7,gu,2,2,"mat-option",11),b(8,`
        `),w(),ki$1(),b(9,`
      `),w()),e&2){let a=K();D(5),Li$1(),D(2),z("ngForOf",a.repaymentFrequencyNthDayTypeData);}}function Su(e,m){if(e&1&&(x(0,"mat-option",38),b(1),w()),e&2){let a=m.$implicit;z("value",a.id),D(),it(`
            `,a.value,`
          `);}}function yu(e,m){if(e&1&&(x(0,"mat-form-field",5),b(1,`
        `),x(2,"mat-label"),b(3,"Select Day"),w(),b(4,`
        `),x(5,"mat-select",40),b(6,`
          `),Ie(7,Su,2,2,"mat-option",11),b(8,`
        `),w(),ki$1(),b(9,`
      `),w()),e&2){let a=K();D(5),Li$1(),D(2),z("ngForOf",a.repaymentFrequencyDaysOfWeekTypeData);}}function Du(e,m){if(e&1&&(x(0,"mat-option",38),b(1),w()),e&2){let a=m.$implicit;z("value",a.id),D(),it(`
              `,a.value,`
            `);}}function bu(e,m){if(e&1&&(Rl$1(0),b(1,`

      `),x(2,"mat-form-field",5),b(3,`
        `),x(4,"mat-label"),b(5,"Nominal interest rate"),w(),b(6,`
        `),fe(7,"input",41),ki$1(),b(8,`
      `),w(),b(9,`

        `),x(10,"mat-form-field",5),b(11,`
          `),x(12,"mat-label"),b(13,"Interest method"),w(),b(14,`
          `),x(15,"mat-select",42),b(16,`
            `),Ie(17,Du,2,2,"mat-option",11),b(18,`
          `),w(),ki$1(),b(19,`
        `),w(),b(20,`

        `),x(21,"mat-checkbox",43),b(22,`
          `),x(23,"p"),b(24,"Is Equal Amortization"),w(),b(25,`
        `),w(),ki$1(),b(26,`

    `),zl$1()),e&2){let a=K();D(7),Li$1(),D(8),z("disabled",!a.loansAccountProductTemplate?.product.allowAttributeOverrides.interestType),Li$1(),D(2),z("ngForOf",a.interestTypeData),D(4),z("checked",a.loansAccountProductTemplate==null?null:a.loansAccountProductTemplate.isEqualAmortization),Li$1();}}function Tu(e,m){if(e&1&&(x(0,"mat-option",48),b(1),w()),e&2){let a=m.$implicit,l=K(2);z("disabled",!l.loansAccountProductTemplate?.product.allowAttributeOverrides.interestType)("value",a.id),D(),it(`
              `,a.value,`
            `);}}function Eu(e,m){if(e&1&&(Rl$1(0),b(1,`

      `),b(2,`

      `),x(3,"div",44),b(4,`

        `),x(5,"mat-form-field",5),b(6,`
          `),x(7,"mat-label"),b(8,"Interest Method"),w(),b(9,`
          `),x(10,"mat-select",45),b(11,`
            `),Ie(12,Tu,2,3,"mat-option",46),b(13,`
          `),w(),ki$1(),b(14,`
        `),w(),b(15,`

        `),x(16,"mat-checkbox",47),b(17,`
          `),x(18,"p"),b(19,"Is Floating Rate?"),w(),b(20,`
        `),w(),ki$1(),b(21,`

      `),w(),b(22,`

    `),zl$1()),e&2){let a=K();D(10),Li$1(),D(2),z("ngForOf",a.interestTypeData),D(4),Li$1();}}function Au(e,m){if(e&1&&(x(0,"mat-option",38),b(1),w()),e&2){let a=m.$implicit;z("value",a.id),D(),it(`
          `,a.value,`
        `);}}function Iu(e,m){e&1&&(x(0,"mat-error"),b(1,`
        Amortization Type is `),x(2,"strong"),b(3,"required"),w(),b(4,`
      `),w());}function Lu(e,m){if(e&1&&(x(0,"mat-option",38),b(1),w()),e&2){let a=m.$implicit;z("value",a.id),D(),it(`
          `,a.value,`
        `);}}function Fu(e,m){if(e&1&&(x(0,"mat-option",38),b(1),w()),e&2){let a=m.$implicit;z("value",a.id),D(),it(`
          `,a.name,`
        `);}}function wu(e,m){e&1&&(x(0,"mat-error"),b(1,`
        Repayment Strategy is `),x(2,"strong"),b(3,"required"),w(),b(4,`
      `),w());}function Pu(e,m){e&1&&(x(0,"mat-form-field",5),b(1,`
      `),x(2,"mat-label"),b(3,"Installment Amount"),w(),b(4,`
      `),fe(5,"input",49),ki$1(),b(6,`
    `),w()),e&2&&(D(5),Li$1());}function Ru(e,m){if(e&1&&(x(0,"mat-option",38),b(1),w()),e&2){let a=m.$implicit;z("value",a.id),D(),it(`
            `,a.accountNo,`
          `);}}function Ou(e,m){if(e&1&&(x(0,"mat-form-field",5),b(1,`
        `),x(2,"mat-label"),b(3,"Loan closed with Topup"),w(),b(4,`
        `),x(5,"mat-select",51),b(6,`
          `),Ie(7,Ru,2,2,"mat-option",11),b(8,`
        `),w(),ki$1(),b(9,`
      `),w()),e&2){let a=K(2);D(5),Li$1(),D(2),z("ngForOf",a.clientActiveLoanData);}}function Mu(e,m){e&1&&(x(0,"mat-error"),b(1,`
          Frequency Data for recalculation is `),x(2,"strong"),b(3,"required"),w(),b(4,`
        `),w());}function Nu(e,m){if(e&1&&(x(0,"mat-form-field",5),b(1,`
        `),x(2,"mat-label"),b(3,"Frequency Date for recalculation"),w(),b(4,`
        `),fe(5,"input",52),ki$1(),b(6,`
        `),fe(7,"mat-datepicker-toggle",14),b(8,`
        `),fe(9,"mat-datepicker",null,2),b(11,`
        `),Ie(12,Mu,5,0,"mat-error",7),b(13,`
      `),w()),e&2){let a=Nt(10),l=K(2);D(5),z("min",l.minDate)("max",l.maxDate)("matDatepicker",a),Li$1(),D(2),z("for",a),D(5),z("ngIf",l.loansAccountTermsForm.controls.recalculationCompoundingFrequencyDate.hasError("required"));}}function ku(e,m){if(e&1&&(Rl$1(0),b(1,`

      `),x(2,"mat-checkbox",50),b(3,`
        `),x(4,"p"),b(5,"Is Topup Loan?"),w(),b(6,`
      `),w(),ki$1(),b(7,`

      `),Ie(8,Ou,10,1,"mat-form-field",17),b(9,`

      `),Ie(10,Nu,14,5,"mat-form-field",17),b(11,`

    `),zl$1()),e&2){let a=K();D(2),Li$1(),D(6),z("ngIf",a.loansAccountTermsForm.controls.isTopup.value),D(2),z("ngIf",a.loansAccountProductTemplate.isInterestRecalculationEnabled&&a.loansAccountProductTemplate.interestRecalculationData.interestRecalculationCompoundingType.id!=0&&a.loansAccountProductTemplate.interestRecalculationData.recalculationCompoundingFrequencyType.id!=1);}}function Gu(e,m){if(e&1&&(x(0,"div",29),b(1,`
      `),x(2,"span",30),b(3,"Days in year"),w(),b(4,`
      `),x(5,"span",31),b(6),w(),b(7,`
    `),w()),e&2){let a=K();D(6),Dt(a.loansAccountProductTemplate?.daysInYearType.value);}}function Bu(e,m){if(e&1&&(x(0,"div",29),b(1,`
        `),x(2,"span",30),b(3,"Advance payments adjustment type"),w(),b(4,`
        `),x(5,"span",31),b(6),w(),b(7,`
      `),w()),e&2){let a=K(2);D(6),Dt(a.loansAccountProductTemplate?.interestRecalculationData.rescheduleStrategyType.value);}}function ju(e,m){if(e&1&&(x(0,"div",29),b(1,`
        `),x(2,"span",30),b(3,"Days in month"),w(),b(4,`
        `),x(5,"span",31),b(6),w(),b(7,`
      `),w()),e&2){let a=K(2);D(6),Dt(a.loansAccountProductTemplate?.daysInMonthType.value);}}function Vu(e,m){if(e&1&&(Rl$1(0),b(1,`

      `),Ie(2,Bu,8,1,"div",32),b(3,`

      `),Ie(4,ju,8,1,"div",32),b(5,`

    `),zl$1()),e&2){let a=K();D(2),z("ngIf",a.loansAccountProductTemplate?.isInterestRecalculationEnabled),D(2),z("ngIf",a.loansAccountProductTemplate?.isInterestRecalculationEnabled);}}function qu(e,m){if(e&1&&(x(0,"span"),b(1),w()),e&2){let a=K(2);D(),it(`
            on `,a.loansAccountProductTemplate?.interestRecalculationData.recalculationRestFrequencyWeekday.value);}}function Hu(e,m){if(e&1&&(x(0,"span"),b(1),w()),e&2){let a=K(2);D(),it(`on day
            `,a.loansAccountProductTemplate?.interestRecalculationData.recalculationRestFrequencyOnDay);}}function $u(e,m){if(e&1&&(x(0,"span"),b(1),w()),e&2){let a=K(2);D(),Y0$1(`on
            `,a.loansAccountProductTemplate?.interestRecalculationData.recalculationRestFrequencyNthDay.value,`
            `,a.loansAccountProductTemplate?.interestRecalculationData.recalculationRestFrequencyWeekday.value);}}function Wu(e,m){if(e&1&&(Rl$1(0),b(1,`

      `),x(2,"div",29),b(3,`
        `),x(4,"span",30),b(5,"Interest recalculation compounding on"),w(),b(6,`
        `),x(7,"span",31),b(8),w(),b(9,`
      `),w(),b(10,`

      `),x(11,"div",29),b(12,`
        `),x(13,"span",30),b(14,"Frequency Interval for recalculation"),w(),b(15,`
        `),x(16,"span",31),b(17,`
          `),x(18,"span"),b(19),w(),b(20,`
          `),Ie(21,qu,2,1,"span",7),b(22,`
          `),Ie(23,Hu,2,1,"span",7),b(24,`
          `),Ie(25,$u,2,2,"span",7),b(26,`
        `),w(),b(27,`
      `),w(),b(28,`

    `),zl$1()),e&2){let a=K();D(8),Dt(a.loansAccountProductTemplate?.interestRecalculationData.interestRecalculationCompoundingType.value),D(11),Dt(a.loansAccountProductTemplate?.interestRecalculationData.recalculationRestFrequencyType.value),D(2),z("ngIf",a.loansAccountProductTemplate?.interestRecalculationData.recalculationRestFrequencyType.id==3&&a.loansAccountProductTemplate?.interestRecalculationData.recalculationRestFrequencyWeekday!=null),D(2),z("ngIf",a.loansAccountProductTemplate?.interestRecalculationData.recalculationRestFrequencyType.id==4&&a.loansAccountProductTemplate?.interestRecalculationData.recalculationRestFrequencyOnDay!=null),D(2),z("ngIf",a.loansAccountProductTemplate?.interestRecalculationData.recalculationRestFrequencyType.id==4&&a.loansAccountProductTemplate?.interestRecalculationData.recalculationRestFrequencyOnDay==null&&a.loansAccountProductTemplate?.interestRecalculationData.recalculationRestFrequencyNthDay!=null);}}function Uu(e,m){if(e&1&&(x(0,"div",29),b(1,`
      `),x(2,"span",30),b(3,"Frequency Interval for recalculation"),w(),b(4,`
      `),x(5,"span",31),b(6),w(),b(7,`
    `),w()),e&2){let a=K();D(6),Dt(a.loansAccountProductTemplate?.interestRecalculationData.recalculationRestFrequencyInterval);}}function zu(e,m){if(e&1&&(x(0,"span"),b(1),w()),e&2){let a=K(2);D(),it(`
            on `,a.loansAccountProductTemplate?.interestRecalculationData.recalculationCompoundingFrequencyWeekday.value,`
          `);}}function Qu(e,m){if(e&1&&(x(0,"span"),b(1),w()),e&2){let a=K(2);D(),it(`on day
            `,a.loansAccountProductTemplate?.interestRecalculationData.recalculationCompoundingFrequencyOnDay,`
          `);}}function Yu(e,m){if(e&1&&(x(0,"span"),b(1),w()),e&2){let a=K(2);D(),Y0$1(`on
            `,a.loansAccountProductTemplate?.interestRecalculationData.recalculationCompoundingFrequencyNthDay.value,`
            `,a.loansAccountProductTemplate?.interestRecalculationData.recalculationCompoundingFrequencyWeekday.value,`
          `);}}function Ju(e,m){if(e&1&&(Rl$1(0),b(1,`

      `),x(2,"div",29),b(3,`
        `),x(4,"span",30),b(5,"Frequency for compounding"),w(),b(6,`
        `),x(7,"span",31),b(8),Ie(9,zu,2,1,"span",7),b(10,`
          `),Ie(11,Qu,2,1,"span",7),b(12,`
          `),Ie(13,Yu,2,2,"span",7),b(14,`
        `),w(),b(15,`
      `),w(),b(16,`

    `),zl$1()),e&2){let a=K();D(8),it("",a.loansAccountProductTemplate?.interestRecalculationData.recalculationCompoundingFrequencyType.value,`
          `),D(),z("ngIf",a.loansAccountProductTemplate?.interestRecalculationData.recalculationCompoundingFrequencyType.id==3&&a.loansAccountProductTemplate?.interestRecalculationData.recalculationCompoundingFrequencyWeekday!=null),D(2),z("ngIf",a.loansAccountProductTemplate?.interestRecalculationData.recalculationCompoundingFrequencyType.id==4&&a.loansAccountProductTemplate?.interestRecalculationData.recalculationCompoundingFrequencyOnDay!=null),D(2),z("ngIf",a.loansAccountProductTemplate?.interestRecalculationData.recalculationCompoundingFrequencyType.id==4&&a.loansAccountProductTemplate?.interestRecalculationData.recalculationCompoundingFrequencyOnDay==null&&a.loansAccountProductTemplate?.interestRecalculationData.recalculationCompoundingFrequencyNthDay!=null);}}function Ku(e,m){if(e&1&&(x(0,"div",29),b(1,`
      `),x(2,"span",30),b(3,"Frequency Interval for compounding"),w(),b(4,`
      `),x(5,"span",31),b(6),w(),b(7,`
    `),w()),e&2){let a=K();D(6),Dt(a.loansAccountProductTemplate?.interestRecalculationData.recalculationCompoundingFrequencyInterval);}}var be=(()=>{class e{formBuilder;route;router;loansAccountProductTemplate;loansAccountTemplate;minDate=new Date(2e3,0,1);maxDate=new Date;loansAccountTermsForm;termFrequencyTypeData;repaymentFrequencyNthDayTypeData;repaymentFrequencyDaysOfWeekTypeData;interestTypeData;amortizationTypeData;interestCalculationPeriodTypeData;transactionProcessingStrategyData;clientActiveLoanData;constructor(a,l,r){this.formBuilder=a,this.route=l,this.router=r,this.createloansAccountTermsForm();}ngOnChanges(){this.loansAccountProductTemplate&&(this.loansAccountTermsForm.patchValue({principal:this.loansAccountProductTemplate.principal,loanTermFrequency:this.loansAccountProductTemplate.termFrequency,loanTermFrequencyType:this.loansAccountProductTemplate.termPeriodFrequencyType.id,numberOfRepayments:this.loansAccountProductTemplate.numberOfRepayments,repaymentEvery:this.loansAccountProductTemplate.repaymentEvery,repaymentFrequencyType:this.loansAccountProductTemplate.repaymentFrequencyType.id,interestRatePerPeriod:this.loansAccountProductTemplate.interestRatePerPeriod,amortizationType:this.loansAccountProductTemplate.amortizationType.id,isEqualAmortization:this.loansAccountProductTemplate.isEqualAmortization,interestType:this.loansAccountProductTemplate.interestType.id,isFloatingInterestRate:this.loansAccountProductTemplate.isLoanProductLinkedToFloatingRate?false:"",interestCalculationPeriodType:this.loansAccountProductTemplate.interestCalculationPeriodType.id,allowPartialPeriodInterestCalcualtion:this.loansAccountProductTemplate.allowPartialPeriodInterestCalcualtion,inArrearsTolerance:this.loansAccountProductTemplate.inArrearsTolerance,graceOnPrincipalPayment:this.loansAccountProductTemplate.graceOnPrincipalPayment,graceOnInterestPayment:this.loansAccountProductTemplate.graceOnInterestPayment,graceOnArrearsAgeing:this.loansAccountProductTemplate.graceOnArrearsAgeing,transactionProcessingStrategyId:this.loansAccountProductTemplate.transactionProcessingStrategyId,graceOnInterestCharged:this.loansAccountProductTemplate.graceOnInterestCharged,fixedEmiAmount:this.loansAccountProductTemplate.fixedEmiAmount,maxOutstandingLoanBalance:this.loansAccountProductTemplate.maxOutstandingLoanBalance}),this.setOptions());}ngOnInit(){this.loansAccountTemplate&&this.loansAccountTemplate.loanProductId&&this.loansAccountTermsForm.patchValue({repaymentsStartingFromDate:this.loansAccountTemplate.expectedFirstRepaymentOnDate&&new Date(this.loansAccountTemplate.expectedFirstRepaymentOnDate)});}createloansAccountTermsForm(){this.loansAccountTermsForm=this.formBuilder.group({principal:["",mi$1.required],loanTermFrequency:["",mi$1.required],loanTermFrequencyType:["",mi$1.required],numberOfRepayments:["",mi$1.required],repaymentEvery:["",mi$1.required],repaymentFrequencyType:["",mi$1.required],repaymentFrequencyNthDayType:["",mi$1.required],repaymentFrequencyDayOfWeekType:["",mi$1.required],repaymentsStartingFromDate:[""],interestChargedFromDate:[""],interestRatePerPeriod:[""],interestType:[""],isFloatingInterestRate:[""],isEqualAmortization:[""],amortizationType:["",mi$1.required],interestCalculationPeriodType:[""],allowPartialPeriodInterestCalcualtion:[""],inArrearsTolerance:[""],graceOnInterestCharged:[""],transactionProcessingStrategyId:["",mi$1.required],graceOnPrincipalPayment:[""],graceOnInterestPayment:[""],graceOnArrearsAgeing:[""],loanIdToClose:[""],fixedEmiAmount:[""],isTopup:[""],maxOutstandingLoanBalance:[""],recalculationCompoundingFrequencyDate:[""]});}setOptions(){this.termFrequencyTypeData=this.loansAccountProductTemplate.termFrequencyTypeOptions,this.repaymentFrequencyNthDayTypeData=this.loansAccountProductTemplate.repaymentFrequencyNthDayTypeOptions,this.repaymentFrequencyDaysOfWeekTypeData=this.loansAccountProductTemplate.repaymentFrequencyDaysOfWeekTypeOptions,this.interestTypeData=this.loansAccountProductTemplate.interestTypeOptions,this.amortizationTypeData=this.loansAccountProductTemplate.amortizationTypeOptions,this.interestCalculationPeriodTypeData=this.loansAccountProductTemplate.interestCalculationPeriodTypeOptions,this.transactionProcessingStrategyData=this.loansAccountProductTemplate.transactionProcessingStrategyOptions,this.clientActiveLoanData=this.loansAccountProductTemplate.clientActiveLoanOptions;}get loansAccountTerms(){return this.loansAccountTermsForm.value}static \u0275fac=function(l){return new(l||e)(T(AI),T(zs$1),T(Gr$1))};static \u0275cmp=N({type:e,selectors:[["mifosx-loans-account-terms-step"]],inputs:{loansAccountProductTemplate:"loansAccountProductTemplate",loansAccountTemplate:"loansAccountTemplate"},standalone:false,features:[Pe],decls:225,vars:46,consts:[["repaymentsPicker",""],["interestPicker",""],["recalculationCompoundingFrequencyDatePicker",""],[3,"formGroup"],["fxLayout","row wrap","fxLayoutGap","2%","fxLayout.lt-md","column"],["fxFlex","48%"],["type","number","matInput","","formControlName","principal"],[4,"ngIf"],["fxFlex","98%",1,"mat-h4"],["matInput","","required","","formControlName","loanTermFrequency"],["required","","formControlName","loanTermFrequencyType"],[3,"value",4,"ngFor","ngForOf"],["type","number","matInput","","formControlName","numberOfRepayments"],["matInput","","formControlName","repaymentsStartingFromDate",3,"min","max","matDatepicker"],["matSuffix","",3,"for"],["matInput","","required","","formControlName","repaymentEvery",3,"disabled"],["formControlName","repaymentFrequencyType","required","",3,"disabled"],["fxFlex","48%",4,"ngIf"],["matInput","","formControlName","interestChargedFromDate",3,"min","max","matDatepicker"],["required","","formControlName","amortizationType",3,"disabled"],["formControlName","interestCalculationPeriodType",3,"disabled"],["fxFlex","48%","formControlName","allowPartialPeriodInterestCalcualtion",3,"disabled"],["matInput","","type","number","formControlName","inArrearsTolerance"],["matInput","","formControlName","graceOnInterestCharged"],["required","","formControlName","transactionProcessingStrategyId",3,"disabled"],["fxFlex","23%","labelPosition","before","formControlName","graceOnPrincipalPayment",1,"margin-v",3,"disabled"],["fxFlex","23%","labelPosition","before","formControlName","graceOnInterestPayment",1,"margin-v",3,"disabled"],["fxFlex","23%","labelPosition","before","formControlName","graceOnArrearsAgeing",1,"margin-v",3,"disabled"],["fxFlex","98%"],["fxFlexFill",""],["fxFlex","40%"],["fxFlex","60%"],["fxFlexFill","",4,"ngIf"],["fxLayout","row","fxLayout.xs","column","fxLayoutAlign","center","fxLayoutGap","2%",1,"margin-t"],["mat-raised-button","","matStepperPrevious",""],["icon","arrow-left"],["mat-raised-button","","matStepperNext",""],["icon","arrow-right"],[3,"value"],["formControlName","repaymentFrequencyNthDayType","required",""],["formControlName","repaymentFrequencyDayOfWeekType","required",""],["type","number","matInput","","formControlName","interestRatePerPeriod"],["formControlName","interestType",3,"disabled"],["fxFlex","48%","formControlName","isEqualAmortization",3,"checked"],["fxFlex","48%","fxLayout","row wrap","fxLayoutGap","2%","fxLayout.lt-md","column"],["formControlName","interestType"],[3,"disabled","value",4,"ngFor","ngForOf"],["fxFlex","48%","formControlName","isFloatingInterestRate"],[3,"disabled","value"],["type","number","matInput","","formControlName","fixedEmiAmount"],["fxFlex","48%","formControlName","isTopup"],["formControlName","loanIdToClose"],["matInput","","formControlName","recalculationCompoundingFrequencyDate",3,"min","max","matDatepicker"]],template:function(l,r){if(l&1&&(x(0,"form",3),b(1,`

    `),x(2,"div",4),b(3,`

      `),x(4,"mat-form-field",5),b(5,`
        `),x(6,"mat-label"),b(7),w(),b(8,`
        `),fe(9,"input",6),ki$1(),b(10,`
        `),Ie(11,du,5,0,"mat-error",7),b(12,`
      `),w(),b(13,`

      `),x(14,"h4",8),b(15,"Term Options"),w(),b(16,`

      `),x(17,"mat-form-field",5),b(18,`
        `),x(19,"mat-label"),b(20,"Loan Term"),w(),b(21,`
        `),fe(22,"input",9),ki$1(),b(23,`
        `),Ie(24,uu,5,0,"mat-error",7),b(25,`
      `),w(),b(26,`

      `),x(27,"mat-form-field",5),b(28,`
        `),x(29,"mat-label"),b(30,"Frequency"),w(),b(31,`
        `),x(32,"mat-select",10),b(33,`
          `),Ie(34,fu,2,2,"mat-option",11),b(35,`
        `),w(),ki$1(),b(36,`
        `),Ie(37,xu,5,0,"mat-error",7),b(38,`
      `),w(),b(39,`

      `),x(40,"mat-form-field",5),b(41,`
        `),x(42,"mat-label"),b(43,"Number of repayments"),w(),b(44,`
        `),fe(45,"input",12),ki$1(),b(46,`
        `),Ie(47,_u,5,0,"mat-error",7),b(48,`
      `),w(),b(49,`

      `),x(50,"mat-form-field",5),b(51,`
        `),x(52,"mat-label"),b(53,"First repayment on"),w(),b(54,`
        `),fe(55,"input",13),ki$1(),b(56,`
        `),fe(57,"mat-datepicker-toggle",14),b(58,`
        `),fe(59,"mat-datepicker",null,0),b(61,`
      `),w(),b(62,`

      `),x(63,"h4",8),b(64,"Repaid Every"),w(),b(65,`

      `),x(66,"mat-form-field",5),b(67,`
        `),x(68,"mat-label"),b(69,"Repaid every"),w(),b(70,`
        `),fe(71,"input",15),ki$1(),b(72,`
        `),Ie(73,Cu,5,0,"mat-error",7),b(74,`
      `),w(),b(75,`

      `),x(76,"mat-form-field",5),b(77,`
        `),x(78,"mat-label"),b(79,"Frequency"),w(),b(80,`
        `),x(81,"mat-select",16),b(82,`
          `),Ie(83,vu,2,2,"mat-option",11),b(84,`
        `),w(),ki$1(),b(85,`
      `),w(),b(86,`

      `),Ie(87,hu,10,1,"mat-form-field",17),b(88,`

      `),Ie(89,yu,10,1,"mat-form-field",17),b(90,`

      `),x(91,"mat-form-field",5),b(92,`
        `),x(93,"mat-label"),b(94,"Interest charged from"),w(),b(95,`
        `),fe(96,"input",18),ki$1(),b(97,`
        `),fe(98,"mat-datepicker-toggle",14),b(99,`
        `),fe(100,"mat-datepicker",null,1),b(102,`
      `),w(),b(103,`

    `),Ie(104,bu,27,3,"ng-container",7),b(105,`

    `),Ie(106,Eu,23,1,"ng-container",7),b(107,`

    `),x(108,"mat-form-field",5),b(109,`
      `),x(110,"mat-label"),b(111,"Amortization"),w(),b(112,`
      `),x(113,"mat-select",19),b(114,`
        `),Ie(115,Au,2,2,"mat-option",11),b(116,`
      `),w(),ki$1(),b(117,`
      `),Ie(118,Iu,5,0,"mat-error",7),b(119,`
    `),w(),b(120,`

    `),x(121,"h4",8),b(122,"Interest Calculations"),w(),b(123,`

    `),x(124,"mat-form-field",5),b(125,`
      `),x(126,"mat-label"),b(127,"Interest calculation period"),w(),b(128,`
      `),x(129,"mat-select",20),b(130,`
        `),Ie(131,Lu,2,2,"mat-option",11),b(132,`
      `),w(),ki$1(),b(133,`
    `),w(),b(134,`

    `),b(135,`
    `),x(136,"mat-checkbox",21),b(137,`
      `),x(138,"p"),b(139,"Calculate interest for exact days in partial period"),w(),b(140,`
    `),w(),ki$1(),b(141,`

    `),x(142,"mat-form-field",5),b(143,`
      `),x(144,"mat-label"),b(145),w(),b(146,`
      `),fe(147,"input",22),ki$1(),b(148,`
    `),w(),b(149,`

    `),x(150,"mat-form-field",5),b(151,`
      `),x(152,"mat-label"),b(153,"Interest free period"),w(),b(154,`
      `),fe(155,"input",23),ki$1(),b(156,`
    `),w(),b(157,`

    `),x(158,"mat-form-field",5),b(159,`
      `),x(160,"mat-label"),b(161,"Repayment strategy"),w(),b(162,`
      `),x(163,"mat-select",24),b(164,`
        `),Ie(165,Fu,2,2,"mat-option",11),b(166,`
      `),w(),ki$1(),b(167,`
      `),Ie(168,wu,5,0,"mat-error",7),b(169,`
    `),w(),b(170,`

    `),x(171,"h4",8),b(172,"Moratorium"),w(),b(173,`

    `),x(174,"mat-checkbox",25),b(175,`
      On Principal Payment
    `),w(),ki$1(),b(176,`

    `),x(177,"mat-checkbox",26),b(178,`
      On Interest Payment
    `),w(),ki$1(),b(179,`

    `),x(180,"mat-checkbox",27),b(181,`
      On Arreas Aging
    `),w(),ki$1(),b(182,`

    `),Ie(183,Pu,7,0,"mat-form-field",17),b(184,`

    `),Ie(185,ku,12,2,"ng-container",7),b(186,`

    `),fe(187,"mat-divider",28),b(188,`

    `),x(189,"div",29),b(190,`
      `),x(191,"span",30),b(192,"Recalculate Interest"),w(),b(193,`
      `),x(194,"span",31),b(195),w(),b(196,`
    `),w(),b(197,`

    `),Ie(198,Gu,8,1,"div",32),b(199,`

    `),Ie(200,Vu,6,2,"ng-container",7),b(201,`

    `),Ie(202,Wu,29,5,"ng-container",7),b(203,`

    `),Ie(204,Uu,8,1,"div",32),b(205,`

    `),Ie(206,Ju,17,4,"ng-container",7),b(207,`

    `),Ie(208,Ku,8,1,"div",32),b(209,`

    `),w(),b(210,`
    `),x(211,"div",33),b(212,`
      `),x(213,"button",34),b(214,`
        `),fe(215,"fa-icon",35),b(216,`\xA0\xA0
        Previous
      `),w(),b(217,`
      `),x(218,"button",36),b(219,`
        Next\xA0\xA0
        `),fe(220,"fa-icon",37),b(221,`
      `),w(),b(222,`
    `),w(),b(223,`

`),w(),b(224,`
`)),l&2){let d=Nt(60),h=Nt(101);z("formGroup",r.loansAccountTermsForm),D(7),it("Principal ",r.loansAccountProductTemplate?.currency.displaySymbol),D(2),Li$1(),D(2),z("ngIf",r.loansAccountTermsForm.controls.principal.hasError("required")),D(11),Li$1(),D(2),z("ngIf",r.loansAccountTermsForm.controls.loanTermFrequency.hasError("required")),D(8),Li$1(),D(2),z("ngForOf",r.termFrequencyTypeData),D(3),z("ngIf",r.loansAccountTermsForm.controls.loanTermFrequencyType.hasError("required")),D(8),Li$1(),D(2),z("ngIf",r.loansAccountTermsForm.controls.numberOfRepayments.hasError("required")),D(8),z("min",r.minDate)("max",r.maxDate)("matDatepicker",d),Li$1(),D(2),z("for",d),D(14),z("disabled",!r.loansAccountProductTemplate?.product.allowAttributeOverrides.repaymentEvery),Li$1(),D(2),z("ngIf",r.loansAccountTermsForm.controls.repaymentEvery.hasError("required")),D(8),z("disabled",!r.loansAccountProductTemplate?.product.allowAttributeOverrides.repaymentEvery),Li$1(),D(2),z("ngForOf",r.termFrequencyTypeData),D(4),z("ngIf",r.loansAccountTermsForm.controls.repaymentFrequencyType.value==2),D(2),z("ngIf",r.loansAccountTermsForm.controls.repaymentFrequencyType.value==2),D(7),z("min",r.minDate)("max",r.maxDate)("matDatepicker",h),Li$1(),D(2),z("for",h),D(6),z("ngIf",!r.loansAccountProductTemplate?.isLoanProductLinkedToFloatingRate),D(2),z("ngIf",r.loansAccountProductTemplate?.isLoanProductLinkedToFloatingRate),D(7),z("disabled",!r.loansAccountProductTemplate?.product.allowAttributeOverrides.amortizationType),Li$1(),D(2),z("ngForOf",r.amortizationTypeData),D(3),z("ngIf",r.loansAccountTermsForm.controls.amortizationType.hasError("required")),D(11),z("disabled",!r.loansAccountProductTemplate?.product.allowAttributeOverrides.interestCalculationPeriodType),Li$1(),D(2),z("ngForOf",r.interestCalculationPeriodTypeData),D(5),z("disabled",!r.loansAccountProductTemplate?.product.allowAttributeOverrides.interestCalculationPeriodType),Li$1(),D(9),it("Arrears tolerance ",r.loansAccountProductTemplate?.currency.displaySymbol),D(2),Z("disabled",!r.loansAccountProductTemplate?.product.allowAttributeOverrides.inArrearsTolerance),Li$1(),D(8),Li$1(),D(8),z("disabled",!r.loansAccountProductTemplate?.product.allowAttributeOverrides.transactionProcessingStrategyId),Li$1(),D(2),z("ngForOf",r.transactionProcessingStrategyData),D(3),z("ngIf",r.loansAccountTermsForm.controls.transactionProcessingStrategyId.hasError("required")),D(6),z("disabled",!r.loansAccountProductTemplate?.product.allowAttributeOverrides.graceOnPrincipalAndInterestPayment),Li$1(),D(3),z("disabled",!r.loansAccountProductTemplate?.product.allowAttributeOverrides.graceOnPrincipalAndInterestPayment),Li$1(),D(3),z("disabled",!r.loansAccountProductTemplate?.product.allowAttributeOverrides.graceOnArrearsAgeing),Li$1(),D(3),z("ngIf",r.loansAccountProductTemplate?.canDefineInstallmentAmount),D(2),z("ngIf",r.loansAccountProductTemplate?.canUseForTopup),D(10),Dt(r.loansAccountProductTemplate?.isInterestRecalculationEnabled?"Yes":"No"),D(3),z("ngIf",r.loansAccountProductTemplate?.isInterestRecalculationEnabled),D(2),z("ngIf",r.loansAccountProductTemplate?.isInterestRecalculationEnabled),D(2),z("ngIf",r.loansAccountProductTemplate?.isInterestRecalculationEnabled),D(2),z("ngIf",r.loansAccountProductTemplate?.isInterestRecalculationEnabled&&r.loansAccountProductTemplate?.interestRecalculationData.recalculationRestFrequencyType.id!=1),D(2),z("ngIf",r.loansAccountProductTemplate?.isInterestRecalculationEnabled&&r.loansAccountProductTemplate?.interestRecalculationData.interestRecalculationCompoundingType.id!=0),D(2),z("ngIf",r.loansAccountProductTemplate?.isInterestRecalculationEnabled&&r.loansAccountProductTemplate?.interestRecalculationData.interestRecalculationCompoundingType.id!=0&&r.loansAccountProductTemplate?.interestRecalculationData.recalculationCompoundingFrequencyType.id!=1);}},dependencies:[ii,Yo$1,Oc$1,go$1,Mc,eA,R2,wc$1,Ti$1,Sn$1,uv,zT,dh,Mv,Th,Ri$1,Br$1,O3,sv,Ac$1,ja$1,YWe,KWe,DI,Cc$1,Wne,Na$1,k2,S6,uo$1,_3],styles:["h4[_ngcontent-%COMP%]{font-weight:500;margin:1em 0}h3[_ngcontent-%COMP%]{font-weight:500}mat-divider[_ngcontent-%COMP%]{margin:1em 0 2em}.margin-v[_ngcontent-%COMP%]{margin:1em 0}.margin-b[_ngcontent-%COMP%]{margin:0 0 1em}.margin-t[_ngcontent-%COMP%]{margin-top:1em}"],changeDetection:1})}return e})();var Xu=e=>({data:e});function Zu(e,m){if(e&1&&(x(0,"mat-option",9),b(1),w()),e&2){let a=m.$implicit;z("value",a.id),D(),it(`
        `,a.name,`
      `);}}var Qi=(()=>{class e{dialogRef;data;formBuilder;layout={addButtonText:"Add"};addCollateralForm;collateralTypeData;constructor(a,l,r){this.dialogRef=a,this.data=l,this.formBuilder=r,this.createAddCollateralForm();}ngOnInit(){this.dialogRef.updateSize("400px"),this.collateralTypeData=this.data.collateralTypeOptions;}createAddCollateralForm(){this.addCollateralForm=this.formBuilder.group({type:["",mi$1.required],value:["",mi$1.required],description:["",mi$1.required]});}static \u0275fac=function(l){return new(l||e)(T(En),T(rr$1),T(AI))};static \u0275cmp=N({type:e,selectors:[["mifosx-loans-account-add-collateral-dialog"]],standalone:false,decls:60,vars:7,consts:[["mat-dialog-title",""],["mat-dialog-content","","fxLayout","column",3,"formGroup"],["formControlName","type","required",""],[3,"value",4,"ngFor","ngForOf"],["type","number","matInput","","formControlName","value","required",""],["type","text","matInput","","formControlName","description","required",""],["fxLayout","row","fxLayout.xs","column","fxLayoutAlign","center","fxLayoutGap","2%"],["mat-raised-button","","mat-dialog-close",""],["mat-raised-button","","color","primary",3,"mat-dialog-close","disabled"],[3,"value"]],template:function(l,r){l&1&&(x(0,"h1",0),b(1,"Add Loan Collateral"),w(),b(2,`

`),x(3,"div",1),b(4,`

  `),x(5,"mat-form-field"),b(6,`
    `),x(7,"mat-label"),b(8,"Collateral Type"),w(),b(9,`
    `),x(10,"mat-select",2),b(11,`
      `),Ie(12,Zu,2,2,"mat-option",3),b(13,`
    `),w(),ki$1(),b(14,`
    `),x(15,"mat-error"),b(16,`
      Collateral Type is `),x(17,"strong"),b(18,"required"),w(),b(19,`
    `),w(),b(20,`
  `),w(),b(21,`

  `),x(22,"mat-form-field"),b(23,`
    `),x(24,"mat-label"),b(25,"Value"),w(),b(26,`
    `),fe(27,"input",4),ki$1(),b(28,`
    `),x(29,"mat-error"),b(30,`
      Value is `),x(31,"strong"),b(32,"required"),w(),b(33,`
    `),w(),b(34,`
  `),w(),b(35,`

  `),x(36,"mat-form-field"),b(37,`
    `),x(38,"mat-label"),b(39,"Description"),w(),b(40,`
    `),fe(41,"input",5),ki$1(),b(42,`
    `),x(43,"mat-error"),b(44,`
      Description is `),x(45,"strong"),b(46,"required"),w(),b(47,`
    `),w(),b(48,`
  `),w(),b(49,`

`),w(),b(50,`

`),x(51,"mat-dialog-actions",6),b(52,`
  `),x(53,"button",7),b(54," Cancel "),w(),b(55,`
  `),x(56,"button",8),b(57),w(),b(58,`
`),w(),b(59,`
`)),l&2&&(D(3),z("formGroup",r.addCollateralForm),D(7),Li$1(),D(2),z("ngForOf",r.collateralTypeData),D(15),Li$1(),D(14),Li$1(),D(15),z("mat-dialog-close",gc$1(5,Xu,r.addCollateralForm))("disabled",!r.addCollateralForm.valid||r.addCollateralForm.pristine),D(),Dt(r.layout.addButtonText));},dependencies:[ii,go$1,Mc,eA,Ti$1,Sn$1,Fi$1,ci$1,Oi$1,li$1,Ri$1,Br$1,O3,Ac$1,ja$1,Cc$1,Wne,Na$1,k2,S6,uo$1,_3],encapsulation:2,changeDetection:1})}return e})();function t1(e,m){if(e&1&&(x(0,"mat-option",35),b(1),w()),e&2){let a=m.$implicit;z("value",a),D(),it(`
        `,a.name,`
      `);}}function e1(e,m){e&1&&(x(0,"th",36),b(1," Name "),w());}function n1(e,m){if(e&1&&(x(0,"td",37),b(1),w()),e&2){let a=m.$implicit;D(),it(`
        `,a.name+", "+a.currency.displaySymbol,`
      `);}}function i1(e,m){e&1&&(x(0,"th",36),b(1," Type "),w());}function a1(e,m){if(e&1&&(x(0,"td",37),b(1),w()),e&2){let a=m.$implicit;D(),it(`
        `,a.chargeCalculationType.value,`
      `);}}function o1(e,m){e&1&&(x(0,"th",36),b(1," Amount "),w());}function r1(e,m){if(e&1){let a=Kt();x(0,"td",37),b(1),x(2,"button",38),re("click",function(){let r=ot(a).$implicit,d=K();return at(d.editChargeAmount(r))}),b(3,`
          `),fe(4,"fa-icon",39),b(5,`
        `),w(),b(6,`
      `),w();}if(e&2){let a=m.$implicit;D(),it(`
        `,a.amount,`
        `);}}function m1(e,m){e&1&&(x(0,"th",36),b(1," Collected On "),w());}function l1(e,m){if(e&1&&(x(0,"td",37),b(1),w()),e&2){let a=m.$implicit;D(),it(`
        `,a.chargeTimeType.value,`
      `);}}function c1(e,m){e&1&&(x(0,"th",36),b(1," Date "),w());}function s1(e,m){if(e&1&&(x(0,"span"),b(1),nee(2,"date"),w()),e&2){let a=K().$implicit;D(),it(`
          `,ree(2,1,a.dueDate)||"Unassigned",`
        `);}}function p1(e,m){if(e&1&&(x(0,"span"),b(1),nee(2,"date"),w()),e&2){let a=K().$implicit;D(),it(`
          `,ree(2,1,a.feeOnMonthDay)||"Unassigned",`
        `);}}function d1(e,m){e&1&&(x(0,"span"),b(1,`
          N/A
        `),w());}function u1(e,m){if(e&1){let a=Kt();x(0,"button",38),re("click",function(){ot(a);let r=K().$implicit,d=K();return at(d.editChargeDate(r))}),b(1,`
          `),fe(2,"fa-icon",39),b(3,`
        `),w();}}function f1(e,m){if(e&1&&(x(0,"td",37),b(1,`
        `),Ie(2,s1,3,3,"span",40),b(3,`
        `),Ie(4,p1,3,3,"span",40),b(5,`
        `),Ie(6,d1,2,0,"span",40),b(7,`
        `),Ie(8,u1,4,0,"button",41),b(9,`
      `),w()),e&2){let a=m.$implicit;D(2),z("ngIf",a.chargeTimeType.value==="Specified due date"||a.chargeTimeType.value==="Weekly Fee"),D(2),z("ngIf",a.chargeTimeType.value==="Monthly Fee"||a.chargeTimeType.value==="Annual Fee"),D(2),z("ngIf",!(a.chargeTimeType.value==="Monthly Fee"||a.chargeTimeType.value==="Annual Fee"||a.chargeTimeType.value==="Specified due date"||a.chargeTimeType.value==="Weekly Fee")),D(2),z("ngIf",a.chargeTimeType.value==="Weekly Fee"||a.chargeTimeType.value==="Annual Fee"||a.chargeTimeType.value==="Specified due date");}}function x1(e,m){e&1&&(x(0,"th",36),b(1," Actions "),w());}function _1(e,m){if(e&1){let a=Kt();x(0,"td",37),b(1,`
        `),x(2,"button",42),re("click",function(){let r=ot(a).$implicit,d=K();return at(d.deleteCharge(r))}),b(3,`
          `),fe(4,"fa-icon",43),b(5,`
        `),w(),b(6,`
      `),w();}}function C1(e,m){e&1&&fe(0,"tr",44);}function v1(e,m){e&1&&fe(0,"tr",45);}function g1(e,m){e&1&&(x(0,"th",36),b(1," Name "),w());}function h1(e,m){if(e&1&&(x(0,"td",37),b(1),w()),e&2){let a=m.$implicit;D(),Y0$1(" ",a.name,",",a.currency.displaySymbol," ");}}function S1(e,m){e&1&&(x(0,"th",36),b(1," Type "),w());}function y1(e,m){if(e&1&&(x(0,"td",37),b(1),w()),e&2){let a=m.$implicit;D(),it(" ",a.chargeCalculationType.value," ");}}function D1(e,m){e&1&&(x(0,"th",36),b(1," Amount "),w());}function b1(e,m){if(e&1&&(x(0,"td",37),b(1),nee(2,"number"),w()),e&2){let a=m.$implicit;D(),it(" ",ree(2,1,a.amount)," ");}}function T1(e,m){e&1&&(x(0,"th",36),b(1," Collected On "),w());}function E1(e,m){if(e&1&&(x(0,"td",37),b(1),w()),e&2){let a=m.$implicit;D(),it(" ",a.chargeTimeType.value," ");}}function A1(e,m){e&1&&fe(0,"tr",44);}function I1(e,m){e&1&&fe(0,"tr",45);}function L1(e,m){e&1&&(x(0,"th",36),b(1," Type "),w());}function F1(e,m){if(e&1&&(x(0,"td",37),b(1),w()),e&2){let a=m.$implicit;D(),it(" ",a.type.name," ");}}function w1(e,m){e&1&&(x(0,"th",36),b(1," Value "),w());}function P1(e,m){if(e&1&&(x(0,"td",37),b(1),w()),e&2){let a=m.$implicit;D(),it(" ",a.value," ");}}function R1(e,m){e&1&&(x(0,"th",36),b(1," Description "),w());}function O1(e,m){if(e&1&&(x(0,"td",37),b(1),w()),e&2){let a=m.$implicit;D(),it(" ",a.description," ");}}function M1(e,m){e&1&&(x(0,"th",36),b(1," Actions "),w());}function N1(e,m){if(e&1){let a=Kt();x(0,"td",37),b(1,`
        `),x(2,"button",42),re("click",function(){let r=ot(a).index,d=K();return at(d.deleteCollateral(r))}),b(3,`
          `),fe(4,"fa-icon",43),b(5,`
        `),w(),b(6,`
      `),w();}}function k1(e,m){e&1&&fe(0,"tr",44);}function G1(e,m){e&1&&fe(0,"tr",45);}var Te=(()=>{class e{dialog;datePipe;settingsService;loansAccountProductTemplate;loansAccountTemplate;loansAccountFormValid;collateralOptions;chargeData;chargesDataSource=[];overDueChargesDataSource=[];collateralDataSource=[];chargesDisplayedColumns=["name","chargeCalculationType","amount","chargeTimeType","date","action"];overdueChargesDisplayedColumns=["name","type","amount","collectedon"];loanCollateralDisplayedColumns=["type","value","description","action"];pristine=true;constructor(a,l,r){this.dialog=a,this.datePipe=l,this.settingsService=r;}ngOnInit(){this.loansAccountTemplate.charges&&(this.chargesDataSource=this.loansAccountTemplate.charges.map(a=>Re(O({},a),{id:a.chargeId}))||[]);}ngOnChanges(){this.loansAccountProductTemplate&&(this.chargeData=this.loansAccountProductTemplate.chargeOptions,this.loansAccountProductTemplate.overdueCharges&&(this.overDueChargesDataSource=this.loansAccountProductTemplate.overdueCharges));}addCharge(a){this.chargesDataSource=this.chargesDataSource.concat([a.value]),a.value="",this.pristine=false;}editChargeAmount(a){let l=[new r({controlName:"amount",label:"Amount",value:a.amount,type:"number",required:false})],r$1={title:"Edit Charge Amount",layout:{addButtonText:"Confirm"},formfields:l};this.dialog.open(_Ne,{data:r$1}).afterClosed().subscribe(h=>{if(h.data){let I=Re(O({},a),{amount:h.data.value.amount});this.chargesDataSource.splice(this.chargesDataSource.indexOf(a),1,I),this.chargesDataSource=this.chargesDataSource.concat([]);}}),this.pristine=false;}editChargeDate(a){let l=[new m({controlName:"date",label:"Date",value:a.dueDate||a.feeOnMonthDay||"",type:"datetime-local",required:false})],r={title:"Edit Charge Date",layout:{addButtonText:"Confirm"},formfields:l};this.dialog.open(_Ne,{data:r}).afterClosed().subscribe(h=>{if(h.data){let I,R=this.settingsService.dateFormat,Ut=this.datePipe.transform(h.data.value.date,R);switch(a.chargeTimeType.value){case "Specified due date":case "Weekly Fee":I=Re(O({},a),{dueDate:Ut});break;case "Annual Fee":I=Re(O({},a),{feeOnMonthDay:Ut});break}this.chargesDataSource.splice(this.chargesDataSource.indexOf(a),1,I),this.chargesDataSource=this.chargesDataSource.concat([]);}}),this.pristine=false;}editChargeFeeInterval(a){let l=[new r({controlName:"feeInterval",label:"Fee Interval",value:a.feeInterval,type:"text",required:false})],r$1={title:"Edit Charge Fee Interval",layout:{addButtonText:"Confirm"},formfields:l};this.dialog.open(_Ne,{data:r$1}).afterClosed().subscribe(h=>{if(h.data){let I=Re(O({},a),{feeInterval:h.data.value.feeInterval});this.chargesDataSource.splice(this.chargesDataSource.indexOf(a),1,I),this.chargesDataSource=this.chargesDataSource.concat([]);}}),this.pristine=false;}deleteCharge(a){this.dialog.open(CNe,{data:{deleteContext:`charge ${a.name}`}}).afterClosed().subscribe(r=>{r.delete&&(this.chargesDataSource.splice(this.chargesDataSource.indexOf(a),1),this.chargesDataSource=this.chargesDataSource.concat([]),this.pristine=false);});}addCollateral(){this.dialog.open(Qi,{data:{collateralOptions:this.collateralOptions}}).afterClosed().subscribe(l=>{if(l.addCollateralForm){let r={type:l.addCollateralForm.value.type,value:l.addCollateralForm.value.value,description:l.addCollateralForm.value.description};this.collateralDataSource=this.collateralDataSource.concat(r);}});}deleteCollateral(a){this.dialog.open(CNe,{data:{deleteContext:"collateral"}}).afterClosed().subscribe(r=>{r.delete&&(this.collateralDataSource.splice(this.collateralDataSource.indexOf(a),1),this.collateralDataSource=this.collateralDataSource.concat([]),this.pristine=false);});}get loansAccountCharges(){return {charges:this.chargesDataSource,collateral:this.collateralDataSource}}static \u0275fac=function(l){return new(l||e)(T(Iv),T(_te),T(yF))};static \u0275cmp=N({type:e,selectors:[["mifosx-loans-account-charges-step"]],inputs:{loansAccountProductTemplate:"loansAccountProductTemplate",loansAccountTemplate:"loansAccountTemplate",loansAccountFormValid:"loansAccountFormValid",collateralOptions:"collateralOptions"},standalone:false,features:[Pe],decls:182,vars:13,consts:[["charge",""],["fxLayout","row wrap","fxLayoutGap","2%","fxLayout.lt-md","column"],["fxFlex","48%"],[3,"value",4,"ngFor","ngForOf"],["fxFlex","48%","fxFlexAlign","center"],["type","button","mat-raised-button","","color","primary",3,"click","disabled"],["icon","plus"],["fxFlex","98%","mat-table","",1,"mat-elevation-z1",3,"dataSource","hidden"],["matColumnDef","name"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","chargeCalculationType"],["matColumnDef","amount"],["matColumnDef","chargeTimeType"],["matColumnDef","date"],["matColumnDef","action"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["fxFlex","98%"],["fxFlex","98%",1,"mat-h4"],["mat-table","",1,"mat-elevation-z1",3,"dataSource"],["matColumnDef","type"],["matColumnDef","collectedon"],["fxFlex","50%"],["fxLayout","column","fxFlex","50%",1,"tableName"],["fxLayout","column","fxFlex","50%"],["fxLayout","row","fxLayoutAlign","flex-end"],["mat-raised-button","","color","primary",3,"click"],["matColumnDef","value"],["matColumnDef","description"],["fxLayout","row","fxLayout.xs","column","fxLayoutAlign","center","fxLayoutGap","2%",1,"margin-t"],["mat-raised-button","","matStepperPrevious",""],["icon","arrow-left"],["mat-raised-button","","matStepperNext","",3,"disabled"],["icon","arrow-right"],[3,"value"],["mat-header-cell",""],["mat-cell",""],["mat-icon-button","","color","primary",3,"click"],["icon","pen"],[4,"ngIf"],["mat-icon-button","","color","primary",3,"click",4,"ngIf"],["mat-icon-button","","color","warn",3,"click"],["icon","trash"],["mat-header-row",""],["mat-row",""]],template:function(l,r){if(l&1){let d=Kt();x(0,"div",1),b(1,`

  `),x(2,"mat-form-field",2),b(3,`
    `),x(4,"mat-label"),b(5,"Charge"),w(),b(6,`
    `),x(7,"mat-select",null,0),b(9,`
      `),Ie(10,t1,2,2,"mat-option",3),b(11,`
    `),w(),b(12,`
  `),w(),b(13,`

  `),x(14,"div",4),b(15,`
    `),x(16,"button",5),re("click",function(){ot(d);let I=Nt(8);return at(r.addCharge(I))}),b(17,`
      `),fe(18,"fa-icon",6),b(19,`\xA0\xA0
      Add
    `),w(),b(20,`
  `),w(),b(21,`

  `),x(22,"table",7),b(23,`

    `),Rl$1(24,8),b(25,`
      `),Ie(26,e1,2,0,"th",9),b(27,`
      `),Ie(28,n1,2,1,"td",10),b(29,`
    `),zl$1(),b(30,`

    `),Rl$1(31,11),b(32,`
      `),Ie(33,i1,2,0,"th",9),b(34,`
      `),Ie(35,a1,2,1,"td",10),b(36,`
    `),zl$1(),b(37,`

    `),Rl$1(38,12),b(39,`
      `),Ie(40,o1,2,0,"th",9),b(41,`
      `),Ie(42,r1,7,1,"td",10),b(43,`
    `),zl$1(),b(44,`

    `),Rl$1(45,13),b(46,`
      `),Ie(47,m1,2,0,"th",9),b(48,`
      `),Ie(49,l1,2,1,"td",10),b(50,`
    `),zl$1(),b(51,`

    `),Rl$1(52,14),b(53,`
      `),Ie(54,c1,2,0,"th",9),b(55,`
      `),Ie(56,f1,10,4,"td",10),b(57,`
    `),zl$1(),b(58,`

    `),Rl$1(59,15),b(60,`
      `),Ie(61,x1,2,0,"th",9),b(62,`
      `),Ie(63,_1,7,0,"td",10),b(64,`
    `),zl$1(),b(65,`

    `),Ie(66,C1,1,0,"tr",16),b(67,`
    `),Ie(68,v1,1,0,"tr",17),b(69,`

  `),w(),b(70,`

  `),fe(71,"mat-divider",18),b(72,`

  `),x(73,"h4",19),b(74,"Overdue Charges"),w(),b(75,`

  `),x(76,"table",20),b(77,`

    `),Rl$1(78,8),b(79,`
      `),Ie(80,g1,2,0,"th",9),b(81,`
      `),Ie(82,h1,2,2,"td",10),b(83,`
    `),zl$1(),b(84,`

    `),Rl$1(85,21),b(86,`
      `),Ie(87,S1,2,0,"th",9),b(88,`
      `),Ie(89,y1,2,1,"td",10),b(90,`
    `),zl$1(),b(91,`

    `),Rl$1(92,12),b(93,`
      `),Ie(94,D1,2,0,"th",9),b(95,`
      `),Ie(96,b1,3,3,"td",10),b(97,`
    `),zl$1(),b(98,`

    `),Rl$1(99,22),b(100,`
      `),Ie(101,T1,2,0,"th",9),b(102,`
      `),Ie(103,E1,2,1,"td",10),b(104,`
    `),zl$1(),b(105,`

    `),Ie(106,A1,1,0,"tr",16),b(107,`
    `),Ie(108,I1,1,0,"tr",17),b(109,`
  `),w(),b(110,`

  `),fe(111,"mat-divider",18),b(112,`

  `),x(113,"div",23),b(114,`
    `),x(115,"div",24),b(116,`
      `),x(117,"h4",19),b(118,"Collaterals Data"),w(),b(119,`
    `),w(),b(120,`

    `),x(121,"div",25),b(122,`
      `),x(123,"div",26),b(124,`
        `),x(125,"button",27),re("click",function(){return r.addCollateral()}),b(126,`
          `),fe(127,"fa-icon",6),b(128,`\xA0\xA0Add
        `),w(),b(129,`
      `),w(),b(130,`
    `),w(),b(131,`
  `),w(),b(132,`

  `),x(133,"table",20),b(134,`

    `),Rl$1(135,21),b(136,`
      `),Ie(137,L1,2,0,"th",9),b(138,`
      `),Ie(139,F1,2,1,"td",10),b(140,`
    `),zl$1(),b(141,`

    `),Rl$1(142,28),b(143,`
      `),Ie(144,w1,2,0,"th",9),b(145,`
      `),Ie(146,P1,2,1,"td",10),b(147,`
    `),zl$1(),b(148,`

    `),Rl$1(149,29),b(150,`
      `),Ie(151,R1,2,0,"th",9),b(152,`
      `),Ie(153,O1,2,1,"td",10),b(154,`
    `),zl$1(),b(155,`

    `),Rl$1(156,15),b(157,`
      `),Ie(158,M1,2,0,"th",9),b(159,`
      `),Ie(160,N1,7,0,"td",10),b(161,`
    `),zl$1(),b(162,`

    `),Ie(163,k1,1,0,"tr",16),b(164,`
    `),Ie(165,G1,1,0,"tr",17),b(166,`
  `),w(),b(167,`

`),w(),b(168,`

`),x(169,"div",30),b(170,`
  `),x(171,"button",31),b(172,`
    `),fe(173,"fa-icon",32),b(174,`\xA0\xA0
    Previous
  `),w(),b(175,`
  `),x(176,"button",33),b(177,`
    Next\xA0\xA0
    `),fe(178,"fa-icon",34),b(179,`
  `),w(),b(180,`
`),w(),b(181,`
`);}if(l&2){let d=Nt(8);D(10),z("ngForOf",r.chargeData),D(6),z("disabled",!d.value),D(6),z("dataSource",r.chargesDataSource)("hidden",r.chargesDataSource.length===0),D(44),z("matHeaderRowDef",r.chargesDisplayedColumns),D(2),z("matRowDefColumns",r.chargesDisplayedColumns),D(8),z("dataSource",r.overDueChargesDataSource),D(30),z("matHeaderRowDef",r.overdueChargesDisplayedColumns),D(2),z("matRowDefColumns",r.overdueChargesDisplayedColumns),D(25),z("dataSource",r.collateralDataSource),D(30),z("matHeaderRowDef",r.loanCollateralDisplayedColumns),D(2),z("matRowDefColumns",r.loanCollateralDisplayedColumns),D(11),z("disabled",!r.loansAccountFormValid);}},dependencies:[ii,Yo$1,Oc$1,go$1,Mc,eA,A6,wc$1,Ti$1,Sn$1,yo$1,Th,Ri$1,Br$1,ja$1,YWe,KWe,uqe,mqe,bqe,pqe,fqe,xqe,gqe,vqe,Cqe,Mqe,yte,_te],styles:["table[_ngcontent-%COMP%]{width:100%}.mat-elevation-z1[_ngcontent-%COMP%]{margin:1em 0 1.5em}.margin-t[_ngcontent-%COMP%]{margin-top:1em}h4[_ngcontent-%COMP%]{font-weight:500;margin:1em 0}h3[_ngcontent-%COMP%]{font-weight:500}mat-divider[_ngcontent-%COMP%]{margin:1em 0}.margin-v[_ngcontent-%COMP%]{margin:1em 0}.margin-b[_ngcontent-%COMP%]{margin:0 0 1em}.tableName[_ngcontent-%COMP%]{padding-left:2%}"],changeDetection:1})}return e})();var B1=()=>["../"];function j1(e,m){if(e&1&&(x(0,"div",2),b(1,`
    `),x(2,"span",3),b(3,"Loan officer:"),w(),b(4,`
    `),x(5,"span",4),b(6),nee(7,"find"),w(),b(8,`
  `),w()),e&2){let a=K();D(6),Dt(see(7,1,a.loansAccount.loanOfficerId,a.loansAccountProductTemplate.loanOfficerOptions,"id","displayName"));}}function V1(e,m){if(e&1&&(x(0,"div",2),b(1,`
    `),x(2,"span",3),b(3,"Loan purpose:"),w(),b(4,`
    `),x(5,"span",4),b(6),nee(7,"find"),w(),b(8,`
  `),w()),e&2){let a=K();D(6),Dt(see(7,1,a.loansAccount.loanPurposeId,a.loansAccountProductTemplate.loanPurposeOptions,"id","name"));}}function q1(e,m){if(e&1&&(x(0,"div",2),b(1,`
    `),x(2,"span",3),b(3,"Fund:"),w(),b(4,`
    `),x(5,"span",4),b(6),nee(7,"find"),w(),b(8,`
  `),w()),e&2){let a=K();D(6),Dt(see(7,1,a.loansAccount.fundId,a.loansAccountProductTemplate.fundOptions,"id","name"));}}function H1(e,m){if(e&1&&(x(0,"div",2),b(1,`
    `),x(2,"span",3),b(3,"External id:"),w(),b(4,`
    `),x(5,"span",4),b(6),w(),b(7,`
  `),w()),e&2){let a=K();D(6),Dt(a.loansAccount.externalId);}}function $1(e,m){if(e&1&&(x(0,"div",2),b(1,`
    `),x(2,"span",3),b(3,"First repayment on:"),w(),b(4,`
    `),x(5,"span",4),b(6),nee(7,"date"),w(),b(8,`
  `),w()),e&2){let a=K();D(6),Dt(ree(7,1,a.loansAccount.repaymentsStartingFromDate));}}function W1(e,m){if(e&1&&(x(0,"div",2),b(1,`
    `),x(2,"span",3),b(3,"Interest charged from:"),w(),b(4,`
    `),x(5,"span",4),b(6),nee(7,"date"),w(),b(8,`
  `),w()),e&2){let a=K();D(6),Dt(ree(7,1,a.loansAccount.interestChargedFromDate));}}function U1(e,m){if(e&1&&(x(0,"div",2),b(1,`
    `),x(2,"span",3),b(3,"Nominal interest rate:"),w(),b(4,`
    `),x(5,"span",4),b(6),w(),b(7,`
  `),w()),e&2){let a=K();D(6),Y0$1("",a.loansAccount.interestRatePerPeriod,"\xA0\xA0",a.loansAccountProductTemplate.interestRateFrequencyType.value);}}function z1(e,m){if(e&1&&(x(0,"div",2),b(1,`
    `),x(2,"span",3),b(3,"Interest method: "),w(),b(4,`
    `),x(5,"span",4),b(6),w(),b(7,`
  `),w()),e&2){let a=K();D(6),Dt(a.loansAccount.interestType);}}function Q1(e,m){if(e&1&&(x(0,"div",2),b(1,`
    `),x(2,"span",3),b(3,"Is Equal Amortization:"),w(),b(4,`
    `),x(5,"span",4),b(6),w(),b(7,`
  `),w()),e&2){let a=K();D(6),Dt(a.loansAccount.isEqualAmortization);}}function Y1(e,m){if(e&1&&(x(0,"div",2),b(1,`
    `),x(2,"span",3),b(3,"Calculate interest for exact days in partial period:"),w(),b(4,`
    `),x(5,"span",4),b(6),w(),b(7,`
  `),w()),e&2){let a=K();D(6),Dt(a.loansAccount.allowPartialPeriodInterestCalcualtion);}}function J1(e,m){if(e&1&&(x(0,"div",2),b(1,`
    `),x(2,"span",3),b(3,"Arrears tolerance: "),w(),b(4,`
    `),x(5,"span",4),b(6),w(),b(7,`
  `),w()),e&2){let a=K();D(6),Y0$1("",a.loansAccount.inArrearsTolerance,"\xA0",a.loansAccountProductTemplate.currency.displaySymbol);}}function K1(e,m){if(e&1&&(x(0,"div",2),b(1,`
    `),x(2,"span",3),b(3,"Interest free period: "),w(),b(4,`
    `),x(5,"span",4),b(6),w(),b(7,`
  `),w()),e&2){let a=K();D(6),Dt(a.loansAccount.graceOnInterestCharged);}}function X1(e,m){if(e&1&&(x(0,"div",2),b(1,`
    `),x(2,"span",3),b(3,"On principal payment: "),w(),b(4,`
    `),x(5,"span",4),b(6),w(),b(7,`
  `),w()),e&2){let a=K();D(6),Dt(a.loansAccount.graceOnPrincipalPayment);}}function Z1(e,m){if(e&1&&(x(0,"div",2),b(1,`
    `),x(2,"span",3),b(3,"On interest payment: "),w(),b(4,`
    `),x(5,"span",4),b(6),w(),b(7,`
  `),w()),e&2){let a=K();D(6),Dt(a.loansAccount.graceOnInterestPayment);}}function tf(e,m){if(e&1&&(x(0,"div",2),b(1,`
    `),x(2,"span",3),b(3,"On Arrears Aging: "),w(),b(4,`
    `),x(5,"span",4),b(6),w(),b(7,`
  `),w()),e&2){let a=K();D(6),Dt(a.loansAccount.graceOnArrearsAgeing);}}function ef(e,m){if(e&1&&(x(0,"div",2),b(1,`
    `),x(2,"span",3),b(3,"Is Topup Loan? "),w(),b(4,`
    `),x(5,"span",4),b(6),w(),b(7,`
  `),w()),e&2){let a=K();D(6),Dt(a.loansAccount.isTopup);}}function nf(e,m){if(e&1&&(x(0,"div",2),b(1,`
    `),x(2,"span",3),b(3,"Days in month: "),w(),b(4,`
    `),x(5,"span",4),b(6),w(),b(7,`
  `),w()),e&2){let a=K();D(6),Dt(a.loansAccountProductTemplate?.daysInMonthType.value);}}function af(e,m){e&1&&(x(0,"th",23),b(1," Name "),w());}function of(e,m){if(e&1&&(x(0,"td",24),b(1),w()),e&2){let a=m.$implicit;D(),it(`
          `,a.name+", "+a.currency.displaySymbol,`
        `);}}function rf(e,m){e&1&&(x(0,"th",23),b(1," Type "),w());}function mf(e,m){if(e&1&&(x(0,"td",24),b(1),w()),e&2){let a=m.$implicit;D(),it(`
          `,a.chargeCalculationType.value,`
        `);}}function lf(e,m){e&1&&(x(0,"th",23),b(1," Amount "),w());}function cf(e,m){if(e&1&&(x(0,"td",24),b(1),w()),e&2){let a=m.$implicit;D(),it(`
          `,a.amount,`
        `);}}function sf(e,m){e&1&&(x(0,"th",23),b(1," Collected On "),w());}function pf(e,m){if(e&1&&(x(0,"td",24),b(1),w()),e&2){let a=m.$implicit;D(),it(`
          `,a.chargeTimeType.value,`
        `);}}function df(e,m){e&1&&(x(0,"th",23),b(1," Date "),w());}function uf(e,m){if(e&1&&(x(0,"span"),b(1),nee(2,"date"),w()),e&2){let a=K().$implicit;D(),it(`
            `,ree(2,1,a.dueDate)||"Unassigned",`
          `);}}function ff(e,m){if(e&1&&(x(0,"span"),b(1),nee(2,"date"),w()),e&2){let a=K().$implicit;D(),it(`
            `,ree(2,1,a.feeOnMonthDay)||"Unassigned",`
          `);}}function xf(e,m){e&1&&(x(0,"span"),b(1,`
            N/A
          `),w());}function _f(e,m){if(e&1&&(x(0,"td",24),b(1,`
          `),Ie(2,uf,3,3,"span",25),b(3,`
          `),Ie(4,ff,3,3,"span",25),b(5,`
          `),Ie(6,xf,2,0,"span",25),b(7,`
        `),w()),e&2){let a=m.$implicit;D(2),z("ngIf",a.chargeTimeType.value==="Specified due date"||a.chargeTimeType.value==="Weekly Fee"),D(2),z("ngIf",a.chargeTimeType.value==="Monthly Fee"||a.chargeTimeType.value==="Annual Fee"),D(2),z("ngIf",!(a.chargeTimeType.value==="Monthly Fee"||a.chargeTimeType.value==="Annual Fee"||a.chargeTimeType.value==="Specified due date"||a.chargeTimeType.value==="Weekly Fee"));}}function Cf(e,m){e&1&&fe(0,"tr",26);}function vf(e,m){e&1&&fe(0,"tr",27);}function gf(e,m){if(e&1&&(x(0,"div",12),b(1,`

    `),x(2,"h3",1),b(3,"Charges"),w(),b(4,`

    `),fe(5,"mat-divider",2),b(6,`

    `),x(7,"table",13),b(8,`

      `),Rl$1(9,14),b(10,`
        `),Ie(11,af,2,0,"th",15),b(12,`
        `),Ie(13,of,2,1,"td",16),b(14,`
      `),zl$1(),b(15,`

      `),Rl$1(16,17),b(17,`
        `),Ie(18,rf,2,0,"th",15),b(19,`
        `),Ie(20,mf,2,1,"td",16),b(21,`
      `),zl$1(),b(22,`

      `),Rl$1(23,18),b(24,`
        `),Ie(25,lf,2,0,"th",15),b(26,`
        `),Ie(27,cf,2,1,"td",16),b(28,`
      `),zl$1(),b(29,`

      `),Rl$1(30,19),b(31,`
        `),Ie(32,sf,2,0,"th",15),b(33,`
        `),Ie(34,pf,2,1,"td",16),b(35,`
      `),zl$1(),b(36,`

      `),Rl$1(37,20),b(38,`
        `),Ie(39,df,2,0,"th",15),b(40,`
        `),Ie(41,_f,8,3,"td",16),b(42,`
      `),zl$1(),b(43,`

      `),Ie(44,Cf,1,0,"tr",21),b(45,`
      `),Ie(46,vf,1,0,"tr",22),b(47,`

    `),w(),b(48,`

  `),w()),e&2){let a=K();D(7),z("dataSource",a.loansAccount.charges),D(37),z("matHeaderRowDef",a.chargesDisplayedColumns),D(2),z("matRowDefColumns",a.chargesDisplayedColumns);}}function hf(e,m){e&1&&(x(0,"th",23),b(1," Name "),w());}function Sf(e,m){if(e&1&&(x(0,"td",24),b(1),w()),e&2){let a=m.$implicit;D(),Y0$1(" ",a.name,",",a.currency.displaySymbol," ");}}function yf(e,m){e&1&&(x(0,"th",23),b(1," Type "),w());}function Df(e,m){if(e&1&&(x(0,"td",24),b(1),w()),e&2){let a=m.$implicit;D(),it(" ",a.chargeCalculationType.value," ");}}function bf(e,m){e&1&&(x(0,"th",23),b(1," Amount "),w());}function Tf(e,m){if(e&1&&(x(0,"td",24),b(1),nee(2,"number"),w()),e&2){let a=m.$implicit;D(),it(" ",ree(2,1,a.amount)," ");}}function Ef(e,m){e&1&&(x(0,"th",23),b(1," Collected On "),w());}function Af(e,m){if(e&1&&(x(0,"td",24),b(1),w()),e&2){let a=m.$implicit;D(),it(" ",a.chargeTimeType.value," ");}}function If(e,m){e&1&&fe(0,"tr",26);}function Lf(e,m){e&1&&fe(0,"tr",27);}function Ff(e,m){if(e&1&&(x(0,"div",12),b(1,`

    `),x(2,"h3",28),b(3,"Overdue Charges"),w(),b(4,`

    `),fe(5,"mat-divider",29),b(6,`

    `),x(7,"table",30),b(8,`

      `),Rl$1(9,14),b(10,`
        `),Ie(11,hf,2,0,"th",15),b(12,`
        `),Ie(13,Sf,2,2,"td",16),b(14,`
      `),zl$1(),b(15,`

      `),Rl$1(16,31),b(17,`
        `),Ie(18,yf,2,0,"th",15),b(19,`
        `),Ie(20,Df,2,1,"td",16),b(21,`
      `),zl$1(),b(22,`

      `),Rl$1(23,18),b(24,`
        `),Ie(25,bf,2,0,"th",15),b(26,`
        `),Ie(27,Tf,3,3,"td",16),b(28,`
      `),zl$1(),b(29,`

      `),Rl$1(30,32),b(31,`
        `),Ie(32,Ef,2,0,"th",15),b(33,`
        `),Ie(34,Af,2,1,"td",16),b(35,`
      `),zl$1(),b(36,`

      `),Ie(37,If,1,0,"tr",21),b(38,`
      `),Ie(39,Lf,1,0,"tr",22),b(40,`
    `),w(),b(41,`
  `),w()),e&2){let a=K();D(7),z("dataSource",a.loansAccountProductTemplate.overdueCharges),D(30),z("matHeaderRowDef",a.overdueChargesDisplayedColumns),D(2),z("matRowDefColumns",a.overdueChargesDisplayedColumns);}}var ln=(()=>{class e{loansAccountTemplate;loansAccountProductTemplate;loansAccount;submit=new B;chargesDisplayedColumns=["name","chargeCalculationType","amount","chargeTimeType","date"];overdueChargesDisplayedColumns=["name","type","amount","collectedon"];constructor(){}ngOnInit(){}static \u0275fac=function(l){return new(l||e)};static \u0275cmp=N({type:e,selectors:[["mifosx-loans-account-preview-step"]],inputs:{loansAccountTemplate:"loansAccountTemplate",loansAccountProductTemplate:"loansAccountProductTemplate",loansAccount:"loansAccount"},outputs:{submit:"submit"},standalone:false,decls:179,vars:81,consts:[["fxLayout","row wrap","fxLayout.lt-md","column"],["fxFlexFill","",1,"mat-h3"],["fxFlexFill",""],["fxFlex","40%"],["fxFlex","60%"],["fxFlexFill","",4,"ngIf"],["fxFlexFill","","fxLayout","row wrap","fxLayout.lt-md","column",4,"ngIf"],["fxLayout","row","fxLayout.xs","column","fxLayoutAlign","center","fxLayoutGap","2%",1,"margin-t"],["mat-raised-button","","matStepperPrevious",""],["icon","arrow-left"],["mat-raised-button","",3,"routerLink"],["mat-raised-button","","color","primary",3,"click"],["fxFlexFill","","fxLayout","row wrap","fxLayout.lt-md","column"],["fxFlexFill","","mat-table","",1,"mat-elevation-z1",3,"dataSource"],["matColumnDef","name"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","chargeCalculationType"],["matColumnDef","amount"],["matColumnDef","chargeTimeType"],["matColumnDef","date"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["mat-header-cell",""],["mat-cell",""],[4,"ngIf"],["mat-header-row",""],["mat-row",""],["fxFlex","98%",1,"mat-h3"],["fxFlex","98%"],["mat-table","",1,"mat-elevation-z1",3,"dataSource"],["matColumnDef","type"],["matColumnDef","collectedon"]],template:function(l,r){l&1&&(x(0,"div",0),b(1,`

  `),x(2,"h3",1),b(3,"Details"),w(),b(4,`

  `),fe(5,"mat-divider",2),b(6,`

  `),x(7,"div",2),b(8,`
    `),x(9,"span",3),b(10,"Product:"),w(),b(11,`
    `),x(12,"span",4),b(13),nee(14,"find"),w(),b(15,`
  `),w(),b(16,`

  `),Ie(17,j1,9,6,"div",5),b(18,`

  `),Ie(19,V1,9,6,"div",5),b(20,`

  `),Ie(21,q1,9,6,"div",5),b(22,`

  `),x(23,"div",2),b(24,`
    `),x(25,"span",3),b(26,"Submitted on:"),w(),b(27,`
    `),x(28,"span",4),b(29),nee(30,"date"),w(),b(31,`
  `),w(),b(32,`

  `),x(33,"div",2),b(34,`
    `),x(35,"span",3),b(36,"Disbursement on:"),w(),b(37,`
    `),x(38,"span",4),b(39),nee(40,"date"),w(),b(41,`
  `),w(),b(42,`

  `),Ie(43,H1,8,1,"div",5),b(44,`

  `),x(45,"h3",1),b(46,"Terms"),w(),b(47,`

  `),fe(48,"mat-divider",2),b(49,`

  `),x(50,"div",2),b(51,`
    `),x(52,"span",3),b(53,"Principal:"),w(),b(54,`
    `),x(55,"span",4),b(56),w(),b(57,`
  `),w(),b(58,`

  `),x(59,"div",2),b(60,`
    `),x(61,"span",3),b(62,"Loan term:"),w(),b(63,`
    `),x(64,"span",4),b(65),nee(66,"find"),w(),b(67,`
  `),w(),b(68,`

  `),x(69,"div",2),b(70,`
    `),x(71,"span",3),b(72,"Number of repayments:"),w(),b(73,`
    `),x(74,"span",4),b(75),w(),b(76,`
  `),w(),b(77,`

  `),x(78,"div",2),b(79,`
    `),x(80,"span",3),b(81,"Repaid every:"),w(),b(82,`
    `),x(83,"span",4),b(84),nee(85,"find"),nee(86,"find"),nee(87,"find"),w(),b(88,`
  `),w(),b(89,`

  `),Ie(90,$1,9,3,"div",5),b(91,`

  `),Ie(92,W1,9,3,"div",5),b(93,`

  `),Ie(94,U1,8,2,"div",5),b(95,`

  `),Ie(96,z1,8,1,"div",5),b(97,`

  `),Ie(98,Q1,8,1,"div",5),b(99,`

  `),x(100,"div",2),b(101,`
    `),x(102,"span",3),b(103,"Amortization"),w(),b(104,`
    `),x(105,"span",4),b(106),nee(107,"find"),w(),b(108,`
  `),w(),b(109,`

  `),x(110,"div",2),b(111,`
    `),x(112,"span",3),b(113,"Interest calculation period: "),w(),b(114,`
    `),x(115,"span",4),b(116),nee(117,"find"),w(),b(118,`
  `),w(),b(119,`

  `),Ie(120,Y1,8,1,"div",5),b(121,`

  `),Ie(122,J1,8,2,"div",5),b(123,`

  `),Ie(124,K1,8,1,"div",5),b(125,`

  `),x(126,"div",2),b(127,`
    `),x(128,"span",3),b(129,"Repayment strategy: "),w(),b(130,`
    `),x(131,"span",4),b(132),nee(133,"find"),w(),b(134,`
  `),w(),b(135,`

  `),x(136,"h3",1),b(137,"Moratorium"),w(),b(138,`

  `),fe(139,"mat-divider",2),b(140,`

  `),Ie(141,X1,8,1,"div",5),b(142,`

  `),Ie(143,Z1,8,1,"div",5),b(144,`

  `),Ie(145,tf,8,1,"div",5),b(146,`

  `),Ie(147,ef,8,1,"div",5),b(148,`

  `),x(149,"div",2),b(150,`
    `),x(151,"span",3),b(152,"Recalculate Interest: "),w(),b(153,`
    `),x(154,"span",4),b(155),w(),b(156,`
  `),w(),b(157,`

  `),Ie(158,nf,8,1,"div",5),b(159,`

  `),Ie(160,gf,49,3,"div",6),b(161,`

  `),Ie(162,Ff,42,3,"div",6),b(163,`

`),w(),b(164,`

`),x(165,"div",7),b(166,`
  `),x(167,"button",8),b(168,`
    `),fe(169,"fa-icon",9),b(170,`\xA0\xA0
    Previous
  `),w(),b(171,`
  `),x(172,"button",10),b(173,`
    Cancel
  `),w(),b(174,`
  `),x(175,"button",11),re("click",function(){return r.submit.emit()}),b(176,`
    Submit
  `),w(),b(177,`
`),w(),b(178,`
`)),l&2&&(D(13),Dt(see(14,36,r.loansAccount.productId,r.loansAccountTemplate.productOptions,"id","name")),D(4),z("ngIf",r.loansAccount.loanOfficerId),D(2),z("ngIf",r.loansAccount.loanPurposeId),D(2),z("ngIf",r.loansAccount.fundId),D(8),Dt(ree(30,41,r.loansAccount.submittedOnDate)),D(10),Dt(ree(40,43,r.loansAccount.expectedDisbursementDate)),D(4),z("ngIf",r.loansAccount.externalId),D(13),Y0$1("",r.loansAccount.principal," ",r.loansAccountProductTemplate.currency.DisplaySymbol),D(9),Y0$1("",r.loansAccount.loanTermFrequency,`
      `,see(66,45,r.loansAccount.loanTermFrequencyType,r.loansAccountProductTemplate.termFrequencyTypeOptions,"id","name")),D(10),Dt(r.loansAccount.numberOfRepayments),D(9),bk("",r.loansAccount.repaymentEvery,`
      `,see(85,50,r.loansAccount.repaymentFrequencyType,r.loansAccountProductTemplate.termFrequencyTypeOptions,"id","name"),`
      `,see(86,55,r.loansAccount.repaymentFrequencyNthDayType,r.loansAccountProductTemplate.repaymentFrequencyNthDayTypeOptions,"id","name"),`
      `,see(87,60,r.loansAccount.repaymentFrequencyDayOfWeekType,r.loansAccountProductTemplate.repaymentFrequencyDaysOfWeekTypeOptions,"id","name")),D(6),z("ngIf",r.loansAccount.repaymentsStartingFromDate),D(2),z("ngIf",r.loansAccount.interestChargedFromDate),D(2),z("ngIf",r.loansAccount.interestRatePerPeriod),D(2),z("ngIf",r.loansAccount.interestType),D(2),z("ngIf",r.loansAccount.isEqualAmortization),D(8),Dt(see(107,65,r.loansAccount.amortizationType,r.loansAccountProductTemplate.amortizationTypeOptions,"id","value")),D(10),Dt(see(117,70,r.loansAccount.interestCalculationPeriodType,r.loansAccountProductTemplate.interestCalculationPeriodTypeOptions,"id","value")),D(4),z("ngIf",r.loansAccount.allowPartialPeriodInterestCalcualtion),D(2),z("ngIf",r.loansAccount.inArrearsTolerance),D(2),z("ngIf",r.loansAccount.graceOnInterestCharged),D(8),Dt(see(133,75,r.loansAccount.transactionProcessingStrategyId,r.loansAccountTemplate.transactionProcessingStrategyOptions,"id","name")),D(9),z("ngIf",r.loansAccount.graceOnPrincipalPayment),D(2),z("ngIf",r.loansAccount.graceOnInterestPayment),D(2),z("ngIf",r.loansAccount.graceOnArrearsAgeing),D(2),z("ngIf",r.loansAccount.isTopup),D(8),Dt(r.loansAccountProductTemplate?.isInterestRecalculationEnabled?"Yes":"No"),D(3),z("ngIf",r.loansAccountProductTemplate?.daysInMonthType),D(2),z("ngIf",r.loansAccount.charges.length),D(2),z("ngIf",r.loansAccountProductTemplate.overdueCharges.length),D(10),z("routerLink",$o$1(80,B1)));},dependencies:[Yo$1,Oc$1,go$1,Mc,eA,R2,wc$1,Sn$1,Th,KWe,uqe,mqe,bqe,pqe,fqe,xqe,gqe,vqe,Cqe,Mqe,bp$1,yte,_te,cV],styles:["table[_ngcontent-%COMP%]{width:100%}.mat-elevation-z1[_ngcontent-%COMP%]{margin:1em 0 1.5em}h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%]{margin:0;font-weight:500}span[_ngcontent-%COMP%]{margin:.5em 0}mat-divider[_ngcontent-%COMP%]{margin:0 0 .5em}.margin-t[_ngcontent-%COMP%]{margin-top:1em}"],changeDetection:1})}return e})();function wf(e,m){e&1&&(b(0,`
      `),fe(1,"fa-icon",13),b(2,`
    `));}function Pf(e,m){e&1&&(b(0,`
      `),fe(1,"fa-icon",13),b(2,`
    `));}function Rf(e,m){e&1&&(b(0,`
      `),fe(1,"fa-icon",14),b(2,`
    `));}function Of(e,m){e&1&&(b(0,`
      `),fe(1,"fa-icon",15),b(2,`
    `));}function Mf(e,m){e&1&&(b(0,`
      `),fe(1,"fa-icon",16),b(2,`
    `));}function Nf(e,m){e&1&&b(0,"DETAILS");}function kf(e,m){e&1&&b(0,"TERMS");}function Gf(e,m){e&1&&b(0,"CHARGES");}function Bf(e,m){e&1&&b(0,"PREVIEW");}function jf(e,m){if(e&1){let a=Kt();x(0,"mat-step",17),b(1,`

      `),Ie(2,Bf,1,0,"ng-template",9),b(3,`

      `),x(4,"mifosx-loans-account-preview-step",18),re("submit",function(){ot(a);let r=K();return at(r.submit())}),b(5,`
      `),w(),b(6,`

    `),w();}if(e&2){let a=K();D(4),z("loansAccountTemplate",a.loansAccountTemplate)("loansAccountProductTemplate",a.loansAccountProductTemplate)("loansAccount",a.loansAccount);}}var Ki=(()=>{class e{route;router;datePipe;loansService;settingsService;loansAccountDetailsStep;loansAccountTermsStep;loansAccountChargesStep;loansAccountTemplate;loansAccountProductTemplate;collateralOptions;constructor(a,l,r,d,h){this.route=a,this.router=l,this.datePipe=r,this.loansService=d,this.settingsService=h,this.route.data.subscribe(I=>{this.loansAccountTemplate=I.loansAccountTemplate;});}ngOnInit(){}setTemplate(a){this.loansAccountProductTemplate=a,this.loansService.getLoansCollateralTemplateResource(this.loansAccountProductTemplate.loanProductId).subscribe(l=>{this.collateralOptions=l.loanCollateralOptions;});}get loansAccountDetailsForm(){return this.loansAccountDetailsStep.loansAccountDetailsForm}get loansAccountTermsForm(){return this.loansAccountTermsStep.loansAccountTermsForm}get loansAccountFormValid(){return this.loansAccountDetailsForm.valid&&this.loansAccountTermsForm.valid}get loansAccount(){return O(O(O({},this.loansAccountDetailsStep.loansAccountDetails),this.loansAccountTermsStep.loansAccountTerms),this.loansAccountChargesStep.loansAccountCharges)}submit(){let a=this.settingsService.language.code,l=this.settingsService.dateFormat,d=Re(O({},this.loansAccount),{clientId:this.loansAccountTemplate.clientId,charges:this.loansAccount.charges.map(h=>({chargeId:h.id,amount:h.amount,dueDate:h.dueDate&&this.datePipe.transform(h.dueDate,l)})),collateral:this.loansAccount.collateral.map(h=>({type:h.type,value:h.value,description:h.description})),interestChargedFromDate:this.datePipe.transform(this.loansAccount.interestChargedFromDate,l),repaymentsStartingFromDate:this.datePipe.transform(this.loansAccount.repaymentsStartingFromDate,l),submittedOnDate:this.datePipe.transform(this.loansAccount.submittedOnDate,l),expectedDisbursementDate:this.datePipe.transform(this.loansAccount.expectedDisbursementDate,l),dateFormat:l,locale:a,loanType:"individual"});d.syncRepaymentsWithMeeting&&(d.calendarId=this.loansAccountProductTemplate.calendarOptions[0].id,delete d.syncRepaymentsWithMeeting),d.recalculationRestFrequencyDate&&(d.recalculationRestFrequencyDate=this.datePipe.transform(this.loansAccount.recalculationRestFrequencyDate,l)),d.recalculationCompoundingFrequencyDate&&(d.recalculationCompoundingFrequencyDate=this.datePipe.transform(this.loansAccount.recalculationCompoundingFrequencyDate,l)),d.interestCalculationPeriodType===0&&(d.allowPartialPeriodInterestCalcualtion=false),d.isFloatingInterestRate!==false&&delete d.isFloatingInterestRate,this.loansService.createLoansAccount(d).subscribe(h=>{this.router.navigate(["../",h.resourceId],{relativeTo:this.route});});}static \u0275fac=function(l){return new(l||e)(T(zs$1),T(Gr$1),T(_te),T(E),T(yF))};static \u0275cmp=N({type:e,selectors:[["mifosx-create-loans-account"]],viewQuery:function(l,r){if(l&1&&ze(De,7)(be,7)(Te,7),l&2){let d;j(d=H())&&(r.loansAccountDetailsStep=d.first),j(d=H())&&(r.loansAccountTermsStep=d.first),j(d=H())&&(r.loansAccountChargesStep=d.first);}},standalone:false,decls:43,vars:10,consts:[["loansAccountStepper",""],[1,"container"],["labelPosition","bottom",1,"mat-elevation-z8"],["matStepperIcon","number"],["matStepperIcon","edit"],["matStepperIcon","done"],["matStepperIcon","error"],["matStepperIcon","preview"],[3,"stepControl"],["matStepLabel",""],[3,"loansAccountProductTemplate","loansAccountTemplate"],[3,"loansAccountProductTemplate","loansAccountTemplate","collateralOptions","loansAccountFormValid"],["state","preview","completed","",4,"ngIf"],["icon","pencil-alt","size","sm"],["icon","check","size","sm"],["icon","exclamation-triangle","size","lg"],["icon","eye","size","sm"],["state","preview","completed",""],[3,"submit","loansAccountTemplate","loansAccountProductTemplate","loansAccount"]],template:function(l,r){l&1&&(x(0,"div",1),b(1,`

  `),x(2,"mat-horizontal-stepper",2,0),b(4,`
    `),Ie(5,wf,3,0,"ng-template",3),b(6,`

    `),Ie(7,Pf,3,0,"ng-template",4),b(8,`

    `),Ie(9,Rf,3,0,"ng-template",5),b(10,`

    `),Ie(11,Of,3,0,"ng-template",6),b(12,`

    `),Ie(13,Mf,3,0,"ng-template",7),b(14,`

    `),x(15,"mat-step",8),b(16,`

      `),Ie(17,Nf,1,0,"ng-template",9),b(18,`

      `),x(19,"mifosx-loans-account-details-step",10),re("loansAccountProductTemplate",function(h){return r.setTemplate(h)}),b(20,`
      `),w(),b(21,`

    `),w(),b(22,`

    `),x(23,"mat-step",8),b(24,`

      `),Ie(25,kf,1,0,"ng-template",9),b(26,`

      `),x(27,"mifosx-loans-account-terms-step",10),b(28,`
      `),w(),b(29,`

    `),w(),b(30,`

    `),x(31,"mat-step"),b(32,`

      `),Ie(33,Gf,1,0,"ng-template",9),b(34,`

      `),x(35,"mifosx-loans-account-charges-step",11),b(36,`
      `),w(),b(37,`

    `),w(),b(38,`

    `),Ie(39,jf,7,3,"mat-step",12),b(40,`

  `),w(),b(41,`

`),w(),b(42,`
`)),l&2&&(D(15),z("stepControl",r.loansAccountDetailsForm),D(4),z("loansAccountTemplate",r.loansAccountTemplate),D(4),z("stepControl",r.loansAccountTermsForm),D(4),z("loansAccountProductTemplate",r.loansAccountProductTemplate)("loansAccountTemplate",r.loansAccountTemplate),D(8),z("loansAccountProductTemplate",r.loansAccountProductTemplate)("loansAccountTemplate",r.loansAccountTemplate)("collateralOptions",r.collateralOptions)("loansAccountFormValid",r.loansAccountFormValid),D(4),z("ngIf",r.loansAccountFormValid));},dependencies:[Yo$1,Oc$1,sfe,Ky,cfe,ofe,De,be,Te,ln],encapsulation:2,changeDetection:1})}return e})();var Vf=(e,m,a)=>({name:e,description:m,file:a}),qf=e=>({data:e});function Hf(e,m){e&1&&(x(0,"mat-error"),b(1,`
        File Name is `),x(2,"strong"),b(3,"required"),w(),b(4,`
      `),w());}function $f(e,m){if(e&1&&(x(0,"button",10),b(1,"Confirm"),w()),e&2){let a=K();z("disabled",!a.uploadDocumentForm.valid)("mat-dialog-close",gc$1(6,qf,C9(2,Vf,a.uploadDocumentForm.value.name,a.uploadDocumentForm.value.description,a.uploadDocumentForm.value.file)));}}var Xi=(()=>{class e{dialogRef;formBuilder;data;uploadDocumentForm;constructor(a,l,r){this.dialogRef=a,this.formBuilder=l,this.data=r;}ngOnInit(){this.createUploadDocumentForm();}createUploadDocumentForm(){this.uploadDocumentForm=this.formBuilder.group({name:["",mi$1.required],description:[""],file:[""]});}onFileSelect(a){if(a.target.files.length>0){let l=a.target.files[0];this.uploadDocumentForm.get("file").setValue(l);}}static \u0275fac=function(l){return new(l||e)(T(En),T(AI),T(rr$1))};static \u0275cmp=N({type:e,selectors:[["mifosx-loan-account-load-documents-dialog"]],standalone:false,decls:37,vars:3,consts:[["mat-dialog-title",""],["fxLayout","column",3,"formGroup"],["fxFlex",""],["formControlName","name","required","","matInput",""],[4,"ngIf"],["formControlName","description","matInput",""],["flex","60%",3,"change"],["align","end"],["mat-raised-button","","mat-dialog-close",""],["mat-raised-button","","color","primary",3,"disabled","mat-dialog-close",4,"mifosxHasPermission"],["mat-raised-button","","color","primary",3,"disabled","mat-dialog-close"]],template:function(l,r){l&1&&(x(0,"h1",0),b(1,"Load Loan Document"),w(),b(2,`

`),x(3,"div"),b(4,`
  `),x(5,"form",1),b(6,`

    `),x(7,"mat-form-field",2),b(8,`
      `),x(9,"mat-label"),b(10,"File Name"),w(),b(11,`
      `),fe(12,"input",3),ki$1(),b(13,`
      `),Ie(14,Hf,5,0,"mat-error",4),b(15,`
    `),w(),b(16,`

    `),x(17,"mat-form-field",2),b(18,`
      `),x(19,"mat-label"),b(20,"Description"),w(),b(21,`
      `),fe(22,"input",5),ki$1(),b(23,`
    `),w(),b(24,`

    `),x(25,"mifosx-file-upload",6),re("change",function(h){return r.onFileSelect(h)}),w(),b(26,`

    `),x(27,"mat-dialog-actions",7),b(28,`
      `),x(29,"button",8),b(30,"Cancel"),w(),b(31,`
      `),Ie(32,$f,2,8,"button",9),b(33,`
    `),w(),b(34,`

  `),w(),b(35,`
`),w(),b(36,`
`)),l&2&&(D(5),z("formGroup",r.uploadDocumentForm),D(7),Li$1(),D(2),z("ngIf",r.uploadDocumentForm.controls.name.hasError("required")),D(8),Li$1(),D(10),z("mifosxHasPermission","CREATE_DOCUMENT"));},dependencies:[YNe,Yo$1,go$1,wc$1,Sn$1,Fi$1,ci$1,Oi$1,Ri$1,Br$1,O3,Ac$1,DI,Cc$1,Na$1,k2,S6,uo$1,_3,XQe],encapsulation:2,changeDetection:1})}return e})();var Wf=["documentsTable"],Uf=()=>[10,25,50,100];function zf(e,m){if(e&1){let a=Kt();x(0,"button",6),re("click",function(){ot(a);let r=K();return at(r.uploadDocument())}),b(1,`
          `),fe(2,"fa-icon",7),b(3,`\xA0\xA0Upload
        `),w();}}function Qf(e,m){e&1&&(x(0,"th",18),b(1," Name "),w());}function Yf(e,m){if(e&1&&(x(0,"td",19),b(1),w()),e&2){let a=m.$implicit;D(),it(" ",a.name," ");}}function Jf(e,m){e&1&&(x(0,"th",18),b(1," Description "),w());}function Kf(e,m){if(e&1&&(x(0,"td",19),b(1),w()),e&2){let a=m.$implicit;D(),it(" ",a.description," ");}}function Xf(e,m){e&1&&(x(0,"th",18),b(1," File Name "),w());}function Zf(e,m){if(e&1&&(x(0,"td",19),b(1),w()),e&2){let a=m.$implicit;D(),it(" ",a.fileName," ");}}function tx(e,m){e&1&&(x(0,"th",18),b(1," Actions "),w());}function ex(e,m){e&1&&(x(0,"button",20),b(1,`
            `),fe(2,"i",25),b(3,`
          `),w());}function nx(e,m){if(e&1){let a=Kt();x(0,"td",19),b(1,`
          `),x(2,"button",20),b(3,`
            `),fe(4,"fa-icon",21),b(5,`
          `),w(),b(6,`

          `),Ie(7,ex,4,0,"button",22),b(8,`

          `),x(9,"button",23),re("click",function(){let r=ot(a),d=r.$implicit,h=r.$implicit,I=K(2);return at(I.deleteDocument(d.id,h))}),b(10,`
            `),fe(11,"fa-icon",24),b(12,`
          `),w(),b(13,`

        `),w();}if(e&2){let a=m.$implicit;D(7),z("ngIf",a.fileIsImage);}}function ix(e,m){e&1&&fe(0,"tr",26);}function ax(e,m){e&1&&fe(0,"tr",27);}function ox(e,m){if(e&1&&(Rl$1(0),b(1,`

    `),x(2,"table",8,0),b(4,`

      `),Rl$1(5,9),b(6,`
        `),Ie(7,Qf,2,0,"th",10),b(8,`
        `),Ie(9,Yf,2,1,"td",11),b(10,`
      `),zl$1(),b(11,`

      `),Rl$1(12,12),b(13,`
        `),Ie(14,Jf,2,0,"th",10),b(15,`
        `),Ie(16,Kf,2,1,"td",11),b(17,`
      `),zl$1(),b(18,`

      `),Rl$1(19,13),b(20,`
        `),Ie(21,Xf,2,0,"th",10),b(22,`
        `),Ie(23,Zf,2,1,"td",11),b(24,`
      `),zl$1(),b(25,`

      `),Rl$1(26,14),b(27,`
        `),Ie(28,tx,2,0,"th",10),b(29,`
        `),Ie(30,nx,14,1,"td",11),b(31,`
      `),zl$1(),b(32,`

      `),Ie(33,ix,1,0,"tr",15),b(34,`
      `),Ie(35,ax,1,0,"tr",16),b(36,`
    `),w(),b(37,`

    `),fe(38,"mat-paginator",17),b(39,`

  `),zl$1()),e&2){let a=K();D(2),z("dataSource",a.dataSource),D(31),z("matHeaderRowDef",a.displayedColumns),D(2),z("matRowDefColumns",a.displayedColumns),D(3),z("pageSizeOptions",$o$1(4,Uf));}}var Zi=(()=>{class e{route;loansService;dialog;documentsTable;loanDocuments;loanDetailsData;status;choice;displayedColumns=["name","description","filename","actions"];dataSource;paginator;sort;constructor(a,l,r){this.route=a,this.loansService=l,this.dialog=r,this.route.data.subscribe(d=>{this.getLoanDocumentsData(d.loanDocuments);}),this.route.parent.data.subscribe(d=>{this.loanDetailsData=d.loanDetailsData;});}ngOnInit(){this.status=this.loanDetailsData.status.value,(this.status==="Submitted and pending approval"||this.status==="Active"||this.status==="Approved")&&(this.choice=true),this.dataSource=new zB(this.loanDocuments),this.dataSource.paginator=this.paginator,this.dataSource.sort=this.sort;}getLoanDocumentsData(a){a.forEach(l=>{let r={};r=Hn.serverUrl+"/loans/"+l.parentEntityId+"/documents/"+l.id+"/attachment?tenantIdentifier="+Hn.fineractPlatformTenantId,l.docUrl=r,l.fileName&&(l.fileName.toLowerCase().indexOf(".jpg")!==-1||l.fileName.toLowerCase().indexOf(".jpeg")!==-1||l.fileName.toLowerCase().indexOf(".png")!==-1)&&(l.fileIsImage=true),l.type&&l.type.toLowerCase().indexOf("image")!==-1&&(l.fileIsImage=true);}),this.loanDocuments=a;}uploadDocument(){this.dialog.open(Xi).afterClosed().subscribe(l=>{l&&this.loansService.loadLoanDocument(this.loanDetailsData.id,l).subscribe(()=>{});});}deleteDocument(a,l){this.dialog.open(CNe,{data:{deleteContext:`document id:${a}`}}).afterClosed().subscribe(d=>{d.delete&&this.loansService.deleteLoanDocument(this.loanDetailsData.id,a).subscribe(h=>{this.loanDocuments.splice(l,1),this.documentsTable.renderRows();});});}static \u0275fac=function(l){return new(l||e)(T(zs$1),T(E),T(Iv))};static \u0275cmp=N({type:e,selectors:[["mifosx-loan-documents-tab"]],viewQuery:function(l,r){if(l&1&&ze(Wf,5)(P4e,5)(Iue,5),l&2){let d;j(d=H())&&(r.documentsTable=d.first),j(d=H())&&(r.paginator=d.first),j(d=H())&&(r.sort=d.first);}},standalone:false,decls:16,vars:2,consts:[["documentsTable",""],[1,"tab-container","mat-typography"],["fxLayout","column","fxFlex","100%"],["fxLayout","row","fxLayoutAlign","flex-end"],["mat-raised-button","","color","primary",3,"click",4,"ngIf"],[4,"ngIf"],["mat-raised-button","","color","primary",3,"click"],["icon","plus"],["mat-table","","matSort","",3,"dataSource"],["matColumnDef","name"],["mat-header-cell","","mat-sort-header","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","description"],["matColumnDef","filename"],["matColumnDef","actions"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["showFirstLastButtons","",3,"pageSizeOptions"],["mat-header-cell","","mat-sort-header",""],["mat-cell",""],["mat-raised-button","","color","primary",1,"loan-document-action-button"],["icon","cloud-download-alt"],["class","loan-document-action-button","mat-raised-button","","color","primary",4,"ngIf"],["mat-raised-button","","color","warn",1,"loan-document-action-button",3,"click"],["icon","times"],[1,"fa","fa-eye"],["mat-header-row",""],["mat-row",""]],template:function(l,r){l&1&&(x(0,"div",1),b(1,`

  `),x(2,"div"),b(3,`
    `),x(4,"div",2),b(5,`
      `),x(6,"div",3),b(7,`
        `),Ie(8,zf,4,0,"button",4),b(9,`
      `),w(),b(10,`
    `),w(),b(11,`
  `),w(),b(12,`

  `),Ie(13,ox,40,5,"ng-container",5),b(14,`

`),w(),b(15,`
`)),l&2&&(D(8),z("ngIf",r.choice),D(5),z("ngIf",r.loanDocuments.length>0));},dependencies:[Yo$1,Oc$1,go$1,eA,wc$1,Sn$1,P4e,Iue,yWe,uqe,mqe,bqe,pqe,fqe,xqe,gqe,vqe,Cqe,Mqe],styles:["table[_ngcontent-%COMP%]{width:100%;margin-top:3%}table[_ngcontent-%COMP%]   .account-action-button[_ngcontent-%COMP%]{min-width:26px;padding:0 6px;margin:4px;line-height:25px}.tab-container[_ngcontent-%COMP%]{padding:1%;margin:1%}"],changeDetection:1})}return e})();var rx=["instructionsTable"];function mx(e,m){e&1&&(x(0,"th",16),b(1," Client "),w());}function lx(e,m){if(e&1&&(x(0,"td",17),b(1),w()),e&2){let a=m.$implicit;D(),Y0$1("",a.fromClient.displayName,"-",a.fromClient.id,`
        `);}}function cx(e,m){e&1&&(x(0,"th",16),b(1," From Account "),w());}function sx(e,m){if(e&1&&(x(0,"td",17),b(1),w()),e&2){let a=m.$implicit;D(),Y0$1("",a.fromAccount.accountNo,`
          (`,a.fromAccountType.value,")");}}function px(e,m){e&1&&(x(0,"th",16),b(1," Beneficiary "),w());}function dx(e,m){if(e&1&&(x(0,"span"),b(1),w()),e&2){let a=K().$implicit;D(),it(" ",a.toClient.displayName," ");}}function ux(e,m){e&1&&(x(0,"span"),b(1,"Own Account"),w());}function fx(e,m){if(e&1&&(x(0,"td",17),b(1,`
          `),Ie(2,dx,2,1,"span",18),b(3,`
          `),Ie(4,ux,2,0,"span",18),b(5,`
        `),w()),e&2){let a=m.$implicit;D(2),z("ngIf",a.fromClient.id!=a.toClient.id),D(2),z("ngIf",a.fromClient.id==a.toClient.id);}}function xx(e,m){e&1&&(x(0,"th",16),b(1," To Account "),w());}function _x(e,m){if(e&1&&(x(0,"td",17),b(1),w()),e&2){let a=m.$implicit;D(),Y0$1("",a.toAccount.accountNo,`
          (`,a.toAccountType.value,")");}}function Cx(e,m){e&1&&(x(0,"th",16),b(1," Amount "),w());}function vx(e,m){if(e&1&&(x(0,"td",17),b(1),w()),e&2){let a=m.$implicit;D(),Y0$1("",a.instructionType.value,"/",a.amount);}}function gx(e,m){e&1&&(x(0,"th",16),b(1," Validity "),w());}function hx(e,m){if(e&1&&(x(0,"td",17),b(1),nee(2,"date"),nee(3,"date"),w()),e&2){let a=m.$implicit;D(),Y0$1("",ree(2,2,a.validFrom)," to ",ree(3,4,a.validTill),`
        `);}}function Sx(e,m){e&1&&(x(0,"th",16),b(1," Actions "),w());}function yx(e,m){e&1&&(x(0,"button",21),b(1,`
              `),fe(2,"i",22),b(3,`
            `),w());}function Dx(e,m){e&1&&(x(0,"span"),b(1,`
            `),Ie(2,yx,4,0,"button",20),b(3,`
          `),w()),e&2&&(D(2),z("mifosxHasPermission","UPDATE_STANDINGINSTRUCTION"));}function bx(e,m){if(e&1){let a=Kt();x(0,"button",24),re("click",function(){ot(a);let r=K(2).$implicit,d=K();return at(d.deleteStandingInstruction(r.id))}),b(1,`
              `),fe(2,"i",25),b(3,`
            `),w();}}function Tx(e,m){e&1&&(x(0,"span"),b(1,`
            `),Ie(2,bx,4,0,"button",23),b(3,`
          `),w()),e&2&&(D(2),z("mifosxHasPermission","DELETE_STANDINGINSTRUCTION"));}function Ex(e,m){e&1&&(x(0,"button",26),b(1,`
            `),fe(2,"i",27),b(3,`
          `),w());}function Ax(e,m){if(e&1&&(x(0,"td",17),b(1,`
          `),Ie(2,Dx,4,1,"span",18),b(3,`
          `),Ie(4,Tx,4,1,"span",18),b(5,`
          `),Ie(6,Ex,4,0,"button",19),b(7,`
        `),w()),e&2){let a=m.$implicit;D(2),z("ngIf",a.status.value!=="Deleted"),D(2),z("ngIf",a.status.value!=="Deleted"),D(2),z("mifosxHasPermission","READ_STANDINGINSTRUCTION");}}function Ix(e,m){e&1&&fe(0,"tr",28);}function Lx(e,m){e&1&&fe(0,"tr",29);}var ta=(()=>{class e{route;loansService;dialog;accountTransfersService;settingsService;loanDetailsData;instructionsData;dataSource=new zB;displayedColumns=["client","fromAccount","beneficiary","toAccount","amount","validity","actions"];instructionTableRef;constructor(a,l,r,d,h){this.route=a,this.loansService=l,this.dialog=r,this.accountTransfersService=d,this.settingsService=h,this.route.parent.data.subscribe(I=>{this.loanDetailsData=I.loanDetailsData;});}ngOnInit(){this.getStandingInstructions();}getStandingInstructions(){let a=this.loanDetailsData.clientId,l=this.loanDetailsData.clientName,r=this.loanDetailsData.id,d=this.settingsService.language.code,h=this.settingsService.dateFormat;this.loansService.getStandingInstructions(a,l,r,d,h).subscribe(I=>{this.instructionsData=I.pageItems,this.dataSource.data=this.instructionsData,this.instructionTableRef.renderRows();});}deleteStandingInstruction(a){this.dialog.open(CNe,{data:{deleteContext:`standing instruction id: ${a}`}}).afterClosed().subscribe(r=>{r.delete&&this.accountTransfersService.deleteStandingInstrucions(a).subscribe(()=>{});});}static \u0275fac=function(l){return new(l||e)(T(zs$1),T(E),T(Iv),T(I),T(yF))};static \u0275cmp=N({type:e,selectors:[["mifosx-standing-instructions-tab"]],viewQuery:function(l,r){if(l&1&&ze(rx,7),l&2){let d;j(d=H())&&(r.instructionTableRef=d.first);}},standalone:false,decls:69,vars:3,consts:[["instructionsTable",""],[1,"tab-container","mat-typography"],[1,"m-b-10"],[1,"mat-elevation-z1","m-b-25"],["mat-table","",3,"dataSource"],["matColumnDef","client"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","fromAccount"],["matColumnDef","beneficiary"],["matColumnDef","toAccount"],["matColumnDef","amount"],["matColumnDef","validity"],["matColumnDef","actions"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["mat-header-cell",""],["mat-cell",""],[4,"ngIf"],["class","account-action-button","mat-raised-button","","color","primary","matTooltip","View Standing Instruction",4,"mifosxHasPermission"],["class","account-action-button","mat-raised-button","","color","primary","matTooltip","Edit Standing Instruction",4,"mifosxHasPermission"],["mat-raised-button","","color","primary","matTooltip","Edit Standing Instruction",1,"account-action-button"],[1,"fa","fa-edit"],["class","account-action-button","mat-raised-button","","color","warn","matTooltip","Delete Standing Instruction",3,"click",4,"mifosxHasPermission"],["mat-raised-button","","color","warn","matTooltip","Delete Standing Instruction",1,"account-action-button",3,"click"],[1,"fa","fa-times"],["mat-raised-button","","color","primary","matTooltip","View Standing Instruction",1,"account-action-button"],[1,"fa","fa-eye"],["mat-header-row",""],["mat-row",""]],template:function(l,r){l&1&&(x(0,"div",1),b(1,`

  `),x(2,"div",2),b(3,`
    `),x(4,"h3"),b(5,"All Standing Instructions"),w(),b(6,`
  `),w(),b(7,`

  `),x(8,"div",3),b(9,`

    `),x(10,"table",4,0),b(12,`

      `),Rl$1(13,5),b(14,`
        `),Ie(15,mx,2,0,"th",6),b(16,`
        `),Ie(17,lx,2,2,"td",7),b(18,`
      `),zl$1(),b(19,`

      `),Rl$1(20,8),b(21,`
        `),Ie(22,cx,2,0,"th",6),b(23,`
        `),Ie(24,sx,2,2,"td",7),b(25,`
      `),zl$1(),b(26,`

      `),Rl$1(27,9),b(28,`
        `),Ie(29,px,2,0,"th",6),b(30,`
        `),Ie(31,fx,6,2,"td",7),b(32,`
      `),zl$1(),b(33,`

      `),Rl$1(34,10),b(35,`
        `),Ie(36,xx,2,0,"th",6),b(37,`
        `),Ie(38,_x,2,2,"td",7),b(39,`
      `),zl$1(),b(40,`

      `),Rl$1(41,11),b(42,`
        `),Ie(43,Cx,2,0,"th",6),b(44,`
        `),Ie(45,vx,2,2,"td",7),b(46,`
      `),zl$1(),b(47,`

      `),Rl$1(48,12),b(49,`
        `),Ie(50,gx,2,0,"th",6),b(51,`
        `),Ie(52,hx,4,6,"td",7),b(53,`
      `),zl$1(),b(54,`

      `),Rl$1(55,13),b(56,`
        `),Ie(57,Sx,2,0,"th",6),b(58,`
        `),Ie(59,Ax,8,3,"td",7),b(60,`
      `),zl$1(),b(61,`

      `),Ie(62,Ix,1,0,"tr",14),b(63,`
      `),Ie(64,Lx,1,0,"tr",15),b(65,`

    `),w(),b(66,`

  `),w(),b(67,`

`),w(),b(68,`
`)),l&2&&(D(10),z("dataSource",r.dataSource),D(52),z("matHeaderRowDef",r.displayedColumns),D(2),z("matRowDefColumns",r.displayedColumns));},dependencies:[Yo$1,Sn$1,uqe,mqe,bqe,pqe,fqe,xqe,gqe,vqe,Cqe,Mqe,ia$1,XQe,_te],styles:[".tab-container[_ngcontent-%COMP%]{padding:1%;margin:1%}.tab-container[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin:1% auto}.tab-container[_ngcontent-%COMP%]   .action-button[_ngcontent-%COMP%]{margin-left:auto}.tab-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]{width:100%}.tab-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   .account-action-button[_ngcontent-%COMP%]{min-width:26px;padding:0 6px;margin:4px;line-height:25px}"],changeDetection:1})}return e})();function Fx(e,m){e&1&&(b(0,`
      `),fe(1,"fa-icon",13),b(2,`
    `));}function wx(e,m){e&1&&(b(0,`
      `),fe(1,"fa-icon",13),b(2,`
    `));}function Px(e,m){e&1&&(b(0,`
      `),fe(1,"fa-icon",14),b(2,`
    `));}function Rx(e,m){e&1&&(b(0,`
      `),fe(1,"fa-icon",15),b(2,`
    `));}function Ox(e,m){e&1&&(b(0,`
      `),fe(1,"fa-icon",16),b(2,`
    `));}function Mx(e,m){e&1&&b(0,"DETAILS");}function Nx(e,m){e&1&&b(0,"TERMS");}function kx(e,m){e&1&&b(0,"CHARGES");}function Gx(e,m){e&1&&b(0,"PREVIEW");}function Bx(e,m){if(e&1){let a=Kt();x(0,"mat-step",17),b(1,`

      `),Ie(2,Gx,1,0,"ng-template",9),b(3,`

      `),x(4,"mifosx-loans-account-preview-step",18),re("submit",function(){ot(a);let r=K();return at(r.submit())}),b(5,`
      `),w(),b(6,`

    `),w();}if(e&2){let a=K();D(4),z("loansAccountTemplate",a.loansAccountAndTemplate)("loansAccountProductTemplate",a.loansAccountProductTemplate)("loansAccount",a.loansAccount);}}var ea=(()=>{class e{route;router;datePipe;loansService;settingsService;loansAccountDetailsStep;loansAccountTermsStep;loansAccountChargesStep;loansAccountAndTemplate;loansAccountProductTemplate;collateralOptions;loanId;constructor(a,l,r,d,h){this.route=a,this.router=l,this.datePipe=r,this.loansService=d,this.settingsService=h,this.route.data.subscribe(I=>{this.loansAccountAndTemplate=I.loansAccountAndTemplate;}),this.loanId=this.route.parent.snapshot.params.loanId;}ngOnInit(){}setTemplate(a){this.loansAccountProductTemplate=a,this.loansService.getLoansCollateralTemplateResource(this.loansAccountProductTemplate.loanProductId).subscribe(l=>{this.collateralOptions=l.loanCollateralOptions;});}get loansAccountDetailsForm(){return this.loansAccountDetailsStep.loansAccountDetailsForm}get loansAccountTermsForm(){return this.loansAccountTermsStep.loansAccountTermsForm}get loansAccountFormValidAndNotPristine(){return this.loansAccountDetailsForm.valid&&this.loansAccountTermsForm.valid&&(!this.loansAccountDetailsForm.pristine||!this.loansAccountTermsForm.pristine||!this.loansAccountChargesStep.pristine)}get loansAccount(){return O(O(O({},this.loansAccountDetailsStep.loansAccountDetails),this.loansAccountTermsStep.loansAccountTerms),this.loansAccountChargesStep.loansAccountCharges)}submit(){let a=this.settingsService.language.code,l=this.settingsService.dateFormat,d=Re(O({},this.loansAccount),{clientId:this.loansAccountAndTemplate.clientId,charges:this.loansAccount.charges.map(h=>({chargeId:h.id,amount:h.amount,dueDate:h.dueDate&&this.datePipe.transform(h.dueDate,l)})),collateral:this.loansAccount.collateral.map(h=>({type:h.type,value:h.value,description:h.description})),interestChargedFromDate:this.datePipe.transform(this.loansAccount.interestChargedFromDate,l),repaymentsStartingFromDate:this.datePipe.transform(this.loansAccount.repaymentsStartingFromDate,l),submittedOnDate:this.datePipe.transform(this.loansAccount.submittedOnDate,l),expectedDisbursementDate:this.datePipe.transform(this.loansAccount.expectedDisbursementDate,l),dateFormat:l,locale:a,loanType:"individual"});d.syncRepaymentsWithMeeting&&(d.calendarId=this.loansAccountProductTemplate.calendarOptions[0].id,delete d.syncRepaymentsWithMeeting),d.recalculationRestFrequencyDate&&(d.recalculationRestFrequencyDate=this.datePipe.transform(this.loansAccount.recalculationRestFrequencyDate,l)),d.recalculationCompoundingFrequencyDate&&(d.recalculationCompoundingFrequencyDate=this.datePipe.transform(this.loansAccount.recalculationCompoundingFrequencyDate,l)),d.interestCalculationPeriodType===0&&(d.allowPartialPeriodInterestCalcualtion=false),d.isFloatingInterestRate!==false&&delete d.isFloatingInterestRate,this.loansService.updateLoansAccount(this.loanId,d).subscribe(h=>{this.router.navigate(["../"],{relativeTo:this.route});});}static \u0275fac=function(l){return new(l||e)(T(zs$1),T(Gr$1),T(_te),T(E),T(yF))};static \u0275cmp=N({type:e,selectors:[["mifosx-edit-loans-account"]],viewQuery:function(l,r){if(l&1&&ze(De,7)(be,7)(Te,7),l&2){let d;j(d=H())&&(r.loansAccountDetailsStep=d.first),j(d=H())&&(r.loansAccountTermsStep=d.first),j(d=H())&&(r.loansAccountChargesStep=d.first);}},standalone:false,decls:43,vars:10,consts:[["loansAccountStepper",""],[1,"container"],["labelPosition","bottom",1,"mat-elevation-z8"],["matStepperIcon","number"],["matStepperIcon","edit"],["matStepperIcon","done"],["matStepperIcon","error"],["matStepperIcon","preview"],[3,"stepControl"],["matStepLabel",""],[3,"loansAccountProductTemplate","loansAccountTemplate"],[3,"loansAccountProductTemplate","loansAccountTemplate","collateralOptions","loansAccountFormValid"],["state","preview","completed","",4,"ngIf"],["icon","pencil-alt","size","sm"],["icon","check","size","sm"],["icon","exclamation-triangle","size","lg"],["icon","eye","size","sm"],["state","preview","completed",""],[3,"submit","loansAccountTemplate","loansAccountProductTemplate","loansAccount"]],template:function(l,r){l&1&&(x(0,"div",1),b(1,`

  `),x(2,"mat-horizontal-stepper",2,0),b(4,`
    `),Ie(5,Fx,3,0,"ng-template",3),b(6,`

    `),Ie(7,wx,3,0,"ng-template",4),b(8,`

    `),Ie(9,Px,3,0,"ng-template",5),b(10,`

    `),Ie(11,Rx,3,0,"ng-template",6),b(12,`

    `),Ie(13,Ox,3,0,"ng-template",7),b(14,`

    `),x(15,"mat-step",8),b(16,`

      `),Ie(17,Mx,1,0,"ng-template",9),b(18,`

      `),x(19,"mifosx-loans-account-details-step",10),re("loansAccountProductTemplate",function(h){return r.setTemplate(h)}),b(20,`
      `),w(),b(21,`

    `),w(),b(22,`

    `),x(23,"mat-step",8),b(24,`

      `),Ie(25,Nx,1,0,"ng-template",9),b(26,`

      `),x(27,"mifosx-loans-account-terms-step",10),b(28,`
      `),w(),b(29,`

    `),w(),b(30,`

    `),x(31,"mat-step"),b(32,`

      `),Ie(33,kx,1,0,"ng-template",9),b(34,`

      `),x(35,"mifosx-loans-account-charges-step",11),b(36,`
      `),w(),b(37,`

    `),w(),b(38,`

    `),Ie(39,Bx,7,3,"mat-step",12),b(40,`

  `),w(),b(41,`

`),w(),b(42,`
`)),l&2&&(D(15),z("stepControl",r.loansAccountDetailsForm),D(4),z("loansAccountTemplate",r.loansAccountAndTemplate),D(4),z("stepControl",r.loansAccountTermsForm),D(4),z("loansAccountProductTemplate",r.loansAccountProductTemplate)("loansAccountTemplate",r.loansAccountAndTemplate),D(8),z("loansAccountProductTemplate",r.loansAccountProductTemplate)("loansAccountTemplate",r.loansAccountAndTemplate)("collateralOptions",r.collateralOptions)("loansAccountFormValid",r.loansAccountFormValidAndNotPristine),D(4),z("ngIf",r.loansAccountFormValidAndNotPristine));},dependencies:[Yo$1,Oc$1,sfe,Ky,cfe,ofe,De,be,Te,ln],encapsulation:2,changeDetection:1})}return e})();function jx(e,m){if(e&1){let a=Kt();x(0,"button",8),re("click",function(){ot(a);let r=K(2);return at(r.payCharge())}),b(1,`
      `),fe(2,"fa-icon",9),b(3,`\xA0\xA0
      Pay
    `),w();}}function Vx(e,m){if(e&1){let a=Kt();x(0,"button",10),re("click",function(){ot(a);let r=K(2);return at(r.waiveCharge())}),b(1,`
      `),fe(2,"fa-icon",11),b(3,`\xA0\xA0
      Waive
    `),w();}}function qx(e,m){e&1&&(x(0,"div",5),b(1,`
    `),Ie(2,jx,4,0,"button",6),b(3,`
    `),Ie(4,Vx,4,0,"button",7),b(5,`
`),w()),e&2&&(D(2),z("mifosxHasPermission","PAY_SAVINGSACCOUNTCHARGE"),D(2),z("mifosxHasPermission","WAIVE_SAVINGSACCOUNTCHARGE"));}function Hx(e,m){if(e&1){let a=Kt();x(0,"button",10),re("click",function(){ot(a);let r=K(2);return at(r.editCharge())}),b(1,`
      `),fe(2,"fa-icon",13),b(3,`\xA0\xA0
      Edit
    `),w();}}function $x(e,m){if(e&1){let a=Kt();x(0,"button",14),re("click",function(){ot(a);let r=K(2);return at(r.deleteCharge())}),b(1,`
      `),fe(2,"fa-icon",15),b(3,`\xA0\xA0
      Delete
    `),w();}}function Wx(e,m){e&1&&(x(0,"div",5),b(1,`
    `),Ie(2,Hx,4,0,"button",7),b(3,`
    `),Ie(4,$x,4,0,"button",12),b(5,`
`),w()),e&2&&(D(2),z("mifosxHasPermission","UPDATE_SAVINGSACCOUNTCHARGE"),D(2),z("mifosxHasPermission","DELETE_SAVINGSACCOUNTCHARGE"));}var na=(()=>{class e{loansService;route;datePipe;router;dialog;settingsService;chargeData;loansAccountData;constructor(a,l,r,d,h,I){this.loansService=a,this.route=l,this.datePipe=r,this.router=d,this.dialog=h,this.settingsService=I,this.route.data.subscribe(R=>{this.chargeData=R.loansAccountCharge,this.loansAccountData=R.loanDetailsData;});}payCharge(){let a=[new r({controlName:"amount",label:"Amount",value:"",type:"number",required:true}),new m({controlName:"dueDate",label:"Payment Date",value:"",type:"date",required:true})],l={title:"Pay Charge",layout:{addButtonText:"Confirm"},formfields:a};this.dialog.open(_Ne,{data:l}).afterClosed().subscribe(d=>{if(d.data){let h=this.settingsService.language.code,I=this.settingsService.dateFormat,R=Re(O({},d.data.value),{dueDate:this.datePipe.transform(d.data.value.dueDate,I),dateFormat:I,locale:h});this.loansService.executeLoansAccountChargesCommand(this.chargeData.accountId,"paycharge",R,this.chargeData.id).subscribe(()=>{this.reload();});}});}waiveCharge(){this.dialog.open(zOe,{data:{heading:"Waive Charge",dialogContext:`Are you sure you want to waive charge with id: ${this.chargeData.id}`,type:"Basic"}}).afterClosed().subscribe(l=>{l.confirm&&this.loansService.executeLoansAccountChargesCommand(this.chargeData.accountId,"waive",{},this.chargeData.id).subscribe(()=>{this.reload();});});}editCharge(){let a=[new r({controlName:"amount",label:"Amount",value:this.chargeData.amount||this.chargeData.amountOrPercentage,type:"number",required:true})],l={title:"Edit Charge",layout:{addButtonText:"Confirm"},formfields:a};this.dialog.open(_Ne,{data:l}).afterClosed().subscribe(d=>{if(d.data){let h=this.settingsService.language.code,I=this.settingsService.dateFormat,R=Re(O({},d.data.value),{dateFormat:I,locale:h});this.loansService.editLoansAccountCharge(this.loansAccountData.id,R,this.chargeData.id).subscribe(()=>{this.reload();});}});}deleteCharge(){this.dialog.open(CNe,{data:{deleteContext:`charge id:${this.chargeData.id}`}}).afterClosed().subscribe(l=>{l.delete&&this.loansService.deleteLoansAccountCharge(this.loansAccountData.id,this.chargeData.id).subscribe(()=>{this.reload();});});}reload(){let a=this.loansAccountData.clientId,l=this.router.url.replace(`/${this.chargeData.id}`,"");this.router.navigateByUrl(`/clients/${a}/loansaccounts`,{skipLocationChange:true}).then(()=>this.router.navigate([l]));}static \u0275fac=function(l){return new(l||e)(T(E),T(zs$1),T(_te),T(Gr$1),T(Iv),T(yF))};static \u0275cmp=N({type:e,selectors:[["mifosx-view-charge"]],standalone:false,decls:77,vars:14,consts:[["fxLayout","row","fxLayoutAlign","end","fxLayoutGap","2%","fxLayout.lt-md","column","class","container m-b-20",4,"ngIf"],[1,"container"],["fxLayout","row wrap",1,"content"],["fxFlex","50%",1,"mat-body-strong"],["fxFlex","50%"],["fxLayout","row","fxLayoutAlign","end","fxLayoutGap","2%","fxLayout.lt-md","column",1,"container","m-b-20"],["mat-raised-button","","color","accent",3,"click",4,"mifosxHasPermission"],["mat-raised-button","","color","primary",3,"click",4,"mifosxHasPermission"],["mat-raised-button","","color","accent",3,"click"],["icon","dollar-sign"],["mat-raised-button","","color","primary",3,"click"],["icon","flag"],["mat-raised-button","","color","warn",3,"click",4,"mifosxHasPermission"],["icon","edit"],["mat-raised-button","","color","warn",3,"click"],["icon","trash"]],template:function(l,r){l&1&&(Ie(0,qx,6,2,"div",0),b(1,`

`),Ie(2,Wx,6,2,"div",0),b(3,`

`),x(4,"div",1),b(5,`

  `),x(6,"mat-card"),b(7,`

    `),x(8,"mat-card-content"),b(9,`

      `),x(10,"div",2),b(11,`

        `),x(12,"div",3),b(13,`
          Name
        `),w(),b(14,`

        `),x(15,"div",4),b(16),w(),b(17,`

        `),x(18,"div",3),b(19,`
          Charge Type
        `),w(),b(20,`

        `),x(21,"div",4),b(22),w(),b(23,`

        `),x(24,"div",3),b(25,`
          Currency
        `),w(),b(26,`

        `),x(27,"div",4),b(28),w(),b(29,`

        `),x(30,"div",3),b(31,`
          Payment due at
        `),w(),b(32,`

        `),x(33,"div",4),b(34),w(),b(35,`

        `),x(36,"div",3),b(37,`
          Payment due as of
        `),w(),b(38,`

        `),x(39,"div",4),b(40),nee(41,"date"),w(),b(42,`

        `),x(43,"div",3),b(44,`
          Calculation Type
        `),w(),b(45,`

        `),x(46,"div",4),b(47),w(),b(48,`

        `),x(49,"div",3),b(50,`
          Due
        `),w(),b(51,`

        `),x(52,"div",4),b(53),w(),b(54,`

        `),x(55,"div",3),b(56,`
          Paid
        `),w(),b(57,`

        `),x(58,"div",4),b(59),w(),b(60,`

        `),x(61,"div",3),b(62,`
          Waived
        `),w(),b(63,`

        `),x(64,"div",4),b(65),w(),b(66,`

        `),x(67,"div",3),b(68,`
          Outstanding
        `),w(),b(69,`

        `),x(70,"div",4),b(71),w(),b(72,`

      `),w(),b(73,`

    `),w(),b(74,`

  `),w(),b(75,`

`),w(),b(76,`
`)),l&2&&(z("ngIf",r.loansAccountData.status.value==="Active"&&r.chargeData.amountOutstanding!==0),D(2),z("ngIf",r.loansAccountData.status.value==="Submitted and pending approval"),D(14),it(`
          `,r.chargeData.name,`
        `),D(6),it(`
          `,r.chargeData.penalty?"Penalty":"Fees",`
        `),D(6),it(`
          `,r.chargeData.currency.displayLabel,`
        `),D(6),it(`
          `,r.chargeData.chargeTimeType.value,`
        `),D(6),it(`
          `,ree(41,12,r.chargeData.dueDate),`
        `),D(7),it(`
          `,r.chargeData.chargeCalculationType.value,`
        `),D(6),it(`
          `,r.chargeData.amount,`
        `),D(6),it(`
          `,r.chargeData.amountPaid,`
        `),D(6),it(`
          `,r.chargeData.amountWaived,`
        `),D(6),it(`
          `,r.chargeData.amountOutstanding,`
        `));},dependencies:[Yo$1,Oc$1,go$1,Mc,eA,wc$1,Sn$1,Sje,Lje,XQe,_te],styles:[".container[_ngcontent-%COMP%]{max-width:37rem}.container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{margin:1rem 0;word-wrap:break-word}"],changeDetection:1})}return e})();function Ux(e,m){e&1&&(x(0,"span"),b(1,`
    `),x(2,"button",9),b(3,`
      `),fe(4,"fa-icon",10),b(5,`\xA0\xA0Edit
    `),w(),b(6,`
  `),w()),e&2&&(D(2),z("routerLink","edit"));}function zx(e,m){if(e&1){let a=Kt();x(0,"button",11),re("click",function(){ot(a);let r=K(2);return at(r.undoTransaction())}),b(1,`
    `),fe(2,"fa-icon",12),b(3,`\xA0\xA0Undo
  `),w();}}function Qx(e,m){e&1&&(x(0,"div",6),b(1,`
  `),Ie(2,Ux,7,1,"span",7),b(3,`
  `),Ie(4,zx,4,0,"button",8),b(5,`
`),w()),e&2&&(D(2),z("mifosxHasPermission","ADJUST_LOAN"),D(2),z("mifosxHasPermission","ADJUST_LOAN"));}function Yx(e,m){e&1&&(x(0,"div",3),b(1,`
            Payment Type
          `),w());}function Jx(e,m){if(e&1&&(x(0,"div",4),b(1),w()),e&2){let a=K(2);D(),it(`
            `,a.transactionData.paymentDetailData.paymentType.name,`
          `);}}function Kx(e,m){e&1&&(x(0,"div",3),b(1,`
            Account No.
          `),w());}function Xx(e,m){if(e&1&&(x(0,"div",4),b(1),w()),e&2){let a=K(2);D(),it(`
            `,a.transactionData.paymentDetailData.accountNumber,`
          `);}}function Zx(e,m){e&1&&(x(0,"div",3),b(1,`
            Cheque Number
          `),w());}function t_(e,m){if(e&1&&(x(0,"div",4),b(1),w()),e&2){let a=K(2);D(),it(`
            `,a.transactionData.paymentDetailData.checkNumber,`
          `);}}function e_(e,m){e&1&&(x(0,"div",3),b(1,`
            Routing Code
          `),w());}function n_(e,m){if(e&1&&(x(0,"div",4),b(1),w()),e&2){let a=K(2);D(),it(`
            `,a.transactionData.paymentDetailData.routingCode,`
          `);}}function i_(e,m){e&1&&(x(0,"div",3),b(1,`
            Receipt No.
          `),w());}function a_(e,m){if(e&1&&(x(0,"div",4),b(1),w()),e&2){let a=K(2);D(),it(`
            `,a.transactionData.paymentDetailData.receiptNumber,`
          `);}}function o_(e,m){e&1&&(x(0,"div",3),b(1,`
            Bank No.
          `),w());}function r_(e,m){if(e&1&&(x(0,"div",4),b(1),w()),e&2){let a=K(2);D(),it(`
            `,a.transactionData.paymentDetailData.bankNumber,`
          `);}}function m_(e,m){if(e&1&&(Rl$1(0),b(1,`

          `),Ie(2,Yx,2,0,"div",13),b(3,`

          `),Ie(4,Jx,2,1,"div",14),b(5,`

          `),Ie(6,Kx,2,0,"div",13),b(7,`

          `),Ie(8,Xx,2,1,"div",14),b(9,`

          `),Ie(10,Zx,2,0,"div",13),b(11,`

          `),Ie(12,t_,2,1,"div",14),b(13,`

          `),Ie(14,e_,2,0,"div",13),b(15,`

          `),Ie(16,n_,2,1,"div",14),b(17,`

          `),Ie(18,i_,2,0,"div",13),b(19,`

          `),Ie(20,a_,2,1,"div",14),b(21,`

          `),Ie(22,o_,2,0,"div",13),b(23,`

          `),Ie(24,r_,2,1,"div",14),b(25,`

        `),zl$1()),e&2){let a=K();D(2),z("ngIf",a.transactionData.paymentDetailData.paymentType),D(2),z("ngIf",a.transactionData.paymentDetailData.paymentType),D(2),z("ngIf",a.transactionData.paymentDetailData.accountNumber),D(2),z("ngIf",a.transactionData.paymentDetailData.accountNumber),D(2),z("ngIf",a.transactionData.paymentDetailData.checkNumber),D(2),z("ngIf",a.transactionData.paymentDetailData.checkNumber),D(2),z("ngIf",a.transactionData.paymentDetailData.routingCode),D(2),z("ngIf",a.transactionData.paymentDetailData.routingCode),D(2),z("ngIf",a.transactionData.paymentDetailData.receiptNumber),D(2),z("ngIf",a.transactionData.paymentDetailData.receiptNumber),D(2),z("ngIf",a.transactionData.paymentDetailData.bankNumber),D(2),z("ngIf",a.transactionData.paymentDetailData.bankNumber);}}var ia=(()=>{class e{loansService;route;datePipe;router;dialog;settingsService;transactionData;constructor(a,l,r,d,h,I){this.loansService=a,this.route=l,this.datePipe=r,this.router=d,this.dialog=h,this.settingsService=I,this.route.data.subscribe(R=>{this.transactionData=R.loansAccountTransaction;});}undoTransaction(){let a=this.route.parent.parent.parent.snapshot.params.loanId;this.dialog.open(zOe,{data:{heading:"Undo Transaction",dialogContext:`Are you sure you want undo the transaction ${this.transactionData.id}`}}).afterClosed().subscribe(r=>{if(r.confirm){let d=this.settingsService.language.code,h=this.settingsService.dateFormat,I={transactionDate:this.datePipe.transform(this.transactionData.date&&new Date(this.transactionData.date),h),transactionAmount:0,dateFormat:h,locale:d};this.loansService.executeLoansAccountTransactionsCommand(a,"undo",I,this.transactionData.id).subscribe(()=>{this.router.navigate(["../"],{relativeTo:this.route});});}});}static \u0275fac=function(l){return new(l||e)(T(E),T(zs$1),T(_te),T(Gr$1),T(Iv),T(yF))};static \u0275cmp=N({type:e,selectors:[["mifosx-view-transaction"]],standalone:false,decls:47,vars:9,consts:[["fxLayoutAlign","end","class","container m-b-20 transaction-buttons","fxLayoutGap","2%",4,"ngIf"],[1,"container"],["fxLayout","row wrap",1,"content"],["fxFlex","50%",1,"mat-body-strong"],["fxFlex","50%"],[4,"ngIf"],["fxLayoutAlign","end","fxLayoutGap","2%",1,"container","m-b-20","transaction-buttons"],[4,"mifosxHasPermission"],["mat-raised-button","","color","warn",3,"click",4,"mifosxHasPermission"],["mat-raised-button","","color","primary",3,"routerLink"],["icon","edit"],["mat-raised-button","","color","warn",3,"click"],["icon","undo"],["fxFlex","50%","class","mat-body-strong",4,"ngIf"],["fxFlex","50%",4,"ngIf"]],template:function(l,r){l&1&&(Ie(0,Qx,6,2,"div",0),b(1,`

`),x(2,"div",1),b(3,`

  `),x(4,"mat-card"),b(5,`

    `),x(6,"mat-card-content"),b(7,`

      `),x(8,"div",2),b(9,`

        `),x(10,"div",3),b(11,`
          Transaction Id
        `),w(),b(12,`

        `),x(13,"div",4),b(14),w(),b(15,`

        `),x(16,"div",3),b(17,`
          Type
        `),w(),b(18,`

        `),x(19,"div",4),b(20),w(),b(21,`

        `),x(22,"div",3),b(23,`
          Transaction Date
        `),w(),b(24,`

        `),x(25,"div",4),b(26),nee(27,"date"),w(),b(28,`

        `),x(29,"div",3),b(30,`
          Currency
        `),w(),b(31,`

        `),x(32,"div",4),b(33),w(),b(34,`

        `),x(35,"div",3),b(36,`
          Amount
        `),w(),b(37,`

        `),x(38,"div",4),b(39),w(),b(40,`

        `),Ie(41,m_,26,12,"ng-container",5),b(42,`

      `),w(),b(43,`

    `),w(),b(44,`

  `),w(),b(45,`

`),w(),b(46,`
`)),l&2&&(z("ngIf",!r.transactionData.type.contra),D(14),it(`
          `,r.transactionData.id,`
        `),D(6),it(`
          `,r.transactionData.type.value,`
        `),D(6),it(`
          `,ree(27,7,r.transactionData.date),`
        `),D(7),it(`
          `,r.transactionData.currency.name,`
        `),D(6),it(`
          `,r.transactionData.amount,`
        `),D(2),z("ngIf",r.transactionData.paymentDetailData));},dependencies:[Yo$1,Oc$1,go$1,Mc,eA,wc$1,Sn$1,Sje,Lje,bp$1,XQe,_te],styles:[".container[_ngcontent-%COMP%]{max-width:37rem}.container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{margin:1rem 0;word-wrap:break-word}.transaction-buttons[_ngcontent-%COMP%]{margin-top:3%}"],changeDetection:1})}return e})();var l_=()=>["../"];function c_(e,m){e&1&&(x(0,"mat-error"),b(1,`
            Transaction Date is `),x(2,"strong"),b(3,"required"),w(),b(4,`
          `),w());}function s_(e,m){e&1&&(x(0,"mat-error"),b(1,`
            Transaction Amount is `),x(2,"strong"),b(3,"required"),w(),b(4,`
          `),w());}function p_(e,m){if(e&1&&(x(0,"mat-option",17),b(1),w()),e&2){let a=m.$implicit;z("value",a.id),D(),it(`
              `,a.name,`
            `);}}function d_(e,m){e&1&&(x(0,"mat-form-field"),b(1,`
          `),x(2,"mat-label"),b(3,"Account Number"),w(),b(4,`
          `),fe(5,"input",18),ki$1(),b(6,`
        `),w()),e&2&&(D(5),Li$1());}function u_(e,m){e&1&&(x(0,"mat-form-field"),b(1,`
          `),x(2,"mat-label"),b(3,"Cheque"),w(),b(4,`
          `),fe(5,"input",19),ki$1(),b(6,`
        `),w()),e&2&&(D(5),Li$1());}function f_(e,m){e&1&&(x(0,"mat-form-field"),b(1,`
          `),x(2,"mat-label"),b(3,"Routing Code"),w(),b(4,`
          `),fe(5,"input",20),ki$1(),b(6,`
        `),w()),e&2&&(D(5),Li$1());}function x_(e,m){e&1&&(x(0,"mat-form-field"),b(1,`
          `),x(2,"mat-label"),b(3,"Receipt Number"),w(),b(4,`
          `),fe(5,"input",21),ki$1(),b(6,`
        `),w()),e&2&&(D(5),Li$1());}function __(e,m){e&1&&(x(0,"mat-form-field"),b(1,`
          `),x(2,"mat-label"),b(3,"Bank"),w(),b(4,`
          `),fe(5,"input",22),ki$1(),b(6,`
        `),w()),e&2&&(D(5),Li$1());}var aa=(()=>{class e{formBuilder;route;router;datePipe;loansService;settingsService;minDate=new Date(2e3,0,1);maxDate=new Date;editTransactionForm;paymentTypeOptions;addPaymentDetailsFlag=false;loanAccountId;transactionTemplateData;constructor(a,l,r,d,h,I){this.formBuilder=a,this.route=l,this.router=r,this.datePipe=d,this.loansService=h,this.settingsService=I,this.route.data.subscribe(R=>{this.transactionTemplateData=R.loansAccountTransactionTemplate,this.paymentTypeOptions=this.transactionTemplateData.paymentTypeOptions;}),this.loanAccountId=this.route.parent.parent.parent.snapshot.params.loanId;}ngOnInit(){this.createEditTransactionForm(),this.editTransactionForm.patchValue({transactionDate:this.transactionTemplateData.date&&new Date(this.transactionTemplateData.date),transactionAmount:this.transactionTemplateData.amount,paymentTypeId:this.transactionTemplateData.paymentTypeId});}createEditTransactionForm(){this.editTransactionForm=this.formBuilder.group({transactionDate:["",mi$1.required],transactionAmount:["",mi$1.required],paymentTypeId:[""]});}addPaymentDetails(){this.addPaymentDetailsFlag=!this.addPaymentDetailsFlag,this.addPaymentDetailsFlag?(this.editTransactionForm.addControl("accountNumber",new Qi$1("")),this.editTransactionForm.addControl("checkNumber",new Qi$1("")),this.editTransactionForm.addControl("routingCode",new Qi$1("")),this.editTransactionForm.addControl("receiptNumber",new Qi$1("")),this.editTransactionForm.addControl("bankNumber",new Qi$1(""))):(this.editTransactionForm.removeControl("accountNumber"),this.editTransactionForm.removeControl("checkNumber"),this.editTransactionForm.removeControl("routingCode"),this.editTransactionForm.removeControl("receiptNumber"),this.editTransactionForm.removeControl("bankNumber"));}submit(){let a=this.editTransactionForm.value.transactionDate,l=this.settingsService.dateFormat;this.editTransactionForm.patchValue({transactionDate:this.datePipe.transform(a,l)});let r=this.editTransactionForm.value;r.locale=this.settingsService.language.code,r.dateFormat=l,this.loansService.executeLoansAccountTransactionsCommand(this.loanAccountId,"modify",r,this.transactionTemplateData.id).subscribe(d=>{this.router.navigate(["../"],{relativeTo:this.route});});}static \u0275fac=function(l){return new(l||e)(T(AI),T(zs$1),T(Gr$1),T(_te),T(E),T(yF))};static \u0275cmp=N({type:e,selectors:[["mifosx-edit-transaction"]],standalone:false,decls:78,vars:17,consts:[["dueDatePicker",""],[1,"container"],[3,"ngSubmit","formGroup"],["fxLayout","column"],["matInput","","formControlName","transactionDate","required","",3,"min","max","matDatepicker"],["matSuffix","",3,"for"],[4,"ngIf"],["type","number","formControlName","transactionAmount","required","","matInput",""],["formControlName","paymentTypeId"],[3,"value",4,"ngFor","ngForOf"],["fxLayoutGap","5px","fxLayout","row","fxLayout.xs","column"],["fxFlexAlign","center"],["type","button","mat-mini-fab","","color","primary",3,"click"],["size","lg",3,"icon"],["fxLayoutGap","5px","fxLayout","row","fxLayout.xs","column","fxLayoutAlign","center"],["type","button","mat-raised-button","",3,"routerLink"],["mat-raised-button","","color","primary",3,"disabled"],[3,"value"],["type","number","formControlName","accountNumber","matInput",""],["type","number","formControlName","checkNumber","matInput",""],["formControlName","routingCode","matInput",""],["formControlName","receiptNumber","matInput",""],["formControlName","bankNumber","matInput",""]],template:function(l,r){if(l&1&&(x(0,"div",1),b(1,`

  `),x(2,"mat-card"),b(3,`

    `),x(4,"form",2),re("ngSubmit",function(){return r.submit()}),b(5,`

      `),x(6,"mat-card-content",3),b(7,`

        `),x(8,"mat-form-field"),b(9,`
          `),x(10,"mat-label"),b(11,"Transaction Date"),w(),b(12,`
          `),fe(13,"input",4),ki$1(),b(14,`
          `),fe(15,"mat-datepicker-toggle",5),b(16,`
          `),fe(17,"mat-datepicker",null,0),b(19,`
          `),Ie(20,c_,5,0,"mat-error",6),b(21,`
        `),w(),b(22,`

        `),x(23,"mat-form-field"),b(24,`
          `),x(25,"mat-label"),b(26,"Transaction Amount"),w(),b(27,`
          `),fe(28,"input",7),ki$1(),b(29,`
          `),Ie(30,s_,5,0,"mat-error",6),b(31,`
        `),w(),b(32,`

        `),x(33,"mat-form-field"),b(34,`
          `),x(35,"mat-label"),b(36,"Payment Type"),w(),b(37,`
          `),x(38,"mat-select",8),b(39,`
            `),Ie(40,p_,2,2,"mat-option",9),b(41,`
          `),w(),ki$1(),b(42,`
        `),w(),b(43,`

        `),x(44,"div",10),b(45,`
          `),x(46,"mat-label",11),b(47,"Show Payment Details"),w(),b(48,`
          `),x(49,"button",12),re("click",function(){return r.addPaymentDetails()}),b(50,`
            `),fe(51,"fa-icon",13),b(52,`
          `),w(),b(53,`
        `),w(),b(54,`

        `),Ie(55,d_,7,0,"mat-form-field",6),b(56,`

        `),Ie(57,u_,7,0,"mat-form-field",6),b(58,`

        `),Ie(59,f_,7,0,"mat-form-field",6),b(60,`

        `),Ie(61,x_,7,0,"mat-form-field",6),b(62,`

        `),Ie(63,__,7,0,"mat-form-field",6),b(64,`

        `),x(65,"mat-card-actions",14),b(66,`
          `),x(67,"button",15),b(68,"Cancel"),w(),b(69,`
          `),x(70,"button",16),b(71,"Submit"),w(),b(72,`
        `),w(),b(73,`

      `),w(),b(74,`

    `),w(),b(75,`

  `),w(),b(76,`

`),w(),b(77,`
`)),l&2){let d=Nt(18);D(4),z("formGroup",r.editTransactionForm),D(9),z("min",r.minDate)("max",r.maxDate)("matDatepicker",d),Li$1(),D(2),z("for",d),D(5),z("ngIf",r.editTransactionForm.controls.transactionDate.hasError("required")),D(8),Li$1(),D(2),z("ngIf",r.editTransactionForm.controls.transactionAmount.hasError("required")),D(8),Li$1(),D(2),z("ngForOf",r.paymentTypeOptions),D(11),z("icon",r.addPaymentDetailsFlag?"minus-circle":"plus-circle"),D(4),z("ngIf",r.editTransactionForm.controls.accountNumber),D(2),z("ngIf",r.editTransactionForm.controls.checkNumber),D(2),z("ngIf",r.editTransactionForm.controls.routingCode),D(2),z("ngIf",r.editTransactionForm.controls.receiptNumber),D(2),z("ngIf",r.editTransactionForm.controls.bankNumber),D(4),z("routerLink",$o$1(16,l_)),D(3),z("disabled",!r.editTransactionForm.valid);}},dependencies:[ii,Yo$1,Oc$1,go$1,Mc,eA,A6,Ti$1,Sn$1,iTe,Sje,Aje,Lje,zT,dh,Mv,Ri$1,Br$1,O3,sv,Ac$1,ja$1,DI,Cc$1,Wne,Na$1,k2,S6,uo$1,_3,bp$1],styles:[".container[_ngcontent-%COMP%]{width:37rem;margin-top:3%;padding-bottom:2%}"],changeDetection:1})}return e})();var C_=()=>["../../../general"],oa=(()=>{class e{sanitizer;route;pentahoUrl;transactionRecieptData;constructor(a,l){this.sanitizer=a,this.route=l,this.route.data.subscribe(r=>{this.transactionRecieptData=r.loansTransactionReciept;});}ngOnInit(){let a=this.transactionRecieptData.headers.get("Content-Type"),l=new Blob([this.transactionRecieptData.body],{type:a}),r=URL.createObjectURL(l);this.pentahoUrl=this.sanitizer.bypassSecurityTrustResourceUrl(r);}static \u0275fac=function(l){return new(l||e)(T(ws$1),T(zs$1))};static \u0275cmp=N({type:e,selectors:[["mifosx-view-reciept"]],standalone:false,decls:13,vars:3,consts:[[1,"container"],[1,"back-button"],["type","button","color","primary","mat-raised-button","",3,"routerLink"],["icon","arrow-left"],["frameborder","0","width","100%","height","600px;",3,"src"]],template:function(l,r){l&1&&(x(0,"mat-card",0),b(1,`

  `),x(2,"div",1),b(3,`
    `),x(4,"button",2),b(5,`
      `),fe(6,"fa-icon",3),b(7,"\xA0\xA0Back"),w(),b(8,`
  `),w(),b(9,`

  `),fe(10,"iframe",4),b(11,`

`),w(),b(12,`
`)),l&2&&(D(4),z("routerLink",$o$1(2,C_)),D(6),z("src",r.pentahoUrl,tE));},dependencies:[Oc$1,Sn$1,Sje,bp$1],styles:[".container[_ngcontent-%COMP%]{max-width:50rem}.container[_ngcontent-%COMP%]   .back-button[_ngcontent-%COMP%]{max-height:2%;margin-bottom:2%}"],changeDetection:1})}return e})();var g_=()=>["../"];function h_(e,m){if(e&1&&fe(0,"iframe",13),e&2){let a=K();z("src",a.pentahoUrl,tE);}}var ra=(()=>{class e{sanitizer;reportsService;formBuilder;datePipe;route;minDate=new Date(2e3,0,1);maxDate=new Date;transactionsReportForm;hideOutput=true;pentahoUrl;loansAccountId;constructor(a,l,r,d,h){this.sanitizer=a,this.reportsService=l,this.formBuilder=r,this.datePipe=d,this.route=h,this.route.parent.parent.data.subscribe(I=>{this.loansAccountId=I.loanDetailsData.accountNo;});}ngOnInit(){this.createTransactionsReportForm();}createTransactionsReportForm(){this.transactionsReportForm=this.formBuilder.group({fromDate:["",mi$1.required],toDate:["",mi$1.required]});}generate(){let a={"output-type":"PDF",R_startDate:this.datePipe.transform(this.transactionsReportForm.value.fromDate,"yyyy-MM-dd"),R_endDate:this.datePipe.transform(this.transactionsReportForm.value.toDate,"yyyy-MM-dd"),R_selectLoan:this.loansAccountId};this.reportsService.getPentahoRunReportData("Client Loan Account Schedule",a,"default","en","dd MMMM yyyy").subscribe(l=>{let r=l.headers.get("Content-Type"),d=new Blob([l.body],{type:r}),h=URL.createObjectURL(d);this.pentahoUrl=this.sanitizer.bypassSecurityTrustResourceUrl(h),this.hideOutput=false;});}static \u0275fac=function(l){return new(l||e)(T(ws$1),T($$1),T(AI),T(_te),T(zs$1))};static \u0275cmp=N({type:e,selectors:[["mifosx-export-transactions"]],standalone:false,decls:57,vars:13,consts:[["fromDatePicker",""],["toDatePicker",""],["fxLayout","column",1,"m-t-20",3,"ngSubmit","formGroup"],["fxLayout","row","fxLayoutGap","3%","fxLayoutAlign","center"],["fxFlex","30%"],["matInput","","required","","formControlName","fromDate",3,"min","max","matDatepicker"],["matSuffix","",3,"for"],["matInput","","required","","formControlName","toDate",3,"min","max","matDatepicker"],["fxLayout","row","fxLayout.xs","column","fxLayoutAlign","center","fxLayoutGap","5%",1,"generate-button"],["type","button","mat-raised-button","",3,"routerLink"],["mat-raised-button","","color","primary",3,"disabled"],["icon","cogs"],["frameborder","0","width","100%","height","750px;",3,"src",4,"ngIf"],["frameborder","0","width","100%","height","750px;",3,"src"]],template:function(l,r){if(l&1&&(x(0,"form",2),re("ngSubmit",function(){return r.generate()}),b(1,`

  `),x(2,"div",3),b(3,`

    `),x(4,"mat-form-field",4),b(5,`
      `),x(6,"mat-label"),b(7,"From Date"),w(),b(8,`
      `),fe(9,"input",5),ki$1(),b(10,`
      `),fe(11,"mat-datepicker-toggle",6),b(12,`
      `),fe(13,"mat-datepicker",null,0),b(15,`
      `),x(16,"mat-error"),b(17,`
        From date is `),x(18,"strong"),b(19,"required"),w(),b(20,`
      `),w(),b(21,`
    `),w(),b(22,`

    `),x(23,"mat-form-field",4),b(24,`
      `),x(25,"mat-label"),b(26,"To Date"),w(),b(27,`
      `),fe(28,"input",7),ki$1(),b(29,`
      `),fe(30,"mat-datepicker-toggle",6),b(31,`
      `),fe(32,"mat-datepicker",null,1),b(34,`
      `),x(35,"mat-error"),b(36,`
        To date is `),x(37,"strong"),b(38,"required"),w(),b(39,`
      `),w(),b(40,`
    `),w(),b(41,`

  `),w(),b(42,`

  `),x(43,"div",8),b(44,`
    `),x(45,"button",9),b(46,"Cancel"),w(),b(47,`
    `),x(48,"button",10),b(49,`
    `),fe(50,"fa-icon",11),b(51,"\xA0\xA0Generate Report \xA0"),w(),b(52,`
  `),w(),b(53,`

`),w(),b(54,`

`),Ie(55,h_,1,1,"iframe",12),b(56,`
`)),l&2){let d=Nt(14),h=Nt(33);z("formGroup",r.transactionsReportForm),D(9),z("min",r.minDate)("max",r.maxDate)("matDatepicker",d),Li$1(),D(2),z("for",d),D(17),z("min",r.minDate)("max",r.maxDate)("matDatepicker",h),Li$1(),D(2),z("for",h),D(15),z("routerLink",$o$1(12,g_)),D(3),z("disabled",!r.transactionsReportForm.valid),D(7),z("ngIf",!r.hideOutput);}},dependencies:[Yo$1,Oc$1,go$1,Mc,eA,wc$1,Sn$1,zT,dh,Mv,Ri$1,Br$1,O3,sv,Ac$1,DI,Cc$1,Na$1,k2,S6,uo$1,_3,bp$1],styles:[".generate-button[_ngcontent-%COMP%]{max-height:2%;padding:1% 0 2% 6%;align-self:center}"],changeDetection:1})}return e})();var Me=(()=>{class e{loansService;constructor(a){this.loansService=a;}resolve(a){let l=a.paramMap.get("loanId")||a.parent.paramMap.get("loanId")||a.parent.parent.paramMap.get("loanId");return this.loansService.getLoanAccountAssociationDetails(l)}static \u0275fac=function(l){return new(l||e)(ie(E))};static \u0275prov=de({token:e,factory:e.\u0275fac})}return e})();var un=(()=>{class e{loansService;constructor(a){this.loansService=a;}resolve(a){let l=a.parent.paramMap.get("loanId");return this.loansService.getLoanNotes(l)}static \u0275fac=function(l){return new(l||e)(ie(E))};static \u0275prov=de({token:e,factory:e.\u0275fac})}return e})();var fn=(()=>{class e{loansService;constructor(a){this.loansService=a;}resolve(){return this.loansService.getLoanDataTables()}static \u0275fac=function(l){return new(l||e)(ie(E))};static \u0275prov=de({token:e,factory:e.\u0275fac})}return e})();var xn=(()=>{class e{loansService;constructor(a){this.loansService=a;}resolve(a){let l=a.parent.parent.paramMap.get("loanId"),r=a.paramMap.get("datatableName");return this.loansService.getLoanDatatable(l,r)}static \u0275fac=function(l){return new(l||e)(ie(E))};static \u0275prov=de({token:e,factory:e.\u0275fac})}return e})();var _n=(()=>{class e{loansService;constructor(a){this.loansService=a;}resolve(a){let l=a.parent.paramMap.get("loanId"),r=a.paramMap.get("action");return r==="Assign Loan Officer"||r==="Change Loan Officer"?this.loansService.getLoanTemplate(l):r==="Waive Interest"?this.loansService.getLoanActionTemplate(l,"waiveinterest"):r==="Write Off"?this.loansService.getLoanActionTemplate(l,"writeoff"):r==="Close"?this.loansService.getLoanActionTemplate(l,"close"):r==="Close (as Rescheduled)"?this.loansService.getLoanActionTemplate(l,"close-rescheduled"):r==="Reschedule"?this.loansService.rescheduleLoanTemplate():r==="Prepay Loan"?this.loansService.getLoanActionTemplate(l,"prepayLoan"):r==="Add Collateral"?this.loansService.getLoanCollateralTemplate(l):r==="Disburse to Savings"?this.loansService.getLoanActionTemplate(l,"disburseToSavings"):r==="Recovery Payment"?this.loansService.getLoanActionTemplate(l,"recoverypayment"):r==="View Guarantors"?this.loansService.getLoanAccountResource(l,"guarantors"):r==="Create Guarantor"?this.loansService.getGuarantorTemplate(l):r==="Disburse"?this.loansService.getLoanActionTemplate(l,"disburse"):r==="Loan Screen Reports"?this.loansService.getLoanScreenReportsData():r==="Approve"?this.loansService.getLoanApprovalTemplate(l):r==="Add Loan Charge"?this.loansService.getLoanChargeTemplateResource(l):void 0}static \u0275fac=function(l){return new(l||e)(ie(E))};static \u0275prov=de({token:e,factory:e.\u0275fac})}return e})();var Cn=(()=>{class e{loansService;constructor(a){this.loansService=a;}resolve(a){let l=a.parent.parent.paramMap.get("clientId");return this.loansService.getLoansAccountTemplateResource(l)}static \u0275fac=function(l){return new(l||e)(ie(E))};static \u0275prov=de({token:e,factory:e.\u0275fac})}return e})();var vn=(()=>{class e{loansService;constructor(a){this.loansService=a;}resolve(a){let l=a.parent.paramMap.get("loanId");return this.loansService.getLoanDocuments(l)}static \u0275fac=function(l){return new(l||e)(ie(E))};static \u0275prov=de({token:e,factory:e.\u0275fac})}return e})();var gn=(()=>{class e{loansService;constructor(a){this.loansService=a;}resolve(a){let l=a.parent.paramMap.get("loanId");return this.loansService.getLoansAccountAndTemplateResource(l)}static \u0275fac=function(l){return new(l||e)(ie(E))};static \u0275prov=de({token:e,factory:e.\u0275fac})}return e})();var hn=(()=>{class e{loansService;constructor(a){this.loansService=a;}resolve(a){let l=a.parent.parent.paramMap.get("loanId"),r=a.paramMap.get("id");return this.loansService.getLoansAccountCharge(l,r)}static \u0275fac=function(l){return new(l||e)(ie(E))};static \u0275prov=de({token:e,factory:e.\u0275fac})}return e})();var Sn=(()=>{class e{loansService;constructor(a){this.loansService=a;}resolve(a){let l=a.parent.parent.parent.paramMap.get("loanId"),r=a.paramMap.get("id");return this.loansService.getLoansAccountTransaction(l,r)}static \u0275fac=function(l){return new(l||e)(ie(E))};static \u0275prov=de({token:e,factory:e.\u0275fac})}return e})();var yn=(()=>{class e{reportsService;constructor(a){this.reportsService=a;}resolve(a){let r={"output-type":"PDF",R_transactionId:a.paramMap.get("id")};return this.reportsService.getPentahoRunReportData("Loan Transaction Receipt",r,"default","en","dd MMMM yyyy")}static \u0275fac=function(l){return new(l||e)(ie($$1))};static \u0275prov=de({token:e,factory:e.\u0275fac})}return e})();var Dn=(()=>{class e{loansService;constructor(a){this.loansService=a;}resolve(a){let l=a.parent.parent.parent.paramMap.get("loanId"),r=a.paramMap.get("id");return this.loansService.getLoansAccountTransactionTemplate(l,r)}static \u0275fac=function(l){return new(l||e)(ie(E))};static \u0275prov=de({token:e,factory:e.\u0275fac})}return e})();var S_=[{path:"",data:{title:"Loans",breadcrumb:"Loans",routeParamBreadcrumb:false},children:[{path:"create",data:{title:"Create Loans Account",breadcrumb:"Create Loans Account"},component:Ki,resolve:{loansAccountTemplate:Cn}},{path:":loanId",data:{title:"Loan View",routeParamBreadcrumb:"loanId"},children:[{path:"",component:oi,resolve:{loanDetailsData:Me,loanDatatables:fn},children:[{path:"general",component:ri,data:{title:"General",breadcrumb:"General",routeParamBreadcrumb:false}},{path:"accountdetail",component:mi,data:{title:"Account Detail",breadcrumb:"Account Detail",routeParamBreadcrumb:false}},{path:"original-schedule",component:pi,data:{title:"Original Schedule",breadcrumb:"Original Schedule",routeParamBreadcrumb:false}},{path:"repayment-schedule",component:ci,data:{title:"Repayment Schedule",breadcrumb:"Repayment Schedule",routeParamBreadcrumb:false}},{path:"transactions",data:{title:"Loans Account Transactions",breadcrumb:"Transactions",routeParamBreadcrumb:false},children:[{path:"",component:si},{path:"export",component:ra}]},{path:"loan-collateral",component:Wi,data:{title:"Loan Collateral Details",breadcrumb:"Loan Collateral Details",routeParamBreadcrumb:false}},{path:"loan-tranche-details",component:$i,data:{title:"Loan Tranche Details",breadcrumb:"Loan Tranche Details",routeParamBreadcrumb:false}},{path:"overdue-charges",component:ui,data:{title:"Overdue Charges",breadcrumb:"Overdue Charges",routeParamBreadcrumb:false}},{path:"floating-interest-rates",component:Hi,data:{title:"Floating Interest Rates",breadcrumb:"Floating Interest Rates",routeParamBreadcrumb:false}},{path:"charges",data:{title:"Loans Account Charges",breadcrumb:"Charges",routeParamBreadcrumb:false},component:fi},{path:"loan-documents",component:Zi,data:{title:"Loan Documents",breadcrumb:"Loan Documents",routeParamBreadcrumb:false},resolve:{loanDocuments:vn}},{path:"notes",component:li,data:{title:"Notes",breadcrumb:"Notes",routeParamBreadcrumb:false},resolve:{loanNotes:un}},{path:"standing-instruction",component:ta,data:{title:"Standing Instructions",breadcrumb:"Standing Instructions",routeParamBreadcrumb:false}},{path:"datatables",children:[{path:":datatableName",component:Ci,data:{title:"Data Table View",routeParamBreadcrumb:"datatableName"},resolve:{loanDatatable:xn}}]}]},{path:"transactions",data:{title:"Loans Account Transactions",breadcrumb:"Transactions",routeParamBreadcrumb:false},resolve:{loanDetailsAssociationData:Me},children:[{path:"",redirectTo:"../transactions",pathMatch:"prefix"},{path:":id",data:{routeParamBreadcrumb:"id"},children:[{path:"",component:ia,resolve:{loansAccountTransaction:Sn}},{path:"edit",component:aa,data:{breadcrumb:"Edit",routeParamBreadcrumb:false},resolve:{loansAccountTransactionTemplate:Dn}},{path:"reciept",component:oa,data:{breadcrumb:"Reciept",routeParamBreadcrumb:false},resolve:{loansTransactionReciept:yn}}]}]},{path:"charges",data:{title:"Loans Account Charges",breadcrumb:"Charges",routeParamBreadcrumb:false},children:[{path:"",redirectTo:"../charges",pathMatch:"prefix"},{path:":id",data:{routeParamBreadcrumb:"id"},component:na,resolve:{loansAccountCharge:hn,loanDetailsData:Me}}]},{path:"actions/:action",component:qi,data:{title:"Loan Account Actions",routeParamBreadcrumb:"action"},resolve:{actionButtonData:_n}},{path:"transfer-funds",loadChildren:()=>import('./chunk-DPCJlLMd.js').then(e=>e.AccountTransfersModule)},{path:"edit-loans-account",data:{title:"Edit Loans Account",breadcrumb:"Edit Loans Account",routeParamBreadcrumb:"Edit"},component:ea,resolve:{loansAccountAndTemplate:gn}}]}]}],ma=(()=>{class e{static \u0275fac=function(l){return new(l||e)};static \u0275mod=$({type:e});static \u0275inj=U({providers:[Me,un,fn,xn,_n,Cn,vn,gn,hn,Sn,Dn,yn],imports:[O0e.forChild(S_),O0e]})}return e})();var M3=(()=>{class e{static \u0275fac=function(l){return new(l||e)};static \u0275mod=$({type:e});static \u0275inj=U({providers:[_te],imports:[yQe,ma,nXe,NQe]})}return e})();export{M3 as LoansModule};