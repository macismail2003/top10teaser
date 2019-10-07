var oJSONF4Values = [];
oJSONF4Values.location =[];
oJSONF4Values.country =[];
oJSONF4Values.region =[];
oJSONF4Values.type =[];
oJSONF4Values.cate =[];

var oModelF4Values = new sap.ui.model.json.JSONModel();
oModelF4Values.setData(oJSONF4Values);

var oTemplatematerialDdl = new sap.ui.core.Item({
                                key:"{oModelmaterialDdl>key}",
                                text:"{oModelmaterialDdl>text}",
                            });

var oJSONALLShortageSurplusValues = [];
var oJSONShortageValues = [];
var oJSONSurplusValues = [];
var oJSONShortageValues2 = [];
var oJSONSurplusValues2 = [];
var oJSONSHORTAGESpecialValues = [];
var oJSONSURPLUSSpecialValues = [];

var locationData = [];
var productData = [];
var locationArray = [];
var productArray = [];
var locationFullArray = [];
var productFullArray = [];

jQuery.sap.require("sap.ui.model.json.JSONModel");
jQuery.sap.require("sap.ui.commons.MessageBox");
sap.ui.controller("zt10_inv_180618.main", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf zt10_inv_180618.main
*/
//	onInit: function() {
//
//	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf zt10_inv_180618.main
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf zt10_inv_180618.main
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf zt10_inv_180618.main
*/
//	onExit: function() {
//
//	}

	createContent : function(){
		var oCurrent = this;

		/* SURPLUS - Table - Details */

		var oSURPLUSTable = new sap.ui.table.Table("idSURPLUSTable",{
        title : "USA/Canada",
        selectionMode: sap.ui.table.SelectionMode.None,
				visibleRowCount: 10,
        columnHeaderVisible : false
		}).addStyleClass("sapUiSizeCompact tblBorder1");

			 oSURPLUSTable.addColumn(new sap.ui.table.Column({
	       label: new sap.ui.commons.Label({text: "City", textAlign: "Left"}).addStyleClass("wraptextcol"),
	 			 template: new sap.ui.commons.TextView("idSURPLUSTableCITY",{
	 			 }).bindProperty("text", "citydesc").addStyleClass("borderStyle1"),
	 	           resizable:false,
	 	           width:"70%"
	 			 }));

			 oSURPLUSTable.addColumn(new sap.ui.table.Column({
	             label: new sap.ui.commons.Label({text: "Surplus", textAlign: "Center"}).addStyleClass("wraptextcol"),
	 			 template: new sap.ui.commons.TextView("idSURPLUSTableVALUE",{
            textAlign : "Center"
	 			 }).bindProperty("text", "surplusshortage").addStyleClass("borderStyle1"),
	 	           resizable:false,
	 	           width:"30%"
	 			 }));

         /* SURPLUS1 - Table - Details */

         var oSURPLUSTable1 = new sap.ui.table.Table("idSURPLUSTable1",{
             title : "Rest of the world",
             selectionMode: sap.ui.table.SelectionMode.None,
             visibleRowCount: 10,
             columnHeaderVisible : false
         }).addStyleClass("sapUiSizeCompact tblBorder1");

            oSURPLUSTable1.addColumn(new sap.ui.table.Column({
              label: new sap.ui.commons.Label({text: "City", textAlign: "Left"}).addStyleClass("wraptextcol"),
              template: new sap.ui.commons.TextView("idSURPLUSTable1CITY",{
              }).bindProperty("text", "citydesc").addStyleClass("borderStyle1"),
                    resizable:false,
                    width:"70%"
              }));

            oSURPLUSTable1.addColumn(new sap.ui.table.Column({
                    label: new sap.ui.commons.Label({text: "Surplus", textAlign: "Center"}).addStyleClass("wraptextcol"),
              template: new sap.ui.commons.TextView("idSURPLUSTable1VALUE",{
                textAlign : "Center"
              }).bindProperty("text", "surplusshortage").addStyleClass("borderStyle1"),
                    resizable:false,
                    width:"30%"
              }));


	/* SHORTAGE - Table - Details */

		 		var oSHORTAGETable = new sap.ui.table.Table("idSHORTAGETable",{
             title : "China & AP",
		         selectionMode: sap.ui.table.SelectionMode.None,
		 				 visibleRowCount: 10,
             columnHeaderVisible : false
		 }).addStyleClass("sapUiSizeCompact tblBorder1");

 			 oSHORTAGETable.addColumn(new sap.ui.table.Column({
 	             label: new sap.ui.commons.Label({text: "City", textAlign: "Left"}).addStyleClass("wraptextcol"),
 	 			 template: new sap.ui.commons.TextView("idSHORTAGETableCITY",{
 	 			 }).bindProperty("text", "citydesc").addStyleClass("borderStyle1"),
 	 	           resizable:false,
 	 	           width:"70%"
 	 			 }));

 			 oSHORTAGETable.addColumn(new sap.ui.table.Column({
 	             label: new sap.ui.commons.Label({text: "Shortage", textAlign: "Center"}).addStyleClass("wraptextcol"),
 	 			 template: new sap.ui.commons.TextView("idSHORTAGETableVALUE",{
           textAlign : "Center"
 	 			 }).bindProperty("text", "surplusshortage").addStyleClass("borderStyle1"),
 	 	           resizable:false,
 	 	           width:"30%"
 	 			 }));

         /* SHORTAGE1 - Table - Details */

       		 		var oSHORTAGETable1 = new sap.ui.table.Table("idSHORTAGETable1",{
                   title : "Rest of the world",
       		         selectionMode: sap.ui.table.SelectionMode.None,
       		 				 visibleRowCount: 10,
                   columnHeaderVisible : false
       		 }).addStyleClass("sapUiSizeCompact tblBorder1");

        			 oSHORTAGETable1.addColumn(new sap.ui.table.Column({
        	             label: new sap.ui.commons.Label({text: "City", textAlign: "Left"}).addStyleClass("wraptextcol"),
        	 			 template: new sap.ui.commons.TextView("idSHORTAGETable1CITY",{
        	 			 }).bindProperty("text", "citydesc").addStyleClass("borderStyle1"),
        	 	           resizable:false,
        	 	           width:"70%"
        	 			 }));

        			 oSHORTAGETable1.addColumn(new sap.ui.table.Column({
        	             label: new sap.ui.commons.Label({text: "Shortage", textAlign: "Center"}).addStyleClass("wraptextcol"),
        	 			 template: new sap.ui.commons.TextView("idSHORTAGETable1VALUE",{
                   textAlign : "Center"
        	 			 }).bindProperty("text", "surplusshortage").addStyleClass("borderStyle1"),
        	 	           resizable:false,
        	 	           width:"30%"
        	 			 }));


	 /* Final - Layout */

			 var oFINALLayout = new sap.ui.layout.form.ResponsiveGridLayout("idFINALLayout",{
			 											labelSpanL: 1,
			 												labelSpanM: 1,
			 												labelSpanS: 1,
			 												emptySpanL: 0,
			 												emptySpanM: 0,
			 												emptySpanS: 0,
			 												columnsL: 4,
			 												columnsM: 4,
			 												columnsS: 2,
			 												// breakpointL: 765,
			 												// breakpointM: 320
			 										});

		 /* Final - Form */

		 var oFINALForm = new sap.ui.layout.form.Form("idFINALForm",{
		 			layout: oFINALLayout,
		 			formContainers: [
            new sap.ui.layout.form.FormContainer("idFINALFormSurplus",{
                title: "Surplus",
                formElements: [
                new sap.ui.layout.form.FormElement({
                    fields: [ oSURPLUSTable ]
                })
              ]
            }),

            new sap.ui.layout.form.FormContainer("idFINALFormSurplus1",{
		 									title: "\n",
		 									formElements: [
		 									new sap.ui.layout.form.FormElement({
		 											fields: [ oSURPLUSTable1 ]
		 									})
		 							]
		 				}),

            new sap.ui.layout.form.FormContainer("idFINALFormShortage",{
                title: "Shortage",
                formElements: [
                new sap.ui.layout.form.FormElement({
                    fields: [ oSHORTAGETable ]
                })
              ]
            }),

            new sap.ui.layout.form.FormContainer("idFINALFormShortage1",{
		 									title: "\n",
		 									formElements: [
		 									new sap.ui.layout.form.FormElement({
		 											fields: [ oSHORTAGETable1 ]
		 									})
		 							]
		 				}),


		 			]
		 		}).addStyleClass("marginTopBottom10");

        /* SHORTAGESPECIAL - Table - Details */

        var oSHORTAGESPECIALTable = new sap.ui.table.Table("idSHORTAGESPECIALTable",{
            selectionMode: sap.ui.table.SelectionMode.None
        }).addStyleClass("sapUiSizeCompact tblBorder1");

        oSHORTAGESPECIALTable.addColumn(new sap.ui.table.Column({
         			 label: new sap.ui.commons.Label({text: "Unit Type", textAlign: "Left"}).addStyleClass("wraptextcol"),
          template: new sap.ui.commons.TextView({
          }).bindProperty("text", "unittype").addStyleClass("borderStyle1"),
         			 resizable:false,
         			 width:"10%"
          }));

             oSHORTAGESPECIALTable.addColumn(new sap.ui.table.Column({
                     label: new sap.ui.commons.Label({text: "City", textAlign: "Left"}).addStyleClass("wraptextcol"),
               template: new sap.ui.commons.TextView({
               }).bindProperty("text", "citydesc").addStyleClass("borderStyle1"),
                     resizable:false,
                     width:"13%"
               }));

               oSHORTAGESPECIALTable.addColumn(new sap.ui.table.Column({
                 visible : false,
                       label: new sap.ui.commons.Label({text: "OWM In / Out", textAlign: "Left"}).addStyleClass("wraptextcol"),
                 template: new sap.ui.commons.TextView({
                 }).bindProperty("text", "owminout").addStyleClass("borderStyle1"),
                       resizable:false,
                       width:"10%"
                 }));

            oSHORTAGESPECIALTable.addColumn(new sap.ui.table.Column({
                    label: new sap.ui.commons.Label({text: "Qty to Move IN", textAlign: "Center"}).addStyleClass("wraptextcol"),
              template: new sap.ui.commons.TextView({
                textAlign: "Center"
              }).bindProperty("text", "qtymove").addStyleClass("borderStyle1"),
                    resizable:false,
                    width:"10%"
              }));

             // oSHORTAGESPECIALTable.addColumn(new sap.ui.table.Column({
             //         label: new sap.ui.commons.Label({text: "AVLB + AUTH - Booked", textAlign: "Left"}).addStyleClass("wraptextcol"),
             //   template: new sap.ui.commons.TextView({
             //   }).bindProperty("text", "avlbauthbooked").addStyleClass("borderStyle1"),
             //         resizable:false,
             //         width:"10%"
             //   }));
             //
             //   oSHORTAGESPECIALTable.addColumn(new sap.ui.table.Column({
             //           label: new sap.ui.commons.Label({text: "Target Inv", textAlign: "Left"}).addStyleClass("wraptextcol"),
             //     template: new sap.ui.commons.TextView({
             //     }).bindProperty("text", "targetinv").addStyleClass("borderStyle1"),
             //           resizable:false,
             //           width:"10%"
             //     }));
             //
             //   oSHORTAGESPECIALTable.addColumn(new sap.ui.table.Column({
             //           label: new sap.ui.commons.Label({text: "Avg. of In Days", textAlign: "Left"}).addStyleClass("wraptextcol"),
             //     template: new sap.ui.commons.TextView({
             //     }).bindProperty("text", "avgindays").addStyleClass("borderStyle1"),
             //           resizable:false,
             //           width:"10%"
             //     }));
             //
             //     oSHORTAGESPECIALTable.addColumn(new sap.ui.table.Column({
             //             label: new sap.ui.commons.Label({text: "Port Rating", textAlign: "Left"}).addStyleClass("wraptextcol"),
             //       template: new sap.ui.commons.TextView({
             //       }).bindProperty("text", "portrating").addStyleClass("borderStyle1"),
             //             resizable:false,
             //             width:"10%"
             //       }));

               oSHORTAGESPECIALTable.addColumn(new sap.ui.table.Column({
                       label: new sap.ui.commons.Label({text: "Min/Max Incentives to be offered", textAlign: "Left"}).addStyleClass("wraptextcol"),
                 template: new sap.ui.commons.TextView({
                 }).bindProperty("text", "incentives").addStyleClass("borderStyle1 wraptext"),
                       resizable:false,
                       width:"10%"
                 }));

                 oSHORTAGESPECIALTable.addColumn(new sap.ui.table.Column({
                         label: new sap.ui.commons.Label({text: "Comment", textAlign: "Left"}).addStyleClass("wraptextcol"),
                   template: new sap.ui.commons.TextView({
                   }).bindProperty("text", "reason").addStyleClass("borderStyle1 wraptext"),
                         resizable:false,
                         width:"10%"
                   }));



                        /* SURPLUSSPECIAL - Table - Details */

                        var oSURPLUSSPECIALTable = new sap.ui.table.Table("idSURPLUSSPECIALTable",{
                            selectionMode: sap.ui.table.SelectionMode.None
                        }).addStyleClass("sapUiSizeCompact tblBorder1");

                        oSURPLUSSPECIALTable.addColumn(new sap.ui.table.Column({
                         			 label: new sap.ui.commons.Label({text: "Unit Type", textAlign: "Left"}).addStyleClass("wraptextcol"),
                          template: new sap.ui.commons.TextView({
                          }).bindProperty("text", "unittype").addStyleClass("borderStyle1"),
                         			 resizable:false,
                         			 width:"10%"
                          }));

                             oSURPLUSSPECIALTable.addColumn(new sap.ui.table.Column({
                                     label: new sap.ui.commons.Label({text: "City", textAlign: "Left"}).addStyleClass("wraptextcol"),
                               template: new sap.ui.commons.TextView({
                               }).bindProperty("text", "citydesc").addStyleClass("borderStyle1"),
                                     resizable:false,
                                     width:"13%"
                               }));

                               oSURPLUSSPECIALTable.addColumn(new sap.ui.table.Column({
                                 visible : false,
                                       label: new sap.ui.commons.Label({text: "OWM In / Out", textAlign: "Left"}).addStyleClass("wraptextcol"),
                                 template: new sap.ui.commons.TextView({
                                 }).bindProperty("text", "owminout").addStyleClass("borderStyle1"),
                                       resizable:false,
                                       width:"10%"
                                 }));

                            oSURPLUSSPECIALTable.addColumn(new sap.ui.table.Column({
                                    label: new sap.ui.commons.Label({text: "Qty to Move OUT", textAlign: "Center"}).addStyleClass("wraptextcol"),
                              template: new sap.ui.commons.TextView({
                                textAlign: "Center"
                              }).bindProperty("text", "qtymove").addStyleClass("borderStyle1"),
                                    resizable:false,
                                    width:"10%"
                              }));

                             // oSHORTAGESPECIALTable.addColumn(new sap.ui.table.Column({
                             //         label: new sap.ui.commons.Label({text: "AVLB + AUTH - Booked", textAlign: "Left"}).addStyleClass("wraptextcol"),
                             //   template: new sap.ui.commons.TextView({
                             //   }).bindProperty("text", "avlbauthbooked").addStyleClass("borderStyle1"),
                             //         resizable:false,
                             //         width:"10%"
                             //   }));
                             //
                             //   oSHORTAGESPECIALTable.addColumn(new sap.ui.table.Column({
                             //           label: new sap.ui.commons.Label({text: "Target Inv", textAlign: "Left"}).addStyleClass("wraptextcol"),
                             //     template: new sap.ui.commons.TextView({
                             //     }).bindProperty("text", "targetinv").addStyleClass("borderStyle1"),
                             //           resizable:false,
                             //           width:"10%"
                             //     }));
                             //
                             //   oSHORTAGESPECIALTable.addColumn(new sap.ui.table.Column({
                             //           label: new sap.ui.commons.Label({text: "Avg. of In Days", textAlign: "Left"}).addStyleClass("wraptextcol"),
                             //     template: new sap.ui.commons.TextView({
                             //     }).bindProperty("text", "avgindays").addStyleClass("borderStyle1"),
                             //           resizable:false,
                             //           width:"10%"
                             //     }));
                             //
                             //     oSHORTAGESPECIALTable.addColumn(new sap.ui.table.Column({
                             //             label: new sap.ui.commons.Label({text: "Port Rating", textAlign: "Left"}).addStyleClass("wraptextcol"),
                             //       template: new sap.ui.commons.TextView({
                             //       }).bindProperty("text", "portrating").addStyleClass("borderStyle1"),
                             //             resizable:false,
                             //             width:"10%"
                             //       }));

                               oSURPLUSSPECIALTable.addColumn(new sap.ui.table.Column({
                                       label: new sap.ui.commons.Label({text: "Min/Max Incentives to be offered", textAlign: "Left"}).addStyleClass("wraptextcol"),
                                 template: new sap.ui.commons.TextView({
                                 }).bindProperty("text", "incentives").addStyleClass("borderStyle1 wraptext"),
                                       resizable:false,
                                       width:"10%"
                                 }));

                                 oSURPLUSSPECIALTable.addColumn(new sap.ui.table.Column({
                                         label: new sap.ui.commons.Label({text: "Comment", textAlign: "Left"}).addStyleClass("wraptextcol"),
                                   template: new sap.ui.commons.TextView({
                                   }).bindProperty("text", "reason").addStyleClass("borderStyle1 wraptext"),
                                         resizable:false,
                                         width:"10%"
                                   }));

                                   /* Final1 - Layout */

                                       var oFINAL1Layout = new sap.ui.layout.form.ResponsiveGridLayout("idFINAL1Layout",{
                                                            labelSpanL: 1,
                                                              labelSpanM: 1,
                                                              labelSpanS: 1,
                                                              emptySpanL: 0,
                                                              emptySpanM: 0,
                                                              emptySpanS: 0,
                                                              columnsL: 1,
                                                              columnsM: 1,
                                                              columnsS: 1,
                                                              breakpointL: 765,
                                                              breakpointM: 320
                                                          });

                                     /* Final - Form */

                                     var oFINAL1Form = new sap.ui.layout.form.Form("idFINAL1Form",{
                                          layout: oFINAL1Layout,
                                          formContainers: [
                                            new sap.ui.layout.form.FormContainer("idFINALFormSURPLUSSPECIAL",{
                                                title: "Surplus - Ad-Hoc/Urgent OWM Requirement",
                                                formElements: [
                                                new sap.ui.layout.form.FormElement({
                                                    fields: [ oSURPLUSSPECIALTable ]
                                                })
                                            ]
                                          }),

                                          new sap.ui.layout.form.FormContainer("idFINALFormSHORTAGESPECIAL",{
                                                      title: "Shortage - Ad-Hoc/Urgent OWM Requirement",
                                                      formElements: [
                                                      new sap.ui.layout.form.FormElement({
                                                          fields: [ oSHORTAGESPECIALTable ]
                                                      })
                                                  ]
                                                })

                                          ]
                                        }).addStyleClass("marginTopBottom10");

		oCurrent.setValuesShortageSurplus("Lease", "ADHOC");

		return sap.m.FlexBox({
			direction : "Column",
			items : [oFINALForm, oFINAL1Form],
		});

	},

  setSlideValues : function(process, matnr){

    if(matnr == "ADHOC"){
      sap.ui.getCore().byId("idFINALForm").setVisible(false);
      sap.ui.getCore().byId("idFINAL1Form").setVisible(true);
    }else{
      sap.ui.getCore().byId("idFINALForm").setVisible(true);
      sap.ui.getCore().byId("idFINAL1Form").setVisible(false);
    }

    if(sap.ui.getCore().byId("idPageMain"))
      sap.ui.getCore().byId("idPageMain").setBusy(true);

    oJSONSurplusValues = [];
    oJSONShortageValues = [];
    oJSONSurplusValues1 = [];
    oJSONShortageValues1 = [];
    oJSONSHORTAGESpecialValues = [];
    oJSONSURPLUSSpecialValues = [];

      var specialProcess = "";

        if(process == "Lease")
          process = "LEA";
        else if(process == "Sale")
          process = "SALE";

        if(process == "LEA")
          specialProcess = "LSP";
        else if(process == "SALE")
          specialProcess = "SSP";

    oJSONShortageValues.push({
      citydesc : "China",
      surplusshortage : "Unlim.",
    });
    for(var i=0;i<oJSONALLShortageSurplusValues.length;i++){
      if(oJSONALLShortageSurplusValues[i].Part == process && oJSONALLShortageSurplusValues[i].Matnr == matnr ){
        if(oJSONALLShortageSurplusValues[i].Odi < 0 ){
          if(oJSONALLShortageSurplusValues[i].Country == "CN"){

          }else if(oJSONALLShortageSurplusValues[i].Mregion == "AP$Asia-Pacific"){
            oJSONShortageValues.push({
              mregion : oJSONALLShortageSurplusValues[i].Mregion,
              region : oJSONALLShortageSurplusValues[i].Region,
              country : oJSONALLShortageSurplusValues[i].Country,
              city : oJSONALLShortageSurplusValues[i].City,
              regiondesc : oJSONALLShortageSurplusValues[i].ZRegDesc,
              countrydesc : oJSONALLShortageSurplusValues[i].ZCouDesc,
              citydesc : oJSONALLShortageSurplusValues[i].ZCityDesc,
              pcate : oJSONALLShortageSurplusValues[i].Pcate,
              pclass : oJSONALLShortageSurplusValues[i].Pclass,
              matnr : oJSONALLShortageSurplusValues[i].Matnr,
              maktx : oJSONALLShortageSurplusValues[i].Maktx,
              surplusshortage : oJSONALLShortageSurplusValues[i].Odi,
              qtymove : oJSONALLShortageSurplusValues[i].Qtymove,
              avlbauthbooked : oJSONALLShortageSurplusValues[i].Avlb,
              targetinv : oJSONALLShortageSurplusValues[i].Tdi,
              avgindays : oJSONALLShortageSurplusValues[i].Indaysavg,
              portrating : oJSONALLShortageSurplusValues[i].Por,
              maxpucr : oJSONALLShortageSurplusValues[i].Pcr,
            });
          }
          else{
            oJSONShortageValues1.push({
              mregion : oJSONALLShortageSurplusValues[i].Mregion,
              region : oJSONALLShortageSurplusValues[i].Region,
              country : oJSONALLShortageSurplusValues[i].Country,
              city : oJSONALLShortageSurplusValues[i].City,
              regiondesc : oJSONALLShortageSurplusValues[i].ZRegDesc,
              countrydesc : oJSONALLShortageSurplusValues[i].ZCouDesc,
              citydesc : oJSONALLShortageSurplusValues[i].ZCityDesc,
              pcate : oJSONALLShortageSurplusValues[i].Pcate,
              pclass : oJSONALLShortageSurplusValues[i].Pclass,
              matnr : oJSONALLShortageSurplusValues[i].Matnr,
              maktx : oJSONALLShortageSurplusValues[i].Maktx,
              surplusshortage : oJSONALLShortageSurplusValues[i].Odi,
              qtymove : oJSONALLShortageSurplusValues[i].Qtymove,
              avlbauthbooked : oJSONALLShortageSurplusValues[i].Avlb,
              targetinv : oJSONALLShortageSurplusValues[i].Tdi,
              avgindays : oJSONALLShortageSurplusValues[i].Indaysavg,
              portrating : oJSONALLShortageSurplusValues[i].Por,
              maxpucr : oJSONALLShortageSurplusValues[i].Pcr,
            });
          }
        }else if(oJSONALLShortageSurplusValues[i].Odi > 0){
          if(oJSONALLShortageSurplusValues[i].Country == "CA" || oJSONALLShortageSurplusValues[i].Country == "US"){
          oJSONSurplusValues.push({
            mregion : oJSONALLShortageSurplusValues[i].Mregion,
            region : oJSONALLShortageSurplusValues[i].Region,
            country : oJSONALLShortageSurplusValues[i].Country,
            city : oJSONALLShortageSurplusValues[i].City,
            regiondesc : oJSONALLShortageSurplusValues[i].ZRegDesc,
            countrydesc : oJSONALLShortageSurplusValues[i].ZCouDesc,
            citydesc : oJSONALLShortageSurplusValues[i].ZCityDesc,
            pcate : oJSONALLShortageSurplusValues[i].Pcate,
            pclass : oJSONALLShortageSurplusValues[i].Pclass,
            matnr : oJSONALLShortageSurplusValues[i].Matnr,
            maktx : oJSONALLShortageSurplusValues[i].Maktx,
            surplusshortage : oJSONALLShortageSurplusValues[i].Odi,
            qtymove : oJSONALLShortageSurplusValues[i].Qtymove,
            avlbauthbooked : oJSONALLShortageSurplusValues[i].Avlb,
            targetinv : oJSONALLShortageSurplusValues[i].Tdi,
            avgindays : oJSONALLShortageSurplusValues[i].Indaysavg,
            portrating : oJSONALLShortageSurplusValues[i].Por,
            maxpucr : oJSONALLShortageSurplusValues[i].Pcr,
          });
        }else{
          oJSONSurplusValues1.push({
            mregion : oJSONALLShortageSurplusValues[i].Mregion,
            region : oJSONALLShortageSurplusValues[i].Region,
            country : oJSONALLShortageSurplusValues[i].Country,
            city : oJSONALLShortageSurplusValues[i].City,
            regiondesc : oJSONALLShortageSurplusValues[i].ZRegDesc,
            countrydesc : oJSONALLShortageSurplusValues[i].ZCouDesc,
            citydesc : oJSONALLShortageSurplusValues[i].ZCityDesc,
            pcate : oJSONALLShortageSurplusValues[i].Pcate,
            pclass : oJSONALLShortageSurplusValues[i].Pclass,
            matnr : oJSONALLShortageSurplusValues[i].Matnr,
            maktx : oJSONALLShortageSurplusValues[i].Maktx,
            surplusshortage : oJSONALLShortageSurplusValues[i].Odi,
            qtymove : oJSONALLShortageSurplusValues[i].Qtymove,
            avlbauthbooked : oJSONALLShortageSurplusValues[i].Avlb,
            targetinv : oJSONALLShortageSurplusValues[i].Tdi,
            avgindays : oJSONALLShortageSurplusValues[i].Indaysavg,
            portrating : oJSONALLShortageSurplusValues[i].Por,
            maxpucr : oJSONALLShortageSurplusValues[i].Pcr,
          });
        }
      }
    }

      if(oJSONALLShortageSurplusValues[i].Part == specialProcess){ // && oJSONALLShortageSurplusValues[i].Matnr == matnr
        if(oJSONALLShortageSurplusValues[i].Odi < 0){
          oJSONSHORTAGESpecialValues.push({
            mregion : oJSONALLShortageSurplusValues[i].Mregion,
            region : oJSONALLShortageSurplusValues[i].Region,
            country : oJSONALLShortageSurplusValues[i].Country,
            city : oJSONALLShortageSurplusValues[i].City,
            regiondesc : oJSONALLShortageSurplusValues[i].ZRegDesc,
            countrydesc : oJSONALLShortageSurplusValues[i].ZCouDesc,
            citydesc : oJSONALLShortageSurplusValues[i].ZCityDesc,
            pcate : oJSONALLShortageSurplusValues[i].Pcate,
            pclass : oJSONALLShortageSurplusValues[i].Pclass,
            matnr : oJSONALLShortageSurplusValues[i].Matnr,
            maktx : oJSONALLShortageSurplusValues[i].Maktx,
            surplusshortage : oJSONALLShortageSurplusValues[i].Odi,
            qtymove : oJSONALLShortageSurplusValues[i].Qtymove,
            avlbauthbooked : oJSONALLShortageSurplusValues[i].Avlb,
            targetinv : oJSONALLShortageSurplusValues[i].Tdi,
            avgindays : oJSONALLShortageSurplusValues[i].Indaysavg,
            portrating : oJSONALLShortageSurplusValues[i].Por,
            maxpucr : oJSONALLShortageSurplusValues[i].Pcr,
            incentives : oJSONALLShortageSurplusValues[i].Incentives,
            unittype : oJSONALLShortageSurplusValues[i].Matnr,
            owminout : "IN",
            reason : oJSONALLShortageSurplusValues[i].Reason
          });
      }else if(oJSONALLShortageSurplusValues[i].Odi > 0){
          oJSONSURPLUSSpecialValues.push({
            mregion : oJSONALLShortageSurplusValues[i].Mregion,
            region : oJSONALLShortageSurplusValues[i].Region,
            country : oJSONALLShortageSurplusValues[i].Country,
            city : oJSONALLShortageSurplusValues[i].City,
            regiondesc : oJSONALLShortageSurplusValues[i].ZRegDesc,
            countrydesc : oJSONALLShortageSurplusValues[i].ZCouDesc,
            citydesc : oJSONALLShortageSurplusValues[i].ZCityDesc,
            pcate : oJSONALLShortageSurplusValues[i].Pcate,
            pclass : oJSONALLShortageSurplusValues[i].Pclass,
            matnr : oJSONALLShortageSurplusValues[i].Matnr,
            maktx : oJSONALLShortageSurplusValues[i].Maktx,
            surplusshortage : oJSONALLShortageSurplusValues[i].Odi,
            qtymove : oJSONALLShortageSurplusValues[i].Qtymove,
            avlbauthbooked : oJSONALLShortageSurplusValues[i].Avlb,
            targetinv : oJSONALLShortageSurplusValues[i].Tdi,
            avgindays : oJSONALLShortageSurplusValues[i].Indaysavg,
            portrating : oJSONALLShortageSurplusValues[i].Por,
            maxpucr : oJSONALLShortageSurplusValues[i].Pcr,
            incentives : oJSONALLShortageSurplusValues[i].Incentives,
            unittype : oJSONALLShortageSurplusValues[i].Matnr,
            owminout : "OUT",
            reason : oJSONALLShortageSurplusValues[i].Reason
          });
      }
      }

      }



      /* Surplus Normal */

      var oModelSurplusValues = new sap.ui.model.json.JSONModel();
      oModelSurplusValues.setData({modelData: oJSONSurplusValues});

      var oSURPLUSTable = sap.ui.getCore().byId("idSURPLUSTable");
      oSURPLUSTable.setModel(oModelSurplusValues);
      //oSURPLUSTable.setVisibleRowCount(oJSONSurplusValues.length);
      oSURPLUSTable.bindRows("/modelData");

      /* Surplus1 Normal */

      var oModelSurplusValues1 = new sap.ui.model.json.JSONModel();
      oModelSurplusValues1.setData({modelData: oJSONSurplusValues1});

      var oSURPLUSTable1 = sap.ui.getCore().byId("idSURPLUSTable1");
      oSURPLUSTable1.setModel(oModelSurplusValues1);
      //oSURPLUSTable.setVisibleRowCount(oJSONSurplusValues.length);
      oSURPLUSTable1.bindRows("/modelData");

      /* Shortage Normal */

      var oModelShortageValues = new sap.ui.model.json.JSONModel();
      oModelShortageValues.setData({modelData: oJSONShortageValues});

      var oShortageTable = sap.ui.getCore().byId("idSHORTAGETable");
      oShortageTable.setModel(oModelShortageValues);
      //oShortageTable.setVisibleRowCount(oJSONShortageValues.length);
      oShortageTable.bindRows("/modelData");

      /* Shortage1 Normal */

      var oModelShortageValues1 = new sap.ui.model.json.JSONModel();
      oModelShortageValues1.setData({modelData: oJSONShortageValues1});

      var oShortageTable1 = sap.ui.getCore().byId("idSHORTAGETable1");
      oShortageTable1.setModel(oModelShortageValues1);
      //oShortageTable.setVisibleRowCount(oJSONShortageValues.length);
      oShortageTable1.bindRows("/modelData");

      /* Shortage Special */
      var oModelSHORTAGESpecialValues = new sap.ui.model.json.JSONModel();
      oModelSHORTAGESpecialValues.setData({modelData: oJSONSHORTAGESpecialValues});

      var oSHORTAGESPECIALTable = sap.ui.getCore().byId("idSHORTAGESPECIALTable");
      oSHORTAGESPECIALTable.setModel(oModelSHORTAGESpecialValues);
      oSHORTAGESPECIALTable.setVisibleRowCount(oJSONSHORTAGESpecialValues.length);
      oSHORTAGESPECIALTable.bindRows("/modelData");

      /* Surplus Special */
      var oModelSURPLUSSpecialValues = new sap.ui.model.json.JSONModel();
      oModelSURPLUSSpecialValues.setData({modelData: oJSONSURPLUSSpecialValues});

      var oSURPLUSSPECIALTable = sap.ui.getCore().byId("idSURPLUSSPECIALTable");
      oSURPLUSSPECIALTable.setModel(oModelSURPLUSSpecialValues);
      oSURPLUSSPECIALTable.setVisibleRowCount(oJSONSURPLUSSpecialValues.length);
      oSURPLUSSPECIALTable.bindRows("/modelData");

      /***********************************************************************/
      /* idSURPLUSTable */
      /***********************************************************************/

      var tabData = sap.ui.getCore().byId("idSURPLUSTable").getModel().getData().modelData;
      var tabDataLength = tabData.length;
      var colId = "";
      for(var i =0; i<tabDataLength; i++){

        colId = "idSURPLUSTableCITY-col0-row" + i;
        $("#"+colId).parent().parent().addClass("lightred");
        $("#"+colId).addClass("lightred");

        colId = "idSURPLUSTableVALUE-col1-row" + i;
        $("#"+colId).parent().parent().addClass("lightred");
        $("#"+colId).addClass("lightred");

      }

      sap.ui.getCore().byId("idSURPLUSTable").onAfterRendering = function() {

      if (sap.ui.table.Table.prototype.onAfterRendering) {
        sap.ui.table.Table.prototype.onAfterRendering.apply(this, arguments);
      }
      var tabData = sap.ui.getCore().byId("idSURPLUSTable").getModel().getData().modelData;
      var tabDataLength = tabData.length;
      var colId = "";
      for(var i =0; i<tabDataLength; i++){

        colId = "idSURPLUSTableCITY-col0-row" + i;
        $("#"+colId).parent().parent().addClass("lightred");
        $("#"+colId).addClass("lightred");

        colId = "idSURPLUSTableVALUE-col1-row" + i;
        $("#"+colId).parent().parent().addClass("lightred");
        $("#"+colId).addClass("lightred");

      }
    }




    /***********************************************************************/
    /* idSURPLUSTable1 */
    /***********************************************************************/

    var tabData = sap.ui.getCore().byId("idSURPLUSTable1").getModel().getData().modelData;
    var tabDataLength = tabData.length;
    var colId = "";
    for(var i =0; i<tabDataLength; i++){

      colId = "idSURPLUSTable1CITY-col0-row" + i;
      $("#"+colId).parent().parent().addClass("lightred");
      $("#"+colId).addClass("lightred");

      colId = "idSURPLUSTable1VALUE-col1-row" + i;
      $("#"+colId).parent().parent().addClass("lightred");
      $("#"+colId).addClass("lightred");

    }

    sap.ui.getCore().byId("idSURPLUSTable1").onAfterRendering = function() {

    if (sap.ui.table.Table.prototype.onAfterRendering) {
    sap.ui.table.Table.prototype.onAfterRendering.apply(this, arguments);
    }
      var tabData = sap.ui.getCore().byId("idSURPLUSTable1").getModel().getData().modelData;
      var tabDataLength = tabData.length;
      var colId = "";
      for(var i =0; i<tabDataLength; i++){

        colId = "idSURPLUSTable1CITY-col0-row" + i;
        $("#"+colId).parent().parent().addClass("lightred");
        $("#"+colId).addClass("lightred");

        colId = "idSURPLUSTable1VALUE-col1-row" + i;
        $("#"+colId).parent().parent().addClass("lightred");
        $("#"+colId).addClass("lightred");

      }
    }

    /***********************************************************************/
    /* idSHORTAGETable */
    /***********************************************************************/

    var tabData = sap.ui.getCore().byId("idSHORTAGETable").getModel().getData().modelData;
    var tabDataLength = tabData.length;
    var colId = "";
    for(var i =0; i<tabDataLength; i++){

      colId = "idSHORTAGETableCITY-col0-row" + i;
      $("#"+colId).parent().parent().addClass("lightgreen");
      $("#"+colId).addClass("lightgreen");

      colId = "idSHORTAGETableVALUE-col1-row" + i;
      $("#"+colId).parent().parent().addClass("lightgreen");
      $("#"+colId).addClass("lightgreen");

    }

    sap.ui.getCore().byId("idSHORTAGETable").onAfterRendering = function() {

    if (sap.ui.table.Table.prototype.onAfterRendering) {
    sap.ui.table.Table.prototype.onAfterRendering.apply(this, arguments);
    }
      var tabData = sap.ui.getCore().byId("idSHORTAGETable").getModel().getData().modelData;
      var tabDataLength = tabData.length;
      var colId = "";
      for(var i =0; i<tabDataLength; i++){

        colId = "idSHORTAGETableCITY-col0-row" + i;
        $("#"+colId).parent().parent().addClass("lightgreen");
        $("#"+colId).addClass("lightgreen");

        colId = "idSHORTAGETableVALUE-col1-row" + i;
        $("#"+colId).parent().parent().addClass("lightgreen");
        $("#"+colId).addClass("lightgreen");

      }
    }

    /***********************************************************************/
    /* idSHORTAGETable1 */
    /***********************************************************************/

    var tabData = sap.ui.getCore().byId("idSHORTAGETable1").getModel().getData().modelData;
    var tabDataLength = tabData.length;
    var colId = "";
    for(var i =0; i<tabDataLength; i++){

      colId = "idSHORTAGETable1CITY-col0-row" + i;
      $("#"+colId).parent().parent().addClass("lightgreen");
      $("#"+colId).addClass("lightgreen");

      colId = "idSHORTAGETable1VALUE-col1-row" + i;
      $("#"+colId).parent().parent().addClass("lightgreen");
      $("#"+colId).addClass("lightgreen");

    }

      sap.ui.getCore().byId("idSHORTAGETable1").onAfterRendering = function() {

      if (sap.ui.table.Table.prototype.onAfterRendering) {
        sap.ui.table.Table.prototype.onAfterRendering.apply(this, arguments);
      }

        var tabData = sap.ui.getCore().byId("idSHORTAGETable1").getModel().getData().modelData;
        var tabDataLength = tabData.length;
        var colId = "";
        for(var i =0; i<tabDataLength; i++){

          colId = "idSHORTAGETable1CITY-col0-row" + i;
          $("#"+colId).parent().parent().addClass("lightgreen");
          $("#"+colId).addClass("lightgreen");

          colId = "idSHORTAGETable1VALUE-col1-row" + i;
          $("#"+colId).parent().parent().addClass("lightgreen");
          $("#"+colId).addClass("lightgreen");

        }
      }

      sap.ui.getCore().byId("idSHORTAGESPECIALTable").onAfterRendering = function() {

      if (sap.ui.table.Table.prototype.onAfterRendering) {
        sap.ui.table.Table.prototype.onAfterRendering.apply(this, arguments);
      }

      var tabColumns = sap.ui.getCore().byId("idSHORTAGESPECIALTable").getColumns();
      var tabColumnsLength = tabColumns.length;
      for(var i=0; i<tabColumnsLength;i++){
          tabColumns[i].$().addClass("shortageSection");
      }
    }

    sap.ui.getCore().byId("idSURPLUSSPECIALTable").onAfterRendering = function() {

      if (sap.ui.table.Table.prototype.onAfterRendering) {
        sap.ui.table.Table.prototype.onAfterRendering.apply(this, arguments);
      }

      var tabColumns = sap.ui.getCore().byId("idSURPLUSSPECIALTable").getColumns();
      var tabColumnsLength = tabColumns.length;
      for(var i=0; i<tabColumnsLength;i++){
          tabColumns[i].$().addClass("surplusSection");
      }
    }


      if(sap.ui.getCore().byId("idPageMain"))
        sap.ui.getCore().byId("idPageMain").setBusy(false);

  },

	setValuesShortageSurplus : function(process, matnr){

    var oCurrent = this;

    if(sap.ui.getCore().byId("idPageMain"))
         sap.ui.getCore().byId("idPageMain").setBusy(true);

    if(oJSONALLShortageSurplusValues.length != 0){
      oCurrent.setSlideValues(process, matnr);
    }else{

		oModel = new sap.ui.model.odata.ODataModel(serviceTop10Url, true);
		OData.request({
		      requestUri: serviceTop10Url + "/getTOP10Set",
		      method: "GET",
		      dataType: 'json',
		      headers:
		       {
		          "X-Requested-With": "XMLHttpRequest",
		          "Content-Type": "application/json; charset=utf-8",
		          "DataServiceVersion": "2.0",
		          "X-CSRF-Token":"Fetch"
		      }
		    },
		    function (data, response){
					if(data.results.length == 0){
			    		sap.ui.commons.MessageBox.show("No Result Found.",
                    sap.ui.commons.MessageBox.Icon.WARNING,
                    "Warning",
                    [sap.ui.commons.MessageBox.Action.OK],
                    sap.ui.commons.MessageBox.Action.OK);

                    if(sap.ui.getCore().byId("idPageMain"))
					               sap.ui.getCore().byId("idPageMain").setBusy(false);
		    	}
				else{
          oJSONALLShortageSurplusValues = data.results;
          oCurrent.setSlideValues(process, matnr);
        }
			},
			function(err){
        if(sap.ui.getCore().byId("idPageMain"))
				    sap.ui.getCore().byId("idPageMain").setBusy(false);
		  });
      }
	}

});

function CheckIdleTime() {
    _idleSecondsCounter++;

    if (_idleSecondsCounter >= IDLE_TIMEOUT) {	// && !TimeoutFlag
    	TimeoutFlag = true;
    	//sap.ui.getCore().byId("idV_PieChart1--idCarouselTeaser").next();

      var nextKey = "";
      var selKey = sap.ui.getCore().byId("idSegmentedButtonBoxes").getSelectedKey();
      switch (selKey) {
        case "BX2":
            nextKey = "BW4";
            break;
        case "BW4":
            nextKey = "BX4";
            break;
        case "BX4":
            nextKey = "BW5";
            break;
        case "BW5":
            nextKey = "ADHOC";
            break;
        case "ADHOC":
            nextKey = "BX2";
            break;
      }


      sap.ui.getCore().byId("idSegmentedButtonBoxes").setSelectedKey(nextKey);
      var oThisController = sap.ui.getCore().byId("idmain1").getController();
      oThisController.setValuesShortageSurplus("Lease", nextKey);
    }
}
