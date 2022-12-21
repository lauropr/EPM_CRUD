sap.ui.define(
    [
        "./BaseController",
        "sap/ui/model/Filter",
        "sap/ui/model/FilterOperator"
    ], function (BaseController, Filter, FilterOperator) {
        "use strict";
        return BaseController.extend("tra0399.epm0399.controller.Main", {     
            onInit: function(){
            },

            aoPressionarItem: function(oEvent){
                //resgatar a coluna clicada
                let oColumnListItem = oEvent.getSource();

                // resgata o binding da coluna clicada. O Modelo não tem nome, então o getBindingContext fica sem parâmetro
                let oItem = oColumnListItem.getBindingContext().getObject();

                // resgata o ID do parceiro
                let iPartnerId = oItem.PartnerId;

                //resgata o Roteador
                let oRouter = this.getOwnerComponent().getRouter();

                //navega p/ rota de detalhe
                oRouter.navTo("RotaDetalhe", {
                    PartnerId: iPartnerId
                });

            },

            aoAdicionar: function(oEvent){
                let oRouter = this.getOwnerComponent().getRouter();
                oRouter.navTo("RotaAdicionar");
            },

            aoPesquisar: function(oEvent){

                //acessa a string de busca
                var sPesquisa = oEvent.getParameter("newValue");    

                //acessa a view, depois a tabela, depois o contexto de vínculo da agregação "items"
                var oBinding = this.getView().byId("parceiros").getBinding("items");

                //monta o objeto de filtro
                var oFilter = new Filter({
                    path: "PartnerName1",
                    operator: FilterOperator.Contains,
                    value1: sPesquisa
                });

                //monta array de filtros
                var aFilters = [ oFilter ];

                //executa o filtro
                oBinding.filter(aFilters);

            }


            });
        });