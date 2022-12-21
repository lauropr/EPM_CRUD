sap.ui.define(
    [
        "sap/ui/core/mvc/Controller",
        "sap/ui/core/Fragment"
    ],
    function(Controller, Fragment) {
      "use strict";
  
      return Controller.extend("tra0399.epm0399.controller.BaseController", {

        ajudaPesquisaPais: function(oEvent){

            //forma alternativa
            // var oPromise = Fragment.load({

            // });
            // oPromise.then(function(oDialog));

            Fragment.load({
                name: "tra0399.epm0399.view.fragment.paises",
                controller: this 
            }).then(function(oDialog){
                var oView = this.getView();
                oView.addDependent(oDialog);
                oDialog.open();
            }.bind(this));

        },

        aoSelecionarPais: function(oEvent){            
            //resgata o país selecionado
            var sPais = oEvent.getParameter("selectedItem").getTitle();

            //acessa o contexto de binding com o formulário (caminho para entrada vazia)
            var sCaminho = this.getView().getBindingContext().getPath();

            //concatena a propriedade Country que queremos popular
            sCaminho = sCaminho + "/Country";

            //passa valor para a propriedade
            var oModel = this.getView().getModel();
            oModel.setProperty(sCaminho, sPais);
        }        
    });
    }
  );
  