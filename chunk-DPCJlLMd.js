import {$,U,y as yQe,N as NQe,n as nXe,_ as _te,O as O0e,i as ie,d as de,m as mi$1,R as Re$1,a as O,T,A as AI,z as zs,G as Gr,b as yF,c as N,q as g,Q as Qi,e as zB,C as CNe,I as Iv,Y as Yo,aF as Oc,F as go,ap as Mc,aG as eA,aq as R2,J as wc,K as Sn$1,L as Sje,P as Lje,b8 as Th,a9 as XQe,a7 as bp,ac as x,ad as b,ae as fe,af as w,ah as Ie,ag as nee,aj as D,ak as z,ao as $o,aB as Dt,an as Y0,am as ree,D as ii$1,b9 as Ti$1,M as Aje,ba as zT,bb as dh,bc as Mv,aH as Ri,bd as Br,be as O3,bf as sv,aJ as Ac,bg as ja,aM as DI,aN as Cc,aO as Na,aP as k2,bi as S6,aQ as uo,aR as _3,aT as ki,ai as Nt,aU as Li,bh as Wne,aS as re,bo as fAe,bp as coe,b6 as P4e,ar as uqe,as as mqe,at as bqe,au as pqe,av as fqe,aw as xqe,ax as gqe,ay as vqe,az as Cqe,aA as Mqe,a5 as ia,b3 as Pl,b0 as Rl,b1 as zl,aV as ze$1,aW as j,aX as H,aD as it,bw as Kt,bF as K,bt as gc,bJ as ot,bK as at}from'./main.js';import {I}from'./chunk-BsVxc90l.js';var we=()=>["../","edit"],Oe=()=>["../","list-account-transactions"];function Ne(i,c){i&1&&(x(0,"button",1),b(1,`
    View Transactions History
  `),w()),i&2&&z("routerLink",$o(1,Oe));}function qe(i,c){i&1&&(x(0,"span"),b(1," Within Bank "),w());}function ke(i,c){i&1&&(x(0,"span"),b(1," Own Account "),w());}var ye=(()=>{class i{route;standingInstructionsData;allowclientedit=false;constructor(r){this.route=r,this.route.data.subscribe(s=>{this.standingInstructionsData=s.standingInstructionsData,this.standingInstructionsData.fromClient.id===this.standingInstructionsData.toClient.id&&(this.allowclientedit=false);});}static \u0275fac=function(s){return new(s||i)(T(zs))};static \u0275cmp=N({type:i,selectors:[["mifosx-view-standing-instructions"]],standalone:false,decls:196,vars:33,consts:[["fxLayout","row","fxLayoutAlign","end","fxLayoutGap","2%","fxLayout.lt-md","column",1,"container","m-b-20"],["mat-raised-button","","color","primary",3,"routerLink"],["icon","edit"],["mat-raised-button","","color","primary",3,"routerLink",4,"mifosxHasPermission"],[1,"container"],["fxLayout","row wrap","fxLayout.lt-md","column"],["fxFlexFill","",1,"mat-h2"],[3,"inset"],["fxFlexFill",""],["fxFlex","40%"],["fxFlex","60%"],[4,"ngIf"]],template:function(s,o){s&1&&(x(0,"div",0),b(1,`
  `),x(2,"button",1),b(3,`
    `),fe(4,"fa-icon",2),b(5,`\xA0\xA0
    Edit
  `),w(),b(6,`
  `),Ie(7,Ne,2,2,"button",3),b(8,`
`),w(),b(9,`

`),x(10,"div",4),b(11,`

  `),x(12,"mat-card"),b(13,`

    `),x(14,"mat-card-content"),b(15,`

      `),x(16,"div",5),b(17,`

        `),x(18,"h2",6),b(19),w(),b(20,`

        `),fe(21,"mat-divider",7),b(22,`

        `),x(23,"div",8),b(24,`
          `),x(25,"span",9),b(26,"Applicant:"),w(),b(27,`
          `),x(28,"span",10),b(29),w(),b(30,`
        `),w(),b(31,`

        `),x(32,"div",8),b(33,`
          `),x(34,"span",9),b(35,"Type:"),w(),b(36,`
          `),x(37,"span",10),b(38),w(),b(39,`
        `),w(),b(40,`

        `),x(41,"div",8),b(42,`
          `),x(43,"span",9),b(44,"Priority:"),w(),b(45,`
          `),x(46,"span",10),b(47),w(),b(48,`
        `),w(),b(49,`

        `),x(50,"div",8),b(51,`
          `),x(52,"span",9),b(53,"Status:"),w(),b(54,`
          `),x(55,"span",10),b(56),w(),b(57,`
        `),w(),b(58,`

        `),x(59,"div",8),b(60,`
          `),x(61,"span",9),b(62,"From Account Type:"),w(),b(63,`
          `),x(64,"span",10),b(65),w(),b(66,`
        `),w(),b(67,`

        `),x(68,"div",8),b(69,`
          `),x(70,"span",9),b(71,"From Account:"),w(),b(72,`
          `),x(73,"span",10),b(74),w(),b(75,`
        `),w(),b(76,`

        `),x(77,"div",8),b(78,`
          `),x(79,"span",9),b(80,"Destination:"),w(),b(81,`
          `),x(82,"span",10),b(83,`
            `),Ie(84,qe,2,0,"span",11),b(85,`
            `),Ie(86,ke,2,0,"span",11),b(87,`
          `),w(),b(88,`
        `),w(),b(89,`

        `),x(90,"div",8),b(91,`
          `),x(92,"span",9),b(93,"To Office:"),w(),b(94,`
          `),x(95,"span",10),b(96),w(),b(97,`
        `),w(),b(98,`

        `),x(99,"div",8),b(100,`
          `),x(101,"span",9),b(102,"Beneficiary:"),w(),b(103,`
          `),x(104,"span",10),b(105),w(),b(106,`
        `),w(),b(107,`

        `),x(108,"div",8),b(109,`
          `),x(110,"span",9),b(111,"To Account Type:"),w(),b(112,`
          `),x(113,"span",10),b(114),w(),b(115,`
        `),w(),b(116,`

        `),x(117,"div",8),b(118,`
          `),x(119,"span",9),b(120,"To Account:"),w(),b(121,`
          `),x(122,"span",10),b(123),w(),b(124,`
        `),w(),b(125,`

        `),x(126,"div",8),b(127,`
          `),x(128,"span",9),b(129,"Standing Instruction Type:"),w(),b(130,`
          `),x(131,"span",10),b(132),w(),b(133,`
        `),w(),b(134,`

        `),x(135,"div",8),b(136,`
          `),x(137,"span",9),b(138,"Amount:"),w(),b(139,`
          `),x(140,"span",10),b(141),w(),b(142,`
        `),w(),b(143,`

        `),x(144,"div",8),b(145,`
          `),x(146,"span",9),b(147,"Validity:"),w(),b(148,`
          `),x(149,"span",10),b(150),nee(151,"date"),nee(152,"date"),w(),b(153,`
        `),w(),b(154,`

        `),x(155,"div",8),b(156,`
          `),x(157,"span",9),b(158,"Recurrence type:"),w(),b(159,`
          `),x(160,"span",10),b(161),w(),b(162,`
        `),w(),b(163,`

        `),x(164,"div",8),b(165,`
          `),x(166,"span",9),b(167,"Interval:"),w(),b(168,`
          `),x(169,"span",10),b(170),w(),b(171,`
        `),w(),b(172,`

        `),x(173,"div",8),b(174,`
          `),x(175,"span",9),b(176,"Recurrence Frequency:"),w(),b(177,`
          `),x(178,"span",10),b(179),w(),b(180,`
        `),w(),b(181,`

        `),x(182,"div",8),b(183,`
          `),x(184,"span",9),b(185,"On Month Day:"),w(),b(186,`
          `),x(187,"span",10),b(188),nee(189,"date"),w(),b(190,`
        `),w(),b(191,`

      `),w(),b(192,`

    `),w(),b(193,`

  `),w(),b(194,`

`),w(),b(195,`
`)),s&2&&(D(2),z("routerLink",$o(32,we)),D(5),z("mifosxHasPermission","READ_ACCOUNTTRANSFER"),D(12),Dt(o.standingInstructionsData.name),D(2),z("inset",true),D(8),Dt(o.standingInstructionsData.fromClient.displayName),D(9),Dt(o.standingInstructionsData.transferType.value),D(9),Dt(o.standingInstructionsData.priority.value),D(9),Dt(o.standingInstructionsData.status.value),D(9),Dt(o.standingInstructionsData.fromAccountType.value),D(9),Y0("",o.standingInstructionsData.fromAccount.productName," - ",o.standingInstructionsData.fromAccount.accountNo),D(10),z("ngIf",o.allowclientedit),D(2),z("ngIf",!o.allowclientedit),D(10),Dt(o.standingInstructionsData.toOffice.name),D(9),Dt(o.standingInstructionsData.toClient.displayName),D(9),Dt(o.standingInstructionsData.toAccountType.value),D(9),Y0("",o.standingInstructionsData.toAccount.productName," - ",o.standingInstructionsData.toAccount.accountNo),D(9),Dt(o.standingInstructionsData.instructionType.value),D(9),Dt(o.standingInstructionsData.amount),D(9),Y0("",ree(151,26,o.standingInstructionsData.validFrom)," - ",ree(152,28,o.standingInstructionsData.validTill)),D(11),Dt(o.standingInstructionsData.recurrenceType.value),D(9),Dt(o.standingInstructionsData.recurrenceInterval),D(9),Dt(o.standingInstructionsData.recurrenceFrequency.value),D(9),Dt(ree(189,30,o.standingInstructionsData.recurrenceOnMonthDay)));},dependencies:[Yo,Oc,go,Mc,eA,R2,wc,Sn$1,Sje,Lje,Th,XQe,bp,_te],styles:[".mat-elevation-z1[_ngcontent-%COMP%]{margin:1em 0 1.5em}h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%]{margin:0;font-weight:500}span[_ngcontent-%COMP%]{margin:.5em 0}.margin-t[_ngcontent-%COMP%]{margin-top:1em}mat-divider[_ngcontent-%COMP%]{margin:0 0 1em}"],changeDetection:1})}return i})();var Le=()=>["../view"];function Pe(i,c){if(i&1&&(x(0,"mat-option",33),b(1),w()),i&2){let r=c.$implicit;z("value",r.id),D(),it(`
                `,r.value,`
              `);}}function Re(i,c){i&1&&(x(0,"mat-error"),b(1,`
              Priority is `),x(2,"strong"),b(3,"required"),w(),b(4,`
            `),w());}function Ve(i,c){if(i&1&&(x(0,"mat-option",33),b(1),w()),i&2){let r=c.$implicit;z("value",r.id),D(),it(`
                `,r.value,`
              `);}}function Be(i,c){i&1&&(x(0,"mat-error"),b(1,`
              Status is `),x(2,"strong"),b(3,"required"),w(),b(4,`
            `),w());}function je(i,c){if(i&1&&(x(0,"mat-option",33),b(1),w()),i&2){let r=c.$implicit;z("value",r.id),D(),it(`
                `,r.value,`
              `);}}function $e(i,c){i&1&&(x(0,"mat-error"),b(1,`
              Valid From Date is `),x(2,"strong"),b(3,"required"),w(),b(4,`
            `),w());}function He(i,c){i&1&&(x(0,"mat-error"),b(1,`
              Valid Till Date is `),x(2,"strong"),b(3,"required"),w(),b(4,`
            `),w());}function Ge(i,c){if(i&1&&(x(0,"mat-option",33),b(1),w()),i&2){let r=c.$implicit;z("value",r.id),D(),it(`
                `,r.value,`
              `);}}function Ue(i,c){i&1&&(x(0,"mat-error"),b(1,`
              Recurrence Type is `),x(2,"strong"),b(3,"required"),w(),b(4,`
            `),w());}function ze(i,c){if(i&1&&(x(0,"mat-option",33),b(1),w()),i&2){let r=c.$implicit;z("value",r.id),D(),it(`
                `,r.value,`
              `);}}function Qe(i,c){if(i&1){let r=Kt();x(0,"button",34),re("click",function(){ot(r);let o=K();return at(o.submit())}),b(1,"Submit"),w();}if(i&2){let r=K();z("disabled",!r.editStandingInstructionsForm.valid);}}var _e=(()=>{class i{formBuilder;route;router;accountTransfersService;settingsService;datePipe;standingInstructionsData;standingInstructionsId;allowclientedit=false;editStandingInstructionsForm;priorityTypeData;statusTypeData;instructionTypeData;recurrenceTypeData;recurrenceFrequencyTypeData;minDate=new Date(2e3,0,1);maxDate=new Date;constructor(r,s,o,f,C,P){this.formBuilder=r,this.route=s,this.router=o,this.accountTransfersService=f,this.settingsService=C,this.datePipe=P,this.route.data.subscribe(st=>{this.standingInstructionsData=st.standingInstructionsDataAndTemplate,this.standingInstructionsId=st.standingInstructionsDataAndTemplate.id,this.standingInstructionsData.fromClient.id===this.standingInstructionsData.toClient.id&&(this.allowclientedit=false),this.setOptions();});}ngOnInit(){this.createEditStandingInstructionsForm();let s=new Date().getFullYear();this.standingInstructionsData.recurrenceOnMonthDay&&this.standingInstructionsData.recurrenceOnMonthDay.push(s),this.editStandingInstructionsForm.patchValue({name:this.standingInstructionsData.name,applicant:this.standingInstructionsData.fromClient.displayName,type:this.standingInstructionsData.transferType.value,priority:this.standingInstructionsData.priority.id,status:this.standingInstructionsData.status.id,fromAccountType:this.standingInstructionsData.fromAccountType.value,fromAccount:this.standingInstructionsData.fromAccount.productName,destination:this.allowclientedit?"Within Bank":"Own Account",toOffice:this.standingInstructionsData.toOffice.name,toClientId:this.standingInstructionsData.toClient.displayName,toAccountType:this.standingInstructionsData.toAccountType.value,toAccount:this.standingInstructionsData.toAccount.productName,instructionType:this.standingInstructionsData.instructionType.id,amount:this.standingInstructionsData.amount,validFrom:this.standingInstructionsData.validFrom&&new Date(this.standingInstructionsData.validFrom),validTill:this.standingInstructionsData.validTill&&new Date(this.standingInstructionsData.validTill),recurrenceType:this.standingInstructionsData.recurrenceType.id,recurrenceInterval:this.standingInstructionsData.recurrenceInterval,recurrenceFrequency:this.standingInstructionsData.recurrenceFrequency.id,recurrenceOnMonthDay:this.standingInstructionsData.recurrenceOnMonthDay&&new Date(this.standingInstructionsData.recurrenceOnMonthDay)});}createEditStandingInstructionsForm(){this.editStandingInstructionsForm=this.formBuilder.group({name:[{value:"",disabled:true}],applicant:[{value:"",disabled:true}],type:[{value:"",disabled:true}],priority:["",mi$1.required],status:["",mi$1.required],fromAccountType:[{value:"",disabled:true}],fromAccount:[{value:"",disabled:true}],destination:[{value:"",disabled:true}],toOffice:[{value:"",disabled:true}],toClientId:[{value:"",disabled:true}],toAccountType:[{value:"",disabled:true}],toAccount:[{value:"",disabled:true}],instructionType:"",amount:"",validFrom:["",mi$1.required],validTill:["",mi$1.required],recurrenceType:["",mi$1.required],recurrenceInterval:"",recurrenceFrequency:"",recurrenceOnMonthDay:""});}setOptions(){this.priorityTypeData=this.standingInstructionsData.priorityOptions,this.statusTypeData=this.standingInstructionsData.statusOptions,this.instructionTypeData=this.standingInstructionsData.instructionTypeOptions,this.recurrenceTypeData=this.standingInstructionsData.recurrenceTypeOptions,this.recurrenceFrequencyTypeData=this.standingInstructionsData.recurrenceFrequencyOptions;}submit(){let r=this.settingsService.dateFormat,s=this.settingsService.language.code,o={amount:this.editStandingInstructionsForm.value.amount,dateFormat:r,instructionType:this.editStandingInstructionsForm.value.instructionType,locale:s,monthDayFormat:"dd MMMM",priority:this.editStandingInstructionsForm.value.priority,recurrenceFrequency:this.editStandingInstructionsForm.value.recurrenceFrequency,recurrenceInterval:this.editStandingInstructionsForm.value.recurrenceInterval,recurrenceOnMonthDay:this.datePipe.transform(this.editStandingInstructionsForm.value.recurrenceOnMonthDay,"dd MMMM"),recurrenceType:this.editStandingInstructionsForm.value.recurrenceType,status:this.editStandingInstructionsForm.value.status,validFrom:this.datePipe.transform(this.editStandingInstructionsForm.value.validFrom,r),validTill:this.datePipe.transform(this.editStandingInstructionsForm.value.validTill,r)};this.accountTransfersService.updateStandingInstructionsData(this.standingInstructionsId,o).subscribe(f=>{this.router.navigate(["../view"],{relativeTo:this.route});});}static \u0275fac=function(s){return new(s||i)(T(AI),T(zs),T(Gr),T(I),T(yF),T(_te))};static \u0275cmp=N({type:i,selectors:[["mifosx-edit-standing-instructions"]],standalone:false,decls:223,vars:26,consts:[["validFromDatePicker",""],["validTillDatePicker",""],["recurrenceOnMonthDayDatePicker",""],[1,"container"],[3,"formGroup"],["fxLayout","row wrap","fxLayoutGap","2%","fxLayout.lt-md","column"],["fxFlex","48%"],["matInput","","formControlName","name"],["matInput","","formControlName","applicant"],["matInput","","formControlName","type"],["matInput","","formControlName","fromAccountType"],["required","","formControlName","priority"],[3,"value",4,"ngFor","ngForOf"],[4,"ngIf"],["required","","formControlName","status"],["matInput","","formControlName","fromAccount"],["matInput","","formControlName","destination"],["matInput","","formControlName","toOffice"],["matInput","","formControlName","toClientId"],["matInput","","formControlName","toAccountType"],["matInput","","formControlName","toAccount"],["formControlName","instructionType"],["matInput","","formControlName","amount"],["matInput","","required","","formControlName","validFrom",3,"min","max","matDatepicker"],["matSuffix","",3,"for"],["matInput","","required","","formControlName","validTill",3,"min","max","matDatepicker"],["required","","formControlName","recurrenceType"],["matInput","","formControlName","recurrenceInterval"],["formControlName","recurrenceFrequency"],["matInput","","formControlName","recurrenceOnMonthDay",3,"min","max","matDatepicker"],["fxLayout","row","fxLayout.xs","column","fxLayoutAlign","center","fxLayoutGap","5px"],["type","button","mat-raised-button","",3,"routerLink"],["mat-raised-button","","color","primary",3,"disabled","click",4,"mifosxHasPermission"],[3,"value"],["mat-raised-button","","color","primary",3,"click","disabled"]],template:function(s,o){if(s&1&&(x(0,"div",3),b(1,`

  `),x(2,"mat-card"),b(3,`

    `),x(4,"form",4),b(5,`

      `),x(6,"mat-card-content"),b(7,`

        `),x(8,"div",5),b(9,`

          `),x(10,"mat-form-field",6),b(11,`
            `),x(12,"mat-label"),b(13,"Name"),w(),b(14,`
            `),fe(15,"input",7),ki(),b(16,`
          `),w(),b(17,`

          `),x(18,"mat-form-field",6),b(19,`
            `),x(20,"mat-label"),b(21,"Applicant"),w(),b(22,`
            `),fe(23,"input",8),ki(),b(24,`
          `),w(),b(25,`

          `),x(26,"mat-form-field",6),b(27,`
            `),x(28,"mat-label"),b(29,"Type"),w(),b(30,`
            `),fe(31,"input",9),ki(),b(32,`
          `),w(),b(33,`

          `),x(34,"mat-form-field",6),b(35,`
            `),x(36,"mat-label"),b(37,"From Account Type"),w(),b(38,`
            `),fe(39,"input",10),ki(),b(40,`
          `),w(),b(41,`

          `),x(42,"mat-form-field",6),b(43,`
            `),x(44,"mat-label"),b(45,"Priority"),w(),b(46,`
            `),x(47,"mat-select",11),b(48,`
              `),Ie(49,Pe,2,2,"mat-option",12),b(50,`
            `),w(),ki(),b(51,`
            `),Ie(52,Re,5,0,"mat-error",13),b(53,`
          `),w(),b(54,`

          `),x(55,"mat-form-field",6),b(56,`
            `),x(57,"mat-label"),b(58,"Status"),w(),b(59,`
            `),x(60,"mat-select",14),b(61,`
              `),Ie(62,Ve,2,2,"mat-option",12),b(63,`
            `),w(),ki(),b(64,`
            `),Ie(65,Be,5,0,"mat-error",13),b(66,`
          `),w(),b(67,`

          `),x(68,"mat-form-field",6),b(69,`
            `),x(70,"mat-label"),b(71,"From Account"),w(),b(72,`
            `),fe(73,"input",15),ki(),b(74,`
          `),w(),b(75,`

          `),x(76,"mat-form-field",6),b(77,`
            `),x(78,"mat-label"),b(79,"Destination"),w(),b(80,`
            `),fe(81,"input",16),ki(),b(82,`
          `),w(),b(83,`

          `),x(84,"mat-form-field",6),b(85,`
            `),x(86,"mat-label"),b(87,"To Office"),w(),b(88,`
            `),fe(89,"input",17),ki(),b(90,`
          `),w(),b(91,`

          `),x(92,"mat-form-field",6),b(93,`
            `),x(94,"mat-label"),b(95,"Beneficiary"),w(),b(96,`
            `),fe(97,"input",18),ki(),b(98,`
          `),w(),b(99,`

          `),x(100,"mat-form-field",6),b(101,`
            `),x(102,"mat-label"),b(103,"To Account Type"),w(),b(104,`
            `),fe(105,"input",19),ki(),b(106,`
          `),w(),b(107,`

          `),x(108,"mat-form-field",6),b(109,`
            `),x(110,"mat-label"),b(111,"To Account"),w(),b(112,`
            `),fe(113,"input",20),ki(),b(114,`
          `),w(),b(115,`

          `),x(116,"mat-form-field",6),b(117,`
            `),x(118,"mat-label"),b(119,"Standing Instruction Type"),w(),b(120,`
            `),x(121,"mat-select",21),b(122,`
              `),Ie(123,je,2,2,"mat-option",12),b(124,`
            `),w(),ki(),b(125,`
          `),w(),b(126,`

          `),x(127,"mat-form-field",6),b(128,`
            `),x(129,"mat-label"),b(130,"Amount"),w(),b(131,`
            `),fe(132,"input",22),ki(),b(133,`
          `),w(),b(134,`

          `),x(135,"mat-form-field",6),b(136,`
            `),x(137,"mat-label"),b(138,"Validity From"),w(),b(139,`
            `),fe(140,"input",23),ki(),b(141,`
            `),fe(142,"mat-datepicker-toggle",24),b(143,`
            `),fe(144,"mat-datepicker",null,0),b(146,`
            `),Ie(147,$e,5,0,"mat-error",13),b(148,`
          `),w(),b(149,`

          `),x(150,"mat-form-field",6),b(151,`
            `),x(152,"mat-label"),b(153,"Validity To"),w(),b(154,`
            `),fe(155,"input",25),ki(),b(156,`
            `),fe(157,"mat-datepicker-toggle",24),b(158,`
            `),fe(159,"mat-datepicker",null,1),b(161,`
            `),Ie(162,He,5,0,"mat-error",13),b(163,`
          `),w(),b(164,`

          `),x(165,"mat-form-field",6),b(166,`
            `),x(167,"mat-label"),b(168,"Recurrence Type"),w(),b(169,`
            `),x(170,"mat-select",26),b(171,`
              `),Ie(172,Ge,2,2,"mat-option",12),b(173,`
            `),w(),ki(),b(174,`
            `),Ie(175,Ue,5,0,"mat-error",13),b(176,`
          `),w(),b(177,`

          `),x(178,"mat-form-field",6),b(179,`
            `),x(180,"mat-label"),b(181,"Interval"),w(),b(182,`
            `),fe(183,"input",27),ki(),b(184,`
          `),w(),b(185,`

          `),x(186,"mat-form-field",6),b(187,`
            `),x(188,"mat-label"),b(189,"Recurrence Frequency"),w(),b(190,`
            `),x(191,"mat-select",28),b(192,`
              `),Ie(193,ze,2,2,"mat-option",12),b(194,`
            `),w(),ki(),b(195,`
          `),w(),b(196,`

          `),x(197,"mat-form-field",6),b(198,`
            `),x(199,"mat-label"),b(200,"On Month Day"),w(),b(201,`
            `),fe(202,"input",29),ki(),b(203,`
            `),fe(204,"mat-datepicker-toggle",24),b(205,`
            `),fe(206,"mat-datepicker",null,2),b(208,`
          `),w(),b(209,`

        `),w(),b(210,`

      `),w(),b(211,`

      `),x(212,"mat-card-actions",30),b(213,`
        `),x(214,"button",31),b(215,"Cancel"),w(),b(216,`
        `),Ie(217,Qe,2,1,"button",32),b(218,`
      `),w(),b(219,`

    `),w(),b(220,`

  `),w(),b(221,`

`),w(),b(222,`
`)),s&2){let f=Nt(145),C=Nt(160),P=Nt(207);D(4),z("formGroup",o.editStandingInstructionsForm),D(11),Li(),D(8),Li(),D(8),Li(),D(8),Li(),D(8),Li(),D(2),z("ngForOf",o.priorityTypeData),D(3),z("ngIf",o.editStandingInstructionsForm.controls.priority.hasError("required")),D(8),Li(),D(2),z("ngForOf",o.statusTypeData),D(3),z("ngIf",o.editStandingInstructionsForm.controls.status.hasError("required")),D(8),Li(),D(8),Li(),D(8),Li(),D(8),Li(),D(8),Li(),D(8),Li(),D(8),Li(),D(2),z("ngForOf",o.instructionTypeData),D(9),Li(),D(8),z("min",o.minDate)("max",o.maxDate)("matDatepicker",f),Li(),D(2),z("for",f),D(5),z("ngIf",o.editStandingInstructionsForm.controls.validFrom.hasError("required")),D(8),z("min",o.minDate)("max",o.maxDate)("matDatepicker",C),Li(),D(2),z("for",C),D(5),z("ngIf",o.editStandingInstructionsForm.controls.validTill.hasError("required")),D(8),Li(),D(2),z("ngForOf",o.recurrenceTypeData),D(3),z("ngIf",o.editStandingInstructionsForm.controls.recurrenceType.hasError("required")),D(8),Li(),D(8),Li(),D(2),z("ngForOf",o.recurrenceFrequencyTypeData),D(9),z("min",o.minDate)("max",o.maxDate)("matDatepicker",P),Li(),D(2),z("for",P),D(10),z("routerLink",$o(25,Le)),D(3),z("mifosxHasPermission","UPDATE_STANDINGINSTRUCTION");}},dependencies:[ii$1,Yo,go,Mc,eA,wc,Ti$1,Sn$1,Sje,Aje,Lje,zT,dh,Mv,Ri,Br,O3,sv,Ac,ja,DI,Cc,Na,k2,S6,uo,_3,XQe,bp],encapsulation:2,changeDetection:1})}return i})();var We=()=>["../"];function Ye(i,c){i&1&&(x(0,"mat-error"),b(1,`
              Name is `),x(2,"strong"),b(3,"required"),w(),b(4,`
            `),w());}function Je(i,c){if(i&1&&(x(0,"mat-option",33),b(1),w()),i&2){let r=c.$implicit;z("value",r.id),D(),it(`
                `,r.value,`
              `);}}function Ke(i,c){i&1&&(x(0,"mat-error"),b(1,`
              Transfer Type is `),x(2,"strong"),b(3,"required"),w(),b(4,`
            `),w());}function Xe(i,c){if(i&1&&(x(0,"mat-option",33),b(1),w()),i&2){let r=c.$implicit;z("value",r.id),D(),it(`
                `,r.value,`
              `);}}function Ze(i,c){i&1&&(x(0,"mat-error"),b(1,`
              Priority is `),x(2,"strong"),b(3,"required"),w(),b(4,`
            `),w());}function tn(i,c){if(i&1&&(x(0,"mat-option",33),b(1),w()),i&2){let r=c.$implicit;z("value",r.id),D(),it(`
                `,r.value,`
              `);}}function en(i,c){i&1&&(x(0,"mat-error"),b(1,`
              Status is `),x(2,"strong"),b(3,"required"),w(),b(4,`
            `),w());}function nn(i,c){if(i&1&&(x(0,"mat-option",33),b(1),w()),i&2){let r=c.$implicit;z("value",r.id),D(),it(`
                `,r.value,`
              `);}}function rn(i,c){i&1&&(x(0,"mat-error"),b(1,`
              From Account Type is `),x(2,"strong"),b(3,"required"),w(),b(4,`
            `),w());}function an(i,c){if(i&1&&(x(0,"mat-option",33),b(1),w()),i&2){let r=c.$implicit;z("value",r.id),D(),Y0(`
                `,r.productName," - ",r.accountNo,`
              `);}}function on(i,c){i&1&&(x(0,"mat-error"),b(1,`
              From Account is `),x(2,"strong"),b(3,"required"),w(),b(4,`
            `),w());}function mn(i,c){if(i&1&&(x(0,"mat-option",33),b(1),w()),i&2){let r=c.$implicit;z("value",r.id),D(),it(`
                `,r.value,`
              `);}}function cn(i,c){i&1&&(x(0,"mat-error"),b(1,`
              Destination is `),x(2,"strong"),b(3,"required"),w(),b(4,`
            `),w());}function sn(i,c){if(i&1&&(x(0,"mat-option",33),b(1),w()),i&2){let r=c.$implicit;z("value",r.id),D(),it(`
                `,r.name,`
              `);}}function ln(i,c){i&1&&(x(0,"mat-error"),b(1,`
              To Office is `),x(2,"strong"),b(3,"required"),w(),b(4,`
            `),w());}function dn(i,c){if(i&1&&(x(0,"mat-option",33),b(1),w()),i&2){let r=c.$implicit;z("value",r.id),D(),it(`
                `,r.displayName,`
              `);}}function pn(i,c){i&1&&(x(0,"mat-error"),b(1,`
              Beneficiary is `),x(2,"strong"),b(3,"required"),w(),b(4,`
            `),w());}function un(i,c){if(i&1&&(x(0,"mat-option",33),b(1),w()),i&2){let r=c.$implicit;z("value",r.id),D(),it(`
                `,r.value,`
              `);}}function fn(i,c){i&1&&(x(0,"mat-error"),b(1,`
              To Account Type is `),x(2,"strong"),b(3,"required"),w(),b(4,`
            `),w());}function xn(i,c){if(i&1&&(x(0,"mat-option",33),b(1),w()),i&2){let r=c.$implicit;z("value",r.id),D(),Y0(`
                `,r.productName," - ",r.accountNo,`
              `);}}function Sn(i,c){i&1&&(x(0,"mat-error"),b(1,`
              To Account is `),x(2,"strong"),b(3,"required"),w(),b(4,`
            `),w());}function vn(i,c){if(i&1&&(x(0,"mat-option",33),b(1),w()),i&2){let r=c.$implicit;z("value",r.id),D(),it(`
                `,r.value,`
              `);}}function gn(i,c){i&1&&(x(0,"mat-error"),b(1,`
              Standing Instruction Type is `),x(2,"strong"),b(3,"required"),w(),b(4,`
            `),w());}function Tn(i,c){i&1&&(x(0,"mat-error"),b(1,`
              Amount is `),x(2,"strong"),b(3,"required"),w(),b(4,`
            `),w());}function In(i,c){i&1&&(x(0,"mat-error"),b(1,`
              Valid From Date is `),x(2,"strong"),b(3,"required"),w(),b(4,`
            `),w());}function yn(i,c){i&1&&(x(0,"mat-error"),b(1,`
              Valid Till Date is `),x(2,"strong"),b(3,"required"),w(),b(4,`
            `),w());}function Cn(i,c){if(i&1&&(x(0,"mat-option",33),b(1),w()),i&2){let r=c.$implicit;z("value",r.id),D(),it(`
                `,r.value,`
              `);}}function _n(i,c){i&1&&(x(0,"mat-error"),b(1,`
              Recurrence Type is `),x(2,"strong"),b(3,"required"),w(),b(4,`
            `),w());}function hn(i,c){i&1&&(x(0,"mat-error"),b(1,`
              Recurrence Interval is `),x(2,"strong"),b(3,"required"),w(),b(4,`
            `),w());}function En(i,c){if(i&1&&(x(0,"mat-option",33),b(1),w()),i&2){let r=c.$implicit;z("value",r.id),D(),it(`
                `,r.value,`
              `);}}function Dn(i,c){i&1&&(x(0,"mat-error"),b(1,`
              Recurrence Frequency is `),x(2,"strong"),b(3,"required"),w(),b(4,`
            `),w());}function An(i,c){i&1&&(x(0,"mat-error"),b(1,`
              On Month Day is `),x(2,"strong"),b(3,"required"),w(),b(4,`
            `),w());}function Fn(i,c){if(i&1){let r=Kt();x(0,"button",34),re("click",function(){ot(r);let o=K();return at(o.submit())}),b(1,"Submit"),w();}if(i&2){let r=K();z("disabled",!r.createStandingInstructionsForm.valid);}}var he=(()=>{class i{formBuilder;route;router;accountTransfersService;settingsService;datePipe;standingIntructionsTemplate;minDate=new Date(2e3,0,1);maxDate=new Date(2100,0,1);allowclientedit=true;createStandingInstructionsForm;priorityTypeData;statusTypeData;instructionTypeData;recurrenceTypeData;recurrenceFrequencyTypeData;transferTypeData;fromAccountTypeData;fromAccountData;destinationTypeData;toOfficeTypeData;toClientTypeData;toAccountTypeData;toAccountData;accountTypeId;officeId;accountType;clientId;constructor(r,s,o,f,C,P){this.formBuilder=r,this.route=s,this.router=o,this.accountTransfersService=f,this.settingsService=C,this.datePipe=P,this.route.data.subscribe(st=>{this.standingIntructionsTemplate=st.standingIntructionsTemplate,this.setParams(),this.setOptions();});}setParams(){switch(this.officeId=this.route.snapshot.queryParams.officeId,this.accountType=this.route.snapshot.queryParams.accountType,this.clientId=this.route.parent.snapshot.params.clientId,this.accountType){case "fromloans":this.accountTypeId="1";break;case "fromsavings":this.accountTypeId="2";break;default:this.accountTypeId="0";}}ngOnInit(){this.createCreateStandingInstructionsForm(),this.buildDependencies(),this.createStandingInstructionsForm.patchValue({applicant:this.standingIntructionsTemplate.fromClient.displayName});}createCreateStandingInstructionsForm(){this.createStandingInstructionsForm=this.formBuilder.group({name:["",mi$1.required],applicant:[{value:"",disabled:true}],transferType:["",mi$1.required],priority:["",mi$1.required],status:["",mi$1.required],fromAccountType:["",mi$1.required],fromAccountId:["",mi$1.required],destination:["",mi$1.required],toOfficeId:["",mi$1.required],toClientId:["",mi$1.required],toAccountType:["",mi$1.required],toAccountId:["",mi$1.required],instructionType:["",mi$1.required],amount:["",mi$1.required],validFrom:["",mi$1.required],validTill:["",mi$1.required],recurrenceType:["",mi$1.required],recurrenceInterval:["",mi$1.required],recurrenceFrequency:["",mi$1.required],recurrenceOnMonthDay:["",mi$1.required]});}setOptions(){this.transferTypeData=this.standingIntructionsTemplate.transferTypeOptions,this.priorityTypeData=this.standingIntructionsTemplate.priorityOptions,this.statusTypeData=this.standingIntructionsTemplate.statusOptions,this.fromAccountTypeData=this.standingIntructionsTemplate.fromAccountTypeOptions,this.fromAccountData=this.standingIntructionsTemplate.fromAccountOptions,this.destinationTypeData=[{id:1,value:"own account"},{id:2,value:"with in bank"}],this.toOfficeTypeData=this.standingIntructionsTemplate.toOfficeOptions,this.toClientTypeData=this.standingIntructionsTemplate.toClientOptions,this.toAccountTypeData=this.standingIntructionsTemplate.toAccountTypeOptions,this.toAccountData=this.standingIntructionsTemplate.toAccountOptions,this.instructionTypeData=this.standingIntructionsTemplate.instructionTypeOptions,this.recurrenceTypeData=this.standingIntructionsTemplate.recurrenceTypeOptions,this.recurrenceFrequencyTypeData=this.standingIntructionsTemplate.recurrenceFrequencyOptions;}buildDependencies(){this.createStandingInstructionsForm.get("destination").valueChanges.subscribe(r=>{r===1?(this.allowclientedit=false,this.createStandingInstructionsForm.patchValue({toOfficeId:this.officeId,toClientId:this.clientId}),this.createStandingInstructionsForm.controls.toOfficeId.disable(),this.createStandingInstructionsForm.controls.toClientId.disable(),this.changeEvent()):(this.allowclientedit=true,this.createStandingInstructionsForm.patchValue({toOfficeId:"",toClientId:""}),this.createStandingInstructionsForm.controls.toOfficeId.enable(),this.createStandingInstructionsForm.controls.toClientId.enable());});}changeEvent(){let r=this.refineObject(this.createStandingInstructionsForm.value);this.accountTransfersService.getStandingInstructionsTemplate(this.clientId,this.officeId,this.accountTypeId,r).subscribe(s=>{this.standingIntructionsTemplate=s,this.setOptions();});}refineObject(r){let s=Object.getOwnPropertyNames(r);for(let o=0;o<s.length;o++){let f=s[o];(r[f]===null||r[f]===void 0||r[f]==="")&&delete r[f];}return r}submit(){let r=this.settingsService.dateFormat,s=this.settingsService.language.code,o=Re$1(O({},this.createStandingInstructionsForm.value),{dateFormat:r,locale:s,monthDayFormat:"dd MMMM",fromClientId:this.clientId,fromOfficeId:this.officeId,validFrom:this.datePipe.transform(this.createStandingInstructionsForm.value.validFrom,r),validTill:this.datePipe.transform(this.createStandingInstructionsForm.value.validTill,r),recurrenceOnMonthDay:this.datePipe.transform(this.createStandingInstructionsForm.value.recurrenceOnMonthDay,"dd MMMM")});delete o.destination,delete o.applicant,this.accountTransfersService.createStandingInstructions(o).subscribe(f=>{this.router.navigate(["../../"],{relativeTo:this.route});});}static \u0275fac=function(s){return new(s||i)(T(AI),T(zs),T(Gr),T(I),T(yF),T(_te))};static \u0275cmp=N({type:i,selectors:[["mifosx-create-standing-instructions"]],standalone:false,decls:275,vars:48,consts:[["validFromDatePicker",""],["validTillDatePicker",""],["recurrenceOnMonthDayDatePicker",""],[1,"container"],[3,"formGroup"],["fxLayout","row wrap","fxLayoutGap","2%","fxLayout.lt-md","column"],["fxFlex","48%"],["matInput","","required","","formControlName","name"],[4,"ngIf"],["matInput","","formControlName","applicant"],["required","","formControlName","transferType",3,"selectionChange"],[3,"value",4,"ngFor","ngForOf"],["required","","formControlName","priority"],["required","","formControlName","status"],["required","","formControlName","fromAccountType",3,"selectionChange"],["required","","formControlName","fromAccountId",3,"selectionChange"],["required","","formControlName","destination"],["required","","formControlName","toOfficeId",3,"selectionChange"],["required","","formControlName","toClientId",3,"selectionChange"],["required","","formControlName","toAccountType",3,"selectionChange"],["required","","formControlName","toAccountId",3,"selectionChange"],["formControlName","instructionType"],["type","number","matInput","","required","","formControlName","amount"],["matInput","","required","","formControlName","validFrom",3,"min","max","matDatepicker"],["matSuffix","",3,"for"],["matInput","","required","","formControlName","validTill",3,"min","max","matDatepicker"],["required","","formControlName","recurrenceType"],["type","number","matInput","","required","","formControlName","recurrenceInterval"],["required","","formControlName","recurrenceFrequency"],["required","","matInput","","formControlName","recurrenceOnMonthDay",3,"min","max","matDatepicker"],["fxLayout","row","fxLayout.xs","column","fxLayoutAlign","center","fxLayoutGap","5px"],["type","button","mat-raised-button","",3,"routerLink"],["mat-raised-button","","color","primary",3,"disabled","click",4,"mifosxHasPermission"],[3,"value"],["mat-raised-button","","color","primary",3,"click","disabled"]],template:function(s,o){if(s&1&&(x(0,"div",3),b(1,`

  `),x(2,"mat-card"),b(3,`

    `),x(4,"form",4),b(5,`

      `),x(6,"mat-card-content"),b(7,`

        `),x(8,"div",5),b(9,`

          `),x(10,"mat-form-field",6),b(11,`
            `),x(12,"mat-label"),b(13,"Name"),w(),b(14,`
            `),fe(15,"input",7),ki(),b(16,`
            `),Ie(17,Ye,5,0,"mat-error",8),b(18,`
          `),w(),b(19,`

          `),x(20,"mat-form-field",6),b(21,`
            `),x(22,"mat-label"),b(23,"Applicant"),w(),b(24,`
            `),fe(25,"input",9),ki(),b(26,`
          `),w(),b(27,`

          `),x(28,"mat-form-field",6),b(29,`
            `),x(30,"mat-label"),b(31,"Type"),w(),b(32,`
            `),x(33,"mat-select",10),re("selectionChange",function(){return o.changeEvent()}),b(34,`
              `),Ie(35,Je,2,2,"mat-option",11),b(36,`
            `),w(),ki(),b(37,`
            `),Ie(38,Ke,5,0,"mat-error",8),b(39,`
          `),w(),b(40,`

          `),x(41,"mat-form-field",6),b(42,`
            `),x(43,"mat-label"),b(44,"Priority"),w(),b(45,`
            `),x(46,"mat-select",12),b(47,`
              `),Ie(48,Xe,2,2,"mat-option",11),b(49,`
            `),w(),ki(),b(50,`
            `),Ie(51,Ze,5,0,"mat-error",8),b(52,`
          `),w(),b(53,`

          `),x(54,"mat-form-field",6),b(55,`
            `),x(56,"mat-label"),b(57,"Status"),w(),b(58,`
            `),x(59,"mat-select",13),b(60,`
              `),Ie(61,tn,2,2,"mat-option",11),b(62,`
            `),w(),ki(),b(63,`
            `),Ie(64,en,5,0,"mat-error",8),b(65,`
          `),w(),b(66,`

          `),x(67,"mat-form-field",6),b(68,`
            `),x(69,"mat-label"),b(70,"From Account Type"),w(),b(71,`
            `),x(72,"mat-select",14),re("selectionChange",function(){return o.changeEvent()}),b(73,`
              `),Ie(74,nn,2,2,"mat-option",11),b(75,`
            `),w(),ki(),b(76,`
            `),Ie(77,rn,5,0,"mat-error",8),b(78,`
          `),w(),b(79,`

          `),x(80,"mat-form-field",6),b(81,`
            `),x(82,"mat-label"),b(83,"From Account"),w(),b(84,`
            `),x(85,"mat-select",15),re("selectionChange",function(){return o.changeEvent()}),b(86,`
              `),Ie(87,an,2,3,"mat-option",11),b(88,`
            `),w(),ki(),b(89,`
            `),Ie(90,on,5,0,"mat-error",8),b(91,`
          `),w(),b(92,`

          `),x(93,"mat-form-field",6),b(94,`
            `),x(95,"mat-label"),b(96,"Destination"),w(),b(97,`
            `),x(98,"mat-select",16),b(99,`
              `),Ie(100,mn,2,2,"mat-option",11),b(101,`
            `),w(),ki(),b(102,`
            `),Ie(103,cn,5,0,"mat-error",8),b(104,`
          `),w(),b(105,`

          `),x(106,"mat-form-field",6),b(107,`
            `),x(108,"mat-label"),b(109,"To Office"),w(),b(110,`
            `),x(111,"mat-select",17),re("selectionChange",function(){return o.changeEvent()}),b(112,`
              `),Ie(113,sn,2,2,"mat-option",11),b(114,`
            `),w(),ki(),b(115,`
            `),Ie(116,ln,5,0,"mat-error",8),b(117,`
          `),w(),b(118,`

          `),x(119,"mat-form-field",6),b(120,`
            `),x(121,"mat-label"),b(122,"Beneficiary"),w(),b(123,`
            `),x(124,"mat-select",18),re("selectionChange",function(){return o.changeEvent()}),b(125,`
              `),Ie(126,dn,2,2,"mat-option",11),b(127,`
            `),w(),ki(),b(128,`
            `),Ie(129,pn,5,0,"mat-error",8),b(130,`
          `),w(),b(131,`

          `),x(132,"mat-form-field",6),b(133,`
            `),x(134,"mat-label"),b(135,"To Account Type"),w(),b(136,`
            `),x(137,"mat-select",19),re("selectionChange",function(){return o.changeEvent()}),b(138,`
              `),Ie(139,un,2,2,"mat-option",11),b(140,`
            `),w(),ki(),b(141,`
            `),Ie(142,fn,5,0,"mat-error",8),b(143,`
          `),w(),b(144,`

          `),x(145,"mat-form-field",6),b(146,`
            `),x(147,"mat-label"),b(148,"To Account"),w(),b(149,`
            `),x(150,"mat-select",20),re("selectionChange",function(){return o.changeEvent()}),b(151,`
              `),Ie(152,xn,2,3,"mat-option",11),b(153,`
            `),w(),ki(),b(154,`
            `),Ie(155,Sn,5,0,"mat-error",8),b(156,`
          `),w(),b(157,`

          `),x(158,"mat-form-field",6),b(159,`
            `),x(160,"mat-label"),b(161,"Standing Instruction Type"),w(),b(162,`
            `),x(163,"mat-select",21),b(164,`
              `),Ie(165,vn,2,2,"mat-option",11),b(166,`
            `),w(),ki(),b(167,`
            `),Ie(168,gn,5,0,"mat-error",8),b(169,`
          `),w(),b(170,`

          `),x(171,"mat-form-field",6),b(172,`
            `),x(173,"mat-label"),b(174,"Amount"),w(),b(175,`
            `),fe(176,"input",22),ki(),b(177,`
            `),Ie(178,Tn,5,0,"mat-error",8),b(179,`
          `),w(),b(180,`

          `),x(181,"mat-form-field",6),b(182,`
            `),x(183,"mat-label"),b(184,"Validity From"),w(),b(185,`
            `),fe(186,"input",23),ki(),b(187,`
            `),fe(188,"mat-datepicker-toggle",24),b(189,`
            `),fe(190,"mat-datepicker",null,0),b(192,`
            `),Ie(193,In,5,0,"mat-error",8),b(194,`
          `),w(),b(195,`

          `),x(196,"mat-form-field",6),b(197,`
            `),x(198,"mat-label"),b(199,"Validity To"),w(),b(200,`
            `),fe(201,"input",25),ki(),b(202,`
            `),fe(203,"mat-datepicker-toggle",24),b(204,`
            `),fe(205,"mat-datepicker",null,1),b(207,`
            `),Ie(208,yn,5,0,"mat-error",8),b(209,`
          `),w(),b(210,`

          `),x(211,"mat-form-field",6),b(212,`
            `),x(213,"mat-label"),b(214,"Recurrence Type"),w(),b(215,`
            `),x(216,"mat-select",26),b(217,`
              `),Ie(218,Cn,2,2,"mat-option",11),b(219,`
            `),w(),ki(),b(220,`
            `),Ie(221,_n,5,0,"mat-error",8),b(222,`
          `),w(),b(223,`

          `),x(224,"mat-form-field",6),b(225,`
            `),x(226,"mat-label"),b(227,"Interval"),w(),b(228,`
            `),fe(229,"input",27),ki(),b(230,`
            `),Ie(231,hn,5,0,"mat-error",8),b(232,`
          `),w(),b(233,`

          `),x(234,"mat-form-field",6),b(235,`
            `),x(236,"mat-label"),b(237,"Recurrence Frequency"),w(),b(238,`
            `),x(239,"mat-select",28),b(240,`
              `),Ie(241,En,2,2,"mat-option",11),b(242,`
            `),w(),ki(),b(243,`
            `),Ie(244,Dn,5,0,"mat-error",8),b(245,`
          `),w(),b(246,`

          `),x(247,"mat-form-field",6),b(248,`
            `),x(249,"mat-label"),b(250,"On Month Day"),w(),b(251,`
            `),fe(252,"input",29),ki(),b(253,`
            `),fe(254,"mat-datepicker-toggle",24),b(255,`
            `),fe(256,"mat-datepicker",null,2),b(258,`
            `),Ie(259,An,5,0,"mat-error",8),b(260,`
          `),w(),b(261,`

        `),w(),b(262,`

      `),w(),b(263,`

      `),x(264,"mat-card-actions",30),b(265,`
        `),x(266,"button",31),b(267,"Cancel"),w(),b(268,`
        `),Ie(269,Fn,2,1,"button",32),b(270,`
      `),w(),b(271,`

    `),w(),b(272,`

  `),w(),b(273,`

`),w(),b(274,`
`)),s&2){let f=Nt(191),C=Nt(206),P=Nt(257);D(4),z("formGroup",o.createStandingInstructionsForm),D(11),Li(),D(2),z("ngIf",o.createStandingInstructionsForm.controls.name.hasError("required")),D(8),Li(),D(8),Li(),D(2),z("ngForOf",o.transferTypeData),D(3),z("ngIf",o.createStandingInstructionsForm.controls.transferType.hasError("required")),D(8),Li(),D(2),z("ngForOf",o.priorityTypeData),D(3),z("ngIf",o.createStandingInstructionsForm.controls.priority.hasError("required")),D(8),Li(),D(2),z("ngForOf",o.statusTypeData),D(3),z("ngIf",o.createStandingInstructionsForm.controls.status.hasError("required")),D(8),Li(),D(2),z("ngForOf",o.fromAccountTypeData),D(3),z("ngIf",o.createStandingInstructionsForm.controls.fromAccountType.hasError("required")),D(8),Li(),D(2),z("ngForOf",o.fromAccountData),D(3),z("ngIf",o.createStandingInstructionsForm.controls.fromAccountId.hasError("required")),D(8),Li(),D(2),z("ngForOf",o.destinationTypeData),D(3),z("ngIf",o.createStandingInstructionsForm.controls.destination.hasError("required")),D(8),Li(),D(2),z("ngForOf",o.toOfficeTypeData),D(3),z("ngIf",o.createStandingInstructionsForm.controls.toOfficeId.hasError("required")),D(8),Li(),D(2),z("ngForOf",o.toClientTypeData),D(3),z("ngIf",o.createStandingInstructionsForm.controls.toClientId.hasError("required")),D(8),Li(),D(2),z("ngForOf",o.toAccountTypeData),D(3),z("ngIf",o.createStandingInstructionsForm.controls.toAccountType.hasError("required")),D(8),Li(),D(2),z("ngForOf",o.toAccountData),D(3),z("ngIf",o.createStandingInstructionsForm.controls.toAccountId.hasError("required")),D(8),Li(),D(2),z("ngForOf",o.instructionTypeData),D(3),z("ngIf",o.createStandingInstructionsForm.controls.instructionType.hasError("required")),D(8),Li(),D(2),z("ngIf",o.createStandingInstructionsForm.controls.amount.hasError("required")),D(8),z("min",o.minDate)("max",o.maxDate)("matDatepicker",f),Li(),D(2),z("for",f),D(5),z("ngIf",o.createStandingInstructionsForm.controls.validFrom.hasError("required")),D(8),z("min",o.minDate)("max",o.maxDate)("matDatepicker",C),Li(),D(2),z("for",C),D(5),z("ngIf",o.createStandingInstructionsForm.controls.validTill.hasError("required")),D(8),Li(),D(2),z("ngForOf",o.recurrenceTypeData),D(3),z("ngIf",o.createStandingInstructionsForm.controls.recurrenceType.hasError("required")),D(8),Li(),D(2),z("ngIf",o.createStandingInstructionsForm.controls.recurrenceInterval.hasError("required")),D(8),Li(),D(2),z("ngForOf",o.recurrenceFrequencyTypeData),D(3),z("ngIf",o.createStandingInstructionsForm.controls.recurrenceFrequency.hasError("required")),D(8),z("min",o.minDate)("max",o.maxDate)("matDatepicker",P),Li(),D(2),z("for",P),D(5),z("ngIf",o.createStandingInstructionsForm.controls.recurrenceOnMonthDay.hasError("required")),D(7),z("routerLink",$o(47,We)),D(3),z("mifosxHasPermission","CREATE_STANDINGINSTRUCTION");}},dependencies:[ii$1,Yo,go,Mc,eA,wc,Ti$1,Sn$1,Sje,Aje,Lje,zT,dh,Mv,Ri,Br,O3,sv,Ac,ja,DI,Cc,Wne,Na,k2,S6,uo,_3,XQe,bp],encapsulation:2,changeDetection:1})}return i})();var bn=()=>["../../general"];function Mn(i,c){if(i&1&&(x(0,"mat-option",26),b(1),w()),i&2){let r=c.$implicit;z("value",r.id),D(),it(`
                `,r.name,`
              `);}}function wn(i,c){i&1&&(x(0,"mat-error"),b(1,`
              Office is `),x(2,"strong"),b(3,"required"),w(),b(4,`
            `),w());}function On(i,c){i&1&&(x(0,"mat-error"),b(1,`
              Client is `),x(2,"strong"),b(3,"required"),w(),b(4,`
            `),w());}function Nn(i,c){if(i&1&&(x(0,"mat-option",26),b(1),w()),i&2){let r=c.$implicit;z("value",r),D(),Y0(`
              `,r.id," - ",r.displayName,`
            `);}}function qn(i,c){if(i&1&&(x(0,"mat-option",26),b(1),w()),i&2){let r=c.$implicit;z("value",r.id),D(),it(`
                `,r.value,`
              `);}}function kn(i,c){i&1&&(x(0,"mat-error"),b(1,`
              Account Type is `),x(2,"strong"),b(3,"required"),w(),b(4,`
            `),w());}function Ln(i,c){if(i&1&&(x(0,"mat-option",26),b(1),w()),i&2){let r=c.$implicit;z("value",r.id),D(),Y0(`
                `,r.productName," - ",r.accountNo,`
              `);}}function Pn(i,c){i&1&&(x(0,"mat-error"),b(1,`
              Account is `),x(2,"strong"),b(3,"required"),w(),b(4,`
            `),w());}function Rn(i,c){i&1&&(x(0,"mat-error"),b(1,`
              Amount is `),x(2,"strong"),b(3,"required"),w(),b(4,`
            `),w());}function Vn(i,c){i&1&&(x(0,"mat-error"),b(1,`
              Transactions Date is `),x(2,"strong"),b(3,"required"),w(),b(4,`
            `),w());}function Bn(i,c){i&1&&(x(0,"mat-error"),b(1,`
              Transfer Description is `),x(2,"strong"),b(3,"required"),w(),b(4,`
            `),w());}function jn(i,c){if(i&1){let r=Kt();x(0,"button",27),re("click",function(){ot(r);let o=K();return at(o.submit())}),b(1,"Submit"),w();}if(i&2){let r=K();z("disabled",!r.makeAccountTransferForm.valid);}}var Ee=(()=>{class i{formBuilder;route;router;accountTransfersService;datePipe;settingsService;clientsService;accountTransferTemplateData;minDate=new Date(2e3,0,1);maxDate=new Date(2100,0,1);makeAccountTransferForm;toOfficeTypeData;toClientTypeData;toAccountTypeData;toAccountData;accountTypeId;accountType;id;clientsData;constructor(r,s,o,f,C,P,st){this.formBuilder=r,this.route=s,this.router=o,this.accountTransfersService=f,this.datePipe=C,this.settingsService=P,this.clientsService=st,this.route.data.subscribe(Me=>{this.accountTransferTemplateData=Me.accountTransferTemplate,this.setParams(),this.setOptions();});}setParams(){switch(this.accountType=this.route.snapshot.queryParams.accountType,this.accountType){case "fromloans":this.accountTypeId="1",this.id=this.route.snapshot.queryParams.loanId;break;case "fromsavings":this.accountTypeId="2",this.id=this.route.snapshot.queryParams.savingsId;break;default:this.accountTypeId="0";}}ngOnInit(){this.createMakeAccountTransferForm();}createMakeAccountTransferForm(){this.makeAccountTransferForm=this.formBuilder.group({toOfficeId:["",mi$1.required],toClientId:["",mi$1.required],toAccountType:["",mi$1.required],toAccountId:["",mi$1.required],transferAmount:[this.accountTransferTemplateData.transferAmount,mi$1.required],transferDate:["",mi$1.required],transferDescription:["",mi$1.required]});}setOptions(){this.toOfficeTypeData=this.accountTransferTemplateData.toOfficeOptions,this.toAccountTypeData=this.accountTransferTemplateData.toAccountTypeOptions,this.toAccountData=this.accountTransferTemplateData.toAccountOptions;}changeEvent(){let r=this.refineObject(this.makeAccountTransferForm.value);this.accountTransfersService.newAccountTranferResource(this.id,this.accountTypeId,r).subscribe(s=>{this.accountTransferTemplateData=s,this.toClientTypeData=s.toClientOptions,this.setOptions();});}refineObject(r){delete r.transferAmount,delete r.transferDate,delete r.transferDescription,r.toClientId&&(r.toClientId=r.toClientId.id);let s=Object.getOwnPropertyNames(r);for(let o=0;o<s.length;o++){let f=s[o];(r[f]===null||r[f]===void 0||r[f]==="")&&delete r[f];}return r}ngAfterViewInit(){this.makeAccountTransferForm.controls.toClientId.valueChanges.subscribe(r=>{r.length>=2&&(this.clientsService.getFilteredClients("displayName","ASC",true,r).subscribe(s=>{this.clientsData=s.pageItems;}),this.changeEvent());});}displayClient(r){return r?r.displayName:void 0}submit(){let r=this.settingsService.dateFormat,s=this.settingsService.language.code,o=Re$1(O({},this.makeAccountTransferForm.value),{transferDate:this.datePipe.transform(this.makeAccountTransferForm.value.transferDate,r),dateFormat:r,locale:s,toClientId:this.makeAccountTransferForm.controls.toClientId.value.id,fromAccountId:this.id,fromAccountType:this.accountTypeId,fromClientId:this.accountTransferTemplateData.fromClient.id,fromOfficeId:this.accountTransferTemplateData.fromClient.officeId});this.accountTransfersService.createAccountTransfer(o).subscribe(()=>{this.router.navigate(["../../general"],{relativeTo:this.route});});}static \u0275fac=function(s){return new(s||i)(T(AI),T(zs),T(Gr),T(I),T(_te),T(yF),T(g))};static \u0275cmp=N({type:i,selectors:[["mifosx-make-account-transfers"]],standalone:false,decls:171,vars:29,consts:[["clientsAutocomplete","matAutocomplete"],["transferDatePicker",""],[1,"container"],["fxLayout","row wrap","fxLayout.lt-md","column"],["fxFlexFill","",1,"mat-h3"],[3,"inset"],["fxFlexFill",""],["fxFlex","40%"],["fxFlex","60%"],[3,"formGroup"],["fxLayout","row wrap","fxLayoutGap","2%","fxLayout.lt-md","column"],["fxFlex","98%"],["required","","formControlName","toOfficeId",3,"selectionChange"],[3,"value",4,"ngFor","ngForOf"],[4,"ngIf"],["matInput","","formControlName","toClientId",3,"matAutocomplete"],["autoActiveFirstOption","",3,"displayWith"],["required","","formControlName","toAccountType",3,"selectionChange"],["required","","formControlName","toAccountId",3,"selectionChange"],["type","number","matInput","","required","","formControlName","transferAmount"],["matInput","","required","","formControlName","transferDate",3,"min","max","matDatepicker"],["matSuffix","",3,"for"],["matInput","","formControlName","transferDescription"],["fxLayout","row","fxLayout.xs","column","fxLayoutAlign","center","fxLayoutGap","5px"],["type","button","mat-raised-button","",3,"routerLink"],["mat-raised-button","","color","primary",3,"disabled","click",4,"mifosxHasPermission"],[3,"value"],["mat-raised-button","","color","primary",3,"click","disabled"]],template:function(s,o){if(s&1&&(x(0,"div",2),b(1,`

  `),x(2,"mat-card"),b(3,`

    `),x(4,"mat-card-content"),b(5,`

      `),x(6,"div",3),b(7,`

        `),x(8,"h3",4),b(9,"Transferring From Details"),w(),b(10,`

        `),fe(11,"mat-divider",5),b(12,`

        `),x(13,"div",6),b(14,`
          `),x(15,"span",7),b(16,"Applicant"),w(),b(17,`
          `),x(18,"span",8),b(19),w(),b(20,`
        `),w(),b(21,`

        `),x(22,"div",6),b(23,`
          `),x(24,"span",7),b(25,"Office"),w(),b(26,`
          `),x(27,"span",8),b(28),w(),b(29,`
        `),w(),b(30,`

        `),x(31,"div",6),b(32,`
          `),x(33,"span",7),b(34,"From Account"),w(),b(35,`
          `),x(36,"span",8),b(37),w(),b(38,`
        `),w(),b(39,`

        `),x(40,"div",6),b(41,`
          `),x(42,"span",7),b(43,"From Account Type"),w(),b(44,`
          `),x(45,"span",8),b(46),w(),b(47,`
        `),w(),b(48,`

        `),x(49,"div",6),b(50,`
          `),x(51,"span",7),b(52,"Currency"),w(),b(53,`
          `),x(54,"span",8),b(55),w(),b(56,`
        `),w(),b(57,`

      `),w(),b(58,`

      `),x(59,"h3",4),b(60,"Transferring To"),w(),b(61,`

      `),fe(62,"mat-divider",5),b(63,`

      `),x(64,"form",9),b(65,`

        `),x(66,"div",10),b(67,`

          `),x(68,"mat-form-field",11),b(69,`
            `),x(70,"mat-label"),b(71,"Office"),w(),b(72,`
            `),x(73,"mat-select",12),re("selectionChange",function(){return o.changeEvent()}),b(74,`
              `),Ie(75,Mn,2,2,"mat-option",13),b(76,`
            `),w(),ki(),b(77,`
            `),Ie(78,wn,5,0,"mat-error",14),b(79,`
          `),w(),b(80,`

          `),x(81,"mat-form-field",11),b(82,`
            `),x(83,"mat-label"),b(84,"Client"),w(),b(85,`
            `),fe(86,"input",15),ki(),b(87,`
            `),Ie(88,On,5,0,"mat-error",14),b(89,`
          `),w(),b(90,`

          `),x(91,"mat-autocomplete",16,0),b(93,`
            `),Ie(94,Nn,2,3,"mat-option",13),b(95,`
          `),w(),b(96,`

          `),x(97,"mat-form-field",11),b(98,`
            `),x(99,"mat-label"),b(100,"Account Type"),w(),b(101,`
            `),x(102,"mat-select",17),re("selectionChange",function(){return o.changeEvent()}),b(103,`
              `),Ie(104,qn,2,2,"mat-option",13),b(105,`
            `),w(),ki(),b(106,`
            `),Ie(107,kn,5,0,"mat-error",14),b(108,`
          `),w(),b(109,`

          `),x(110,"mat-form-field",11),b(111,`
            `),x(112,"mat-label"),b(113,"Account"),w(),b(114,`
            `),x(115,"mat-select",18),re("selectionChange",function(){return o.changeEvent()}),b(116,`
              `),Ie(117,Ln,2,3,"mat-option",13),b(118,`
            `),w(),ki(),b(119,`
            `),Ie(120,Pn,5,0,"mat-error",14),b(121,`
          `),w(),b(122,`

          `),x(123,"mat-form-field",11),b(124,`
            `),x(125,"mat-label"),b(126,"Amount"),w(),b(127,`
            `),fe(128,"input",19),ki(),b(129,`
            `),Ie(130,Rn,5,0,"mat-error",14),b(131,`
          `),w(),b(132,`

          `),x(133,"mat-form-field",11),b(134,`
            `),x(135,"mat-label"),b(136,"Transaction Date"),w(),b(137,`
            `),fe(138,"input",20),ki(),b(139,`
            `),fe(140,"mat-datepicker-toggle",21),b(141,`
            `),fe(142,"mat-datepicker",null,1),b(144,`
            `),Ie(145,Vn,5,0,"mat-error",14),b(146,`
          `),w(),b(147,`

          `),x(148,"mat-form-field",11),b(149,`
            `),x(150,"mat-label"),b(151,"Description"),w(),b(152,`
            `),fe(153,"textarea",22),ki(),b(154,`
            `),Ie(155,Bn,5,0,"mat-error",14),b(156,`

          `),w(),b(157,`

        `),w(),b(158,`

      `),w(),b(159,`

    `),w(),b(160,`

    `),x(161,"mat-card-actions",23),b(162,`
      `),x(163,"button",24),b(164,"Cancel"),w(),b(165,`
      `),Ie(166,jn,2,1,"button",25),b(167,`
    `),w(),b(168,`

  `),w(),b(169,`

`),w(),b(170,`
`)),s&2){let f=Nt(92),C=Nt(143);D(11),z("inset",true),D(8),Dt(o.accountTransferTemplateData.fromClient.displayName),D(9),Dt(o.accountTransferTemplateData.fromOffice.name),D(9),Y0("",o.accountTransferTemplateData.fromAccount.productName,"\xA0-\xA0#",o.accountTransferTemplateData.fromAccount.accountNo),D(9),Dt(o.accountTransferTemplateData.fromAccountType.value),D(9),Dt(o.accountTransferTemplateData.currency.name),D(7),z("inset",true),D(2),z("formGroup",o.makeAccountTransferForm),D(9),Li(),D(2),z("ngForOf",o.toOfficeTypeData),D(3),z("ngIf",o.makeAccountTransferForm.controls.toOfficeId.hasError("required")),D(8),z("matAutocomplete",f),Li(),D(2),z("ngIf",o.makeAccountTransferForm.controls.toClientId.hasError("required")),D(3),z("displayWith",o.displayClient),D(3),z("ngForOf",o.clientsData),D(8),Li(),D(2),z("ngForOf",o.toAccountTypeData),D(3),z("ngIf",o.makeAccountTransferForm.controls.toAccountType.hasError("required")),D(8),Li(),D(2),z("ngForOf",o.toAccountData),D(3),z("ngIf",o.makeAccountTransferForm.controls.toAccountId.hasError("required")),D(8),Li(),D(2),z("ngIf",o.makeAccountTransferForm.controls.transferAmount.hasError("required")),D(8),z("min",o.minDate)("max",o.maxDate)("matDatepicker",C),Li(),D(2),z("for",C),D(5),z("ngIf",o.makeAccountTransferForm.controls.transferDate.hasError("required")),D(8),Li(),D(2),z("ngIf",o.makeAccountTransferForm.controls.transferDescription.hasError("required")),D(8),z("routerLink",$o(28,bn)),D(3),z("mifosxHasPermission","CREATE_ACCOUNTTRANSFER");}},dependencies:[ii$1,Yo,go,Mc,eA,R2,wc,fAe,Ti$1,coe,Sn$1,Sje,Aje,Lje,zT,dh,Mv,Th,Ri,Br,O3,sv,Ac,ja,DI,Cc,Wne,Na,k2,S6,uo,_3,XQe,bp],styles:["h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%]{margin:0;font-weight:500}span[_ngcontent-%COMP%]{margin:.5em 0}.margin-t[_ngcontent-%COMP%]{margin-top:1em}mat-divider[_ngcontent-%COMP%]{margin:0 0 .5em}.container[_ngcontent-%COMP%]{max-width:37rem}"],changeDetection:1})}return i})();var Gn=["instructionsTable"],Un=()=>[10,25,50,100],zn=i=>["../",i,"edit"],Qn=i=>["../",i,"view"];function Wn(i,c){if(i&1&&(x(0,"div",23),b(1,`
      `),x(2,"span",24),b(3,`
        `),x(4,"h3",25),b(5,"Client Name"),w(),b(6,`
      `),w(),b(7,`
      `),x(8,"span",26),b(9,`
        `),x(10,"h3",25),b(11),w(),b(12,`
      `),w(),b(13,`
    `),w()),i&2){let r=K();D(11),Dt(r.clientName);}}function Yn(i,c){if(i&1&&(x(0,"div",23),b(1,`
      `),x(2,"mat-form-field",5),b(3,`
        `),fe(4,"input",27),ki(),b(5,`
      `),w(),b(6,`
      `),x(7,"mat-form-field",5),b(8,`
        `),fe(9,"input",28),ki(),b(10,`
      `),w(),b(11,`
    `),w()),i&2){let r=K();D(4),z("formControl",r.clientNameControl),Li(),D(5),z("formControl",r.fromClientId),Li();}}function Jn(i,c){if(i&1&&(x(0,"mat-option",29),b(1),w()),i&2){let r=c.$implicit;z("value",r.id),D(),it(`
          `,r.value,`
        `);}}function Kn(i,c){if(i&1){let r=Kt();x(0,"button",30),re("click",function(){ot(r);let o=K();return at(o.filterStandingInstructions())}),b(1,`
      \xA0\xA0Filter
    `),w();}}function Xn(i,c){i&1&&(x(0,"th",31),b(1," Client "),w());}function Zn(i,c){if(i&1&&(x(0,"td",32),b(1),w()),i&2){let r=c.$implicit;D(),Y0("",r.fromClient.displayName,"-",r.fromClient.id,`
      `);}}function ti(i,c){i&1&&(x(0,"th",31),b(1," From Account "),w());}function ei(i,c){if(i&1&&(x(0,"td",32),b(1),w()),i&2){let r=c.$implicit;D(),Y0("",r.fromAccount.accountNo,`
        (`,r.fromAccountType.value,")");}}function ni(i,c){i&1&&(x(0,"th",31),b(1," Beneficiary "),w());}function ii(i,c){if(i&1&&(x(0,"td",32),b(1),w()),i&2){let r=c.$implicit;D(),Dt(r.toClient.displayName);}}function ri(i,c){i&1&&(x(0,"th",31),b(1," To Account "),w());}function ai(i,c){if(i&1&&(x(0,"td",32),b(1),w()),i&2){let r=c.$implicit;D(),Y0("",r.toAccount.accountNo,`
        (`,r.toAccountType.value,")");}}function oi(i,c){i&1&&(x(0,"th",31),b(1," Amount "),w());}function mi(i,c){if(i&1&&(x(0,"td",32),b(1),w()),i&2){let r=c.$implicit;D(),Y0("",r.instructionType.value,"/",r.amount);}}function ci(i,c){i&1&&(x(0,"th",31),b(1," Validity "),w());}function si(i,c){if(i&1&&(x(0,"td",32),b(1),nee(2,"date"),nee(3,"date"),w()),i&2){let r=c.$implicit;D(),Y0("",ree(2,2,r.validFrom)," to ",ree(3,4,r.validTill),`
      `);}}function li(i,c){i&1&&(x(0,"th",31),b(1," Actions "),w());}function di(i,c){if(i&1&&(x(0,"button",36),b(1,`
            `),fe(2,"i",37),b(3,`
          `),w()),i&2){let r=K(2).$implicit;z("routerLink",gc(1,zn,r.id));}}function pi(i,c){i&1&&(x(0,"span"),b(1,`
          `),Ie(2,di,4,3,"button",35),b(3,`
        `),w()),i&2&&(D(2),z("mifosxHasPermission","UPDATE_STANDINGINSTRUCTION"));}function ui(i,c){if(i&1){let r=Kt();x(0,"button",39),re("click",function(){ot(r);let o=K(2).$implicit,f=K();return at(f.deleteStandingInstruction(o.id))}),b(1,`
            `),fe(2,"i",40),b(3,`
          `),w();}}function fi(i,c){i&1&&(x(0,"span"),b(1,`
          `),Ie(2,ui,4,0,"button",38),b(3,`
        `),w()),i&2&&(D(2),z("mifosxHasPermission","DELETE_STANDINGINSTRUCTION"));}function xi(i,c){if(i&1&&(x(0,"button",41),b(1,`
          `),fe(2,"i",42),b(3,`
        `),w()),i&2){let r=K().$implicit;z("routerLink",gc(1,Qn,r.id));}}function Si(i,c){if(i&1&&(x(0,"td",32),b(1,`
        `),Ie(2,pi,4,1,"span",33),b(3,`
        `),Ie(4,fi,4,1,"span",33),b(5,`
        `),Ie(6,xi,4,3,"button",34),b(7,`
      `),w()),i&2){let r=c.$implicit;D(2),z("ngIf",r.status.value!=="Deleted"),D(2),z("ngIf",r.status.value!=="Deleted"),D(2),z("mifosxHasPermission","READ_STANDINGINSTRUCTION");}}function vi(i,c){i&1&&fe(0,"tr",43);}function gi(i,c){i&1&&fe(0,"tr",44);}var De=(()=>{class i{route;accountTransfersService;settingsService;dialog;standingIntructionsTemplateData;instructionsData;transferType=new Qi;fromAccountId=new Qi;clientNameControl=new Qi;fromClientId=new Qi;clientName;transferTypeDatas;accountType;accountTypeId;id;isFromClient;dataSource=new zB;displayedColumns=["client","fromAccount","beneficiary","toAccount","amount","validity","actions"];instructionTableRef;paginator;constructor(r,s,o,f){this.route=r,this.accountTransfersService=s,this.settingsService=o,this.dialog=f,this.route.data.subscribe(C=>{this.standingIntructionsTemplateData=C.standingIntructionsTemplate,C.standingIntructionsTemplate.fromClient&&(this.clientName=this.standingIntructionsTemplateData.fromClient.displayName,this.getStandingInstructions()),this.setParams(),this.transferTypeDatas=this.standingIntructionsTemplateData.transferTypeOptions;});}ngOnInit(){}setParams(){switch(this.accountType=this.route.snapshot.queryParams.accountType,this.accountType){case "fromloans":this.accountTypeId="1";break;case "fromsavings":this.accountTypeId="2";break;default:this.accountTypeId="0";}this.isFromClient=!!this.route.parent.parent.snapshot.params.clientId;}filterStandingInstructions(){this.getStandingInstructions();}getStandingInstructions(){let r=this.settingsService.dateFormat,s=this.settingsService.language.code,o={clientId:this.standingIntructionsTemplateData.fromClient.id||this.fromClientId.value,clientName:this.standingIntructionsTemplateData.fromClient.displayName||this.clientNameControl.value,locale:s,dateFormat:r,limit:14,offset:0,fromAccountType:this.accountTypeId,fromAccountId:this.fromAccountId.value,fromTransferType:this.transferType.value};this.accountTransfersService.getStandingInstructions(o).subscribe(f=>{this.instructionsData=f.pageItems,this.dataSource.data=this.instructionsData,this.instructionTableRef.renderRows();});}deleteStandingInstruction(r){this.dialog.open(CNe,{data:{deleteContext:`standing instruction id: ${r}`}}).afterClosed().subscribe(o=>{o.delete&&this.accountTransfersService.deleteStandingInstrucions(r).subscribe(()=>{});});}static \u0275fac=function(s){return new(s||i)(T(zs),T(I),T(yF),T(Iv))};static \u0275cmp=N({type:i,selectors:[["mifosx-list-standing-instructions"]],viewQuery:function(s,o){if(s&1&&ze$1(Gn,7)(P4e,7),s&2){let f;j(f=H())&&(o.instructionTableRef=f.first),j(f=H())&&(o.paginator=f.first);}},standalone:false,decls:89,vars:13,consts:[["instructionsTable",""],[1,"container"],["fxLayout","row wrap","fxLayoutGap","2%","fxLayout.lt-md","column"],["fxFlexFill","",4,"ngIf"],[3,"inset"],["fxFlex","30%"],[3,"formControl"],[3,"value",4,"ngFor","ngForOf"],["matInput","","placeholder","From Account Id",3,"formControl"],["mat-raised-button","","color","primary","class","filter-button",3,"click",4,"mifosxHasPermission"],["mat-table","",3,"dataSource"],["matColumnDef","client"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","fromAccount"],["matColumnDef","beneficiary"],["matColumnDef","toAccount"],["matColumnDef","amount"],["matColumnDef","validity"],["matColumnDef","actions"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["showFirstLastButtons","",3,"pageSize","pageSizeOptions"],["fxFlexFill",""],["fxFlex","40%"],[1,"mat-h3"],["fxFlex","60%"],["matInput","","placeholder","ClientName",3,"formControl"],["matInput","","placeholder","From Client Id",3,"formControl"],[3,"value"],["mat-raised-button","","color","primary",1,"filter-button",3,"click"],["mat-header-cell",""],["mat-cell",""],[4,"ngIf"],["class","account-action-button","mat-raised-button","","color","primary","matTooltip","View Standing Instruction",3,"routerLink",4,"mifosxHasPermission"],["class","account-action-button","mat-raised-button","","color","primary","matTooltip","Edit Standing Instruction",3,"routerLink",4,"mifosxHasPermission"],["mat-raised-button","","color","primary","matTooltip","Edit Standing Instruction",1,"account-action-button",3,"routerLink"],[1,"fa","fa-edit"],["class","account-action-button","mat-raised-button","","color","warn","matTooltip","Delete Standing Instruction",3,"click",4,"mifosxHasPermission"],["mat-raised-button","","color","warn","matTooltip","Delete Standing Instruction",1,"account-action-button",3,"click"],[1,"fa","fa-times"],["mat-raised-button","","color","primary","matTooltip","View Standing Instruction",1,"account-action-button",3,"routerLink"],[1,"fa","fa-eye"],["mat-header-row",""],["mat-row",""]],template:function(s,o){s&1&&(x(0,"mat-card",1),b(1,`

  `),x(2,"div",2),b(3,`

    `),Ie(4,Wn,14,1,"div",3),b(5,`

    `),Ie(6,Yn,12,2,"div",3),b(7,`

    `),fe(8,"mat-divider",4),b(9,`

    `),x(10,"mat-form-field",5),b(11,`
      `),x(12,"mat-label"),b(13,"Type"),w(),b(14,`
      `),x(15,"mat-select",6),b(16,`
        `),Ie(17,Jn,2,2,"mat-option",7),b(18,`
      `),w(),ki(),b(19,`
    `),w(),b(20,`

    `),x(21,"mat-form-field",5),b(22,`
      `),fe(23,"input",8),ki(),b(24,`
    `),w(),b(25,`

    `),Ie(26,Kn,2,0,"button",9),b(27,`
  `),w(),b(28,`


  `),x(29,"table",10,0),b(31,`

    `),Rl(32,11),b(33,`
      `),Ie(34,Xn,2,0,"th",12),b(35,`
      `),Ie(36,Zn,2,2,"td",13),b(37,`
    `),zl(),b(38,`

    `),Rl(39,14),b(40,`
      `),Ie(41,ti,2,0,"th",12),b(42,`
      `),Ie(43,ei,2,2,"td",13),b(44,`
    `),zl(),b(45,`

    `),Rl(46,15),b(47,`
      `),Ie(48,ni,2,0,"th",12),b(49,`
      `),Ie(50,ii,2,1,"td",13),b(51,`
    `),zl(),b(52,`

    `),Rl(53,16),b(54,`
      `),Ie(55,ri,2,0,"th",12),b(56,`
      `),Ie(57,ai,2,2,"td",13),b(58,`
    `),zl(),b(59,`

    `),Rl(60,17),b(61,`
      `),Ie(62,oi,2,0,"th",12),b(63,`
      `),Ie(64,mi,2,2,"td",13),b(65,`
    `),zl(),b(66,`

    `),Rl(67,18),b(68,`
      `),Ie(69,ci,2,0,"th",12),b(70,`
      `),Ie(71,si,4,6,"td",13),b(72,`
    `),zl(),b(73,`

    `),Rl(74,19),b(75,`
      `),Ie(76,li,2,0,"th",12),b(77,`
      `),Ie(78,Si,8,3,"td",13),b(79,`
    `),zl(),b(80,`

    `),Ie(81,vi,1,0,"tr",20),b(82,`
    `),Ie(83,gi,1,0,"tr",21),b(84,`

  `),w(),b(85,`

  `),fe(86,"mat-paginator",22),b(87,`

`),w(),b(88,`
`)),s&2&&(D(4),z("ngIf",o.isFromClient),D(2),z("ngIf",!o.isFromClient),D(2),z("inset",true),D(7),z("formControl",o.transferType),Li(),D(2),z("ngForOf",o.transferTypeDatas),D(6),z("formControl",o.fromAccountId),Li(),D(3),z("mifosxHasPermission","READ_STANDINGINSTRUCTION"),D(3),z("dataSource",o.dataSource),D(52),z("matHeaderRowDef",o.displayedColumns),D(2),z("matRowDefColumns",o.displayedColumns),D(3),z("pageSize",10)("pageSizeOptions",$o(12,Un)));},dependencies:[ii$1,Yo,go,Mc,R2,wc,Ti$1,Sn$1,Sje,Th,Ri,Br,Ac,P4e,ja,uqe,mqe,bqe,pqe,fqe,xqe,gqe,vqe,Cqe,Mqe,ia,Cc,Na,Pl,XQe,bp,_te],styles:[".container[_ngcontent-%COMP%]   .filter-button[_ngcontent-%COMP%]{height:2.5rem;margin-top:1rem}table[_ngcontent-%COMP%]{width:100%}table[_ngcontent-%COMP%]   .account-action-button[_ngcontent-%COMP%]{min-width:26px;padding:0 6px;margin:4px;line-height:25px}.mat-divider[_ngcontent-%COMP%]{border-top-color:#fff}"],changeDetection:1})}return i})();var Ti=()=>[5,10,25,50,100];function Ii(i,c){i&1&&(x(0,"th",16),b(1," Transaction Date "),w());}function yi(i,c){if(i&1&&(x(0,"td",17),b(1),nee(2,"date"),w()),i&2){let r=c.$implicit;D(),it(" ",ree(2,1,r.transferDate)," ");}}function Ci(i,c){i&1&&(x(0,"th",16),b(1," Amount "),w());}function _i(i,c){if(i&1&&(x(0,"td",17),b(1),w()),i&2){let r=c.$implicit;D(),it(" ",r.transferAmount," ");}}function hi(i,c){i&1&&(x(0,"th",16),b(1," Notes "),w());}function Ei(i,c){if(i&1&&(x(0,"td",17),b(1),w()),i&2){let r=c.$implicit;D(),it(" ",r.transferDescription," ");}}function Di(i,c){i&1&&(x(0,"th",16),b(1," Reversed "),w());}function Ai(i,c){if(i&1&&(x(0,"td",17),b(1),w()),i&2){let r=c.$implicit;D(),it(" ",r.reversed?"Yes":"No"," ");}}function Fi(i,c){i&1&&fe(0,"tr",18);}function bi(i,c){i&1&&(x(0,"tr",19),b(1,`
    `),w());}var Ae=(()=>{class i{route;listTransactionData;dataSource=new zB;displayedColumns=["transactionDate","amount","notes","reversed"];paginator;constructor(r){this.route=r,this.route.data.subscribe(s=>{this.listTransactionData=s.listTransactionData,this.dataSource=new zB(this.listTransactionData.transactions.pageItems),this.dataSource.paginator=this.paginator;});}static \u0275fac=function(s){return new(s||i)(T(zs))};static \u0275cmp=N({type:i,selectors:[["mifosx-list-transactions"]],viewQuery:function(s,o){if(s&1&&ze$1(P4e,7),s&2){let f;j(f=H())&&(o.paginator=f.first);}},standalone:false,decls:70,vars:10,consts:[[1,"container","m-b-20"],[1,"mat-elevation-z8"],["fxLayout","row wrap",1,"content"],["fxFlex","25%","fxFlex.lt-md","50%",1,"header"],["fxFlex","25%","fxFlex.lt-md","50%"],[1,"mat-elevation-z8","container"],["mat-table","",3,"dataSource"],["matColumnDef","transactionDate"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","amount"],["matColumnDef","notes"],["matColumnDef","reversed"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["showFirstLastButtons","",3,"pageSizeOptions"],["mat-header-cell",""],["mat-cell",""],["mat-header-row",""],["mat-row",""]],template:function(s,o){s&1&&(x(0,"div",0),b(1,`

  `),x(2,"mat-card",1),b(3,`

    `),x(4,"mat-card-content"),b(5,`

      `),x(6,"div",2),b(7,`

        `),x(8,"div",3),b(9,`
          From Account
        `),w(),b(10,`

        `),x(11,"div",4),b(12),w(),b(13,`

        `),x(14,"div",3),b(15,`
          To Account
        `),w(),b(16,`

        `),x(17,"div",4),b(18),w(),b(19,`

        `),x(20,"div",3),b(21,`
          Destination
        `),w(),b(22,`

        `),x(23,"div",4),b(24),w(),b(25,`

      `),w(),b(26,`

    `),w(),b(27,`

  `),w(),b(28,`

`),w(),b(29,`

`),x(30,"div",5),b(31,`

  `),x(32,"table",6),b(33,`

    `),Rl(34,7),b(35,`
      `),Ie(36,Ii,2,0,"th",8),b(37,`
      `),Ie(38,yi,3,3,"td",9),b(39,`
    `),zl(),b(40,`

    `),Rl(41,10),b(42,`
      `),Ie(43,Ci,2,0,"th",8),b(44,`
      `),Ie(45,_i,2,1,"td",9),b(46,`
    `),zl(),b(47,`

    `),Rl(48,11),b(49,`
      `),Ie(50,hi,2,0,"th",8),b(51,`
      `),Ie(52,Ei,2,1,"td",9),b(53,`
    `),zl(),b(54,`

    `),Rl(55,12),b(56,`
      `),Ie(57,Di,2,0,"th",8),b(58,`
      `),Ie(59,Ai,2,1,"td",9),b(60,`
    `),zl(),b(61,`

    `),Ie(62,Fi,1,0,"tr",13),b(63,`
    `),Ie(64,bi,2,0,"tr",14),b(65,`

  `),w(),b(66,`

  `),fe(67,"mat-paginator",15),b(68,`

`),w(),b(69,`
`)),s&2&&(D(12),Y0(`
          `,o.listTransactionData.fromAccount.accountNo,"(",o.listTransactionData.fromAccountType.value,`)
        `),D(6),Y0(`
          `,o.listTransactionData.toAccount.accountNo,"(",o.listTransactionData.toAccountType.value,`)
        `),D(6),it(`
          `,o.listTransactionData.toClient.displayName,`
        `),D(8),z("dataSource",o.dataSource),D(30),z("matHeaderRowDef",o.displayedColumns),D(2),z("matRowDefColumns",o.displayedColumns),D(3),z("pageSizeOptions",$o(9,Ti)));},dependencies:[go,wc,Sje,Lje,P4e,uqe,mqe,bqe,pqe,fqe,xqe,gqe,vqe,Cqe,Mqe,_te],styles:[".content[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{line-height:3rem}.content[_ngcontent-%COMP%]   div.header[_ngcontent-%COMP%]{font-weight:500}table[_ngcontent-%COMP%]{width:100%}table[_ngcontent-%COMP%]   .select-row[_ngcontent-%COMP%]:hover{cursor:pointer}"],changeDetection:1})}return i})();var Fe=(()=>{class i{route;viewAccountTransferData;constructor(r){this.route=r,this.route.data.subscribe(s=>{this.viewAccountTransferData=s.viewAccountTransferData;});}static \u0275fac=function(s){return new(s||i)(T(zs))};static \u0275cmp=N({type:i,selectors:[["mifosx-view-account-transfer"]],standalone:false,decls:127,vars:16,consts:[[1,"container"],["fxLayout","row wrap","fxLayout.lt-md","column"],["fxFlexFill","",1,"mat-h3"],[3,"inset"],["fxFlexFill",""],["fxFlex","40%"],["fxFlex","60%"]],template:function(s,o){s&1&&(x(0,"div",0),b(1,`

  `),x(2,"mat-card"),b(3,`

    `),x(4,"mat-card-content"),b(5,`

      `),x(6,"div",1),b(7,`

        `),x(8,"h3",2),b(9,"Transaction Details"),w(),b(10,`

        `),fe(11,"mat-divider",3),b(12,`

        `),x(13,"div",4),b(14,`
          `),x(15,"span",5),b(16,"Transaction Amount:"),w(),b(17,`
          `),x(18,"span",6),b(19),w(),b(20,`
        `),w(),b(21,`

        `),x(22,"div",4),b(23,`
          `),x(24,"span",5),b(25,"Transaction Date:"),w(),b(26,`
          `),x(27,"span",6),b(28),nee(29,"date"),w(),b(30,`
        `),w(),b(31,`

        `),x(32,"div",4),b(33,`
          `),x(34,"span",5),b(35,"Description:"),w(),b(36,`
          `),x(37,"span",6),b(38),w(),b(39,`
        `),w(),b(40,`

        `),x(41,"h3",2),b(42,"Transferred From"),w(),b(43,`

        `),fe(44,"mat-divider",3),b(45,`

        `),x(46,"div",4),b(47,`
          `),x(48,"span",5),b(49,"Office:"),w(),b(50,`
          `),x(51,"span",6),b(52),w(),b(53,`
        `),w(),b(54,`

        `),x(55,"div",4),b(56,`
          `),x(57,"span",5),b(58,"Client:"),w(),b(59,`
          `),x(60,"span",6),b(61),w(),b(62,`
        `),w(),b(63,`

        `),x(64,"div",4),b(65,`
          `),x(66,"span",5),b(67,"Account Type:"),w(),b(68,`
          `),x(69,"span",6),b(70),w(),b(71,`
        `),w(),b(72,`

        `),x(73,"div",4),b(74,`
          `),x(75,"span",5),b(76,"Account #:"),w(),b(77,`
          `),x(78,"span",6),b(79),w(),b(80,`
        `),w(),b(81,`

        `),x(82,"h3",2),b(83,"Transferred To"),w(),b(84,`

        `),fe(85,"mat-divider",3),b(86,`

        `),x(87,"div",4),b(88,`
          `),x(89,"span",5),b(90,"Office:"),w(),b(91,`
          `),x(92,"span",6),b(93),w(),b(94,`
        `),w(),b(95,`

        `),x(96,"div",4),b(97,`
          `),x(98,"span",5),b(99,"Client:"),w(),b(100,`
          `),x(101,"span",6),b(102),w(),b(103,`
        `),w(),b(104,`

        `),x(105,"div",4),b(106,`
          `),x(107,"span",5),b(108,"Account Type:"),w(),b(109,`
          `),x(110,"span",6),b(111),w(),b(112,`
        `),w(),b(113,`

        `),x(114,"div",4),b(115,`
          `),x(116,"span",5),b(117,"Account #:"),w(),b(118,`
          `),x(119,"span",6),b(120),w(),b(121,`
        `),w(),b(122,`

      `),w(),b(123,`

    `),w(),b(124,`

  `),w(),b(125,`

`),w(),b(126,`
`)),s&2&&(D(11),z("inset",true),D(8),Dt(o.viewAccountTransferData.transferAmount),D(9),Dt(ree(29,14,o.viewAccountTransferData.transferDate)),D(10),Dt(o.viewAccountTransferData.transferDescription),D(6),z("inset",true),D(8),Dt(o.viewAccountTransferData.fromOffice.name),D(9),Dt(o.viewAccountTransferData.fromClient.displayName),D(9),Dt(o.viewAccountTransferData.fromAccountType.value),D(9),Dt(o.viewAccountTransferData.fromAccount.accountNo),D(6),z("inset",true),D(8),Dt(o.viewAccountTransferData.toOffice.name),D(9),Dt(o.viewAccountTransferData.toClient.displayName),D(9),Dt(o.viewAccountTransferData.toAccountType.value),D(9),Dt(o.viewAccountTransferData.toAccount.accountNo));},dependencies:[go,R2,wc,Sje,Lje,Th,_te],styles:["h3[_ngcontent-%COMP%]{margin:0;font-weight:500}span[_ngcontent-%COMP%]{margin:.5em 0}mat-divider[_ngcontent-%COMP%]{margin:0 0 .5em}"],changeDetection:1})}return i})();var ae=(()=>{class i{accountTransfersService;constructor(r){this.accountTransfersService=r;}resolve(r){let s=r.parent.paramMap.get("standingInstructionsId");return this.accountTransfersService.getStandingInstructionsData(s)}static \u0275fac=function(s){return new(s||i)(ie(I))};static \u0275prov=de({token:i,factory:i.\u0275fac})}return i})();var oe=(()=>{class i{accountTransfersService;constructor(r){this.accountTransfersService=r;}resolve(r){let s=r.parent.paramMap.get("standingInstructionsId");return this.accountTransfersService.getStandingInstructionsDataAndTemplate(s)}static \u0275fac=function(s){return new(s||i)(ie(I))};static \u0275prov=de({token:i,factory:i.\u0275fac})}return i})();var Jt=(()=>{class i{accountTransfersService;accountTypeId;constructor(r){this.accountTransfersService=r;}resolve(r){let s=r.queryParamMap.get("officeId"),o=r.queryParamMap.get("accountType"),f=r.parent.paramMap.get("clientId");switch(o){case "fromloans":this.accountTypeId="1";break;case "fromsavings":this.accountTypeId="2";break;default:this.accountTypeId="0";}return this.accountTransfersService.getStandingInstructionsTemplate(f,s,this.accountTypeId)}static \u0275fac=function(s){return new(s||i)(ie(I))};static \u0275prov=de({token:i,factory:i.\u0275fac})}return i})();var me=(()=>{class i{accountTransfersService;accountTypeId;id;constructor(r){this.accountTransfersService=r;}resolve(r){switch(r.queryParamMap.get("accountType")){case "fromloans":this.accountTypeId="1",this.id=r.queryParamMap.get("loanId");break;case "fromsavings":this.accountTypeId="2",this.id=r.queryParamMap.get("savingsId");break;default:this.accountTypeId="0";}return this.accountTransfersService.newAccountTranferResource(this.id,this.accountTypeId)}static \u0275fac=function(s){return new(s||i)(ie(I))};static \u0275prov=de({token:i,factory:i.\u0275fac})}return i})();var ce=(()=>{class i{accountTransfersService;settingsService;constructor(r,s){this.accountTransfersService=r,this.settingsService=s;}resolve(r){let s=r.parent.paramMap.get("standingInstructionsId"),o=this.settingsService.dateFormat,f=this.settingsService.language.code;return this.accountTransfersService.getStandingInstructionsTransactions(s,o,f)}static \u0275fac=function(s){return new(s||i)(ie(I),ie(yF))};static \u0275prov=de({token:i,factory:i.\u0275fac})}return i})();var se=(()=>{class i{accountTransfersService;constructor(r){this.accountTransfersService=r;}resolve(r){let s=r.paramMap.get("transferid");return this.accountTransfersService.getViewAccountTransferDetails(s)}static \u0275fac=function(s){return new(s||i)(ie(I))};static \u0275prov=de({token:i,factory:i.\u0275fac})}return i})();var Mi=[{path:"",children:[{path:"create-standing-instructions",data:{title:"Create Standing Instructions",breadcrumb:"Create Standing Instructions",routeParamBreadcrumb:"Create Standing Instructions"},component:he,resolve:{standingIntructionsTemplate:Jt}},{path:"make-account-transfer",data:{title:"Account Transfer",breadcrumb:"Account Transfer",routeParamBreadcrumb:"Account Transfer"},component:Ee,resolve:{accountTransferTemplate:me}},{path:"list-standing-instructions",data:{title:"List Standing Instructions",breadcrumb:"List Standing Instructions",routeParamBreadcrumb:"List Standing Instructions"},component:De,resolve:{standingIntructionsTemplate:Jt}},{path:"account-transfers",data:{title:"View Account Transfer",breadcrumb:"Account Transfers",routeParamBreadcrumb:false},children:[{path:":transferid",data:{routeParamBreadcrumb:"transferid"},component:Fe,resolve:{viewAccountTransferData:se}}]},{path:":standingInstructionsId",data:{title:"Standing Instructions",routeParamBreadcrumb:"standingInstructionsId"},children:[{path:"view",data:{title:"View Standing Instructions",breadcrumb:"view",routeParamBreadcrumb:false},component:ye,resolve:{standingInstructionsData:ae}},{path:"edit",data:{title:"Edit Standing Instructions",breadcrumb:"edit",routeParamBreadcrumb:false},component:_e,resolve:{standingInstructionsDataAndTemplate:oe}},{path:"list-account-transactions",data:{title:"List Account Transactions",breadcrumb:"List Account Transactions",routeParamBreadcrumb:"List Account Transactions"},component:Ae,resolve:{listTransactionData:ce}}]}]}],be=(()=>{class i{static \u0275fac=function(s){return new(s||i)};static \u0275mod=$({type:i});static \u0275inj=U({providers:[ae,oe,Jt,me,ce,se],imports:[O0e.forChild(Mi),O0e]})}return i})();var _a=(()=>{class i{static \u0275fac=function(s){return new(s||i)};static \u0275mod=$({type:i});static \u0275inj=U({providers:[_te],imports:[yQe,NQe,nXe,be]})}return i})();export{_a as AccountTransfersModule};