import {$,U,y as yQe,N as NQe,n as nXe,_ as _te,O as O0e,i as ie,d as de,a as O,R as Re,T,z as zs,G as Gr$1,c as N,e as zB,C as CNe,I as Iv,l as fi$1,u as B,m as mi$1,A as AI,r,h as _Ne,E as En$1,o as rr,v as bc,x as i3,D as ii$1,Y as Yo,F as go,ap as Mc,J as wc,S as SBe,K as Sn$1,L as Sje,M as Aje,P as Lje,V as Tje,W as zje,bS as Ije,X as Eje,Z as kje,a0 as Pc,a1 as l1,a2 as Vh,a3 as zfe,a4 as Nfe,a5 as ia$1,a9 as XQe,a6 as ty,a7 as bp,a8 as T0e,ab as rV,ac as x,ad as b,ae as fe,af as w,ag as nee,ah as Ie,aj as D,ak as z,am as ree,aD as it,an as Y0,aB as Dt$1,ar as uqe,as as mqe,at as bqe,au as pqe,av as fqe,aw as xqe,ax as gqe,ay as vqe,az as Cqe,aA as Mqe,b0 as Rl,b1 as zl,aF as Oc,aG as eA,b9 as Ti$1,ba as zT,bb as dh,bc as Mv,aH as Ri$1,bd as Br$1,be as O3,bf as sv,aJ as Ac,bg as ja,bq as YWe,br as KWe,aM as DI,aN as Cc,aO as Na$1,aP as k2,bi as S6,aQ as uo,aR as _3,aT as ki$1,ai as Nt,aU as Li$1,b2 as uv,bh as Wne,b7 as Pe,bu as A6,bv as yo,bW as aV,bw as Kt,aS as re,bG as aee,aq as R2,b8 as Th,bx as cV,by as see,bt as gc,ao as $o,bz as sfe,bA as Ky,bB as cfe,bC as ofe,aV as ze,aW as j,aX as H,b_ as L2,bj as Fi$1,bk as ci$1,bl as Oi$1,bm as li$1,b6 as P4e,b4 as Iue,b5 as yWe,bF as K,bI as kt,bJ as ot,bK as at}from'./main.js';var A=(()=>{class t{http;constructor(a){this.http=a;}getSharesAccountData(a,o){let r=new fi$1().set("template",o.toString());return this.http.get(`/accounts/share/${a}`,{params:r})}getSharesAccountTemplate(a,o){let r=new fi$1().set("clientId",a);return r=o?r.set("productId",o):r,this.http.get("/accounts/share/template",{params:r})}createSharesAccount(a){return this.http.post("/accounts/share",a)}updateSharesAccount(a,o){return this.http.put(`/accounts/share/${a}`,o)}deleteSharesAccount(a){return this.http.delete(`/accounts/share/${a}`)}executeSharesAccountCommand(a,o,r){let p=new fi$1().set("command",o);return this.http.post(`/accounts/share/${a}`,r,{params:p})}static \u0275fac=function(o){return new(o||t)(ie(bc))};static \u0275prov=de({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Dt=class{optionArray;buttonsArray;constructor(m){this.setOptions(m),this.setButtons(m);}get singleButtons(){return this.buttonsArray}get options(){return this.optionArray}setButtons(m){switch(m){case "Active":this.buttonsArray=[{name:"Apply Additional Shares",icon:"fa fa-arrow-right",taskPermissionName:"APPLYADDITIONAL_SHAREACCOUNT"},{name:"Approve Additional Shares",icon:"fa fa-arrow-right",taskPermissionName:"APPROVEADDITIONAL_SHAREACCOUNT"},{name:"Reject Additional Shares",icon:"fa fa-arrow-left",taskPermissionName:"REJECTADDITIONAL_SHAREACCOUNT"},{name:"Redeem Shares",icon:"fa fa-arrow-left",taskPermissionName:"WITHDRAW_SAVINGSACCOUNT"}];break;case "Submitted and pending approval":this.buttonsArray=[{name:"Modify Application",icon:"fa fa-pencil ",taskPermissionName:"UPDATE_SHAREACCOUNT"},{name:"Approve",icon:"fa fa-check",taskPermissionName:"APPROVE_SHAREACCOUNT"}];break;case "Approved":this.buttonsArray=[{name:"Undo Approval",icon:"fa fa-undo",taskPermissionName:"APPROVALUNDO_SHAREACCOUNT"},{name:"Activate",icon:"fa fa-check",taskPermissionName:"ACTIVATE_SHAREACCOUNT"}];break;default:this.buttonsArray=[];}}setOptions(m){switch(m){case "Active":this.optionArray=[{name:"Close",taskPermissionName:"CLOSE_SHAREACCOUNT"}];break;case "Submitted and pending approval":this.optionArray=[{name:"Reject",taskPermissionName:"REJECT_SHAREACCOUNT"},{name:"Delete",taskPermissionName:"DELETE_SHAREACCOUNT"}];break;default:this.optionArray=[];}}addOption(m){this.optionArray.push(m);}removeButton(m){let o=this.buttonsArray.map(r=>r.name).indexOf(m);this.buttonsArray.splice(o,1);}};var qn=()=>["./transactions"],Vn=()=>["./charges"],Bn=()=>["./dividends"];function Hn(t,m){if(t&1){let a=Kt();x(0,"button",21),re("click",function(){ot(a);let r=K().$implicit,p=K();return at(p.doAction(r.name))}),b(1,`
          `),fe(2,"i"),b(3),w();}if(t&2){let a=K().$implicit;D(2),kt(a.icon),D(),it(" ",a.name);}}function Gn(t,m){if(t&1&&(Rl(0),b(1,`
        `),Ie(2,Hn,4,3,"button",20),b(3,`
      `),zl()),t&2){let a=m.$implicit;D(2),z("mifosxHasPermission",a.taskPermissionName);}}function $n(t,m){if(t&1){let a=Kt();x(0,"button",24),re("click",function(){ot(a);let r=K().$implicit,p=K(2);return at(p.doAction(r.name))}),b(1),w();}if(t&2){let a=K().$implicit;D(),Dt$1(a.name);}}function Un(t,m){if(t&1&&(x(0,"span"),b(1,`
          `),Ie(2,$n,2,1,"button",23),b(3,`
        `),w()),t&2){let a=m.$implicit;D(2),z("mifosxHasPermission",a.taskPermissionName);}}function zn(t,m){if(t&1&&(Rl(0),b(1,`
        `),x(2,"button",22),b(3,"More"),w(),b(4,`
        `),x(5,"mat-menu",null,0),b(7,`
        `),Ie(8,Un,4,1,"span",12),b(9,`
        `),w(),b(10,`
      `),zl()),t&2){let a=Nt(6),o=K();D(2),z("matMenuTriggerFor",a),D(6),z("ngForOf",o.buttonConfig.options);}}function Qn(t,m){if(t&1&&(x(0,"a",25,1),b(2,`
        Transactions
      `),w()),t&2){let a=Nt(1);z("routerLink",$o(2,qn))("active",a.isActive);}}function Wn(t,m){if(t&1&&(x(0,"a",25,2),b(2,`
        Charges
      `),w()),t&2){let a=Nt(1);z("routerLink",$o(2,Vn))("active",a.isActive);}}function Jn(t,m){if(t&1&&(x(0,"a",25,3),b(2,`
        Dividends
      `),w()),t&2){let a=Nt(1);z("routerLink",$o(2,Bn))("active",a.isActive);}}var hn=(()=>{class t{route;router;sharesService;dialog;sharesAccountData;buttonConfig;constructor(a,o,r,p){this.route=a,this.router=o,this.sharesService=r,this.dialog=p,this.route.data.subscribe(M=>{this.sharesAccountData=M.sharesAccountData;});}ngOnInit(){this.setConditionalButtons();}setConditionalButtons(){let a=this.sharesAccountData.status.value;if(this.buttonConfig=new Dt(a),this.sharesAccountData.charges&&this.sharesAccountData.charges.forEach(r=>{r.name==="Annual fee - INR"&&this.buttonConfig.addOption({name:"Apply Anuual Fees",taskPermissionName:"APPLYANNUALFEE_SAVINGSACCOUNT"});}),a==="Active"){let o=this.sharesAccountData.purchasedShares,r=false;o.forEach(p=>{p.status.code==="purchasedSharesStatusType.applied"&&p.type.code==="purchasedSharesType.purchased"&&(r=true);}),r||(this.buttonConfig.removeButton("Approve Additional Shares"),this.buttonConfig.removeButton("Reject Additional Shares"));}}doAction(a){switch(a){case "Approve":case "Reject":case "Close":case "Activate":case "Undo Approval":case "Apply Additional Shares":case "Redeem Shares":case "Approve Additional Shares":case "Reject Additional Shares":this.router.navigate([`actions/${a}`],{relativeTo:this.route});break;case "Modify Application":this.router.navigate(["edit"],{relativeTo:this.route});break;case "Delete":this.deleteSharesAccount();break}}deleteSharesAccount(){this.dialog.open(CNe,{data:{deleteContext:`shares account with id: ${this.sharesAccountData.id}`}}).afterClosed().subscribe(o=>{o.delete&&this.sharesService.deleteSharesAccount(this.sharesAccountData.id).subscribe(()=>{this.router.navigate(["../../"],{relativeTo:this.route});});});}static \u0275fac=function(o){return new(o||t)(T(zs),T(Gr$1),T(A),T(Iv))};static \u0275cmp=N({type:t,selectors:[["mifosx-shares-account-view"]],standalone:false,decls:142,vars:25,consts:[["More","matMenu"],["transactions","routerLinkActive"],["charges","routerLinkActive"],["dividends","routerLinkActive"],[1,"shares-account-card"],["fxLayout","column",1,"header"],[1,"header-title-group"],[1,"profile-image-container"],["mat-card-md-image","","matTooltip","Shares Account","src","assets/images/shares_account_placeholder.png",1,"profile-image"],[1,"mat-typography","account-card-title"],[1,"fa","fa-stop",3,"ngClass","matTooltip"],[1,"account-actions"],[4,"ngFor","ngForOf"],[4,"ngIf"],[1,"content"],["fxLayout","row","fxLayoutGap","2%",1,"shares-account-tables"],["fxFlex","49%"],[1,"table-headers"],["mat-tab-nav-bar","",1,"navigation-tabs"],["mat-tab-link","","routerLinkActive","",3,"routerLink","active",4,"mifosxHasPermission"],["mat-raised-button","",3,"click",4,"mifosxHasPermission"],["mat-raised-button","",3,"click"],["mat-raised-button","",3,"matMenuTriggerFor"],["mat-menu-item","",3,"click",4,"mifosxHasPermission"],["mat-menu-item","",3,"click"],["mat-tab-link","","routerLinkActive","",3,"routerLink","active"]],template:function(o,r){o&1&&(x(0,"mat-card",4),b(1,`

  `),x(2,"mat-card-header",5),b(3,`

    `),x(4,"mat-card-title-group",6),b(5,`

      `),x(6,"div",7),b(7,`
        `),x(8,"div"),b(9,`
          `),fe(10,"img",8),b(11,`
        `),w(),b(12,`
      `),w(),b(13,`

      `),x(14,"div",9),b(15,`
        `),x(16,"mat-card-title"),b(17,`
          `),x(18,"h3"),b(19,`
            `),fe(20,"i",10),nee(21,"statusLookup"),b(22),w(),b(23,`
        `),w(),b(24,`
        `),x(25,"mat-card-subtitle"),b(26,`
          `),x(27,"p"),b(28),fe(29,"br"),b(30),fe(31,"br"),b(32),w(),b(33,`
        `),w(),b(34,`
      `),w(),b(35,`

    `),w(),b(36,`

    `),x(37,"mat-card-actions",11),b(38,`

      `),Ie(39,Gn,4,1,"ng-container",12),b(40,`

      `),Ie(41,zn,11,2,"ng-container",13),b(42,`

    `),w(),b(43,`

  `),w(),b(44,`

  `),x(45,"mat-card-content",14),b(46,`

    `),x(47,"div",15),b(48,`

      `),x(49,"div",16),b(50,`
        `),x(51,"h4",17),b(52,"Shares Details"),w(),b(53,`
        `),x(54,"table"),b(55,`
          `),x(56,"tbody"),b(57,`
            `),x(58,"tr"),b(59,`
              `),x(60,"td"),b(61,"Activated On"),w(),b(62,`
              `),x(63,"td"),b(64),nee(65,"date"),w(),b(66,`
            `),w(),b(67,`
            `),x(68,"tr"),b(69,`
              `),x(70,"td"),b(71,"Currency"),w(),b(72,`
              `),x(73,"td"),b(74),w(),b(75,`
            `),w(),b(76,`
            `),x(77,"tr"),b(78,`
              `),x(79,"td"),b(80,"External Id"),w(),b(81,`
              `),x(82,"td"),b(83),w(),b(84,`
            `),w(),b(85,`
            `),x(86,"tr"),b(87,`
              `),x(88,"td"),b(89,"Linked Savings Account(Dividend Posting)"),w(),b(90,`
              `),x(91,"td"),b(92),w(),b(93,`
            `),w(),b(94,`
          `),w(),b(95,`
        `),w(),b(96,`
      `),w(),b(97,`

      `),x(98,"div",16),b(99,`
        `),x(100,"h4",17),b(101,"Account Summary"),w(),b(102,`
        `),x(103,"table"),b(104,`
          `),x(105,"tbody"),b(106,`
            `),x(107,"tr"),b(108,`
              `),x(109,"td"),b(110,"Approved Shares"),w(),b(111,`
              `),x(112,"td"),b(113),w(),b(114,`
            `),w(),b(115,`
            `),x(116,"tr"),b(117,`
              `),x(118,"td"),b(119,"Pending for Approval Shares"),w(),b(120,`
              `),x(121,"td"),b(122),w(),b(123,`
            `),w(),b(124,`
          `),w(),b(125,`
        `),w(),b(126,`
      `),w(),b(127,`

    `),w(),b(128,`

    `),x(129,"nav",18),b(130,`
      `),Ie(131,Qn,3,3,"a",19),b(132,`
      `),Ie(133,Wn,3,3,"a",19),b(134,`
      `),Ie(135,Jn,3,3,"a",19),b(136,`
    `),w(),b(137,`

    `),fe(138,"router-outlet"),b(139,`

  `),w(),b(140,`

`),w(),b(141,`
`)),o&2&&(D(20),z("ngClass",ree(21,21,r.sharesAccountData.status.code))("matTooltip",r.sharesAccountData.status.value),D(2),it(`
              Account Name : `,r.sharesAccountData.productName,`
          `),D(6),Y0(`
            Account #: `,r.sharesAccountData.accountNo," | Client Name: ",r.sharesAccountData.clientName),D(2),Y0(`
            Current Market Price: `,r.sharesAccountData.currency.displaySymbol,"\xA0",r.sharesAccountData.currentMarketPrice),D(2),Y0(`
            Lockin Period: `,r.sharesAccountData.lockinPeriod?r.sharesAccountData.lockinPeriod:"N/A",`
            `,r.sharesAccountData.lockinPeriod?r.sharesAccountData.lockPeriodTypeEnum.value:"",`
          `),D(7),z("ngForOf",r.buttonConfig.singleButtons),D(2),z("ngIf",r.buttonConfig.options.length),D(23),Dt$1(r.sharesAccountData.timeline.activatedOnDate?ree(65,23,r.sharesAccountData.timeline.activatedOnDate):"Not Activated"),D(10),Y0("",r.sharesAccountData.currency.name," [",r.sharesAccountData.currency.code,"]"),D(9),Dt$1(r.sharesAccountData.externalId?r.sharesAccountData.externalId:"Not Provided"),D(9),Dt$1(r.sharesAccountData.savingsAccountNumber?r.sharesAccountData.savingsAccountNumber:"Unassigned"),D(21),Dt$1(r.sharesAccountData.summary.totalApprovedShares),D(9),Dt$1(r.sharesAccountData.summary.totalPendingForApprovalShares),D(9),z("mifosxHasPermission","READ_SHAREACCOUNTPURCHASE"),D(2),z("mifosxHasPermission","READ_SHAREACCOUNTCHARGE"),D(2),z("mifosxHasPermission","READ_SHAREACCOUNTDIVIDENDS"));},dependencies:[i3,ii$1,Yo,go,Mc,wc,SBe,Sn$1,Sje,Aje,Lje,Tje,zje,Ije,Eje,kje,Pc,l1,Vh,zfe,Nfe,ia$1,XQe,ty,bp,T0e,_te,rV],styles:[".shares-account-card[_ngcontent-%COMP%]{margin:0 auto;max-width:80rem;width:90%;padding:0}.shares-account-card[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]{padding:1%}.shares-account-card[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .header-title-group[_ngcontent-%COMP%]   .account-card-title[_ngcontent-%COMP%]{color:#fff;width:90%}.shares-account-card[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .header-title-group[_ngcontent-%COMP%]   .account-card-title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#fff}.shares-account-card[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .profile-image-container[_ngcontent-%COMP%]{margin:1%}.shares-account-card[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .profile-image-container[_ngcontent-%COMP%]   .profile-image[_ngcontent-%COMP%]{object-fit:cover;border-radius:20px}.shares-account-card[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .account-actions[_ngcontent-%COMP%]{align-self:flex-end;margin:0 1%}.shares-account-card[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .account-actions[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{margin-bottom:2px;margin-right:4px}.shares-account-card[_ngcontent-%COMP%]   .navigation-tabs[_ngcontent-%COMP%]{background-color:#f2f2f2;overflow:auto}.shares-account-card[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .shares-account-tables[_ngcontent-%COMP%]{padding:1%;margin:1%}.shares-account-card[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .shares-account-tables[_ngcontent-%COMP%]   .table-headers[_ngcontent-%COMP%]{margin:0;padding:6px}.shares-account-card[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .shares-account-tables[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{padding:3px}.shares-account-card[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], .shares-account-card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover{cursor:pointer}"],changeDetection:1})}return t})();function Yn(t,m){t&1&&(x(0,"th",14),b(1," Transaction Date "),w());}function Kn(t,m){if(t&1&&(x(0,"td",15),b(1),nee(2,"date"),w()),t&2){let a=m.$implicit;D(),it(" ",ree(2,1,a.purchasedDate)," ");}}function Xn(t,m){t&1&&(x(0,"th",14),b(1," Transaction Type "),w());}function Zn(t,m){if(t&1&&(x(0,"td",15),b(1),w()),t&2){let a=m.$implicit;D(),Y0(" ",a.type.value," ",a.type.value!=="Charge Payment"?"("+a.status.value+")":"");}}function ei(t,m){t&1&&(x(0,"th",14),b(1," Total Shares "),w());}function ti(t,m){if(t&1&&(x(0,"td",15),b(1),w()),t&2){let a=m.$implicit;D(),it(" ",a.numberOfShares," ");}}function ni(t,m){t&1&&(x(0,"th",14),b(1," Purhcased/Redeemed Price "),w());}function ii(t,m){if(t&1&&(x(0,"td",15),b(1),w()),t&2){let a=m.$implicit,o=K();D(),Y0("",o.shareAccountData.currency.displaySymbol,"\xA0",a.purchasedPrice);}}function ai(t,m){t&1&&(x(0,"th",14),b(1," Charge Amount "),w());}function ri(t,m){if(t&1&&(x(0,"td",15),b(1),w()),t&2){let a=m.$implicit,o=K();D(),Y0("",o.shareAccountData.currency.displaySymbol,"\xA0",a.type.value==="Charge Payment"?a.amount:a.chargeAmount);}}function oi(t,m){t&1&&(x(0,"th",14),b(1," Amount Recieved/Returned "),w());}function ci(t,m){if(t&1&&(x(0,"td",15),b(1),w()),t&2){let a=m.$implicit,o=K();D(),Y0("",o.shareAccountData.currency.displaySymbol,"\xA0",a.amount);}}function mi(t,m){t&1&&fe(0,"tr",16);}function si(t,m){t&1&&fe(0,"tr",17);}var fn=(()=>{class t{route;shareAccountData;transactionsData;dataSource;displayedColumns=["transactionDate","transactionType","totalShares","purchasedOrRedeemedPrice","chargeAmount","amountRecievedOrReturned"];constructor(a){this.route=a,this.route.parent.data.subscribe(o=>{this.shareAccountData=o.sharesAccountData,this.transactionsData=this.shareAccountData.purchasedShares;});}ngOnInit(){this.dataSource=new zB(this.transactionsData);}static \u0275fac=function(o){return new(o||t)(T(zs))};static \u0275cmp=N({type:t,selectors:[["mifosx-transactions-tab"]],standalone:false,decls:61,vars:3,consts:[[1,"tab-container","mat-typography"],[1,"m-b-10"],[1,"mat-elevation-z1","m-b-25"],["mat-table","",3,"dataSource"],["matColumnDef","transactionDate"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","transactionType"],["matColumnDef","totalShares"],["matColumnDef","purchasedOrRedeemedPrice"],["matColumnDef","chargeAmount"],["matColumnDef","amountRecievedOrReturned"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["mat-header-cell",""],["mat-cell",""],["mat-header-row",""],["mat-row",""]],template:function(o,r){o&1&&(x(0,"div",0),b(1,`

  `),x(2,"div",1),b(3,`
    `),x(4,"h3"),b(5,"All Transactions"),w(),b(6,`
  `),w(),b(7,`

  `),x(8,"div",2),b(9,`

    `),x(10,"table",3),b(11,`

      `),Rl(12,4),b(13,`
        `),Ie(14,Yn,2,0,"th",5),b(15,`
        `),Ie(16,Kn,3,3,"td",6),b(17,`
      `),zl(),b(18,`

      `),Rl(19,7),b(20,`
        `),Ie(21,Xn,2,0,"th",5),b(22,`
        `),Ie(23,Zn,2,2,"td",6),b(24,`
      `),zl(),b(25,`

      `),Rl(26,8),b(27,`
        `),Ie(28,ei,2,0,"th",5),b(29,`
        `),Ie(30,ti,2,1,"td",6),b(31,`
      `),zl(),b(32,`

      `),Rl(33,9),b(34,`
        `),Ie(35,ni,2,0,"th",5),b(36,`
        `),Ie(37,ii,2,2,"td",6),b(38,`
      `),zl(),b(39,`

      `),Rl(40,10),b(41,`
        `),Ie(42,ai,2,0,"th",5),b(43,`
        `),Ie(44,ri,2,2,"td",6),b(45,`
      `),zl(),b(46,`

      `),Rl(47,11),b(48,`
        `),Ie(49,oi,2,0,"th",5),b(50,`
        `),Ie(51,ci,2,2,"td",6),b(52,`
      `),zl(),b(53,`

      `),Ie(54,mi,1,0,"tr",12),b(55,`
      `),Ie(56,si,1,0,"tr",13),b(57,`

    `),w(),b(58,`

  `),w(),b(59,`

`),w(),b(60,`
`)),o&2&&(D(10),z("dataSource",r.dataSource),D(44),z("matHeaderRowDef",r.displayedColumns),D(2),z("matRowDefColumns",r.displayedColumns));},dependencies:[uqe,mqe,bqe,pqe,fqe,xqe,gqe,vqe,Cqe,Mqe,_te],styles:[".tab-container[_ngcontent-%COMP%]{padding:1%;margin:1%}.tab-container[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin:1% auto}.tab-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]{width:100%}"],changeDetection:1})}return t})();function li(t,m){t&1&&(x(0,"th",16),b(1," Name "),w());}function pi(t,m){if(t&1&&(x(0,"td",17),b(1),w()),t&2){let a=m.$implicit;D(),it(" ",a.name," ");}}function ui(t,m){t&1&&(x(0,"th",16),b(1," Fee/Penalty "),w());}function di(t,m){if(t&1&&(x(0,"td",17),b(1),w()),t&2){let a=m.$implicit;D(),it(" ",a.penalty===true?"Penalty":"Fee"," ");}}function hi(t,m){t&1&&(x(0,"th",16),b(1," Payment Due At "),w());}function fi(t,m){if(t&1&&(x(0,"td",17),b(1),w()),t&2){let a=m.$implicit;D(),it(" ",a.chargeTimeType.value," ");}}function xi(t,m){t&1&&(x(0,"th",16),b(1," Calculation Type "),w());}function Si(t,m){if(t&1&&(x(0,"td",17),b(1),w()),t&2){let a=m.$implicit;D(),it(" ",a.chargeCalculationType.value," ");}}function vi(t,m){t&1&&(x(0,"th",16),b(1," Due "),w());}function Ci(t,m){if(t&1&&(x(0,"td",17),b(1),w()),t&2){let a=m.$implicit;D(),Y0(" ",a.currency.displaySymbol,"\xA0",a.amount," ");}}function Ai(t,m){t&1&&(x(0,"th",16),b(1," Paid "),w());}function gi(t,m){if(t&1&&(x(0,"td",17),b(1),w()),t&2){let a=m.$implicit;D(),Y0(" ",a.currency.displaySymbol,"\xA0",a.amountPaid," ");}}function _i(t,m){t&1&&(x(0,"th",16),b(1," Waived "),w());}function Di(t,m){if(t&1&&(x(0,"td",17),b(1),w()),t&2){let a=m.$implicit;D(),Y0(" ",a.currency.displaySymbol,"\xA0",a.amountWaived," ");}}function yi(t,m){t&1&&(x(0,"th",16),b(1," Outstanding "),w());}function Ti(t,m){if(t&1&&(x(0,"td",17),b(1),w()),t&2){let a=m.$implicit;D(),Y0(" ",a.currency.displaySymbol,"\xA0",a.amountOutstanding," ");}}function bi(t,m){t&1&&fe(0,"tr",18);}function Ei(t,m){t&1&&fe(0,"tr",19);}var xn=(()=>{class t{route;sharesAccountData;chargesData;dataSource;displayedColumns=["name","feeOrPenalty","paymentDueAt","calculationType","due","paid","waived","outstanding"];constructor(a){this.route=a,this.route.parent.data.subscribe(o=>{this.sharesAccountData=o.sharesAccountData,this.chargesData=this.sharesAccountData.charges;});}ngOnInit(){let a=this.chargesData?this.chargesData.filter(o=>o.isActive):[];this.dataSource=new zB(a);}static \u0275fac=function(o){return new(o||t)(T(zs))};static \u0275cmp=N({type:t,selectors:[["mifosx-charges-tab"]],standalone:false,decls:75,vars:3,consts:[[1,"tab-container","mat-typography"],[1,"m-b-10"],[1,"mat-elevation-z1","m-b-25"],["mat-table","",3,"dataSource"],["matColumnDef","name"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","feeOrPenalty"],["matColumnDef","paymentDueAt"],["matColumnDef","calculationType"],["matColumnDef","due"],["matColumnDef","paid"],["matColumnDef","waived"],["matColumnDef","outstanding"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["mat-header-cell",""],["mat-cell",""],["mat-header-row",""],["mat-row",""]],template:function(o,r){o&1&&(x(0,"div",0),b(1,`

  `),x(2,"div",1),b(3,`
    `),x(4,"h3"),b(5,"All Charges"),w(),b(6,`
  `),w(),b(7,`

  `),x(8,"div",2),b(9,`

    `),x(10,"table",3),b(11,`

      `),Rl(12,4),b(13,`
        `),Ie(14,li,2,0,"th",5),b(15,`
        `),Ie(16,pi,2,1,"td",6),b(17,`
      `),zl(),b(18,`

      `),Rl(19,7),b(20,`
        `),Ie(21,ui,2,0,"th",5),b(22,`
        `),Ie(23,di,2,1,"td",6),b(24,`
      `),zl(),b(25,`

      `),Rl(26,8),b(27,`
        `),Ie(28,hi,2,0,"th",5),b(29,`
        `),Ie(30,fi,2,1,"td",6),b(31,`
      `),zl(),b(32,`

      `),Rl(33,9),b(34,`
        `),Ie(35,xi,2,0,"th",5),b(36,`
        `),Ie(37,Si,2,1,"td",6),b(38,`
      `),zl(),b(39,`

      `),Rl(40,10),b(41,`
        `),Ie(42,vi,2,0,"th",5),b(43,`
        `),Ie(44,Ci,2,2,"td",6),b(45,`
      `),zl(),b(46,`

      `),Rl(47,11),b(48,`
        `),Ie(49,Ai,2,0,"th",5),b(50,`
        `),Ie(51,gi,2,2,"td",6),b(52,`
      `),zl(),b(53,`

      `),Rl(54,12),b(55,`
        `),Ie(56,_i,2,0,"th",5),b(57,`
        `),Ie(58,Di,2,2,"td",6),b(59,`
      `),zl(),b(60,`

      `),Rl(61,13),b(62,`
        `),Ie(63,yi,2,0,"th",5),b(64,`
        `),Ie(65,Ti,2,2,"td",6),b(66,`
      `),zl(),b(67,`

      `),Ie(68,bi,1,0,"tr",14),b(69,`
      `),Ie(70,Ei,1,0,"tr",15),b(71,`

    `),w(),b(72,`

  `),w(),b(73,`

`),w(),b(74,`
`)),o&2&&(D(10),z("dataSource",r.dataSource),D(58),z("matHeaderRowDef",r.displayedColumns),D(2),z("matRowDefColumns",r.displayedColumns));},dependencies:[uqe,mqe,bqe,pqe,fqe,xqe,gqe,vqe,Cqe,Mqe],styles:[".tab-container[_ngcontent-%COMP%]{padding:1%;margin:1%}.tab-container[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin:1% auto}.tab-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]{width:100%}"],changeDetection:1})}return t})();function Mi(t,m){t&1&&(x(0,"th",12),b(1," Transaction Date "),w());}function Pi(t,m){if(t&1&&(x(0,"td",13),b(1),nee(2,"date"),w()),t&2){let a=m.$implicit;D(),it(" ",ree(2,1,a.postedDate)," ");}}function Ii(t,m){t&1&&(x(0,"th",12),b(1," Amount "),w());}function Fi(t,m){if(t&1&&(x(0,"td",13),b(1),w()),t&2){let a=m.$implicit,o=K();D(),Y0(" ",o.shareAccountData.currency.displaySymbol,"\xA0",a.amount," ");}}function wi(t,m){t&1&&(x(0,"th",12),b(1," Transaction Reference "),w());}function Ri(t,m){if(t&1&&(x(0,"td",13),b(1),w()),t&2){let a=m.$implicit;D(),it(" ",a.savingsTransactionId," ");}}function Oi(t,m){t&1&&(x(0,"th",12),b(1," status "),w());}function ki(t,m){if(t&1&&(x(0,"td",13),b(1),w()),t&2){let a=m.$implicit;D(),it(" ",a.status.value," ");}}function Li(t,m){t&1&&fe(0,"tr",14);}function Ni(t,m){t&1&&fe(0,"tr",15);}var Sn=(()=>{class t{route;shareAccountData;dividendsData;dataSource;displayedColumns=["transactionDate","amount","transactionReference","status"];constructor(a){this.route=a,this.route.parent.data.subscribe(o=>{this.shareAccountData=o.sharesAccountData,this.dividendsData=this.shareAccountData.dividends;});}ngOnInit(){this.dataSource=new zB(this.dividendsData);}static \u0275fac=function(o){return new(o||t)(T(zs))};static \u0275cmp=N({type:t,selectors:[["mifosx-dividends-tab"]],standalone:false,decls:47,vars:3,consts:[[1,"tab-container","mat-typography"],[1,"m-b-10"],[1,"mat-elevation-z1","m-b-25"],["mat-table","",3,"dataSource"],["matColumnDef","transactionDate"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","amount"],["matColumnDef","transactionReference"],["matColumnDef","status"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["mat-header-cell",""],["mat-cell",""],["mat-header-row",""],["mat-row",""]],template:function(o,r){o&1&&(x(0,"div",0),b(1,`

  `),x(2,"div",1),b(3,`
    `),x(4,"h3"),b(5,"All Dividends"),w(),b(6,`
  `),w(),b(7,`

  `),x(8,"div",2),b(9,`

    `),x(10,"table",3),b(11,`

      `),Rl(12,4),b(13,`
        `),Ie(14,Mi,2,0,"th",5),b(15,`
        `),Ie(16,Pi,3,3,"td",6),b(17,`
      `),zl(),b(18,`

      `),Rl(19,7),b(20,`
        `),Ie(21,Ii,2,0,"th",5),b(22,`
        `),Ie(23,Fi,2,2,"td",6),b(24,`
      `),zl(),b(25,`

      `),Rl(26,8),b(27,`
        `),Ie(28,wi,2,0,"th",5),b(29,`
        `),Ie(30,Ri,2,1,"td",6),b(31,`
      `),zl(),b(32,`

      `),Rl(33,9),b(34,`
        `),Ie(35,Oi,2,0,"th",5),b(36,`
        `),Ie(37,ki,2,1,"td",6),b(38,`
      `),zl(),b(39,`

      `),Ie(40,Li,1,0,"tr",10),b(41,`
      `),Ie(42,Ni,1,0,"tr",11),b(43,`

    `),w(),b(44,`

  `),w(),b(45,`

`),w(),b(46,`
`)),o&2&&(D(10),z("dataSource",r.dataSource),D(30),z("matHeaderRowDef",r.displayedColumns),D(2),z("matRowDefColumns",r.displayedColumns));},dependencies:[uqe,mqe,bqe,pqe,fqe,xqe,gqe,vqe,Cqe,Mqe,_te],styles:[".tab-container[_ngcontent-%COMP%]{padding:1%;margin:1%}.tab-container[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin:1% auto}.tab-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]{width:100%}"],changeDetection:1})}return t})();function ji(t,m){if(t&1&&(x(0,"mat-option",14),b(1),w()),t&2){let a=m.$implicit;z("value",a.id),D(),it(`
          `,a.name,`
        `);}}var He=(()=>{class t{formBuilder;sharesService;sharesAccountTemplate;minDate=new Date(2e3,0,1);maxDate=new Date;productData;sharesAccountDetailsForm;sharesAccountProductTemplate=new B;constructor(a,o){this.formBuilder=a,this.sharesService=o,this.createSharesAccountDetailsForm();}ngOnInit(){this.buildDependencies(),this.sharesAccountTemplate&&(this.productData=this.sharesAccountTemplate.productOptions,this.sharesAccountTemplate.productId&&this.sharesAccountDetailsForm.patchValue({productId:this.sharesAccountTemplate.productId,submittedDate:this.sharesAccountTemplate.timeline.submittedOnDate&&new Date(this.sharesAccountTemplate.timeline.submittedOnDate),externalId:this.sharesAccountTemplate.externalId}));}createSharesAccountDetailsForm(){this.sharesAccountDetailsForm=this.formBuilder.group({productId:["",mi$1.required],submittedDate:["",mi$1.required],externalId:[""]});}buildDependencies(){let a=this.sharesAccountTemplate.clientId;this.sharesAccountDetailsForm.get("productId").valueChanges.subscribe(o=>{this.sharesService.getSharesAccountTemplate(a,o).subscribe(r=>{this.sharesAccountProductTemplate.emit(r);});});}get sharesAccountDetails(){return this.sharesAccountDetailsForm.value}static \u0275fac=function(o){return new(o||t)(T(AI),T(A))};static \u0275cmp=N({type:t,selectors:[["mifosx-shares-account-details-step"]],inputs:{sharesAccountTemplate:"sharesAccountTemplate"},outputs:{sharesAccountProductTemplate:"sharesAccountProductTemplate"},standalone:false,decls:63,vars:6,consts:[["submittedOnDatePicker",""],[3,"formGroup"],["fxLayout","row wrap","fxLayoutGap","2%","fxLayout.lt-md","column"],["fxFlex","48%"],["formControlName","productId","required",""],[3,"value",4,"ngFor","ngForOf"],["matInput","","formControlName","submittedDate","required","",3,"min","max","matDatepicker"],["matSuffix","",3,"for"],["matInput","","formControlName","externalId"],["fxLayout","row","fxLayout.xs","column","fxLayoutAlign","center","fxLayoutGap","2%",1,"margin-t"],["mat-raised-button","","matStepperPrevious","","disabled",""],["icon","arrow-left"],["mat-raised-button","","matStepperNext",""],["icon","arrow-right"],[3,"value"]],template:function(o,r){if(o&1&&(x(0,"form",1),b(1,`

  `),x(2,"div",2),b(3,`

    `),x(4,"mat-form-field",3),b(5,`
      `),x(6,"mat-label"),b(7,"Product Name"),w(),b(8,`
      `),x(9,"mat-select",4),b(10,`
        `),Ie(11,ji,2,2,"mat-option",5),b(12,`
      `),w(),ki$1(),b(13,`
      `),x(14,"mat-error"),b(15,`
        Product Name is `),x(16,"strong"),b(17,"required"),w(),b(18,`
      `),w(),b(19,`
    `),w(),b(20,`

    `),x(21,"mat-form-field",3),b(22,`
      `),x(23,"mat-label"),b(24,"Submitted On"),w(),b(25,`
      `),fe(26,"input",6),ki$1(),b(27,`
      `),fe(28,"mat-datepicker-toggle",7),b(29,`
      `),fe(30,"mat-datepicker",null,0),b(32,`
      `),x(33,"mat-error"),b(34,`
        Submission Date is `),x(35,"strong"),b(36,"required"),w(),b(37,`
      `),w(),b(38,`
    `),w(),b(39,`

    `),x(40,"mat-form-field",3),b(41,`
      `),x(42,"mat-label"),b(43,"External ID"),w(),b(44,`
      `),fe(45,"input",8),ki$1(),b(46,`
    `),w(),b(47,`

  `),w(),b(48,`

  `),x(49,"div",9),b(50,`
    `),x(51,"button",10),b(52,`
      `),fe(53,"fa-icon",11),b(54,`\xA0\xA0
      Previous
    `),w(),b(55,`
    `),x(56,"button",12),b(57,`
      Next\xA0\xA0
      `),fe(58,"fa-icon",13),b(59,`
    `),w(),b(60,`
  `),w(),b(61,`

`),w(),b(62,`
`)),o&2){let p=Nt(31);z("formGroup",r.sharesAccountDetailsForm),D(9),Li$1(),D(2),z("ngForOf",r.productData),D(15),z("min",r.minDate)("max",r.maxDate)("matDatepicker",p),Li$1(),D(2),z("for",p),D(17),Li$1();}},dependencies:[ii$1,Oc,go,Mc,eA,wc,Ti$1,Sn$1,zT,dh,Mv,Ri$1,Br$1,O3,sv,Ac,ja,YWe,KWe,DI,Cc,Na$1,k2,S6,uo,_3],encapsulation:2,changeDetection:1})}return t})();function qi(t,m){if(t&1&&(x(0,"mat-option",24),b(1),w()),t&2){let a=m.$implicit;z("value",a.id),D(),it(`
          `,a.accountNo,`
        `);}}function Vi(t,m){if(t&1&&(x(0,"mat-option",24),b(1),w()),t&2){let a=m.$implicit;z("value",a.id),D(),it(`
          `,a.value,`
        `);}}function Bi(t,m){if(t&1&&(x(0,"mat-option",24),b(1),w()),t&2){let a=m.$implicit;z("value",a.id),D(),it(`
          `,a.value,`
        `);}}var Ge=(()=>{class t{formBuilder;sharesAccountProductTemplate;sharesAccountTemplate;minDate=new Date(2e3,0,1);maxDate=new Date;sharesAccountTermsForm;minimumActivePeriodFrequencyTypeData;lockinPeriodFrequencyTypeData;savingsAccountsData;isSavingsPatched=false;constructor(a){this.formBuilder=a,this.createSharesAccountTermsForm();}ngOnChanges(){this.sharesAccountProductTemplate&&(this.sharesAccountTermsForm.patchValue({currencyCode:this.sharesAccountProductTemplate.currency.code,decimal:this.sharesAccountProductTemplate.currency.decimalPlaces,currencyMultiple:this.sharesAccountProductTemplate.currency.inMultiplesOf,unitPrice:this.sharesAccountProductTemplate.currentMarketPrice,savingsAccountId:""}),this.setOptions(),this.sharesAccountTemplate&&!this.isSavingsPatched&&this.sharesAccountTemplate.savingsAccountId&&(this.sharesAccountTermsForm.get("savingsAccountId").patchValue(this.sharesAccountTemplate.savingsAccountId),this.isSavingsPatched=true));}ngOnInit(){this.sharesAccountTemplate&&this.sharesAccountTermsForm.patchValue({requestedShares:this.sharesAccountTemplate.summary.totalPendingForApprovalShares,minimumActivePeriod:this.sharesAccountTemplate.minimumActivePeriod,minimumActivePeriodFrequencyType:this.sharesAccountTemplate.minimumActivePeriod&&this.sharesAccountTemplate.minimumActivePeriodTypeEnum.id,lockinPeriodFrequency:this.sharesAccountTemplate.lockinPeriod,lockinPeriodFrequencyType:this.sharesAccountTemplate.lockinPeriod&&this.sharesAccountTemplate.lockPeriodTypeEnum.id,applicationDate:this.sharesAccountTemplate.purchasedShares[0].purchasedDate&&new Date(this.sharesAccountTemplate.purchasedShares[0].purchasedDate),allowDividendCalculationForInactiveClients:this.sharesAccountTemplate.allowDividendCalculationForInactiveClients});}createSharesAccountTermsForm(){this.sharesAccountTermsForm=this.formBuilder.group({currencyCode:[{value:"",disabled:true}],decimal:[{value:"",disabled:true}],requestedShares:["",mi$1.required],unitPrice:[{value:"",disabled:true}],currencyMultiple:[{value:"",disabled:true}],savingsAccountId:["",mi$1.required],minimumActivePeriod:[""],minimumActivePeriodFrequencyType:[""],lockinPeriodFrequency:[""],lockinPeriodFrequencyType:[""],applicationDate:["",mi$1.required],allowDividendCalculationForInactiveClients:[false]});}setOptions(){this.minimumActivePeriodFrequencyTypeData=this.sharesAccountProductTemplate.minimumActivePeriodFrequencyTypeOptions,this.lockinPeriodFrequencyTypeData=this.sharesAccountProductTemplate.lockinPeriodFrequencyTypeOptions,this.savingsAccountsData=this.sharesAccountProductTemplate.clientSavingsAccounts;}get sharesAccountTerms(){return this.sharesAccountTermsForm.value}static \u0275fac=function(o){return new(o||t)(T(AI))};static \u0275cmp=N({type:t,selectors:[["mifosx-shares-account-terms-step"]],inputs:{sharesAccountProductTemplate:"sharesAccountProductTemplate",sharesAccountTemplate:"sharesAccountTemplate"},standalone:false,features:[Pe],decls:148,vars:8,consts:[["applicationDatePicker",""],[3,"formGroup"],["fxLayout","row wrap","fxLayoutGap","2%","fxLayout.lt-md","column","fxLayoutAlign.gt-sm","start center"],["fxFlex","48%"],["matInput","","formControlName","currencyCode"],["type","number","matInput","","formControlName","decimal"],["type","number","matInput","","formControlName","requestedShares","required",""],["type","number","matInput","","formControlName","unitPrice"],["type","number","matInput","","formControlName","currencyMultiple"],["formControlName","savingsAccountId","required",""],[3,"value",4,"ngFor","ngForOf"],["matInput","","formControlName","applicationDate","required","",3,"min","max","matDatepicker"],["matSuffix","",3,"for"],["labelPosition","before","formControlName","allowDividendCalculationForInactiveClients","fxFlex","48%"],["fxFlex","98%",1,"mat-h4"],["type","number","matInput","","formControlName","minimumActivePeriod"],["formControlName","minimumActivePeriodFrequencyType"],["type","number","matInput","","formControlName","lockinPeriodFrequency"],["formControlName","lockinPeriodFrequencyType"],["fxLayout","row","fxLayout.xs","column","fxLayoutAlign","center","fxLayoutGap","2%",1,"margin-t"],["mat-raised-button","","matStepperPrevious","","disabled",""],["icon","arrow-left"],["mat-raised-button","","matStepperNext",""],["icon","arrow-right"],[3,"value"]],template:function(o,r){if(o&1&&(x(0,"form",1),b(1,`

  `),x(2,"div",2),b(3,`

    `),x(4,"mat-form-field",3),b(5,`
      `),x(6,"mat-label"),b(7,"Currency"),w(),b(8,`
      `),fe(9,"input",4),ki$1(),b(10,`
    `),w(),b(11,`

    `),x(12,"mat-form-field",3),b(13,`
      `),x(14,"mat-label"),b(15,"Decimal Places"),w(),b(16,`
      `),fe(17,"input",5),ki$1(),b(18,`
    `),w(),b(19,`

    `),x(20,"mat-form-field",3),b(21,`
      `),x(22,"mat-label"),b(23,"Total Number of Shares"),w(),b(24,`
      `),fe(25,"input",6),ki$1(),b(26,`
      `),x(27,"mat-error"),b(28,`
        Total Number of Shares is `),x(29,"strong"),b(30,"required"),w(),b(31,`
      `),w(),b(32,`
    `),w(),b(33,`

    `),x(34,"mat-form-field",3),b(35,`
      `),x(36,"mat-label"),b(37,"Today's Price"),w(),b(38,`
      `),fe(39,"input",7),ki$1(),b(40,`
    `),w(),b(41,`

    `),x(42,"mat-form-field",3),b(43,`
      `),x(44,"mat-label"),b(45,"Currency in multiples of"),w(),b(46,`
      `),fe(47,"input",8),ki$1(),b(48,`
    `),w(),b(49,`

    `),x(50,"mat-form-field",3),b(51,`
      `),x(52,"mat-label"),b(53,"Default Savings Account"),w(),b(54,`
      `),x(55,"mat-select",9),b(56,`
        `),Ie(57,qi,2,2,"mat-option",10),b(58,`
      `),w(),ki$1(),b(59,`
      `),x(60,"mat-error"),b(61,`
        Default Savings Account is `),x(62,"strong"),b(63,"required"),w(),b(64,`
      `),w(),b(65,`
    `),w(),b(66,`

    `),x(67,"mat-form-field",3),b(68,`
      `),x(69,"mat-label"),b(70,"Application Date"),w(),b(71,`
      `),fe(72,"input",11),ki$1(),b(73,`
      `),fe(74,"mat-datepicker-toggle",12),b(75,`
      `),fe(76,"mat-datepicker",null,0),b(78,`
      `),x(79,"mat-error"),b(80,`
        Application Date is `),x(81,"strong"),b(82,"required"),w(),b(83,`
      `),w(),b(84,`
    `),w(),b(85,`

    `),x(86,"mat-checkbox",13),b(87,`
      Allow dividends for inactive clients
    `),w(),ki$1(),b(88,`

    `),x(89,"h4",14),b(90,"Minimum Active Period"),w(),b(91,`

    `),x(92,"mat-form-field",3),b(93,`
      `),x(94,"mat-label"),b(95,"Frequency"),w(),b(96,`
      `),fe(97,"input",15),ki$1(),b(98,`
    `),w(),b(99,`

    `),x(100,"mat-form-field",3),b(101,`
      `),x(102,"mat-label"),b(103,"Type"),w(),b(104,`
      `),x(105,"mat-select",16),b(106,`
        `),Ie(107,Vi,2,2,"mat-option",10),b(108,`
      `),w(),ki$1(),b(109,`
    `),w(),b(110,`

    `),x(111,"h4",14),b(112,"Lock-in Period"),w(),b(113,`

    `),x(114,"mat-form-field",3),b(115,`
      `),x(116,"mat-label"),b(117,"Frequency"),w(),b(118,`
      `),fe(119,"input",17),ki$1(),b(120,`
    `),w(),b(121,`

    `),x(122,"mat-form-field",3),b(123,`
      `),x(124,"mat-label"),b(125,"Type"),w(),b(126,`
      `),x(127,"mat-select",18),b(128,`
        `),Ie(129,Bi,2,2,"mat-option",10),b(130,`
      `),w(),ki$1(),b(131,`
    `),w(),b(132,`

  `),w(),b(133,`

  `),x(134,"div",19),b(135,`
    `),x(136,"button",20),b(137,`
      `),fe(138,"fa-icon",21),b(139,`\xA0\xA0
      Previous
    `),w(),b(140,`
    `),x(141,"button",22),b(142,`
      Next\xA0\xA0
      `),fe(143,"fa-icon",23),b(144,`
    `),w(),b(145,`
  `),w(),b(146,`

`),w(),b(147,`
`)),o&2){let p=Nt(77);z("formGroup",r.sharesAccountTermsForm),D(9),Li$1(),D(8),Li$1(),D(8),Li$1(),D(14),Li$1(),D(8),Li$1(),D(8),Li$1(),D(2),z("ngForOf",r.savingsAccountsData),D(15),z("min",r.minDate)("max",r.maxDate)("matDatepicker",p),Li$1(),D(2),z("for",p),D(12),Li$1(),D(11),Li$1(),D(8),Li$1(),D(2),z("ngForOf",r.minimumActivePeriodFrequencyTypeData),D(12),Li$1(),D(8),Li$1(),D(2),z("ngForOf",r.lockinPeriodFrequencyTypeData);}},dependencies:[ii$1,Oc,go,Mc,eA,wc,Ti$1,Sn$1,uv,zT,dh,Mv,Ri$1,Br$1,O3,sv,Ac,ja,YWe,KWe,DI,Cc,Wne,Na$1,k2,S6,uo,_3],styles:["h4[_ngcontent-%COMP%]{font-weight:500;margin:1em 0}.margin-t[_ngcontent-%COMP%]{margin-top:1em}"],changeDetection:1})}return t})();function Hi(t,m){if(t&1&&(x(0,"mat-option",22),b(1),w()),t&2){let a=m.$implicit;z("value",a),D(),it(`
        `,a.name,`
      `);}}function Gi(t,m){t&1&&(x(0,"th",23),b(1," Name "),w());}function $i(t,m){if(t&1&&(x(0,"td",24),b(1),w()),t&2){let a=m.$implicit;D(),it(`
        `,a.name+", "+a.currency.displaySymbol,`
      `);}}function Ui(t,m){t&1&&(x(0,"th",23),b(1," Type "),w());}function zi(t,m){if(t&1&&(x(0,"td",24),b(1),w()),t&2){let a=m.$implicit;D(),it(`
        `,a.chargeCalculationType.value,`
      `);}}function Qi(t,m){t&1&&(x(0,"th",23),b(1," Amount "),w());}function Wi(t,m){if(t&1){let a=Kt();x(0,"td",24),b(1),x(2,"button",25),re("click",function(){let r=ot(a).$implicit,p=K();return at(p.editCharge(r))}),b(3,`
          `),fe(4,"fa-icon",26),b(5,`
        `),w(),b(6,`
      `),w();}if(t&2){let a=m.$implicit;D(),it(`
        `,a.amount||a.amountOrPercentage,`
        `);}}function Ji(t,m){t&1&&(x(0,"th",23),b(1," Collected On "),w());}function Yi(t,m){if(t&1&&(x(0,"td",24),b(1),w()),t&2){let a=m.$implicit;D(),it(`
        `,a.chargeTimeType.value,`
      `);}}function Ki(t,m){t&1&&(x(0,"th",23),b(1," Actions "),w());}function Xi(t,m){if(t&1){let a=Kt();x(0,"td",24),b(1,`
        `),x(2,"button",27),re("click",function(){let r=ot(a).$implicit,p=K();return at(p.deleteCharge(r))}),b(3,`
          `),fe(4,"fa-icon",28),b(5,`
        `),w(),b(6,`
      `),w();}}function Zi(t,m){t&1&&fe(0,"tr",29);}function ea(t,m){t&1&&fe(0,"tr",30);}var $e=(()=>{class t{dialog;sharesAccountProductTemplate;sharesAccountTemplate;currencyCode;chargeData=[];chargesDataSource=[];pristine=true;isChargesPatched=false;displayedColumns=["name","chargeCalculationType","amount","chargeTimeType","action"];constructor(a){this.dialog=a;}ngOnInit(){this.currencyCode.valueChanges.subscribe(()=>{!this.isChargesPatched&&this.sharesAccountTemplate.charges?(this.chargesDataSource=this.sharesAccountTemplate.charges,this.isChargesPatched=true):this.chargesDataSource=[];});}ngOnChanges(){this.sharesAccountProductTemplate&&(this.chargeData=this.sharesAccountProductTemplate.charges);}addCharge(a){this.chargesDataSource=this.chargesDataSource.concat([a.value]),a.value="",this.pristine=false;}editCharge(a){let o=[new r({controlName:"amount",label:"Amount",value:a.amount||a.amountOrPercentage,type:"number",required:false})],r$1={title:"Edit Charge",layout:{addButtonText:"Confirm"},formfields:o};this.dialog.open(_Ne,{data:r$1}).afterClosed().subscribe(M=>{if(M.data){let Pe=Re(O({},a),{amount:M.data.value.amount});this.chargesDataSource.splice(this.chargesDataSource.indexOf(a),1,Pe),this.chargesDataSource=this.chargesDataSource.concat([]);}}),this.pristine=false;}deleteCharge(a){this.dialog.open(CNe,{data:{deleteContext:`charge ${a.name}`}}).afterClosed().subscribe(r=>{r.delete&&(this.chargesDataSource.splice(this.chargesDataSource.indexOf(a),1),this.chargesDataSource=this.chargesDataSource.concat([]));}),this.pristine=false;}get sharesAccountCharges(){return {charges:this.chargesDataSource}}static \u0275fac=function(o){return new(o||t)(T(Iv))};static \u0275cmp=N({type:t,selectors:[["mifosx-shares-account-charges-step"]],inputs:{sharesAccountProductTemplate:"sharesAccountProductTemplate",sharesAccountTemplate:"sharesAccountTemplate",currencyCode:"currencyCode"},standalone:false,features:[Pe],decls:79,vars:10,consts:[["charge",""],["fxLayout","row wrap","fxLayoutGap","2%","fxLayout.lt-md","column"],["fxFlex","48%"],[3,"value",4,"ngFor","ngForOf"],["fxFlex","48%","fxFlexAlign","center"],["type","button","mat-raised-button","","color","primary",3,"click","disabled"],["icon","plus"],["fxFlex","98%","mat-table","",1,"mat-elevation-z1",3,"dataSource","hidden"],["matColumnDef","name"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","chargeCalculationType"],["matColumnDef","amount"],["matColumnDef","chargeTimeType"],["matColumnDef","action"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["fxLayout","row","fxLayout.xs","column","fxLayoutAlign","center","fxLayoutGap","2%",1,"margin-t"],["mat-raised-button","","matStepperPrevious",""],["icon","arrow-left"],["mat-raised-button","","matStepperNext",""],["icon","arrow-right"],[3,"value"],["mat-header-cell",""],["mat-cell",""],["mat-icon-button","","color","primary",3,"click"],["icon","pen"],["mat-icon-button","","color","warn",3,"click"],["icon","trash"],["mat-header-row",""],["mat-row",""]],template:function(o,r){if(o&1){let p=Kt();x(0,"div",1),b(1,`

  `),x(2,"mat-form-field",2),b(3,`
    `),x(4,"mat-label"),b(5,"Charge"),w(),b(6,`
    `),x(7,"mat-select",null,0),b(9,`
      `),Ie(10,Hi,2,2,"mat-option",3),nee(11,"chargesFilter"),b(12,`
    `),w(),b(13,`
  `),w(),b(14,`

  `),x(15,"div",4),b(16,`
    `),x(17,"button",5),re("click",function(){ot(p);let Pe=Nt(8);return at(r.addCharge(Pe))}),b(18,`
      `),fe(19,"fa-icon",6),b(20,`\xA0\xA0
      Add
    `),w(),b(21,`
  `),w(),b(22,`

  `),x(23,"table",7),b(24,`

    `),Rl(25,8),b(26,`
      `),Ie(27,Gi,2,0,"th",9),b(28,`
      `),Ie(29,$i,2,1,"td",10),b(30,`
    `),zl(),b(31,`

    `),Rl(32,11),b(33,`
      `),Ie(34,Ui,2,0,"th",9),b(35,`
      `),Ie(36,zi,2,1,"td",10),b(37,`
    `),zl(),b(38,`

    `),Rl(39,12),b(40,`
      `),Ie(41,Qi,2,0,"th",9),b(42,`
      `),Ie(43,Wi,7,1,"td",10),b(44,`
    `),zl(),b(45,`

    `),Rl(46,13),b(47,`
      `),Ie(48,Ji,2,0,"th",9),b(49,`
      `),Ie(50,Yi,2,1,"td",10),b(51,`
    `),zl(),b(52,`

    `),Rl(53,14),b(54,`
      `),Ie(55,Ki,2,0,"th",9),b(56,`
      `),Ie(57,Xi,7,0,"td",10),b(58,`
    `),zl(),b(59,`

    `),Ie(60,Zi,1,0,"tr",15),b(61,`
    `),Ie(62,ea,1,0,"tr",16),b(63,`

  `),w(),b(64,`

`),w(),b(65,`

`),x(66,"div",17),b(67,`
  `),x(68,"button",18),b(69,`
    `),fe(70,"fa-icon",19),b(71,`\xA0\xA0
    Previous
  `),w(),b(72,`
  `),x(73,"button",20),b(74,`
    Next\xA0\xA0
    `),fe(75,"fa-icon",21),b(76,`
  `),w(),b(77,`
`),w(),b(78,`
`);}if(o&2){let p=Nt(8);D(10),z("ngForOf",aee(11,6,r.chargeData,r.chargesDataSource,r.currencyCode.value)),D(7),z("disabled",!p.value),D(6),z("dataSource",r.chargesDataSource)("hidden",r.chargesDataSource.length===0),D(37),z("matHeaderRowDef",r.displayedColumns),D(2),z("matRowDefColumns",r.displayedColumns);}},dependencies:[ii$1,Oc,go,Mc,eA,A6,wc,Ti$1,Sn$1,yo,Ri$1,Br$1,ja,YWe,KWe,uqe,mqe,bqe,pqe,fqe,xqe,gqe,vqe,Cqe,Mqe,aV],styles:["table[_ngcontent-%COMP%]{width:100%}.mat-elevation-z1[_ngcontent-%COMP%]{margin:1em 0 1.5em}.margin-t[_ngcontent-%COMP%]{margin-top:1em}"],changeDetection:1})}return t})();var ta=t=>[t],na=()=>["../"];function ia(t,m){if(t&1&&(x(0,"div",2),b(1,`
    `),x(2,"span",3),b(3,"Minimum Active Period"),w(),b(4,`
    `),x(5,"span",4),b(6),nee(7,"find"),w(),b(8,`
  `),w()),t&2){let a=K();D(6),Y0("",a.sharesAccount.minimumActivePeriod,"\xA0",see(7,2,a.sharesAccount.minimumActivePeriodFrequencyType,a.sharesAccountProductTemplate.minimumActivePeriodFrequencyTypeOptions,"id","value"));}}function aa(t,m){if(t&1&&(x(0,"div",2),b(1,`
    `),x(2,"span",3),b(3,"Lock-in Period"),w(),b(4,`
    `),x(5,"span",4),b(6),nee(7,"find"),w(),b(8,`
  `),w()),t&2){let a=K();D(6),Y0("",a.sharesAccount.lockinPeriodFrequency,"\xA0",see(7,2,a.sharesAccount.lockinPeriodFrequencyType,a.sharesAccountProductTemplate.lockinPeriodFrequencyTypeOptions,"id","value"));}}function ra(t,m){t&1&&(x(0,"th",22),b(1," Name "),w());}function oa(t,m){if(t&1&&(x(0,"td",23),b(1),w()),t&2){let a=m.$implicit;D(),it(`
          `,a.name+", "+a.currency.displaySymbol,`
        `);}}function ca(t,m){t&1&&(x(0,"th",22),b(1," Type "),w());}function ma(t,m){if(t&1&&(x(0,"td",23),b(1),w()),t&2){let a=m.$implicit;D(),it(`
          `,a.chargeCalculationType.value,`
        `);}}function sa(t,m){t&1&&(x(0,"th",22),b(1," Amount "),w());}function la(t,m){if(t&1&&(x(0,"td",23),b(1),w()),t&2){let a=m.$implicit;D(),it(`
          `,a.amount||a.amountOrPercentage,`
        `);}}function pa(t,m){t&1&&(x(0,"th",22),b(1," Collected On "),w());}function ua(t,m){if(t&1&&(x(0,"td",23),b(1),w()),t&2){let a=m.$implicit;D(),it(`
          `,a.chargeTimeType.value,`
        `);}}function da(t,m){t&1&&fe(0,"tr",24);}function ha(t,m){t&1&&fe(0,"tr",25);}function fa(t,m){if(t&1&&(x(0,"div",12),b(1,`

    `),x(2,"h3",1),b(3,"Charges"),w(),b(4,`

    `),fe(5,"mat-divider",2),b(6,`

    `),x(7,"table",13),b(8,`

      `),Rl(9,14),b(10,`
        `),Ie(11,ra,2,0,"th",15),b(12,`
        `),Ie(13,oa,2,1,"td",16),b(14,`
      `),zl(),b(15,`

      `),Rl(16,17),b(17,`
        `),Ie(18,ca,2,0,"th",15),b(19,`
        `),Ie(20,ma,2,1,"td",16),b(21,`
      `),zl(),b(22,`

      `),Rl(23,18),b(24,`
        `),Ie(25,sa,2,0,"th",15),b(26,`
        `),Ie(27,la,2,1,"td",16),b(28,`
      `),zl(),b(29,`

      `),Rl(30,19),b(31,`
        `),Ie(32,pa,2,0,"th",15),b(33,`
        `),Ie(34,ua,2,1,"td",16),b(35,`
      `),zl(),b(36,`

      `),Ie(37,da,1,0,"tr",20),b(38,`
      `),Ie(39,ha,1,0,"tr",21),b(40,`

    `),w(),b(41,`

  `),w()),t&2){let a=K();D(7),z("dataSource",a.sharesAccount.charges),D(30),z("matHeaderRowDef",a.chargesDisplayedColumns),D(2),z("matRowDefColumns",a.chargesDisplayedColumns);}}var yt=(()=>{class t{sharesAccountProductTemplate;sharesAccountTemplate;sharesAccountTermsForm;sharesAccount;chargesDisplayedColumns=["name","chargeCalculationType","amount","chargeTimeType"];submit=new B;constructor(){}static \u0275fac=function(o){return new(o||t)};static \u0275cmp=N({type:t,selectors:[["mifosx-shares-account-preview-step"]],inputs:{sharesAccountProductTemplate:"sharesAccountProductTemplate",sharesAccountTemplate:"sharesAccountTemplate",sharesAccountTermsForm:"sharesAccountTermsForm",sharesAccount:"sharesAccount"},outputs:{submit:"submit"},standalone:false,decls:137,vars:37,consts:[["fxLayout","row wrap","fxLayout.lt-md","column"],["fxFlexFill","",1,"mat-h3"],["fxFlexFill",""],["fxFlex","40%"],["fxFlex","60%"],["fxFlexFill","",4,"ngIf"],["fxFlexFill","","fxLayout","row wrap","fxLayout.lt-md","column",4,"ngIf"],["fxLayout","row","fxLayout.xs","column","fxLayoutAlign","center","fxLayoutGap","2%",1,"margin-t"],["mat-raised-button","","matStepperPrevious",""],["icon","arrow-left"],["mat-raised-button","",3,"routerLink"],["mat-raised-button","","color","primary",3,"click"],["fxFlexFill","","fxLayout","row wrap","fxLayout.lt-md","column"],["fxFlexFill","","mat-table","",1,"mat-elevation-z1",3,"dataSource"],["matColumnDef","name"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","chargeCalculationType"],["matColumnDef","amount"],["matColumnDef","chargeTimeType"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["mat-header-cell",""],["mat-cell",""],["mat-header-row",""],["mat-row",""]],template:function(o,r){o&1&&(x(0,"div",0),b(1,`

  `),x(2,"h3",1),b(3,"Details"),w(),b(4,`

  `),fe(5,"mat-divider",2),b(6,`

  `),x(7,"div",2),b(8,`
    `),x(9,"span",3),b(10,"Product"),w(),b(11,`
    `),x(12,"span",4),b(13),nee(14,"find"),w(),b(15,`
  `),w(),b(16,`

  `),x(17,"div",2),b(18,`
    `),x(19,"span",3),b(20,"Submitted On"),w(),b(21,`
    `),x(22,"span",4),b(23),nee(24,"date"),w(),b(25,`
  `),w(),b(26,`

  `),x(27,"div",2),b(28,`
    `),x(29,"span",3),b(30,"External Id"),w(),b(31,`
    `),x(32,"span",4),b(33),w(),b(34,`
  `),w(),b(35,`

  `),x(36,"h3",1),b(37,"Terms"),w(),b(38,`

  `),fe(39,"mat-divider",2),b(40,`

  `),x(41,"div",2),b(42,`
    `),x(43,"span",3),b(44,"Currency"),w(),b(45,`
    `),x(46,"span",4),b(47),nee(48,"find"),w(),b(49,`
  `),w(),b(50,`

  `),x(51,"div",2),b(52,`
    `),x(53,"span",3),b(54,"Decimal Places"),w(),b(55,`
    `),x(56,"span",4),b(57),w(),b(58,`
  `),w(),b(59,`

  `),x(60,"div",2),b(61,`
    `),x(62,"span",3),b(63,"Total Number of Shares"),w(),b(64,`
    `),x(65,"span",4),b(66),w(),b(67,`
  `),w(),b(68,`

  `),x(69,"div",2),b(70,`
    `),x(71,"span",3),b(72,"Today's Price"),w(),b(73,`
    `),x(74,"span",4),b(75),w(),b(76,`
  `),w(),b(77,`

  `),x(78,"div",2),b(79,`
    `),x(80,"span",3),b(81,"Currency in multiples of"),w(),b(82,`
    `),x(83,"span",4),b(84),w(),b(85,`
  `),w(),b(86,`

  `),x(87,"div",2),b(88,`
    `),x(89,"span",3),b(90,"Default Savings Account"),w(),b(91,`
    `),x(92,"span",4),b(93),nee(94,"find"),w(),b(95,`
  `),w(),b(96,`

  `),Ie(97,ia,9,7,"div",5),b(98,`

  `),Ie(99,aa,9,7,"div",5),b(100,`

  `),x(101,"div",2),b(102,`
    `),x(103,"span",3),b(104,"Application Date"),w(),b(105,`
    `),x(106,"span",4),b(107),nee(108,"date"),w(),b(109,`
  `),w(),b(110,`

  `),x(111,"div",2),b(112,`
    `),x(113,"span",3),b(114,"Allow dividends for inactive clients"),w(),b(115,`
    `),x(116,"span",4),b(117),w(),b(118,`
  `),w(),b(119,`

  `),Ie(120,fa,42,3,"div",6),b(121,`

`),w(),b(122,`

`),x(123,"div",7),b(124,`
  `),x(125,"button",8),b(126,`
    `),fe(127,"fa-icon",9),b(128,`\xA0\xA0
    Previous
  `),w(),b(129,`
  `),x(130,"button",10),b(131,`
    Cancel
  `),w(),b(132,`
  `),x(133,"button",11),re("click",function(){return r.submit.emit()}),b(134,`
    Submit
  `),w(),b(135,`
`),w(),b(136,`
`)),o&2&&(D(13),Dt$1(see(14,15,r.sharesAccount.productId,r.sharesAccountTemplate.productOptions,"id","name")),D(10),Dt$1(ree(24,20,r.sharesAccount.submittedDate)),D(10),Dt$1(r.sharesAccount.externalId||"Unassigned"),D(14),Dt$1(see(48,22,r.sharesAccountTermsForm.get("currencyCode").value,gc(34,ta,r.sharesAccountProductTemplate.currency),"code","displayLabel")),D(10),Dt$1(r.sharesAccountTermsForm.get("decimal").value),D(9),Dt$1(r.sharesAccount.requestedShares),D(9),Dt$1(r.sharesAccountTermsForm.get("unitPrice").value),D(9),Dt$1(r.sharesAccountTermsForm.get("currencyMultiple").value),D(9),Dt$1(see(94,27,r.sharesAccount.savingsAccountId,r.sharesAccountProductTemplate.clientSavingsAccounts,"id","accountNo")),D(4),z("ngIf",r.sharesAccount.minimumActivePeriod),D(2),z("ngIf",r.sharesAccount.lockinPeriodFrequency),D(8),Dt$1(ree(108,32,r.sharesAccount.applicationDate)),D(10),Dt$1(r.sharesAccount.allowDividendCalculationForInactiveClients),D(3),z("ngIf",r.sharesAccount.charges.length),D(10),z("routerLink",$o(36,na)));},dependencies:[Yo,Oc,go,Mc,eA,R2,wc,Sn$1,Th,KWe,uqe,mqe,bqe,pqe,fqe,xqe,gqe,vqe,Cqe,Mqe,bp,_te,cV],styles:["table[_ngcontent-%COMP%]{width:100%}.mat-elevation-z1[_ngcontent-%COMP%]{margin:1em 0 1.5em}h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%]{margin:0;font-weight:500}span[_ngcontent-%COMP%]{margin:.5em 0}mat-divider[_ngcontent-%COMP%]{margin:0 0 .5em}.margin-t[_ngcontent-%COMP%]{margin-top:1em}"],changeDetection:1})}return t})();function xa(t,m){t&1&&(b(0,`
      `),fe(1,"fa-icon",14),b(2,`
    `));}function Sa(t,m){t&1&&(b(0,`
      `),fe(1,"fa-icon",14),b(2,`
    `));}function va(t,m){t&1&&(b(0,`
      `),fe(1,"fa-icon",15),b(2,`
    `));}function Ca(t,m){t&1&&(b(0,`
      `),fe(1,"fa-icon",16),b(2,`
    `));}function Aa(t,m){t&1&&(b(0,`
      `),fe(1,"fa-icon",17),b(2,`
    `));}function ga(t,m){t&1&&b(0,"DETAILS");}function _a(t,m){t&1&&b(0,"TERMS");}function Da(t,m){t&1&&b(0,"CHARGES");}function ya(t,m){t&1&&b(0,"PREVIEW");}function Ta(t,m){if(t&1){let a=Kt();x(0,"mat-step",18),b(1,`

      `),Ie(2,ya,1,0,"ng-template",9),b(3,`

      `),x(4,"mifosx-shares-account-preview-step",19),re("submit",function(){ot(a);let r=K();return at(r.submit())}),b(5,`
      `),w(),b(6,`

    `),w();}if(t&2){let a=K();D(4),z("sharesAccountProductTemplate",a.sharesAccountProductTemplate)("sharesAccountTemplate",a.sharesAccountTemplate)("sharesAccountTermsForm",a.sharesAccountTermsForm)("sharesAccount",a.sharesAccount);}}var yn=(()=>{class t{route;router;datePipe;sharesService;sharesAccountTemplate;sharesAccountProductTemplate;sharesAccountDetailsStep;sharesAccountTermsStep;sharesAccountChargesStep;constructor(a,o,r,p){this.route=a,this.router=o,this.datePipe=r,this.sharesService=p,this.route.data.subscribe(M=>{this.sharesAccountTemplate=M.sharesAccountTemplate;});}setTemplate(a){this.sharesAccountProductTemplate=a;}get sharesAccountDetailsForm(){return this.sharesAccountDetailsStep.sharesAccountDetailsForm}get sharesAccountTermsForm(){return this.sharesAccountTermsStep.sharesAccountTermsForm}get sharesAccountFormValid(){return this.sharesAccountDetailsForm.valid&&this.sharesAccountTermsForm.valid}get sharesAccount(){return O(O(O({},this.sharesAccountDetailsStep.sharesAccountDetails),this.sharesAccountTermsStep.sharesAccountTerms),this.sharesAccountChargesStep.sharesAccountCharges)}submit(){let o="dd MMMM yyyy",r=Re(O({},this.sharesAccount),{clientId:this.sharesAccountTemplate.clientId,charges:this.sharesAccount.charges.map(p=>({chargeId:p.chargeId,amount:p.amount})),applicationDate:this.datePipe.transform(this.sharesAccount.applicationDate,o),submittedDate:this.datePipe.transform(this.sharesAccount.submittedDate,o),unitPrice:this.sharesAccountTermsForm.get("unitPrice").value,dateFormat:o,locale:"en"});this.sharesService.createSharesAccount(r).subscribe(p=>{this.router.navigate(["../",p.resourceId],{relativeTo:this.route});});}static \u0275fac=function(o){return new(o||t)(T(zs),T(Gr$1),T(_te),T(A))};static \u0275cmp=N({type:t,selectors:[["mifosx-create-shares-account"]],viewQuery:function(o,r){if(o&1&&ze(He,7)(Ge,7)($e,7),o&2){let p;j(p=H())&&(r.sharesAccountDetailsStep=p.first),j(p=H())&&(r.sharesAccountTermsStep=p.first),j(p=H())&&(r.sharesAccountChargesStep=p.first);}},standalone:false,decls:42,vars:8,consts:[["shareProductStepper",""],[1,"container"],["labelPosition","bottom",1,"mat-elevation-z8"],["matStepperIcon","number"],["matStepperIcon","edit"],["matStepperIcon","done"],["matStepperIcon","error"],["matStepperIcon","preview"],[3,"stepControl"],["matStepLabel",""],[3,"sharesAccountProductTemplate","sharesAccountTemplate"],[3,"sharesAccountProductTemplate"],[3,"sharesAccountProductTemplate","sharesAccountTemplate","currencyCode"],["completed","",4,"ngIf"],["icon","pencil-alt","size","sm"],["icon","check","size","sm"],["icon","exclamation-triangle","size","lg"],["icon","eye","size","sm"],["completed",""],[3,"submit","sharesAccountProductTemplate","sharesAccountTemplate","sharesAccountTermsForm","sharesAccount"]],template:function(o,r){o&1&&(x(0,"div",1),b(1,`

  `),x(2,"mat-horizontal-stepper",2,0),b(4,`

    `),Ie(5,xa,3,0,"ng-template",3),b(6,`

    `),Ie(7,Sa,3,0,"ng-template",4),b(8,`

    `),Ie(9,va,3,0,"ng-template",5),b(10,`

    `),Ie(11,Ca,3,0,"ng-template",6),b(12,`

    `),Ie(13,Aa,3,0,"ng-template",7),b(14,`

    `),x(15,"mat-step",8),b(16,`

      `),Ie(17,ga,1,0,"ng-template",9),b(18,`

      `),x(19,"mifosx-shares-account-details-step",10),re("sharesAccountProductTemplate",function(M){return r.setTemplate(M)}),b(20,`
      `),w(),b(21,`

    `),w(),b(22,`

    `),x(23,"mat-step",8),b(24,`

      `),Ie(25,_a,1,0,"ng-template",9),b(26,`

      `),fe(27,"mifosx-shares-account-terms-step",11),b(28,`

    `),w(),b(29,`

    `),x(30,"mat-step"),b(31,`

      `),Ie(32,Da,1,0,"ng-template",9),b(33,`

      `),x(34,"mifosx-shares-account-charges-step",12),b(35,`
      `),w(),b(36,`

    `),w(),b(37,`

    `),Ie(38,Ta,7,4,"mat-step",13),b(39,`

  `),w(),b(40,`

`),w(),b(41,`
`)),o&2&&(D(15),z("stepControl",r.sharesAccountDetailsForm),D(4),z("sharesAccountTemplate",r.sharesAccountTemplate),D(4),z("stepControl",r.sharesAccountTermsForm),D(4),z("sharesAccountProductTemplate",r.sharesAccountProductTemplate),D(7),z("sharesAccountProductTemplate",r.sharesAccountProductTemplate)("sharesAccountTemplate",r.sharesAccountTemplate)("currencyCode",r.sharesAccountTermsForm.get("currencyCode")),D(4),z("ngIf",r.sharesAccountFormValid));},dependencies:[Yo,Oc,sfe,Ky,cfe,ofe,He,Ge,$e,yt],encapsulation:2,changeDetection:1})}return t})();function ba(t,m){t&1&&(b(0,`
      `),fe(1,"fa-icon",13),b(2,`
    `));}function Ea(t,m){t&1&&(b(0,`
      `),fe(1,"fa-icon",13),b(2,`
    `));}function Ma(t,m){t&1&&(b(0,`
      `),fe(1,"fa-icon",14),b(2,`
    `));}function Pa(t,m){t&1&&(b(0,`
      `),fe(1,"fa-icon",15),b(2,`
    `));}function Ia(t,m){t&1&&(b(0,`
      `),fe(1,"fa-icon",16),b(2,`
    `));}function Fa(t,m){t&1&&b(0,"DETAILS");}function wa(t,m){t&1&&b(0,"TERMS");}function Ra(t,m){t&1&&b(0,"CHARGES");}function Oa(t,m){t&1&&b(0,"PREVIEW");}function ka(t,m){if(t&1){let a=Kt();x(0,"mat-step",17),b(1,`

      `),Ie(2,Oa,1,0,"ng-template",9),b(3,`

      `),x(4,"mifosx-shares-account-preview-step",18),re("submit",function(){ot(a);let r=K();return at(r.submit())}),b(5,`
      `),w(),b(6,`

    `),w();}if(t&2){let a=K();D(4),z("sharesAccountProductTemplate",a.sharesAccountProductTemplate)("sharesAccountTemplate",a.sharesAccountAndTemplate)("sharesAccountTermsForm",a.sharesAccountTermsForm)("sharesAccount",a.sharesAccount);}}var Tn=(()=>{class t{route;router;datePipe;sharesService;sharesAccountAndTemplate;sharesAccountProductTemplate;sharesAccountDetailsStep;sharesAccountTermsStep;sharesAccountChargesStep;constructor(a,o,r,p){this.route=a,this.router=o,this.datePipe=r,this.sharesService=p,this.route.data.subscribe(M=>{this.sharesAccountAndTemplate=M.sharesAccountAndTemplate;});}setTemplate(a){this.sharesAccountProductTemplate=a;}get sharesAccountDetailsForm(){return this.sharesAccountDetailsStep.sharesAccountDetailsForm}get sharesAccountTermsForm(){return this.sharesAccountTermsStep.sharesAccountTermsForm}get sharesAccountFormValidAndNotPristine(){return this.sharesAccountDetailsForm.valid&&this.sharesAccountTermsForm.valid&&(!this.sharesAccountDetailsForm.pristine||!this.sharesAccountTermsForm.pristine||!this.sharesAccountChargesStep.pristine)}get sharesAccount(){return O(O(O({},this.sharesAccountDetailsStep.sharesAccountDetails),this.sharesAccountTermsStep.sharesAccountTerms),this.sharesAccountChargesStep.sharesAccountCharges)}submit(){let o="dd MMMM yyyy",r=Re(O({},this.sharesAccount),{clientId:this.sharesAccountAndTemplate.clientId,charges:this.sharesAccount.charges.map(p=>({chargeId:p.chargeId,amount:p.amount})),applicationDate:this.datePipe.transform(this.sharesAccount.applicationDate,o),submittedDate:this.datePipe.transform(this.sharesAccount.submittedDate,o),unitPrice:this.sharesAccountTermsForm.get("unitPrice").value,dateFormat:o,locale:"en"});this.sharesService.updateSharesAccount(this.sharesAccountAndTemplate.id,r).subscribe(p=>{this.router.navigate(["../"],{relativeTo:this.route});});}static \u0275fac=function(o){return new(o||t)(T(zs),T(Gr$1),T(_te),T(A))};static \u0275cmp=N({type:t,selectors:[["mifosx-edit-shares-account"]],viewQuery:function(o,r){if(o&1&&ze(He,7)(Ge,7)($e,7),o&2){let p;j(p=H())&&(r.sharesAccountDetailsStep=p.first),j(p=H())&&(r.sharesAccountTermsStep=p.first),j(p=H())&&(r.sharesAccountChargesStep=p.first);}},standalone:false,decls:43,vars:9,consts:[["shareProductStepper",""],[1,"container"],["labelPosition","bottom",1,"mat-elevation-z8"],["matStepperIcon","number"],["matStepperIcon","edit"],["matStepperIcon","done"],["matStepperIcon","error"],["matStepperIcon","preview"],[3,"stepControl"],["matStepLabel",""],[3,"sharesAccountProductTemplate","sharesAccountTemplate"],[3,"sharesAccountProductTemplate","sharesAccountTemplate","currencyCode"],["completed","",4,"ngIf"],["icon","pencil-alt","size","sm"],["icon","check","size","sm"],["icon","exclamation-triangle","size","lg"],["icon","eye","size","sm"],["completed",""],[3,"submit","sharesAccountProductTemplate","sharesAccountTemplate","sharesAccountTermsForm","sharesAccount"]],template:function(o,r){o&1&&(x(0,"div",1),b(1,`

  `),x(2,"mat-horizontal-stepper",2,0),b(4,`

    `),Ie(5,ba,3,0,"ng-template",3),b(6,`

    `),Ie(7,Ea,3,0,"ng-template",4),b(8,`

    `),Ie(9,Ma,3,0,"ng-template",5),b(10,`

    `),Ie(11,Pa,3,0,"ng-template",6),b(12,`

    `),Ie(13,Ia,3,0,"ng-template",7),b(14,`

    `),x(15,"mat-step",8),b(16,`

      `),Ie(17,Fa,1,0,"ng-template",9),b(18,`

      `),x(19,"mifosx-shares-account-details-step",10),re("sharesAccountProductTemplate",function(M){return r.setTemplate(M)}),b(20,`
      `),w(),b(21,`

    `),w(),b(22,`

    `),x(23,"mat-step",8),b(24,`

      `),Ie(25,wa,1,0,"ng-template",9),b(26,`

      `),x(27,"mifosx-shares-account-terms-step",10),b(28,`
      `),w(),b(29,`

    `),w(),b(30,`

    `),x(31,"mat-step"),b(32,`

      `),Ie(33,Ra,1,0,"ng-template",9),b(34,`

      `),x(35,"mifosx-shares-account-charges-step",11),b(36,`
      `),w(),b(37,`

    `),w(),b(38,`

    `),Ie(39,ka,7,4,"mat-step",12),b(40,`

  `),w(),b(41,`

`),w(),b(42,`
`)),o&2&&(D(15),z("stepControl",r.sharesAccountDetailsForm),D(4),z("sharesAccountTemplate",r.sharesAccountAndTemplate),D(4),z("stepControl",r.sharesAccountTermsForm),D(4),z("sharesAccountProductTemplate",r.sharesAccountProductTemplate)("sharesAccountTemplate",r.sharesAccountAndTemplate),D(8),z("sharesAccountProductTemplate",r.sharesAccountProductTemplate)("sharesAccountTemplate",r.sharesAccountAndTemplate)("currencyCode",r.sharesAccountTermsForm.get("currencyCode")),D(4),z("ngIf",r.sharesAccountFormValidAndNotPristine));},dependencies:[Yo,Oc,sfe,Ky,cfe,ofe,He,Ge,$e,yt],encapsulation:2,changeDetection:1})}return t})();var La=()=>["../../"];function Na(t,m){t&1&&(x(0,"mat-error"),b(1,`
              Approved On Date is `),x(2,"strong"),b(3,"required"),w(),b(4,`
            `),w());}var bn=(()=>{class t{formBuilder;sharesService;datePipe;route;router;minDate=new Date(2e3,0,1);maxDate=new Date;approveSharesAccountForm;accountId;constructor(a,o,r,p,M){this.formBuilder=a,this.sharesService=o,this.datePipe=r,this.route=p,this.router=M,this.accountId=this.route.parent.snapshot.params.shareAccountId;}ngOnInit(){this.createApproveSharesAccountForm();}createApproveSharesAccountForm(){this.approveSharesAccountForm=this.formBuilder.group({approvedDate:["",mi$1.required],note:[""]});}submit(){let o="dd MMMM yyyy",r=this.approveSharesAccountForm.value.approvedDate;this.approveSharesAccountForm.patchValue({approvedDate:this.datePipe.transform(r,o)});let p=Re(O({},this.approveSharesAccountForm.value),{dateFormat:o,locale:"en"});this.sharesService.executeSharesAccountCommand(this.accountId,"approve",p).subscribe(()=>{this.router.navigate(["../../"],{relativeTo:this.route});});}static \u0275fac=function(o){return new(o||t)(T(AI),T(A),T(_te),T(zs),T(Gr$1))};static \u0275cmp=N({type:t,selectors:[["mifosx-approve-shares-account"]],standalone:false,decls:47,vars:9,consts:[["approvedDatePicker",""],[1,"container"],[3,"ngSubmit","formGroup"],["fxLayout","column"],["matInput","","required","","formControlName","approvedDate",3,"min","max","matDatepicker"],["matSuffix","",3,"for"],[4,"ngIf"],["matInput","","formControlName","note"],["fxLayout","row","fxLayout.xs","column","fxLayoutAlign","center","fxLayoutGap","5px"],["type","button","mat-raised-button","",3,"routerLink"],["mat-raised-button","","color","accent",3,"disabled"]],template:function(o,r){if(o&1&&(x(0,"div",1),b(1,`

  `),x(2,"mat-card"),b(3,`

    `),x(4,"form",2),re("ngSubmit",function(){return r.submit()}),b(5,`

      `),x(6,"mat-card-content"),b(7,`

        `),x(8,"div",3),b(9,`

          `),x(10,"mat-form-field"),b(11,`
            `),x(12,"mat-label"),b(13,"Approved On Date"),w(),b(14,`
            `),fe(15,"input",4),ki$1(),b(16,`
            `),fe(17,"mat-datepicker-toggle",5),b(18,`
            `),fe(19,"mat-datepicker",null,0),b(21,`
            `),Ie(22,Na,5,0,"mat-error",6),b(23,`
          `),w(),b(24,`

          `),x(25,"mat-form-field"),b(26,`
            `),x(27,"mat-label"),b(28,"Note"),w(),b(29,`
            `),fe(30,"textarea",7),ki$1(),b(31,`
          `),w(),b(32,`

        `),w(),b(33,`

      `),w(),b(34,`

      `),x(35,"mat-card-actions",8),b(36,`
        `),x(37,"button",9),b(38,"Cancel"),w(),b(39,`
        `),x(40,"button",10),b(41,"Confirm"),w(),b(42,`
      `),w(),b(43,`

    `),w(),b(44,`

  `),w(),b(45,`

`),w(),b(46,`
`)),o&2){let p=Nt(20);D(4),z("formGroup",r.approveSharesAccountForm),D(11),z("min",r.minDate)("max",r.maxDate)("matDatepicker",p),Li$1(),D(2),z("for",p),D(5),z("ngIf",r.approveSharesAccountForm.controls.approvedDate.hasError("required")),D(8),Li$1(),D(7),z("routerLink",$o(8,La)),D(3),z("disabled",!r.approveSharesAccountForm.valid);}},dependencies:[Yo,go,Mc,eA,Sn$1,Sje,Aje,Lje,zT,dh,Mv,Ri$1,Br$1,O3,sv,Ac,DI,Cc,Na$1,k2,S6,uo,_3,bp],styles:[".container[_ngcontent-%COMP%]{max-width:37rem}"],changeDetection:1})}return t})();var qa=()=>["../../"];function Va(t,m){t&1&&(x(0,"mat-error"),b(1,`
              Rejected On Date is `),x(2,"strong"),b(3,"required"),w(),b(4,`
            `),w());}var En=(()=>{class t{formBuilder;sharesService;datePipe;route;router;minDate=new Date(2e3,0,1);maxDate=new Date;rejectSharesAccountForm;accountId;constructor(a,o,r,p,M){this.formBuilder=a,this.sharesService=o,this.datePipe=r,this.route=p,this.router=M,this.accountId=this.route.parent.snapshot.params.shareAccountId;}ngOnInit(){this.createRejectSharesAccountForm();}createRejectSharesAccountForm(){this.rejectSharesAccountForm=this.formBuilder.group({rejectedDate:["",mi$1.required],note:[""]});}submit(){let o="dd MMMM yyyy",r=this.rejectSharesAccountForm.value.rejectedDate;this.rejectSharesAccountForm.patchValue({rejectedDate:this.datePipe.transform(r,o)});let p=Re(O({},this.rejectSharesAccountForm.value),{dateFormat:o,locale:"en"});this.sharesService.executeSharesAccountCommand(this.accountId,"reject",p).subscribe(()=>{this.router.navigate(["../../"],{relativeTo:this.route});});}static \u0275fac=function(o){return new(o||t)(T(AI),T(A),T(_te),T(zs),T(Gr$1))};static \u0275cmp=N({type:t,selectors:[["mifosx-reject-shares-account"]],standalone:false,decls:47,vars:9,consts:[["rejectedDatePicker",""],[1,"container"],[3,"ngSubmit","formGroup"],["fxLayout","column"],["matInput","","required","","formControlName","rejectedDate",3,"min","max","matDatepicker"],["matSuffix","",3,"for"],[4,"ngIf"],["matInput","","formControlName","note"],["fxLayout","row","fxLayout.xs","column","fxLayoutAlign","center","fxLayoutGap","5px"],["type","button","mat-raised-button","",3,"routerLink"],["mat-raised-button","","color","warn",3,"disabled"]],template:function(o,r){if(o&1&&(x(0,"div",1),b(1,`

  `),x(2,"mat-card"),b(3,`

    `),x(4,"form",2),re("ngSubmit",function(){return r.submit()}),b(5,`

      `),x(6,"mat-card-content"),b(7,`

        `),x(8,"div",3),b(9,`

          `),x(10,"mat-form-field"),b(11,`
            `),x(12,"mat-label"),b(13,"Rejected On Date"),w(),b(14,`
            `),fe(15,"input",4),ki$1(),b(16,`
            `),fe(17,"mat-datepicker-toggle",5),b(18,`
            `),fe(19,"mat-datepicker",null,0),b(21,`
            `),Ie(22,Va,5,0,"mat-error",6),b(23,`
          `),w(),b(24,`

          `),x(25,"mat-form-field"),b(26,`
            `),x(27,"mat-label"),b(28,"Note"),w(),b(29,`
            `),fe(30,"textarea",7),ki$1(),b(31,`
          `),w(),b(32,`

        `),w(),b(33,`

      `),w(),b(34,`

      `),x(35,"mat-card-actions",8),b(36,`
        `),x(37,"button",9),b(38,"Cancel"),w(),b(39,`
        `),x(40,"button",10),b(41,"Confirm"),w(),b(42,`
      `),w(),b(43,`

    `),w(),b(44,`

  `),w(),b(45,`

`),w(),b(46,`
`)),o&2){let p=Nt(20);D(4),z("formGroup",r.rejectSharesAccountForm),D(11),z("min",r.minDate)("max",r.maxDate)("matDatepicker",p),Li$1(),D(2),z("for",p),D(5),z("ngIf",r.rejectSharesAccountForm.controls.rejectedDate.hasError("required")),D(8),Li$1(),D(7),z("routerLink",$o(8,qa)),D(3),z("disabled",!r.rejectSharesAccountForm.valid);}},dependencies:[Yo,go,Mc,eA,Sn$1,Sje,Aje,Lje,zT,dh,Mv,Ri$1,Br$1,O3,sv,Ac,DI,Cc,Na$1,k2,S6,uo,_3,bp],styles:[".container[_ngcontent-%COMP%]{max-width:37rem}"],changeDetection:1})}return t})();var Ha=()=>["../../"];function Ga(t,m){t&1&&(x(0,"mat-error"),b(1,`
              Closed On Date is `),x(2,"strong"),b(3,"required"),w(),b(4,`
            `),w());}var Mn=(()=>{class t{formBuilder;sharesService;datePipe;route;router;minDate=new Date(2e3,0,1);maxDate=new Date;closeSharesAccountForm;accountId;constructor(a,o,r,p,M){this.formBuilder=a,this.sharesService=o,this.datePipe=r,this.route=p,this.router=M,this.accountId=this.route.parent.snapshot.params.shareAccountId;}ngOnInit(){this.createCloseSharesAccountForm();}createCloseSharesAccountForm(){this.closeSharesAccountForm=this.formBuilder.group({closedDate:["",mi$1.required],note:[""]});}submit(){let o="dd MMMM yyyy",r=this.closeSharesAccountForm.value.closedDate;this.closeSharesAccountForm.patchValue({closedDate:this.datePipe.transform(r,o)});let p=Re(O({},this.closeSharesAccountForm.value),{dateFormat:o,locale:"en"});this.sharesService.executeSharesAccountCommand(this.accountId,"close",p).subscribe(()=>{this.router.navigate(["../../"],{relativeTo:this.route});});}static \u0275fac=function(o){return new(o||t)(T(AI),T(A),T(_te),T(zs),T(Gr$1))};static \u0275cmp=N({type:t,selectors:[["mifosx-close-shares-account"]],standalone:false,decls:47,vars:9,consts:[["closedDatePicker",""],[1,"container"],[3,"ngSubmit","formGroup"],["fxLayout","column"],["matInput","","required","","formControlName","closedDate",3,"min","max","matDatepicker"],["matSuffix","",3,"for"],[4,"ngIf"],["matInput","","formControlName","note"],["fxLayout","row","fxLayout.xs","column","fxLayoutAlign","center","fxLayoutGap","5px"],["type","button","mat-raised-button","",3,"routerLink"],["mat-raised-button","","color","warn",3,"disabled"]],template:function(o,r){if(o&1&&(x(0,"div",1),b(1,`

  `),x(2,"mat-card"),b(3,`

    `),x(4,"form",2),re("ngSubmit",function(){return r.submit()}),b(5,`

      `),x(6,"mat-card-content"),b(7,`

        `),x(8,"div",3),b(9,`

          `),x(10,"mat-form-field"),b(11,`
            `),x(12,"mat-label"),b(13,"Closed On Date"),w(),b(14,`
            `),fe(15,"input",4),ki$1(),b(16,`
            `),fe(17,"mat-datepicker-toggle",5),b(18,`
            `),fe(19,"mat-datepicker",null,0),b(21,`
            `),Ie(22,Ga,5,0,"mat-error",6),b(23,`
          `),w(),b(24,`

          `),x(25,"mat-form-field"),b(26,`
            `),x(27,"mat-label"),b(28,"Note"),w(),b(29,`
            `),fe(30,"textarea",7),ki$1(),b(31,`
          `),w(),b(32,`

        `),w(),b(33,`

      `),w(),b(34,`

      `),x(35,"mat-card-actions",8),b(36,`
        `),x(37,"button",9),b(38,"Cancel"),w(),b(39,`
        `),x(40,"button",10),b(41,"Confirm"),w(),b(42,`
      `),w(),b(43,`

    `),w(),b(44,`

  `),w(),b(45,`

`),w(),b(46,`
`)),o&2){let p=Nt(20);D(4),z("formGroup",r.closeSharesAccountForm),D(11),z("min",r.minDate)("max",r.maxDate)("matDatepicker",p),Li$1(),D(2),z("for",p),D(5),z("ngIf",r.closeSharesAccountForm.controls.closedDate.hasError("required")),D(8),Li$1(),D(7),z("routerLink",$o(8,Ha)),D(3),z("disabled",!r.closeSharesAccountForm.valid);}},dependencies:[Yo,go,Mc,eA,Sn$1,Sje,Aje,Lje,zT,dh,Mv,Ri$1,Br$1,O3,sv,Ac,DI,Cc,Na$1,k2,S6,uo,_3,bp],styles:[".container[_ngcontent-%COMP%]{max-width:37rem}"],changeDetection:1})}return t})();var Ua=()=>["../../"];function za(t,m){t&1&&(x(0,"mat-error"),b(1,`
              Activated On Date is `),x(2,"strong"),b(3,"required"),w(),b(4,`
            `),w());}var Pn=(()=>{class t{formBuilder;sharesService;datePipe;route;router;minDate=new Date(2e3,0,1);maxDate=new Date;activateSharesAccountForm;accountId;constructor(a,o,r,p,M){this.formBuilder=a,this.sharesService=o,this.datePipe=r,this.route=p,this.router=M,this.accountId=this.route.parent.snapshot.params.shareAccountId;}ngOnInit(){this.createActivateSharesAccountForm();}createActivateSharesAccountForm(){this.activateSharesAccountForm=this.formBuilder.group({activatedDate:["",mi$1.required]});}submit(){let o="dd MMMM yyyy",r=this.activateSharesAccountForm.value.activatedDate;this.activateSharesAccountForm.patchValue({activatedDate:this.datePipe.transform(r,o)});let p=Re(O({},this.activateSharesAccountForm.value),{dateFormat:o,locale:"en"});this.sharesService.executeSharesAccountCommand(this.accountId,"activate",p).subscribe(()=>{this.router.navigate(["../../"],{relativeTo:this.route});});}static \u0275fac=function(o){return new(o||t)(T(AI),T(A),T(_te),T(zs),T(Gr$1))};static \u0275cmp=N({type:t,selectors:[["mifosx-activate-shares-account"]],standalone:false,decls:36,vars:9,consts:[["activatedDatePicker",""],[1,"container"],[3,"ngSubmit","formGroup"],["fxFlex",""],["matInput","","required","","formControlName","activatedDate",3,"min","max","matDatepicker"],["matSuffix","",3,"for"],[4,"ngIf"],["fxLayout","row","fxLayout.xs","column","fxLayoutAlign","center","fxLayoutGap","5px"],["type","button","mat-raised-button","",3,"routerLink"],["mat-raised-button","","color","accent",3,"disabled"]],template:function(o,r){if(o&1&&(x(0,"div",1),b(1,`

  `),x(2,"mat-card"),b(3,`

    `),x(4,"form",2),re("ngSubmit",function(){return r.submit()}),b(5,`

      `),x(6,"mat-card-content"),b(7,`

          `),x(8,"mat-form-field",3),b(9,`
            `),x(10,"mat-label"),b(11,"Activated On Date"),w(),b(12,`
            `),fe(13,"input",4),ki$1(),b(14,`
            `),fe(15,"mat-datepicker-toggle",5),b(16,`
            `),fe(17,"mat-datepicker",null,0),b(19,`
            `),Ie(20,za,5,0,"mat-error",6),b(21,`
          `),w(),b(22,`

      `),w(),b(23,`

      `),x(24,"mat-card-actions",7),b(25,`
        `),x(26,"button",8),b(27,"Cancel"),w(),b(28,`
        `),x(29,"button",9),b(30,"Confirm"),w(),b(31,`
      `),w(),b(32,`

    `),w(),b(33,`

  `),w(),b(34,`

`),w(),b(35,`
`)),o&2){let p=Nt(18);D(4),z("formGroup",r.activateSharesAccountForm),D(9),z("min",r.minDate)("max",r.maxDate)("matDatepicker",p),Li$1(),D(2),z("for",p),D(5),z("ngIf",r.activateSharesAccountForm.controls.activatedDate.hasError("required")),D(6),z("routerLink",$o(8,Ua)),D(3),z("disabled",!r.activateSharesAccountForm.valid);}},dependencies:[Yo,go,Mc,eA,wc,Sn$1,Sje,Aje,Lje,zT,dh,Mv,Ri$1,Br$1,O3,sv,Ac,DI,Cc,Na$1,k2,S6,uo,_3,bp],styles:[".container[_ngcontent-%COMP%]{max-width:37rem}"],changeDetection:1})}return t})();var Wa=()=>["../../"],In=(()=>{class t{sharesService;route;router;accountId;constructor(a,o,r){this.sharesService=a,this.route=o,this.router=r,this.accountId=this.route.parent.snapshot.params.shareAccountId;}submit(){this.sharesService.executeSharesAccountCommand(this.accountId,"undoapproval",{}).subscribe(()=>{this.router.navigate(["../../"],{relativeTo:this.route});});}static \u0275fac=function(o){return new(o||t)(T(A),T(zs),T(Gr$1))};static \u0275cmp=N({type:t,selectors:[["mifosx-undo-approval-shares-account"]],standalone:false,decls:27,vars:3,consts:[[1,"container"],[3,"ngSubmit"],[1,"mat-typography","confirm-text"],["fxLayout","row","fxLayout.xs","column","fxLayoutAlign","center","fxLayoutGap","5px"],["type","button","mat-raised-button","",3,"routerLink"],["mat-raised-button","","color","warn"]],template:function(o,r){o&1&&(x(0,"div",0),b(1,`

  `),x(2,"mat-card"),b(3,`

    `),x(4,"form",1),re("ngSubmit",function(){return r.submit()}),b(5,`

      `),x(6,"mat-card-content"),b(7,`

        `),x(8,"div"),b(9,`

          `),x(10,"p",2),b(11),w(),b(12,`

        `),w(),b(13,`

      `),w(),b(14,`

      `),x(15,"mat-card-actions",3),b(16,`
        `),x(17,"button",4),b(18,"Cancel"),w(),b(19,`
        `),x(20,"button",5),b(21,"Confirm"),w(),b(22,`
      `),w(),b(23,`

    `),w(),b(24,`

  `),w(),b(25,`

`),w(),b(26,`
`)),o&2&&(D(11),it(`
            Are you sure you want to undo approval of shares account with ID: `,r.accountId,` ?
          `),D(6),z("routerLink",$o(2,Wa)));},dependencies:[go,Mc,eA,Sn$1,Sje,Aje,Lje,DI,k2,L2,bp],styles:[".container[_ngcontent-%COMP%]{max-width:37rem}.container[_ngcontent-%COMP%]   .confirm-text[_ngcontent-%COMP%]{font-size:16px;text-align:center}"],changeDetection:1})}return t})();var Ya=()=>["../../"];function Ka(t,m){t&1&&(x(0,"mat-error"),b(1,`
              Request Date is `),x(2,"strong"),b(3,"required"),w(),b(4,`
            `),w());}function Xa(t,m){t&1&&(x(0,"mat-error"),b(1,`
              Requested Shares is `),x(2,"strong"),b(3,"required"),w(),b(4,`
            `),w());}var Fn=(()=>{class t{formBuilder;sharesService;datePipe;route;router;sharesAccountData;minDate=new Date(2e3,0,1);maxDate=new Date;applySharesForm;accountId;constructor(a,o,r,p,M){this.formBuilder=a,this.sharesService=o,this.datePipe=r,this.route=p,this.router=M,this.accountId=this.route.parent.snapshot.params.shareAccountId,this.route.data.subscribe(Pe=>{this.sharesAccountData=Pe.shareAccountActionData;});}ngOnInit(){this.createApplySharesAccountForm(),this.applySharesForm.get("unitPrice").patchValue(this.sharesAccountData.currentMarketPrice||"");}createApplySharesAccountForm(){this.applySharesForm=this.formBuilder.group({requestedDate:["",mi$1.required],requestedShares:["",mi$1.required],unitPrice:[{value:"",disabled:true}]});}submit(){let o="dd MMMM yyyy",r=this.applySharesForm.value.requestedDate;this.applySharesForm.patchValue({requestedDate:this.datePipe.transform(r,o)});let p=Re(O({},this.applySharesForm.value),{unitPrice:this.applySharesForm.get("unitPrice").value,dateFormat:o,locale:"en"});this.sharesService.executeSharesAccountCommand(this.accountId,"applyadditionalshares",p).subscribe(()=>{this.router.navigate(["../../"],{relativeTo:this.route});});}static \u0275fac=function(o){return new(o||t)(T(AI),T(A),T(_te),T(zs),T(Gr$1))};static \u0275cmp=N({type:t,selectors:[["mifosx-apply-shares"]],standalone:false,decls:57,vars:10,consts:[["requestedDatePicker",""],[1,"container"],[3,"ngSubmit","formGroup"],["fxLayout","column"],["matInput","","required","","formControlName","requestedDate",3,"min","max","matDatepicker"],["matSuffix","",3,"for"],[4,"ngIf"],["matInput","","required","","formControlName","requestedShares"],["matInput","","required","","formControlName","unitPrice"],["fxLayout","row","fxLayout.xs","column","fxLayoutAlign","center","fxLayoutGap","5px"],["type","button","mat-raised-button","",3,"routerLink"],["mat-raised-button","","color","accent",3,"disabled"]],template:function(o,r){if(o&1&&(x(0,"div",1),b(1,`

  `),x(2,"mat-card"),b(3,`

    `),x(4,"form",2),re("ngSubmit",function(){return r.submit()}),b(5,`

      `),x(6,"mat-card-content"),b(7,`

        `),x(8,"div",3),b(9,`

          `),x(10,"mat-form-field"),b(11,`
            `),x(12,"mat-label"),b(13,"Request Date"),w(),b(14,`
            `),fe(15,"input",4),ki$1(),b(16,`
            `),fe(17,"mat-datepicker-toggle",5),b(18,`
            `),fe(19,"mat-datepicker",null,0),b(21,`
            `),Ie(22,Ka,5,0,"mat-error",6),b(23,`
          `),w(),b(24,`

          `),x(25,"mat-form-field"),b(26,`
            `),x(27,"mat-label"),b(28,"Total No. of Shares"),w(),b(29,`
            `),fe(30,"input",7),ki$1(),b(31,`
            `),Ie(32,Xa,5,0,"mat-error",6),b(33,`
          `),w(),b(34,`

          `),x(35,"mat-form-field"),b(36,`
            `),x(37,"mat-label"),b(38,"Today's Price"),w(),b(39,`
            `),fe(40,"input",8),ki$1(),b(41,`
          `),w(),b(42,`

        `),w(),b(43,`

      `),w(),b(44,`

      `),x(45,"mat-card-actions",9),b(46,`
        `),x(47,"button",10),b(48,"Cancel"),w(),b(49,`
        `),x(50,"button",11),b(51,"Confirm"),w(),b(52,`
      `),w(),b(53,`

    `),w(),b(54,`

  `),w(),b(55,`

`),w(),b(56,`
`)),o&2){let p=Nt(20);D(4),z("formGroup",r.applySharesForm),D(11),z("min",r.minDate)("max",r.maxDate)("matDatepicker",p),Li$1(),D(2),z("for",p),D(5),z("ngIf",r.applySharesForm.controls.requestedDate.hasError("required")),D(8),Li$1(),D(2),z("ngIf",r.applySharesForm.controls.requestedShares.hasError("required")),D(8),Li$1(),D(7),z("routerLink",$o(9,Ya)),D(3),z("disabled",!r.applySharesForm.valid);}},dependencies:[Yo,go,Mc,eA,Sn$1,Sje,Aje,Lje,zT,dh,Mv,Ri$1,Br$1,O3,sv,Ac,DI,Cc,Na$1,k2,S6,uo,_3,bp],styles:[".container[_ngcontent-%COMP%]{max-width:37rem}"],changeDetection:1})}return t})();var er=()=>["../../"];function tr(t,m){t&1&&(x(0,"mat-error"),b(1,`
              Request Date is `),x(2,"strong"),b(3,"required"),w(),b(4,`
            `),w());}function nr(t,m){t&1&&(x(0,"mat-error"),b(1,`
              Requested Shares is `),x(2,"strong"),b(3,"required"),w(),b(4,`
            `),w());}var wn=(()=>{class t{formBuilder;sharesService;datePipe;route;router;sharesAccountData;minDate=new Date(2e3,0,1);maxDate=new Date;redeemSharesForm;accountId;constructor(a,o,r,p,M){this.formBuilder=a,this.sharesService=o,this.datePipe=r,this.route=p,this.router=M,this.accountId=this.route.parent.snapshot.params.shareAccountId,this.route.data.subscribe(Pe=>{this.sharesAccountData=Pe.shareAccountActionData;});}ngOnInit(){this.createRedeemSharesAccountForm(),this.redeemSharesForm.get("unitPrice").patchValue(this.sharesAccountData.currentMarketPrice||"");}createRedeemSharesAccountForm(){this.redeemSharesForm=this.formBuilder.group({requestedDate:["",mi$1.required],requestedShares:["",mi$1.required],unitPrice:[{value:"",disabled:true}]});}submit(){let o="dd MMMM yyyy",r=this.redeemSharesForm.value.requestedDate;this.redeemSharesForm.patchValue({requestedDate:this.datePipe.transform(r,o)});let p=Re(O({},this.redeemSharesForm.value),{unitPrice:this.redeemSharesForm.get("unitPrice").value,dateFormat:o,locale:"en"});this.sharesService.executeSharesAccountCommand(this.accountId,"redeemshares",p).subscribe(()=>{this.router.navigate(["../../"],{relativeTo:this.route});});}static \u0275fac=function(o){return new(o||t)(T(AI),T(A),T(_te),T(zs),T(Gr$1))};static \u0275cmp=N({type:t,selectors:[["mifosx-redeem-shares"]],standalone:false,decls:57,vars:10,consts:[["requestedDatePicker",""],[1,"container"],[3,"ngSubmit","formGroup"],["fxLayout","column"],["matInput","","required","","formControlName","requestedDate",3,"min","max","matDatepicker"],["matSuffix","",3,"for"],[4,"ngIf"],["matInput","","required","","formControlName","requestedShares"],["matInput","","required","","formControlName","unitPrice"],["fxLayout","row","fxLayout.xs","column","fxLayoutAlign","center","fxLayoutGap","5px"],["type","button","mat-raised-button","",3,"routerLink"],["mat-raised-button","","color","warn",3,"disabled"]],template:function(o,r){if(o&1&&(x(0,"div",1),b(1,`

  `),x(2,"mat-card"),b(3,`

    `),x(4,"form",2),re("ngSubmit",function(){return r.submit()}),b(5,`

      `),x(6,"mat-card-content"),b(7,`

        `),x(8,"div",3),b(9,`

          `),x(10,"mat-form-field"),b(11,`
            `),x(12,"mat-label"),b(13,"Request Date"),w(),b(14,`
            `),fe(15,"input",4),ki$1(),b(16,`
            `),fe(17,"mat-datepicker-toggle",5),b(18,`
            `),fe(19,"mat-datepicker",null,0),b(21,`
            `),Ie(22,tr,5,0,"mat-error",6),b(23,`
          `),w(),b(24,`

          `),x(25,"mat-form-field"),b(26,`
            `),x(27,"mat-label"),b(28,"Total No. of Shares"),w(),b(29,`
            `),fe(30,"input",7),ki$1(),b(31,`
            `),Ie(32,nr,5,0,"mat-error",6),b(33,`
          `),w(),b(34,`

          `),x(35,"mat-form-field"),b(36,`
            `),x(37,"mat-label"),b(38,"Today's Price"),w(),b(39,`
            `),fe(40,"input",8),ki$1(),b(41,`
          `),w(),b(42,`

        `),w(),b(43,`

      `),w(),b(44,`

      `),x(45,"mat-card-actions",9),b(46,`
        `),x(47,"button",10),b(48,"Cancel"),w(),b(49,`
        `),x(50,"button",11),b(51,"Confirm"),w(),b(52,`
      `),w(),b(53,`

    `),w(),b(54,`

  `),w(),b(55,`

`),w(),b(56,`
`)),o&2){let p=Nt(20);D(4),z("formGroup",r.redeemSharesForm),D(11),z("min",r.minDate)("max",r.maxDate)("matDatepicker",p),Li$1(),D(2),z("for",p),D(5),z("ngIf",r.redeemSharesForm.controls.requestedDate.hasError("required")),D(8),Li$1(),D(2),z("ngIf",r.redeemSharesForm.controls.requestedShares.hasError("required")),D(8),Li$1(),D(7),z("routerLink",$o(9,er)),D(3),z("disabled",!r.redeemSharesForm.valid);}},dependencies:[Yo,go,Mc,eA,Sn$1,Sje,Aje,Lje,zT,dh,Mv,Ri$1,Br$1,O3,sv,Ac,DI,Cc,Na$1,k2,S6,uo,_3,bp],styles:[".container[_ngcontent-%COMP%]{max-width:37rem}"],changeDetection:1})}return t})();var ar=()=>({approve:true}),Rn=(()=>{class t{dialogRef;data;constructor(a,o){this.dialogRef=a,this.data=o;}static \u0275fac=function(o){return new(o||t)(T(En$1),T(rr))};static \u0275cmp=N({type:t,selectors:[["mifosx-approve-share-dialog"]],standalone:false,decls:18,vars:3,consts:[["mat-dialog-title",""],["mat-dialog-content",""],["align","end"],["mat-raised-button","","mat-dialog-close",""],["mat-raised-button","","color","accent",3,"mat-dialog-close"]],template:function(o,r){o&1&&(x(0,"h1",0),b(1,"Approve Share"),w(),b(2,`
`),x(3,"div",1),b(4,`
  `),x(5,"p"),b(6),w(),b(7,`
`),w(),b(8,`
`),x(9,"mat-dialog-actions",2),b(10,`
  `),x(11,"button",3),b(12,"Cancel"),w(),b(13,`
  `),x(14,"button",4),b(15,"Confirm"),w(),b(16,`
`),w(),b(17,`
`)),o&2&&(D(6),it("Are you sure you want to approve share with id: ",r.data.shareId," ?"),D(8),z("mat-dialog-close",$o(2,ar)));},dependencies:[Sn$1,Fi$1,ci$1,Oi$1,li$1],encapsulation:2,changeDetection:1})}return t})();var cr=["sharesTable"],mr=()=>[10,25,50,100];function sr(t,m){t&1&&(x(0,"th",15),b(1," Transaction Date "),w());}function lr(t,m){if(t&1&&(x(0,"td",16),b(1),nee(2,"date"),w()),t&2){let a=m.$implicit;D(),it(" ",ree(2,1,a.purchasedDate));}}function pr(t,m){t&1&&(x(0,"th",15),b(1," Total Shares "),w());}function ur(t,m){if(t&1&&(x(0,"td",16),b(1),w()),t&2){let a=m.$implicit;D(),it(" ",a.numberOfShares," ");}}function dr(t,m){t&1&&(x(0,"th",15),b(1," Purchased/Redeemed Price "),w());}function hr(t,m){if(t&1&&(x(0,"td",16),b(1),w()),t&2){let a=m.$implicit;D(),it(" ",a.purchasedPrice," ");}}function fr(t,m){t&1&&(x(0,"th",17),b(1," Status "),w());}function xr(t,m){if(t&1&&(x(0,"td",16),b(1,`
          `),fe(2,"i",18),nee(3,"statusLookup"),b(4,`
        `),w()),t&2){let a=m.$implicit;D(2),z("ngClass",ree(3,2,a.status.code))("matTooltip",a.status.value);}}function Sr(t,m){t&1&&(x(0,"th",15),b(1," Confirm Approve "),w());}function vr(t,m){if(t&1){let a=Kt();x(0,"td",16),b(1,`
          `),x(2,"button",19),re("click",function(){let r=ot(a).$implicit,p=K();return at(p.approve(r.id))}),b(3,`
            `),fe(4,"i",20),b(5,`
          `),w(),b(6,`
        `),w();}}function Cr(t,m){t&1&&fe(0,"tr",21);}function Ar(t,m){t&1&&fe(0,"tr",22);}var On=(()=>{class t{sharesService;route;dialog;sharesAccountData;accountId;sharesData;displayedColumns=["transactionDate","totalShares","redeemedPrice","status","approve"];dataSource;paginator;sort;sharesTableRef;constructor(a,o,r){this.sharesService=a,this.route=o,this.dialog=r,this.accountId=this.route.parent.snapshot.params.shareAccountId,this.route.data.subscribe(p=>{this.sharesAccountData=p.shareAccountActionData;});}ngOnInit(){this.sharesData=this.sharesAccountData.purchasedShares.filter(a=>a.status.value==="Pending Approval"),this.setShares();}setShares(){this.dataSource=new zB(this.sharesData),this.dataSource.paginator=this.paginator,this.dataSource.sort=this.sort;}approve(a){this.dialog.open(Rn,{data:{shareId:a}}).afterClosed().subscribe(r=>{if(r.approve){let Pe={requestedShares:[{id:a}],dateFormat:"dd MMMM yyyy",locale:"en"};this.sharesService.executeSharesAccountCommand(this.accountId,"approveadditionalshares",Pe).subscribe(()=>{let Tt=this.sharesData.find(Et=>Et.id===a),bt=this.sharesData.indexOf(Tt);this.sharesData.splice(bt,1),this.dataSource.data=this.sharesData,this.sharesTableRef.renderRows();});}});}static \u0275fac=function(o){return new(o||t)(T(A),T(zs),T(Iv))};static \u0275cmp=N({type:t,selectors:[["mifosx-approve-shares"]],viewQuery:function(o,r){if(o&1&&ze(P4e,7)(Iue,7)(cr,7),o&2){let p;j(p=H())&&(r.paginator=p.first),j(p=H())&&(r.sort=p.first),j(p=H())&&(r.sharesTableRef=p.first);}},standalone:false,decls:51,vars:5,consts:[["sharesTable",""],[1,"container"],[1,"mat-elevation-z8"],["mat-table","","matSort","",3,"dataSource"],["matColumnDef","transactionDate"],["mat-header-cell","","mat-sort-header","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","totalShares"],["matColumnDef","redeemedPrice"],["matColumnDef","status"],["mat-header-cell","",4,"matHeaderCellDef"],["matColumnDef","approve"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["showFirstLastButtons","",3,"pageSizeOptions"],["mat-header-cell","","mat-sort-header",""],["mat-cell",""],["mat-header-cell",""],[1,"fa","fa-stop",3,"ngClass","matTooltip"],["mat-raised-button","","color","accent","matTooltip","Approve Share",1,"share-action-button",3,"click"],[1,"fa","fa-check"],["mat-header-row",""],["mat-row",""]],template:function(o,r){o&1&&(x(0,"div",1),b(1,`

  `),x(2,"div",2),b(3,`

    `),x(4,"table",3,0),b(6,`

      `),Rl(7,4),b(8,`
        `),Ie(9,sr,2,0,"th",5),b(10,`
        `),Ie(11,lr,3,3,"td",6),b(12,`
      `),zl(),b(13,`

      `),Rl(14,7),b(15,`
        `),Ie(16,pr,2,0,"th",5),b(17,`
        `),Ie(18,ur,2,1,"td",6),b(19,`
      `),zl(),b(20,`

      `),Rl(21,8),b(22,`
        `),Ie(23,dr,2,0,"th",5),b(24,`
        `),Ie(25,hr,2,1,"td",6),b(26,`
      `),zl(),b(27,`

      `),Rl(28,9),b(29,`
        `),Ie(30,fr,2,0,"th",10),b(31,`
        `),Ie(32,xr,5,4,"td",6),b(33,`
      `),zl(),b(34,`

      `),Rl(35,11),b(36,`
        `),Ie(37,Sr,2,0,"th",5),b(38,`
        `),Ie(39,vr,7,0,"td",6),b(40,`
      `),zl(),b(41,`

      `),Ie(42,Cr,1,0,"tr",12),b(43,`
      `),Ie(44,Ar,1,0,"tr",13),b(45,`

    `),w(),b(46,`

    `),fe(47,"mat-paginator",14),b(48,`

  `),w(),b(49,`

`),w(),b(50,`
`)),o&2&&(D(4),z("dataSource",r.dataSource),D(38),z("matHeaderRowDef",r.displayedColumns),D(2),z("matRowDefColumns",r.displayedColumns),D(3),z("pageSizeOptions",$o(4,mr)));},dependencies:[i3,SBe,Sn$1,P4e,Iue,yWe,uqe,mqe,bqe,pqe,fqe,xqe,gqe,vqe,Cqe,Mqe,ia$1,_te,rV],styles:["table[_ngcontent-%COMP%]{width:100%}table[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:hover{cursor:pointer}table[_ngcontent-%COMP%]   .share-action-button[_ngcontent-%COMP%]{min-width:26px;padding:0 6px;margin:4px;line-height:25px}"],changeDetection:1})}return t})();var _r=()=>({reject:true}),kn=(()=>{class t{dialogRef;data;constructor(a,o){this.dialogRef=a,this.data=o;}static \u0275fac=function(o){return new(o||t)(T(En$1),T(rr))};static \u0275cmp=N({type:t,selectors:[["mifosx-reject-share-dialog"]],standalone:false,decls:18,vars:3,consts:[["mat-dialog-title",""],["mat-dialog-content",""],["align","end"],["mat-raised-button","","mat-dialog-close",""],["mat-raised-button","","color","warn",3,"mat-dialog-close"]],template:function(o,r){o&1&&(x(0,"h1",0),b(1,"Reject Share"),w(),b(2,`
`),x(3,"div",1),b(4,`
  `),x(5,"p"),b(6),w(),b(7,`
`),w(),b(8,`
`),x(9,"mat-dialog-actions",2),b(10,`
  `),x(11,"button",3),b(12,"Cancel"),w(),b(13,`
  `),x(14,"button",4),b(15,"Confirm"),w(),b(16,`
`),w(),b(17,`
`)),o&2&&(D(6),it("Are you sure you want to reject share with id: ",r.data.shareId," ?"),D(8),z("mat-dialog-close",$o(2,_r)));},dependencies:[Sn$1,Fi$1,ci$1,Oi$1,li$1],encapsulation:2,changeDetection:1})}return t})();var Dr=["sharesTable"],yr=()=>[10,25,50,100];function Tr(t,m){t&1&&(x(0,"th",15),b(1," Transaction Date "),w());}function br(t,m){if(t&1&&(x(0,"td",16),b(1),nee(2,"date"),w()),t&2){let a=m.$implicit;D(),it(" ",ree(2,1,a.purchasedDate));}}function Er(t,m){t&1&&(x(0,"th",15),b(1," Total Shares "),w());}function Mr(t,m){if(t&1&&(x(0,"td",16),b(1),w()),t&2){let a=m.$implicit;D(),it(" ",a.numberOfShares," ");}}function Pr(t,m){t&1&&(x(0,"th",15),b(1," Purchased/Redeemed Price "),w());}function Ir(t,m){if(t&1&&(x(0,"td",16),b(1),w()),t&2){let a=m.$implicit;D(),it(" ",a.purchasedPrice," ");}}function Fr(t,m){t&1&&(x(0,"th",17),b(1," Status "),w());}function wr(t,m){if(t&1&&(x(0,"td",16),b(1,`
          `),fe(2,"i",18),nee(3,"statusLookup"),b(4,`
        `),w()),t&2){let a=m.$implicit;D(2),z("ngClass",ree(3,2,a.status.code))("matTooltip",a.status.value);}}function Rr(t,m){t&1&&(x(0,"th",15),b(1," Confirm Reject "),w());}function Or(t,m){if(t&1){let a=Kt();x(0,"td",16),b(1,`
          `),x(2,"button",19),re("click",function(){let r=ot(a).$implicit,p=K();return at(p.reject(r.id))}),b(3,`
            `),fe(4,"i",20),b(5,`
          `),w(),b(6,`
        `),w();}}function kr(t,m){t&1&&fe(0,"tr",21);}function Lr(t,m){t&1&&fe(0,"tr",22);}var Ln=(()=>{class t{sharesService;route;dialog;sharesAccountData;accountId;sharesData;displayedColumns=["transactionDate","totalShares","redeemedPrice","status","reject"];dataSource;paginator;sort;sharesTableRef;constructor(a,o,r){this.sharesService=a,this.route=o,this.dialog=r,this.accountId=this.route.parent.snapshot.params.shareAccountId,this.route.data.subscribe(p=>{this.sharesAccountData=p.shareAccountActionData;});}ngOnInit(){this.sharesData=this.sharesAccountData.purchasedShares.filter(a=>a.status.value==="Pending Approval"),this.setShares();}setShares(){this.dataSource=new zB(this.sharesData),this.dataSource.paginator=this.paginator,this.dataSource.sort=this.sort;}reject(a){this.dialog.open(kn,{data:{shareId:a}}).afterClosed().subscribe(r=>{if(r.reject){let Pe={requestedShares:[{id:a}],dateFormat:"dd MMMM yyyy",locale:"en"};this.sharesService.executeSharesAccountCommand(this.accountId,"rejectadditionalshares",Pe).subscribe(()=>{let Tt=this.sharesData.find(Et=>Et.id===a),bt=this.sharesData.indexOf(Tt);this.sharesData.splice(bt,1),this.dataSource.data=this.sharesData,this.sharesTableRef.renderRows();});}});}static \u0275fac=function(o){return new(o||t)(T(A),T(zs),T(Iv))};static \u0275cmp=N({type:t,selectors:[["mifosx-reject-shares"]],viewQuery:function(o,r){if(o&1&&ze(P4e,7)(Iue,7)(Dr,7),o&2){let p;j(p=H())&&(r.paginator=p.first),j(p=H())&&(r.sort=p.first),j(p=H())&&(r.sharesTableRef=p.first);}},standalone:false,decls:51,vars:5,consts:[["sharesTable",""],[1,"container"],[1,"mat-elevation-z8"],["mat-table","","matSort","",3,"dataSource"],["matColumnDef","transactionDate"],["mat-header-cell","","mat-sort-header","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","totalShares"],["matColumnDef","redeemedPrice"],["matColumnDef","status"],["mat-header-cell","",4,"matHeaderCellDef"],["matColumnDef","reject"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["showFirstLastButtons","",3,"pageSizeOptions"],["mat-header-cell","","mat-sort-header",""],["mat-cell",""],["mat-header-cell",""],[1,"fa","fa-stop",3,"ngClass","matTooltip"],["mat-raised-button","","color","warn","matTooltip","Reject Share",1,"share-action-button",3,"click"],[1,"fa","fa-times"],["mat-header-row",""],["mat-row",""]],template:function(o,r){o&1&&(x(0,"div",1),b(1,`

  `),x(2,"div",2),b(3,`

    `),x(4,"table",3,0),b(6,`

      `),Rl(7,4),b(8,`
        `),Ie(9,Tr,2,0,"th",5),b(10,`
        `),Ie(11,br,3,3,"td",6),b(12,`
      `),zl(),b(13,`

      `),Rl(14,7),b(15,`
        `),Ie(16,Er,2,0,"th",5),b(17,`
        `),Ie(18,Mr,2,1,"td",6),b(19,`
      `),zl(),b(20,`

      `),Rl(21,8),b(22,`
        `),Ie(23,Pr,2,0,"th",5),b(24,`
        `),Ie(25,Ir,2,1,"td",6),b(26,`
      `),zl(),b(27,`

      `),Rl(28,9),b(29,`
        `),Ie(30,Fr,2,0,"th",10),b(31,`
        `),Ie(32,wr,5,4,"td",6),b(33,`
      `),zl(),b(34,`

      `),Rl(35,11),b(36,`
        `),Ie(37,Rr,2,0,"th",5),b(38,`
        `),Ie(39,Or,7,0,"td",6),b(40,`
      `),zl(),b(41,`

      `),Ie(42,kr,1,0,"tr",12),b(43,`
      `),Ie(44,Lr,1,0,"tr",13),b(45,`

    `),w(),b(46,`

    `),fe(47,"mat-paginator",14),b(48,`

  `),w(),b(49,`

`),w(),b(50,`
`)),o&2&&(D(4),z("dataSource",r.dataSource),D(38),z("matHeaderRowDef",r.displayedColumns),D(2),z("matRowDefColumns",r.displayedColumns),D(3),z("pageSizeOptions",$o(4,yr)));},dependencies:[i3,SBe,Sn$1,P4e,Iue,yWe,uqe,mqe,bqe,pqe,fqe,xqe,gqe,vqe,Cqe,Mqe,ia$1,_te,rV],styles:["table[_ngcontent-%COMP%]{width:100%}table[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:hover{cursor:pointer}table[_ngcontent-%COMP%]   .share-action-button[_ngcontent-%COMP%]{min-width:26px;padding:0 6px;margin:4px;line-height:25px}"],changeDetection:1})}return t})();function jr(t,m){t&1&&fe(0,"mifosx-approve-shares-account");}function qr(t,m){t&1&&fe(0,"mifosx-reject-shares-account");}function Vr(t,m){t&1&&fe(0,"mifosx-close-shares-account");}function Br(t,m){t&1&&fe(0,"mifosx-activate-shares-account");}function Hr(t,m){t&1&&fe(0,"mifosx-undo-approval-shares-account");}function Gr(t,m){t&1&&fe(0,"mifosx-apply-shares");}function $r(t,m){t&1&&fe(0,"mifosx-redeem-shares");}function Ur(t,m){t&1&&fe(0,"mifosx-approve-shares");}function zr(t,m){t&1&&fe(0,"mifosx-reject-shares");}var Nn=(()=>{class t{route;sharesAccountData;actions={Approve:false,Reject:false,Close:false,Activate:false,"Undo Approval":false,"Apply Additional Shares":false,"Redeem Shares":false,"Approve Additional Shares":false,"Reject Additional Shares":false};constructor(a){this.route=a;let o=this.route.snapshot.params.name;this.actions[o]=true;}static \u0275fac=function(o){return new(o||t)(T(zs))};static \u0275cmp=N({type:t,selectors:[["mifosx-shares-account-actions"]],standalone:false,decls:18,vars:9,consts:[[4,"ngIf"]],template:function(o,r){o&1&&(Ie(0,jr,1,0,"mifosx-approve-shares-account",0),b(1,`
`),Ie(2,qr,1,0,"mifosx-reject-shares-account",0),b(3,`
`),Ie(4,Vr,1,0,"mifosx-close-shares-account",0),b(5,`
`),Ie(6,Br,1,0,"mifosx-activate-shares-account",0),b(7,`
`),Ie(8,Hr,1,0,"mifosx-undo-approval-shares-account",0),b(9,`
`),Ie(10,Gr,1,0,"mifosx-apply-shares",0),b(11,`
`),Ie(12,$r,1,0,"mifosx-redeem-shares",0),b(13,`
`),Ie(14,Ur,1,0,"mifosx-approve-shares",0),b(15,`
`),Ie(16,zr,1,0,"mifosx-reject-shares",0),b(17,`
`)),o&2&&(z("ngIf",r.actions.Approve),D(2),z("ngIf",r.actions.Reject),D(2),z("ngIf",r.actions.Close),D(2),z("ngIf",r.actions.Activate),D(2),z("ngIf",r.actions["Undo Approval"]),D(2),z("ngIf",r.actions["Apply Additional Shares"]),D(2),z("ngIf",r.actions["Redeem Shares"]),D(2),z("ngIf",r.actions["Approve Additional Shares"]),D(2),z("ngIf",r.actions["Reject Additional Shares"]));},dependencies:[Yo,bn,En,Mn,Pn,In,Fn,wn,On,Ln],encapsulation:2,changeDetection:1})}return t})();var Pt=(()=>{class t{sharesService;constructor(a){this.sharesService=a;}resolve(a){let o=a.paramMap.get("shareAccountId");return this.sharesService.getSharesAccountData(o,false)}static \u0275fac=function(o){return new(o||t)(ie(A))};static \u0275prov=de({token:t,factory:t.\u0275fac})}return t})();var It=(()=>{class t{sharesService;constructor(a){this.sharesService=a;}resolve(a){let o=a.paramMap.get("name"),r=a.paramMap.get("shareAccountId")||a.parent.parent.paramMap.get("shareAccountId");switch(o){case "Apply Additional Shares":case "Redeem Shares":case "Approve Additional Shares":case "Reject Additional Shares":return this.sharesService.getSharesAccountData(r,true);default:return}}static \u0275fac=function(o){return new(o||t)(ie(A))};static \u0275prov=de({token:t,factory:t.\u0275fac})}return t})();var Ft=(()=>{class t{sharesService;constructor(a){this.sharesService=a;}resolve(a){let o=a.parent.parent.paramMap.get("clientId");return this.sharesService.getSharesAccountTemplate(o)}static \u0275fac=function(o){return new(o||t)(ie(A))};static \u0275prov=de({token:t,factory:t.\u0275fac})}return t})();var wt=(()=>{class t{sharesService;constructor(a){this.sharesService=a;}resolve(a){let o=a.paramMap.get("shareAccountId");return this.sharesService.getSharesAccountData(o,true)}static \u0275fac=function(o){return new(o||t)(ie(A))};static \u0275prov=de({token:t,factory:t.\u0275fac})}return t})();var Qr=[{path:"",data:{title:"Shares",breadcrumb:"Shares",routeParamBreadcrumb:false},children:[{path:"create",data:{title:"Create Shares Account",breadcrumb:"Create Shares Account"},component:yn,resolve:{sharesAccountTemplate:Ft}},{path:":shareAccountId",data:{title:"Shares Account View",routeParamBreadcrumb:"shareAccountId"},children:[{path:"",component:hn,resolve:{sharesAccountData:Pt},children:[{path:"transactions",component:fn,data:{title:"Shares Account Transactions",breadcrumb:"Transactions",routeParamBreadcrumb:false}},{path:"charges",component:xn,data:{title:"Shares Account Charges",breadcrumb:"Charges",routeParamBreadcrumb:false}},{path:"dividends",component:Sn,data:{title:"Shares Account Dividends",breadcrumb:"Dividends",routeParamBreadcrumb:false}}]},{path:"edit",data:{title:"Edit Shares Account",breadcrumb:"Edit",routeParamBreadcrumb:false},component:Tn,resolve:{sharesAccountAndTemplate:wt}},{path:"actions/:name",data:{title:"Shares Account Actions",breadcrumb:"Actions",routeParamBreadcrumb:"name"},component:Nn,resolve:{shareAccountActionData:It}}]}]}],jn=(()=>{class t{static \u0275fac=function(o){return new(o||t)};static \u0275mod=$({type:t});static \u0275inj=U({providers:[Pt,Ft,wt,It],imports:[O0e.forChild(Qr),O0e]})}return t})();var xs=(()=>{class t{static \u0275fac=function(o){return new(o||t)};static \u0275mod=$({type:t});static \u0275inj=U({providers:[_te],imports:[yQe,NQe,nXe,jn]})}return t})();export{xs as SharesModule};